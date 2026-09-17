import './App.css';
import Sidebar from './Layout/Sidebar';
import MainContent from './Layout/MainContent';
import ThemeToggle from './Components/Features/ThemeToggle ';
import { useState } from 'react';

function App() {
  const [note, setNode] = useState(null)

  return (
    <div class="app">

      <div class="main">

        {/* <!-- SIDEBAR --> */}
        <Sidebar />

        {/* <!-- EDITOR --> */}
        <MainContent note={18} />

        {/* Fixed Theme*/}
        <ThemeToggle />
      </div>
    </div>
  );
}

export default App;
