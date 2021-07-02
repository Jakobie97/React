import React from 'react'
import data from './data';

const List = ({ people }) =>{
    return (
        <>
            {people.map((person) => {
                const {id, name, age} = person;
                return (
                <div key={id} className='item'>
                    <br /><h4>{name}</h4>
                    <p>{age} years old</p>
                    {/* <button onClick={() => removeItem(id)}>remove</button> */}
                </div>
                );
            })}
        </>
    );
} 

export default List
