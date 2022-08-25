import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Inventories from './Pages/Inventories/Inventories';
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
        <Route path='/blogs' element={<Home />} />
        <Route path='/blogs' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
