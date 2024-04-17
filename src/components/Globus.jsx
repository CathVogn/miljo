import globus from "../assets/globusimg.svg";
import klat from "../assets/klat.svg";
export default function Globus(){




    return (
    <section className="forsideglobus">
    <div className="globus-sektion">
        <img src={globus} alt="globus" loading="lazy"/>
        <img src={klat} alt="lyserød klat" loading="lazy"/>
       </div>
       <div className="delfremtiden">
<h1>Vær en del af fremtiden</h1>
<h2>Sammen med That Simple.</h2>
<p>That Simple er et nyopstartet webbureau dedikeret til at skabe digitale løsninger med fokus på både design og miljømæssig ansvarlighed. Vores mission er at levere enestående webdesign og websites, der ikke kun opfylder vores kunders behov, men også er i harmoni med planeten. 
    Vi ønsker at opbryde med den opfattelse at bæredygtigt webdesign er grønt, brunt og kedeligt. Her skaber vi balancen, så din virksomhed kan skille sig ud og samtidig have god samvittighed.    
    <br/>Vi erkender, at brugen af hjemmesider aldrig kan blive bæredygtigt eller miljøvenligt, men vi arbejder hen imod en digital verden der tager mest muligt hensyn.  
</p>
</div>
</section>




    )
}