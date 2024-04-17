import linje5 from "../assets/linje5.png";
import linje6 from "../assets/linje6.png";
import linje7 from "../assets/linje7.png";

export default function Thatsimple(){



    return (
        <section>
        <div className="book">
        <div className="bookmode">
            <div className="contentbook">
                <h1>Skal vi tage en snak?</h1>
                <button id="bookknap">Book møde</button>
            </div>
            <img src={linje5} id="linje5" alt="linje" />
            <img src={linje6} id="linje6" alt="linje" />
        </div>

    </div>
    
    <div className="thatsimple">
    <img src={linje7} id="linje7" alt="linje" />
   <h3>Det er simplethen “That Simple”</h3>
</div>
</section>


    )
}