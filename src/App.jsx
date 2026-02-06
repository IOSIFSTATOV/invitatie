import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout.jsx'
import MainContent from './componets/MainContent/MainContent.jsx'

import styles from './App.module.css'

function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainContent />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
