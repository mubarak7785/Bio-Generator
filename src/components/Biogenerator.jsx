import { useEffect, useState } from "react";
import "./BioGenerator.css";

export const Biogenerator = () => {
  const [name, setName] = useState("Mubarak");
  const [image, setimage] = useState("./zayn.jpg");
  const [location, setLocation] = useState("Belgaum");
  const [gender, setGender] = useState("male");
  const [school, setSchool] = useState("GIT");
  const [religion, setReligion] = useState("Hindu");
  const [occupation, setOccupation] = useState("Engineer");
  const [stream, setStream] = useState("Engineering");
  const [meeting, setMeeting] = useState("just conversation");
  const [isCheckedOccuption, setIsCheckedoccuption] = useState(true);
  const [isChecked, setIsChecked] = useState(true);
  const [isCheckedLocation, setIsCheckedLocation] = useState(true);
  const [isCheckedReligion, setIsCheckedReligion] = useState(true);
  const [isCheckedSchool, setIsCheckedSchool] = useState(true);



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

  const handleOnChangeSchool = () => {
    setIsCheckedSchool(!isCheckedSchool);
  };

  const handleInputSchool = (e) => {
    setSchool(e.target.value);
  };

  const handleInputStream = (e) => {
    setStream(e.target.value);
  };

  const handleOccupation = (e) => {
    setOccupation(e.target.value);
  };

  const handleOnChangeOccuption = () => {
    setIsCheckedoccuption(!isCheckedOccuption);
  };

  const handleReligion = (e) => {
    setReligion(e.target.value);
  };

  const handleOnChangeReligion = () => {
    setIsCheckedReligion(!isCheckedReligion);
  };

  const handleMeeting = (e) => {
    setMeeting(e.target.value);
  };

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const generateRandomName = () => {
    let schoolArray = ["Mubarak", "Asif", "Tousif", "Pavan","Vishal","Jhon","Satya","Vijay"];
    setName(schoolArray[Math.floor(Math.random() * 8)]);
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
            <button onClick={generateRandomName}>Random name</button>
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
            <input type="checkbox" value="false" checked={isCheckedSchool}
              onChange={handleOnChangeSchool}></input>
            <label>School</label>
            <input type="text"
              value={school}
              onChange={handleInputSchool}
            ></input>
            <button>Random School</button>
            <br />
            <label>Specialization</label>
            <input type="text"
            value={stream}
            onChange={handleInputStream}
            ></input>
            <button>Random Specialization</button>
          </div>
          <div className="box">
            <input type="checkbox" value="false"
             checked={isCheckedOccuption}
             onChange={handleOnChangeOccuption}
            ></input>
            <label>Occupation</label>
            <input type="text"
            value={occupation}
            onChange={handleOccupation}
            ></input>
            <button>Random Occupation</button>
          </div>
          <div className="box">
            <input type="checkbox" value="false"  checked={isCheckedReligion}
              onChange={handleOnChangeReligion}></input>
            <label>Religious background</label>
            <br />
            <textarea rows="5" cols="50"  value={religion}
              onChange={handleReligion}></textarea>
            <br />
            <button>Random religion</button>
          </div>
          <div className="box">
            <input type="checkbox" value="false"  checked={isChecked}
              onChange={handleOnChange} ></input>
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
            <textarea className="textarea" rows="5" cols="20"  value={meeting}
              onChange={handleMeeting}></textarea>
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
            {school}
            {stream}
            {occupation}
            {religion}
            {meeting}
          </div>
        </div>
      </div>
    </div>
  );
};
