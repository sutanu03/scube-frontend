import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import ShowSupplier from './ShowSupplier';
import SearchSupplier from './SearchSupplier';

const Modals = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const [suppCode, setsuppCode] = useState('')

  const handleChange = event => {
    setsuppCode(event.target.value);
    console.log("value is ",event.target.value);
  }

  function searchSupp(){
    //if()
   //alert("Supplier doesn't exist!")
  
   if(suppCode == "abcde"){
    alert("success");
   }
   else{
    alert("Supplier doesn't exist!")
   }
  
  }

  return (
    <>
    <Button className='bg-zinc-800' variant="secondary" onClick={() => setShow(true)}>
    Update Supplier Details
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        keyboard={false}
      >
        <div>
          <SearchSupplier handleChange searchSupp/>
        </div>
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">Update Supplier Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ShowSupplier/>
        </Modal.Body>
        <Modal.Footer>
          <Button className='bg-black' variant="secondary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals
