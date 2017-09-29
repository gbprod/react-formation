import React, {Component} from 'react';
import PropTypes from 'prop-types';

const inputStyle = {borderRadius: 10, border: 'none', fontSize: 16, padding: 10, marginRight: 10, flexGrow: 1};

class SettingsBar extends Component {
  handleChange = (e) => {
    this.props.setUsername(e.target.value);
  }

  render() {
    return (
      <div style={{display: 'flex', padding: 10}}>
        Username: <input value={this.props.settings.username} onChange={this.handleChange} type="text" style={inputStyle} />
      </div>
    )
  }
}

SettingsBar.propTypes = {
  setUsername: PropTypes.func.isRequired,
};

export default SettingsBar;
