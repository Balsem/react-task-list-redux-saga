import { FunctionComponent, useEffect, useState } from "react"
import TaskItem from "./taskItem"
import AddTask from "./addTask"
import { ITask } from "../types/tasks"
import { useDispatch } from "react-redux"
import * as  actions from "../state/modules/tasks/actions"
import { useSelector } from "react-redux"

const TaskList: FunctionComponent = () => {

    const dispatch = useDispatch()
    const taskList = useSelector((state: any) => state?.task?.taskList)

    // Temp State
    const [newTask, setNewTask] = useState<string>('')
    const [updatedData, setUpdatedData] = useState({ id: -1, title: '', status: false })
    const [isToUpdate, setIsToUpdate] = useState<boolean>(false)

    useEffect(() => {
        dispatch(actions.getTasksAction())
    }, [dispatch])

    // Add task 
    const addTask = () => {
        if (newTask) {
            dispatch(actions.addTaskAction({ title: newTask, status: false }))
            setNewTask('')
        }
    }

    // Delete task 
    const deleteTask = (id: number) => {
        dispatch(actions.deleteTaskAction(id))
    }

    // Mark task as done or completed
    const markDone = (task: ITask) => {
        const updatedTask = { ...task, status: !task.status }
        dispatch(actions.updateTaskAction(updatedTask))
    }

    // Cancel update
    const cancelUpdate = () => {
        setUpdatedData({ id: -1, title: '', status: false })
        setIsToUpdate(false)
    }

    // Change task for update
    const changeHolder = (e: any) => {
        setUpdatedData({ ...updatedData, title: e.target.value, status: false })
    }

    // Update task
    const updateTask = () => {
        dispatch(actions.updateTaskAction(updatedData))
        setIsToUpdate(false)
    }


    return (
        <div className="container w-60 mt-6 mb-5 pb-5">
            <h2 className="mt-5 mb-5 listTitle">To Do Task List </h2>

            <AddTask
                updatedData={updatedData}
                changeHolder={changeHolder}
                updateTask={updateTask}
                cancelUpdate={cancelUpdate}
                isToUpdate={isToUpdate}
                newTask={newTask}
                setNewTask={setNewTask}
                addTask={addTask}
            />

            {(taskList?.length) ? '' : <h5 className="mt-5 mb-5 listTitle">No tasks ... </h5>}
            {taskList?.sort((a: ITask, b: ITask) => a.id > b.id ? 1 : -1)
                .map((task: ITask, index: number) => {
                    return (
                        <TaskItem
                            task={task}
                            index={index}
                            markDone={markDone}
                            setUpdatedData={setUpdatedData}
                            deleteTask={deleteTask}
                            setIsToUpdate={setIsToUpdate}
                            key={task?.id}
                        />
                    )
                })
            }
        </div>
    )
}

export default TaskList;