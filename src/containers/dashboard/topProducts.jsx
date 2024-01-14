import React from "react";
import { topProductData } from "../../data/topProducts";
import { useNavigate } from "react-router-dom";

function TopProducts() {
  let navigate = useNavigate();
  return (
    <div className='top-products-container'>
      <div className='top-products-top'>
        <p className='top-products-title'>Top Services</p>
        <p
          className='top-products-seemore'
          onClick={() => navigate("/services")}
        >
          See more
        </p>
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
