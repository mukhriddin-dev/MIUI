import React ,{useState} from 'react';
import BasicTextFields from '../UI/Input/Input';
import IconLabelButtons from '../UI/Button/Button';
import API from '../api/API';
import { v4 as uuidv4 } from 'uuid';
const Products = () => {
   const [isname,setIsName]=useState('');
   const {UI} =API;
console.log(isname);


const params={
   id:uuidv4(),
   isname:isname
}

const addItem=()=>{
   return  UI.addCategor(params),
   window.location.reload(),
   setIsName('')
}


   return (
      <div className='d-flex w-50 p-3 mt-3'>
         <BasicTextFields value={isname} setIsName={setIsName}/>
         <IconLabelButtons add={addItem}/>
      </div>
   );
};

export default Products;