import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
