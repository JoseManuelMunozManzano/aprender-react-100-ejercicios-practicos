import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Page2 from '../pages/Page2';
import Product from '../pages/Product';
import Category from '../pages/Category';

// VITE_PUBLIC_URL añadida en fichero vite-env.d.ts
const publicUrl = import.meta.env.VITE_PUBLIC_URL;

const Router = () => (
  <BrowserRouter basename={publicUrl}>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/category" element={<Category />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  </BrowserRouter>
);

export default Router;
