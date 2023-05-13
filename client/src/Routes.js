import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';


import Home from './components/Home';
import Contact from './components/Contact';
import NewNews from './components/NewNews';
import EditNews from './components/EditNews';
import ShowNews from './components/ShowNews';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import Toast from './components/utils/Toast';
import PageNotFound from './components/pageNotFound';
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Toast />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/news/:id" element={<ShowNews />}></Route>
          <Route path="/news/new" element={<NewNews />}></Route>
          <Route path="/news/:id/edit" element={<EditNews />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default AppRoutes