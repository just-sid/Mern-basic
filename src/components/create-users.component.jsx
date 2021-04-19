import React, { Component } from 'react';

class CreateUsers extends Component {
    constructor(props) {
        super(props);
        this.state = { user: '' }
    }

    onChangeUser = (e) => {
        this.setState({
            user: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const user = {user: this.state.user}
        console.log(user);
        
        this.setState({ user: ''})
    }

    render() { 
        return ( 
            <div>
                <h1>Create new User</h1>
                <form onSubmit = {this.onSubmit} >
                <div className='form-group'>
                        <label>New User: </label>
                        <input type="text" 
                            required
                            className="form-control"
                            value={this.state.user}
                            onChange={this.onChangeUser}>
                            </input>
                    </div>
                    <div className="form-group">
                            <input type="submit" value="Create New User" className="btn btn-primary" />
                        </div>
                </form>
            </div>
         );
    }
}
 
export default CreateUsers;