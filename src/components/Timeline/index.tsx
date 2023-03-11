function Year({ children }) {
  return (
    <div className={`flex justify-center items-center w-full text-[100px]`}>
      <p className='font-black text-white'>{children}</p>
    </div>
  );
}

function Divider() {
  return (
    <div className='flex justify-center w-full'>
      <div className='w-1 bg-white h-full' />
    </div>
  );
}

function Description({ children }) {
  return (
    <div className='flex justify-center items-center text-[30px]'>
      <p className='text-4xl text-white'>{children}</p>
    </div>
  );
}

function Timestamp({ children, reverse }) {
  const { year, description } = children;

  return (
    <div className='grid grid-cols-3 w-[80%] h-[80vh]'>
      {reverse && <Year>{year}</Year>}
      {!reverse && <Description>{description}</Description>}
      <Divider />
      {reverse && <Description>{description}</Description>}
      {!reverse && <Year>{year}</Year>}
    </div>
  );
}

function Connector() {
  return <div className='w-2 h-6 bg-white rounded-full' />;
}

function Timeline({ milestones }) {
  return (
    <div className='flex flex-col items-center w-full gap-20'>
      <div className='w-10 h-10 bg-white rounded-full' />
      {
        milestones.map((milestone, i) => (
          <>
            <Timestamp reverse={i % 2 === 0}>{milestone}</Timestamp>
            {i < milestones.length - 1 && <Connector />}
          </>
        ))
      }
      <div className='flex justify-center items-center w-10 h-10 border-2 border-white rounded-full z-2 after:content-[""] after:w-5 after:h-5 after:bg-white after:rounded-full' />
    </div>
  );
}

export { Timeline };
