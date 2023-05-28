
import { useEffect } from "react";
import classes from "./Login.module.css";
import  ReactDOM  from "react-dom";



import  './Mymodel.css'

const Mymodel = ({closeModel}) => {
  useEffect(()=>{
    document.body.style.overflow ="hidden";
    return ()=>{
      document.body.style.overflowY ="scroll";
    };
   
  },[]);

 
  
 
  return ReactDOM.createPortal( <>
  <div className="modal-wrapper" onClick={closeModel} ></div>
  <div className="modal-container" >


      <form className={classes.form}>
          <label>Name:</label>
          <input type="text" />
          <br />
          <label>Password:</label>
          <input type="password" />
          <br />
          <input
            type="submit"
            onClick={closeModel}
          />
        </form>
  </div>
  
  </>, document.querySelector(".myPortalDiv")
  );
}
 
export default Mymodel;