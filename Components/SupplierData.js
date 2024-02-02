import React from 'react'

const SupplierData = ({supplier}) => {
  return (
    <>
      {
        supplier.map((curSupplier) => {
            const {supp_code, supp_name, address, contact_number, contact_person, designation, mobile_no, gst_number} = curSupplier;
            return (
                <tr key={supp_code}>
                    <td>{supp_code}</td>
                    <td>{supp_name}</td>
                    <td>{address}</td>
                    <td>{gst_number}</td>
                </tr>
                )
        })
      }
    </>
  )
}

export default SupplierData
