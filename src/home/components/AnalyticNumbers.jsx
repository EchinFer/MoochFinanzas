import { Button, Card, CardActions, CardContent, Chip, Typography, useTheme } from '@mui/material'
import React from 'react'
import { currency } from '../../config'
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';

export const AnalyticNumbers = ({ title, value, percentage }) => {

    return (
        <Card
            sx={{
                minWidth: 275,
            }}
            variant='outlined'
        >
            <CardContent>
                <Typography sx={{ fontSize: 14, }} color="text.secondary" gutterBottom>
                    {title}
                </Typography>
                <Typography component='div' sx={{ fontSize: 18, fontWeight: 'bold' }} color="text.secondary.dark" gutterBottom>
                    {currency.symbol}{value}
                    {percentage &&
                        <Chip
                            variant="combined"
                            color='success'
                            icon={
                                <>
                                    <AirlineStopsIcon style={{ fontSize: '0.75rem', color: 'inherit' }} />
                                </>
                            }
                            label={`${percentage}%`}
                            sx={{ ml: 1.25, pl: 1 }}
                            size="small"
                        />
                    }

                </Typography>
            </CardContent>
            {/* <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
    )
}
