import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

const TodoList = ({todos, onToggleComplete}) => {


    return (
        <ul style={styles.ul}>
            {
                todos &&
                todos.map((todo, index)  =>
                    <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    index={index}
                    onChange={onToggleComplete}
                    />
                )
            }
            
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggleComplete: PropTypes.func,
}

export default TodoList;