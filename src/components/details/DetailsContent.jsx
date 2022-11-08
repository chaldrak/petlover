import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const DetailsContent = (props) => {
    const cats = props.data;
    const { id } = useParams();
    const [cat, setCat] = useState([]);
    const [pic, setPic] = useState([]);

    useEffect(() => {
        setCat(cats.filter((c) => c.id == id)[0]);
    })

    const URL = `https://api.thecatapi.com/v1/images/search?breed_id=${id}`;
    
    useEffect(() => {
        axios
        .get(URL)
        .then((response) => {
            const data = response.data[0]
            setPic(data?.url)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [cat]);

    return (
        <div className="Cats-content">
            <div 
                className="Content-image"
                style={{backgroundImage: `url(${pic})`}}
            />
            <div className="Content-text">
                <h1>{ cat?.name }</h1>
                <h3>({ cat?.origin })</h3>
                <p>
                    { cat?.description }
                </p>
                <a href={cat?.wikipedia_url}>More Info</a>
            </div>
        </div>
    )
}

export default DetailsContent;