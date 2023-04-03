import React, {useState} from "react";
import Filter from "./Component/Filter";
import Header from "./Component/Header";
import Singleproduct from "./Component/Singleproduct";
import hey from "./Component/Singleproduct"

const Indigo = (props) => {

    const [counter, setCounter] = useState(20)

    const increment =() => {

        setCounter  (counter + 1)
    }

    const decrement =() => {

        setCounter  (counter + 1)
    }
    return (
        <div>


<div>
    
</div>
<hey />

        </div>
        
    )
}
export default Indigo