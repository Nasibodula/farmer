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
import Footer from './components/Footer'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/weathercard" element={<WeatherCard />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

          // <Route 
          //     path="/login" 
          //     element={!user ? <Login /> : <Navigate to="/"/>} 
          //   />
          //   <Route 
          //     path="/chat" 
          //     element={user ? <Chat /> : <Navigate to="/login" />} 
          //   />
          //   <Route 
          //     path="/weathercard"
          //     element={user ? <WeatherCard/> : <Navigate to="/login" />} 
          //   />
          //   <Route 
          //     path="/aboutus" 
          //     element={user ? <Aboutus /> : <Navigate to="/login" />} 
          //   />
          //   <Route 
          //     path="/contactus" 
          //     element={user ? <Contactus/> : <Navigate to="/login" />} 
          //   />
          //   <Route 
          //     path="/" 
          //     element={user ? <Home /> : <Navigate to="/login" />} 
          //   />