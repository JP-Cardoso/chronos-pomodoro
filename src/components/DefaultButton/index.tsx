import React from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

type DefaultButtonProps = {
  icon?: React.ReactNode,
  color?: 'green' | 'red'
} & React.ComponentProps<'button'>;

export default function DefaultButton({
  icon,
  color = 'green',
  ...props
}: DefaultButtonProps) {

  return (
    <>
      <button
        className={classNames(styles.button, styles[color])}
        {...props}
      >
        {icon}
      </button>
    </>
  )
}