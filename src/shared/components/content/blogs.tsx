import mediumPosts from "@constants/medium-posts.json";
import { Badge } from "@components/ui/badge";

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  categories: string[];
  image: string;
  description: string;
  author: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <a href={post.link} target="_blank" rel="noreferrer">
      <div className="group/blog flex min-h-64 w-full cursor-pointer flex-col-reverse gap-4 rounded bg-muted/50 px-8 py-6 backdrop-blur-md hover:bg-accent md:flex-row md:gap-24 lg:gap-8">
        <div className="flex min-w-fit flex-col pt-2">
          <div className="box-border w-fit rounded border border-muted-foreground/30 group-hover/blog:border-muted-foreground/50 overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-40 h-24 rounded object-cover md:w-24 md:h-24" 
            />
          </div>
        </div>
        <div className="flex flex-col justify-between w-full">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                <p className="text-lg text-foreground font-medium">{post.title}</p>
                <p className="text-xs text-muted-foreground md:text-right whitespace-nowrap">
                    {new Date(post.pubDate).toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' })}
                </p>
            </div>
            <p className="text-md mb-4 text-muted-foreground line-clamp-3">{post.description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.categories.map((c) => (
              <Badge key={c}>{c}</Badge>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

export function BlogList() {
  return (
    <div className="flex w-full flex-col gap-4">
      {mediumPosts.map((post) => (
        <BlogCard key={post.link} post={post as BlogPost} />
      ))}
    </div>
  );
}
