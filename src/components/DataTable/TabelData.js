import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useContext } from "react";
import { ContextData } from "../../ContextApp";
import { Button, FormControl } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";


const columns = [
    { field: "code", headerName: "code", width: 70 },
    { field: "descripton", headerName: "descripton", width:  200},
    
];


export default function TabelData() {

    const { setOpen, rowData, setRowData, setDataFilter, dataJson, searchDiagnoses, setSearchDiagnoses } = useContext(ContextData);

    const handleSearchDiagnosesChange = (event) => {
        setSearchDiagnoses(event.target.value);
    };


    const filteredRows = dataJson.filter((row) =>
        Object.values(row).some(
            (value) =>
                typeof value === "string" &&
                value.toLowerCase().includes(searchDiagnoses.toLowerCase())
        )
    );
   
    const submitData = () => {
        const newData = dataJson.filter((item) => rowData.includes(item.id))
        setDataFilter(newData)
        setOpen(false)

    }

    return (
        <div style={{ height: 400, width: "100%" }}>
            <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                <OutlinedInput
                    id="outlined-adornment-weight"
                    endAdornment={<SearchIcon position="end" />}
                    aria-describedby="outlined-weight-helper-text"
                    placeholder="Search Diagnoses"
                    inputProps={{
                        "aria-label": "search",
                    }}
                    value={searchDiagnoses}
                    onChange={handleSearchDiagnosesChange}
                />
            </FormControl>
            <DataGrid
                rows={filteredRows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                onRowSelectionModelChange={(item) => {
                setRowData(item)
                }}

                rowSelectionModel={rowData} 
              
            />
            <div>
                <Button onClick={submitData}>Submit</Button>
            </div>
        </div>
    );
}