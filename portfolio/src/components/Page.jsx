import React from 'react'
import Navbar from './Navbar'
import { Routes, Route } from "react-router"


function Page() {
    return (
        <div>
            <Navbar />
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes> */}
        </div>
    )
}

export default Page
