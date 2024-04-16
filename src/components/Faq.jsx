import { useEffect } from "react";

export default function Faq(){

     useEffect(() => {
        const sections = document.querySelectorAll(".faq-sektioner");
    
        sections.forEach(section => {
            const toggle = section.querySelector(".faq-sporgsmal");
            const answer = section.querySelector(".faq-svar");
    
            toggle.addEventListener("click", () => {
                // Toggle visibility of the answer
                answer.classList.toggle("show");
    
                // Rotate the plus sign (+) on click
                toggle.querySelector(".faq-kryds").classList.toggle("rotate");
    
                // Toggle active state of the accordion section
                section.classList.toggle("active");
            });
        });
   })
    
    return (
        <section className="faq">
        <h1>That Simple.</h1>
        <h2>Tilbyder</h2>
        <div className="faq-sektioner">
            <div className="faq-sporgsmal">
                <span className="faq-kryds">+</span> 
                <p>Hosting</p>
            </div>
            <div className="faq-svar">
                <p>Taj Mahal is located in Agra, Uttar Pradesh.</p>
            </div>
        </div>
        
 
        <div className="faq-sektioner">
            <div className="faq-sporgsmal">
                <span className="faq-kryds">+</span>
                <p>Hosting</p>
            </div>
 
            <div className="faq-svar">
                <p>
                    There are eight planets in solar system.
                    Mercury, Venus, Earth, Mars, Jupiter, Saturn,
                    Uranus, and Neptune.
                </p>
            </div>
        </div>

        <div className="faq-sektioner">
            <div className="faq-sporgsmal">
                <span className="faq-kryds">+</span>
                <p>Hosting</p>
 
            </div>
            <div className="faq-svar">
                <p>Taj Mahal is located in Agra, Uttar Pradesh.</p>
            </div>
        </div>
        <div className="faq-sektioner">
            <div className="faq-sporgsmal">
                <span className="faq-kryds">+</span>
                <p>Hosting</p>
 
            </div>
            <div className="faq-svar">
                <p>Taj Mahal is located in Agra, Uttar Pradesh.</p>
            </div>
        </div>
    </section>
    )}