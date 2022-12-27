import React,{ FunctionComponent } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import { ITask, ItaskItem } from "../types/tasks"

const TaskItem: FunctionComponent <ItaskItem> = ({ task, index,  markDone, setUpdatedData, deleteTask, setIsToUpdate }) => {
    
    const handleEdit = (task: ITask) => {
        setIsToUpdate(true)
        setUpdatedData(task)
    }      
    return (
            <React.Fragment key={task?.id}>
              <div className="col taskBg">
                <div className={ task.status ? 'done' : '' }>
                  <span className="taskNumber">{index + 1}</span>
                  <span className="taskText">{task.title}</span>
                </div>
                <div className="iconsWrap">
                  <span title="Completed / Not Completed"
                    onClick={ (e) => markDone(task) }
                  >
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
  
                  {task?.status ? null : (
                    <span title="Edit"
                      onClick={ () => handleEdit(task) }
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                  )}
  
                  <span title="Delete"
                    onClick={() => deleteTask(task.id)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </div>
              </div>
            </React.Fragment>
     ) 
}

export default TaskItem;