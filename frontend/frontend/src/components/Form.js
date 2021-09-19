import React, { useState, useEffect, useRef } from 'react'
import APIService from '../APIService'
import { useCookies } from 'react-cookie'

function Form(props) {
    const formRef = useRef();
    const [title, setTitle] = useState(props.task.title)
    const [description, setDescription] = useState(props.task.description)
    const [token] = useCookies(['Token'])

    useEffect(() => {
        setTitle(props.task.title)
        setDescription(props.task.description)
        formRef.current.scrollIntoView({ behavior: "smooth" })
    }, [props.task])

    const updateTask = () => {
        props.setEditTask(null);
        APIService.UpdateTask(props.task.id, { title, description }, token['Token'])
            .then(resp => props.updatedInfo(resp))
    }

    const insertTask = () => {
        props.setEditTask(null);
        APIService.InsertTask({ title, description }, token['Token'])
            .then(resp => props.insertedInfo(resp))
    }

    return (
        <div>

            {props.task ? (

                <div className="mb-3" ref={formRef}>
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Please Enter the Title" value={title} onChange={e => setTitle(e.target.value)} />
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" rows="5" placeholder="Please Enter the Description" value={description} onChange={e => setDescription(e.target.value)} />
                    <br></br>

                    {props.task.id ? 
                    <button onClick={updateTask} className="btn btn-success">Update</button> :
                    <button onClick={insertTask} className="btn btn-success">Insert</button>}

                </div>

            ) : null}

        </div>
    )
}

export default Form
