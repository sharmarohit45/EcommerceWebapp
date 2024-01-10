import React from 'react'
import MainCarausel from '../../components/HomeCarosel/MainCarausel'
import HomeSectionCard from '../../components/HomeSectionCard/HomeSectionCard'
import HomeSectionCaraosel from '../../components/HomeSectionCaraosel/HomeSectionCaraosel'
import { mens_kurta } from '../../../Data/Men/mens_kurta'
import Footer1 from '../../components/Footer/Footer1'

export default function HPage() {
  return (
    <>
    <MainCarausel/>
    <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCaraosel data={mens_kurta} section={"Men's Kurta"}/>
        <HomeSectionCaraosel data={mens_kurta} section={"Men's Shoes"}/>
        <HomeSectionCaraosel data={mens_kurta} section={"Men's Shirt"}/>
        <HomeSectionCaraosel data={mens_kurta} section={"Men's Saree"}/>
        <HomeSectionCaraosel data={mens_kurta} section={"Men's Dress"}/>
    </div>
    </>
  )
}
