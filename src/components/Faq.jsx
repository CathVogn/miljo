import linje4 from "../assets/linje4.png";


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
        <img src={linje4} id="linje4" alt="linje" loading="lazy"/>
            <h1>That Simple.</h1>
            <h2>Tilbyder</h2>
            <div className="faq-sektioner" onClick={() => handleAccordionClick("0")}>
                <div className="faq-sporgsmal" >
                    <span className="faq-kryds" id="k0">+</span>
                    <p>Hosting</p>
                </div>
                <div className="faq-svar" id="0">
                    <p>Hos That Simple sørger vi for, at du får en webhost der kører på grøn energi.
                     Dette kan blandt andet være vindenergi eller solenergi. <br />
                     Vi tilbyder desuden også, at at analysere, hvor hovedparten af din målgruppe er lokaliseret.
                     På denne måde kan vi finde en webhost der geografisk er tæt placeret. Dermed kan du sparer en masse energi. </p>
                </div>
            </div>

            <div className="faq-sektioner" onClick={() => handleAccordionClick("1")}>
                <div className="faq-sporgsmal">
                    <span className="faq-kryds" id="k1">+</span>
                    <p>Design</p>
                </div>

                <div className="faq-svar" id="1">
                    <p>
                    Hos That Simple behøver du ikke at gå på kompromis med dit design og visuelle identitet. Her er der både plads til at bæredygtighed og design kan forenes. <br />
                    Vi ønsker at bryde med stereotypen om at bæredygtighed er lig grøn, brun og klichefyldte illustrationer og billeder med træer, blomster og vindmøller. <br />
                    Vi mener, at alt handler om balance. Tilvalg og fravalg. <br />
                    Hos That Simple kan vi både hjælpe dig med at opbygge en visuel identitet, eller tilpasse din nuværende identitet således,
                    <br /> at den stemmer mere overens med de bæredygtige designprincipper. 
                    </p>
                </div>
            </div>

            <div className="faq-sektioner" onClick={() => handleAccordionClick("2")}>
                <div className="faq-sporgsmal">
                    <span className="faq-kryds" id="k2">+</span>
                    <p>Webudvikling</p>

                </div>
                <div className="faq-svar" id="2">
                    <p>Er du nyopstartet? Eller trænger du til justeringer? Så tilbyder That Simple også at udvikle dit website - både fra bunden eller blot optimering/vedligeholdelse. Med løbende samtaler sørger vi for, at du får det præcis som du ønsker med vores ekspertise i bæredygtige principper. </p>
                </div>
            </div>
            <div className="faq-sektioner" onClick={() => handleAccordionClick("3")}>
                <div className="faq-sporgsmal">
                    <span className="faq-kryds" id="k3">+</span>
                    <p>Test</p>

                </div>
                <div className="faq-svar" id="3">
                    <p>Efter endt samarbejde tilsender vi desuden testresultater, fra blandt andet Ecograder - så DU kan sikre dig, at vi har holdt hvad vi lover. Ønsker du det, så kan vi også lave en før analyse hvor vi kan gå i dybden med hvert enkelt emne og vurderer hvor vi kan lave de mest værdifulde ændringer. </p>
                </div>
            </div>
        </section>
    )
}