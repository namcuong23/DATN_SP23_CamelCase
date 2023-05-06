import "./App.css"
import ProfileList from "./components/Recruitment/Manage Profile/ProfileList"
import { Routes, Route } from "react-router-dom"
import LayoutClient from "./components/layouts/LayoutClient"
import HomeClient from "./components/employee/home/HomeClient"
import Login from "./components/auth/Employee/Login"
import OTPAuth from "./components/auth/OTPAuth"
import LayoutEmployer from "./components/layouts/LayoutEmployer"
import Home from "./components/employer/home/HomeEmployer"
import WorkPage from "./components/employee/works/WorkPage"
import Profile from "./components/employee/profile/Profile"
import LayoutAdmin from "./components/layouts/LayoutAdmin"
import PostDetailEp from "./components/employee/post/PostDetail"
import Register from "./components/auth/Employee/Register"
import RegisterEmployer from "./components/auth/Employer/RegisterEmployer"
import LoginEmployer from "./components/auth/Employer/LoginEmployer"
import PackageList from "./components/employer/package/PackageList"
import Cart from "./components/employer/package/Cart"
import OrderList from "./components/employer/package/OrderList"
import OrderDetail from "./components/employer/package/OrderDetail"
import OrderNotice from "./components/employer/package/OrderNotice"
import PostList from "./components/employer/posts/PostList"
import ProfileEpr from "./components/employer/profileEpr/ProfileEpr"
import PostAdd from "./components/employer/posts/PostAdd"
import PostEdit from "./components/employer/posts/PostEdit"
import PostDetail from "./components/employer/posts/PostDetail"
import HomeAdmin from "./components/admin/home/HomeAdmin"
import UsersManage from "./components/admin/home/UsersManage"
import VoucherList from "./components/admin/Voucher/VoucherList"
import VoucherAdd from "./components/admin/Voucher/VoucherAdd"
import VoucherEdit from "./components/admin/Voucher/VoucherEdit"
import PostAdmin from "./components/admin/Post/PostAdmin"
import CareerAdd from "./components/admin/Career/CareerAdd"
import CareerList from "./components/admin/Career/CareerList"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='otp' element={<OTPAuth />} />

        {/* AUTH EMPLOYEE */}
        <Route path='signup' element={
          // <RedirectRoute>
          <Register />
          // </RedirectRoute>
        } />
        <Route path='login' element={
          // <RedirectRoute>
          <Login />
          // </RedirectRoute>
        } />

        {/* AUTH EMPLOYER */}
        <Route path='signup-epr' element={
          // <RedirectRoute>
          <RegisterEmployer />
          // </RedirectRoute>
        } />
        <Route path='login-epr' element={
          // <RedirectRoute>
          <LoginEmployer />
          // </RedirectRoute>
        } />

        {/* EMPLOYEE */}
        <Route path="/" element={<LayoutClient />}>
          <Route index element={<HomeClient />} />
          <Route path="works" element={<WorkPage />} />
          <Route path="profile" element={
            // <PrivateRoute>
            <Profile />
            // </PrivateRoute>
          } />
          <Route path='posts/:id' element={<PostDetailEp />} />
        </Route>

        {/* EMPLOYER */}
        <Route path='/home' element={<LayoutEmployer />}>
          <Route index element={<Home />} />
          <Route path='profile-epr' element={<ProfileEpr />} />
          <Route path='posts' element={<PostList />} />
          <Route path='posts/add' element={<PostAdd />} />
          <Route path='posts/:id/edit' element={<PostEdit />} />
          <Route path='posts/:id' element={<PostDetail />} />

          <Route path='packages' element={<PackageList />} />
          <Route path='orders' element={<OrderList />} />
          <Route path='orders/:id/detail' element={<OrderDetail />} />
          <Route path='notice' element={<OrderNotice />} />
          <Route path='cart' element={<Cart />} />
          <Route path='manage-cv' element={<ProfileList />} />
        </Route>

        {/* ADMIN */}
        <Route path='/admin' element={<LayoutAdmin />}>
          <Route index element={<HomeAdmin />} />
          <Route path="users-management" element={<UsersManage />} />
          <Route path='vouchers' element={<VoucherList />} />
          <Route path='vouchers/add' element={<VoucherAdd />} />
          <Route path='vouchers/:id/edit' element={<VoucherEdit />} />
          <Route path='posts' element={<PostAdmin />} />
          <Route path='careers' element={<CareerList />} />
          <Route path='careers/add' element={<CareerAdd />} />
        </Route>
        <Route path='*' element={<h1>404 | NOT FOUND</h1>} />
      </Routes>
    </div>
  )
}

export default App
