import React from 'react'
import LayoutUser from './layout/LayoutUser'
import CardProduct from '../component/CardProduct'
import Button from '../component/Button'
import { Input } from '../components/ui/input'
import { Search } from 'lucide-react'
import Combobox from '../components/ui/combobox'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../components/ui/pagination'
import useProduct from '../hooks/useProduct'
import { capitalizeEachWord } from '../utils/textUtils'

const CatalogPage: React.FC = () => {
  const dummyOptions = [
    { value: "rose-classic", label: "Rose Classic 🌹" },
    { value: "tulip-elegance", label: "Tulip Elegance 🌷" },
    { value: "lily-charm", label: "Lily Charm 🌺" },
    { value: "sunflower-bright", label: "Sunflower Bright 🌻" },
    { value: "orchid-grace", label: "Orchid Grace 🌸" },
    { value: "daisy-dream", label: "Daisy Dream 🌼" },
    { value: "peony-luxury", label: "Peony Luxury 💐" },
    { value: "hydrangea-romance", label: "Hydrangea Romance 💙" },
    { value: "lavender-serenity", label: "Lavender Serenity 💜" },
    { value: "mix-bouquet", label: "Mixed Bouquet 🌺🌼🌸" },
  ];

  const { data, loading, error } = useProduct();

  console.log(data);

  return (
    <>
      <LayoutUser>
        <section>
          <h1
            className='text-[#FB437A] text-[46px] font-bold text-center h-[500px] bg-cover flex justify-center items-center'
            style={{ backgroundImage: "url('/src/assets/hero_catalog.png')" }}
          >"Discover our fresh and <br /> beautiful flower collections for <br /> every special moment."</h1>
        </section>
        <section className='px-[95px] py-[50px]'>
          <div className='flex justify-between items-center pb-[30px]'>
            <div>
              <h1 className='text-[#FB437A] text-2xl font-bold'>Our Lovely Catalog</h1>
              <p className='text-[#4F4F4F]'>Choose for your special day</p>
            </div>
            <div className='flex gap-4'>
              {/* untuk filter dan search */}
              <div>
                <Combobox listOptions={dummyOptions} />
              </div>
              <div className="relative w-full max-w-md">
                <Input placeholder="Search Product" className="pr-[40px]" />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-4 gap-10'>
            {loading ? (
              <p>Loading....</p>
            ) : error ? (
              <p>Error loading products</p>
            ) : (
              data?.map((product) => (
                <CardProduct
                  key={product.id}
                  title={capitalizeEachWord(product.name)}
                  price={product.price}
                  image={product.image}
                />
              ))
            )}
          </div>
          <div className='py-[80px]'>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </section>
        <section className='px-[95px] pb-[100px]'>
          <div
            className='h-[450px] flex flex-col justify-around w-full rounded-2xl px-10 bg-cover'
            style={{ backgroundImage: "url('src/assets/img-catalog.png')" }}
          >
            <h1 className='text-4xl text-[#FB437A]'>"Enjoy special discounts on our stunning flower collections <br />– perfect for brightening up any occasion! <br />Don't miss out!"</h1>
            <div className='flex flex-col items-end gap-4'>
              <p className='text-[#FB437A] text-2xl'>
                "🎉 Welcome to our store! Enjoy <b>a special 10% discount</b> on your first purchase. <br />Use code <b>WELCOME10</b> at checkout and make your moment extra special! 🌸"
              </p>
              <Button title='Use Code' variant='secondary' onClick={()=>{}} />
            </div>
          </div>
        </section>
      </LayoutUser>
    </>
  )
}

export default CatalogPage