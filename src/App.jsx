import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import NotFound from "./components/Layout/NotFound/NotFound";
import Contact from "./components/Contact/Contact";
import Courses from "./components/Courses/Courses";
import Request from "./components/Request/Request";
import Profile from "./components/Profile/Profile";
import UpdateProfile from "./components/Profile/UpdateProfile";
import ChangePassword from "./components/Profile/ChangePassword";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ForgetPassword from "./components/Auth/ForgetPassword";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import CreateCourse from "./components/Admin/CreateCourse/CreateCourse";
import AdminCourses from "./components/Admin/AdminCourses/AdminCourses";
import Users from "./components/Admin/Users/Users";

import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/user";
import { ProtectedRoute } from "protected-route-react";
import toast, { Toaster } from "react-hot-toast";
import ResetPassword from "./components/Auth/ResetPassword";
import CoursePage from "./components/CoursePage/CoursePage";
import Subscribe from "./components/Payments/Subscribe";
import PaymentSuccess from "./components/Payments/PaymentSuccess";
import PaymentFail from "./components/Payments/PaymentFail";

const App = () => {
  const { isAuthenticated, error, message, loading, user } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    // After api
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  return (
    <BrowserRouter>
      <Header isAuthenticated={isAuthenticated} user={user} loading={loading} />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={
            <ProtectedRoute
              isAuthenticated={!isAuthenticated}
              redirect="/profile"
            >
              <Login />
            </ProtectedRoute>
          }
        />

        <Route
          path="/register"
          element={
            <ProtectedRoute
              isAuthenticated={!isAuthenticated}
              redirect="/profile"
            >
              <Register />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile user={user} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/updateprofile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <UpdateProfile user={user} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/changepassword"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ChangePassword />
            </ProtectedRoute>
          }
        />

        <Route
          path="/forgetpassword"
          element={
            <ProtectedRoute
              isAuthenticated={!isAuthenticated}
              redirect="/profile"
            >
              <ForgetPassword />
            </ProtectedRoute>
          }
        />

        <Route
          path="/resetpassword/:token"
          element={
            <ProtectedRoute
              isAuthenticated={!isAuthenticated}
              redirect="/profile"
            >
              <ResetPassword />
            </ProtectedRoute>
          }
        />

      

        <Route path="/Courses" element={<Courses />} />
      
        <Route path='/Course/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated} >
          <CoursePage user={user}/>
        </ProtectedRoute> }/>

        <Route path="/Request" element={<Request />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* admin routes */}
        <Route path='/admin/dashboard' element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} 
            isAdmin={user && user.role === 'admin'}>
              <Dashboard/>
            </ProtectedRoute> } />

            <Route path='/admin/createcourse' element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} 
            isAdmin={user && user.role === 'admin'}>
              <CreateCourse/>
            </ProtectedRoute> } />

             {/* AdminCourses */}
             <Route path='/admin/courses' element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} 
            isAdmin={user && user.role === 'admin'}>
              <AdminCourses/>
            </ProtectedRoute> } />

              {/* Users */}
              <Route path='/admin/users' element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} 
            isAdmin={user && user.role === 'admin'}>
              <Users/>
            </ProtectedRoute> } />



            {/* payment Routes */}

            <Route path='/subscribe' element={<ProtectedRoute isAuthenticated={isAuthenticated}>
          <Subscribe user={user}/> 
        </ProtectedRoute>} />
        <Route path='/paymentsuccess' element={<PaymentSuccess/> } />
        <Route path='/paymentfail' element={<PaymentFail/> } />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
