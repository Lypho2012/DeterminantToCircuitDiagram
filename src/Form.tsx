import { useState } from "react";
import Matrix from './Matrix'

function Form() {
  const [size, setSize] = useState(0);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    Matrix(n=size);
  }
  const handleChange = (event) => {
    event.preventDefault();
    setSize(parseInt(event.target.value));
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
    </div>
  )
}
export default Form