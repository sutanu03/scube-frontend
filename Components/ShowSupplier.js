import React, { useEffect } from 'react'
import { useState } from 'react'
import SupplierData from './SupplierData';
import Table from 'react-bootstrap/Table';
const API = "http://localhost:8088/api/supplier/read/all"

const ShowSupplier = () => {

    const [supplier, setSupplier] = useState([]);

    const fetchSupplier = async(url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if(data.length > 0) {
                console.log(data)
                setSupplier(data);
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
      fetchSupplier(API);
    }, [])
    

        return (
            <>
            <table striped bordered hover>
                <thead>
                    <tr>
                   <th>Supplier Code</th>
                   <th>Supplier Name</th>
                   <th>Address</th>
                   <th>GST Number</th>
                   </tr>
                </thead>
                <tbody>
                    <SupplierData supplier={supplier}/>
                </tbody>
            </table>
            </>
        )
}
        

export default ShowSupplier