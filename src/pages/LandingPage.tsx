import Button from '../component/Button'
import CardBenefit from '../component/CardBenefit'
import CardProduct from '../component/CardProduct'
import { dataBenefit } from '../data/dummyData'
import LayoutUser from './layout/LayoutUser'

function LandingPage() {
  return (
    <LayoutUser>
        <section className='hero'>
        <h2 className='font-bold text-[#FB437A] text-[46px] pb-4'>"Blossom into moments of pure <br /> delight with our exquisite floral <br /> arrangements."</h2>
        <Button title='Chat with Admin' variant='primary' />
      </section>
      <section className="p-[130px] bg-[rgba(251,67,122,0.15)]">
        <h3 className='text-3xl font-bold text-[#FB437A]'>Best Seller Bouquets</h3>
        <p className='text-[#4F4F4F] text-xl'>Choose for your special day</p>
        <div className='flex gap-4 py-4'>
          <CardProduct title='Lily Birthday' price={20000} image='src/assets/cardimage.png' />
          <CardProduct title='Lily Birthday' price={20000} image='src/assets/cardimage.png' />
          <CardProduct title='Lily Birthday' price={20000} image='src/assets/cardimage.png' />
          <CardProduct title='Lily Birthday' price={20000} image='src/assets/cardimage.png' />
        </div>
      </section>
      <section className='flex items-center justify-between p-[80px]'>
        <div>
          <img src="src/assets/hero-benefit.png" alt="img-hero benefit" />
        </div>
        <div>
          <h1 className='text-2xl text-[#5C5461] font-bold'>Extra Benefits</h1>
          <p className='text-[#4F4F4F]  text-xl font-light'>You drive safety and famous</p>
          <div className='mb-[50px] mt-4'>
            {dataBenefit.map((benefit) => (
              <CardBenefit
                description={benefit.description}
                image={benefit.image}
                title={benefit.title}
                key={benefit.id}
              />
            ))}
          </div>
          <Button title='See Our Catalog' variant='primary' />
        </div>
      </section>
      <section>
        <h1 className='text-[#5C5461] text-3xl font-bold'>Frequently Asked Questions</h1>
        <p className='text-[#9D9DBC]'>Discover more about our flower shop for helpful insights</p>
      </section>
    </LayoutUser>
  )
}

export default LandingPage
