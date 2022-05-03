import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import styles from './Button.module.css';

const cx = classNames.bind(styles);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  return (
    <button {...props} className={cx('default', 'primary')}>
      {props.children}
    </button>
  );
}

export default Button;
