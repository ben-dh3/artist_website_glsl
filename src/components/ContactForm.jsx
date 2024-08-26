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
    <div id="contact" className="flex flex-col m-10 w-full space-y-10">
      <div className="flex self-center text-center text-4xl">Contact</div>
      <form className='flex flex-col' name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <div style={{ display: 'none' }}>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </div>
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm">Name</label>
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
          <label htmlFor="email" className="block text-sm">Email</label>
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
          <label htmlFor="message" className="block text-sm">Message</label>
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
        <div className="flex justify-center self-center bg-white bg-colour text-colour hover:text-white border border-colour text-md p-1 mt-10 w-40">
          <button className='' type="submit" aria-label="submit contact form">Send</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
