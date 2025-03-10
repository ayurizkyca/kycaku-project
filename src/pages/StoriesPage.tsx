import React from 'react'
import Navbar from '../component/Navbar'
import Button from '../component/Button'
import CardReview from '../component/CardReview'
import { useNavigate } from 'react-router'
import { ROUTES } from '../constant/routesConstant'
import useReview from '../hooks/useReview'

const StoriesPage: React.FC = () => {
  const navigate = useNavigate()
  const { data, loading, error } = useReview()

  console.log(data);
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
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error loading reviews</p>
            ) : (data?.map((review) => (
              <CardReview
                description={review.comment}
                username={review.customerId?.username}
                star={review.rating}
              />
            )))
            }
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
          <p className='text-[#9D9DBC] text-xl text-center'>We love seeing our flowers in your special moments! <br /> Tag us on Instagram <b className='text-[#FB437A]'>@kycaku.project</b> or use <b className='text-[#FB437A]'>#kycakuproject</b> to get featured on our page!</p>
          <div className='flex justify-center gap-4 pt-[30px]'>
            <Button title='Order Now' variant='primary' onClick={() => navigate(ROUTES.CATALOG)} />
            <Button title='Write a Review' variant='tertiary' onClick={() => { }} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default StoriesPage
