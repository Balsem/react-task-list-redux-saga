import axios from "axios"
import { ITaskUpdate } from "../types/tasks"

const baseUrl = 'http://localhost:3002'


export const getTasks = () => {
    return new Promise((resolve, reject) => {
        axios.get(baseUrl + '/getTasks')
            .then(res => {
                if (res.status === 200) {
                    const tasks = res?.data;
                    resolve(tasks)
                }
                else {
                    reject()
                }

            }).catch((e) => {
                reject(e)
                console.log(e)
            })
    })
}


export const addTask = (task: ITaskUpdate) => {
    return new Promise((resolve, reject) => {
        axios.post(baseUrl + '/addTask', { task })
            .then(res => {
                if (res.status === 200) {
                    resolve(res)
                }
                else {
                    reject()
                }
            }).catch((e) => {
                console.log(e)
            })

    })
}

export const updateTask = (task: ITaskUpdate) => {
    return new Promise((resolve, reject) => {
        axios.put(baseUrl + '/updateTask', { task })
            .then(res => {
                if (res.status === 200) {
                    resolve(res)
                }
                else {
                    reject()
                }
            }).catch((e) => {
                console.log(e)
            })

    })
}


export const deleteTask = (taskId: number) => {
    return new Promise((resolve, reject) => {
        axios.delete(baseUrl + `/deleteTask/${taskId}`)
            .then(res => {
                if (res.status === 200) {
                    resolve(res)
                }
                else {
                    reject()
                }
            }).catch((e) => {
                console.log(e)
            })

    })
}

