import React, { useEffect, useState } from 'react'
import Loading from './components/Loading'
import Page from './components/Page'
import Cursor from './components/Cursor'
import { AnimatePresence } from "framer-motion";

function App() {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [])



  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? <Loading key="loader" /> : <Page key="home" />}
      </AnimatePresence>
      <Cursor />
    </>
    // <Page />
  )
}

export default App
