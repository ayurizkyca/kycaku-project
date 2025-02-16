import React from 'react'
import Navbar from '../component/Navbar'
import Button from '../component/Button'

const BenefitPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <section className='flex justify-between items-center px-[95px] bg-[#EEEEEE] py-4'>
        <div>
          <h1 className='text-[46px] font-bold text-[#FB437A]'>Extra Benefits of Our Floral Services</h1>
          <p className='text-2xl text-[#FB437A]'>We believe that every flower tells a story, and we are here to make <br /> sure yours is as beautiful and meaningful as possible. Here’s why our <br /> floral services stand out:</p>
        </div>
        <img src="src/assets/hero-benefit-page.png" alt="image benefit page" className='transition-transform duration-300 hover:-translate-y-3' />
      </section>
      <section className='flex px-[95px] py-[20px] gap-[20px] border-y-2 border-[rgba(251,67,122,0.15)]'>
        <img src="src/assets/benefit-1.png" alt="img-benefit"/>
        <div className='flex flex-col gap-[20px] justify-center'>
          <h1 className='text-[#FB437A] text-2xl font-bold'>💐 Boundless Floral Creativity</h1>
          <p className='text-[#FB437A]'>We bring you custom-designed bouquets tailored to your preferences, whether you desire a romantic, elegant, or whimsical floral touch. Our florists craft each bouquet with precision and passion, ensuring that every arrangement is a masterpiece.</p>
          <p className='text-[#FB437A]'>
            Why Choose This?
            <ul>
              <li>Custom floral designs for every occasion</li>
              <li>Handcrafted by expert florists</li>
              <li>Fresh, high-quality blooms that last</li>
            </ul>
          </p>
        </div>
      </section>
      <section className='flex px-[95px] py-[20px] justify-center gap-[20px] items-center border-y-2 border-t-0 border-[rgba(251,67,122,0.15)]'>
        <div className='flex flex-col gap-[20px]'>
          <h1 className='text-2xl text-[#FB437A] font-bold'>🌸 Premium Blossoms, Lasting Beauty</h1>
          <p className='text-[#FB437A]'>Timeless flowers that make a lasting impression. We select only the finest blooms to ensure your floral arrangements remain fresh and vibrant for longer. Whether for weddings, anniversaries, or heartfelt surprises, our flowers are designed to retain their beauty and elegance.</p>
          <p className='text-[#FB437A]'>
            What You Get:
            <ul>
              <li>Carefully selected premium flowers</li>
              <li>Long-lasting freshness and fragrance</li>
              <li>Expertly curated floral combinations</li>
            </ul>
          </p>
        </div>
        <img src="src/assets/benefit-2.png" alt="image-benefit" />
      </section>
      <section className='flex px-[95px] py-[20px] gap-[20px] border-y-2 border-t-0 border-[rgba(251,67,122,0.15)]'>
        <img src="src/assets/benefit-3.png" alt="img-benefit" />
        <div className='flex flex-col gap-[20px] justify-center'>
          <h1 className='text-[#FB437A] text-2xl font-bold'>💌 Personalized Floral Expressions</h1>
          <p className='text-[#FB437A]'>Express emotions with uniquely crafted floral messages.Flowers speak the language of the heart, and we make it extra special by allowing you to add personalized messages and designs. Customize your bouquet with a heartfelt note, a signature wrapping style, or a unique floral arrangement that matches the recipient s personality.</p>
          <p className='text-[#FB437A]'>
            Personalization Options:
            <ul>
              <li>Handwritten notes with your bouquet</li>
              <li>Special wrapping and themed arrangements</li>
              <li>Unique flower pairings for every personality</li>
            </ul>
          </p>
        </div>
      </section>
      <section className='flex px-[95px] py-[20px] justify-center gap-[20px] items-center border-y-2 border-t-0 border-[rgba(251,67,122,0.15)]'>
        <div className='flex flex-col gap-[20px]'>
          <h1 className='text-2xl text-[#FB437A] font-bold'>🚛 Effortless Elegance, Seamless Service</h1>
          <p className='text-[#FB437A]'>Hassle-free ordering with fast and reliable delivery.With our user-friendly online platform, ordering flowers has never been easier. Whether you're planning ahead or need a last-minute surprise gift, we ensure a smooth and timely delivery experience, bringing your heartfelt gestures to life.</p>
          <p className='text-[#FB437A]'>
            What We Offer:
            <ul>
              <li>Carefully selected premium flowers</li>
              <li>Long-lasting freshness and fragrance</li>
              <li>Expertly curated floral combinations</li>
            </ul>
          </p>
        </div>
        <img src="src/assets/benefit-4.png" alt="image-benefit" />
      </section>
      <section className='py-[50px] bg-[#EEEEEE] px-[95px]'>
        <h1 className='text-4xl text-[#FB437A] font-bold text-center'>Why Choose Us?</h1>
        <div className='flex justify-between pt-[50px]'>
          <div className='flex flex-col gap-4'>
            <div className='group border-2 rounded-4xl w-[600px] p-2 px-[30px] hover:bg-[#FB437A] transition-all duration-300'>
              <h1 className='text-[#FB437A] group-hover:text-[#EEEEEE]'>Fresh & Handpicked Flowers </h1>
              <p className='hidden group-hover:block text-[#EEEEEE] transition-opacity duration-300'>Only the best blooms make it into our arrangements</p>
            </div>
            <div className='group border-2 rounded-4xl w-[600px] p-2 px-[30px] hover:bg-[#FB437A] transition-all duration-300'>
              <h1 className='text-[#FB437A] group-hover:text-[#EEEEEE]'>Artistic Floral Designs</h1>
              <p className='hidden group-hover:block text-[#EEEEEE] transition-opacity duration-300'>Crafted with love by expert florists</p>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='group border-2 rounded-4xl w-[600px] p-2 px-[30px] hover:bg-[#FB437A] transition-all duration-300'>
              <h1 className='text-[#FB437A] group-hover:text-[#EEEEEE]'>Personalized Touch</h1>
              <p className='hidden group-hover:block text-[#EEEEEE] transition-opacity duration-300'>Every bouquet tells a story, and we help you tell yours</p>
            </div>
            <div className='group border-2 rounded-4xl w-[600px] p-2 px-[30px] hover:bg-[#FB437A] transition-all duration-300'>
              <h1 className='text-[#FB437A] group-hover:text-[#EEEEEE]'>Convenient & Reliable Service</h1>
              <p className='hidden group-hover:block text-[#EEEEEE] transition-opacity duration-300'>Easy ordering, fast delivery</p>
            </div>
          </div>
        </div>
        <div className='pt-[100px] flex justify-between items-center'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-4xl text-[#FB437A] font-bold'>Order Now & Make Every Moment <br /> Bloom with Beauty! 🌷</h1>
            <div className='flex gap-4'>
              <Button title='Customize Your Bouquet' variant='primary' />
              <Button title='Explore Our Collection' variant='secondary' />
            </div>
          </div>
          <img src="src/assets/footer-img.png" alt="image-benefit" className='transition-transform duration-300 hover:-translate-y-3'/>
        </div>
      </section>
    </div>
  )
}

export default BenefitPage
