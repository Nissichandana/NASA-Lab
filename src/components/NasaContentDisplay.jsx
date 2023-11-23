

import React from 'react'

function NasaContentDisplay({ nasa }) {
    const loaded = () => {
        
        return (
    
                
                <div>{nasa.collection.items.map(addContent)}</div>
        
            )
         
    }
    const loading = () => {
        return <h1>No content to Display</h1>
    }
    function addContent(item, index) {
        try {
            return <div key={index}>
            <div>
                <img src={item["links"][0]["href"]} alt={item["data"][0]["title"]} />
                <div>
                    <h5>{item['data'][0]['title']}</h5>
                    <p>
                        <b>{item['data'][0]['description']}</b>
                    </p>
                </div>
                <ul>
                    <li key={0}>Date Created - <b>{item['data'][0]['date_created']}</b></li>
                    <li key={1}>NASA Id - {item['data'][0]['nasa_id']}</li>
                </ul>
            </div>
        </div>
    } catch (e) {
        console.log("Done")
    }
    }
    return  nasa ? loaded() : loading();
    
}

export default NasaContentDisplay