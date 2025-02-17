import React from 'react'
import styles from './Button.module.css'

interface Props {
  title: string;
  variant: 'primary' | 'secondary' | 'tertiary';
}

const Button: React.FC<Props> = ({ title, variant }) => {
  return (
    <div>
      <button className={`${styles.button} ${styles[variant]}`}>{title}</button>
    </div>
  )
}

export default Button