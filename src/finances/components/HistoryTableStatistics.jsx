import { styled } from '@mui/material/styles';
import { IconButton, Stack } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { useState } from 'react'
import { CustomRangeDatePicker } from '../../components/UI/CustomRangeDatePicker'
import { MainTitle } from '../../components/UI/MainTitle'
import { BasicDataTable } from './BasicDataTable'
import CachedIcon from '@mui/icons-material/Cached';



export const HistoryTableStatistics = () => {

    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    const [rangeValue, setRangeValue] = useState({ startDate: today, endDate: today })

    const handleOnChangeRangeDate = ({ startDate, endDate }) => {

        setRangeValue({
            startDate,
            endDate
        });

    }


    return (
        <>
            <Grid xs={12}>
                <Stack direction='row' justifyContent='space-between'>
                    <MainTitle>Histórico</MainTitle>
                    <Stack direction='row' spacing={1}>
                        <CustomRangeDatePicker onChange={handleOnChangeRangeDate} />
                        <CustomIconButton>
                            <CachedIcon />
                        </CustomIconButton>
                    </Stack>
                </Stack>
            </Grid>
            <Grid xs={12}>
                <BasicDataTable />
            </Grid>
        </>
    )
}

const CustomIconButton = styled(IconButton)(({ theme }) => ({
    borderRadius: 4,
    backgroundColor: theme.palette.primary.main,
    ':hover': {
        backgroundColor: theme.palette.primary.light
    }
}));