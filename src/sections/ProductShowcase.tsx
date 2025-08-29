import productImage from '@/assets/product-image.png'
import Image from 'next/image';
import pyramidImage from '@/assets/pyramid.png';
import tubeImage from "@/assets/tube.png";

export const ProductShowcase = () => {
  return (
    <section className='bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-20 overflow-x-clip'>
      <div className="container">
        <div className='section-heading'>
          <div className='flex items-center justify-center'>
            <div className='tag'>Boost your productivity</div>
          </div>
          <h2 className='section-title mt-5'>
            A more effective way to manage your automations.
          </h2>
          <p className='section-description mt-2'>
            Effortlessly automate anything with our website in just few seconds.
          </p>
        </div>
        <div className='relative'>
          <Image src={productImage} className='mt-10' alt='Product Image' />
          <Image src={pyramidImage} alt='Pyramid Image' height={262} width={262} className='hidden md:block absolute -right-36 -top-32' />
          <Image src={tubeImage} height={248} alt='Tube Image' className='hidden md:block absolute bottom-24 -left-36' />
        </div>
      </div>
    </section>
  );
};
