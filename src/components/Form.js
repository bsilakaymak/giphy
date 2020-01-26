import React from 'react';

const Form = ({makeRequest})=>{
    const [query, setQuery] = React.useState('');
    return(
        <div>
            <input onChange = {(e)=>{setQuery(e.target.value)}} />
            <button onClick = { ()=>makeRequest(query) }>Search</button>
        </div>
    )
}

export default Form;