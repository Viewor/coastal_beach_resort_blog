import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import BlogList from '@/pages/BlogList';
import BlogPost from '@/pages/BlogPost';
import CreatePost from '@/pages/CreatePost.jsx'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'
import { Separator } from './components/ui/separator';
  
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,
    })
  }, [])

  return (
    <Router>
      {/* Navigation Links */}
        <nav className='p-8'>
          <ul className='flex space-x-2 pb-4'>
            <li>
              <NavLink className="link border py-2 px-4 rounded-md border-amber-500" to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink className="link border py-2 px-4 rounded-md border-amber-500" to="/blog/create-post">Create Post</NavLink>
            </li>
          </ul>
          <Separator  className="bg-amber-500"/>
        </nav>
      <Routes>
        {/* Other routes */}
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/create-post" element={<CreatePost />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  );
};

export default App;