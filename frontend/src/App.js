import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Chat from './pages/Chat'
import WeatherCard from './pages/Weather-card'
import Aboutus from './pages/Aboutus'
import Contactus from './pages/Contactus'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
          <Route 
              path="/login" 
              element={<Loin/>}
              // element={!user ? <Login /> : <Navigate to="/"/>} 
            />
            <Route 
              path="/chat" 
              // element={user ? <Chat /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/weathercard"
              element={<WeatherCard/>}
              // element={user ? <WeatherCard/> : <Navigate to="/login" />} 
            />
            <Route 
              path="/aboutus" 
              element={<Aboutus/>}  
              // element={user ? <Aboutus /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/contactus" 
              element={<Contactus/>}
              // element={user ? <Contactus/> : <Navigate to="/login" />} 
            />
            <Route 
              path="/" 
                element={<Home/>}
              // element={user ? <Home /> : <Navigate to="/login" />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
