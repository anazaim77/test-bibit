import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import AppBarSearch from "../../../components/organisms/AppBarSearch";

const theme = createTheme();
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit">Fajar Tri Pamungkas</Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const PagePaper = ({ children, title }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBarSearch title={title} />
      <main>{children}</main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
};

export default PagePaper;
