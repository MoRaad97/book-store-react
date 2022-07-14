import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StoreContainer from './Components/StoreContainer';
import Navbar from './Components/navbar';
import Categories from './Components/Categories';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<StoreContainer />} />
        <Route path="Categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
