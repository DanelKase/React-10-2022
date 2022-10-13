import { useRef, useState } from "react";

function Lisatoode() {
    const [sõnum, uuendasõnum] = useState("Lisa uus toode")
    const nimiref = useRef()

function Lisa() {
    if (nimiref.current.value=== "") {
        uuendasõnum("sa ei saa tühja nimega toodet sisestada")
    } else {
    uuendasõnum("uus toode lisatud:" + nimiref.current.value)
    }
}
    return (
    <div>
        <div>{sõnum}</div>
        <label>Uue toote nimi</label> <br />
        <input ref={nimiref} type="text" /> <br />
        {6/3=2 && <button onClick={Lisa}>Sisesta</button>} <br />
    </div> 
     );
}

export default Lisatoode;