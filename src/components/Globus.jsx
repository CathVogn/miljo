import klat from "../assets/klat.svg";
import globus1 from "../assets/globus1.json";
import Lottie from "lottie-react";
export default function Globus(){




    return (
    <section>
    <div className="globus-sektion">
    <Lottie animationData={globus1} loop={true} className="lottie" speed={0.5}/>
        <img src={klat} alt="lyserød klat" loading="lazy"/>
       </div>
       <div className="delfremtiden">
<h1>Vær en del af fremtiden</h1>
<h2>Sammen med That Simple.</h2>
<p>That Simple er et nyopstartet webbureau dedikeret til at skabe digitale løsninger med fokus på både design og miljømæssig ansvarlighed. Vores mission er at levere enestående webdesign og websites, der ikke kun opfylder vores kunders behov, men også er i harmoni med planeten. 
    Vi ønsker at opbryde med den opfattelse at bæredygtigt webdesign er grønt, brunt og kedeligt. Her skaber vi balancen, så din virksomhed kan skille sig ud og samtidig have god samvittighed.   </p> 
    <p>Vi erkender, at brugen af hjemmesider aldrig kan blive bæredygtigt eller miljøvenligt, men vi arbejder hen imod en digital verden der tager mest muligt hensyn.  
</p>
</div>
</section>




    )
}