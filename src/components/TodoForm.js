import React,{useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value , setValue] = useState("")
    const handleSubmit = e =>{
        e.preventDefault();
        addTodo(value);

        setValue("")
    }
    return (
        <form classname='Todoform' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' value={value} placeholder='what is the task today?' onChange={(e)=>setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>ADD TASK</button>
            
        </form>
    )
}