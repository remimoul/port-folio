import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../front-end/components/home';
import AboutPage from '../front-end/components/whoiam';
import Experience from '../front-end/components/experience';
import Login from '../front-end/components/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/experience" component={Experience} />
        <Route path="/login" component={Login} />
      </Routes>
    </Router>
  );
}

export default App;
