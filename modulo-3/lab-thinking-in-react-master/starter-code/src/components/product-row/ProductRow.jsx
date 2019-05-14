import React from 'react';

const ProductRow = (props) => {
  return (
    <tr key={props.productKey}>
      <td>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
}

export default ProductRow;
