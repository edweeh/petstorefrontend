import React from 'react';

const DeleteList = ({ pets, deletePet }) => {
  return (
    <ul>
      {pets.map((pet) => (
        <li key={pet.name}>
          {pet.name} <button onClick={() => deletePet(pet.name)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default DeleteList;
