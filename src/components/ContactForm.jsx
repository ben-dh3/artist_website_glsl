import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact" className="m-10 w-full xl:self-center">
      <div className="text-center text-5xl text-colour font-AzeretMonoItalic">Contact</div>
      <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <div style={{ display: 'none' }}>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </div>
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 bg-white"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 bg-white"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 bg-white"
          />
        </div>
        <div className="mt-3 flex items-start">
          <div className="flex mt-0.5">
            <input
              id="disclaimer"
              type="checkbox"
              className="cursor-pointer mt-1 py-3 px-4 block w-full text-md rounded-lg border border-gray-200 bg-white"
            />
          </div>
          <div className="ml-3">
            <label htmlFor="disclaimer" className="cursor-pointer select-none text-sm text-gray-600">
              By submitting this contact form, you acknowledge and agree to the collection of your personal information.
            </label>
          </div>
        </div>
        <div className="bg-white text-blue-600 border border-blue-600 text-2xl p-2 rounded-3xl mt-10 grid">
          <button type="submit" aria-label="submit contact form">Send</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
