import React from 'react'
import { connect } from 'react-redux';
import { addTodo } from '../actions/todo';

let AddTodo = (props) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          props.addTodo(input.value);
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

const AddTodoConnected = connect(
  state => { return {}; },
  dispatch => {
    return {
      addTodo: val => dispatch(addTodo(val))
    }
  }
)(AddTodo)

export default AddTodoConnected
