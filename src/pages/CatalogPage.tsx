import React from 'react'
import LayoutUser from './layout/LayoutUser'
import CardProduct from '../component/CardProduct'
import Button from '../component/Button'

const CatalogPage: React.FC = () => {
  return (
    <>
      <LayoutUser>
        <section>
          <h1>"Discover our fresh and <br /> beautiful flower collections for <br /> every special moment."</h1>
        </section>
        <section>
          <div>
            <div>
              <h1>Our Lovely Catalog</h1>
              <p>Choose for your special day</p>
            </div>
            <div>
              {/* untuk filter dan search */}
            </div>
          </div>
          <div className='listCard'>
            <CardProduct title='Lily Birthday' price={20000} image='src/assets/cardimage.png' />
            <CardProduct title='Lily Birthday' price={20000} image='src/assets/cardimage.png' />
            <CardProduct title='Lily Birthday' price={20000} image='src/assets/cardimage.png' />
            <CardProduct title='Lily Birthday' price={20000} image='src/assets/cardimage.png' />
          </div>
        </section>
        <section>
          <div>
            <h1>"Enjoy special discounts on our stunning flower collections <br />– perfect for brightening up any occasion! <br />Don't miss out!"</h1>
            <div>
              <p>
              "🎉 Welcome to our store! Enjoy a special 10% discount on your first purchase. <br />Use code WELCOME10 at checkout and make your moment extra special! 🌸"
              </p>
              <Button title='Use Code' variant='secondary'/>
            </div>
          </div>
        </section>
      </LayoutUser>
    </>
  )
}

export default CatalogPage