import { useState } from 'react'

function Form(props) {
    // add state to hold the data of the form
    const [searchData, setSearchData] = useState({
        searchterm: "",
    })

    //handleChange - updates formData when we type into form
    const handleChange = (event) => {
        //use the event object to detect key and value to update
        setSearchData({ ...searchData, [event.target.name]: event.target.value });
    };
    
    const handleSubmit = (event) => {
        // prevent page from refreshing on form submissin
        event.preventDefault();

        // pass the search term to moviesearch prop (the method that will search)
        props.nasaSearchList(searchData.searchterm);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="searchterm"
                    onChange={handleChange}
                    value={searchData.searchterm}
                    placeholder='search'
                />
                <input type="submit" value="submit" />

            </form>
        </div>
    )
}

export default Form