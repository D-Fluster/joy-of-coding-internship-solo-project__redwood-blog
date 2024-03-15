import { useEffect, useRef, useState } from 'react'

import {
  Form,
  Label,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const ResetPasswordPage = ({ resetToken }: { resetToken: string }) => {
  const { isAuthenticated, reauthenticate, validateResetToken, resetPassword } =
    useAuth()
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  useEffect(() => {
    const validateToken = async () => {
      const response = await validateResetToken(resetToken)
      if (response.error) {
        setEnabled(false)
        toast.error(response.error)
      } else {
        setEnabled(true)
      }
    }
    validateToken()
  }, [resetToken, validateResetToken])

  const secretCodeRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    secretCodeRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await resetPassword({
      resetToken,
      password: data.secretCode,
    })

    if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Secret Code changed!')
      await reauthenticate()
      navigate(routes.login())
    }
  }

  return (
    <>
      <Metadata title="Reset Secret Code" />

      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary">
                Reset Secret Code
              </h2>
            </header>

            <div className="rw-segment-main">
              <div className="rw-form-wrapper">
                <Form onSubmit={onSubmit} className="rw-form-wrapper">
                  <div className="text-left">
                    <Label
                      name="secretCode"
                      className="rw-label"
                      errorClassName="rw-label rw-label-error"
                    >
                      New Secret Code
                    </Label>
                    <PasswordField
                      name="secretCode"
                      autoComplete="new-password"
                      className="rw-input"
                      errorClassName="rw-input rw-input-error"
                      disabled={!enabled}
                      ref={secretCodeRef}
                      validation={{
                        required: {
                          value: true,
                          message: 'New Secret Code is required',
                        },
                      }}
                    />

                    <FieldError name="secretCode" className="rw-field-error" />
                  </div>

                  <div className="rw-button-group">
                    <Submit
                      className="rw-button rw-button-blue"
                      disabled={!enabled}
                    >
                      Submit
                    </Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ResetPasswordPage
