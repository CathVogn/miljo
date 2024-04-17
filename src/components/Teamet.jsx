import linje3 from "../assets/linje3.png";
import ebba from "../assets/ebba.jpeg";

export default function Teamet(){



    return (
        <section className="modteamet">
         <img src={linje3} id="linje3" alt="linje" />
       <div className="modteamet-tekst">
           <h2>Teamet</h2>
       </div>
       <div className="billede-modteamet">
       <img src={ebba} alt="linje" />
       <img src={ebba} alt="linje" />
       <img src={ebba} alt="linje" />
   </div>
   </section>



    )
}