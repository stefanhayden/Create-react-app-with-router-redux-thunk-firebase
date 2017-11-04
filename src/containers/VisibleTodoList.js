import { connect } from 'react-redux'
import { toggleTodo } from 'actions/todo';
import TodoList from 'components/TodoList';
import * as todoGetters from 'getters/todo';


const mapStateToProps = state => {
  return {
    todos: todoGetters.getVisibleTodos(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
