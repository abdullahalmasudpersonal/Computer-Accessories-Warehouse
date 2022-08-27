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
import Header2 from './Pages/Shared/Header2/Header';

function App() {
  return (
    <div>
      <Header2/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/inventories' element={<Inventories />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/add-item' element={<AddItem />} />
        <Route path='/manage-item' element={<ManageItem />} />
        <Route path='/my-item' element={<MyItem />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
