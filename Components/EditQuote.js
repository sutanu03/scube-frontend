import React from 'react';

class QuotationDetailTable extends React.Component {
  render() {
    const { quotationDetail } = this.props;

    return (
      <div>
        
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
