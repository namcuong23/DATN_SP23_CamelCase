import "./App.css"
import ProfileList from "./components/Recruitment/Manage Profile/ProfileList"
import { Routes, Route } from "react-router-dom"
import LayoutClient from "./components/layouts/LayoutClient"
import HomeClient from "./components/employee/home/HomeClient"
import Login from "./components/auth/Employee/Login"
import OTPAuth from "./components/auth/OTPAuth"
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

import ProfileEpr from "./components/employer/profileEpr/ProfileEpr"

import ServicesEpr from "./components/employer/package/ServicesEpr"
import HomeEmployer from './components/home/HomeEmployer'
import Jobdone from './components/pages/Jobdone'
import "./App.css"
import PersonalInfor from './components/pages/PersonalInfor'
import LayoutEmployer from "./components/layouts/LayoutEmployer"
import Infotmation from "./components/employee/profile/Infotmation"
import MyJob from "./components/employee/profile/MyJob"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import PostList from "./components/employer/Posts/PostList"
import PostAdd from "./components/employer/Posts/PostAdd"
import PostDetail from "./components/employer/Posts/PostDetail"
import PostEdit from "./components/employer/Posts/PostEdit"
import HomeAdmin from "./components/Admin/home/HomeAdmin"
import UsersManage from "./components/Admin/home/UsersManage"
import VoucherList from "./components/Admin/Voucher/VoucherList"
import VoucherAdd from "./components/Admin/Voucher/VoucherAdd"
import VoucherEdit from "./components/Admin/Voucher/VoucherEdit"
import PostAdmin from "./components/Admin/Post/PostAdmin"
import CareerList from "./components/Admin/Career/CareerList"
import CareerAdd from "./components/Admin/Career/CareerAdd"
import ServiceList from "./components/employer/My Service/ServiceList"
import ServiceAdd from "./components/employer/My Service/ServiceAdd"
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
          <Route path="profile" element={<Profile />} >
            <Route index element={<Infotmation />} />
            <Route path="myJob" element={<MyJob />} />
            <Route path="information" element={<Infotmation />} />
          </Route>
          <Route path='posts/:id' element={<PostDetailEp />} />
        </Route>

        {/* EMPLOYER */}
        <Route path='/home' element={<LayoutEmployer />}>
          <Route index element={<Home />} />
          <Route path='profile-epr' element={<ProfileEpr />} />
          <Route path='posts' element={<PostList />} />
          <Route path='services' element={<ServiceList />} />
          <Route path='services/add' element={<ServiceAdd />} />
          <Route path='posts/add' element={<PostAdd />} />
          <Route path='posts/:id/edit' element={<PostEdit />} />
          <Route path='posts/:id' element={<PostDetail />} />

          <Route path='packages' element={<PackageList />} />
          <Route path='orders' element={<OrderList />} />
          <Route path='orders/:id/detail' element={<OrderDetail />} />
          <Route path='notice' element={<OrderNotice />} />
          <Route path='cart' element={<Cart />} />
          <Route path='services' element={<ServicesEpr />} />
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
        <Route path='/' element={<LayoutClient />}>
          <Route index element={<HomeClient />} />
        </Route>
        <Route path='/employs' element={<LayoutEmployer />}>
          <Route index element={<HomeEmployer />} />
        </Route>
        <Route path='/jobdones' element={<LayoutClient />}>
          <Route index element={<Jobdone />} />
        </Route>
        <Route path='/personalInfors' element={<LayoutClient />}>
          <Route index element={<PersonalInfor />} />
          <Route path="/personalInfors/:id" element={<PersonalInfor />} />
        </Route>
        <Route path='*' element={<h1>404 | NOT FOUND</h1>} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div >
  )
}

export default App
