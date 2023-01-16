import { useScrollProgress } from '@hooks';
import LogoWhite from '@assets/logo-white-alt.png';

function Navbar() {
  const progress = useScrollProgress();

  return (
    <div>
      <div className='w-full max-h-32 h-24 flex bg-black color border-b-[1px] text-white border-white/[.2]'>
        <div className='w-2/5 flex justify-center items-center'>
          <img src={LogoWhite} className='w-16'/>
        </div>
        <div className='w-1/5 flex justify-center items-center select-none hover:bg-blue'>About me</div>
        <div className='w-1/5 flex justify-center items-center select-none hover:bg-gradient-to-r from-blue to-purple'>Projects</div>
        <div className='w-1/5 flex justify-center items-center select-none hover:bg-purple'>Social</div>
      </div>
      <div
        className='w-full flex h-2 bg-gradient-to-r from-blue to-purple'
        style={{ transform: `translateX(${progress - 100}%)` }}
      ></div>
    </div>
  );
}

export { Navbar };