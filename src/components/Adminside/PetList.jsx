// PetList.js
import React from 'react';

const DeleteList = ({ pets }) => {
  return (
    <div>
      <h2>Pet List</h2>
      <ul>
        {pets.map((pet, index) => (
          <li key={index}>{pet.name}</li>
          
        ))}
        
      </ul>
    </div>
  );
};

export default DeleteList;
