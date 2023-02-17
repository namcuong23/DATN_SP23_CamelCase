import "./App.css"
import { Routes, Route } from 'react-router-dom'
import Register from './components/auth/Register'
import Home from './components/home/Home'
import LayoutEmployer from './components/layouts/LayoutWebsite/LayoutEmployer'
import PostAdd from './components/Posts/PostAdd'
import PostDetail from './components/Posts/PostDetail'
import PostEdit from './components/Posts/PostEdit'
import PostList from './components/Posts/PostList'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='register' element={<Register />} />
        <Route path='/' element={<LayoutEmployer />}>
          <Route index element={<Home />} />
          <Route path='posts' element={<PostList />} />
          <Route path='posts/add' element={<PostAdd />} />
          <Route path='posts/:id/edit' element={<PostEdit />} />
          <Route path='posts/:id' element={<PostDetail />} />
        </Route>
        <Route path='*' element={<h1>404 | NOT FOUND</h1>} />
      </Routes>

    </div>
  )
}

export default App
