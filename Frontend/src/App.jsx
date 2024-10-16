import React from 'react'
import LatestJobs from "./latestJobs/LatestJobs";
import {Route, Routes} from "react-router-dom"
import Home from './home/Home';
import LoginPage from './login/LoginPage';
import RegisterPage from './register/RegisterPage';
import AboutPage from './about/AboutPage';
import ContactPage from './contact/ContactPage';

const App = () => {

  return (
    <>
    <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="/LatestJobs" element={<LatestJobs/>}/>
      <Route path='/AboutPage' element={ <AboutPage/> } />
      <Route path='/ContactPage' element={ <ContactPage/> } />
      <Route path='/Login' element={ <LoginPage/> } />
      <Route path='/RegisterPage' element={ <RegisterPage/> } />
    </Routes>
    </>
  );
}

export default App;
