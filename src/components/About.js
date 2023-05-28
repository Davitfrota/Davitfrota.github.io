import React from 'react';

import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants'

import { FaFileAlt } from 'react-icons/fa'

import {TypeAnimation} from 'react-type-animation';

import curriculum from '../assets/curriculum.pdf'
import img from '../assets/about2.png'

import { useTranslation } from 'react-i18next';


const About = () => {

  const { t } = useTranslation();

  const {ref, inView} = useInView({
    threshold: 0.5
  });
  return(
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
        lg:gap-x-20 lg:gap-y-0 h-screen'>

          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 lg:bg-about1  bg-contain text-color bg-no-repeat h-[640px]
            bg-top'
          >
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 '
            >
            <h2 className=' h2 color'>{t("about")}. </h2>
            <motion.div
              variants={fadeIn('up',0.4)} 
              initial='hidden' whileInView={'show'} 
              viewport={{once:false, amount:0.7}}

              className='h3 mb-4 flex flex-row'
              >
              <span className='text-color mr-4'>{t("developer")}</span>
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
            <p className='mb-6 text-color text-sm lg:text-base font-semibold'>
              {t("description_about")}
            </p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12 justify-center'>
              <div>
                <div className='text-[40px] font-tertiary color mb-2'>
                  {inView ? <CountUp start={0} end={2} duration={3}/> : null}
                </div>
                <div className='font-primary text-sm text-color tracking-[2px]'>
                {t("yearsof")} <br/>
                {t("experience")}
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary color mb-2'>
                  {inView ? <CountUp start={0} end={15} duration={7}/> : null}
                </div>
                <div className='font-primary text-color text-sm tracking-[2px]'>
                  {t("projects")} <br/>
                  {t("completed")}
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center justify-center'>
              <a href={curriculum} download>
                <button className='btn_cv'>
                  <h3 className='w-full btn'>Download CV</h3>
                  <div className='flex'>
                    <FaFileAlt size={20} color="#000" />
                  </div>
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

  ) 
};

export default About;
