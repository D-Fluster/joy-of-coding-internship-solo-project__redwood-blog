import { FieldError, Form, FormError, Label,
  Submit, SubmitHandler, TextAreaField, TextField,
  useForm, } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { Metadata, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'


import {
  CreateContactFormMutation,
  CreateContactFormMutationVariables,
} from 'types/graphql'

const CREATE_CONTACT = gql`
  mutation CreateContactFormMutation($input: CreateContactFormInput!) {
    createContactForm(input: $input) {
      id
    }
  }
`

interface FormValues {
  name: string
  email: string
  message: string
}

const ContactPage = () => {
  const formMethods = useForm({ mode: 'onBlur' })

  const [create, { loading, error }] = useMutation<
    CreateContactFormMutation,
    CreateContactFormMutationVariables>(CREATE_CONTACT, {
      onCompleted: () => {
        toast.success('Thank you for your submission!')
        formMethods.reset()
      },
    })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    create({ variables: { input: data } })
  }

  return (
    <>
      <Metadata title="Contact" description="Contact page" />

      <h1>Contact Us&nbsp;<em><strong>!</strong></em></h1>

      <Toaster />

      <Form
      onSubmit={onSubmit}
      config={{ mode: 'onBlur' }}
      error={error}
      formMethods={formMethods}>
        <FormError
        error={error}
        wrapperClassName="form-error" />

        <Label name="name" errorClassName="error">Your Name:</Label>
        <TextField name="name" errorClassName="error" validation={{ required: true }} />
        <FieldError name="name" className="error" />

        <Label name="email" errorClassName="error">Your Email:</Label>
        <TextField name="email" errorClassName="error" validation={{ required: true,
          pattern: {
            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please enter a valid email address'
          } }} />
        <FieldError name="email" className="error" />

        <Label name="message" errorClassName="error">What's Up?</Label>
        <TextAreaField name="message" errorClassName="error" validation={{ required: true }} />
        <FieldError name="message" className="error" />

        <Submit disabled={loading}>Send Message</Submit>

      </Form>
    </>
  )
}

export default ContactPage
