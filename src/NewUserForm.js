import * as React from "react";
import { actions as UserActions } from "./redux/user";
import { connect } from "react-redux";

class NewUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.value.length > 0) {
      console.log(this.state.value);
      const { addUser } = this.props;
      addUser({ name: this.state.value });
      this.setState({ value: "" });
    }
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default connect(
  null,
  { addUser: UserActions.add }
)(NewUserForm);
