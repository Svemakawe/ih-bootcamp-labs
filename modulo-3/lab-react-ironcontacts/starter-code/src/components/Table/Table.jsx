import React from 'react';
import './Table.css';

const Table = (props) => {
  const { contacts, onClickFunction } = props;
  const contactsArr = contacts.map((e, idx) => {
    return (
      <tr key={idx}>
        <td><img className="img-size" src={e.pictureUrl} /></td>
        <td>{e.name}</td>
        <td>{e.popularity}</td>
        <td><button onClick={() => onClickFunction(idx)}>Delete</button></td>
      </tr>
    );
  });

  return(
    <table>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Popularity</th>
        <th></th>
      </tr>
      {contactsArr}
    </table>
  );
}

export default Table;
