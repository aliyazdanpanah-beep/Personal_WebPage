import "./Section_2.css"

const Project = (props) => {
  return (
    <div className="Project_Wrapper">
      <div className="proj_item"> {props.data.text} </div>
      {/* <div className="proj_item"> {props.data.text} </div>
      <div className="proj_item"> {props.data.text} </div>
      <div className="proj_item"> {props.data.text} </div>
      <div className="proj_item"> {props.data.text} </div>
      <div className="proj_item"> {props.data.text} </div> */}
    </div>
  )
}

export default Project