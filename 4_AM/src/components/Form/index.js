import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: "",
      gender: "",
      pronoun: "",
      hometown: "",
      foods: "",
      birthday: "",
      huid: "",
      concentration: "",
      display: false
    };

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    this.setState({ display: true });
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <label>
          Name: 
          <input
            type="text"
            name="person"
            value={this.state.person}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Gender:
          <input
            type="text"
            name="gender"
            value={this.state.gender}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          HUID:
          <input
            type="text"
            name="huid"
            value={this.state.huid}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Concentration
          <input
            type="text"
            name="concentration"
            value={this.state.concentration}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Pronoun
          <input
            type="text"
            name="pronoun"
            value={this.state.pronoun}
            onChange={this.handleChange}
          />
        </label>
        <br />

        <input type="text" value="Submit" onClick={this.handleSubmit} />

        {this.state.display && 
        <p> 'User's name is {this.state.person}, and {this.state.pronoun} are from USER_HOMETOWN. 
          {this.state.pronoun} was born on USER_BIRTHDAY, and {this.state.pronoun} favorite foods are FOOD_1, 
          FOOD_2, and FOOD_3. At Harvard, {this.state.person} studies {this.state.concentration}.'</p>}
      </div>
    );
  }
}

export default Form;
