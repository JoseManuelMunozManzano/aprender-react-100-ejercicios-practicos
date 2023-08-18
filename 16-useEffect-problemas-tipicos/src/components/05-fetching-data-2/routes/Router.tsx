import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { User } from '../User';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/users/:id" element={<User />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
