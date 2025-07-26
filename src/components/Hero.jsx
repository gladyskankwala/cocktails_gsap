import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import imgLeftLeafHero from '/images/hero-left-leaf.png';
import imgRightLeafHero from '/images/hero-right-leaf.png';
import videoHero from '/videos/output.mp4';

gsap.registerPlugin(ScrollTrigger)

function Hero() {

    const videoRef = useRef();

    const isMobile = useMediaQuery({maxWidth: 767});

    useGSAP(()=>{
        const heroSplit = new SplitText('.title', {type: 'chars, words'})

        const paragraphSplit = new SplitText('.subtitle', {type: 'lines'})

        heroSplit.chars.forEach((char)=> char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1,
            ease: 'expo.out',
            stagger: 0.05 
        })

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        })

        .to('.right-leaf', {y: 200}, 0)
        .to('.left-leaf', {y:-200}, 0)

        const startValue = isMobile ? 'top 50%' : 'center 60%';
        const endValue = isMobile ? '120% top' : 'bottom top';

        //video animation timeline
        // create the timeline with a default duration
        const tl = gsap.timeline ({
            scrollTrigger: {
                trigger: videoRef.current,
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
               
            }
        })

        videoRef.current.onloadedmetadata = () => {
            const duration = videoRef.current.duration || 5;

            videoRef.current.play();

            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration
            })
        }

    },[])


    return(
        <>
          <section id="hero" className="noisy">
            <h1 className="title">MOJITO</h1>
            <img 
            src={imgLeftLeafHero}
            alt="left-leaf"
            className="left-leaf" />

            <img 
            src={imgRightLeafHero}
            alt="right-leaf"
            className="right-leaf" />

            <div className="body">
                <div className="content">
                    <div className="space-y-10 hidden md:block">
                        <p>Cool. Crip. Classic</p>
                        <p className="subtitle">
                            Sip the Spirit <br></br> of Summer
                        </p>
                    </div>

                    <div className="view-cocktails">
                        <p className="subtitle">
                            Every cocktail on our menu is a blend of premium ingredients, creative 
                            flair, and timeless recipes — designed to delight your senses
                        </p>
                        <a href="#cocktails">View cocktails</a>
                    </div>
                </div>
            </div>
          </section>

          <div className='video absolute inset-0'>
            <video 
            ref={videoRef}
            src={videoHero}
            muted
            playsInline
            preload='auto'
            >
            </video>
          </div>
        </>
    )
}

export default Hero;
