import React,{useState, useEffect}from 'react';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants'

import TextareaAutosize from 'react-textarea-autosize';

import GifPlayer from 'react-gif-player';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import emailjs from '@emailjs/browser'

import gifLove from '../assets/GifLove.gif';

import { useTranslation } from 'react-i18next';

const Contact = () => {

  const { t } = useTranslation();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setIsValid(emailRegex.test(email));
    return isValid
  };

  function sendEmail(e){
    e.preventDefault();

    const templateParams ={
      from_name:name,
      message:message,
      email:email
    }

    if(email === '' || name === '' || message === ''){
      toast.error(t("emptyfield"));
      return;
    }
    else if(validateEmail()){

      emailjs.send("service_4ldxn73","template_p3ae7a8",templateParams,"t-ZUm3wiHRfJ0Aod0")
      .then((response) => {
        setName('')
        setEmail('')
        setMessage('')
      });
  
      emailjs.send("service_4ldxn73","template_ge986ki",templateParams,"t-ZUm3wiHRfJ0Aod0")
      .then((response) => {
        toast.success(t("emailsent"))
        setName('')
        setEmail('')
        setMessage('')
      }, (err) => {
        toast.error(t("failemail"));
    });
  }
    toast.warn(t("emailinvalid"))
   
   
 }


  return (
          <section className='section' id='contact'>
            <div className='container mx-auto'>
              <div className='flex flex-col lg:flex-row'>

                <motion.div
                  variants={fadeIn('right', 0.3)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once: false, amount: 0.3}}
                  className='flex-1'
                >
                  <div>
                    <h4 className='text-x1 uppercase color font-medium mb-2
                    tracking-wide'>
                      {t("beshy")}
                    </h4>
                    <h2 className='text-[45px] lg:text-[110px] leading-none mb-12 text-color'>
                    {t("letsworktogether")}!
                    </h2>
                  </div>
 
                </motion.div>
                <div className='lg:w-1/2'>
                  <motion.form onSubmit={sendEmail}
                    variants={fadeIn('left', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.3}}
                    className='flex-1 border flex flex-col gap-y-6
                    pb-8 p-6 items-end rounded-3xl border-color'>
                    <input 
                      className='bg-transparent border-b py-1 border-color  outline-none w-full
                      placeholder:text-color text-color focus:border-color transition-all' 
                      type='text'
                      id='name' name='name'
                      placeholder={t("yourname")}
                      value={name} onChange={(e) => setName(e.target.value)}
                    />
                    <input 
                      className='bg-transparent border-b border-color py-1 outline-none w-full
                      placeholder:text-color text-color focus:border-color transition-all' 
                      type='text'
                      autoComplete='email'
                      id='email' name='email'
                      placeholder={t("youremail")}
                      value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextareaAutosize
                      className='bg-transparent border-b border-color py-1 outline-none w-full
                      placeholder:text-color text-color focus:border-color transition-all resize-none ' 
                      placeholder={t("yourmessage")}
                      value={message} onChange={(e) => setMessage(e.target.value)}
                    ></TextareaAutosize>
                    <div className='flex w-full flex-row-reverse'>
                      <div className='w-1/2 flex justify-end items-end'>
                        <button className='btn' type='submit'>
                          <h2>
                            {t("sendmessage")}
                          </h2>
                        </button>
                      </div>
                      <div className='w-1/2'>
                        <GifPlayer autoplay={true} className='border-4 rounded-full' gif={gifLove} />
                      </div>
                    </div>
                  </motion.form>
                </div>
              </div>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </div>
         </section>)
};

export default Contact;
