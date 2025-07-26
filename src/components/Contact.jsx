import { socials } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger, SplitText);


function Contact() {

    useGSAP(() => {
        const titleSplit = new SplitText("#contact h2", { type: "words" });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#contact",
                start: "top center",
            },
            ease: "power2.out",
        })

        timeline
          .from(titleSplit.words,{
            opacity: 0, yPercent: 100, stagger: 0.02, 
          })

          .from('#contact h3, #contact p',{
            opacity: 0, yPercent: 100, stagger: 0.02, 
          })
          .to("#f-right-leaf", {
            y: '-50', duration: 1, ease: "power1.out",
          })
          .to("#f-left-leaf", {
            y: '-50', duration: 1, ease: "power1.out",
          }, "<")
    })


    return (
        <footer id="contact">
            <img src="./images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
            <img src="./images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />

            <div className="content">
                <h2>Where to Find Us</h2>
                <div>
                    <h3>Visit Our Bar</h3>
                    <p>456,Raq Blvd. #404, Los Angeles, CA 90210 </p>
                </div>

                <div>
                    <h3>Contact Us</h3>
                    <p>(555) 987-6543</p>
                    <p>hello@jsmcocktail.com</p>
                </div>

                <div>
                    <h3>Open Every Day</h3>
                    <p>Mon–Thu : 1:00am – 12am</p>
                    <p>Fri : 11:00am – 2am</p>
                    <p>sat : 9:00am – 2am</p>
                    <p>sun: 9:00am – 1am</p>
                </div>

                <div>
                    <h3>Social</h3>
                    <div className="flex-center gap-5">
                        {socials.map((social) => (
                            <a 
                            href={social.url} 
                            key={social.name} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label={social.name}>
                                <img src={social.icon} alt={social.name} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Contact;