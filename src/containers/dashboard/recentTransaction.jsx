import React from "react";
import { recenttransactionData } from "../../data/recenttransaction";

function RecentTransaction() {
  return (
    <div className='recent-transactions-container'>
      <div className='recent-transactions-top'>
        <p className='recent-transactions-title'>Recent Transactions</p>
        <p className='recent-transactions-seemore'>See more</p>
      </div>
      <div className='recent-transactions-table'>
        <table className='rttable'>
          <tr>
            <th>Service Name</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Wallet Balance</th>
            <th>Status</th>
          </tr>
          {recenttransactionData.map((item, index) => (
            <tr key={index}>
              <td>{item.service_name}</td>
              <td>{item.amount}</td>
              <td>{item.type}</td>
              <td>{item.wallet_ballance}</td>
              <td className='rttable-status'>
                <p className='rttable-status-container'>{item.status}</p>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default RecentTransaction;
