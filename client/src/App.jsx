import React from 'react'


const App = () => {
  return (
    <div className='min-h-screen'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App