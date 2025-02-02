import Nav from "../../components/Nav/Nav";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [nav, setNav] = useState([]);

  useEffect(() => {
    // API call

    axios.get("http://localhost:8000/Nav").then((result) => {
      setNav(result.data.data);
    });
  }, []);

  return (
    <div className="Nav">
      {nav.map((DataBase) => (
        <Nav key={DataBase.id} data={DataBase} />
      ))}
    </div>
  );
};

export default Home;
