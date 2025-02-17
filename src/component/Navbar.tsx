import React from 'react'
import kycakuLogo from '../assets/kycakuLogo.svg'
import Button from './Button'
import { Link, useLocation } from 'react-router'
import { ROUTES } from '../constant/routesConstant'

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? "text-[#FB437A]" : "text-[#9D9DBC] hover:text-[#FB437A]"

  return (
    <>
      <div className="sticky top-0 flex items-center h-[20px] bg-[#FFFEFE] py-[30px] justify-around">
        <Link to={ROUTES.ROOT}>
          <img src={kycakuLogo} alt="logo kycaku" />
        </Link>
        <ul className="flex gap-[30px] list-none text-[#9D9DBC]">
          <li className={isActive(ROUTES.ROOT)}>
            <Link to={ROUTES.ROOT}>
              Landing
            </Link>
          </li>
          <li className={isActive(ROUTES.CATALOG)}>
            <Link to={ROUTES.CATALOG}>
              Catalog
            </Link>
          </li>
          <li className={isActive(ROUTES.BENEFIT)}>
            <Link to={ROUTES.BENEFIT}>
              Benefits
            </Link>
          </li>
          <li className={isActive(ROUTES.STORIES)}>
            <Link to={ROUTES.STORIES}>
              Stories
            </Link>
          </li>
          <li className={isActive(ROUTES.MAPS)}>
            <Link to={ROUTES.MAPS}>
              Maps
            </Link>
          </li>
        </ul>
        <Button title='Log In' variant='primary' />
      </div>
    </>
  )
}

export default Navbar