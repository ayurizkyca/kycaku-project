import Button from '../component/Button'
import CardBenefit from '../component/CardBenefit'
import CardProduct from '../component/CardProduct'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
import { dataBenefit } from '../data/dummyData'
import LayoutUser from './layout/LayoutUser'
import { ROUTES } from '../constant/routesConstant'
import { useNavigate } from 'react-router'
import useProduct from '../hooks/useProduct'
import { capitalizeEachWord } from '../utils/textUtils'

function LandingPage() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const { products, loading, error } = useProduct();

  return (
    <LayoutUser>
      <section
        className="flex flex-col justify-center h-[700px] px-[95px] bg-cover"
        style={{ backgroundImage: "url('/src/assets/hero.png')" }}
      >
        <h2 className='font-bold text-[#FB437A] text-[46px] pb-4'>"Blossom into moments of pure <br /> delight with our exquisite floral <br /> arrangements."</h2>
        <Button
          title='Chat with Admin'
          variant='primary'
          onClick={() => window.location.href = "https://wa.me/6285175124992"}
        />
      </section>
      <section className="py-[130px] px-[95px] bg-[rgba(251,67,122,0.15)]">
        <h3 className='text-3xl font-bold text-[#FB437A]'>Best Seller Bouquets</h3>
        <p className='text-[#4F4F4F] text-xl pb-10'>Choose for your special day</p>
        <div className='grid grid-cols-4 gap-10'>
          {loading ? (
            <p>Loading....</p>
          ) : error ? (
            <p>Error loading products</p>
          ) : (
            products.map((product) => (
              <CardProduct
                key={product.id}
                title={capitalizeEachWord(product.name)}
                price={product.price}
                image={product.image}
              />
            ))
          )}
        </div>
      </section>
      <section className='flex items-center justify-between py-[80px] px-[95px]'>
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
          <Button
            title='See Our Catalog'
            variant='primary'
            onClick={() => navigate(ROUTES.CATALOG)}
          />
        </div>
      </section>
      <section className='w-full flex flex-col items-center px-[95px] pb-[200px]'>
        <div className='w-full pb-[50px] flex flex-col items-center'>
          <h1 className='text-[#5C5461] text-3xl font-bold'>Frequently Asked Questions</h1>
          <p className='text-[#9D9DBC]'>Discover more about our flower shop for helpful insights</p>
        </div>
        <div className='w-full'>
          <Accordion type="single" collapsible className="flex w-full items-center justify-around gap-4">
            <div className='flex flex-col gap-3 w-[600px]'>
              <AccordionItem value="item-1" className='border-2 px-4 rounded-4xl'>
                <AccordionTrigger className='font-semibold text-[#0D0C41]'>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className='border-2 px-4 rounded-4xl'>
                <AccordionTrigger className='font-semibold text-[#0D0C41]'>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className='border-2 px-4 rounded-4xl'>
                <AccordionTrigger className='font-semibold text-[#0D0C41]'>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you prefer.
                </AccordionContent>
              </AccordionItem>
            </div>
            <div className='flex flex-col gap-3 w-[600px]'>
              <AccordionItem value="item-4" className='border-2 px-4 rounded-4xl'>
                <AccordionTrigger className='font-semibold text-[#0D0C41]'>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className='border-2 px-4 rounded-4xl'>
                <AccordionTrigger className='font-semibold text-[#0D0C41]'>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className='border-2 px-4 rounded-4xl'>
                <AccordionTrigger className='font-semibold text-[#0D0C41]'>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you prefer.
                </AccordionContent>
              </AccordionItem>
            </div>
          </Accordion>
        </div>
      </section>
      <footer>
        <section className='bg-[rgba(251,67,122,0.15)] px-[95px] py-[100px] flex'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-[#FB437A] text-4xl font-bold'>Let your moments bloom with our <br /> vibrant bouquets.</h1>
            <p>Secure your floral delight instantly and blossom your day <br /> with exactly what you desire.</p>
            <Button title='Buy Now' variant='primary' onClick={() => navigate(ROUTES.CATALOG)} />
          </div>
          <img className='absolute right-20 top-740 transition-transform duration-300 hover:-translate-y-6' src="src/assets/footer-img.png" alt="footer-img" />
        </section>
        <section className='text-center p-2'>
          <p className='text-[#9D9DBC]'>kycaku.project@{currentYear}</p>
        </section>
      </footer>
    </LayoutUser>
  )
}

export default LandingPage
