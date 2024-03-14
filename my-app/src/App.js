
import Weather from './Weather'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUpPAge from './SignUpPAge'
import LoginPage from './LoginPage'
import Graph from './Graph'


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUpPAge/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/main' element={<Weather/>}/>
        <Route path='/graph/:name' element={<Graph/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App