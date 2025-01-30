export function BlogCard() {
  return (
    <div className="group/project flex min-h-64 w-full cursor-pointer flex-col-reverse items-center justify-center gap-4 rounded bg-muted/50 px-8 py-6 backdrop-blur-md hover:bg-accent md:flex-row md:gap-24 lg:gap-8">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-6xl font-bold text-muted-foreground/50">Comming soon...</p>
        </div>
      </div>
    </div>
  );
}

export function BlogList() {
  return (
    <div className="flex w-full flex-col gap-4">
      <BlogCard />
    </div>
  );
}
