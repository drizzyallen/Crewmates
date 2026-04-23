import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import CreatePage from './createPage.jsx'
import ViewPage from './ViewPage.jsx'
import UpdatePage from './UpdatePage.jsx'
import DetailPage from './DetailPage.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/view" element={<ViewPage />} />
        <Route path="/dragon/:id" element={<DetailPage />} />
        <Route path="/update/:id" element={<UpdatePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
