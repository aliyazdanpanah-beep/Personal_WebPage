import Nav from "../../components/Nav/Nav";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [nav, setNav] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/Nav").then((result) => {
      setNav(result.data.data);
    });
  }, []);
  return <Nav />;
};

export default Home;
