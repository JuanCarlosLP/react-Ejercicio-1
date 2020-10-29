import logo from './logo.svg';
import './App.css';

import Expectations from './components/Expectations';
import Interests from './components/Interests';
import Learn from './components/Learn';
import Profile from './components/Profile';

function App() {
    return ( <div className="App">
            <div className="row">
                <Profile />
                <Interests />
                <Learn />
            </div> 
            <div className = "row" >
                <Expectations />
            </div> 
        </div>
    );
}

export default App;