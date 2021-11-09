import React from 'react';
import Context from '../context';

const useInputValue = (defaultValue = '') => {
  const [value, setValue] = React.useState(defaultValue);
  return {
    bind: {
      value,
      onChange: (e) => setValue(e.target.value),
    },
    clear: () => setValue(''),
    value: () => value,
  };
};

const AddTodo = () => {
  const input = useInputValue('');
  const { onSubmitHandler } = React.useContext(Context);

  const sumbitHandler = (e) => {
    e.preventDefault();
    if (input.value().trim()) {
      onSubmitHandler({
        id: Math.random() * 10,
        title: input.value(),
        completed: false,
      });
      input.clear();
    }
  };

  return (
    <form style={{ marginBottom: '20px' }} onSubmit={sumbitHandler}>
      <input
        {...input.bind}
        style={{
          marginRight: '10px',
          borderRadius: '4px',
          border: '1px solid grey',
          padding: '2px',
        }}
        type="text"
      />
      <button
        style={{
          cursor: 'pointer',
          border: 'none',
          background: 'green',
          color: 'white',
          padding: '3px 8px',
          borderRadius: '4px',
        }}>
        Add TODO
      </button>
    </form>
  );
};

export default AddTodo;
