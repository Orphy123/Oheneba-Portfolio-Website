import React, { useState, useEffect } from "react";
// import profilePic from "/Users/ohenebaberko/Downloads/MyPortWeb/src/assets/minePic.jpeg";
import profilePic from '../assets/minePic.jpeg'
import { useSpring, animated as a } from 'react-spring';
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
    <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className='w-full sm:w-[250px]'
    >
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
                <img
                    src={icon}
                    alt='web-development'
                    className='w-16 h-16 object-contain'
                />

                <h3 className='text-white text-[20px] font-bold text-center'>
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.05];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const slideUpFadeIn = {
    hidden: {
        y: 100,   // starts 100 pixels below the original position
        opacity: 0
    },
    visible: {
        y: 0,     // ends at the original position
        opacity: 1,
        transition: {
            type: 'spring',
            damping: 15,
            stiffness: 200
        }
    }
};



const About = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));

    return (
        <div className='flex flex-wrap justify-center items-center w-full mt-8'>

            {/* "Introduction" Title */}
            <div className='w-full text-center mb-8'>
                <h2 className='text-white-100 font-bold text-6xl'>Introduction</h2>
            </div>

            {/* Profile Picture */}
            <motion.div
                className='w-full sm:w-1/3 flex justify-center items-center p-4 mb-4'
                variants={slideUpFadeIn}
                initial="hidden"
                animate="visible"
            >
                <a.img
                    src={profilePic}
                    alt="Oheneba Berko"
                    className="w-100 h-100 mx-auto rounded-full sm:rounded-lg ring-4 ring-tertiary shadow-2xl hover:ring-2 hover:ring-white transition ease-in duration-200 sm:object-cover"
                    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                    style={{ transform: props.xys.interpolate(trans) }}
                />
            </motion.div>

            {/* Text Content */}
            <div className='w-full sm:w-2/3 p-4'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-4 text-secondary text-[17px] sm:max-w-3xl leading-[30px]'
                >
                    Hello Everyone,<br/> <br/>
                    I'm Oheneba Berko, a Computer Science undergraduate at the University of Richmond with a minor in Entrepreneurship.
                    A technologist at heart and an entrepreneur by choice, I have honed my skills in Software Engineering and Business
                    Consulting to create a unique blend of technical proficiency and business acumen.<br/>
                    <br/>
                    Driven by a passion to employ tech-driven solutions for societal advancement,
                    my primary objective is to leverage technology to not only solve complex problems,
                    but also to inspire personal growth and transformation. I believe in the power of innovation and its potential to
                    bring about lasting change.<br/><br/>
                    As I continue my academic and professional journey, I am committed to utilizing my skills to drive positive change
                    and make a significant impact on lives. Welcome to my portfolio, a showcase of my determination to make a difference
                    through technology and entrepreneurship.
                </motion.p>
            </div>

            {/* Services Section */}
            <div className='w-full mt-20 flex flex-wrap gap-10 justify-center'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </div>
    );
};


export default SectionWrapper(About, "about");
