import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        placeholder='Your Name'
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type='email'
        name='email'
        placeholder='Your Email'
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name='message'
        placeholder='Your Message'
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <button type='submit'>Send</button>
    </form>
  );
}

export default ContactForm;
