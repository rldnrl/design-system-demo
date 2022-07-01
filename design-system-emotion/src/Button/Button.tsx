import React, { ButtonHTMLAttributes } from 'react'
import { css, cx } from '@emotion/css'
import colors from '../colors'

type ButtonSize = 'sm' | 'md' | 'lg'

const getButtonSize = (size: ButtonSize) => {
  switch (size) {
    case 'sm':
      return css`
        padding: 0.5rem 1rem;
        min-width: 1.5rem;
      `
    case 'md':
      return css`
        padding: 0.75rem 1.25rem;
        min-width: 1.5rem;
      `
    case 'lg':
      return css`
        padding: 1rem 1.5rem;
        min-width: 1.5rem;
      `
  }
}

type ButtonVariant =
  | 'round-outline'
  | 'round-full'
  | 'solid-outline'
  | 'solid-full'

const getButtonVariant = (variant: ButtonVariant) => {
  switch (variant) {
    case 'round-full':
      return css`
        border: none;
        border-radius: 3.75rem;
        background-color: ${colors.teal[500]};
        color: white;

        &:hover {
          background-color: ${colors.teal[800]};
        }
      `
    case 'round-outline':
      return css`
        border: 1px solid ${colors.gray[300]};
        border-radius: 3.75rem;
        color: black;

        &:hover {
          background-color: ${colors.gray[500]};
        }
      `
    case 'solid-full':
      return css`
        border: none;
        background-color: ${colors.teal[500]};
        color: white;

        &:hover {
          background-color: ${colors.teal[800]};
        }
      `
    case 'solid-outline':
      return css`
        border: 1px solid ${colors.gray[300]};
        border-radius: 3.75rem;
        color: black;

        &:hover {
          background-color: ${colors.gray[500]};
        }
      `
  }
}

export type ButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({
  variant = 'solid-full',
  size = 'md',
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cx(
        getButtonSize(size),
        getButtonVariant(variant),
        buttonCommonStyle
      )}
    />
  )
}

const buttonCommonStyle = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: ${colors.gray[300]};
    color: ${colors.gray[500]};
  }
`
