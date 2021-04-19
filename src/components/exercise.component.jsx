import React from 'react';

const Exercise = (props) => {
    return(
        <tr>
            <td> { props.exercise.username } </td>
            <td> { props.exercise.description } </td>
            <td> { props.exercise.duration } </td>
            <td> { props.exercise.date}</td>
            <td>
                <link to ={"/edit/"+props.exercise._id}>edit</link> | <a href="#" onClick={() => props.deleteExercise(props.exercise._id)}>delete</a>
            </td>    
        </tr>
    )
}

export default Exercise;