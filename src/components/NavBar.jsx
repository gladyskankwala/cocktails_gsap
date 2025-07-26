import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Active ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function NavBar() {
  const navRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      navRef.current,
      {
        backgroundColor: 'transparent',
        backdropFilter: 'blur(0px)',
      },
      {
        scrollTrigger: {
          trigger: navRef.current,
          start: 'top top',
          end: '+=100',
          scrub: true,
        },
        backgroundColor: '#00000050',
        backdropFilter: 'blur(10px)',
        duration: 1,
        ease: 'power1.inOut',
      }
    );
  }, []);

  return (
    <nav ref={navRef} >
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="./images/logo.png" alt="logo"/>
          <p className="text-white font-bold text-lg">Velvet Pour</p>
        </a>

        <ul className="flex gap-6 mt-4 md:mt-0">
          <li><a href="#cocktails">Cocktails</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#work">The Art</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
