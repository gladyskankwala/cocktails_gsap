import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function Cocktails() {

    useGSAP(() =>{
        const parallaxtimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#cocktails',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true,
            }
        })

        parallaxtimeline
         .from('#c-left-leaf', { x: -100, y: 100})
         .from('#c-right-leaf', { x: 100, y: 100 })
    })
    


    return (
        <section id="cocktails" className="noisy">
            <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
            <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />

            <div className="list">
                <div className="popular">
                    <h2>Most popular cocktails:</h2>
                    <ul>
                        <li key="chapel-Hill"><div className="md:me-28"><h3>Chapel Hill Shiraz</h3><p>AU | Battle</p></div><span>-$10</span></li>
                        <li key="caten-malbee"><div className="md:me-28"><h3>Caten Malbee</h3><p>AU | Battle</p></div><span>-$49</span></li>
                        <li key="rhino-pale-ale"><div className="md:me-28"><h3>Rhino Pale Ale</h3><p>CA | 720 ml</p></div><span>-$20</span></li>
                        <li key="irish-guinness"><div className="md:me-28"><h3>Irish Guinness</h3><p>IE | 600 ml</p></div><span>-$29</span></li>
                       
                    </ul>
                </div>

                <div className="loved">
                    <h2>Most loved cocktails:</h2>
                    <ul>
                        <li key="Tropical Bloom"><div className="me-28"><h3>Chapel Hill Shiraz</h3><p>US | Battle</p></div><span>-$10</span></li>
                        <li key="Passionfruit Mint"><div className="me-28"><h3>Caten Malbee</h3><p>US | Battle</p></div><span>-$49</span></li>
                        <li key="Citrus Glow"><div className="me-28"><h3>Rhino Pale Ale</h3><p>CA | 720 ml</p></div><span>-$20</span></li>
                        <li key="Lavender Fizz"><div className="me-28"><h3>Irish Guinness</h3><p>IE | 600 ml</p></div><span>-$29</span></li>
                       
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Cocktails