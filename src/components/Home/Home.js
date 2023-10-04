import React from "react";
import styles from "./Home.module.css";
import InputField from "../InputFields/InputFields";
import { useState } from "react";

export default function Home() {
  const [values, Setvalues] = useState({
    weight: "",
    height: "",
  });
  const [errormsg, setError] = useState("")

  const [message, setMessage] = useState("")

  const [bmi,setbmi] = useState("")

  // const [succesmsg, setSuccess] = useState("")

  function handlefunction(){
    if (!values.weight || !values.height ){
      setError("Please enter all the values")
      return
    }
    setError("")
    console.log(values)
    let bmi = (values.weight/values.height/values.height)*10000.;
    setbmi(bmi.toFixed(1))

    if(bmi<18.5){
      setMessage("You are overweight 🤨")
    }
    else if (bmi>18.5 && bmi<24.9){
      setMessage("You are healthy weight 😄")
    }
    else{
      setMessage("Your are overweight 😫")
    }

  }

  let Reload = (e) =>{
    window.location.reload();
  }
  


  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerbox}>
          <h2 className={styles.heading}>BMI Calculator</h2>

        <InputField
          label="Weight"
          type="number"
          placeholder="Enter your weight"
          value={values.weight}
          onChange={(event) => {
            Setvalues((prev) => ({ ...prev, weight: event.target.value }));
          }}
        ></InputField>

        <InputField 
        label="Height"
        type="number"
        placeholder = "Enter your Height"
        value={values.height}
        onChange={(event) =>{
          Setvalues((prev) => ({...prev, height:event.target.value }))
        }}
        
        ></InputField>

        <div className={styles.footer}>
          <b className={styles.error}>{errormsg}</b>
          {/* <b className={styles.succes}>{succesmsg}</b> */}
          <br />
      
          <button className={styles.button} onClick={handlefunction}>Submit</button>
          
          <button className={styles.button2} onClick={Reload}>reload</button>
        </div>

        <div className={styles.center}>
          <h4 align="center">{`Your BMI is: ${bmi}`}</h4>
        </div>
        <p align="center">{message}</p>

        </div>
      </div>
    </>
  );
}
