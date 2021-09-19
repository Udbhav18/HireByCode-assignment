export default class APIService {
    static UpdateTask(task_id, body, token) {

        return fetch(`http://127.0.0.1:8000/api/tasks/${task_id}/`, {
            'method': 'PUT',
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static InsertTask(body, token) {
        return fetch('http://127.0.0.1:8000/api/tasks/', {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static DeleteTask(task_id, token){
        return fetch(`http://127.0.0.1:8000/api/tasks/${task_id}/`, {
            'method': 'DELETE',
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })
    }

    static LoginUser(body) {
        return fetch('http://127.0.0.1:8000/auth/', {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static RegisterUser(body) {
        return fetch('http://127.0.0.1:8000/api/users/', {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }
}