import React, { useContext } from "react";
import { Button, Grid, InputAdornment, TextField, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ListIcon from "@mui/icons-material/List";
import { useState } from "react";
import PrintIcon from "@mui/icons-material/Print";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CheckIcon from '@mui/icons-material/Check';
import { ContextData } from "../../ContextApp";
import BasicModal from "../PopUp/PopUp";
import BasicModalOrder from "../PopUp/PopUpOrder";

const Footer = () => {

  const [searchTerm, setSearchTerm] = useState("");


  const { setOpen, setOpenOrder, } = useContext(ContextData)


  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const submitButton = () => {
    if (newData.length === 0) {
      messege.wan("please choose servecies", 4000)
    }
    else {
      const cptKey = cptData.filter(keys => keys.id === rowData[0])
      console.log(newData[0].dignoses)
    }
  }
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#f5fafc",
        marginTop: "auto",
        bottom: 0,
      }}
    >
      <Grid>
        <TextField
          id="search"
          type="search"
          label="search for new order"
          value={searchTerm}
          onChange={handleChange}
          size="small"
          sx={{ margin: "0 20px" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AddIcon />
              </InputAdornment>
            ),
          }}
        />
        <ListIcon sx={{ marginBottom: "-7px", marginRight: "30px" }} />

        <Button
          sx={{ border: "none", fontWeight: "bold" }}
          color="success"
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={() => {
            setOpen(true)
          }}
        >
          ADD DX (1)
        </Button>
      </Grid>
      <Grid>
        <Button
          sx={{ border: "none", fontWeight: "bold" }}
          color="success"
          variant="outlined"
          startIcon={<PrintIcon />}
        >
          PRINT AVS &#x25B4;
        </Button>
        <Button
          sx={{ border: "none", fontWeight: "bold" }}
          color="success"
          variant="outlined"
          startIcon={<EventNoteIcon />}
        >
          10
        </Button>
        <Button
          sx={{ border: "none", fontWeight: "bold" }}
          color="success"
          variant="outlined"
        >
          PEND
        </Button>

        <Button
          variant="contained"
          startIcon={<CheckIcon />}
          endIcon={<ArrowDropUpIcon />}
          onClick={() => {
            setOpenOrder(true)
          }}
          sx={{
            backgroundColor: "#1d897b",
            '&:hover': {
              backgroundColor: '#fff',
              color: '#1d897b',
            }
          }}
        >
          SIGN ORDERS
        </Button>
        <Button
          variant="contained"

          sx={{
            backgroundColor: "#1d897b",
            marginLeft: '20px',
            '&:hover': {
              backgroundColor: '#fff',
              color: '#1d897b'
            }
          }}
        >
          submit
        </Button>
      </Grid>

      <BasicModal />
      <BasicModalOrder />

    </Paper>
  );
};
export default Footer;