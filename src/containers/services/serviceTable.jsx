import React from 'react'
import { servicesData } from '../../data/services'
import { optionIcon } from '../../constants/defaultValues'

function ServicesTable() {
  return (
    <div className="servicesview-container-table">
    <table className="tptable">
      <tr>
        <th>S/N</th>
        <th>Image</th>
        <th>Service Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Negotiable</th>
        <th>Date Created</th>
        <th>Actions</th>
      </tr>
      {servicesData.map((item, index) => (
        <tr key={index}>
          <td>
            {item.s_n}
          </td>
          <td>
            <img src={item.user_image} alt="" className="tptable-image" />
          </td>
          <td className="tptable-service-td">
            <p className="tptable-service-name">
              {item.service_name}
            </p>
            <p className="tptable-merchant-name">
              {item.merchant_name}
            </p>
          </td>
          <td>{item.description}</td>
          <td>{item.price}</td>
          <td>{item.negotiable}</td>
          <td>{item.date_created}</td>
          <td className="service-action">{optionIcon}</td>
        </tr>
      ))}
    </table>
  </div>
  )
}

export default ServicesTable  