import Navbar from "./components/Navbar/Navbar";

import './App.css';

function App() {
    return (
        <div className='App'>
            <div id='preloader'>
                <div className='loader'>
                    <img src='images/loading.gif' width='64' alt=''/>
                </div>
            </div>
            <header className='App-header'>
                <Navbar/>
            </header>
        </div>
  );
}

export default App;
