import * as React from 'react';
import './App.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Button from '@mui/material/Button';
import { styled } from "@mui/material/styles";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import user from './user.png';
import headerIcon from './headerIcon.png';
import headerImage from './headerImage.png';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

const ActiveBreadcrumb = styled(Button)(({ pill }) => ({
  color: 'black',
  textTransform: 'none'
}));

const InactiveBreadcrumb = styled(Button)(({ pill }) => ({
  color: 'grey',
  textTransform: 'none'
}));

const CustomButton = styled(Button)(({ test }) => ({
  backgroundColor: '#00ACB9',
  textTransform: 'none',
  borderRadius: '10px'
}));

const EditButton = styled(Button)({
  border: '1px solid #99A4A3',
  borderRadius: 12,
  color: '#344054',
  textTransform: 'none'
});

const CustomToggleButton = styled(ToggleButton)({
  textTransform: 'none',
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "white",
    backgroundColor: '#00ACB9',
  }
});

const SaveButtons = styled(Button)(({ customColor, customTextColor }) => ({
  backgroundColor: customColor,
  color: customTextColor,
  textTransform: 'none',
  borderRadius: '10px',
  border: '1px solid #E9F1F0',
  width: 300,
}));

const CustomHelperText = () => {
  const { error } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (error) {
      return 'This field is being focused';
    }

    return 'You cannot edit this field';
  }, [error]);

  return <FormHelperText error>{helperText}</FormHelperText>;
}

function App() {
  const [action, setAction] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [value, setValue] = React.useState('01/12/2019');
  const [role, setRole] = React.useState('');
  const [alignment, setAlignment] = React.useState('disable');

  const handleToggle = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleChange = (event) => {
    setAction(event.target.value);
  };

  const handleRole = (event) => {
    setRole(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  const breadcrumbs = [
    <ActiveBreadcrumb key='1' className='activeBreadcrumb'>Primary</ActiveBreadcrumb>,
    <InactiveBreadcrumb key="2" className={'inactiveBreadcrumb'}>Staff Listing</InactiveBreadcrumb>,
    <InactiveBreadcrumb key="3" className={'inactiveBreadcrumb'}>View Staff</InactiveBreadcrumb>,
  ];

  return (
    <div className="App">
      <ul className="sidenav">

        <img src={headerImage} alt='headerImage' width={170} height={55} className='headerImage' />
        <Typography className="drawerHeaders">Main Menu</Typography>
        <List>
          {['Dashboard', 'Manage Clarity', 'Manage Products', 'Batches', 'Manage Staff', 'Reports'].map((text, index) => (
            <>
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon className='drawerIcon'>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} className='drawerItem' />
                </ListItemButton>
              </ListItem>
              {text === 'Manage Staff'
                ?
                <div className='subDrawer' >
                  <div className='selectedNav'>Staff Listing</div>
                  <div className='inactiveNav'>Manage Roles</div>
                </div>
                : null}
            </>
          ))}
        </List>
        <Divider className='drawerDivider' />

        <Typography className="drawerHeaders">Support</Typography>
        <List>
          {['Help', 'Preference'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon className='drawerIcon'>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={text} className='drawerItem' />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider className='drawerDivider' />

        <Typography className="drawerHeaders">More</Typography>
        <List>
          {['Notifications', 'Logout'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon className='drawerIcon'>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={text} className='drawerItem' />
                {text === 'Notifications' ? <div className='dot' >3</div> : null}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />

        <div className='admin'>
          <img src={headerIcon} alt='headerIcon' width={40} height={40} />
          <div className='adminDetails'>
            <div className='adminName'>Sahil Shetty</div>
            <div className='adminType'>Super Admin</div>
            <div className='adminNumber'>TDH - 000</div>
          </div>
          <ChevronRightIcon className='chevronIcon' />
        </div>


      </ul>

      <div className="main">
        <h2>Manage Staff</h2>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>

        <div className='titleBar'>
          <div className="title">View Staff</div>
          <div className='titleBarButtons'>
            <CustomButton variant='contained'>Permission</CustomButton>
            <Select
              sx={{ minWidth: 120, borderRadius: '12px', backgroundColor: '#EFF5F5', overflow: "hidden", boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
              displayEmpty
              renderValue={(selected) => {
                if (!selected) {
                  return <em>Action</em>;
                }

                return selected
              }}
              value={action}
              onChange={handleChange}
            >
              <MenuItem value={'Edit'}>Edit</MenuItem>
              <MenuItem value={'Delete'}>Delete</MenuItem>
            </Select>
            <EditButton variant="outlined" color='success' startIcon={<DriveFileRenameOutlineOutlinedIcon />}>
              Edit
            </EditButton>
          </div>
        </div>
        <div className='staffInfo'>
          <div className='avatarSection'>
            <img src={user} alt='user' width={150} height={150} className='userImage'></img>
            <CustomButton variant='contained'>Change</CustomButton>
            <FormControl>
              <OutlinedInput sx={{ width: '150px' }} value='Alan Smith' className='customTextInput' />
            </FormControl>
            <FormControl>
              <Typography sx={{ width: '150px' }} className="buttonLabel">Role</Typography>
              <Select
                sx={{ width: 150, height: 40, borderRadius: '10px', overflow: "hidden", fontSize: '13px' }}
                displayEmpty
                renderValue={(selected) => {
                  if (!selected) {
                    return <em>Product Manager</em>;
                  }

                  return selected
                }}
                value={role}
                onChange={handleRole}
              >
                <MenuItem value={'London, UK'}>Assistant</MenuItem>
              </Select>
            </FormControl>
            <ToggleButtonGroup
              color="success"
              value={alignment}
              exclusive
              onChange={handleToggle}
              aria-label="Platform"
            >
              <CustomToggleButton value="enable">Enable</CustomToggleButton>
              <CustomToggleButton value="disable">Disable</CustomToggleButton>
            </ToggleButtonGroup>

          </div>
          <div className='infoSection'>
            <FormControl sx={{ width: '33%' }}>
              <Typography className="buttonLabel">Employee Id</Typography>
              <OutlinedInput value='PL-1234556' disabled className='customTextInput' />
              <CustomHelperText />
            </FormControl>
            <FormControl sx={{ width: '33%' }}>
              <Typography className="buttonLabel">Email Id</Typography>
              <OutlinedInput value='jefferson@company.com' disabled className='customTextInput' />
              <CustomHelperText />
            </FormControl>
            <FormControl sx={{ width: '33%' }}>
              <Typography className="buttonLabel">Phone Number</Typography>
              <OutlinedInput value='9876543210' className='customTextInput' placeholder="Please enter number" />
            </FormControl>
            <FormControl sx={{ width: '33%' }}>
              <Typography className="buttonLabel">Date of Joining</Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  disabled
                  value={'09/14/2022'}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField size="small" sx={{ width: 250, height: 40, borderRadius: '10px' }} {...params} />}
                />
                <CustomHelperText />
              </LocalizationProvider>
            </FormControl>
            <FormControl sx={{ width: '33%' }}>
              <Typography className="buttonLabel">Working Location</Typography>
              <Select
                sx={{ width: 250, height: 40, borderRadius: '10px', overflow: "hidden", textTransform: 'none' }}
                displayEmpty
                renderValue={(selected) => {
                  if (!selected) {
                    return <em>Dublin, Ireland</em>;
                  }

                  return selected
                }}
                value={location}
                onChange={handleLocationChange}
              >
                <MenuItem value={'London, UK'}>London, UK</MenuItem>
              </Select>
            </FormControl>

            <Typography className="buttonLabel mr-1">Bio</Typography>
            <TextField
              multiline
              fullWidth
              rows={3}
              className='multilineBox'
              defaultValue="I identify the customer need and the larger business objectives that a product or feature will fulfill, articulates what success looks like for a product, and rallies a team to turn that vision into a reality."
            />

            <div className='personalInfoHeader'>Personal Information</div>

            <FormControl sx={{ width: '33%' }}>
              <Typography className="buttonLabel">Date of Joining</Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField size="small" sx={{ width: 250, height: 40, borderRadius: '10px' }} {...params} />}
                />
              </LocalizationProvider>
            </FormControl>

            <FormControl sx={{ width: '33%' }}>
              <Typography className="buttonLabel">Phone Number</Typography>
              <OutlinedInput value='9876543210' className='customTextInput' placeholder="Please enter number" />
            </FormControl>
            <FormControl sx={{ width: '33%' }}>
              <Typography className="buttonLabel">Email Id</Typography>
              <OutlinedInput value='jefferson@company.com' className='customTextInput' />
            </FormControl>

            <div className='mr-1'></div>
            <FormControl sx={{ width: '33%' }}>
              <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                row
                defaultValue="male"
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="male" control={<Radio sx={{
                  '&.Mui-checked': {
                    color: '#00ACB9',
                  },
                }} />} label="Male" />
                <FormControlLabel value="female" control={<Radio sx={{
                  '&.Mui-checked': {
                    color: '#00ACB9',
                  },
                }} />} label="Female" />
              </RadioGroup>
            </FormControl>

            <FormControl sx={{ width: '60%' }}>
              <Typography className="buttonLabel">Address</Typography>
              <OutlinedInput value='20 Rock road, Black Rock, Dublin, Ireland, 2353456' className='addressInput' />
            </FormControl>

            <div className='submitButtons'>
              <SaveButtons customColor='white' customTextColor='#344054'>Cancel</SaveButtons>
              <SaveButtons customColor='#00ACB9' customTextColor='white'>Save</SaveButtons>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
