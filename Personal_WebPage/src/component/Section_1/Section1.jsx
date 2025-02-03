import "./Section1.css";

const Section1 = (props) => {
  return (
    <div className="Section1_Wrapper">
      <img src={props.data.imageURL} className="imageURL" />
    </div>
  );
};

export default Section1;
