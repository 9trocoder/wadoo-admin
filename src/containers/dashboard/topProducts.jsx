import React from "react";
import { topProductData } from "../../data/topProducts";

function TopProducts() {
  return (
    <div className='top-products-container'>
      <div className='top-products-top'>
        <p className='top-products-title'>Recent Transactions</p>
        <p className='top-products-seemore'>See more</p>
      </div>
      <div className='top-products-table'>
        <table className='tptable'>
          <tr>
            <th>Image</th>
            <th>Service</th>
            <th>Price</th>
          </tr>
          {topProductData.map((item, index) => (
            <tr key={index}>
              <td>
                <img src={item.user_image} alt='' className='tptable-image' />
              </td>
              <td className='tptable-service-td'>
                <p className='tptable-service-name'>{item.service_name}</p>
                <p className='tptable-merchant-name'>{item.merchant_name}</p>
              </td>
              <td>{item.price}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default TopProducts;
