import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Error from "./pages/error";
import Main from "./pages/links";
import './style/index.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About data='this is the about page'/>} />
            <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App