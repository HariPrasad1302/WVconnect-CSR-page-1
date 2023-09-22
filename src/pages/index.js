import { Inter } from 'next/font/google'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import AboutSection from '@/components/AboutSection'
import Mission from '@/components/OurMission'
import JoinUs from '@/components/whynow'
import EventDetails from '@/components/Eventdetails'
import EventHighlights from '@/components/EventHighlights'
import Gifts from '@/components/Gifts'
import Donate from '@/components/Donate'
import Commitment from '@/components/commitment'
import LegacyDiscover from '@/components/Leagacy'
import Genesis from '@/components/Genesis'
import PinnacleMoments from '@/components/Pinnacle'
import MediaChronicles from '@/components/Logo'
import Pledge from '@/components/pledge'
import Review1 from '@/components/review1'
import Review2 from '@/components/review2'
import Footer from '@/components/Footer'
import FAQComponent from '@/components/FAQ'
import ContactInfo from '@/components/ContactInfo'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection /> 
    <AboutSection/> 
    <Mission/>
    <JoinUs/>
    <EventDetails/>
    <EventHighlights/>
    <Gifts/>
    <Donate/>
   <Commitment/>
   <LegacyDiscover/>
   <Genesis/>
   <PinnacleMoments/>
   <MediaChronicles/>
   <Pledge/>
   <Review1/>
   <Review2/>
   <FAQComponent/>
   <ContactInfo/>
   <Footer/>
    </>
  )
}
