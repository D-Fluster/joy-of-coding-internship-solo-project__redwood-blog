import type { EditBlogPostById, UpdateBlogPostInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

type FormBlogPost = NonNullable<EditBlogPostById['blogPost']>

interface BlogPostFormProps {
  blogPost?: EditBlogPostById['blogPost']
  onSave: (data: UpdateBlogPostInput, id?: FormBlogPost['id']) => void
  error: RWGqlError
  loading: boolean
}

const BlogPostForm = (props: BlogPostFormProps) => {
  const onSubmit = (data: FormBlogPost) => {
    props.onSave(data, props?.blogPost?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormBlogPost> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.blogPost?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="contents"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Contents
        </Label>

        <TextField
          name="contents"
          defaultValue={props.blogPost?.contents}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="contents" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default BlogPostForm
