import Parser from 'rss-parser';
import { join } from 'path';

const CHANNEL_ID = 'UCszWChVN8A-FuVoSeBgUk4Q';
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
const OUTPUT_FILE = join(import.meta.dir, '../src/shared/constants/youtube-videos.json');

const parser = new Parser({
  customFields: {
    item: [
      ['media:group', 'mediaGroup'],
      ['yt:videoId', 'videoId'],
    ],
  },
});

interface YoutubeVideo {
  title?: string;
  link?: string;
  pubDate?: string;
  videoId?: string;
  thumbnail?: string;
  description?: string;
}

async function fetchVideos() {
  console.log(`Fetching videos from ${FEED_URL}...`);
  try {
    const feed = await parser.parseURL(FEED_URL);

    console.log(`Found ${feed.items.length} items.`);

    const videos: YoutubeVideo[] = feed.items.map((item: any) => {
      const videoId = item.videoId;
      const mediaGroup = item.mediaGroup;
      const thumbnail = mediaGroup?.['media:thumbnail']?.[0]?.['$']?.url;
      const description = mediaGroup?.['media:description']?.[0];

      return {
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        videoId,
        thumbnail: thumbnail || (videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : null),
        description: description ? description.slice(0, 200) : '',
      };
    });

    await Bun.write(OUTPUT_FILE, JSON.stringify(videos, null, 2));
    console.log(`Successfully saved ${videos.length} videos to ${OUTPUT_FILE}`);
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    process.exit(1);
  }
}

fetchVideos();
