import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

// AVEC EmailJS

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    if (form.current) {
      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY   
      )
      .then(() => {
          setMessageSent(true);
          form.current?.reset();
          setIsSending(false);
      }, (error) => {
          console.log(error.text);
          setIsSending(false);
      });
    }
  };

  return (
    <section id="contact" className="ContactForm-section">
      <h2>Me contacter</h2>
      <form ref={form} onSubmit={sendEmail} className="ContactForm-form">
        <div className="form-group">
          <label>Nom</label>
          <input type="text" name="user_name" required placeholder="Votre nom" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="user_email" required placeholder="votre@email.com" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" required placeholder="Votre projet..." rows={5} />
        </div>
        
        <button type="submit" disabled={isSending}>
          {isSending ? 'Envoi en cours...' : 'Envoyer'}
        </button>

        {messageSent && <p className="success-msg">Message envoyé avec succès ! ✨</p>}
      </form>
    </section>
  );
};

export default ContactForm;