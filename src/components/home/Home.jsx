import React from 'react'
import './Home.css'
import bmi_img from "../../assets/bmi_image.jpg"

const Home = () => {
  return (
    <div className='home'>
       <div className="bmi-img">
            <img src={bmi_img} alt="" />
        </div>  
        <div className='bmi-info'>
            <h1>BMI INTRODUCTION</h1>
        <p>BMI is a measurement of a person's leanness or corpulence based on their height and weight, and is intended to quantify tissue mass. It is widely used as a general indicator of whether a person has a healthy body weight for their height. Specifically, the value obtained from the calculation of BMI is used to categorize whether a person is underweight, normal weight, overweight, or obese depending on what range the value falls between. These ranges of BMI vary based on factors such as region and age, and are sometimes further divided into subcategories such as severely underweight or very severely obese. Being overweight or underweight can have significant health effects, so while BMI is an imperfect measure of healthy body weight, it is a useful indicator of whether any additional testing or action is required. </p>
        </div>
       
        
    </div>
  )
}

export default Home