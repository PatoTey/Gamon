import { useState } from "react";

export default function useToggler(){
    const [on, setOn] = useState(false)

    function toggle(){
        setOn(prev => !prev)
    }

    return [on, toggle]
}