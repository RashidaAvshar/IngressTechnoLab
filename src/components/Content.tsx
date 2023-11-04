import React from 'react'
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
    { field: 'firstName', headerName: 'Name', width: 300 },
    {
      field: 'size',
      headerName: 'Size',
      type: 'number',
      // width: 120,
    },
    {
      field: 'modified',
      headerName: 'Modified',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      // width: 140,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'modifiedby',
      headerName: 'Modified by',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 140,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
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
    
    // const getF =()=>{
    //   fetch('https://1curd3ms.trials.alfresco.com/alfresco/api/-default-/public/authentication/versions/1/tickets', 
    //   {method: 'post', 
    //   headers: {"Content-Type": "application/json"},
    //   body:JSON.stringify({password: "123456",  userId: "react"})})
    // .then (res=>{
    //   console.log(res)
    // })

    // }

  const personalFilesF = async ()=>{
    axios.post('https://310-iwj-963.mktoresp.com/webevents/visitWebPage?_mchNc=1699114231096&_mchCn=&_mchId=310-IWJ-963&_mchTk=_mch-alfresco.com-1699022048353-22480&_mchHo=1curd3ms.trials.alfresco.com&_mchPo=&_mchRu=%2F&_mchPc=https%3A&_mchVr=163&_mchEcid=&_mchHa=%23%2Fpersonal-files&_mchRe=&_mchQp=')
    .then(res=>console.log(res))
    .catch(error=>console.log(error))
  //   fetch('https://1curd3ms.trials.alfresco.com/alfresco/api/discovery',{
  //     method: 'get',
  //     headers: {"Content-Type": "application/json"},
  //   })
  //   .then(res=>res.json())
  //   .then(res=>console.log(res))
  //   .catch(error=>console.log(error))
  }



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






      <div className='right-section w-full overflow-x-scroll'>
        <div className='header h-20 w-full bg-gray-100 pt-8 pl-4 text-xl font-bold' >
        Personal Files
        </div>
        <div style={{ height: 'full', width: '100%' }}>
        <DataGrid
        rows={rows}
        columns={columns}
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