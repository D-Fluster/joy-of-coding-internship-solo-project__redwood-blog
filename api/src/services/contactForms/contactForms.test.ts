import type { ContactForm } from '@prisma/client'

import {
  contactForms,
  contactForm,
  createContactForm,
  updateContactForm,
  deleteContactForm,
} from './contactForms'
import type { StandardScenario } from './contactForms.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('contactForms', () => {
  scenario('returns all contactForms', async (scenario: StandardScenario) => {
    const result = await contactForms()

    expect(result.length).toEqual(Object.keys(scenario.contactForm).length)
  })

  scenario(
    'returns a single contactForm',
    async (scenario: StandardScenario) => {
      const result = await contactForm({ id: scenario.contactForm.one.id })

      expect(result).toEqual(scenario.contactForm.one)
    }
  )

  scenario('creates a contactForm', async () => {
    const result = await createContactForm({
      input: { name: 'String', email: 'String', message: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.email).toEqual('String')
    expect(result.message).toEqual('String')
  })

  scenario('updates a contactForm', async (scenario: StandardScenario) => {
    const original = (await contactForm({
      id: scenario.contactForm.one.id,
    })) as ContactForm
    const result = await updateContactForm({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a contactForm', async (scenario: StandardScenario) => {
    const original = (await deleteContactForm({
      id: scenario.contactForm.one.id,
    })) as ContactForm
    const result = await contactForm({ id: original.id })

    expect(result).toEqual(null)
  })
})
