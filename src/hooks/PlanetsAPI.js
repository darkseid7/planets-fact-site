import { useState, useEffect } from "react";    

const PlanetsAPI = () => {
    const url = "http://localhost:3000/initialState"

    const [planet, setPlanet] = useState([])

    useEffect(()=>  {
        fetch(url)
            .then(response => response.json())
            .then( data=>  {
                console.log(data)
                setPlanet(data)
            })
    }, [])

    return planet

}

export default PlanetsAPI