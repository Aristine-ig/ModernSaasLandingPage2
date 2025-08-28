import ArrowIcon from '@/assets/arrow-right.svg'
import cogImage from '@/assets/cog.png'
import Image from 'next/image';


export const Hero = () => {
  return (
    <section>
      <div className="container">
        <div>
          <div>
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">Chatblizz is here</div>
            <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-5">Pathway to Productivity</h1>
            <p className="text-xl text-[#010d3e] tracking-tight mt-5">Celebrate the joy of accomplishment with an app designed to automate your task&apos;s, motivate your efforts and celebrate your successes.</p>
          </div>
          <div className="flex gap-1 items-center mt-[30px]">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn btn-text gap-1">
              <span>Learn More</span>
              <ArrowIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div>
          <Image src={cogImage} alt='Cog Image' className='h-25 w-20' />
        </div>
      </div>
    </section>
  );
};
