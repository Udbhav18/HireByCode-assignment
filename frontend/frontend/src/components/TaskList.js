import React from 'react'
import APIService from '../APIService'
import { useCookies } from 'react-cookie'

function TaskList(props) {

    const [token] = useCookies(['Token'])

    const editbtn = (task) => {
        props.editbtn(task)
    }

    const deletebtn = (task) => {
        APIService.DeleteTask(task.id, token['Token'])
        .then(() => props.deletebtn(task))
    }

    return (
        <div>
            {props.tasks && props.tasks.map(task => {
                return (
                    <div key={task.id}>
                        <h2>{task.title}</h2>
                        <p>{task.description}</p>
                        <hr />
                        <p>Created at: {task.created_at}</p>

                        <div className="row">
                            <div className="col-md-1">
                                <button className="btn btn-primary" onClick={() => editbtn(task)}>UPDATE</button>
                            </div>

                            <div className="col">
                                <button className="btn btn-danger" onClick={() => deletebtn(task)}>DELETE</button>
                            </div>
                        </div>
                        <hr className="hrclass" />
                    </div>
                )
            })}
        </div>
    )
}

export default TaskList
