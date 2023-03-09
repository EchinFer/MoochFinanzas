import styled from '@emotion/styled';
import { Paper } from '@mui/material';

export const CustomPaper = styled(Paper)(({ theme }) =>
  theme.unstable_sx({
    padding: 5,
    borderRadius: 1,
  }),
);