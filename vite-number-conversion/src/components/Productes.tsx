import { useEffect, useState } from 'react';

interface article {
    codigo:number,
    descripcion:string,
    precio:number
}

function Productes(){
    const border = "border : 1px";
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch("https://scratchya.com.ar/react/datos.php")
        .then((response) => {
            return response.json();
        })
        .then((articles) => {
            setArticles(articles);
        })
    }, [])
    return (
        <>
            <h1>Llista de productes</h1>
            <div>
                <table className={border}>
                    <thead>
                        <tr>
                            <th>CODI</th>
                            <th>DESCRIPCIO</th>
                            <th>PREU</th>
                        </tr>
                    </thead>
                    <tbody>
                        {articles.map((art:article) => {
                            return(
                                <tr key={art.codigo}>
                                    <td>{art.codigo}</td>
                                    <td>{art.descripcion}</td>
                                    <td>{art.precio}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Productes;