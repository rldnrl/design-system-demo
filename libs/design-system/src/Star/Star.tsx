import styles from './Star.module.css';

/* eslint-disable-next-line */
export interface StarProps {}

export function Star(props: StarProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Star!</h1>
    </div>
  );
}

export default Star;
