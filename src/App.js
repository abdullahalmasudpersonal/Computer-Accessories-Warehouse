import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import AddItem from './Pages/AddItem/AddItem';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Inventories from './Pages/Inventories/Inventories';
import Register from './Pages/Login/Register/Register';
import Login from './Pages/Login/Login/Login';
import ManageItem from './Pages/ManageItem/ManageItem';
import MyItem from './Pages/MyItem/MyItem';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header2/Header';
import UpdateInventory from './Pages/UpdateInventory/UpdateInventory';
import Checkout from './Pages/Checkout/Checkout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import About from './Pages/About/About';
import Connect from './Pages/ConnectUs/Connect';
import Footer2 from './Pages/Shared/Footer/Footer2';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/inventories' element={<Inventories />} />
        <Route path='/inventories/:inventoriesId' element={<RequireAuth><UpdateInventory /></RequireAuth>} />
        <Route path='/checkout/:inventoriesId' element={<Checkout />}></Route>
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/connect-us' element={<Connect />} />
        <Route path='/about' element={<About />} />
        <Route path='/add-item' element={<RequireAuth><AddItem /></RequireAuth>} />
        <Route path='/manage-item' element={<RequireAuth><ManageItem /></RequireAuth>} />
        <Route path='/my-item' element={<RequireAuth><MyItem /></RequireAuth>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer2/>
      <ToastContainer />
    </div>
  );
}

export default App;
