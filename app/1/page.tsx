import Image from 'next/image'

import {Navbar1} from '@/components/navbar'
import {Hero1} from '@/components/hero'
import Footer from '@/components/footer'
import Faq from '@/components/faq'
import Testimonial from '@/components/testimonials'
import {Section1} from '@/components/section'
import {Section2} from '@/components/section'
import Feature from '@/components/feature'


export default function Home() {
  return (
    <div className='bg-black'>
      <Navbar1/>
      <Hero1/>
      <Section1/>
      <Section2/>
      <Feature/>
      <Testimonial/>
      <Faq/>
      <Footer/>
    </div>
  )
}
