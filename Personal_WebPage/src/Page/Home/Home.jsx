import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import Nav from "../../component/Nav/Nav";
import Section1 from "../../component/Section_1/Section1";

const HomE = () => {
  const [nav, setNav] = useState([]);
  const [sec1, setSec1] = useState([]);

  useEffect(() => {
    // API call

    axios.get("http://localhost:8000/Nav").then((result) => {
      setNav(result.data.data);

      axios.get("http://localhost:8000/Section1").then((res) => {
        setSec1(res.data.data);
      });
    });
  }, []);

  return (
    <div className="Nav">
      {nav.map((DataBase) => (
        <Nav key={DataBase.id} data={DataBase} />
      ))}

      {sec1.map((SEC1) => (
        <Section1 data={SEC1} key={SEC1.id} />
      ))}
    </div>
  );
};

export default HomE;
