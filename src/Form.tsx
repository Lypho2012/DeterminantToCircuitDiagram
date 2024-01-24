import { useState, SetStateAction } from "react";

export const [n, setN] = useState(0);
const createMatrix = () => {
  const res = [];
  for (let i=0;i<n;i++) {
    for (let j=0; j<n; j++) {
      res.push({i:i,j:j});
    }
  }
  return res;
}
export const [matrixEntries, setMatrixEntries] = useState(createMatrix());
function Form() {
  
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setMatrixEntries(createMatrix())
  }
  const handleChange = (event: { preventDefault: () => void; target: { value: SetStateAction<string>; }; }) => {
    event.preventDefault();
    setN(+event.target.value)
  }
  return (
    <div>
      some text
      <form onSubmit={handleSubmit}>
        <label>
          n = 
          <input type="text" pattern="[0-9]*" onChange={handleChange}/>
        </label>
        <input type="submit" value="Generate empty matrix"/>
      </form>
    </div>
  )
}
export default Form