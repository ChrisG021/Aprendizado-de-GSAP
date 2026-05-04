
import { useRef } from 'react'
import Hero from '../components/layout/HeroSection'
import GsapAdvanced from '../pages/GsapAdvanced'
import GsapFrom from '../pages/GsapFrom'
import GsapFromTo from '../pages/GsapFromTo'
import GsapScrollTrigger from '../pages/GsapScrollTrigger'
import GsapStagger from '../pages/GsapStagger'
import GsapTo from '../pages/GsapTo'
import './App.css'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import GsapIdeia from '../pages/GsapIdeia'
gsap.registerPlugin(ScrollTrigger);

function App() {
  const scrollRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.to('.progress-bar', {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      }
    })
  })
  return (
    <div className='w-full h-full '>
      <span className='progress-bar origin-left fixed w-full scale-x-0 h-2 top-0 left-0 bg-(--primary) z-10' />
      <main className='w-full min-h-screen h-full flex items-center flex-col'>
        <section className='container h-full min-h-screen flex'>
          <Hero />
        </section>
        <section className='container h-full min-h-screen flex'>
          <GsapTo />
        </section>
        <section className='container h-full min-h-screen flex'>
          <GsapFrom />
        </section>
        <section className='container h-full min-h-screen flex'>
          <GsapFromTo />
        </section>
        <section className='container h-full min-h-screen flex'>
          <GsapStagger />
        </section>
        <section className='container h-full min-h-screen flex'>
          <GsapScrollTrigger />
        </section>
        <section className='container h-full min-h-screen flex'>
          <GsapAdvanced />
        </section>
        <section className='container h-full min-h-screen flex'>
          <GsapIdeia />
        </section>


      </main>
    </div>
  )
}

export default App

