import * as React from "react";
import { useNavigate } from "react-router-dom";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import WorkIcon from "@mui/icons-material/Work";
import BusinessIcon from "@mui/icons-material/Business";
import InventoryIcon from "@mui/icons-material/Inventory";
import PeopleIcon from "@mui/icons-material/People";
import AssessmentIcon from "@mui/icons-material/Assessment";
import GroupsIcon from "@mui/icons-material/Groups";
import BuildIcon from "@mui/icons-material/Build";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const SideNavbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        color: "#1976d2",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={() => navigate(`/dashboard`)}>
        <ListItemIcon>
          <HomeIcon style={{ color: "#1976d2" }} />
        </ListItemIcon>
        <ListItemText primary="Cruise" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate(`/dashboard`)}>
        <ListItemIcon>
          <HomeIcon style={{ color: "#1976d2" }} />
        </ListItemIcon>
        <ListItemText primary="Cruise" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate(`/dashboard`)}>
        <ListItemIcon>
          <HomeIcon style={{ color: "#1976d2" }} />
        </ListItemIcon>
        <ListItemText primary="Activity" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate(`/dashboard`)}>
        <ListItemIcon>
          <HomeIcon style={{ color: "#1976d2" }} />
        </ListItemIcon>
        <ListItemText primary="Package" />
        </ListItemButton>
      

      <ListItemButton onClick={() => navigate(`/new-item-rental`)}>
        <ListItemIcon>
          <PersonAddIcon style={{ color: "#1976d2" }} />
        </ListItemIcon>
        <ListItemText primary="Add Details" />
      </ListItemButton>

     
    </List>
  );
};

export default SideNavbar;
