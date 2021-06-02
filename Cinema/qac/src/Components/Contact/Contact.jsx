import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";

const ContactUs = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, e) => {
        console.log(data, e);
        emailjs.sendForm('service_z6tey7i', 'template_ly9kskf', e.target, 'user_F3eP1aV9v0QtqRuME02vV')
            .then((data) => {
                console.log('SUCCESS!', data.status, data.text);
                e.target.reset();
            })
            .catch((errors) => {
                console.log('Failed...', errors.text);
            })
    };

    return (
        <>

            <div >
                <h2>Contact Us</h2>
                <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div>
                            <label>Name:</label>
                            <input type="text" name="user_name" {...register("Name", { required: true, minLength: 3, maxLength: 30 })} />
                            {errors.Name?.type === 'required' && <span>  A name is required  </span>}
                            {errors.Name?.type === 'minLength' && <span>  3 Characters required  </span>}
                            {errors.Name?.type === 'maxLength' && <span>  30 Characters exceeded  </span>}
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="text" name="user_email" {...register("Email", { required: true, pattern: /\S+@\S+\.\S+/ })} />
                            {errors.Email?.type === 'required' && <span>   An email is required</span>}
                            {errors.Email?.type === 'pattern' && <span>   Enter a valid email</span>}
                        </div>
                        <div>
                            <label for="subject" >Subject:</label>
                            <select id="subject" name="subject" {...register("Subject", { required: "select one option" })}>
                                <option disabled selected value="sf" >-- Select a Subject --</option>
                                <option value="Movies">Movies</option>
                                <option value="Tickets">Ticket Enquiries</option>
                                <option value="Location">Location</option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.Subject && <span>Select a Subject</span>}

                        </div>
                        <div>
                            <label>Message:</label>
                            <textarea name="message" {...register("Message", { required: true, minLength: 10, maxLength: 1000 })} />
                            {errors.Message?.type === 'required' && <span>   A message is required</span>}
                            {errors.Message?.type === 'minLength' && <span>   10 Characters required</span>}
                            {errors.Message?.type === 'maxLength' && <span>   1000 Characters exceeded</span>}
                        </div>
                        <div>
                            <input type="submit" value=" Submit Form " />
                            <button type="reset" id=" button" value="reset"> Reset </button>
                        </div>
                    </div>
                </form>
            </div>

        </>
    );
}

export default ContactUs;