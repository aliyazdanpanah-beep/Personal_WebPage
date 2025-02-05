import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Section1.css";

const Section1 = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className="Section1_Mine_wrapper">
      <div className="H1">
        <h1>Welcome to My Personal Website</h1>
      </div>
      <div className="Section1_Wrapper">
        <img
          src={props.data.imageURL}
          className="imageURL"
          data-aos="fade-down-right"
        />

        <div className="sec1_text">
          <p data-aos="fade-left"> {props.data.text1} </p>
          <p data-aos="fade-left"> {props.data.text2} </p>
          <p data-aos="fade-left"> {props.data.text3} </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
