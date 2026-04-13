import React, { useState } from 'react'
import Loading from './components/Loading'
import Page from './components/Page'

function App() {
  const [isLoading, setIsLoading] = useState(false)



  return (
    <div>
      {isLoading ? <Loading /> : <Page />}
    </div>
  )
}

export default App
