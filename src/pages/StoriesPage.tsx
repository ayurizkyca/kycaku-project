import React from 'react'
import Navbar from '../component/Navbar'
import Button from '../component/Button'
import { Star } from 'lucide-react'
import CardReview from '../component/CardReview'
import { dataReviews } from '../data/dummyData'

const StoriesPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <section className='flex w-full gap-[50px]'>
        <div
          className='w-1/2 h-dvh bg-cover flex flex-col justify-between p-[30px] rounded-r-[20px]'
          style={{ backgroundImage: "url('src/assets/hero-stories.png')" }}
        >
          <h1 className='text-[64px] font-bold text-[#FB437A]'>What Our <br /> Customers <br /> Say</h1>
          <p className='text-[#FB437A] text-end'>At kycaku.project, we believe that every bouquet tells a story. Here’s what our happy customers have to say about their experiences with us!</p>
        </div>
        <div>
          <h1 className='bg-[#FB437A] text-[#FFFFFF] p-4 rounded-l-[20px] text-2xl'>Heartfelt Experiences from Our Customers</h1>
          <div className='flex flex-col mr-[50px] mt-[20px] gap-[20px]'>
            {dataReviews.map((review)=>(
              <CardReview 
                description={review.review.description}
                username={review.username}
                star={review.review.star}
              />
            ))}
          </div>
        </div>
      </section>
      <section className='flex flex-col items-center gap-[50px] p-[100px]'>
        <h1 className='text-[#FB437A] text-[46px] font-bold'>Share Your Moments with Us</h1>
        <div className='flex gap-4 pt'>
          <img src="src/assets/testi-1.png" alt="testimoni" />
          <img src="src/assets/testi-2.png" alt="testimoni" />
          <img src="src/assets/testi-3.png" alt="testimoni" />
        </div>
        <div>
          <p className='text-[#FB437A] text-xl text-center'>We love seeing our flowers in your special moments! <br /> Tag us on Instagram <b>@kycaku.project</b> or use <b>#kycakuproject</b> to get featured on our page!</p>
          <div className='flex justify-center gap-4 pt-[30px]'>
            <Button title='Order Now' variant='primary' />
            <Button title='Write a Review' variant='tertiary' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default StoriesPage
