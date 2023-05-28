import { useState } from "react";
import Mymodel from "./Mymodel";

const Login = () => {
  const [show, setshow] = useState(false);

  const closeModel = () =>{
    setshow(false);
  }

 
  return (
    <>
      <button className="button"
        onClick={() => {
          setshow(true);
        }}
      >
        Login

      </button>
      {show && <Mymodel closeModel = {closeModel}/>}
    </>
  );
};

export default Login;
