import React from 'react'
import styles from './CardProduct.module.css'

interface Props {
  image: string,
  description: string,
  title: string
}

const CardBenefit: React.FC<Props> = ({image, description, title}) => {
  return (
    <div className={styles.cardBenefit}>
      <img src={image} alt="img-card" />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default CardBenefit