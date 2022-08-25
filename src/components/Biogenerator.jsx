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
            <input type="file"></input>
          </div>
          <div className="box">
            <label>Name</label>
            <input type="text" placeholder="Enter name" />
            <label>Gender</label>
            <select>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <button>Random name</button>
          </div>
          <div className="box">
            <input type="checkbox" value="false"></input>
            <label>Location</label>
            <input type="text"></input>
            <button>Random Location</button>
          </div>
          <div className="box">
            <input type="checkbox" value="false"></input>
            <label>School</label>
            <input type="text"></input>
            <button>Random School</button>
            <br />
            <label>Specialization</label>
            <input type="text"></input>
            <button>Random Specialization</button>
          </div>
          <div className="box">
            <input type="checkbox" value="false"></input>
            <label>Occupation</label>
            <input type="text"></input>
            <button>Random Occupation</button>
          </div>
        </div>
        <div className="result" id="result">
          <h2 className="box">Result</h2>
        </div>
      </div>
    </div>
  );
};
