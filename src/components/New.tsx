import React, {useState} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });



const New = () => {
    // const [age, setAge] = React.useState('');

    // const handleChange = (event: SelectChangeEvent) => {
    //   setAge(event.target.value);
    // };

    const [dropdown, setDropdown] = useState(false)
    const dropDownF = () => {
      setDropdown(!dropdown)
    }


  return (
    <div>
   

      <div className='sign-out relative z-50'>
<div onClick={dropDownF} className='flex justify-center items-center bg-green-600 text-center rounded-md p-4 cursor-pointer'>
<span  className='  font-bold block text-white'>NEW</span>
<i className="fa-solid fa-caret-down text-white ml-2"></i>
</div>

<div id="dropdown" className={dropdown? "z-50   bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700" : "hidden"}>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li className='flex  px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
        <a href="#"  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Upload Folder</a>
      </li>

      <li className='flex  px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
        <a href="#"  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Word Document</a>
      </li>

      <li className='flex  px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
        <a href="#"  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Powerpoint Presentation</a>
      </li>
      
      <li className='flex  px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
        <a href="#"  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Excel Spreadsheet</a>
      </li>
      <li className='flex  px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
        <a href="#"  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Create Folder</a>
      </li>
      <li className='flex  px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
        <a href="#"  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Create Library</a>
      </li>

      <li className='flex  px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
        <a href="#"  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Create file from template</a>
      </li>

      <li className='flex  px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
        <a href="#"  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Create folder from template</a>
      </li>


    </ul>
</div>

</div>

    </div>
  )
}

export default New