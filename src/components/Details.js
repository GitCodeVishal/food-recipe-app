import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { recipeID } = useParams();

    const fetchDetails = async () => {
        try {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${recipeID}`);
            if (!response.ok) {
                throw new Error('Error occurred while fetching data');
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        fetchDetails();
    }, [recipeID]); 

    return (
        <div>
            <h2>Details for Recipe ID: {recipeID}</h2>
        </div>
    );
};

export default Details;
