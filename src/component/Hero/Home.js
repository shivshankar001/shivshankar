import React from "react"
import "./Home.css"
import hero from "../pic/logo12.png"
import skill1 from "../pic/8618881.png"
import skill2 from "../pic/skill4.png"
import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"
// import '@fortawesome/fontawesome-free/css/all.css';

const Home = () => {
    return (
        <>
            <section className='hero' id='home'>
                <div className='container f_flex top'>
                    <div className='left top'>
                        <h3>WELCOME TO THE DEVELOPER PORTFOLIO TEMPLATE</h3>
                        <h1>
                            Hi, I’m <span>Shivshankar</span>
                        </h1>
                        <h2>
                            a
                            <span>
                                <Typewriter words={[" Professional Coder.", " Developer.", " Designer.", " Analyst."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
                            </span>
                        </h2>

                        <p>A passionate and dedicated software developer on a perpetual journey to transform lines of code into seamless digital experiences. As you navigate through my portfolio, you'll discover the fusion of my technical skills, creative mindset, and a relentless pursuit of innovation.</p>

                        <div className='hero_btn d_flex'>
                            <div className='col_1'>
                                <h4>FIND WITH ME</h4>
                                <div className='button'>
                                    {/* <button className='btn_shadow'>
                                        <i class='fab fa-github'></i>
                                    </button>
                                    <button className='btn_shadow'>
                                        <i class='fab fa-instagram'></i>
                                    </button>
                                    <button className='btn_shadow'>
                                        <i class='fab fa-linkedin-in'></i>
                                    </button> */}
                                    <a href='https://github.com/shivshankar001' target='_blank' rel='noopener noreferrer'>
                                        <button className='btn_shadow'>
                                            <i className='fab fa-github'></i>
                                        </button>
                                    </a>
                                    <a href='https://www.instagram.com/_.shivshankar.__/' target='_blank' rel='noopener noreferrer'>
                                        <button className='btn_shadow'>
                                            <i className='fab fa-instagram'></i>
                                        </button>
                                    </a>
                                    <a href='https://www.linkedin.com/in/shivshankar-yadav-576b00236/' target='_blank' rel='noopener noreferrer'>
                                        <button className='btn_shadow'>
                                            <i className='fab fa-linkedin-in'></i>
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div className='col_1'>
                                <h4>BEST SKILL ON</h4>
                                <button className='btn_shadow'>
                                    <img src={skill1} alt='' />
                                </button>
                                <button className='btn_shadow'>
                                    <img src={skill2} alt='' />
                                </button>
                                <button className='btn_shadow'>
                                    <img src={skill3} alt='' />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='right_img'>
                            <img src={hero} alt='' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home