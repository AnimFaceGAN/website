import { BrowserRouter, useRoutes} from 'react-router-dom';
import './App.css'
import Home from './Home';
import About from './About';
import News from './News';
import Download from './Download';
import Policy from './Policy';
import License from './License';

const Route = () => {
  let routes = useRoutes([
    { path: '/',        element: <Home /> },
    { path: 'about',    element: <About /> },
    { path: 'news',     element: <News /> },
    { path: 'download', element: <Download /> },
    { path: 'policy',   element: <Policy /> },
    { path: 'license',  element: <License /> },
  ]);
  return routes;
};

function App() {
  return (
    <div>
      <div class="sidebar">
        <div class="header">Ganimation</div>
        <ul class="nav">
          <li><a href="/website">Home</a></li>
          <li><a href="/website/about">About</a></li>
          <li><a href="/website/news">News</a></li>
          <li><a href="/website/download">Download</a></li>
          <li><a href="/website/policy">Policy</a></li>
          <li><a href="/website/license">License</a></li>
        </ul>
      </div>

      <div class="main-part">
        <BrowserRouter>
          <Route />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;