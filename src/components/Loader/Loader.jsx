import { ClipLoader } from 'react-spinners';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.backdrop}>
      <ClipLoader size={50} color="#007bff" />
    </div>
  );
};

export default Loader;
