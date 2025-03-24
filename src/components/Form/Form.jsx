import { FiSearch } from 'react-icons/fi';
import { useRef } from 'react';
import style from './Form.module.css';

const Form = ({ onSubmit }) => {
  const inputRef = useRef(null);

  const handleSubmit = event => {
    event.preventDefault();
    const inputValue = inputRef.current.value.trim();

    if (inputValue) {
      onSubmit(inputValue);
      event.target.reset();
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        ref={inputRef}
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
