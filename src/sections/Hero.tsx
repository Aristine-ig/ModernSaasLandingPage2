import ArrowIcon from '@/assets/arrow-right.svg'
import cogImage from '@/assets/cog.png'
import cylinderImage from '@/assets/cylinder.png'
import Image from 'next/image';


export const Hero = () => {
  return (
    <section className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_66%)]'>
      <div className="container">
        <div className='md:flex items-center'>
          {/* remove items-center for keeping both in same line */}
          <div className='md:w-[478px]'>
            <div>
              {/* <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">Chatblizz is here</div> */}
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-5">Pathway to Productivity</h1>
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

          <div className='mt-20 md:mt-0 md:h-[648px] flex-1 relative'>
            <Image src={cogImage} alt='Cog Image' className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6' />
            <Image src={cylinderImage} alt='Cylinder Image' width={220} height={220} className='hidden md:block -top-8 -left-32 md:absolute' />
          </div>
        </div>
      </div>
    </section>
  );
};
