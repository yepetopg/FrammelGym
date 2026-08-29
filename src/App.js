import { BrowserRouter, Route, Routes } from 'react-router';
import { ROUTES } from './config/routes';
import './index.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {ROUTES.map((route) => (
            <Route 
              key={route.path}
              path={route.path} 
              element={<route.element />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
