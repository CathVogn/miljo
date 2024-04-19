import linje3 from "../assets/linje3.png";
import cath from "../assets/cath.png";
import emma from "../assets/emma.png";
import nynne from "../assets/nynne.png";

export default function Teamet(){



    return (
        <section className="modteamet">
         <img src={linje3} id="linje3" alt="linje" loading="lazy"/>
       <div className="modteamet-tekst">
           <h2>Teamet</h2>
       </div>
       <div className="billede-modteamet">
        <div className="billede-med-tekst">
          <img src={cath} alt="linje" loading="lazy" />
          <div className="billede-tekst">
            <h3>Cathrine Vogensen</h3>
            <h4>Ceo</h4>
          </div>
        </div>
       <div className="billede-med-tekst">
          <img src={emma} alt="linje" loading="lazy" />
          <div className="billede-tekst">
            <h3>Emma Hammelsvang</h3>
            <h4>Praktikant</h4>
          </div>
        </div>
        <div className="billede-med-tekst">
          <img src={nynne} alt="linje" loading="lazy" />
          <div className="billede-tekst">
            <h3>Nynne Siems</h3>
            <h4>Web-design</h4>
          </div>
        </div>
        </div>
   </section>



    )
}