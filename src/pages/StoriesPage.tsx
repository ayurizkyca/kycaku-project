import React from 'react'
import Navbar from '../component/Navbar'
import Button from '../component/Button'

const StoriesPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <section className='flex w-full gap-[50px]'>
        <div
          className='w-1/2 h-[800px] bg-cover flex flex-col justify-between p-[30px] rounded-r-[20px]'
          style={{ backgroundImage: "url('src/assets/hero-stories.png')" }}
        >
          <h1 className='text-[64px] font-bold text-[#FB437A]'>What Our <br /> Customers <br /> Say</h1>
          <p className='text-[#FB437A] text-end'>At kycaku.project, we believe that every bouquet tells a story. Here’s what our happy customers have to say about their experiences with us!</p>
        </div>
        <div>
          <h1 className='bg-[#FB437A] text-[#FFFFFF] p-4 rounded-l-[20px] text-2xl'>Heartfelt Experiences from Our Customers</h1>
          <div>
            <p>"I wanted to surprise my wife for our anniversary, and the bouquet from [Your Flower Shop] was beyond perfect! The flowers were fresh, vibrant, and beautifully arranged. She was so happy!"</p>
            <p>Anna & Daniel</p>
          </div>
        </div>
      </section>
      <section className='flex flex-col items-center'>
        <h1 className='text-[#FB437A] text-[46px] font-bold'>Share Your Moments with Us</h1>
        <div className='flex gap-4'>
          <img src="src/assets/testi-1.png" alt="testimoni" />
          <img src="src/assets/testi-2.png" alt="testimoni" />
          <img src="src/assets/testi-3.png" alt="testimoni" />
        </div>
        <div>
          <p>We love seeing our flowers in your special moments! Tag us on Instagram @kycaku.project or use #kycakuproject to get featured on our page!</p>
          <div className='flex items-center gap-4'>
            <Button title='Order Now' variant='primary' />
            <Button title='Write a Review' variant='tertiary' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default StoriesPage
