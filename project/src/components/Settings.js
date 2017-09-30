import React, {Component} from 'react';
import {connect} from 'react-redux'
import {setUsername, setColor} from '../actions/settings'
import {Link} from 'react-router-dom';
import { TwitterPicker } from 'react-color'

const inputStyle = {borderRadius: 10, border: 'none', fontSize: 16, padding: 10, marginRight: 10, flexGrow: 1};
const settingsStyle = {borderRadius: 10, fontFamily: 'Montserrat', width: 400, backgroundColor: '#A2DED0', padding: 10, display: 'flex', flexDirection: 'column'};

class Settings extends Component {

  handleChange = (e) => {
    this.props.setUsername(e.target.value);
  }

  handleColorChange = (color) => {
    this.props.setColor(color.hex);
  }

  render() {
    return (
      <div style={{...settingsStyle, backgroundColor: this.props.settings.color}}>
        <div style={{paddingLeft: 10, paddingTop: 10, fontSize: 30}}>👅 Settings</div>
        Username: <input value={this.props.settings.username} onChange={this.handleChange} type="text" style={inputStyle} />
        Color: <TwitterPicker color={this.props.settings.color} onChangeComplete={this.handleColorChange} />

        <Link to="/">Back</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    settings: state.settings
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUsername: (username) => {
      dispatch(setUsername(username))
    },
    setColor: (color) => {
      dispatch(setColor(color))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
