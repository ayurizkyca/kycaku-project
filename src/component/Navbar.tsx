import React from 'react'
import kycakuLogo from '../assets/kycakuLogo.svg'
import styles from './Navbar.module.css'
import Button from './Button'

const Navbar: React.FC = () => {
  return (
    <>
      <div className={styles.navbar}>
        <a href="#">
          <img src={kycakuLogo} alt="logo kycaku"/>
        </a>
        <ul>
          <li>Landing</li>
          <li>Catalog</li>
          <li>Benefits</li>
          <li>Stories</li>
          <li>Maps</li>
        </ul>
        <Button title='Log In' variant='primary'/>
      </div>
    </>
  )
}

export default Navbar