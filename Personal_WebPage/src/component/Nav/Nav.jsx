import "./Nav.css";

const Nav = (props) => {
  return (
    <div className="Nav_wrapper">
      <div className="Nav_Text">
        <span> {props.data.conectMe} </span>
      </div>

      <div className="Nav_Text">
        <span> {props.data.home} </span>
        <span> {props.data.about} </span>
        <span> {props.data.project} </span>
        <span> {props.data.linkdin} </span>
      </div>
    </div>
  );
};

export default Nav;
