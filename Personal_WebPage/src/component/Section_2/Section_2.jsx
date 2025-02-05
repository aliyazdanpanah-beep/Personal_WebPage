import "./Section_2.css"
import AOS from "aos"
import "aos/dist/aos.css";


const Project = (props) => {
  return (
    <div className="Project_Wrapper">
      <div data-aos="fade-right" className="proj_item"> {props.data.text} </div>
      <div data-aos="fade-right" className="proj_item"> {props.data.text} </div>
      <div data-aos="fade-right" className="proj_item"> {props.data.text} </div>
      <div className="proj_item"> {props.data.text} </div>
      <div className="proj_item"> {props.data.text} </div>
      <div className="proj_item"> {props.data.text} </div>
    </div>
  )
}

export default Project