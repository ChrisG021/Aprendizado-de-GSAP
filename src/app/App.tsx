
import Hero from '../components/layout/HeroSection'
import './App.css'

function App() {

  return (
    <div className='w-full h-full'>
      <main className='w-full min-h-screen h-full flex items-center flex-col'>
        <section className='container h-full min-h-screen flex'>
          <Hero/>
        </section>
      </main>
    </div>
  )
}

export default App
