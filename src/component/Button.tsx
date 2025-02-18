import React from 'react'
import styles from './Button.module.css'

interface Props {
  title: string;
  variant: 'primary' | 'secondary' | 'tertiary';
  onClick: () => void
}

const Button: React.FC<Props> = ({ title, variant, onClick }) => {
  return (
    <div>
      <button 
        className={`${styles.button} ${styles[variant]} cursor-pointer`}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  )
}

export default Button