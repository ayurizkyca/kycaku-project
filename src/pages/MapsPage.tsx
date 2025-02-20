import React from 'react'
import Navbar from '../component/Navbar'

const MapsPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <section className='flex flex-col text-center gap-[50px] py-[50px] px-[95px]'>
        <h1 className='text-[64px] text-[#FB437A] font-bold'>Find Us Easily <br />Our Store Locations</h1>
        <img className='rounded-2xl' src="src/assets/hero-maps.png" alt="img-maps-hero" />
        <p className='text-2xl text-[#9D9DBC]'>Discover our flower shops near you and experience the beauty of fresh, handpicked flowers in person. Visit us at any of our locations to explore our exclusive floral collections, customized bouquets, and same-day delivery options.</p>
      </section>
      <section className='flex flex-col px-[95px] gap-[50px]'>
        <h1 className='text-4xl font-bold text-[#FB437A]'>📍 Our Store Locations</h1>
        <div className='flex items-center gap-[30px]'>
          <img className='h-[300px] w-[500px] object-cover rounded-2xl' src="src/assets/store-1.png" alt="store 1" />
          <div className='text-[#9D9DBC] text-2xl'>
            <h1 className='text-[#FB437A] font-bold pb-[20px]'>🌸 Main Branch - Bandung</h1>
            <p>📍 <b className='text-[#5C5461]'>Address :</b> Jl.Setiabudi</p>
            <p>📞 <b className='text-[#5C5461]'>Contact :</b> 0987654321</p>
            <p>🕒 <b className='text-[#5C5461]'>Opening Hours :</b> Monday - Sunday, 9 AM - 8 PM</p>
            <p>🛍 <b className='text-[#5C5461]'>Services Available :</b> Walk-in purchases, custom orders, delivery pick-up</p>
          </div>
        </div>
        <div className='flex items-center gap-[30px]'>
          <div className='text-[#9D9DBC] text-2xl'>
            <h1 className='text-[#FB437A] font-bold pb-[20px]'>🌸 Main Branch - Bandung</h1>
            <p>📍 <b className='text-[#5C5461]'>Address :</b> Jl.Setiabudi</p>
            <p>📞 <b className='text-[#5C5461]'>Contact :</b> 0987654321</p>
            <p>🕒 <b className='text-[#5C5461]'>Opening Hours :</b> Monday - Sunday, 9 AM - 8 PM</p>
            <p>🚚 <b className='text-[#5C5461]'>Specialty :</b> Same-day flower delivery & event decoration services</p>
          </div>
          <img className='h-[300px] w-[500px] object-cover rounded-2xl' src="src/assets/store-2.png" alt="store 2" />
        </div>
        <div className='flex items-center gap-[30px]'>
          <img className='h-[300px] w-[500px] object-cover rounded-2xl' src="src/assets/store-3.png" alt="store 3" />
          <div className='text-[#9D9DBC] text-2xl'>
            <h1 className='text-[#FB437A] font-bold pb-[20px]'>🌸 Main Branch - Bandung</h1>
            <p>📍 <b className='text-[#5C5461]'>Address :</b> Jl.Setiabudi</p>
            <p>📞 <b className='text-[#5C5461]'>Contact :</b> 0987654321</p>
            <p>🕒 <b className='text-[#5C5461]'>Opening Hours :</b> Monday - Sunday, 9 AM - 8 PM</p>
            <p>🎁 <b className='text-[#5C5461]'>Exclusive Offers :</b> Special discounts on seasonal flowers</p>
          </div>
        </div>
        <iframe
          className='rounded-2xl'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093645!2d144.95592301531924!3d-37.8172099797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f5fdf1%3A0x52b3d3e42c6a3cbd!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sus!4v1599513614438!5m2!1sen!2sus"
          width="100%"
          height="450"
          // style="border:0;"
          // allowfullscreen=""
          loading="lazy"
        >
        </iframe>
      </section>
      <section className='px-[95px] py-[100px]'>
        <h1 className='text-4xl text-[#FB437A] font-bold text-center'>🌺 Why Visit Our Stores?</h1>
        <div className='flex justify-between pt-[50px]'>
          <div className='flex flex-col gap-4'>
            <div className='group border-2 rounded-4xl w-[600px] p-2 px-[30px] hover:bg-[#FB437A] transition-all duration-300'>
              <h1 className='text-[#FB437A] group-hover:text-[#EEEEEE]'>Experience Fresh Flowers In-Person </h1>
              <p className='hidden group-hover:block text-[#EEEEEE] transition-opacity duration-300'>See, smell, and choose the best blooms!</p>
            </div>
            <div className='group border-2 rounded-4xl w-[600px] p-2 px-[30px] hover:bg-[#FB437A] transition-all duration-300'>
              <h1 className='text-[#FB437A] group-hover:text-[#EEEEEE]'>Custom Orders & Personalization</h1>
              <p className='hidden group-hover:block text-[#EEEEEE] transition-opacity duration-300'>Work with our florists to create your dream bouquet.</p>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='group border-2 rounded-4xl w-[600px] p-2 px-[30px] hover:bg-[#FB437A] transition-all duration-300'>
              <h1 className='text-[#FB437A] group-hover:text-[#EEEEEE]'>Same-Day Pick-Up & Delivery</h1>
              <p className='hidden group-hover:block text-[#EEEEEE] transition-opacity duration-300'>Need flowers fast? We’ve got you covered!</p>
            </div>
            <div className='group border-2 rounded-4xl w-[600px] p-2 px-[30px] hover:bg-[#FB437A] transition-all duration-300'>
              <h1 className='text-[#FB437A] group-hover:text-[#EEEEEE]'>Floral Workshops & Events</h1>
              <p className='hidden group-hover:block text-[#EEEEEE] transition-opacity duration-300'>Join our exclusive floral arrangement classes.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='flex px-[95px] justify-between items-center pb-[100px]'>
        <h1 className='text-[64px] text-[#FB437A]'>Need Help? <br /> Contact Us!</h1>
        <div className='flex flex-col gap-6 text-2xl text-[#9D9DBC]'>
          <div>
            <p>💬 <b className='text-[#5C5461]'>Chat with us :</b> WhatsApp Link</p>
            <p>📧 <b className='text-[#5C5461]'>Email us :</b> kycaku.project@gmail.com</p>
            <p>📍 <b className='text-[#5C5461]'>Visit our main store :</b> Location</p>
          </div>
          <h1 className='text-[#5C5461]'>🚀 Find the nearest flower shop and make your moments bloom beautifully! 🌷✨</h1>
        </div>
      </section>
    </div>
  )
}

export default MapsPage
