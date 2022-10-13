import { useState } from "react";

function Avaleht() {

    const [like, uuendalike] = useState (false)

let [kogus, uuendaKogus] = useState(5)

function vähenda() 
{uuendaKogus(kogus -1)
console.log(kogus)
}
function suurenda(){
    uuendaKogus( kogus + 1 )
}
function nulli() {
    uuendaKogus(0)
}
    return (
        <div>
        
        <button onClick={() => uuendalike(!like)}>Vaheta like</button>

        {like === true && <img onClick={()=>uuendalike(false)} src="/like.svg"/>}
        
        {like === false && <img onClick={()=>uuendalike(true)} src= "/idontlike.svg"/>}


            { kogus > 0 &&  <button onClick={nulli}> nulli </button>   }

            <br />
            <button onClick={vähenda}>-</button>
            <div>KOGUS: {kogus}</div>
            <button onClick={suurenda}>+</button>

        </div>  
        );
}

export default Avaleht;