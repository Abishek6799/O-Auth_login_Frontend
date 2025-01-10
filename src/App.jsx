import React,{ useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Page/Register';
import Login from './Page/Login';
import ForgotPassword from './Page/ForgotPassword';
import ResetPassword from './Page/ResetPassword';
import { ToastContainer } from 'react-toastify';
import Welcome from './Page/Welcome';
import PageNotFound from './Page/PageNotFound';
import OAuthCallback from './Components/OAuthCallback';

const App = () => {
  const [token ,setToken] = useState('')
  return (
    <div>
     
     <div>
      <ToastContainer />
     </div>

      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login  setToken={setToken}/>} />
        <Route path="/welcome" element={<Welcome setToken={setToken} />} />
        <Route path='/oauth/callback' element={<OAuthCallback setToken={setToken}/>}/>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;