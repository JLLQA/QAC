import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";
import './Contact.css';
import ContactMap from './ContactMap';
import Navbar from '../Navbar/Navbar';
import { Container } from 'reactstrap';

const ContactUs = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, e) => {
        console.log(data, e);
        emailjs.sendForm('service_z6tey7i', 'template_ly9kskf', e.target, 'user_F3eP1aV9v0QtqRuME02vV')
            .then((data) => {
                console.log('SUCCESS!', data.status, data.text);
                e.target.reset();
                alert("Your form has been submitted successfully");
            })
            .catch((errors) => {
                console.log('Failed...', errors.text);
            })
    };

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>
                <Container>
                    <h1 align="center">Contact</h1>
                    <ContactMap />
                    <br />
                    <div id="potato" align="center" >
                        <h2>Send us an Email</h2>
                        <h4>Please fill out the form below and we will reply by email</h4>
                        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <div className="formGroup">
                                    <div>
                                        <label className="label">Name:</label>
                                    </div>
                                    <div >
                                        <input type="text" {...register("Name", { required: true, minLength: 3, maxLength: 30 })} />
                                        <div className="alertOne">
                                            {errors.Name?.type === 'required' && <p>  A name is required  </p>}
                                            {errors.Name?.type === 'minLength' && <p>  3 Characters required  </p>}
                                            {errors.Name?.type === 'maxLength' && <p>  30 Characters exceeded  </p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="formGroup">
                                    <div>
                                        <label>Email:</label>
                                    </div>
                                    <div >
                                        <input type="text" {...register("Email", { required: true, pattern: /\S+@\S+\.\S+/ })} />
                                        <div className="alertOne">
                                            {errors.Email?.type === 'required' && <p>An email is required</p>}
                                            {errors.Email?.type === 'pattern' && <p>Enter a valid email</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="formGroup">
                                    <div>
                                        <label for="subject" >Subject:</label>
                                    </div>
                                    <div>
                                        <select id="subject" {...register("Subject", { required: "select one option" })}>
                                            <option disabled selected value="">-- Select a Subject --</option>
                                            <option value="Movies">Movies</option>
                                            <option value="Tickets">Ticket Enquiries</option>
                                            <option value="Location">Location</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <div className="alertOne">
                                            {errors.Subject && <p>Select a Subject</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="formGroup">
                                    <div>
                                        <label>Message:</label>
                                    </div>
                                    <div >
                                        <textarea id="messageBox" {...register("Message", { required: true, minLength: 10, maxLength: 1000 })} />
                                        <div className="alertOne">
                                            {errors.Message?.type === 'required' && <p>A message is required</p>}
                                            {errors.Message?.type === 'minLength' && <p>10 Characters required</p>}
                                            {errors.Message?.type === 'maxLength' && <p>1000 Characters exceeded</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="formGroup">
                                    <input id="submitButton" type="submit" value=" Submit Form " />
                                </div>
                                <div>
                                    <button type="reset" id="resetButton" value="reset"> Reset Form </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default ContactUs;