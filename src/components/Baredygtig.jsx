import palette from "../assets/imgbaredygtig/palette.png";
import font from "../assets/imgbaredygtig/font.png";
import kode from "../assets/imgbaredygtig/kode.png";
import linje2 from "../assets/imgbaredygtig/linje2.png";
import pageloade from "../assets/imgbaredygtig/pageloade.png";
import strom from "../assets/imgbaredygtig/strom.png";
import kamera from "../assets/imgbaredygtig/kamera.png";
import linje1 from "../assets/imgbaredygtig/linje1.png";

export default function Baredygtig(){


    return (

          
    <div className="baredygtig-webiste"> 
      <img src={linje1} id="linje1" alt="palette" loading="lazy"/>
    <h1>Bæredygtig Website</h1>
    <div className="baredygtig-kol">
        <div className="hver-enkeltkort"> 
            <h3>Billeder</h3>
            <img src={kamera} alt="palette" loading="lazy"/>
            <p>Billeder er en af de største klimasyndere. Men de er også med til at skabe lækkert og behageligt design, så det er en hårfin grænse. Derfor bør man overveje hvordan man behandler billeder, frem for at skrotte dem fuldstændig. 

                Filtype: Vælger du den rigtige filtype, så mindsker du størrelsen mest muligt. Har du et simpelt billede såsom et logo eller ikoner så bør du bruge PNG. Har du derimod et billede med meget skygge, bør du bruge JPEGs. Til stregtegninger og illustrationer fungerer SVG rigtig godt. 
                
                Sløring: Man kan også reducere størrelsen på billeder ved at mængden af detaljer mindskes. Dette kan gøres ved at sløre baggrunden. Naturligvis ikke det der er i fokus, men alt det øvrige. 
                Farvemætning: Jo større farvevariation, jo mere fylder billedet. Overvej derfor hvilken farve palette du ønsker at bruge.
                </p>
        </div>
    </div>

        <div className="baredygtig-kol">
        <div className="hver-enkeltkort">
            <h3>Farver</h3>
            <img src={palette} alt="palette" loading="lazy"/>
            <p>Farver har en kæmpe betydning, når det kommer til en virksomheds visuelle brand. Men også her bør man 
                være opmærksom. Mørke farver er effektive, når det kommer til at reducere strømforbruget, da flere pixels 
                er slukkede. Rød og grøn kræver også mindre energi. Derimod er hvid og blå mere energikrævende. Det kan derfor også være en god idé at overveje darkmode.
            </p>
        </div>
        </div>
    <div className="baredygtig-kol">
        <div className="hver-enkeltkort">
            <h3>Font</h3>
            <img src={font} alt="font" loading="lazy"/>
            <p>Selv når det kommer til den mindste detalje, som valg af font, kan du gøre en forskel og tage et mere bæredygtigt valg. Med muligheden for at hente fonte fra web, er design mulighederne snart uendelige. 
                Men det påvirker klimaet. Ved brug at webfonte øger man mængden af dataoverførsel og serviceanmodninger, hver gang websiden bliver loadet hos en bruger.
                Ønsker man at reducere energiforbruget, bør man anvende systemfonte. Det er altså de fonte der i forvejen er installeret på computeren. Vi kender dem som Times New Roman, Arial, Helvetica osv.
                Dette kan dog hæmme kreativiteten og det visuelle design. Man kan sagtens bruge webfonte med god samvittighed - det handler blot om balance.
                </p>
        </div>
    </div>
    
       
    <div className="baredygtig-kol">
         <img src={linje2} id="linje2" alt="globus" loading="lazy"/>
        <div className="hver-enkeltkort">
            <h3>Kode</h3>
            <img src={kode} alt="kode" loading="lazy"/>
            <p>Lav genbrugelige kodestykker. Således at du blot kan tilpasse kodestykket så det passer præcis til formålet. Så slipper du altså for at skrive ny kode og dermed mindske den mængde, der skal vedligeholdes.
                Desuden bør du slette kode der ikke længere bruges, det tager nemlig serverplads og kræver energi. Dette kan blandt andet være unødvendige gentagelser og plugins der ikke er i brug.
                Sidste lille tip er guld værd. Drop autoplay og brug lazyload. Dette sørger for, at der ikke bruges unødvendig energi på at overføre data, som brugeren måske slet ikke skal/vil bruge.
                </p>
        </div>
    </div>
    <div className="baredygtig-kol">
        <div className="hver-enkeltkort">
            <h3>Page Load</h3>
            <img src={pageloade} alt="pageloade" loading="lazy"/>
            <p>Jo længere brugerrejsen er, jo flere undersider skal brugeren besøge og jo mere data bruges der. Mængden af data kan reduceres ved at forkorte brugerrejsen. Her er det altså en win-win både for kloden, din virksomhed og brugerne. De opnår altså samme resultat blot ved en nemmere og kortere brugerrejse. Identificer hvor mange handlinger brugeren kommer igennem for at komme i mål. 
                Her bør man tænke meget over, need to have frem for nice to have.</p>
        </div>
    </div>

    <div className="baredygtig-kol">
        <div className="hver-enkeltkort">
            <h3>Strømlin Content</h3>
            <img src={strom} id="strom" alt="strom" loading="lazy"/>
            <p>I takt med, at en virksomhed vokser og tiden går, så vil man tilføje nyt content til hjemmesiden. 
                Det vil altså sige, at der med tiden vil være content som ikke længere er relevant eller nødvendigt. 
                Dette content optager serverplads og kræver energi. Desuden, så vil alt for meget content også forvirre brugeren. 
                Så sørg for at holde det opdateret. Less is more.
            </p>
        </div>
    </div>
        </div>

        

        
    )}