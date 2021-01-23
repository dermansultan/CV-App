import React from "react";
import styled from "styled-components";
import ExperiencesList from "./ExpList";

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
        this.setState({ showIncomplete: true });
        return console.log("YEET");
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
            <label>
              Institution
              <input name="school" type="text" />
            </label>
            <label>
              Program
              <input name="program" type="text" />
            </label>
            <label>
              End Date:
              <input
                name="dateStudy"
                type="date"
                min="1900-01-01"
                max="2025-01-01"
              />
            </label>
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
