import React, {useState,useEffect} from 'react'
import { styled } from '@mui/material/styles';
import Createfolder from './Createfolder';



const New = ({...props}) => {

  const {setFileList} = props
    // const [age, setAge] = React.useState('');

    // const handleChange = (event: SelectChangeEvent) => {
    //   setAge(event.target.value);
    // };

    const [dropdown, setDropdown] = useState(false)
    const [newFolderPopup, setNewFolderPopup] = useState(false)
    const [createFolder, setCreateFolder] = useState(false)
    const [newFolderData, setNewFolderData]= useState({
      name: '',
      title: '',
      description: ''
    })
    const [fileData, setFileData] =  useState({
      name: '',
      title: '',
      description: ''
    })
    const dropDownF = () => {
      setDropdown(!dropdown)
    }

    const uploadFile = async(e:any)=>{
      return new Promise((resolve, reject)=>{
        const files=e.target.files
      if(files.length>0){
        setFileData({
          name: e.target.files[0].name,
          title: e.target.files[0].size,
          description: e.target.files[0].type,
        })
        resolve(e.target.files[0])

        setFileList((prev:any)=>([...prev,e.target.files[0]]))
        console.log(e.target.files[0])

      }
      })
    }

    useEffect(()=>{
      if(createFolder){
        setFileList((prev:any)=>([...prev,newFolderData]))
        setNewFolderPopup(false)
      }

    },[createFolder,fileData])
    
  return (
    <div>
      {newFolderPopup? <Createfolder setNewFolderPopup={setNewFolderPopup} newFolderData={newFolderData} setNewFolderData={setNewFolderData} setCreateFolder = {setCreateFolder}/> : null}
            <div className='sign-out relative z-50'>
<div onClick={dropDownF} className='flex justify-center items-center bg-green-600 text-center rounded-md p-4 cursor-pointer'>
<span  className='  font-bold block text-white'>NEW</span>
<i className="fa-solid fa-caret-down text-white ml-2"></i>
</div>

<div id="dropdown" className={dropdown? "z-50   bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700" : "hidden"}>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li className='flex  px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'> 

<label htmlFor="upload" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full h-full">Upload File
<input type="file" id='upload' onChange={uploadFile} className='hidden' />
 
  </label>      
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
      <li onClick={()=>setNewFolderPopup(true)} className='flex  px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
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