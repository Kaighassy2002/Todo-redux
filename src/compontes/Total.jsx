import React from 'react'
import { useSelector } from 'react-redux';

function Total() {
    const todos = useSelector((state) =>
		state.todos.filter((todo) => todo.completed === true)
	);
  return (
    <>
      <h3 className='mt-4'>Total Complete items : {todos.length}</h3>
    </>
  )
}

export default Total
