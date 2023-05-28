import React from 'react';

import { BsArrowUpRight} from 'react-icons/bs'

import { motion } from 'framer-motion';

import { fadeIn } from '../variants'

import {services} from '../data/data'

import { useTranslation } from 'react-i18next';

  
const Services = () => {

  const { t } = useTranslation();

  return <section className='section' id='services'>
           <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row'>

              <motion.div
                variants={fadeIn('right', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}}
                className='flex-1 lg:bg-services bg-contain lg:bg-bottom bg-no-repeat
                 mb-12 lg:mb-0'
              >
                <h2 className='h2 color mb-6'>{t("what")}.</h2>
                <h3 className='h3 max-w-[455px] mb-16 text-color'>
                  {t("description_services")}
                </h3>
                <a href='https://www.upwork.com/freelancers/~01792aca8f591e190b'>
                  <button className='btn btn-sm' >{t("seework")}</button>
                </a>
              </motion.div>

              <motion.div
                variants={fadeIn('left', 0.5)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}}
                className='flex-1'
              >

                <div>
                  {services.map((service,index)=>{
                      return (
                            <div 
                                className=' border-b border-color h-auto mb-[20px] flex flex-col pb-1' 
                                key={index} 
                                >
                              <div className='flex flex-row h-12 '>
                                <div className='w-1/2'>
                                  <h4 className='text-[20px] tracking-wider font-primary
                                  font-semibold text-color'>
                                    {service.name}
                                  </h4>
                                </div>
                                <div className='w-1/2 flex justify-end'>
                                  <a href='https://www.upwork.com/freelancers/~01792aca8f591e190b' 
                                    className='btn w-26 h-10 flex justify-center
                                    items-end'
                                  >
                                    <BsArrowUpRight/>
                                  </a>
                                </div>
                              </div>
                              <div className='flex flex-1 items-end '>
                                <p className=' font-secondary leading-tight text-color font-semibold w-full'>
                                  {t(service.name)}
                                </p>
                              </div>
                            </div>);
                })}
                </div>
              </motion.div>

            </div>
           </div>
         </section>;
};

export default Services;
