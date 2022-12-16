import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../components';
import * as ROUTES from '../constant/router';
import { Books, Categories } from '../pages';

const PageRoutes = () => (
  <Routes>
    <Route element={<Navbar />}>
      <Route path={ROUTES.BOOKS} element={<Books />} />
      <Route path={ROUTES.CATEGORIES} element={<Categories />} />
    </Route>
  </Routes>
);

export default PageRoutes;
