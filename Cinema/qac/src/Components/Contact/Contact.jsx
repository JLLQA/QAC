import emailjs from 'emailjs-com';

const ContactUs = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_z6tey7i', 'template_ly9kskf', e.target, 'user_F3eP1aV9v0QtqRuME02vV')
            .then((result) => {
                console.log('SUCCESS!', result.status, result.text);
                e.target.reset();
            })
            .catch((error) => {
                console.log('Failed...', error.text);
            })
    };

    return (
        <>

            <div align="center">
                <h2>Contact Us</h2>
                <form className="contact-form" onSubmit={sendEmail}>
                    <div>
                        <input type="hidden" name="contact_number" />
                        <div>
                            <label>Name:</label>
                            <input type="text" name="user_name" required />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="email" name="user_email" required />
                        </div>
                        <div>
                            <label for="subject" >Subject:</label>
                            <select id="subject" name="subject" required>
                                <option disabled selected value>-- Select a Subject --</option>
                                <option value="Movies">Movies</option>
                                <option value="Tickets">Ticket Enquiries</option>
                                <option value="Location">Location</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label>Message:</label>
                            <textarea name="message" required />
                        </div>
                        <div>
                            <input type="submit" value="Send" />
                            <button type="reset" id="button"> Reset </button>
                        </div>
                    </div>
                </form>
            </div>

        </>
    );
}

export default ContactUs;