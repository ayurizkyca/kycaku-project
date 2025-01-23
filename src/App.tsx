import './App.css'
import Button from './component/Button'
import CardBenefit from './component/CardBenefit'
import CardProduct from './component/CardProduct'
import Navbar from './component/Navbar'
import { dataBenefit } from './data/dummyData'

function App() {
  return (
    <>
      <Navbar />
      <section className='hero'>
        <h2>"Blossom into moments of pure <br /> delight with our exquisite floral <br /> arrangements."</h2>
        <Button title='Chat with Admin' variant='primary' />
      </section>
      <section className='bestProduct'>
        <h3>Best Seller Bouquets</h3>
        <p>Choose for your special day</p>
        <div className='listCard'>
          <CardProduct title='Lily Birthday' price={20000} image='src/assets/cardimage.png' />
          <CardProduct title='Lily Birthday' price={20000} image='src/assets/cardimage.png' />
          <CardProduct title='Lily Birthday' price={20000} image='src/assets/cardimage.png' />
          <CardProduct title='Lily Birthday' price={20000} image='src/assets/cardimage.png' />
        </div>
      </section>
      <section className='benefit'>
        <div>
          <img src="src/assets/hero-benefit.png" alt="img-hero benefit" />
        </div>
        <div className='benefitDesc'>
          <h1>Extra Benefits</h1>
          <p>You drive safety and famous</p>
          <div className='benefitList'>
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
        <h1>Frequently Asked Questions</h1>
        <p>Discover more about our flower shop for helpful insights</p>
      </section>
    </>
  )
}

export default App
