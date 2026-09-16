import logo from './logo.svg';
import './App.css';
import Sidebar from './Layout/Sidebar';
import MainContent from './Layout/MainContent';

function App() {
  return (
    <div class="app">

      <div class="main">

        {/* <!-- SIDEBAR --> */}
        <Sidebar />

        {/* <!-- EDITOR --> */}
        <MainContent />

      </div>
    </div>
  );
}

export default App;
