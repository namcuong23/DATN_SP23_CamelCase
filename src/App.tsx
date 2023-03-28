import "./App.css"
import { Routes, Route } from 'react-router-dom'
import Register from './components/auth/Register'
import Home from './components/home/Home'
import LayoutEmployer from './components/layouts/LayoutWebsite/LayoutEmployer'
import PostAdd from './components/Recruitment/Posts/PostAdd'
import PostDetail from './components/Recruitment/Posts/PostDetail'
import PostEdit from './components/Recruitment/Posts/PostEdit'
import PostList from './components/Recruitment/Posts/PostList'
import ProfileList from "./components/Recruitment/Manage Profile/ProfileList"
import VoucherList from "./components/Admin/Voucher/VoucherList"
import VoucherAdd from "./components/Admin/Voucher/VoucherAdd"
import VoucherEdit from "./components/Admin/Voucher/VoucherEdit"

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
          <Route path='manage-profile' element={<ProfileList />} />
        </Route>
        <Route path='/admin' element={<LayoutEmployer />}>
          <Route path='vouchers' element={<VoucherList />} />
          <Route path='vouchers/add' element={<VoucherAdd />} />
          <Route path='vouchers/:id/edit' element={<VoucherEdit />} />
        </Route>
        <Route path='*' element={<h1>404 | NOT FOUND</h1>} />
      </Routes>

    </div>
  )
}

export default App
