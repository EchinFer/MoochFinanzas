import { Button, ClickAwayListener, Divider, Grow, IconButton, InputAdornment, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Popper, Stack, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { DatePicker, LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { useField, useFormikContext } from 'formik';
import moment from 'moment';
import { useState, useEffect, useRef } from 'react';
import { dateFormat } from '../../config';
import { styled } from '@mui/material/styles';
import { forwardRef } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CachedIcon from '@mui/icons-material/Cached';
import { rangesDatepicker } from '../../constants';

const CustomIconButton = styled(IconButton)(({ theme }) => ({
    borderRadius: 4,
    backgroundColor: theme.palette.primary.main,
    ':hover': {
        backgroundColor: theme.palette.primary.light
    }
}));

const RangeListItem = ({ name }) => (
    <ListItem disablePadding>
        <ListItemButton>
            <ListItemText primary={name} />
        </ListItemButton>
    </ListItem>
)
const RangeDatepicker = forwardRef(({ value, onChange }, ref) => (
    <Stack ref={ref} direction='row' flexWrap={true}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <List>
                {
                    rangesDatepicker.map((item, i) => (
                        <RangeListItem key={i} name={item.name} />
                    ))
                }
            </List>
            <Divider orientation='vertical' />
            <StaticDatePicker
                displayStaticWrapperAs="desktop"
                inputFormat={dateFormat.simple}
                views={['year', 'month', 'day']}
                renderInput={(params) => <TextField  {...params} size="small" helperText={params?.inputProps?.placeholder} />}
                value={value}
                onChange={onChange}
            />
            <Divider orientation='vertical' />
            <StaticDatePicker
                displayStaticWrapperAs="desktop"
                inputFormat={dateFormat.simple}
                views={['year', 'month', 'day']}
                renderInput={(params) => <TextField {...params} size="small" helperText={params?.inputProps?.placeholder} />}
                value={value}
                onChange={onChange}
            />


        </LocalizationProvider>
    </Stack>
));

export const CustomRangeDatePicker = ({ label, dependField = { dpnFieldName: '', cFieldName: '', validation: (cv, dv, act) => { } }, ...props }) => {

    const [dpValue1, setDpValue1] = useState(moment('13/02/2023', dateFormat.simple))
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);


    return (
        <>
            {/* <LocalizationProvider dateAdapter={AdapterMoment}>

                <DatePicker
                    inputFormat={dateFormat.simple}
                    views={['year', 'month', 'day']}
                    renderInput={(params) => <TextField {...params} helperText={params?.inputProps?.placeholder} />}
                    value={dpValue1}
                    onChange={handleChangeDp1}
                />
            </LocalizationProvider>
             */}
            <Stack direction='row' spacing={1}>

                <TextField
                    size='small'
                    label='asdjhas'
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? 'composition-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    InputProps={{
                        readOnly: true,
                        endAdornment: <InputAdornment position='end'><CalendarMonthIcon /></InputAdornment>,
                    }}
                />
                <CustomIconButton>
                    <CachedIcon />
                </CustomIconButton>
            </Stack>


            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                sx={{ display: 'flex', zIndex: 1300 }}
                modifiers={[{
                    name: 'flip',
                    enabled: true,
                    options: {
                        altBoundary: true,
                        rootBoundary: 'document',
                        padding: 8,
                    },
                }]}
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                        }}
                    >
                        <Paper elevation={3} sx={{ display: 'flex' }}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <RangeDatepicker value={dpValue1} onChange={setDpValue1} />
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}

            </Popper>

        </>

    )
}
