import { useState } from 'react';
import styled from '@emotion/styled';
import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';
import { Modal } from '@mantine/core';
import { devices } from '@utils/devices';
import getConfig from 'next/config';
import EmailSent from './EmailSent';
import { basicSchema } from 'schema/basicSchema';

// api_key config
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
const admin_email = publicRuntimeConfig.adminEmail;
const service_id = publicRuntimeConfig.serviceId;
const template_id = publicRuntimeConfig.templateId;
const user_id = publicRuntimeConfig.userId;

const FormWrapper = styled.div`
  margin: auto;
  padding: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  @media ${devices.tabletMaxWidth} {
    width: min(90%, 100vw);
  }

  @media ${devices.tabletMinWidth} {
    width: min(40%, 100vw);
  }
`;

const Wrapper = styled.div`
  padding: 0.5rem;

  input,
  textarea {
    outline: none;
    padding: 0.8rem;
    width: 100%;
    border-radius: var(--borderRadius);
    border: 1px solid var(--inputBorderColor);
  }

  .input-error {
    border-color: var(--errorColor);
  }

  .error {
    color: var(--errorColor);
    font-size: 0.8rem;
    font-weight: 500;
  }

  .btn-send {
    padding: 0.8rem;
    border: none;
    background: darkslateblue;
    color: #fff;
    border-radius: var(--borderRadius);
  }

  .btn-send:hover {
    background: indigo;
    transition: all 0.2s ease;
    transform: translate(0px, -4px);
  }

  button:disabled {
    opacity: 0.35;
    background: dimgray;
  }
`;

const StyledModal = styled(Modal)`
  width: min(90%, 100vw);
  margin: auto;

  .mantine-Modal-modal {
    text-align: center;
    min-height: 200px;
  }

  .mantine-Modal-close {
    width: 32px;
    height: auto;
  }

  .mantine-Modal-close svg {
    color: #000;
    width: 32px;
    height: auto;
  }
`;

const Email = () => {
  const [opened, setOpened] = useState(false);

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: {
      from_name: '', //user name
      to_name: admin_email, //email id of the admin
      subject: '', //subject of email
      reply_to: '', // user email
      message: '', // message of email
    },
    validationSchema: basicSchema,

    onSubmit: async (values, actions) => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        emailjs.send(service_id, template_id, values, user_id).then(() => {
          actions.resetForm();
          setOpened(true);
        });
      } catch {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <FormWrapper>
        <form onSubmit={handleSubmit} autoComplete="off">
          <Wrapper>
            <label htmlFor="from_name">Name</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.from_name}
              className={
                errors.from_name && touched.from_name ? 'input-error' : ''
              }
            />
            {errors.from_name && touched.from_name && (
              <p className="error">{errors.from_name}</p>
            )}
          </Wrapper>
          <Wrapper>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.subject}
              className={errors.subject && touched.subject ? 'input-error' : ''}
            />
            {errors.subject && touched.subject && (
              <p className="error">{errors.subject}</p>
            )}
          </Wrapper>
          <Wrapper>
            <label htmlFor="reply_to">Email</label>
            <input
              type="email"
              id="reply_to"
              name="reply_to"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.reply_to}
              className={
                errors.reply_to && touched.reply_to ? 'input-error' : ''
              }
            />
            {errors.reply_to && touched.reply_to && (
              <p className="error">{errors.reply_to}</p>
            )}
          </Wrapper>
          <Wrapper>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              className={errors.message && touched.message ? 'input-error' : ''}
            ></textarea>
            {errors.message && touched.message && (
              <p className="error">{errors.message}</p>
            )}
          </Wrapper>
          <Wrapper>
            <button className="btn-send" type="submit" disabled={isSubmitting}>
              Send Message
            </button>
          </Wrapper>
        </form>
        <StyledModal
          centered
          size="xs"
          opened={opened}
          onClose={() => setOpened(false)}
        >
          <EmailSent />
        </StyledModal>
      </FormWrapper>
    </>
  );
};

export default Email;
