import  React from "react";
import Modal from "@mui/material/Modal";
import { ContextData } from "../../ContextApp";
import TabelData from "../DataTable/TabelData";
import { useContext } from "react";
import { Box } from "@mui/material";

const style = {
    
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height:500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
   
    const { open, setOpen } = useContext(ContextData);

    const handleClose = () => {
        console.log(open);
        setOpen(false);
    };
 
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TabelData/>
                </Box>
            </Modal>
        </div>
    );
}