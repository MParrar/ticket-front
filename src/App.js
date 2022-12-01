import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import './App.css';
import Navbar from './components/Navbar';
import { Settings, Home, Tickets, Users } from './page';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="main" >
      <Navbar />
      <BrowserRouter>
        <div className='display-main'>
          <Sidebar />
          <div className='layout-main'>
            <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/users" element={<Users />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/settings" element={<Settings />} />

            </Routes>
          </div>
        </div>
      </BrowserRouter>


    </div >
  );
}

export default App;
