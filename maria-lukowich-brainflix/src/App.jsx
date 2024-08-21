import './App.scss'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import UploadPage from "./pages/UploadPage/UploadPage"
import Header from './components/Header/Header'


function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:id" element={<Home />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
