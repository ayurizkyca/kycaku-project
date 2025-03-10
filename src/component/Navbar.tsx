import React from 'react'
import kycakuLogo from '../assets/kycakuLogo.svg'
import Button from './Button'
import { Link, useLocation } from 'react-router'
import { ROUTES } from '../constant/routesConstant'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'

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
        {/* <Button title='Log In' variant='primary' onClick={() => { }} /> */}
        <Dialog>
          <DialogTrigger asChild>
            {/* <Button variant="outline">Edit Profile</Button> */}
            <Button title='Log In' variant='primary' onClick={() => { }} />
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Welcome Back !</DialogTitle>
              <DialogDescription>
                Log in to your account to continue your shopping experience.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">
                  Password
                </Label>
                <Input id="password" className="col-span-3" />
              </div>
            </div>
            <DialogFooter className='flex flex-col'>
              <Button title='Create New Account' variant='tertiary' onClick={() => { }} />
              <Button title='Log In' variant='primary' onClick={() => { }} />
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}

export default Navbar