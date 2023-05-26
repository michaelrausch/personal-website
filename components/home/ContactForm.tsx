import axios from "axios";
import React, { FormEvent } from "react"
import { useState } from "react";
import { useReward } from 'react-rewards';


const ContactForm: React.FC = () => {
    let API_URL = process.env.NEXT_PUBLIC_CONTACT_API_URL || '';
    let DEST = process.env.NEXT_PUBLIC_CONTACT_FORM_DESTINATION;

    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [message, setMessage] = useState('')

    let [error, setError] = useState('');
    let [successMessage, setSuccessMessage] = useState('');
    let [formProcessing, setFormProcessing] = useState(false);

    const { reward, isAnimating } = useReward('confetti', 'confetti', {
        zIndex: 1000,
        position: 'absolute',
        elementCount: 200,
        lifetime: 400,
        spread: 60,
        startVelocity: 50,
        angle: 70
    });

    let onSubmit = (evt: FormEvent) => {
        evt.preventDefault()
        setFormProcessing(true);
        setError('');
        setSuccessMessage('');

        const hadError = (message:any) => {
            setFormProcessing(false);
            setError(message);
            setSuccessMessage('');
        }

        const hadSuccess = () => {
            setFormProcessing(false);
            setSuccessMessage('Thanks, ' + name.split(' ')[0] + ', I\'ll get back to you as soon as possible.');
            setError('')
            reward()
        }

        if (name === '') { return hadError('You must enter your name') };
        if (email === '') { return hadError('You must enter your email') };
        if (message === '') { return hadError('You must enter a message') };

        let errorMessage = 'Sorry, ' + name.split(' ')[0] + ', I wasn\'t able to send your message. Please email me at michael@rausch.nz instead.'

        axios.post(API_URL, {
            "Name": name,
            "Email": email,
            "Message": message,
            "Destination": DEST
        })
        .then(result => {
            if (result.status !== 200) {
                return hadError(errorMessage);
            }
            hadSuccess();
        })
        .catch(err => {
            return hadError(errorMessage);
        })
    }

    return (
        <form className="pb-20 overflow-hidden" onSubmit={onSubmit}>
            {error !== '' &&
                <div className="bg-red-500 mb-10 rounded-sm text-white py-4 px-6 font-itc-avant-garde-gothic-pro shadow-offset-black">{error}</div>
            }

            {successMessage !== '' &&
                <div className="bg-green-500 mb-10 rounded-md text-white py-4 px-6 font-futura-pt-bold ">{successMessage}</div>
            }

            <span id="confetti" ></span>


            <div className="pb-10 pt-5 flex w-full gap-5 md:gap-14">
                <div className={"flex-1"}>
                    <label className="text-green-900 text-lg font-itc-avant-garde-gothic-pro">Name</label>
                    <input
                        type="text"
                        className="bg-green-200 rounded-md block text-green-900 w-full border-none text-xl py-3 mt-2  px-5"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Joe Bloggs"
                        id="contact-name"
                    ></input>
                </div>

                <div className={"flex-1"}>
                    <label className="text-green-900 text-lg font-itc-avant-garde-gothic-pro">Email</label>
                    <input type="email"
                           className="bg-green-200 rounded-md block text-green-900 w-full border-none text-xl py-3 mt-2 px-5"
                           value={email}
                           onChange={e => setEmail(e.target.value)}
                           placeholder="hello@example.com"
                           id="contact-email"
                    ></input>
                </div>
            </div>

            <div className="pb-5">
                <label className="text-green-900 text-lg font-itc-avant-garde-gothic-pro">Message</label>
                <textarea
                    className="bg-green-200 rounded-md block text-green-900 w-full border-none mt-2 h-32 text-xl px-5 py-2"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Hi!"
                    id="contact-message"
                ></textarea>
            </div>

            <button
                className="py-3 px-8 bg-black text-xl rounded font-itc-avant-garde-gothic-pro text-white w-full md:w-auto disabled:opacity-50"
                disabled={formProcessing || isAnimating}
                id="contactSubmit">
                {formProcessing ? 'Sending' : 'Send'}
            </button>
        </form>
    )
}

export default ContactForm;
