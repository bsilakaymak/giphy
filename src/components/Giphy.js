import React from 'react';
import Images from './Images';
import Form from './Form';

const Giphy = ()=>{
    const [image, setImage] = React.useState('');
    const[isLoading, setLoading] = React.useState(false);
    const [hasError, setError] = React.useState(false);
    const[indexMessage, setIndexMessage] = React.useState('Welcome')
    function makeRequest(query){
        setLoading(true)
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=VAKkzO9zGSc675G5vkXVXgbQO9vFsSfg&q=${query}&limit=25&offset=0&rating=G&lang=en` )
        .then(res=>res.json())
        .then(data =>{
            setImage(data.data);
            setIndexMessage('search again');
            setLoading(false);
            setError(false);
            console.log(data.data)
        } )
        .catch(err=>{
            setError(true);
            setLoading(false);
        })
    }
    
    if(isLoading) return <p>Loading...</p>
    if(hasError) return <p>Error!!!</p>
    return (
        <div>
           <p>{indexMessage}</p>
           <Form makeRequest = {makeRequest}/>
           {indexMessage ==='search again' && <Images image = {image} />}
        </div>
        

    )
}

export default Giphy;