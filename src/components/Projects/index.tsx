function Project() {
  return (
    <div className='relative h-[300px]'>
      <div className='w-full h-full bg-gradient-to-r from-purple to-blue' />
      <p className='w-full h-full flex items-center justify-center text-white text-4xl'>Project</p>
    </div>
  );
}

function Projects() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
  );
}

export { Projects };
