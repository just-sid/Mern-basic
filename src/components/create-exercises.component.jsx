import React, { Component } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


class CreateExercises extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: ' ',
            description: ' ',
            duration: 0,
            date: new Date(),
            users: []
     };
    }


componentDidMount = () => {
        this.setState({
            users: [...this.state.users,'test user'] ,
            username: [...this.state.username,'test user']
        });
    }

onChangeUsername = (e) => {
    this.setState({
        username: e.target.value
    });
}

onChangeDescription = (e) => {
    this.setState({
        description: e.target.value
    });
}

onChangeDuration = (e) => {
    this.setState({
        duration: e.target.value
    });
}

onChangeDate = (date) => {
    this.setState({
        date: date
    });
}

onSubmit = (e) => {
    e.preventDefault();

    const exercise = {
        username: this.state.username,
        description: this.state.description,
        duration: this.state.duration,
        date: this.state.date
    }

    console.log(exercise);

    window.location='/';
} 


    

    render() { 
        return ( 
            <div>
                <h1>Create new exercise</h1>
                <form onSubmit = {this.onSubmit} >
                    <div className='form-group'>
                        <label>Username: </label>
                        <select
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(user => {
                                    return <option key={user}
                                        value={user}>{user}
                                        </option>   ;
                                })
                            }
                            </select>
                    </div>
                    <div className='form-group'>
                        <label>Description: </label>
                        <input type="text" 
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}>
                            </input>
                    </div>
                    <div className='form-group'>
                        <label>Duration(in minutes): </label>
                        <input type="text" 
                            required
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}>
                            </input>
                    </div>
                    <div className='form-group'>
                        <label>Duration(in minutes): </label>
                        <div>
                            <DatePicker 
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                                />
                        </div>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                        </div>
                </form>
            </div>
         );
    }
}
 
export default CreateExercises;