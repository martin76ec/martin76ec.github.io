import { useScrollProgress } from '@hooks';
import LogoWhite from '@assets/logo-white-alt.png';

function Navbar() {
  const progress = useScrollProgress();

  return (
    <>
      <div
        className='w-full flex h-2 bg-gradient-to-r from-blue to-purple md:hidden'
        style={{ transform: `translateX(${progress - 100}%)` }}
      ></div>
      <div className='w-full max-h-32 h-24 flex border-white/[.2] border-t-[1px] md:border-t-0 xs:border-b-0 md:border-b-[1px] text-white backdrop-blur-xl'>
        <div className='w-1/6 md:w-2/5 flex justify-center items-center'>
          <img src={LogoWhite} className='w-6 md:w-16'/>
        </div>
        <div className='w-2/6 flex justify-center items-center select-none hover:bg-blue'>About me</div>
        <div className='w-2/6 flex justify-center items-center select-none hover:bg-gradient-to-r from-blue to-purple'>Projects</div>
        <div className='w-2/6 flex justify-center items-center select-none hover:bg-purple'>Social</div>
      </div>
      <div
        className='w-full flex h-2 bg-gradient-to-r from-blue to-purple hidden md:block'
        style={{ transform: `translateX(${progress - 100}%)` }}
      ></div>
    </>
  );
}

export { Navbar };