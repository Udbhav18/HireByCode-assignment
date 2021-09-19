import './App.css';
import { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import Form from './components/Form';
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'

function App() {

  const [tasks, setTasks] = useState([])
  const [editTask, setEditTask] = useState(null)
  const [token, , removeToken] = useCookies(['Token'])
  let history = useHistory()

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/tasks', {
      'method': 'GET',
      'headers': {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token['Token']}`
      }
    })
      .then(resp => resp.json())
      .then(resp => setTasks(resp))
      .catch(err => console.log(err))
  }, [token])

  const editbtn = (task) => {
    setEditTask(task)
  }

  const updatedInfo = (tasknew) => {
    const new_task = tasks.map(task => {
      if (task.id === tasknew.id) {
        return tasknew;
      }
      else {
        return task;
      }
    })

    setTasks(new_task);
  }

  const insertedInfo = (task) => {
    const new_tasks = [...tasks, task]
    setTasks(new_tasks)
  }

  const taskForm = () => {
    setEditTask({ title: '', description: '' })
  }

  const deletebtn = (task) => {
    const new_tasks = tasks.filter(a => {
      if (a.id === task.id) {
        return false
      }
      else {
        return true
      }
    })

    setTasks(new_tasks)
  }

  const logoutbtn = () => {
    removeToken(['Token'])
  }

  useEffect(() => {
    if (!token['Token']) {
      history.push('/')
    }
  }, [token, history])

  return (
    <div className="App">

      <div className="row">
        <div className="col">

          <h2>A simple To-Do App.</h2>
          <br /><br />
        </div>

        <div className="col">
          <button onClick={taskForm} className="btn btn-primary">Insert Task</button>
        </div>

        <div className="col">
          <button onClick={logoutbtn} className="btn btn-primary">LOGOUT</button>
        </div>

      </div>

      <TaskList tasks={tasks} editbtn={editbtn} deletebtn={deletebtn} />

      {editTask ? <Form task={editTask} setEditTask={setEditTask} updatedInfo={updatedInfo} insertedInfo={insertedInfo} /> : null}

    </div>
  );
}

export default App;
