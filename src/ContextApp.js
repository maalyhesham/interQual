import React from 'react';
import data from './Utils/data.json'
import { createContext, useEffect, useState } from "react";
export const ContextData = createContext();

export default function TableProvider({ children }) {
    const [open, setOpen] = useState(false);
    const [openOrder, setOpenOrder] = useState(false);

    const [rowData, setRowData] = useState([]);
    const [dataFilter, setDataFilter] = useState([]);

    const [rowDataOrder, setRowDataOrder] = useState([]);
    const [dataFilterOrder, setDataFilterOrder] = useState([]);

    const [dataJson, setDataJson] = useState([]);

    const [searchDiagnoses, setSearchDiagnoses] = useState("");



    const objectConvertId = {};
    Object.keys(data).forEach((key) => {
        objectConvertId[key] = data[key].map((item, index) => {
            return { id: `${key}-${index}`, descripton: item };
        });
    });


    useEffect(() => {
        Object.keys(objectConvertId).map((item) => {
            objectConvertId[item].map((element) => {
                return setDataJson((prevData) => {
                    const dataUpdate = [
                        ...prevData,
                        { id: element.id, code: item, descripton: element.descripton },
                    ];
                    return dataUpdate;
                });
            });
        });
    }, []);


    return <ContextData.Provider value={{
        open, setOpen, openOrder, setOpenOrder,
        rowData, setRowData, dataFilter, setDataFilter, rowDataOrder, setRowDataOrder,
        dataFilterOrder, setDataFilterOrder, dataJson, setDataJson, searchDiagnoses, setSearchDiagnoses

    }}>{children}</ContextData.Provider>;
}