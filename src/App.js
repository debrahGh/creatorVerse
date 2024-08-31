import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowCreators />} />
        {/* Add more routes here for viewing, adding, editing creators */}
      </Routes>
    </Router>
  );
}

export default App;
