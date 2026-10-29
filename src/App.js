import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from './features/Home/pages/HomePage';
import ContactPage from './features/Contact/pages/ContactPage';
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
           <Route path='/contacto' element={<ContactPage />} />
        </Routes>
      </ BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
