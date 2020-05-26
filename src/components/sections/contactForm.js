import React from "react"
import styled from "styled-components"

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "", howYouHeard: "empty" };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => this.setState({formSuccess: true}))
      .catch(error => this.setState({formError: true}))

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message, howYouHeard, formSuccess, formError } = this.state;
    if (formSuccess) {
      return (
        <p>Thanks! Your message has been sent.</p>
      )
    }

    if (formError) {
      return (
        <p>Uh oh! Something went wrong. Try again later?</p>
      )
    }

    return (
      <StyledForm name="contact" onSubmit={this.handleSubmit} data-netlify={true}>
        <FormInputWrapper>
          Your Name: <Input type="text" name="name" value={name} onChange={this.handleChange} />
        </FormInputWrapper>
        <FormInputWrapper>
          Your Email: <Input type="email" name="email" value={email} onChange={this.handleChange} />
        </FormInputWrapper>
        <FormInputWrapper>
          Message: <TextArea rows={4} name="message" value={message} onChange={this.handleChange} />
        </FormInputWrapper>
        <FormInputWrapper>
          How did you hear about Goodman Analytics?
          <FormSelect name="howYouHeard" value={howYouHeard} onChange={this.handleChange} >
            <option value="empty">--</option>
            <option value="friend">I am a friend or acquaintance</option>
            <option value="linkedin">LinkedIn</option>
            <option value="search">Online search</option>
            <option value="other">Other</option>
          </FormSelect>
        </FormInputWrapper>
        <SubmitButton type="submit">Send</SubmitButton>
      </StyledForm>
    );
  }
}

const StyledForm = styled.form`
  width: 400px;
  padding: 0px 16px;

  @media (max-width: ${props => props.theme.screen.xs}) {
    display: block;
    width: 100%;
  }
`

const FormInputWrapper = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

const FormSelect = styled.select`
  margin-top: 4px;
  background: white;
`

const Input = styled.input`
  margin-top: 4px;
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.color.primary};
  line-height: 24px;
  width: 100%;
  text-align: left;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.color.secondary};
  border-image: initial;
  border-radius: 4px;
  padding: 8px;
  outline: 0px;
  &:focus {
    box-shadow: inset ${props => props.theme.color.secondary} 0px 0px 0px 2px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
    width: 100%;
  }
`

const TextArea = styled.textarea`
  margin-top: 4px;
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.color.primary};
  line-height: 24px;
  width: 100%;
  text-align: left;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.color.secondary};
  border-image: initial;
  border-radius: 4px;
  padding: 8px;
  outline: 0px;
  &:focus {
    box-shadow: inset ${props => props.theme.color.secondary} 0px 0px 0px 2px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
    width: 100%;
  }
`

const SubmitButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 40px;
  display: block;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.secondary};
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`

export default ContactForm