import type { Meta, StoryObj } from '@storybook/react'

import ReadPostPage from './ReadPostPage'

const meta: Meta<typeof ReadPostPage> = {
  component: ReadPostPage,
}

export default meta

type Story = StoryObj<typeof ReadPostPage>

export const Primary: Story = {}
