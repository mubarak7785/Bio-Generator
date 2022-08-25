import "./BioGenerator.css";
export const Biogenerator = () => {
  return (
    <div className="App" id="app">
      <h1 className="heading">Bio - Generator</h1>
      <div className="container">
        <div className="option">
          <h2 className="box">Options</h2>
          <div className="box">
            <label>Profile photo</label>
            <input type="file" ></input>
          </div>
          <div className="box">
            <label>Name</label>
            <input
              type="text"
              
              placeholder="Enter name"
             
            />
            <label>Gender</label>
            <select >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <button >Random name</button>
          </div>
        </div>
        <div className="result" id="result">
          <h2 className="box">Result</h2>
         
        </div>
      </div>
    </div>
  );
};
