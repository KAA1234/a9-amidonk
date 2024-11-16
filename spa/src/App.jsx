import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './modules/Counter.jsx'
import HomePage from './modules/HomePage.jsx'
import Contact from './modules/Contact.jsx'
import Gallery from './modules/Gallery.jsx'
import Order from './modules/Order.jsx'
import Staff from './modules/Staff.jsx'
import TopicsPage from './modules/TopicsPage.jsx'
import Movies from './modules/movies/MoviesPage.jsx'
import Slogan from './modules/Slogan.jsx'
import Navigation from './modules/Navigation.jsx';


function App() {


  return (
    <>
      <header>
        <h1>Kevin Amidon</h1>
        <Slogan />
      </header>
      <Router>
        <main>
          <Navigation />
          <section>
            <Routes>
              <Route path="/homepage" element={<HomePage />}></Route>
              <Route path="/gallery" element={<Gallery/>}></Route>
              <Route path="/order" element={<Order/>}></Route>
              <Route path="/staff" element={<Staff/>}></Route>
              <Route path="/topicsPage" element={<TopicsPage/>}></Route>
              <Route path="/moviesPage" element={<Movies/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
          </section>
        </main>
      </Router>
      <footer>
        <p>&copy; {new Date().getFullYear()} Kevin Amidon</p>
      </footer>
    </>
  )
}

export default App
