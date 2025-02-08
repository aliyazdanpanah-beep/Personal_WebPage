import "./App.css"
import About from "./Page/About/About"
import HomE from "./Page/Home/Home"
import { Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"

const App = () => {
  return (
    // <HomE />

    <Routes>
       <Route path="/" element = {<HomE />} />
       <Route path="/about" element = {<About />} />
    </Routes>


  )
}

export default App