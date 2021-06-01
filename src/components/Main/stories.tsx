import { Story, Meta } from '@storybook/react/types-6-0'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Default title',
    description: 'Default description'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
//Args can be used like this
Basic.args = {
  title: 'Component args title',
  description: 'Component args description'
}

export const Default: Story = (args) => <Main {...args} />
