import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
// ====================================================
import Layout from './components/Layout';
import HomePage from './pages/HomePage/HomePage';
import StatisticPage from './pages/StatisticPage/StatisticPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/statistics/*' element={<StatisticPage />} />
            <Route index element={<HomePage />} />
            <Route path='*' element={<Navigate to='/' replace={true} />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
