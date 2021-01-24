import React from "react";
import styled from "styled-components";
import ExperiencesList from "./ExpList";
import EducationList from "./EduList";

// Styles

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const UserForm = styled.form``;

const FormSection = styled.div``;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experiences: [],
      educations: [],
      // company: "",
      // position: "",
      // tasks: "",
      // startDate: "",
      // endDate: "",
      showIncomplete: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.delExperience = this.delExperience.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.delEducation = this.delEducation.bind(this);
  }

  delExperience = (obj) => {
    this.setState((prevState) => ({
      experiences: prevState.experiences.filter((exp) => exp !== obj),
    }));
  };

  addExperience = (e) => {
    this.setState((prevState) => {
      if (
        !prevState.company ||
        !prevState.position ||
        !prevState.tasks ||
        !prevState.startDate ||
        !prevState.endDate
      ) {
        return { showIncomplete: true };
      }
      return {
        showIncomplete: false,
        experiences: [
          ...prevState.experiences,
          {
            company: prevState.company,
            position: prevState.position,
            tasks: prevState.tasks,
            startDate: prevState.startDate,
            endDate: prevState.endDate,
          },
        ],
      };
    });
  };

  delEducation = (obj) => {
    this.setState((prevState) => ({
      educations: prevState.educations.filter((edu) => edu !== obj),
    }));
  };

  addEducation = (e) => {
    this.setState((prevState) => {
      if (
        !prevState.school ||
        !prevState.program ||
        !prevState.startDateStudy ||
        !prevState.endDateStudy
      ) {
        return { showIncomplete: true };
      }
      return {
        showIncomplete: false,
        educations: [
          ...prevState.educations,
          {
            school: prevState.school,
            program: prevState.program,
            startDateStudy: prevState.startDateStudy,
            endDateStudy: prevState.endDateStudy,
          },
        ],
      };
    });
  };

  handleChange(event) {
    // Store name value pairs in state
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    // Prevent enter click default
    event.preventDefault();
  }

  render() {
    return (
      <Wrapper>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <div className="information general">
            <h2 className="subHeader">General Information</h2>
            <label>
              First Name
              <input name="fName" type="text" />
            </label>
            <label>
              Last Name
              <input name="lName" type="text" />
            </label>
            <label>
              Email
              <input name="eMail" type="email" />
            </label>
            <label>
              Phone Number
              <input
                name="pNumb"
                type="tel"
                pattern="[0-9]{3}-[0-3]{3}-[0-9]{4}"
              />
            </label>
          </div>
          <div className="information education">
            <h2 className="subHeader">Education</h2>
            <EducationList
              educations={this.state.educations}
              delEducation={this.delEducation}
            ></EducationList>
            <label>
              Institution
              <input name="school" type="text" />
            </label>
            <label>
              Program
              <input name="program" type="text" />
            </label>
            <label>
              Start Date:
              <input
                name="startDateStudy"
                type="date"
                min="1900-01-01"
                max="2025-01-01"
              />
            </label>
            <label>
              End Date:
              <input
                name="endDateStudy"
                type="date"
                min="1900-01-01"
                max="2025-01-01"
              />
            </label>
            <button type="button" onClick={this.addEducation}>
              Add Education
            </button>
          </div>
          <div className="information experience">
            <h2 className="subHeader">Experience</h2>
            <ExperiencesList
              experiences={this.state.experiences}
              delExperience={this.delExperience}
            />
            <label>
              Company
              <input
                name="company"
                type="text"
                onChange={this.handleChange}
                style={{
                  border:
                    this.state.showIncomplete && !this.state.company
                      ? "1px solid red"
                      : "",
                }}
              />
            </label>
            <label>
              Position
              <input
                name="position"
                type="text"
                onChange={this.handleChange}
                style={{
                  border:
                    this.state.showIncomplete && !this.state.position
                      ? "1px solid red"
                      : "",
                }}
              />
            </label>
            <label>
              Responsibilities
              <input
                name="tasks"
                type="text"
                onChange={this.handleChange}
                style={{
                  border:
                    this.state.showIncomplete && !this.state.tasks
                      ? "1px solid red"
                      : "",
                }}
              />
            </label>
            <label>
              Start Date
              <input
                name="startDate"
                type="date"
                onChange={this.handleChange}
                style={{
                  border:
                    this.state.showIncomplete && !this.state.startDate
                      ? "1px solid red"
                      : "",
                }}
              />
            </label>
            <label>
              End Date
              <input
                name="endDate"
                type="date"
                onChange={this.handleChange}
                style={{
                  border:
                    this.state.showIncomplete && !this.state.endDate
                      ? "1px solid red"
                      : "",
                }}
              />
            </label>
            <button onClick={this.addExperience} type="button">
              Add Position
            </button>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </Wrapper>
    );
  }
}

export default Form;
