import React from 'react';

const Images = ({image})=>{
    return image.map((item)=>{
        return(
            <div style = {{border:'2px dashed pink', margin:'10px', paddingLeft: '10px', width:'50%', display:'inline-block'}}> 
               <img src = {item.images.downsized_medium.url} alt= {item.title}/>

            </div>
        )
    })
    
}

export default Images;