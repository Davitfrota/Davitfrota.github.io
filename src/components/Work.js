import React,{useState} from 'react';

import {motion} from 'framer-motion'

import { fadeIn } from '../variants';

import gifWeather from '../assets/weather.gif'
import gifWeatherMp4 from '../assets/weather.mp4'
import WeatherLogo from '../assets/weather_logo.svg'
import QuicklyNoteLogo from '../assets/QuicklyNote.png'
import QuicklyNoteGif from '../assets/QuicklyNote_Gif.gif'
import QuicklyNoteMp4 from '../assets/QuicklyNote_Gif.mp4'
import InstantSnack from  '../assets/InstantSnack.png'
import { useTranslation } from 'react-i18next';

const Work = () => {
  const Github = 'https://github.com/Davitfrota'

  const { t } = useTranslation();

  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
  };
  
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
            variants={fadeIn('right', 0.3 )}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 '>
            <div>
              <h2 className='h2 leading-tight text-color'>
                {t("mylatestwork")}
              </h2>
              <a href=''>
                <button className='btn btn-sm'>{t("viewallprojects")}</button>
              </a>
            </div>
            <div className=' flex flex-row'>
              <div >
                <div className='group relative overflow-hidden w-60  mr-2 '>
                  
                  <div className='group-hover:bg-black/70 w-full h-full absolute
                z-40 transition-all duration-300'></div>

                  <div className=''>
                    <img className='group-hover:scale-125 transition-all duration-500 border-4 rounded-3xl border-color'
                      src={WeatherLogo}
                      alt=''
                    />
                  </div>
                  
                  <div className='absolute -bottom-full left-14 group-hover:bottom-24 
                  transition-all duration-500 z-50  '>
                    <span className='text-gradient'>React Native</span>
                  </div>
                  
                  <div className='absolute -bottom-full left-14 group-hover:bottom-14 
                  transition-all duration-700 z-50'>
                    <span className=' text-3xl text-white'>Clean Sky</span>
                  </div>

                </div>
              </div>
                <div className='w-[200px] h-[64]'>
                  <video
                    controls={isPlaying} 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className=' border-4 border-color rounded-3xl'
                  >
                    <source src={gifWeatherMp4} type="video/mp4" />
                    Seu navegador não suporta a tag de vídeo.
                  </video>
                </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 flex flex-col gap-y-10'>
            <div className=' flex flex-row h-full justify-center items-end'>
              <div className=' flex flex-row'>
                <div className='group relative overflow-hidden w-60 h-60 mr-2'>
                  
                  <div className='group-hover:bg-black/70 w-full h-full absolute
                z-40 transition-all duration-300'></div>

                  <img className='group-hover:scale-125 transition-all duration-500 border-4 rounded-3xl border-color'
                      src={QuicklyNoteLogo}
                      alt=''
                  />
                  <div className='absolute -bottom-full left-14 group-hover:bottom-24 
                  transition-all duration-500 z-50  '>
                    <span className='text-gradient'>React Native</span>
                  </div>
                  
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 
                  transition-all duration-700 z-50'>
                    <span className=' text-3xl text-white'>QuicklyNote</span>
                  </div>
                </div>  
                <div className='w-[200px] h-[64]'>
                <video
                    controls={isPlaying} 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className=' border-4 border-color rounded-3xl'
                  >
                  <source src={QuicklyNoteMp4} type="video/mp4" />
                  Seu navegador não suporta a tag de vídeo.
                </video>
              </div>
              </div>
            
                
            </div>
            {/* <div className=' flex flex-row'>
              <div>
                <div className='group relative overflow-hidden border-2
                border-white/50 rounded-x1 w-60  '>
                  
                  <div className='group-hover:bg-black/70 w-full h-full absolute
                z-40 transition-all duration-300'></div>

                  <img className='group-hover:scale-125 transition-all duration-500 border-4 rounded-3xl border-color'
                      src={InstantSnack}
                      alt=''
                  />
                  <div className='absolute -bottom-full left-14 group-hover:bottom-24 
                  transition-all duration-500 z-50  '>
                    <span className='text-gradient'>React Native</span>
                  </div>
                  
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 
                  transition-all duration-700 z-50'>
                    <span className=' text-3xl text-white'>Project Title</span>
                  </div>
                </div>
              </div>
              <div className='w-[200px] h-[64]'>
                <video
                  controls={isPlaying} 
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className=' border-4 border-color rounded-3xl'
                >
                  <source src={QuicklyNoteMp4} type="video/mp4" />
                  Seu navegador não suporta a tag de vídeo.
                </video>
              </div>
            </div> */}
          </motion.div>
        </div>

      </div>
    </section>);
};

export default Work;
