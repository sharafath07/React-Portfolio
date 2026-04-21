import React, { useEffect, useState } from 'react'
import Loading from './components/Loading'
import Page from './components/Page'
import { AnimatePresence } from "motion/react";

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])



  return (
    <AnimatePresence mode="wait">
      {isLoading ? <Loading key="loader" /> : <Page key="home" />}
    </AnimatePresence>
    // <Page />
  )
}

export default App
