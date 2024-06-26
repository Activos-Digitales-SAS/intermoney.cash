import { Routes, Route } from 'react-router-dom';
import HomePeru from "./routes/HomePeru"
import HomeColombia from './routes/HomeColombia';
import Home from './routes/Home';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/colombia' element={<HomeColombia/>} />
        <Route path='/peru' element={<HomePeru/>} />
      </Routes>

    </>
  )
}

export default App
