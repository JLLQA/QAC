import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";
import { Container, Button } from 'reactstrap';
import ContactMap from '../Multipage/Map';

const ContactUs = () => {
    document.title = "Contact Us"

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
        <div>
            <div id="dropped-box" className="container-fluid">
                <Container>
                    <h1>CONTACT</h1>
                    <ContactMap />
                    <br />
                    <div align="center">
                        <Button id="infoButton" type="button" href="http://localhost:3000/gettingthere">
                            Click for more Travel Info
                        </Button>
                        <br />
                        <br />
                    </div>
                    <div align="center" >
                        <h2>Send us an Email</h2>
                        <h4>Please fill out the form below and we will reply by email</h4>
                        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <div className="formGroup">
                                    <div>
                                        <label>Name:</label>
                                    </div>
                                    <div >
                                        <input
                                            id="contact"
                                            placeholder="Enter name here"
                                            type="text" {...register("Name", { required: true, minLength: 3, maxLength: 30 })} />
                                        <div>
                                            {errors.Name?.type === 'required' && <p className="alertOne">  A name is required  </p>}
                                            {errors.Name?.type === 'minLength' && <p className="alertOne">  3 Characters required  </p>}
                                            {errors.Name?.type === 'maxLength' && <p className="alertOne">  30 Characters exceeded  </p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="formGroup">
                                    <div>
                                        <label>Email:</label>
                                    </div>
                                    <div >
                                        <input
                                            id="contact"
                                            placeholder="Enter email here"
                                            type="text" {...register("Email", { required: true, pattern: /\S+@\S+\.\S+/ })} />
                                        <div>
                                            {errors.Email?.type === 'required' && <p className="alertOne">An email is required</p>}
                                            {errors.Email?.type === 'pattern' && <p className="alertOne">Enter a valid email</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="formGroup">
                                    <div>
                                        <label>Subject:</label>
                                    </div>
                                    <div>
                                        <select id="subject" {...register("Subject", { required: "select one option" })}>
                                            <option disabled selected value="">-- Select a Subject --</option>
                                            <option value="Movies">Movies</option>
                                            <option value="Tickets">Ticket Enquiries</option>
                                            <option value="Location">Location</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <div>
                                            {errors.Subject && <p className="alertOne">A subject is required</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="formGroup">
                                    <div>
                                        <label>Message:</label>
                                    </div>
                                    <div >
                                        <textarea
                                            placeholder="Enter message here"
                                            id="messageBox" {...register("Message", { required: true, minLength: 10, maxLength: 1000 })} />
                                        <div>
                                            {errors.Message?.type === 'required' && <p className="alertOne">A message is required</p>}
                                            {errors.Message?.type === 'minLength' && <p className="alertOne">Minimum 10 characters required</p>}
                                            {errors.Message?.type === 'maxLength' && <p className="alertOne">1000 Characters exceeded</p>}
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
        </div>
    );
}

export default ContactUs;