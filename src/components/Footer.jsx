import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { blue, grey } from '@mui/material/colors';

export const Footer= () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: blue[900],
        paddingTop: "1rem",
        paddingBottom: "1rem",
        //position: "fixed"
      }}
    >
      <Container maxWidth="lg" sx={{ }}>
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              developer: Adrian Garcia
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Router`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;