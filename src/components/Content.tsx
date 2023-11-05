import React,{useState, useLayoutEffect,useEffect} from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Theme, useTheme } from '@mui/material/styles';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import New from './New';
import axios from 'axios';





const Accordion = styled((props: AccordionProps) => (



  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 300 },
    {
      field: 'size',
      headerName: 'Size',
      type: 'number',
      // width: 120,
    },
    {
      field: 'modifiedAt',
      headerName: 'ModifiedAt',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      // width: 140,
      // valueGetter: (params: GridValueGetterParams) =>
      //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'modifiedByUser',
      headerName: 'Modified by',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 140,
      // valueGetter: (params: GridValueGetterParams) =>
      //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'security',
      headerName: 'Security marks',
      type: 'number',
      width: 90,
    },

  ];
  
  const rows = [
    { id: 1,  firstName: 'Jon', size: 35, modified: 'React Developer', modifiedby: 'React Developer',},
    { id: 2,  firstName: 'Cersei', size: 42 },
    { id: 3,  firstName: 'Jaime', size: 45 },
    { id: 4,  firstName: 'Arya', size: 16 },
    { id: 5,  firstName: 'Daenerys', size: null },
    { id: 6,  firstName: null, size: 150 },
    { id: 7,  firstName: 'Ferrara', size: 44 },
    { id: 8,  firstName: 'Rossini', size: 36 },
    { id: 9,  firstName: 'Harvey', size: 65 },
  ];

  
const Content = () => {

  
const [data,setData] = useState<Object[]>([])
const [showDetails, setShowDetails] = useState(false)
const [clickedRow,setClickedRow] = useState({
  id: '',
  name:'',
  modifiedAt:'',
  modifiedByUser:''
})

  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

    const theme = useTheme();
    const [personName, setPersonName] = React.useState<string[]>([]);
  
    const handleChange1 = (event: SelectChangeEvent<typeof personName>) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
    


  const personalFilesF = async ()=>{
    await axios.get('https://1curd3ms.trials.alfresco.com/alfresco/api/-default-/public/alfresco/versions/1/nodes/382b3102-ffba-422e-8711-d7f330fb5468/children?maxItems=25&orderBy=isFolder%20desc%2Cname%20ASC&include=path%2Cproperties%2CallowableOperations%2Cpermissions%2CaspectNames%2CisFavorite%2Cdefinition&includeSource=true',  {
       withCredentials: true,
       
       headers:{
        Authorization: 'Basic Uk9MRV9USUNLRVQ6VElDS0VUXzBlZmEyMzVjZWFhM2UzNTM1ZDg0YWVkZmFiNjQ0ZjZlOTQwYzc0YzM=',
        'Content-Type': 'application/json',
        
      } 
      },)
      .then(res=>res.data.list.entries)
    .then(res=>{

    if(res instanceof Array){
      res.forEach((value, index)=>{
        
        setData(prev=>[...prev,{
          
          id:index,
          name:value.entry.name,
          size: 0,
          modifiedAt:value.entry.modifiedAt,
          modifiedByUser:value.entry.modifiedByUser.displayName }])
      })
    }

      return res
    })
    // .then(res=>console.log(data))
    .catch(error=>console.log(error))
  
  }


  const rowdoubleclickF = (e:any)=>{
    console.log(e.row)
    setClickedRow({
      id:e.row.id,
      name: e.row.name,
      modifiedAt:e.row.modifiedat,
      modifiedByUser:e.row.modifiedByUser
    })
    
    setShowDetails(true)
  }


  useLayoutEffect(()=>{
personalFilesF()
  },[])


  return (
    <div className='flex flex-row w-full overflow-x-hidden'>
      <div className='left-section bg-gray-100 w-96'>
        <div className='header h-16 bg-gray-100 p-2'>
          <New/>
      

<div>
      
    </div>
      

        </div>

   
    <div className='botton flex flex-col mt-8 [&>*]:py-3'>
    <div className='ml-10'>
    <i className="fa-solid fa-folder w-8"></i>
    <span onClick={personalFilesF}>Personal Files</span>
    </div>
      <Accordion sx={{padding: 0,}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><i className="fa-solid fa-laptop-file w-8"></i>File libraries</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className='ml-10'>
    <span>Favorite Libraries</span>
    </div>         
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
          <div className='ml-10'>
             <span>My files</span>
    </div>           
          </Typography>
        </AccordionDetails>
      </Accordion>
    <div  className='ml-10'>
    <i className="fa-solid fa-user-group w-8"></i>
    <span className=''>Shared</span> 
    </div> 
    <div  className='ml-10'>
    <i className="fa-regular fa-clock w-8"></i>
    <span  className=''>Recent Files</span>   
      </div>          
          <div className='ml-10'>
          <i className="fa-solid fa-star w-8"></i>
          <span>Favorites</span> 
            </div>   
            <div className='ml-10'>
            <i className="fa-solid fa-trash w-8"></i>
            <span>Trash</span>    
              </div>  
      
    </div>

      </div>






      <div className='right-section w-full overflow-x-scroll relative'>
        <div className={showDetails? 'absolute z-50 top-0 left-0 w-full h-96 bg-white':'hidden'}>
          <div className='flex justify-end text-3xl'>
          <i onClick={()=>setShowDetails(false)} className="fa-solid fa-xmark"></i>
          </div>

          <ul>
            <li className='flex justify-between'><span>ID</span><span>{clickedRow.id}</span></li>
            <li className='flex justify-between'><span>Name</span><span>{clickedRow.name}</span></li>
            <li className='flex justify-between'><span>Modified</span><span>{clickedRow.modifiedAt}</span></li>
            <li className='flex justify-between'><span>Modified By</span><span>{clickedRow.modifiedByUser}</span></li>
          </ul>
        </div>
        <div className='header h-20 w-full bg-gray-100 pt-8 pl-4 text-xl font-bold' >
        Personal Files
        </div>
        <div style={{ height: 'full', width: '100%' }}>
        <DataGrid
        rows={data}
        columns={columns}
        onRowDoubleClick={rowdoubleclickF}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 25 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>

      </div>


    </div>
  )
}

export default Content