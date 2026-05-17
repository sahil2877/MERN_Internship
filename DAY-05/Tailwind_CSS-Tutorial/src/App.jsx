import { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ButtonsDemo from './components/ButtonsDemo'
import CardsDemo from './components/CardsDemo'
import AlertsDemo from './components/AlertsDemo'
import AvatarDemo from './components/AvatarDemo'
import FormDemo from './components/FormDemo'
import ProgressDemo from './components/ProgressDemo'
import TableDemo from './components/TableDemo'
import Footer from './components/Footer'

function App() {

  const [count, setCount] = useState(3)
  const [start, setStart] = useState(false)

  useEffect(() => {

    if (count > 0) {

      const timer = setTimeout(() => {
        setCount(count - 1)
      }, 1000)

      return () => clearTimeout(timer)

    } else {

      setStart(true)

    }

  }, [count])


  if (!start) {

    return (

      <div
        data-theme="cyberpunk"
        className="min-h-screen flex justify-center items-center bg-base-200"
      >

        <div className="text-center">

          <h1 className="text-8xl font-bold text-primary">

            <span className="countdown">
              <span style={{ "--value": count }}></span>
            </span>

          </h1>

          <p className="mt-5 text-2xl">
            Initializing Project...
          </p>

        </div>

      </div>

    )

  }


  return (

    <div className="bg-base-200 min-h-screen">

      <div data-theme={"cyberpunk"}>
        <Navbar />

        <Hero />
      </div>


      <ButtonsDemo />

      <CardsDemo />

      <AlertsDemo />

      <AvatarDemo />

      <FormDemo />

      <ProgressDemo />

      <TableDemo />

      <Footer />

    </div>

  )

}

export default App