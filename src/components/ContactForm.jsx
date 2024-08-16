const ContactForm = () => {
    return(
        <div id="contact" className="m-10 w-full xl:self-center">
            <div className="text-5xl">Contact</div>
                <form name="contact" method="POST">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-sm font-medium">Name</label>
                        <input type="text" id="name" className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium">Email</label>
                        <input type="email" id="email" className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium">Message</label>
                        <textarea id="message" className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900" />
                    </div>

                    <div className="mt-3 flex items-start">
                        <div className="flex mt-0.5">
                            <input id="disclaimer" type="checkbox" className="cursor-pointer mt-1 py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"/>
                        </div>
                        <div className="ml-3">
                            <label htmlFor="disclaimer" className="cursor-pointer select-none text-sm text-gray-600 dark:text-gray-400">
                            By submitting this contact form, you acknowledge and agree to the collection of your personal information.
                            </label>
                        </div>
                    </div>
                    <div className="hover:bg-blue-800 text-white text-2xl p-2 bg-blue-600 rounded-3xl mt-10 grid">
                        <button type="submit">Send</button>
                    </div>
                    
                </form>
        </div>
    )
}

export default ContactForm;