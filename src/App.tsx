import "./App.css"
import ProfileList from "./components/Recruitment/Manage Profile/ProfileList"
import { Routes, Route } from "react-router-dom"
import LayoutClient from "./components/layouts/LayoutClient"
import HomeClient from "./components/employee/home/HomeClient"
import Login from "./components/auth/Employee/Login"
import OTPAuth from "./components/auth/OTPAuth"
import Home from "./components/employer/home/HomeEmployer"
import WorkPage from "./components/employee/works/WorkPage"
import Feedback from "./components/employee/feedback/Feedback"
import Profile from "./components/employee/profile/Profile"
import LayoutAdmin from "./components/layouts/LayoutAdmin"
import PostDetailEp from "./components/employee/post/PostDetail"
import Register from "./components/auth/Employee/Register"
import RegisterEmployer from "./components/auth/Employer/RegisterEmployer"
import LoginEmployer from "./components/auth/Employer/LoginEmployer"
import PackageList from "./components/employer/package/PackageList"
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
import ServicesEpr from "./components/employer/package/ServicesEpr"
import HomeEmployer from './components/home/HomeEmployer'
import Jobdone from './components/pages/Jobdone'
import "./App.css"
import PersonalInfor from './components/pages/PersonalInfor'
import LayoutEmployer from "./components/layouts/LayoutEmployer"
import ForgotPassEpe from "./components/auth/Employee/ForgotPassEpe"
import { ToastContainer } from "react-toastify"
import AccountMng from "./components/employee/profile/AccountMng"
import LoginAdmin from "./components/auth/Admin/LoginAdmin"
import Cart from "./components/employer/package/Cart"
import ResetPassEpe from "./components/auth/Employee/ResetPassEpe"
import ForgotPasswordNotice from "./components/auth/Employee/ForgotPasswordNotice"
import ForgotPassEpr from "./components/auth/Employer/ForgotPassEpr"
import ResetPassEpr from "./components/auth/Employer/ResetPassEpr"
import ForgotPassNotice from "./components/auth/Employer/ForgotPassNotice"
import AccEprMng from "./components/employer/profileEpr/AccEprMng"
import FeedbackList from "./components/admin/Feedback/FeedbackList"
import Infotmation from "./components/employee/profile/Infotmation"
import MyJob from "./components/employee/profile/MyJob"
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='otp' element={<OTPAuth />} />

        {/* AUTH EMPLOYEE */}
        <Route path='signup' element={
          <Register />
        } />
        <Route path='login' element={
          <Login />
        } />
        <Route path='forgot-pasword-epe' element={<ForgotPassEpe />} />
        <Route path='reset-pasword-epe' element={<ResetPassEpe />} />
        <Route path='notice' element={<ForgotPasswordNotice />} />

        {/* AUTH EMPLOYER */}
        <Route path='signup-epr' element={
          <RegisterEmployer />
        } />
        <Route path='login-epr' element={
          <LoginEmployer />
        } />
        <Route path='forgot-pasword-epr' element={<ForgotPassEpr />} />
        <Route path='reset-pasword-epr' element={<ResetPassEpr />} />
        <Route path='notice-epr' element={<ForgotPassNotice />} />

        {/* Auth ADMIN */}
        <Route path='login-admin' element={
          <LoginAdmin />
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
          <Route path="account-manage" element={<AccountMng />} />
          <Route path="feedbacks" element={<Feedback />} />
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
          <Route path='acc-epr-manage' element={<AccEprMng />} />
          <Route path='posts' element={<PostList />} />
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
          <Route path="feedbacks" element={<Feedback />} />
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
          <Route path='feedbacks' element={<FeedbackList />} />
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
        autoClose={2000}
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
