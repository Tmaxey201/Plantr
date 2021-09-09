import React, {useState} from 'react';
import TodoForm from './TodoForm';
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import Modal from './modal';

function ToDo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({ 
            id: null,
            value: ''
        })
    }

    const isOpen = value => {
        isOpen(value);
        isOpen({ 
            value: false
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return (
        <>
    {todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
        <div key={todo.id} onClick={(isOpen) => {
            console.log('click')
        }}>
            {todo.text}
        </div>
            <div className='icons'>
                <RiCloseCircleLine
                onClick={() => removeTodo(todo.id)}
                className='delete-icon'
                />
                <TiEdit 
                onClick={() => setEdit({ id:todo.id, value: todo.text })}
                className='edit-icon'
                />
            </div>
        </div>
    ))}
    <Modal />
    </>
)}


export default ToDo
