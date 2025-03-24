import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import { useRef } from 'react';
import style from './EditForm.module.css';

const EditForm = ({ updateTodo, cancelUpdate, defaultValue }) => {
  const inputRef = useRef(null);

  const handleSubmit = event => {
    event.preventDefault();
    const newText = inputRef.current.value.trim();

    if (newText) {
      updateTodo(newText);
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={cancelUpdate}>
        <MdOutlineCancel color="red" size="16px" />
      </button>

      <input
        ref={inputRef}
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={defaultValue}
        autoFocus
      />
    </form>
  );
};

export default EditForm;
