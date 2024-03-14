import type { QueryResolvers, MutationResolvers } from 'types/graphql'
import { db } from 'src/lib/db'
import { validate } from '@redwoodjs/api'

export const contactForms: QueryResolvers['contactForms'] = () => {
  return db.contactForm.findMany()
}

export const contactForm: QueryResolvers['contactForm'] = ({ id }) => {
  return db.contactForm.findUnique({
    where: { id },
  })
}

export const createContactForm: MutationResolvers['createContactForm'] = ({
  input,
}) => {
  validate(input.email, "email", { email: true })
  return db.contactForm.create({
    data: input,
  })
}