import React from 'react'
import styles from './Button.module.css'

interface Props {
  title: string;
  variant: 'primary' | 'secondary' | 'tertiary';
  onClick: () => void;
  width?: string | number;
}

const Button: React.FC<Props> = ({ title, variant, onClick, width }) => {
  return (
    <div>
      <button 
        className={`${styles.button} ${styles[variant]} cursor-pointer w-full`}
        style={{ width: typeof width === 'number' ? `${width}px` : width }}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  )
}

export default Button