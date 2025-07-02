import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Collections from './pages/Collections';
import Men from './pages/Men';
import Women from './pages/Women';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetail from './pages/detail';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/collections" element={<Collections />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:category/detail/:id" element={<ProductDetail />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
