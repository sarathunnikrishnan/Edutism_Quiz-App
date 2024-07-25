
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/Navbar/NavBar';
import EdutismRegistration from './components/Navbar/EdutismRegistration';
import Home from './components/Navbar/Home/Home';
import FreeIqTest from './components/FunTestandQuizs/FreeIqTest/FreeIqTest';
import KidsIqTest from './components/FunTestandQuizs/KidsIqTest/KidsIqTest';
import PersonalityTest from './components/FunTestandQuizs/PersonalityTest/PersonalityTest';
import SpatialTest from './components/FunTestandQuizs/SpatialTest/SpatialTest';
import MyResult from './components/Navbar/MyResult/MyResult';
import Support from './components/Navbar/Support/Support';
import Footer from './components/Footer/Footer';
import FooterOne from './components/Footer-1/FooterOne';
import SignIn from './components/Signin/SignIn';
import LogOut from './components/Signin/LogOut/LogOut';
import { useState } from 'react';
import { UserDetails } from './components/UserDetails/UserDetails';


function App() {


  const [userData, setUserData] = useState();

  const { firstName = '', lastName = '',birthDate = '', phoneNumber = '', state = '', __v = '' } = userData || {};
  const rollNo = __v;

  // Parse the timestamp string
  const timestamp = new Date(birthDate);

  // Extract date components
  const year = timestamp.getFullYear();
  const month = (timestamp.getMonth() + 1).toString().padStart(2, '0');
  const day = timestamp.getDate().toString().padStart(2, '0');

  // Construct the formatted date string
  const formattedDate = `${day}-${month}-${year}`;

  const HandleCallback = (value) => {
    setUserData(value)
  }

  return (
    <Router>
      <div className="App">
       <UserDetails.Provider value={{firstName, lastName, formattedDate, phoneNumber, state, rollNo}}>
        <div>
          <NavBar />
        </div>
        <div className='bg-lineargradient-top col-12 col-md-12 '></div>
        <div className='center-content col-12 col-md-12'>
          <Routes>
            <Route path="/EdutismRegistration" element={<EdutismRegistration />}></Route>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/Home" element={<Home/>}></Route>
            <Route path="/freeiqtest" element={<FreeIqTest />}></Route>
            <Route path="/Home/freeiqtest" element={<FreeIqTest />}></Route>
            <Route path="/kidsiqtest" element={<KidsIqTest />}></Route>
            <Route path="/personalitytest" element={<PersonalityTest />}></Route>
            <Route path="/spatialtest" element={<SpatialTest />}></Route>
            <Route path="/myresult" element={<MyResult />}></Route>
            <Route path="/support" element={<Support />}></Route>
            <Route path="/myresult/EdutismRegistration" element={<EdutismRegistration />}></Route>
            <Route path="/signin/EdutismRegistration" element={<EdutismRegistration />}></Route>
            <Route path="/signin" element={<SignIn HandleCallback={HandleCallback} />}></Route>
            <Route path="/logout" element={<LogOut />}></Route>
          </Routes>
        </div>
        <div>
          <FooterOne />
        </div>
        <div className='bg-lineargradient-bottom col-12 col-md-12 row'></div>
        <div className='footer-div'>
          <div>
            <Footer />
          </div>
        </div>
        </UserDetails.Provider>
      </div>
    </Router>
  );
}

export default App;


