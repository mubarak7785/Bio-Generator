import { useEffect, useState } from "react";
import "./BioGenerator.css";

export const Biogenerator = () => {
  const [name, setName] = useState("Mubarak");
  const [image, setimage] = useState("./zayn.jpg");
  const [location, setLocation] = useState("Belgaum");
  const [gender, setGender] = useState("male");
  const [school, setSchool] = useState("GIT Institute Technology");
  const [religion, setReligion] = useState("atheist, and has no experience with spiritual things");
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
    let nameArr = ["Mubarak", "Asif", "Tousif", "Pavan","Vishal","Jhon","Satya","Vijay"];
    setName(nameArr[Math.floor(Math.random() * 8)]);
  };
  const generateRandomLocation = () => {
    let nameArr = ["Belgaum", "Mumbai", "Nagpur", "Pune","Bijapur","Kashmir","Delhi","Miraj"];
    setLocation(nameArr[Math.floor(Math.random() * 8)]);
    console.log();
  };

  const generateRandomSchool = () => {
    let schoolArray = ["GIT Institute Technology", "Adarsh Internatinal School", "KLE Institute", "JNMC School","Ligayat Education School","Junnedia BRT School","Puna College Branch SChool","Gogte Technology School"];
    setSchool(schoolArray[Math.floor(Math.random() * 8)]);
    console.log();
  };

  const generateRandomSpecialization = () => {
    let nameArr = ["Science", "Arts", "commerce", "Socialscience","Agriculture"];
    setStream(nameArr[Math.floor(Math.random() * 5)]);
  };

  const generateRandomOccupation = () => {
    let OccuptionArray = ["Engineer", "Developer", "businessman", "Politacian","Tester","Doctor","Welder","Tailor"];
    setOccupation(OccuptionArray[Math.floor(Math.random() * 8)]);
    console.log();
  };

  const generateRandomReligion = () => {
    let religionArray = ["atheist, and has no experience with spiritual things", "in a Christian home with little activity within his religion", "in a family that always encouraged a belief in God, but never attended one church consistently","in a dysfunctional family that had little to no belief in God, or believed in a harsh deity","Lutheran, and has a strong belief in Christ and the Bible","without any religion in the home. For most of [PossessivePronoun] life, [SubjectPronoun] has never had any interest in spiritual things"];
    setReligion(religionArray[Math.floor(Math.random() * 6)]);
    console.log();
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
            <button onClick={generateRandomLocation}>Random Location</button>
          </div>
          <div className="box">
            <input type="checkbox" value="false" checked={isCheckedSchool}
              onChange={handleOnChangeSchool}></input>
            <label>School</label>
            <input type="text"
              value={school}
              onChange={handleInputSchool}
            ></input>
            <button onClick={generateRandomSchool}>Random School</button>
            <br />
            <label>Specialization</label>
            <input type="text"
            value={stream}
            onChange={handleInputStream}
            ></input>
            <button onClick={generateRandomSpecialization}>Random Specialization</button>
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
            <button onClick={generateRandomOccupation}>Random Occupation</button>
          </div>
          <div className="box">
            <input type="checkbox" value="false"  checked={isCheckedReligion}
              onChange={handleOnChangeReligion}></input>
            <label>Religious background</label>
            <br />
            <textarea rows="5" cols="50"  value={religion}
              onChange={handleReligion}></textarea>
            <br />
            <button onClick={generateRandomReligion}>Random religion</button>
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
            <button className="selectbutton"
             onClick={() => setMeeting("for peace of mind for his life carrier")}
            >For peace</button>
            <button className="selectbutton"  
             onClick={() => setMeeting("for personal reason so that can figure out the solution of the problem")}
            >For personal reason</button>
            <button className="selectbutton"
            onClick={() => setMeeting("for payer to fill energetic and to have some positive vibes for the day and for the relax mind")}
            >For prayer</button>
            <button className="selectbutton"
            onClick={() => setMeeting("struggles to understand why bad things happen to good people")}
            >Plan of Salvation</button>
            <button className="selectbutton"
            onClick={() => setMeeting("he believes that meeting with the missionaries will help [ObjectPronoun] to be a more spiritual and righteous person")}
            >Any Lessons</button>
          </div>
        </div>
        <div className="result" id="result">
          <h2 className="box">Result</h2>
          <div className="imagediv">
            {image ? <img src={image} alt="profile photo" /> : null}
          </div>

          <div className="box">
          {name} {isCheckedLocation ? `is from ${location}` : null}{" "}
            {isCheckedSchool
              ? `${
                  gender == "male" ? "He" : "She"
                } is studying ${stream} from ${school}`
              : null}
            .
            {isCheckedOccuption
              ? `${
                  gender == "male" ? " His" : " Her"
                } occupation is ${occupation}`
              : null}
            {isCheckedReligion
              ? `${gender == "male" ? " His" : " Her"} was raised ${religion}`
              : null}{" "}
            {gender == "male" ? "He" : "She"}{" "}
            {isChecked ? `wants to meet you for ${meeting}` : null}
          </div>
        </div>
      </div>
    </div>
  );
};
