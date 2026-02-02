import Parser from 'rss-parser';
import { join } from 'path';

const parser = new Parser();
const FEED_URL = 'https://medium.com/feed/@martin.elarrea27';
const OUTPUT_FILE = join(import.meta.dir, '../src/shared/constants/medium-posts.json');

interface MediumPost {
  title?: string;
  link?: string;
  pubDate?: string;
  categories?: string[];
  image?: string | null;
  description?: string;
  author?: string;
}

async function fetchPosts() {
  console.log(`Fetching posts from ${FEED_URL}...`);
  try {
    const feed = await parser.parseURL(FEED_URL);
    
    console.log(`Found ${feed.items.length} items.`);

    const posts: MediumPost[] = feed.items.map(item => {
      const content = item['content:encoded'] || item.content || '';
      
      // Extract first image
      const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
      const image = imgMatch ? imgMatch[1] : null;

      // Basic HTML stripping for description
      const textContent = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      const description = textContent.length > 200 
        ? textContent.substring(0, 200) + '...'
        : textContent;

      return {
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        categories: item.categories || [],
        image: image,
        description: description,
        author: item.creator
      };
    });

    await Bun.write(OUTPUT_FILE, JSON.stringify(posts, null, 2));
    console.log(`Successfully saved ${posts.length} posts to ${OUTPUT_FILE}`);
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    process.exit(1);
  }
}

fetchPosts();
