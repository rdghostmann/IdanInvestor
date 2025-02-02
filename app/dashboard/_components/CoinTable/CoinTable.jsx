import React from 'react';

const CoinTable = () => {
  return (
    <div className="max-w-3xl md:w-screen mx-auto overflow-x-scroll my-6 bg-white shadow-md p-4 rounded-lg  ">
      <table className="min-w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>Change %</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bitcoin</td>
            <td>$53,260.20</td>
            <td>$361.32B</td>
            <td>1.37%</td>
            <td>
              <button>Details</button>
              <button>Trade</button>
            </td>
          </tr>
          <tr>
            <td>Ethereum</td>
            <td>$1,643.80</td>
            <td>$158.77B</td>
            <td>-1.37%</td>
            <td>
              <button>Details</button>
              <button>Trade</button>
            </td>
          </tr>
          <tr>
            <td>IoT Chain</td>
            <td>$0.5657</td>
            <td>$67.94B</td>
            <td>1.37%</td>
            <td>
              <button>Details</button>
              <button>Trade</button>
            </td>
          </tr>
          <tr>
            <td>Dogecoin</td>
            <td>$40,355.12</td>
            <td>$49.91B</td>
            <td>-1.37%</td>
            <td>
              <button>Details</button>
              <button>Trade</button>
            </td>
          </tr>
          <tr>
            <td>Digibyte</td>
            <td>$70,111</td>
            <td>$44.34B</td>
            <td>1.37%</td>
            <td>
              <button>Details</button>
              <button>Trade</button>
            </td>
          </tr>
          <tr>
            <td>Achain</td>
            <td>$19,145.21</td>
            <td>$30.31B</td>
            <td>1.37%</td>
            <td>
              <button>Details</button>
              <button>Trade</button>
            </td>
          </tr>
          <tr>
            <td>Tether</td>
            <td>$40,222.09</td>
            <td>$200.45B</td>
            <td>1.37%</td>
            <td>
              <button>Details</button>
              <button>Trade</button>
            </td>
          </tr>
          <tr>
            <td>Binance</td>
            <td>$23,987</td>
            <td>$192.31B</td>
            <td>1.37%</td>
            <td>
              <button>Details</button>
              <button>Trade</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CoinTable;
