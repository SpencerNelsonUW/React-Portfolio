import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Contact from './views/Contact';
import Home from './views/Home';
import Portfolio from './views/Portfolio';
import Resume from './views/Resume';



export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
  

    const renderPage = () => {
      if (currentPage === 'Home') {
        return <Home />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      return <Resume />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        {}
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {}
        {renderPage()}
      </div>
    );
  }
  