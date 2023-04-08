import "./App.css"
import ProfileList from "./components/Recruitment/Manage Profile/ProfileList"
import { Routes, Route } from "react-router-dom"
import Register from '../src/components/auth/Register'
import LayoutClient from "./components/layouts/LayoutClient"
import HomeClient from "./components/employee/home/HomeClient"
import Login from "./components/auth/Login"
import OTPAuth from "./components/auth/OTPAuth"
import EmailAuth from "./components/auth/EmailAuth"
import PostList from "./components/employer/Posts/PostList"
import PostAdd from "./components/employer/Posts/PostAdd"
import PostEdit from "./components/employer/Posts/PostEdit"
import PostDetail from "./components/employer/Posts/PostDetail"
import LayoutEmployer from "./components/layouts/LayoutEmployer"
import Home from "./components/employer/home/HomeEmployer"
import WorkPage from "./components/employee/works/WorkPage"
import LayoutAdmin from "./components/layouts/LayoutAdmin"
import HomeAdmin from "./components/admin/home/HomeAdmin"
import Profile from "./components/employee/profile/Profile"
import RedirectRoute from "./privateRoute/RedirectRoute"
// import PrivateRoute from "./privateRoute/PrivateRoute"
import VoucherList from "./components/admin/Voucher/VoucherList"
import VoucherAdd from "./components/admin/Voucher/VoucherAdd"
import VoucherEdit from "./components/admin/Voucher/VoucherEdit"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='otp' element={<OTPAuth />} />
        <Route path='email-auth' element={<EmailAuth />} />
        <Route path='signup' element={
          <RedirectRoute>
            <Register />
          </RedirectRoute>
        } />
        <Route path='login' element={
          <RedirectRoute>
            <Login />
          </RedirectRoute>
        } />
        <Route path="/" element={<LayoutClient />}>
          <Route index element={<HomeClient />} />
          <Route path="works" element={<WorkPage />} />
          <Route path="profile" element={
            // <PrivateRoute>
              <Profile />
            // </PrivateRoute>
          } />
        </Route>
        <Route path='otp' element={<OTPAuth />} />
        <Route path='email-auth' element={<EmailAuth />} />

        <Route path='/home' element={<LayoutEmployer />}>
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
        <Route path="/admin" element={<LayoutAdmin/>}>
            <Route index element ={<HomeAdmin/>}/>
        </Route>
        <Route path='*' element={<h1>404 | NOT FOUND</h1>} />
      </Routes>
    </div>
  )
}

export default App
