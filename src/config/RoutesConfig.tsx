import React from 'react'
import { Route, Routes } from 'react-router'
import { ROUTES } from '../constant/routesConstant'
import LandingPage from '../pages/LandingPage'
import CatalogPage from '../pages/CatalogPage'
import BenefitPage from '../pages/BenefitPage'
import StoriesPage from '../pages/StoriesPage'
import MapsPage from '../pages/MapsPage'

const RoutesConfig:React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<LandingPage/>}/>
      <Route path={ROUTES.CATALOG} element={<CatalogPage/>}/>
      <Route path={ROUTES.BENEFIT} element={<BenefitPage/>}/>
      <Route path={ROUTES.STORIES} element={<StoriesPage/>}/>
      <Route path={ROUTES.MAPS} element={<MapsPage/>}/>
    </Routes>
  )
}

export default RoutesConfig;