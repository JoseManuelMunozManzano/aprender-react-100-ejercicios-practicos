import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

const RoutesConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:p" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesConfig;
