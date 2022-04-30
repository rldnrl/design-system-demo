import styles from './Textarea.module.css';

/* eslint-disable-next-line */
export interface TextareaProps {}

export function Textarea(props: TextareaProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Textarea!</h1>
    </div>
  );
}

export default Textarea;
