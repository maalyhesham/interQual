import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useContext } from "react";
import { ContextData } from "../../ContextApp";
import {Button} from "@mui/material";

const columns = [
    { field: "code", headerName: "code", width: 70 },
    { field: "description", headerName: "description", width: 130 },
  
    {
        field: "age",
        headerName: "Age",
        type: "number",
        width: 90,
    },

];

const rows2 = 
[
        {
            id: 1,
            code: "",
            description: "Select Service"
        },
        {
            id: 2,
            code: "71045",
            description: "X-RAY EXAM CHEST 1 VIEW"
        },
        {  
            id: 3,
            code: "73610",
            description: "X-RAY EXAM OF ANKLE"
        },
        {
            id: 4,
            code: "73700",
            description: "CT LOWER EXTREMITY W/O DYE"
        },
        {
            id: 5,
            code: "82040",
            description: "ASSAY OF SERUM ALBUMIN"
        },
        {
            id: 6,
            code: "82150",
            description: "ASSAY OF AMYLASE"
        },
        {
            id: 7,
            code: "82247",
            description: "BILIRUBIN TOTAL"
        },
        {
            id: 8,
            code: "82805",
            description: "BLOOD GASES W/O2 SATURATION"
        },
        {
            id: 9,
            code: "84075",
            description: "ASSAY ALKALINE PHOSPHATASE"
        },
        {
            id: 10,
            code: "84155",
            description: "ASSAY OF PROTEIN SERUM"
        },
        {
            id: 11,
            code: "85380",
            description: "FIBRIN DEGRADJ D-DIMER"
        },

];
export default function DataOrderTabel() {
    
    
    const { setOpenOrder,rowDataOrder, setRowDataOrder, setDataFilterOrder} = useContext(ContextData);


    const submitData = () => {
        const newData = rows2.filter((item) => rowDataOrder.includes(item.id))
        setDataFilterOrder(newData)
        setOpenOrder(false)

    }
    
    return (
        <div style={{ height: 400, width: "100%" }}>
            <DataGrid
                rows={rows2}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                onRowSelectionModelChange={(item) => {
                    setRowDataOrder(item)
                }}

                rowSelectionModel={rowDataOrder}

            />
            <div>
                <Button onClick={submitData}>Submit</Button>
            </div>
        </div>
    );
}


