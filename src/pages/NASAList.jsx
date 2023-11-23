import React, { useState } from 'react'
import Form from '../components/Form'
import NasaContentDisplay from '../components/NasaContentDisplay';

function NASAList() {
   //    ===== this part is new  =====
  // create a function that is given the search term then does the fetch request
  //    =====                   =====
  const [nasa, setNasa] = useState(null);
  // Function getNasa
  const getNasa = async (searchTerm) => {
    // create a variable that combines the parts of the url into one
    const baseUrl = 'https://images-api.nasa.gov/';
   // const url = baseUrl + '?' + 'apikey=' + apiKey + '&' + 't=' + searchTerm;
   const url = baseUrl + 'search?q=' + searchTerm
    // make fetch request and store response
    try {
      // fetch with the url, returns the same thing as when i put that url in the address bar
      const response = await fetch(url);
      console.log(url);
      const data = await response.json();
      console.log(data);
      setNasa(data);
    } catch (e) {
      console.error(e);
    }
  }
  return (

      <div> 
        <br/>
        <Form nasaSearchList={getNasa} />
        <NasaContentDisplay nasa={nasa}/>
    </div>
  )
    

  
}
export default NASAList