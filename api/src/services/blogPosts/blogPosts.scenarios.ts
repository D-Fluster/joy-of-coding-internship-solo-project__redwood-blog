import type { Prisma, BlogPost } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BlogPostCreateArgs>({
  blogPost: {
    one: { data: { title: 'String', contents: 'String' } },
    two: { data: { title: 'String', contents: 'String' } },
  },
})

export type StandardScenario = ScenarioData<BlogPost, 'blogPost'>
