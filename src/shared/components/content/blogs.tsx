
export function BlogCard() {
  return (
      <div className="group/project flex w-full justify-center items-center cursor-pointer flex-col-reverse gap-4 rounded py-6 px-8 bg-accent/40 backdrop-blur-[2px] hover:bg-accent md:flex-row md:gap-24 lg:gap-8 min-h-64">
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
