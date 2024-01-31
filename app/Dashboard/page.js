import React from 'react'

const page = () => {
  return (
    <div>
      <div className="row m-2 d-flex justify-content-around">
      <div className="col-sm">
        <div className="card border-info" style="width: 25rem">
          <img
            src="https://cdn.dribbble.com/users/1403962/screenshots/3388455/__.gif"
            className="card-img-top"
            alt="assignUser"
          />
          <div className="card-body">
            <h5 className="card-title">Add User to Supplier</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a
              href="assignUser.html"
              className="btn btn-outline-primary rounded-pill"
              >Assign User</a
            >
          </div>
        </div>
      </div>
      <div className="col-sm">
        <div className="card border-info" style="width: 25rem">
          <img
            src="https://i.pinimg.com/originals/b6/a1/64/b6a164fe3c74eeb8fae8de7ad4b1d3ef.gif"
            className="card-img-top"
            alt="newSupplier"
          />
          <div className="card-body">
            <h5 className="card-title">Add New Supplier</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a
              href="newSupplier.html"
              className="btn btn-outline-primary rounded-pill"
              >Add Supplier</a
            >
          </div>
        </div>
      </div>
      <div className="col-sm">
        <div className="card border-info" style="width: 25rem">
          <img
            src="https://i.gifer.com/7S7F.gif"
            className="card-img-top"
            alt="addProduct"
          />
          <div className="card-body">
            <h5 className="card-title">Add New Product</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a
              href="addProduct.html"
              className="btn btn-outline-primary rounded-pill"
              >Add Product</a
            >
          </div>
        </div>
      </div>
    </div>

    <div className="row m-2">
      <div className="col-sm">
        <div className="card border-info w-30" style="width: 25rem">
          <img
            src="https://media3.giphy.com/media/2A4A9kI7YFXC789O7A/giphy.gif"
            className="card-img-top"
            alt="quotation"
          />
          <div className="card-body">
            <h5 className="card-title">Add New Quotation</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a
              href="quotation.html"
              className="btn btn-outline-primary rounded-pill"
              >Add Quotation</a
            >
          </div>
        </div>
      </div>
      <div className="col-sm">
        <div className="card border-info w-30">
          <img
            src="https://cms.proqura.com/public/images/7f44dc80741a48c87c53139eda4db6f2.jpg"
            className="card-img-top"
            alt="purchaseOrder"
          />
          <div className="card-body">
            <h5 className="card-title">Purchase Order Generate</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a
              href="purchaseOrder.html"
              className="btn btn-outline-primary rounded-pill"
              >Generate PO</a
            >
          </div>
        </div>
      </div>
      <div className="col-sm">
        <div className="card border-info w-30">
          <img
            src="https://www.fastcapital360.com/wp-content/uploads/2019/02/graphic1.gif"
            className="card-img-top"
            alt="invoice"
          />
          <div className="card-body">
            <h5 className="card-title">Generate New Invoice</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="invoice.html" className="btn btn-outline-primary rounded-pill"
              >Generate Invoice</a
            >
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page
