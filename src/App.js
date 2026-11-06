import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from './features/Home/pages/HomePage';
import ServicesPage from './features/Services/pages/ServicesPage';
import ContactPage from './features/Contact/pages/ContactPage';
import PlansPage from './features/Plans/pages/PlansPage';
import  UsPage from './features/Us/UsPage';

import { NavBar } from './shared/components/layout/NavBar/NavBar';
import { Footer } from './shared/components/layout/Footer/Footer';
import './index.css'

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<HomePage />}/>
          <Route path="/servicios" element={<ServicesPage />} />
           <Route path='/contacto' element={<ContactPage />} />
          <Route path='/plans' element={<PlansPage />}/>
          <Route path="/Us" element={<UsPage />} />
        </Routes>
      </ BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
