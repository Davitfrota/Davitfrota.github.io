import React from 'react';

import Image from '../assets/avatar7.svg';

import {FaGithub, FaInstagram, FaDribbble, FaGitAlt, FaLinkedinIn, FaWhatsapp} from 'react-icons/fa';
import {BiUser} from 'react-icons/bi'

import {TypeAnimation} from 'react-type-animation';

import {motion} from 'framer-motion'

import {fadeIn} from '../variants'

import { Link} from 'react-scroll'

import { useTranslation } from 'react-i18next';


const Linkedin = 'https://www.linkedin.com/in/davi-frota-full-stack-developer/'
const Whatsapp = 'https://wa.me/5585999269030'
const Instagram = 'https://www.instagram.com/davi.tfrota/'
const Github = 'https://github.com/Davitfrota'


const Banner = () => {
  const { t } = useTranslation();

  return(
    <section 
      className='section flex items-center ' 
      id='home'
    >
      <div className='container mx-auto flex'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center
        lg:gap-x-12 w-full'>
          <div className='flex-1 text-center font-secondary lg:text-left lg:w-1/2'>
            <motion.h1 
              variants={fadeIn('up',0.3)} 
              initial='hidden' whileInView={'show'} 
              viewport={{once:false, amount:0.7}}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px] text-color'
            >
              DAVI FROTA
            </motion.h1>
            <motion.div
              variants={fadeIn('up',0.4)} 
              initial='hidden' whileInView={'show'} 
              viewport={{once:false, amount:0.7}}

              className='mb-6 text-[36px] lg:text-[60px] font-secondary
              font-semibold uppercase leading-[1]'
              >
              <span className='text-color mr-4'>{t('developer')} <br/></span>
              <TypeAnimation
              sequence={[
                'Front End',
                2000,
                'Mobile',
                2000,
              ]}
              speed={50}
              className='color'
              wrapper='span'
              repeat={Infinity}
              />
             
            </motion.div> 
            <motion.p
             variants={fadeIn('up',0.5)} 
             initial='hidden' whileInView={'show'} 
             viewport={{once:false, amount:0.7}}
             className='mb-8 max-w-lg mx-auto lg:mx-0 text-color font-semibold'
             >
              {t('description_banner')}  
            </motion.p>
            <motion.div
              variants={fadeIn('up',0.6)} 
              initial='hidden' whileInView={'show'} 
              viewport={{once:false, amount:0.7}}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
              >
              <Link to='about' className='btn'>
                {t("about")}
              </Link>
              <a href={Github}>
                <button  className='btn'>
                  {t("myportfolio")}
                </button>
              </a>
            </motion.div>
            <motion.div
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 text-color'>
              <motion.a 
                variants={fadeIn('right',2.5)} 
                initial='hidden' whileInView={'show'} 
                viewport={{once:false, amount:0.7}}
                href={Github}
              >
                <FaGithub/>
              </motion.a>
              <motion.a 
                variants={fadeIn('right',2)} 
                initial='hidden' whileInView={'show'} 
                viewport={{once:false, amount:0.7}}
                href={Instagram}
              >
                <FaInstagram/>
              </motion.a>
              <motion.a
                variants={fadeIn('right',1.5)} 
                initial='hidden' whileInView={'show'} 
                viewport={{once:false, amount:0.7}}
                href={Linkedin}
              >
                <FaLinkedinIn/>
              </motion.a>
              <motion.a
                variants={fadeIn('right',1)} 
                initial='hidden' whileInView={'show'} 
                viewport={{once:false, amount:0.7}}
                href={Whatsapp}
              >
                <FaWhatsapp/>
              </motion.a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('down',0.5)} 
            initial='hidden' whileInView={'show'} 
            className='hidden w-1/2  lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
            >
            <img src={Image} alt=''/>
          </motion.div>
        </div>
      </div>
      
      
    </section>
  ) 
};

export default Banner;
