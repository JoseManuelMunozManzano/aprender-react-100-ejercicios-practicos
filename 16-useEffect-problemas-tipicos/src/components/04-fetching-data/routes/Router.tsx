import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../Home';
import { Posts } from '../Posts';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
