import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { forwardRef, ReactNode, useImperativeHandle, useState } from "react";
import { CustomModalBox } from "./modifiedModalStyled";

interface ModifiedModalInterface {
  children: ReactNode;
  elemRef?: any;
  disableEnforceFocus?: boolean;
}
const ModifiedModal = forwardRef(
  ({ children, elemRef, disableEnforceFocus }: ModifiedModalInterface, ref) => {
    
    disableEnforceFocus = disableEnforceFocus || false;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useImperativeHandle(elemRef, () => {
      if (!elemRef) return;
      return {
        openModal: () => handleOpen(),
        closeModal: () => handleClose(),
      };
    });

    return (
      <Box>
        <Modal
          open={open}
          disableEnforceFocus={disableEnforceFocus ? true : false}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <CustomModalBox>{children}</CustomModalBox>
        </Modal>
      </Box>
    );
  }
);

ModifiedModal.displayName = "ModifiedModal";

export default ModifiedModal;
