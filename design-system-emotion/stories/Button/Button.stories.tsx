import { Meta } from '@storybook/react'
import Button, { ButtonProps } from '../../src/Button'

export default {
  title: 'Component/Button',
  component: Button,
} as Meta

export const SolidFullButton = (props: ButtonProps) => (
  <>
    <Button {...props} variant="solid-full">
      Button
    </Button>
    <div style={{ marginTop: '0.5rem' }}></div>
    <Button {...props} variant="solid-full" disabled>
      Button
    </Button>
  </>
)

export const SolidOutlineButton = (props: ButtonProps) => (
  <>
    <Button {...props} variant="solid-outline">
      Button
    </Button>
    <div style={{ marginTop: '0.5rem' }}></div>
    <Button {...props} variant="solid-outline" disabled>
      Button
    </Button>
  </>
)
