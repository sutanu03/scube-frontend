import React from 'react'

const AdvanceSearch = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div className="justify-around text-center w-full h-28 top-5">
    <h1 className='font-bold justify-center align-middle items-center mt-5 text-xl'>Search Quotation</h1>
    <form onSubmit={handleSubmit}>
    <div className="justify-around align-middle items-center flex ">
      <div className="col">
        <label  className="text-black">
          FROM:</label>
        <input type="date" name="" id="" placeholder='From Date' className='w-[200px]'/>
        </div>
        <div>
        <label  className="text-black">
          TO:</label>
          <input type="date" name="" id="" placeholder='To Date' className='w-[200px]'/>
        </div>
        <div>
        <label  className="text-black">
          Supplier Code:</label>
          <select>
            <option value="2" key="">CTS-03-002</option>
            <option value="3" key="">LTI-04-003</option>
            <option value="1" key="">TCS-01-001</option>
          </select>
        </div>
        <div className="col-span-2">
        <label  className="text-black">
          Supplier Name:</label>
          <span>
            Tata Consultancy Services
          </span>
        </div>
        
      
    <button className='ml-4 bg-slate-500 text-white h-8 w-16 rounded-md'>Search</button>
    </div>
    </form>
  </div>
  )
}

export default AdvanceSearch