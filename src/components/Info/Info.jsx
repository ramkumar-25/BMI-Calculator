import React from 'react'
import "./Info.css"

const Info = () => {
  return (
    <div className='info'>
        <div className="bmi-table-info">
            <h2>BMI table for adults</h2>
            <p>This is the World Health Organization's (WHO) recommended body weight based on BMI values for adults. It is used for both men and women, age 20 or older.</p>
         <div className='bmi-table'>
             <table >
                 <thead>
                    <th>Classification</th>
                    <th>BMI range -  kg/m<sup>2</sup></th>
                 </thead>
                 <tbody>
                <tr>
                    <td>Severe Thinness</td>
                    <td> &lt; 16 </td>
                 </tr>
                 <tr>
                    <td>Moderate Thinness</td>
                    <td> 16-17 </td>
                 </tr>
                 <tr>
                    <td>Mid Thinness</td>
                    <td>  17-18.5 </td>
                 </tr>
                 <tr>
                    <td>Normal</td>
                    <td>18.5-25 </td>
                 </tr>
                 <tr>
                    <td>Overweight</td>
                    <td> 25-30 </td>
                 </tr>
                 <tr>
                    <td>Obese class-1</td>
                    <td> 30-35 </td>
                 </tr>
                 <tr>
                    <td>Obese class-2</td>
                    <td> 35-40</td>
                 </tr>
                 <tr>
                    <td>Obese class-3</td>
                    <td> &gt; 40</td>
                 </tr>  
                 </tbody>
                 
            </table>
            </div>  
        </div>
        <div className="bmi-overweight-risk">
            <h2>Risks associated with being overweight</h2>
            <p>Being overweight increases the risk of a number of serious diseases and health conditions. Below is a list of said risks, according to the Centers for Disease Control and Prevention (CDC):</p>
            <ul>
                <li>High blood pressure</li>
                <li>Higher levels of LDL cholesterol, which is widely considered "bad cholesterol," lower levels of HDL cholesterol, considered to be good cholesterol in moderation, and high levels of triglycerides</li>
                <li>Type II diabetes</li>
                <li>Coronary heart disease</li>
                <li>Stroke</li>
                <li>Gallbladder disease</li>
                <li>Osteoarthritis, a type of joint disease caused by breakdown of joint cartilage</li>
                <li>Sleep apnea and breathing problems</li>
                <li>Certain cancers (endometrial, breast, colon, kidney, gallbladder, liver)</li>
                <li>Low quality of life</li>
                <li>Mental illnesses such as clinical depression, anxiety, and others</li>
                <li>Body pains and difficulty with certain physical functions</li>
                <li>Generally, an increased risk of mortality compared to those with a healthy BMI</li>
            </ul>
           <p>As can be seen from the list above, there are numerous negative, in some cases fatal, outcomes that may result from being overweight. Generally, a person should try to maintain a BMI below 25 kg/m2, but ideally should consult their doctor to determine whether or not they need to make any changes to their lifestyle in order to be healthier.</p>
        </div>

        <div className="risk-underweight">
            <h2>Risks associated with being underweight</h2>
            <p>Being underweight has its own associated risks, listed below:</p>
            <ul>
                <li>Malnutrition, vitamin deficiencies, anemia (lowered ability to carry blood vessels)</li>
                <li>Osteoporosis, a disease that causes bone weakness, increasing the risk of breaking a bone</li>
                <li>A decrease in immune function</li>
                <li>Growth and development issues, particularly in children and teenagers</li>
                <li>Possible reproductive issues for women due to hormonal imbalances that can disrupt the menstrual cycle. Underweight women also have a higher chance of miscarriage in the first trimester</li>
                <li>Potential complications as a result of surgery</li>
                <li>Generally, an increased risk of mortality compared to those with a healthy BMI</li>
            </ul>
            <p>In some cases, being underweight can be a sign of some underlying condition or disease such as anorexia nervosa, which has its own risks. Consult your doctor if you think you or someone you know is underweight, particularly if the reason for being underweight does not seem obvious.</p>
        </div>

        <div className="limitation-bmi">
            <h2>Limitations of BMI</h2>
            <p>Although BMI is a widely used and useful indicator of healthy body weight, it does have its limitations. BMI is only an estimate that cannot take body composition into account. Due to a wide variety of body types as well as distribution of muscle, bone mass, and fat, BMI should be considered along with other measurements rather than being used as the sole method for determining a person's healthy body weight.</p>
            <h3>In adults:</h3>
            <p>BMI cannot be fully accurate because it is a measure of excess body weight, rather than excess body fat. BMI is further influenced by factors such as age, sex, ethnicity, muscle mass, body fat, and activity level, among others. For example, an older person who is considered a healthy weight, but is completely inactive in their daily life may have significant amounts of excess body fat even though they are not heavy. This would be considered unhealthy, while a younger person with higher muscle composition of the same BMI would be considered healthy. In athletes, particularly bodybuilders who would be considered overweight due to muscle being heavier than fat, it is entirely possible that they are actually at a healthy weight for their body composition. Generally, according to the CDC:</p>
            <ul>
                <li>Older adults tend to have more body fat than younger adults with the same BMI.</li>
                <li>Women tend to have more body fat than men for an equivalent BMI.</li>
                <li>Muscular individuals and highly trained athletes may have higher BMIs due to large muscle mass.</li>
            </ul>
        </div>

    </div>
  )
}

export default Info