import React, {Component} from 'react';

class MessageBar extends Component {
    constructor(props) {
        super(props);
        this.state = { message: '' };
    }

    handleChange = (e) => {
        this.setState({ message: e.target.value });
    }

    handleKeyPress = (event) => {
        if(event.key == 'Enter'){
            this.props.addMessage(this.state.message);
        }
    }

    handleSubmit = (e) => {
        this.props.addMessage(this.state.message);
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Votre message"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <input
                    type="submit"
                    value="Envoyer"
                    onClick={this.handleSubmit}
                />
            </div>
        )
    }
}

export default MessageBar;
