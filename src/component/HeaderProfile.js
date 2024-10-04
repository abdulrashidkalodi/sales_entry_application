// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Grid } from "mdi-material-ui";

const HeaderProfile = () => {
  return (
    <Card sx={{ position: "relative" }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ mr: 2, mb: 1, display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center", // Align vertically in the center
              }}
            >
              <Typography variant="h3" sx={{ marginRight: 2 }}>
                {" "}
                ABC COM LTD
              </Typography>{" "}
              <Avatar
                sx={{
                  m: 1,
                  width: 38,
                  height: 38,
                  marginRight: 3,
                  fontSize: "1rem",
                  color: "common.white",
                  backgroundColor: `success.main`,
                }}
              >
                A{" "}
              </Avatar>
              {/* <Avatar
              sx={{
                m: 1,
                width: 38,
                height: 38,
                marginRight: 3,
                fontSize: "1rem",
                color: "common.white",
                backgroundColor: `error.main`,
              }}
            >
              I{" "}
            </Avatar>{" "} */}
            </Box>
            <Typography variant="h4">vr.No :123445</Typography>
            <Typography variant="h5">Date : 13/13/2000</Typography>
            <br />
            <Typography
              variant="h6"
              sx={{
                lineHeight: 1,
                fontWeight: 600,
                color: "success.main",
                fontSize: "2.75rem !important",
              }}
            >
              + $ 899
            </Typography>
          </Box>
          <Box sx={{ mr: 2, mb: 1, display: "flex", flexDirection: "column" }}>
            <Button sx={{ m: 1 }} variant="contained">
              update
            </Button>
            <Button
              sx={{ m: 1, backgroundColor: `error.main` }}
              variant="contained"
            >
              Delete
            </Button>
            <Button
              sx={{ m: 1, backgroundColor: `success.main` }}
              variant="contained"
            >
              Create New +{" "}
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default HeaderProfile;
