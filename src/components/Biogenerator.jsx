import { useEffect, useState } from "react";
import "./BioGenerator.css";

export const Biogenerator = () => {
  const [name, setName] = useState("Mubarak");
  const [image, setimage] = useState("");
  const [location, setLocation] = useState("Belgaum");
  const [gender, setGender] = useState("male");
  const [isCheckedLocation, setIsCheckedLocation] = useState(true);

  const handleInputName = (e) => {
    setName(e.target.value);
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };
  const handleOnChangeLocation = () => {
    setIsCheckedLocation(!isCheckedLocation);
  };
  const handleInputLocation = (e) => {
    setLocation(e.target.value);
  };

  const photoUpload = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setimage(reader.result);
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="App" id="app">
      <h1 className="heading">Bio - Generator</h1>
      <div className="container">
        <div className="option">
          <h2 className="box">Options</h2>
          <div className="box">
            <label>Profile photo</label>
            <input type="file" onChange={photoUpload}></input>
          </div>
          <div className="box">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={handleInputName}
            />
            <label>Gender</label>
            <select onChange={(e) => handleGender(e)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <button>Random name</button>
          </div>
          <div className="box">
            <input
              type="checkbox"
              value="false"
              checked={isCheckedLocation}
              onChange={handleOnChangeLocation}
            ></input>
            <label>Location</label>
            <input type="text"
            value={location}
            onChange={handleInputLocation}
            ></input>
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
          <div className="box">
            <input type="checkbox" value="false"></input>
            <label>Religious background</label>
            <br />
            <textarea rows="5" cols="50"></textarea>
            <br />
            <button>Random religion</button>
          </div>
          <div className="box">
            <input type="checkbox" value="false"></input>
            <label
              style={{
                verticalAlign: "middle",
                margin: "3px",
                marginBottom: "6px",
                padding: "0",
                color: "#222",
              }}
            >
              meeting reason
            </label>
            <textarea className="textarea" rows="5" cols="20"></textarea>
            <button className="selectbutton">For peace</button>
            <button className="selectbutton">For personal reason</button>
            <button className="selectbutton">For prayer</button>
          </div>
        </div>
        <div className="result" id="result">
          <h2 className="box">Result</h2>
          <div className="imagediv">
            {image ? <img src={image} alt="profile photo" /> : null}
          </div>

          <div className="box">
            {name}
            {gender}
            {location}
          </div>
        </div>
      </div>
    </div>
  );
};
