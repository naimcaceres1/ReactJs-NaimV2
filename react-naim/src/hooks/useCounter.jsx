import React, { useState } from "react";

const useCounter = ({initialValue, maxValue}) => {
    const [counter, setCounter] = useState(initialValue)

    const decrement = () => {
        if(counter > initialValue){
            setCounter(counter - 1)
        }
    }

    const increment = () => {
        if(counter < maxValue){
            setCounter(counter + 1)
        }
    }


    return {contador, decrement, increment}
}

export default useCounter
