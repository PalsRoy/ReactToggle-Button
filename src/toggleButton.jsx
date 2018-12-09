import React, {
  Component
} from 'react';


class ToggleButton extends Component {

  constructor(props) {
    super(props);
    this.state={
                btnChecked: false
                };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick(e){
    e.preventDefault();
    if(this.state.btnChecked){
      this.setState({btnChecked: false});
    } else {
      this.setState({btnChecked: true});
    }
  }


  render() {
    return (
      <div>
  <span>
  <button type="button" onClick={this.handleToggleClick}>{this.state.btnChecked?'ON':'OFF'}</button>
  </span>
  <br/>
  <br/>
  <span>
  <label className="switch">
  <input type="checkbox" checked={this.state.btnChecked}/>
  <span className="slider"></span>
  </label>
  </span>
  </div>
    );
  }

}

export default ToggleButton;
