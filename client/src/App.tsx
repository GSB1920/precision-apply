import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import PublicLayout from './components/layout/public/layout'
import HomePage from './pages/public/HomePage'

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root path to home */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        
        {/* Public routes */}
        <Route path="/home" element={
          <PublicLayout>
            <HomePage />
          </PublicLayout>
        } />
        
        {/* Future routes can be added here */}
        {/* <Route path="/analyze" element={<AnalyzePage />} /> */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
      </Routes>
    </Router>
  )
}

export default App