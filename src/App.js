import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-Wrapper">
                <Header />
                <Navbar />
                <div className="app-Wrapper-content">
                    <Route path='/Dialogs' component={Dialogs} />
                    <Route path='/Profile' component={Profile} />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
