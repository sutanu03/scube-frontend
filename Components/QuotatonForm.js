// QuotationForm.js
import { FaSearch } from "react-icons/fa";
import React, { useState } from 'react';
import QuotationTable from './QuotationTable';
import { VscClearAll } from "react-icons/vsc";

import { Bounce, Slide, toast } from 'react-toastify';

const QuotationForm = () => {
  const [supp_code, setSupplierCode] = useState('');
  const [quotation_number, setQuotation_number] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [quotation, setQuotationData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

/*     try {
      const response = await fetch(`http://localhost:8088/api/quote/search/advance?supp_code=${supp_code}&fromDate=${fromDate}&toDate=${toDate}&quotation_number=${quotation_number}`);
      const data = await response.json();
      setQuotationData(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } */

    if(fromDate === '' && toDate === '' & quotation_number === '' && supp_code === '')
    {
      toast.error('You must enter atleast supplier code or quotation number!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
        });
    }

    else if(quotation_number !== '' && supp_code !== '')
      {
        toast.warning('Please give either supplier code or quotation number!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
          });
      }

      else if(quotation_number !== '' && supp_code === ''  && fromDate === ''  && toDate === '')
      {
        try {
          const response = await fetch(`http://localhost:8088/api/quote/search/qnum/advance?quotation_number=${quotation_number}`);
          const data = await response.json();
          setQuotationData(data);
          console.log(data);
          if(data == "")
          {
            toast.error("Quote Number '"+quotation_number+"' isn't exist!", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Slide,
              });
          }
          else{

            toast.success("Quote Number '"+quotation_number+"' ,that you've asked for!", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Slide,
              });

          }
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }

      else if(supp_code !== '' && fromDate === '' && quotation_number === '' && toDate === '')
      {

        try {
          const response = await fetch(`http://localhost:8088/api/quote/search/one/supp_code/advance?supp_code=${supp_code}`);
          const data = await response.json();
          setQuotationData(data);
          console.log(data);
          if(data == "")
          {
            toast.error("Supplier '"+supp_code+"' isn't exist!", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Slide,
              });
          }
          else{

            toast.success('All Quotation with this Supp Code!', {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Slide,
              });

          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }

      else if(supp_code !== '' && fromDate !== '' && toDate !== '' && quotation_number === '')
      {
        try {
          const response = await fetch(`http://localhost:8088/api/quote/search/supp_code/advance?supp_code=${supp_code}&fromDate=${fromDate}&toDate=${toDate}`);
          const data = await response.json();
          setQuotationData(data);
          console.log(data);
          toast.success('All quotation with this Supp Code and within this dates!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
            });
        } catch (error) {
          console.error('Error fetching data:', error);
        }
        
      }

      

      else if(supp_code === '' && fromDate !== '' && toDate !== '' && quotation_number !== '' || supp_code === '' && fromDate === '' && toDate !== '' && quotation_number !== '' || supp_code === '' && fromDate !== '' && toDate === '' && quotation_number !== '' || fromDate !== '' || toDate !== '')
      {
          toast.warning("You can't enter Quote Number with fromDate and toDate!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
            });
        }

        else if(supp_code !== '' && fromDate !== '' && toDate === '' && quotation_number === '' || supp_code !== '' && fromDate === '' && toDate !== '' && quotation_number === '')
      {
          toast.warning("You have to enter Supp Code with fromDate or toDate both!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
            });
        }

      else if(supp_code === '' && fromDate !== '' && toDate !== '' && quotation_number === '')
      {
        toast.warning('Please mention atleast qotation number or supplier code', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
          });
      }

    console.log("q n - "+quotation_number+ ", s c - "+supp_code+", fromDate - "+fromDate+", toDate - "+toDate)
  };

  const handleQuotationClick = (quotation_number) => {
    //alert("You've clicked on quotation number : "+ quotation_number);
    console.log(quotation_number);
  };

  return (
    <>
    
      <div className="advnce-div">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between">
            <label>From :</label>
            <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} className="w-[120px]"/>
          </div>
          <div className="flex justify-between">
            <label>To :</label>
            <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} className="w-[120px]"/>
          </div>
          <div className="flex justify-between gap-6">
            <label>Supplier Code :</label>
            <input type="text" value={supp_code} onChange={(e) => setSupplierCode(e.target.value)} className="w-[120px]" placeholder="ex: TCS-01-001"/>
          </div>
          <div className="flex justify-between gap-6">
            <label className="w-[120px]">Quotation Number :</label>
            <input type="text" value={quotation_number} onChange={(e) => setQuotation_number(e.target.value)} className="w-[120px]" placeholder="ex: Quote-001"/>
          </div>
          <div className="flex gap-1">
            <button type="button" onClick={resetFormData} className='button bg-slate-700 text-white h-8 rounded-lg w-10 text-center align-middle justify-center'>
            <VscClearAll />
            </button>
            <button type="submit" className='button bg-slate-700 text-white h-8 rounded-lg w-10 text-center align-middle justify-center'>
              <FaSearch/>
            </button>
          </div>
        </form>
      </div>
      <hr/>
      <QuotationTable quotations={quotation} onQuotationClick={handleQuotationClick} />
    </>
  );
};

// refresh page after cancel button to clear everything in the  form
function resetFormData() {
  window.location.reload(false);
}
export default QuotationForm;
