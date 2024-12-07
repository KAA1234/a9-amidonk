import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
// import CollectablesList from  './CollectablesList';
import { Link } from 'react-router-dom';

function Collectables({ setCollectable }) {
    // const [collectable, setCollectable] = useState([]);
    const redirect = useNavigate();



    const loadCollectables = async () => {
        const response = await fetch('/collectables')
        const collectable = await response.json();
        setCollectable(collectable);
    }

    const onEditCollectable = async collectable => {
        setCollectable(collectable);
        redirect("/update");
    }
    
    const onDeleteCollectable = async _id => {
        const response = await fetch('/collectables/${_id}', { method: 'DELETE' });
          if (response.status === 200) {
            const getResponse = await fetch('/collectables');
            const collectable = await getResponse.json();
            setCollectable(collectable);
          } else {
            console.error('You experienced a delete error')
          }
    }

    useEffect(() => {
        loadCollectables;
    })




    return (
        <>
            <h2>List of Collectables</h2>
            <article>

                <Link to="/create">Add Collectable</Link>
                
                {/* <CollectablesList 
                    collectable={collectable}
                    onEdit={onEditCollectable}
                    onDelete={onDeleteCollectable}
                    /> */}
            </article>
        </>
    )
}

export default Collectables;