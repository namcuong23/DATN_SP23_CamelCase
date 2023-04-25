import { Routes, Route } from 'react-router-dom'
import HomeClient from './components/home/HomeClient'
import HomeEmployer from './components/home/HomeEmployer'
import LayoutClient from './components/layouts/LayoutClient'
import LayoutWebsite from './components/layouts/LayoutEmployer'
import Jobdone from './components/pages/Jobdone'
import "./App.css"
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LayoutClient />}>
          <Route index element={<HomeClient />} />
        </Route>
        <Route path='/employs' element={<LayoutWebsite />}>
          <Route index element={<HomeEmployer />} />
        </Route>
        <Route path='/jobdones' element={<LayoutClient />}>
          <Route index element={<Jobdone />} />
        </Route>
        <Route path='*' element={<h1>404 | NOT FOUND</h1>} />
      </Routes>

    </div>
  )
}

export default App
