import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../front-end/components/home';
import AboutPage from '../front-end/components/whoiam';
import Experience from '../front-end/components/experience';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/experience" component={Experience} />
      </Routes>
    </Router>
  );
}

export default App;
