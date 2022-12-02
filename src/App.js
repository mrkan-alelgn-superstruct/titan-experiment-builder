import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthProvider/AuthProvider';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/terms-of-use' element={<Home />} />
        <Route path='/privacy-policy' element={<Home />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
