
import { collection, onSnapshot } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "../Firebase";

export default function Medarbejder(){
 const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
        onSnapshot(collection(db, "thatsimple"), data => {
            const docs = [];
            data.forEach((doc) => {
                docs.push({id: doc.id, ...doc.data()});
            })
            setData(docs)
        });
    }
    fetchData();
    }, [])


return (
    <div>
        {data.map((kontakt) =>
        <div key={kontakt.id}>
            <p>{kontakt.name}</p>
            <p>{kontakt.email}</p>
            <p>{kontakt.message}</p>
        </div>
        )}
    </div>
)

}