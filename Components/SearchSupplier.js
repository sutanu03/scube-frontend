import React from 'react'

const SearchSupplier = ({handleChange, searchSupp, suppCode}) => {
  return (
      <div>
            <div className='flex bg-zinc-200 justify-between p-2'>
              <input type="text" id='suppCode' onChange={handleChange} value={suppCode} placeholder='Enter supplier code' />
              <button onClick={searchSupp} className='bg-zinc-800 px-2 rounded-md text-white'>Search</button>
            </div>
        </div>
  )
}

export default SearchSupplier
