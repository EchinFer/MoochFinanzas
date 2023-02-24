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
import { checkPropTypes } from 'prop-types';

const CustomIconButton = styled(IconButton)(({ theme }) => ({
    borderRadius: 4,
    backgroundColor: theme.palette.primary.main,
    ':hover': {
        backgroundColor: theme.palette.primary.light
    }
}));
const CustomDivider = styled(Divider)(({ theme }) => ({
    margin: 0,
}));
//Cris branch
const RangeListItem = ({ name }) => (
    <ListItem disablePadding>
        <ListItemButton>
            <ListItemText primary={name} />
        </ListItemButton>
    </ListItem>
)
const RangeDatepicker = forwardRef(({ startValue, endValue, onChangeStart, onChangeEnd }, ref) => (
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
                value={startValue}
                onChange={onChangeStart}
            />
            <Divider orientation='vertical' />
            <StaticDatePicker
                displayStaticWrapperAs="desktop"
                inputFormat={dateFormat.simple}
                views={['year', 'month', 'day']}
                renderInput={(params) => <TextField {...params} size="small" helperText={params?.inputProps?.placeholder} />}
                value={endValue}
                onChange={onChangeEnd}
            />


        </LocalizationProvider>
    </Stack>
));

export const CustomRangeDatePicker = ({ onChange, initialValue }) => {

    const [dateValue, setDateValue] = useState('');
    const [dpStartValue, setDpStartValue] = useState(initialValue ? initialValue.startDate : moment(new Date(), dateFormat.simple));
    const [dpEndValue, setDpEndValue] = useState(initialValue ? initialValue.endDate : moment(new Date(), dateFormat.simple));
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    useEffect(() => {
        setDateValue(`${dpStartValue.format(dateFormat.humanDate)} al ${dpEndValue.format(dateFormat.humanDate)}`);
    }, [dpStartValue, dpEndValue])

    const onClickApply = () => {
        // if (anchorRef.current && anchorRef.current.contains(event.target)) {
        //     return;
        // }

        setOpen(false);

        applyDateValue();
    }

    const applyDateValue = () => {
        onChange({
            startDate: dpStartValue,
            endDate: dpEndValue
        });
    }

    const handleChangeStartDate = (newValue) => {
        setDpStartValue(newValue);
    }

    const handleChangeEndDate = (newValue) => {
        setDpEndValue(newValue);
    }
    const handleClickAway = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);

        applyDateValue();
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);


    return (
        <>
            <Stack direction='row' spacing={1} sx={{ width: 400 }}>

                <TextField
                    fullWidth
                    size='small'
                    label='Rango de fecha'
                    ref={anchorRef}
                    id="composition-button"
                    onClick={handleToggle}
                    value={dateValue}
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
                                placement === 'bottom-start' ? 'right top' : 'left bottom',
                        }}
                    >
                        <Paper elevation={3} sx={{ display: 'flex' }}>
                            <ClickAwayListener onClickAway={handleClickAway}>
                                <Stack alignItems='flex-end' >
                                    <RangeDatepicker startValue={dpStartValue} endValue={dpEndValue} onChangeStart={handleChangeStartDate} onChangeEnd={handleChangeEndDate} />
                                    <CustomDivider sx={{ width: '100%', margin: 0 }} />
                                    <Stack direction='row' sx={{ padding: 1 }} spacing={1}>
                                        <Button variant='outlined' color='error' size='small' onClick={handleToggle}>Cancelar</Button>
                                        <Button variant='outlined' size='small' onClick={onClickApply}>Aplicar</Button>
                                    </Stack>
                                </Stack>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}

            </Popper>

        </>

    )
}