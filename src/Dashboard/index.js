import * as React from "react";
import { useState, useEffect } from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import GroupsIcon from "@mui/icons-material/Groups";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Chip from "@mui/material/Chip";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Dashboard = () => {
  const [age, setAge] = React.useState("10");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [pageSize, setPageSize] = useState(5);

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
      </GridToolbarContainer>
    );
  }

  const rows = [
    {
      id: "1",
      name: "Bhagya Travels",
      address: "Colombo 03",
      contact: "0785231458",
      date: "2022-01-09",
      bookings: "58",
    },
    {
      id: "2",
      name: "Travel Safe",
      address: "Colombo 10",
      contact: "0785231458",
      date: "2022-01-09",
      bookings: "10",
    },
    {
      id: "3",
      name: "Travel Today",
      address: "Colombo 05",
      contact: "0785231458",
      date: "2022-01-09",
      bookings: "45",
    },
    {
      id: "4",
      name: "Bhagya Travels",
      address: "Colombo 03",
      contact: "0785231458",
      date: "2022-01-09",
      bookings: "58",
    },
    {
      id: "5",
      name: "Bhagya Travels",
      address: "Colombo 03",
      contact: "0785231458",
      date: "2022-01-09",
      bookings: "58",
    },
  ];

  const columns = [
    {
      field: "departure",
      headerName: "Departure",
      flex: 1,
      renderCell: (params) => <div>{params.row.departure}</div>,
    },
    {
      field: "arrival",
      headerName: "Arrival",
      flex: 1,
      renderCell: (params) => <div>{params.row.arrival}</div>,
    },
    {
      field: "departure_date",
      headerName: "Departure_Date",
      flex: 1,
      renderCell: (params) => <div>{params.row.departure_date}</div>,
    },
    {
      field: "arrival_date",
      headerName: "Arrival_Date",
      flex: 1,
      renderCell: (params) => <>{params.row.arrival_date}</>,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      renderCell: (params) => <div>{params.row.Price}</div>,
    },

    {
        field: "duration",
        headerName: "Duration",
        flex: 1,
        renderCell: (params) => <div>{params.row.duration}</div>,
      },

      {
        field: "cruise_provider",
        headerName: "Cruise_Provider",
        flex: 1,
        renderCell: (params) => <div>{params.row.cruise_provider}</div>,
      },

    {
      field: "view",
      headerName: "Edit",
      flex: 1,
      renderCell: (params) => (
        <i
          className="bi bi-pencil-square"
          style={{ color: "green", fontSize: "25px", cursor: "pointer" }}
        ></i>
      ),
    },
    {
        field: "delete",
        headerName: "Delete",
        flex: 1,
        renderCell: (params) => (
          <i
            className="fas fa-trash-alt"
            style={{ color: "blue", fontSize: "25px", cursor: "pointer" }}
          ></i>
        ),
      },
  ];

  return (
    <>
      <div className="row mb-2">
        <div className="col-lg-3 mb-2">
          <div className="card" style={{ backgroundColor: "#5BA4AA" }}>
            <div className="card-body">
              <h5 className="card-title">
                Upload{" "}
            <Button component="label" variant="contained" startIcon=
                {
                <CloudUploadIcon />
                }>
           Upload file
                <VisuallyHiddenInput type="file" />
            </Button>
              </h5>
              <h2 className="card-text">10</h2>
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-2">
          <div className="card" style={{ backgroundColor: "#4095C4" }}>
            <div className="card-body">
              <h5 className="card-title">
                Submit{" "}
                <Button color="secondary">Secondary</Button>
<            Button variant="contained" color="submit">
            Submit
         </Button>
              </h5>
              <h2 className="card-text">20</h2>
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-2">
          <div className="card" style={{ backgroundColor: "#2C6BAA" }}>
            <div className="card-body">
              <h5 className="card-title">
               Reset{" "}
               <Button color="secondary">Secondary</Button>
<            Button variant="contained" color="reset">
            Reset
         </Button>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-2">
          <div className="card" style={{ backgroundColor: "#404FA5" }}>
            <div className="card-body">
              <h5 className="card-title">
                This Month Income{" "}
                <AttachMoneyIcon
                  fontSize="large"
                  style={{ color: "#FFFFFF", marginBottom: "5px" }}
                ></AttachMoneyIcon>
              </h5>
              <h2 className="card-text">56000.00</h2>
            </div>
          </div>
        </div>
      </div>
    
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          loading={false}
          getRowId={(row) => row.id}
          components={{ Toolbar: CustomToolbar }}
        />
      </div>
    </>
  );
};

export default Dashboard;
