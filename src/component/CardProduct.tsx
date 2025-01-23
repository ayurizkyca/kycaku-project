import React from 'react'
import styles from './CardProduct.module.css'
import { ShoppingCart } from 'lucide-react';

interface Props {
  title: string;
  price: number;
  image: string;
}

const CardProduct: React.FC<Props> = ({ title, price, image }) => {
  return (
    <div className={styles.cardProduct}>
      <div>
        <img src={image} alt="image card" />
      </div>
      <div className={styles.cardDesc}>
        <div>
          <p>{title}</p>
          <p className={styles.cardPrice}>Rp. {price}</p>
        </div>
        <ShoppingCart size={24} color="#4F4F4F"/>
      </div>
    </div>
  )
}

export default CardProduct