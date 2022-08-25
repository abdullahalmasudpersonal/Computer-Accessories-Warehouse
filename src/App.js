import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import AddItem from './Pages/AddItem/AddItem';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Inventories from './Pages/Inventories/Inventories';
import LogIn from './Pages/Login/LogIn/LogIn';
import Register from './Pages/Login/Register/Register';
import ManageItem from './Pages/ManageItem/ManageItem';
import MyItem from './Pages/MyItem/MyItem';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/inventories' element={<Inventories />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/add-item' element={<AddItem />} />
        <Route path='/manage-item' element={<ManageItem />} />
        <Route path='/my-item' element={<MyItem />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<LogIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
