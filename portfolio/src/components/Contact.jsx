import { useRef } from 'react'
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const contact = [
        {
            name: 'Instagram',
            icon: <FaInstagram />,
            link: 'https://www.instagram.com/sharafath_v'
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin />,
            link: 'https://www.linkedin.com/in/sharafathv/'
        },
        {
            name: 'GitHub',
            icon: <FaGithub />,
            link: 'https://www.github.com/sharafath07'
        },
        {
            name: 'Email',
            icon: <FiMail />,
            link: 'mailto:sharafathahammed112@gmail.com'
        }
    ]

    const formInput = 'w-full rounded-[10px] border border-home-line bg-home-base px-4 py-3 text-base text-home-ink caret-home-accent focus:border-home-accent'

    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm('service_react', 'template_h7uponr', form.current, {
                publicKey: 'baxtb79KHDWTjpB8L',
            })
            .then(
                () => {
                    alert('Message sent successfully!');
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('Failed to send message. Please try again later.');
                    form.current.reset();
                },
            );
    };

    return (
        <section id="contact" aria-labelledby="contact-title" className="section-wrap grid items-start gap-10 md:grid-cols-[1fr_1.1fr] md:gap-16">
            <div>
                <h2 id="contact-title" className="section-title">Contact Me</h2>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-home-muted">
                    Feel free to reach out to me through any of the platforms below!
                </p>
                <ul className="mt-7 flex flex-wrap gap-3">
                    {contact.map(item => (
                        <li key={item.name}>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" aria-label={item.name} title={item.name}
                                className="grid size-12 place-items-center rounded-full border border-home-line bg-home-panel text-xl text-home-accent transition-colors hover:border-home-accent hover:bg-home-accent hover:text-home-accent-ink">
                                {item.icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <form ref={form} onSubmit={sendEmail} className="grid gap-5 rounded-2xl border border-home-line bg-home-panel p-5 sm:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                    <label className="grid gap-2 text-sm font-medium" htmlFor="name">
                        Name
                        <input id="name" name="name" type="text" autoComplete="name" className={formInput} />
                    </label>
                    <label className="grid gap-2 text-sm font-medium" htmlFor="email">
                        Email
                        <input id="email" name="email" type="email" autoComplete="email" className={formInput} />
                    </label>
                </div>
                <label className="grid gap-2 text-sm font-medium" htmlFor="message">
                    Message
                    <textarea id="message" name="message" rows="5" className={formInput + ' resize-y'} />
                </label>
                <button type="submit" className="primary-action justify-self-start">Send Message</button>
            </form>
        </section>
    )
}

export default Contact
