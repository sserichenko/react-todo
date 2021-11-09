import React from 'react';
import PropTypes from 'prop-types';
import Context from '../context';
const TodoItem = ({todo, index, onChange}) => {

    const styles = {
        li: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '.4rem .7rem',
            border: '1px solid grey',
            marginBottom: '6px',
            borderRadius: '4px',
            fontSize: '14px'
        },
        div: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        input: {
            marginRight: '10px'
        },
        p: {
            margin: '0px',
            padding: '0px 4px',
            width: '200px'
        },
        todoDone: {
            margin: '0px',
            padding: '0px',
            width: '200px',
            textDecoration: 'line-through'
        }
    }

    const {removeTodo} = React.useContext(Context);

    return (
            <li style={styles.li}>
            <div style={styles.div}>
                <input 
                checked={todo.completed}
                style={styles.input} 
                type="checkbox" 
                onChange={() => onChange(todo.id)}
                />
            <strong style={{ marginRight: '4px'}}>{index + 1}</strong>
            <p style={!todo.completed ? styles.p : styles.todoDone}>{todo.title}</p>   
            </div>
            <button onClick={removeTodo.bind(null, todo.id)}className="rm">&times;</button>
        </li>       
    );
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func,
}

export default TodoItem;