import React from 'react'

import imgSrc from './img.jpg'

const App = () => {
  // return React.createElement("h1", null, "Hello from App component!")
  return (
    <div>
      <img src={imgSrc} alt={'img from src'} style={{ height: 100 }} />
      <img src={`${process.env.PUBLIC_URL}/img.jpg`} alt={'img from public'} style={{ height: 100 }} />

    </div>
  )
}

export default App
