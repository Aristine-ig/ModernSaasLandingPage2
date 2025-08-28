import productImage from '@/assets/product-image.png'
import Image from 'next/image';
import pyramidImage from '@/assets/pyramid.png';

export const ProductShowcase = () => {
  return (
    <section className='bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-20'>
      <div className="container">
        <div className='max-w-[540px] mx-auto'>
          <div className='flex items-center justify-center'>
            <div className='tag'>Boost your productivity</div>
          </div>
          <h2 className='text-center text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-5'>
            A more effective way to manage your automations.
          </h2>
          <p className='text-center text-[19px] leading-[30px] tracking-tight text-[#010d3e] mt-1'>
            Effortlessly automate anything with our website in just few seconds.
          </p>
        </div>
        <div className='relative'>
          <Image src={productImage} className='mt-10' alt='Product Image'/>
          <Image src={pyramidImage} alt='Pyramid Image' className='absolute'/>
        </div>
      </div>
    </section>
  );
};
