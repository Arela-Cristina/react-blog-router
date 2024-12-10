import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URI } from "../../../config";
import placeHolderImg from "../../../../src/place-holder.jpg";

export default function Show() {

    const [post, setPost] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()

    // Para depurar
    console.log("Componente Show montato");
    console.log("ID  post:", id);

    useEffect(() => {
        console.log("chiamata HTTP API...");
        axios.get(`${BASE_URI}posts/${id}`)
            .then(res => {
                setPost('ricevuto', res.data)
                console.log('hey', res.data)
            })
            .catch(err => console.error(err))
    }, [id]);

    if (!post) {
        return <p>Loading...</p>;
    }



    return (
        <main>
            <div>
                <button onClick={() => navigate(-1)}>
                    back
                </button>
            </div>
            <section>


                <figure>
                    <img src={post.thumb ? `${BASE_URI}images/${post.thumb}` : placeHolderImg} alt="" />
                </figure>
                <div>
                    <h1>{post.name}</h1>

                </div>
                <div>
                    <p>{post.description}</p>
                </div>


            </section>
        </main>
    )
}
