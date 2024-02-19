import React from 'react';

class QuotationDetailTable extends React.Component {
  render() {
    const { quotationDetail } = this.props;

    return (
      <div>
        <h2>Quotation Detail</h2>
        <table>
          <thead>
            <tr>
              <th>Product Code</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Unit Price</th>
              <th>Rate</th>
              <th>Quantity</th>
              <th>Misc</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {quotationDetail.map((detail, index) => (
              <tr key={index}>
                <td> <input type="text" value={detail.product.prod_code}/></td>
                <td>{detail.product.b_prod_name}</td>
                <td>{detail.product.c_description}</td>
                <td>{detail.product.d_unit_price}</td>
                <td>{detail.d_rate}</td>
                <td>{detail.e_qnty}</td>
                <td>{detail.f_misc}</td>
                <td>{detail.h_price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

// Example usage
const quotationDetailData = [
  {
    quote_details_id: 1,
    product: {
      prod_code: "Prod-001",
      b_prod_name: "Monitor",
      c_description: "AOC Monitor",
      d_unit_price: 10000,
      e_category: "Desktop"
    },
    d_rate: 9500,
    e_qnty: 10,
    f_misc: 0,
    h_price: 95000
  },
  {
    quote_details_id: 2,
    product: {
      prod_code: "Prod-002",
      b_prod_name: "Mouse",
      c_description: "Zebronics Mouse",
      d_unit_price: 1000,
      e_category: "Desktop"
    },
    d_rate: 850,
    e_qnty: 10,
    f_misc: 0,
    h_price: 8500
  }
];

function App() {
  return (
    <div className="App">
      <QuotationDetailTable quotationDetail={quotationDetailData} />
    </div>
  );
}

export default App;
