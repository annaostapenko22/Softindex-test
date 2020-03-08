import React from 'react'
import "./Table.module.css"


 const Table =() =>{
    return (
        <div>
        <div className="table-title">
        <h3>Clients Table</h3>
        </div>
        <table className="table-fill">
        <thead>
        <tr>
        <th className="text-left">First Name</th>
        <th className="text-left">Last Name</th>
        <th className="text-left">Phone</th>
        <th className="text-left">Gender</th>
        <th className="text-left">Age</th>
        </tr>
        </thead>
        <tbody className="table-hover">
        <tr>
        <td className="text-left">January</td>
        <td className="text-left">$ 50,000.00</td>
        <td className="text-left">January</td>
        <td className="text-left">$ 50,000.00</td>
        <td className="text-left">$ 50,000.00</td>
        </tr>
        <tr>
        <td className="text-left">February</td>
        <td className="text-left">$ 10,000.00</td>
        <td className="text-left">January</td>
        <td className="text-left">$ 50,000.00</td>
        <td className="text-left">$ 50,000.00</td>
        </tr>
        <tr>
        <td className="text-left">March</td>
        <td className="text-left">$ 85,000.00</td>
        <td className="text-left">January</td>
        <td className="text-left">$ 50,000.00</td>
        <td className="text-left">$ 50,000.00</td>
        </tr>
        <tr>
        <td className="text-left">April</td>
        <td className="text-left">$ 56,000.00</td>
        <td className="text-left">January</td>
        <td className="text-left">$ 50,000.00</td>
        <td className="text-left">$ 50,000.00</td>
        </tr>
        <tr>
        <td className="text-left">May</td>
        <td className="text-left">$ 98,000.00</td>
        <td className="text-left">January</td>
        <td className="text-left">$ 50,000.00</td>
        <td className="text-left">$ 50,000.00</td>
        </tr>
        </tbody>
        </table>
          
        
          </div>
    );
  }

  export default Table;