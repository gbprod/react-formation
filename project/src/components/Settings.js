import React, {Component} from 'react';
import {connect} from 'react-redux'
import {setUsername} from '../actions/settings'
import {Link} from 'react-router-dom';

const inputStyle = {borderRadius: 10, border: 'none', fontSize: 16, padding: 10, marginRight: 10, flexGrow: 1};
const settingsStyle = {borderRadius: 10, fontFamily: 'Montserrat', width: 400, backgroundColor: '#A2DED0', padding: 10, display: 'flex', flexDirection: 'column'};

class Settings extends Component {
  handleChange = (e) => {
    this.props.setUsername(e.target.value);
  }

  render() {
    return (
      <div style={settingsStyle}>
        <div style={{paddingLeft: 10, paddingTop: 10, fontSize: 30}}>👅 Settings</div>
        Username: <input value={this.props.settings.username} onChange={this.handleChange} type="text" style={inputStyle} />
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
