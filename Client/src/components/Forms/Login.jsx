import { useState } from "react";
import style from "./Login.module.css";
import {useNavigate} from 'react-router-dom';
import { useEffect } from "react";


const validate = (form, errors, setErrors) => {
  if (!form.email) setErrors({ ...errors, email: "Email cannot be empty" });
  else {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email))
      setErrors({ ...errors, email: "" });
    else setErrors({ ...errors, email: "Email invalid. Type: example@gmail.com" });
  }

  if (!form.password) setErrors({ ...errors, password: "Password cannot be empty. Type: 1234" });

};

const Form = () => {

  const email = 'example@gmail.com';
  const password = '1234'


  const [form, setForm] = useState({
    email: "",
    password: "",
  });
const [access, setAccess] = useState(false);
const navigate = useNavigate();
  
  

  
useEffect(() => {
  !access && navigate('/');
}, [access]);
  

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    login: ""
   
  });

  const login = (form) =>{
    if (form.password === password && form.email === email) {
      setAccess(true);
      navigate('/home');
   }
   else{
      alert('Invalid details');
   }
  }
  

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    validate({ ...form, [property]: value }, errors, setErrors);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    login(form);
  };

  return (
    <div className="form-container">

    <form onSubmit={submitHandler}>
      <div>
      
        <img className={style.rmLogo}  src="../../src/assets/login.png" alt="" />
       
        
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          className={errors.email ? style.error : style.success}
        />
        
      </div>
      <span>{errors.email}</span>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
       
      </div>
      <span>{errors.password}</span>
      <span>{errors.login}</span>
      <button type="submit">Login</button>
    </form>

    </div>
  );
};

export default Form;
