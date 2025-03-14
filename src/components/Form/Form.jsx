import { FiSearch } from 'react-icons/fi';
import { nanoid } from 'nanoid';
import style from './Form.module.css';

const Form = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
      const form = e.target;
    const inputValue = form.elements.search.value.trim();
  

    if (inputValue) {
      onSubmit({id: nanoid, text: inputValue});
      form.reset(); 
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
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
