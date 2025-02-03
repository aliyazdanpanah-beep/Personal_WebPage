import "./Section1.css";

const Section1 = (props) => {
  return (
    <div className="Section1_Wrapper">
      <img src={props.data.imageURL} className="imageURL" />

      <div className="sec1_text">
          <p> {props.data.text1} </p>
          <p> {props.data.text2} </p>
          <p> {props.data.text3} </p>
      </div>
    </div>
  );
};

export default Section1;
