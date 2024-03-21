import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo,deleteTodo,toggleTodo } from '../REDUX/Slices/todoSlice';
import Total from '../compontes/Total';

function View() {
  const [text,setText] = useState('')
 const dispatch = useDispatch()
 const todos = useSelector(state => state.todos);

 const handleAddTodo = () => {
  if (text.trim() !== '') {
    dispatch(addTodo({
      id: Date.now(),
      text,
      completed: false,
    }));
    setText('');
  }
};
const handleDeleteTodo = id => {
  dispatch(deleteTodo(id));
};

const handleToggleTodo = id => {
  dispatch(toggleTodo(id));
};

  return (
    <>
    <div className='container '>
    <h1 className='mt-5'>My ToDo List</h1>
        <div className=' ' >
          <div   >
           
            <div className='d-flex justify-Content- between'>
              <input className='form-control w-25' type="text" onChange={e => setText(e.target.value)}   placeholder='Add Todo...'/>
              <button onClick={handleAddTodo} className='btn btn-primary ms-3 ' >Submitt</button>
            </div>
            <div className='border rounded mt-4 '>
              
                <ul  >
        
                   {todos.map(todo=>(
                    <li style={{textDecoration:'none'}} key={todo.id} className='d-flex justify-content-between mt-3 p-2'>
                      <div>
                        <input type="checkbox" checked={todo.completed} onChange={() => handleToggleTodo(todo.id)} />
                         <span  >{todo.text}</span>
                      </div>
                    <div>
                      <button onClick={() => handleDeleteTodo(todo.id)} className='btn btn-primary'><i className="fa-solid fa-trash"></i></button>
                      </div>
                   </li>
                ))}
                    </ul>
              
            </div>
          </div>
          
        </div>
        <Total/>
    </div>
    </>
  )
}


export default View
