import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import { UserIcon, GlobeIcon, MailIcon, WhatsAppIcon, CloseIcon } from '../components/Icons';

interface ContactContent {
  title: string;
  subtitle: string;
  heading: string;
  info: {
    name: { head: string; sub: string };
    address: { head: string; sub: string };
    email: { head: string; sub: string };
    whatsapp: { head: string; sub: string };
  };
  form: {
    heading: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    button: string;
    sendingButton: string;
    successMessage: string;
    errorMessage: string;
  };
}

interface ContactProps {
  content: ContactContent;
  language: 'pt' | 'en';
}

interface SnackbarProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const Snackbar: React.FC<SnackbarProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // Auto-hide after 5 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  const typeClasses = type === 'success' ? 'bg-cyan-500' : 'bg-red-500';

  return (
    <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 rounded-lg text-white shadow-xl flex items-center gap-4 transition-opacity duration-300 ${typeClasses}`}>
      <span>{message}</span>
      <button onClick={onClose} className="p-1 -mr-2 rounded-full hover:bg-black/20">
        <CloseIcon className="w-5 h-5" />
      </button>
    </div>
  );
};


const ContactInfoRow: React.FC<{ icon: React.ReactNode; head: string; sub: string; link?: string }> = ({ icon, head, sub, link }) => (
  <div className="flex items-center gap-4">
    <div className="text-cyan-500 text-3xl">
      {link ? <a href={link} target="_blank" rel="noopener noreferrer">{icon}</a> : icon}
    </div>
    <div>
      <div className="font-bold text-lg">{head}</div>
      <div className="text-gray-600">{sub}</div>
    </div>
  </div>
);

const Contact: React.FC<ContactProps> = ({ content, language }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  
  const whatsappMessage = language === 'pt'
    ? 'Olá, Jandson! Vi seu portfólio e estou interessado em seus serviços de software.'
    : "Hi Jandson! I saw your portfolio and I'm interested in your software services.";
  
  const whatsappLink = `https://wa.me/5521973189629?text=${encodeURIComponent(whatsappMessage)}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    const submissionData = {
      ...formData,
      _subject: `New message from your portfolio: ${formData.name}`,
      _template: "basic",
    };

    try {
      const res = await fetch('https://formsubmit.co/ajax/jandson1512@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };


  return (
    <section id="contact" className="py-24 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={content.title} subtitle={content.subtitle} />
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Column */}
          <div className="w-full md:w-2/5">
            <h3 className="text-2xl font-bold mb-4">{content.heading}</h3>
            <div className="space-y-6">
              <ContactInfoRow icon={<UserIcon />} head={content.info.name.head} sub={content.info.name.sub} />
              <ContactInfoRow icon={<GlobeIcon />} head={content.info.address.head} sub={content.info.address.sub} />
              <ContactInfoRow icon={<MailIcon />} head={content.info.email.head} sub={content.info.email.sub} link="mailto:jandson1512@gmail.com"/>
              <ContactInfoRow icon={<WhatsAppIcon />} head={content.info.whatsapp.head} sub={content.info.whatsapp.sub} link={whatsappLink}/>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-3/5">
            <h3 className="text-2xl font-bold mb-4">{content.form.heading}</h3>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <input type="text" name="name" placeholder={content.form.namePlaceholder} required value={formData.name} onChange={handleChange} className="w-full p-3 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                <input type="email" name="email" placeholder={content.form.emailPlaceholder} required value={formData.email} onChange={handleChange} className="w-full p-3 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
              
              <div className="mb-4">
                <textarea name="message" cols={30} rows={5} placeholder={content.form.messagePlaceholder} required value={formData.message} onChange={handleChange} className="w-full p-3 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"></textarea>
              </div>

              <div>
                <button type="submit" disabled={status === 'sending'} className="w-44 bg-cyan-500 text-white text-lg font-semibold px-6 py-3 rounded-md border-2 border-cyan-500 transition-all duration-300 hover:bg-transparent hover:text-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed">
                  {status === 'sending' ? content.form.sendingButton : content.form.button}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {status === 'success' && (
        <Snackbar 
          message={content.form.successMessage} 
          type="success"
          onClose={() => setStatus('idle')} 
        />
      )}
      {status === 'error' && (
        <Snackbar 
          message={content.form.errorMessage} 
          type="error"
          onClose={() => setStatus('idle')}
        />
      )}
    </section>
  );
};

export default Contact;