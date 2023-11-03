import React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { green } from '@mui/material/colors';
import { BorderClear } from '@mui/icons-material';

const ITEM_HEIGHT = 100;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 6 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Upload File',
  'Upload Folder',
  'Word Document',
  'Powerpoint Presentation',
  'Excel Spreadsheet',
  'Create Folder',
  'Create Library',
  'Create file from template',
  'Create folder from template',
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


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
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'Name', width: 510 },
    {
      field: 'size',
      headerName: 'Size',
      type: 'number',
      width: 120,
    },
    {
      field: 'modified',
      headerName: 'Modified',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 140,
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

  return (
    <div className='flex flex-row w-full overflow-x-hidden'>
      <div className='left-section bg-gray-100'>
        <div className='header h-16 bg-gray-100 p-2'>
      
<FormControl sx={{ m: 1, width: 300, mt: 3, backgroundColor:'green' }}>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange1}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (
              <div className='text-center text-white font-bold text-xl '>NEW</div>
              )
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
       
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
<div>
      
    </div>
      

        </div>

   
    <div className='botton flex flex-col mt-8 [&>*]:py-3'>
    <div className='ml-10'>
    <i className="fa-solid fa-folder w-8"></i>
    <span>Personal Files</span>
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
        <div className='header h-20 w-full bg-gray-100 pt-8 pl-4 text-xl font-bold'>
        Personal Files
        </div>
        <div style={{ height: 'full', width: '100%' }}>
        <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
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