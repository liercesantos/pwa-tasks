import React from "react";
import {Box, Modal} from "@mui/material";


const BaseModal = ({open, onClose, children}) => {

    const box_style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        bgcolor: '#FAF0DE',
        border: '1px solid #5093B3',
        borderRadius: 2,
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={box_style}>
                {children}
            </Box>
        </Modal>
    )
}
export default BaseModal;
