import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthProvider/AuthProvider';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/terms-of-use' element={<Home />} />
        <Route path='/privacy-policy' element={<Home />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
