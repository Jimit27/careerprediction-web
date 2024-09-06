"use client";
import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Select, MenuItem, InputLabel } from "@material-ui/core";
import axios from "axios";
import "reactjs-popup/dist/index.css";

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
  {
    value: 6,
    label: "6",
  },
  {
    value: 7,
    label: "7",
  },
  {
    value: 8,
    label: "8",
  },
  {
    value: 9,
    label: "9",
  },
  {
    value: 10,
    label: "10",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  slider: {
    width: 300,
    margin: "0 auto",
  },
}));
function CareerForm() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [prediction, setPrediction] = useState("");
  const [progress, setProgress] = useState(0);

  const [formValues, setFormValues] = React.useState({
    logicalQuotientRating: 5,
    codingSkillsRating: 5,
    hackathons: 5,
    publicSpeakingPoints: 5,
    selfLearningCapability: "Yes",
    extraCoursesDid: "Yes",
    takenInputsFromSeniorsOrElders: "Yes",
    workedInTeamsEver: "Yes",
    introvert: "Yes",
    readingAndWritingSkills: "poor",
    memoryCapabilityScore: "poor",
    smartOrHardWork: "Smart worker",
    managementOrTechnical: "Management",
    interestedSubjects: "programming",
    interestedTypeOfBooks: "Series",
    certifications: "information security",
    workshops: "Testing",
    typeOfCompanyWantToSettleIn: "BPA",
    interestedCareerArea: "testing",
  });

  useEffect(() => {
    // Simulate progress bar
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.min(oldProgress + 1, 100);
      });
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  const handleSliderChange = (name: any) => (event: any, newValue: any) => {
    setFormValues({ ...formValues, [name]: newValue });
  };

  const handleInputChange = (event: any) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleCheckboxChange = (event: any) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.checked ? "Yes" : "No",
    });
  };

  const handleSubmitChange = async (event: any) => {
    event.preventDefault();
    const body = {
      coding_skills_rating: formValues.codingSkillsRating,
      logical_quotient_rating: formValues.logicalQuotientRating,
      hackathons: formValues.hackathons,
      public_speaking_points: formValues.publicSpeakingPoints,
      self_learning_capability: formValues.selfLearningCapability,
      extra_courses_did: formValues.extraCoursesDid,
      taken_inputs_from_seniors_or_elders:
        formValues.takenInputsFromSeniorsOrElders,
      worked_in_teams_ever: formValues.workedInTeamsEver,
      introvert: formValues.introvert,
      reading_and_writing_skills: formValues.readingAndWritingSkills,
      memory_capability_score: formValues.memoryCapabilityScore,
      smart_or_hard_work: formValues.smartOrHardWork,
      management_or_technical: formValues.managementOrTechnical,
      interested_subjects: formValues.interestedSubjects,
      interested_type_of_books: formValues.interestedTypeOfBooks,
      certifications: formValues.certifications,
      workshops: formValues.workshops,
      type_of_company_want_to_settle_in: formValues.typeOfCompanyWantToSettleIn,
      interested_career_area: formValues.interestedCareerArea,
    };
    console.log(body);
    setIsOpen(true);
    setProgress(0);
    //@ts-ignore
    const response = await axios.post(process.env.NEXT_PUBLIC_URL, body);
    if (response.data.error) {
      console.log(response.data.error);
      setPrediction("Software Development Engineer");
    } else {
      setPrediction(response.data.prediction);
    }
  };

  return (
    <div className="text-white m-10">
      <form className={classes.root} noValidate autoComplete="off">
        <Typography id="discrete-slider" gutterBottom>
          Logical Quotient Rating
        </Typography>
        <Slider
          className={classes.slider}
          value={formValues.logicalQuotientRating}
          onChange={handleSliderChange("logicalQuotientRating")}
          aria-labelledby="continuous-slider"
          marks={marks}
          min={0}
          max={10}
        />
        <Typography id="discrete-slider" gutterBottom className="pt-8">
          Coding Skills Rating
        </Typography>
        <Slider
          className={classes.slider}
          value={formValues.codingSkillsRating}
          onChange={handleSliderChange("codingSkillsRating")}
          aria-labelledby="continuous-slider"
          marks={marks}
          min={0}
          max={10}
        />
        <Typography id="discrete-slider" gutterBottom className="pt-8">
          Hackathons
        </Typography>
        <Slider
          className={classes.slider}
          value={formValues.hackathons}
          onChange={handleSliderChange("hackathons")}
          aria-labelledby="continuous-slider"
          marks={marks}
          min={0}
          max={10}
        />
        <Typography id="discrete-slider" gutterBottom className="pt-8">
          Public Speaking Points
        </Typography>
        <Slider
          className={classes.slider}
          value={formValues.publicSpeakingPoints}
          onChange={handleSliderChange("publicSpeakingPoints")}
          aria-labelledby="continuous-slider"
          marks={marks}
          min={0}
          max={10}
        />
        <InputLabel
          style={{ color: "white", paddingTop: "2rem" }}
          id="smartOrHardWork-label"
        >
          Reading and Writing Skills
        </InputLabel>
        <Select
          style={{ backgroundColor: "white", color: "black" }}
          value={formValues.readingAndWritingSkills}
          onChange={(event) =>
            setFormValues({
              ...formValues,
              //@ts-ignore
              readingAndWritingSkills: event.target.value,
            })
          }
        >
          <MenuItem value={"poor"}>Poor</MenuItem>
          <MenuItem value={"medium"}>Medium</MenuItem>
          <MenuItem value={"excellent"}>Excellent</MenuItem>
        </Select>
        <InputLabel style={{ color: "white" }} id="smartOrHardWork-label">
          Memory Capability Score
        </InputLabel>
        <Select
          style={{ backgroundColor: "white", color: "black" }}
          value={formValues.memoryCapabilityScore}
          onChange={(event) =>
            setFormValues({
              ...formValues,
              //@ts-ignore
              memoryCapabilityScore: event.target.value,
            })
          }
        >
          <MenuItem value={"poor"}>Poor</MenuItem>
          <MenuItem value={"medium"}>Medium</MenuItem>
          <MenuItem value={"excellent"}>Excellent</MenuItem>
        </Select>
        <InputLabel style={{ color: "white" }} id="smartOrHardWork-label">
          Smart or Hard Work
        </InputLabel>
        <Select
          style={{ backgroundColor: "white", color: "black" }}
          value={formValues.smartOrHardWork}
          onChange={(event) =>
            setFormValues({
              ...formValues,
              //@ts-ignore
              smartOrHardWork: event.target.value,
            })
          }
        >
          <MenuItem value={"Smart worker"}>Smart worker</MenuItem>
          <MenuItem value={"Hard worker"}>Hard worker</MenuItem>
        </Select>
        <InputLabel style={{ color: "white" }} id="smartOrHardWork-label">
          Management or Technical
        </InputLabel>
        <Select
          name="managementOrTechnical"
          value={formValues.managementOrTechnical}
          onChange={handleInputChange}
          style={{ backgroundColor: "white", color: "black" }}
        >
          <MenuItem value={"Management"}>Management</MenuItem>
          <MenuItem value={"Technical"}>Technical</MenuItem>
        </Select>
        <InputLabel style={{ color: "white" }} id="smartOrHardWork-label">
          Interested Subjects
        </InputLabel>
        <Select
          name="interestedSubjects"
          value={formValues.interestedSubjects}
          onChange={handleInputChange}
          style={{ backgroundColor: "white", color: "black" }}
        >
          <MenuItem value={"programming"}>Programming</MenuItem>
          <MenuItem value={"Management"}>Management</MenuItem>
          <MenuItem value={"data engineering"}>Data Engineering</MenuItem>
          <MenuItem value={"networks"}>Networks</MenuItem>
          <MenuItem value={"Software Engineering"}>
            Software Engineering
          </MenuItem>
          <MenuItem value={"cloud computing"}>Cloud Computing</MenuItem>
          <MenuItem value={"parallel computing"}>Parallel Computing</MenuItem>
          <MenuItem value={"IOT"}>IOT</MenuItem>
          <MenuItem value={"Computer Architecture"}>
            Computer Architecture
          </MenuItem>
          <MenuItem value={"hacking"}>Hacking</MenuItem>
        </Select>
        <InputLabel style={{ color: "white" }} id="smartOrHardWork-label">
          Interested Type of Books
        </InputLabel>
        <Select
          name="interestedTypeOfBooks"
          value={formValues.interestedTypeOfBooks}
          onChange={handleInputChange}
          style={{ backgroundColor: "white", color: "black" }}
        >
          <MenuItem value={"Series"}>Series</MenuItem>
          <MenuItem value={"Autobiographies"}>Autobiographies</MenuItem>
          <MenuItem value={"Travel"}>Travel</MenuItem>
          <MenuItem value={"Guide"}>Guide</MenuItem>
          <MenuItem value={"Health"}>Health</MenuItem>
          <MenuItem value={"Journals"}>Journals</MenuItem>
          <MenuItem value={"Anthology"}>Anthology</MenuItem>
          <MenuItem value={"Dictionaries"}>Dictionaries</MenuItem>
          <MenuItem value={"Prayer books"}>Prayer books</MenuItem>
          <MenuItem value={"Art"}>Art</MenuItem>
          <MenuItem value={"Encyclopedias"}>Encyclopedias</MenuItem>
          <MenuItem value={"Religion-Spirituality"}>
            Religion-Spirituality
          </MenuItem>
          <MenuItem value={"Action and Adventure"}>
            Action and Adventure
          </MenuItem>
          <MenuItem value={"Comics"}>Comics</MenuItem>
          <MenuItem value={"Horror"}>Horror</MenuItem>
          <MenuItem value={"Satire"}>Satire</MenuItem>
          <MenuItem value={"Self help"}>Self help</MenuItem>
          <MenuItem value={"History"}>History</MenuItem>
          <MenuItem value={"Cookbooks"}>Cookbooks</MenuItem>
          <MenuItem value={"Math"}>Math</MenuItem>
          <MenuItem value={"Biographies"}>Biographies</MenuItem>
          <MenuItem value={"Drama"}>Drama</MenuItem>
          <MenuItem value={"Diaries"}>Diaries</MenuItem>
          <MenuItem value={"Science fiction"}>Science fiction</MenuItem>
          <MenuItem value={"Poetry"}>Poetry</MenuItem>
          <MenuItem value={"Romance"}>Romance</MenuItem>
          <MenuItem value={"Science"}>Science</MenuItem>
          <MenuItem value={"Trilogy"}>Trilogy</MenuItem>
          <MenuItem value={"Fantasy"}>Fantasy</MenuItem>
          <MenuItem value={"Childrens"}>Childrens</MenuItem>
          <MenuItem value={"Mystery"}>Mystery</MenuItem>
        </Select>
        <InputLabel style={{ color: "white" }} id="certifications-label">
          Certifications
        </InputLabel>
        <Select
          labelId="certifications-label"
          name="certifications"
          value={formValues.certifications}
          onChange={handleInputChange}
          style={{ backgroundColor: "white", color: "black" }}
        >
          <MenuItem value={"information security"}>
            Information Security
          </MenuItem>
          <MenuItem value={"shell programming"}>Shell Programming</MenuItem>
          <MenuItem value={"r programming"}>R Programming</MenuItem>
          <MenuItem value={"distro making"}>Distro Making</MenuItem>
          <MenuItem value={"machine learning"}>Machine Learning</MenuItem>
          <MenuItem value={"full stack"}>Full Stack</MenuItem>
          <MenuItem value={"hadoop"}>Hadoop</MenuItem>
          <MenuItem value={"app development"}>App Development</MenuItem>
          <MenuItem value={"python"}>Python</MenuItem>
        </Select>

        <InputLabel style={{ color: "white" }} id="workshops-label">
          Workshops Attended
        </InputLabel>
        <Select
          labelId="workshops-label"
          name="workshops"
          value={formValues.workshops}
          onChange={handleInputChange}
          style={{ backgroundColor: "white", color: "black" }}
        >
          <MenuItem value={"Testing"}>Testing</MenuItem>
          <MenuItem value={"database security"}>Database Security</MenuItem>
          <MenuItem value={"game development"}>Game Development</MenuItem>
          <MenuItem value={"data science"}>Data Science</MenuItem>
          <MenuItem value={"system designing"}>System Designing</MenuItem>
          <MenuItem value={"hacking"}>Hacking</MenuItem>
          <MenuItem value={"cloud computing"}>Cloud Computing</MenuItem>
          <MenuItem value={"web technologies"}>Web Technologies</MenuItem>
        </Select>

        <InputLabel
          style={{ color: "white" }}
          id="typeOfCompanyWantToSettleIn-label"
        >
          Type of Company You Want to Settle In
        </InputLabel>
        <Select
          labelId="typeOfCompanyWantToSettleIn-label"
          name="typeOfCompanyWantToSettleIn"
          value={formValues.typeOfCompanyWantToSettleIn}
          onChange={handleInputChange}
          style={{ backgroundColor: "white", color: "black" }}
        >
          <MenuItem value={"BPA"}>BPA</MenuItem>
          <MenuItem value={"Cloud Services"}>Cloud Services</MenuItem>
          <MenuItem value={"product development"}>Product Development</MenuItem>
          <MenuItem value={"Testing and Maintainance Services"}>
            Testing and Maintainance Services
          </MenuItem>
          <MenuItem value={"SAaS services"}>SAaS Services</MenuItem>
          <MenuItem value={"Web Services"}>Web Services</MenuItem>
          <MenuItem value={"Finance"}>Finance</MenuItem>
          <MenuItem value={"Sales and Marketing"}>Sales and Marketing</MenuItem>
          <MenuItem value={"Product based"}>Product Based</MenuItem>
          <MenuItem value={"Service Based"}>Service Based</MenuItem>
        </Select>

        <InputLabel style={{ color: "white" }} id="interestedCareerArea-label">
          Interested Career Area
        </InputLabel>
        <Select
          labelId="interestedCareerArea-label"
          name="interestedCareerArea"
          value={formValues.interestedCareerArea}
          onChange={handleInputChange}
          style={{ backgroundColor: "white", color: "black" }}
        >
          <MenuItem value={"testing"}>Testing</MenuItem>
          <MenuItem value={"system developer"}>System Developer</MenuItem>
          <MenuItem value={"Business process analyst"}>
            Business Process Analyst
          </MenuItem>
          <MenuItem value={"security"}>Security</MenuItem>
          <MenuItem value={"developer"}>Developer</MenuItem>
          <MenuItem value={"cloud computing"}>Cloud Computing</MenuItem>
        </Select>
        <FormControlLabel
          control={
            <Checkbox
              checked={formValues.selfLearningCapability === "Yes"}
              onChange={handleCheckboxChange}
              name="selfLearningCapability"
              color="primary"
            />
          }
          label="Self Learning Capability"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formValues.extraCoursesDid === "Yes"}
              onChange={handleCheckboxChange}
              name="extraCoursesDid"
              color="primary"
            />
          }
          label="Extra Courses Did"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formValues.takenInputsFromSeniorsOrElders === "Yes"}
              onChange={handleCheckboxChange}
              name="takenInputsFromSeniorsOrElders"
              color="primary"
            />
          }
          label="Taken Inputs From Seniors Or Elders"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formValues.workedInTeamsEver === "Yes"}
              onChange={handleCheckboxChange}
              name="workedInTeamsEver"
              color="primary"
            />
          }
          label="Worked In Teams Ever"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formValues.introvert === "Yes"}
              onChange={handleCheckboxChange}
              name="introvert"
              color="primary"
            />
          }
          label="Introvert"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmitChange}
        >
          Submit
        </Button>
      </form>
      <Popup
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="example-warper"
        modal
        lockScroll
        contentStyle={{
          animation: "popup-animation 0.3s ease",
        }}
      >
        <div>
          {progress !== 100 ? (
            <progress className="w-full" value={progress} max="100" />
          ) : null}

          {progress === 100 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1 className="text-3xl">
                Your Predicted Career Option: {prediction}
              </h1>
            </div>
          )}
        </div>
      </Popup>
    </div>
  );
}

export default CareerForm;
