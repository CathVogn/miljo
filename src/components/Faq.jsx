export default function Faq() {

    const handleAccordionClick = (index) => {
        const element = document.getElementById(index);

        if (element.classList.contains("show")) {
            document.getElementById(index).classList.remove("show");
            document.getElementById("k" + index).classList.remove("rotate");
        } else {
            document.getElementById(index).classList.add("show");
            document.getElementById("k" + index).classList.add("rotate");
        }
    };

    return (
        <section className="faq">
            <h1>That Simple.</h1>
            <h2>Tilbyder</h2>
            <div className="faq-sektioner" onClick={() => handleAccordionClick("0")}>
                <div className="faq-sporgsmal" >
                    <span className="faq-kryds" id="k0">+</span>
                    <p>Hosting</p>
                </div>
                <div className="faq-svar" id="0">
                    <p>Taj Mahal is located in Agra, Uttar Pradesh.</p>
                </div>
            </div>

            <div className="faq-sektioner" onClick={() => handleAccordionClick("1")}>
                <div className="faq-sporgsmal">
                    <span className="faq-kryds" id="k1">+</span>
                    <p>Hosting</p>
                </div>

                <div className="faq-svar" id="1">
                    <p>
                        There are eight planets in solar system.
                        Mercury, Venus, Earth, Mars, Jupiter, Saturn,
                        Uranus, and Neptune.
                    </p>
                </div>
            </div>

            <div className="faq-sektioner" onClick={() => handleAccordionClick("2")}>
                <div className="faq-sporgsmal">
                    <span className="faq-kryds" id="k2">+</span>
                    <p>Hosting</p>

                </div>
                <div className="faq-svar" id="2">
                    <p>Taj Mahal is located in Agra, Uttar Pradesh.</p>
                </div>
            </div>
            <div className="faq-sektioner" onClick={() => handleAccordionClick("3")}>
                <div className="faq-sporgsmal">
                    <span className="faq-kryds" id="k3">+</span>
                    <p>Hosting</p>

                </div>
                <div className="faq-svar" id="3">
                    <p>Taj Mahal is located in Agra, Uttar Pradesh.</p>
                </div>
            </div>
        </section>
    )
}