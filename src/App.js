import logo from './logo.svg';
import './App.css';
import Sidebar from './Layout/Sidebar';
import MainContent from './Layout/MainContent';
import ThemeToggle from './Components/Features/ThemeToggle ';

function App() {
  return (
    <div class="app">

      <div class="main">

        {/* <!-- SIDEBAR --> */}
        <Sidebar />

        {/* <!-- EDITOR --> */}
        <MainContent />

        {/* Fixed */}
        <ThemeToggle />
      </div>
    </div>
  );
}

export default App;
