import Navbar from './Components/Navbar';
import './App.css';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import Introduction from './Introduction/Introductionfile';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Boilerplate from './Introduction/Boilerplate';
import ContactUs from './Introduction/ContactUs';
import Headingtags from './Tags/Headingtags';
import MetaTags from './Tags/MetaTags';
import Texttags from './Tags/Texttags';
import Tips from './Introduction/Tips';
import Faqs from './Introduction/Faqs';
import AudioVideo from './Tags/AudioVideo';

function App(props) {
  
  return (




    <Router>
    <Navbar />
    
    <div className="min-vh-100 d-flex mainpage w-90">
      <Sidebar />
      
      <Routes>
        <Route exact path="/Introduction/Introductionfile" element={<Introduction/>} />
      </Routes>
      <Routes>
      <Route exact path="/Introduction/Boilerplate" element={<Boilerplate />} />

        </Routes>
        <Routes>
          <Route path='/Introduction/ContactUs' element={<ContactUs/>}/>


        </Routes>
        <Routes>
          <Route path='/Tags/Headingtags' element={<Headingtags/>}/>


        </Routes>
        <Routes>
          <Route path='/Tags/MetaTags' element={<MetaTags/>}/>


        </Routes>
        <Routes>
          <Route path='/Tags/Texttags' element={<Texttags/>}/>


        </Routes>
        <Routes>
          <Route path='/Introduction/Tips' element={<Tips/>}/>


        </Routes>
        <Routes>
          <Route path='/Introduction/Faqs' element={<Faqs/>}/>


        </Routes>
        <Routes>
          <Route path='/Tags/AudioVideo' element={<AudioVideo/>}/>


        </Routes>
        
    </div>
    <Footer />
  </Router>
  );
}

export default App;
