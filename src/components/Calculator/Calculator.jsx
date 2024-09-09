import React, { useState } from 'react'
import './Calculator.css'
import bmi_cal from "../../assets/bmi calculator.png"

const Calculator = () => {
   const[height,setHeight] =useState("");
   const[weight,setWeight] = useState("")
   const[bmi,setBmi] = useState(null);
   const[bmiStatus,setBmiStatus]= useState("");
   const[errorMessage,setErrorMessage]= useState("")

   const calculateBmi = ()=>{
      const isValidHeight =/^\d+$/.test(height)
      const isValidWeight =/^\d+$/.test(weight)

      if(isValidHeight && isValidWeight){
        const heightInMeters = height /100;
        const bmiValue = weight /(heightInMeters * heightInMeters);
        setBmi(bmiValue.toFixed(2));
        if(bmiValue<18.5){
         setBmiStatus("Under Weight");
        }
        else if(bmiValue>=18.5&& bmiValue<24.9){
         setBmiStatus("Normal Weight")
        }
        else if(bmiValue>=25 && bmiValue<29.9){
         setBmiStatus("Overweight")
        }else{
         setBmiStatus('Obese')
        }
        setErrorMessage("")

      }else{
         setBmi(null);
         setBmiStatus("")
         setErrorMessage("please enter numeric value to height and weight")
      }
   }

   const clearAll =()=>{
      setBmi(null);
      setBmiStatus("")
      setHeight('');
      setWeight("")
      setErrorMessage("")
   }

  return (
    <div className='calculator'>
      <div className="bmi-content">
         <img src={bmi_cal} alt="" />
         </div>
         <div className="bmi-cal-box">
            <h1>BMI Calculator</h1>

         {errorMessage && <p className='error'>{errorMessage}</p> }
            <div className="input-conatainer">
               <label htmlFor="height">Height(cm):</label>
               <input type="text" id="height" value={height} onChange={(e)=>setHeight(e.target.value)}/>
            </div>
            <div className="input-conatainer">
               <label htmlFor="weight">Weight(kg):</label>
               <input type="text" id="weight" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
            </div>
            <div className="buttons">
                <button className='btn-cal' onClick={calculateBmi}>Calculate BMI</button>
                <button className='clear' onClick={clearAll}>Clear</button>
            </div>
           {bmi!==null && (
             <div className="result">
             <p>Your BMI is:{bmi}</p>
             <p>Status: {bmiStatus}</p>
           </div>
           )}
         </div>

      
    </div>
  )
}

export default Calculator