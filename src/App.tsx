import Home from './components/RTK/Home';
import User from './components/RTK/User';
import Contact from './components/RTK/Contact';
import './App.css'
import { store } from './utils/Store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <div style={{ marginTop: "20px" }}>
            <Link className='Button' to='/rtk/home'>Home</Link>
            <Link className='Button' to='/rtk/login'>User</Link>
            <Link className='Button' to='/rtk/contact'>Contact</Link>
          </div>
          <Routes>
            <Route path='/rtk'>
              <Route path='home' element={<Home />} />
              <Route path='login' element={<User />} />
              <Route path='contact' element={<Contact />} />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
