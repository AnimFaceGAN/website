import './styles/App.css'
import { BrowserRouter, useRoutes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import News from './News';
import Download from './Download';
import Policy from './Policy';
import License from './License';
import logo from './imgs/logo.png'

const Route = () => {
  let routes = useRoutes([
    { path: 'website/',         element: <Home /> },
    { path: 'website/about',    element: <About /> },
    { path: 'website/news',     element: <News /> },
    { path: 'website/download', element: <Download /> },
    { path: 'website/policy',   element: <Policy /> },
    { path: 'website/license',  element: <License /> },
  ]);
  return routes;
};

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <div className="header">
          <img src={logo} className="logo" alt="product logo" /><br/>
        </div>
        <ul className="nav" onClick={check()}>
          <li><a href="/website">Home</a></li>
          <li><a href="/website/about">About</a></li>
          <li><a href="/website/news">News</a></li>
          <li><a href="/website/download">Download</a></li>
          <li><a href="/website/policy">Policy</a></li>
          <li><a href="/website/license">License</a></li>
        </ul>
      </div>

      <div className="main-part">
        <BrowserRouter>
          <Route />
        </BrowserRouter>
      </div>
    </div>
  );
}

function check() {
  console.log("clicked")
}
export default App;