import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "../Firebase";

export default function Medarbejder(){
 const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
        onSnapshot(collection(db, "thatsimple1"), data => {
            const docs = [];
            data.forEach((doc) => {
                docs.push({id: doc.id, ...doc.data()});
            })
            setData(docs)
        });
    }
    fetchData();
    }, [])
  

    async function handleDelete(id){
      await deleteDoc (doc(db, "thatsimple1", id))
    }

  return (
    <div className="container-medarbejder">
  {data.map((kontakt) => (
    <div key={kontakt.id} className="kontakt-sektion">
      <button className="slet-knap" onClick={() => handleDelete(kontakt.id)}>
        Delete
      </button>
      <p className="kontakt-input">{kontakt.name}</p>
      <p><strong>Company:</strong> {kontakt.company}</p>
      <p><strong>Phone Number:</strong> {kontakt.phonenumber}</p>
      <p><strong>Email:</strong> {kontakt.email}</p>
      <p><strong>Message:</strong> {kontakt.message}</p>
    </div>
  ))}
</div>

  );
}


