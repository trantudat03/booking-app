import { Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import Layout from './Layout'
import RegisterPage from './pages/RegisterPage'
import axios from 'axios'
import { UserContextProvider } from './UserContext'
import AccountPage from './pages/AccountPage'
import PlacesPage from './pages/PlacesPage'
import PlacesFormPage from './components/PlacesFormPage'
import PlacePage from './pages/PlacePage'
// import { Link } from 'react-router-dom'

axios.defaults.baseURL = 'http://127.0.0.1:4000';
axios.defaults.withCredentials = true;

function App() {

  

    return (
      <UserContextProvider>
         <Routes>
        <Route path='/' element={<Layout/>} > 
          <Route  index element={<IndexPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/account' element={<AccountPage/>} />
          <Route path='/account/bookings' element={<AccountPage/>} />
          <Route path='/account/places' element={<PlacesPage/>} />
          <Route path="/account/places/new" element={<PlacesFormPage />} />
          <Route path="/account/places/:id" element={<PlacesFormPage />} />
          <Route path='/place/:id' element={<PlacePage/>}/>
        </Route>
        
      </Routes>
      </UserContextProvider>
     

      
    
    )
}

export default App