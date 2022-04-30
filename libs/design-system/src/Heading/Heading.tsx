import styles from './Heading.module.css';

/* eslint-disable-next-line */
export interface HeadingProps {}

export function Heading(props: HeadingProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Heading!</h1>
    </div>
  );
}

export default Heading;
