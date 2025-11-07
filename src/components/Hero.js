import HeroImg from '../assets/hero.png';
import { AiOutlineTwitter } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Hero(){

    const config = {
        subtitle : 'I\'m a Full stack Developer',
        social : {
            twitter : '',
            github : '',
            linkedin : 'https://www.linkedin.com/in/karthikeyanbp6/'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center' id='hero'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className='text-white text-6xl font-hero-font'>Hi , <br/>I am <span className='text-black'>Karthikeyan</span>
        <p className='text-2xl'>{config.subtitle}</p>
        </h1>
        <div className='flex py-10 '>
            <a href={config.social.twitter} className='pr-5 hover:text-white'><AiOutlineTwitter size={40}/></a>
            <a href={config.social.github} className='pr-5 hover:text-white'><FaGithub  size={40}/></a>
            <a href={config.social.linkedin} className='pr-5 hover:text-white'><FaLinkedin size={40}/></a>
        </div>
        </div>
        
        <img src={HeroImg} className='md:w-1/3'/>
    </section>
}