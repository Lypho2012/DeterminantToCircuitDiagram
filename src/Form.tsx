import { useState } from "react";
import Matrix from './Matrix'

/*
Cindy Zhang

Textbox for taking user input for size of square matrix
Calls function for creating matrix
*/

function Form() {
  const [size, setSize] = useState(1);
  const [isMatrixGenerated, setIsMatrixGenerated] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsMatrixGenerated(true);
  }
  const handleChange = (event) => {
    event.preventDefault();
    try {
      let temp = parseInt(event.target.value);
      if (temp % 1 != 0) {temp = 1;}
      setSize(temp);
    } catch (Exception) {
      setSize(1);
    }
    setIsMatrixGenerated(false);
  }
  return (
    <div>
      some text
      <form onSubmit={handleSubmit}>
        <label>
          n = 
          <input type="text" onChange={handleChange}/>
        </label>
        <input type="submit" value="Generate empty matrix"/>
      </form>
      {
        isMatrixGenerated ? (<Matrix n={size}/>) : (<Matrix n={1}/>)
      }
    </div>
  )
}
export default Form