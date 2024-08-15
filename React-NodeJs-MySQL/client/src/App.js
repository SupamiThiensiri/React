import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppHeroSection from './components/HeroSections/HeroSection';
import AppPage404 from './components/Feedback/Page404';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path='/HeroSection' element={<AppHeroSection />}></Route> */}
        {/* <Route path='/' element={<AppSingIn />}></Route> */}
        {/* <Route path='*' element={<AppSidebar />}></Route> */}
        </Routes>
      <Routes>
        <Route path='/HeroSection' element={<AppHeroSection />}></Route>
        <Route path='/Page404' element={<AppPage404 />} />
        {/* <Route path='/VTC/showVTC' element={<AppShowVTC />} /> */}
        {/* <Route path='/VTC/hotpatch' element={<AppHotPatch />} /> */}
        {/* <Route path='/VRB/showVRB' element={<AppShowVRB />} /> */}
        {/* <Route path='/useraccount' element={<AppUser />} /> */}
        {/* <Route path='/usermanual' element={<Appusermanual />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
