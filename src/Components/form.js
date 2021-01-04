import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='information general'>
        <h2 className='subHeader'>General Information</h2>
          <label>
            First Name
            <input name="fName" type="text" onChange={this.handleChange} />
          </label>
          <label>
            Last Name
            <input name="lName" type="text" onChange={this.handleChange} />
          </label>
          <label>
            Email
            <input name="eMail" type="email" onChange={this.handleChange} />
          </label>
          <label>
            Phone Number
            <input
              name="pNumb"
              type="tel"
              pattern="[0-9]{3}-[0-3]{3}-[0-9]{4}"
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div className='information education'>
        <h2 className='subHeader'>Education</h2>
        <label>
            Institution
            <input
              name="school"
              type="text"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Program
            <input
              name="program"
              type="text"
              onChange={this.handleChange}
            />
          </label>
          <label>
            End Date:
            <input
              name="dateStudy"
              type="date"
              min="1900-01-01"
              max="2025-01-01"
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div className='information experience'>
        <h2 className='subHeader'>Experience</h2>
        <label>
            Company
            <input
              name="company"
              type="text"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Position
            <input
              name="position"
              type="text"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Responsibilities 
            <input
              name="tasks"
              type="text"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Start Date 
            <input
              name="startDate"
              type="date"
              onChange={this.handleChange}
            />
          </label>
          <label>
            End Date  
            <input
              name="endDate"
              type="date"
              onChange={this.handleChange}
            />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
