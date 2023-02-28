/* eslint-disable react-hooks/exhaustive-deps */
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  CircularProgress,
  InputAdornment,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import { CustomTextfield } from "./modifiedInputStyled";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { useWindowSize } from "@/project/customHooks/useWindowSize";

interface CheckInterface {
  check: "right" | "wrong" | "none";
}
interface ModifiedInputInterface {
  fieldName: string;
  name?: string;
  check?: "right" | "wrong" | "none";
  validationInProgress?: boolean;
  inputValue?: string | number;
  placeholderText?: string;
  validationFields?:
    | {
        allFields: string[];
        passedFieldIndexes: number[];
      }
    | any;

  handleChangeInputFunc?: (...args: any) => void;
  type?: "text" | "password";
}
const ModifiedInput = ({
  fieldName,
  name,
  check,
  validationInProgress,
  inputValue,
  placeholderText,
  validationFields,
  handleChangeInputFunc,
  type,
}: ModifiedInputInterface) => {
  type = type || "text";
  fieldName = fieldName || "Please Enter Field Title";
  inputValue = inputValue || "";

  const [anchorEl, setAnchorEl] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef(null);
  let { width } = useWindowSize();
  const open = Boolean(anchorEl);
  const handleShowPassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  const handleClick = () => {
    setAnchorEl(inputRef.current);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const visibleIcon = useCallback(() => {
    const iconSX = { cursor: "pointer", color: "#7ebebe" };
    return showPassword ? (
      <Visibility sx={iconSX} onClick={handleShowPassword} />
    ) : (
      <VisibilityOff sx={iconSX} onClick={handleShowPassword} />
    );
  }, [showPassword]);

  const handleSigns = ({ check }: CheckInterface) => {
    switch (check) {
      case "right":
        return <DoneIcon sx={{ color: "green" }} />;
      case "wrong":
        return <CloseIcon sx={{ color: "red" }} />;
      default:
        return <></>;
    }
  };

  const handleChange = useCallback(
    (e: any) => {
      handleClick();
      handleChangeInputFunc && handleChangeInputFunc(e);
    },
    [handleChangeInputFunc, inputValue, inputRef]
  );

  return (
    <Stack
      direction={"column"}
      sx={{
        width: "100%",
      }}
    >
      <Typography
        variant={"caption"}
        fontWeight={600}
        fontSize={"13px"}
        marginBottom={"7px"}
        marginLeft={"4px"}
        color={"text.primary"}
      >
        {fieldName}
      </Typography>

      <CustomTextfield
        ref={inputRef}
        name={name}
        value={inputValue}
        onChange={handleChange}
        fullWidth
        type={type === "password" && showPassword === false ? type : "text"}
        size="small"
        placeholder={placeholderText}
        InputProps={
          type === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    {check && handleSigns({ check })}
                    {visibleIcon()}
                  </InputAdornment>
                ),
              }
            : {
                endAdornment: validationInProgress ? (
                  <CircularProgress color="secondary" size={18} />
                ) : (
                  <>
                    {!validationInProgress
                      ? check && handleSigns({ check })
                      : handleSigns({ check: "wrong" })}
                  </>
                ),
              }
        }
      />
      {validationFields &&
        validationFields?.allFields?.length > 0 &&
        validationFields?.allFields?.length !==
          validationFields?.passedFieldIndexes?.length && (
          <Popover
            id={"simple-popover"}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            disableAutoFocus={true}
            disableEnforceFocus={true}
            anchorOrigin={
              width && width > 900
                ? {
                    vertical: "top",
                    horizontal: "right",
                  }
                : {
                    vertical: "bottom",
                    horizontal: "left",
                  }
            }
            sx={{ top: { xs: "15px", md: "0px" } }}
          >
            {validationFields?.allFields.map(
              (elem: string | any, index: number) => {
                const verified = (verifiedIndex: number) =>
                  validationFields?.passedFieldIndexes.includes(verifiedIndex);

                return (
                  <Stack
                    key={`${elem}${index}modifiedInput`}
                    direction={"row"}
                    alignItems={"center"}
                    padding={"8px 14px"}
                  >
                    <Typography
                      variant="subtitle1"
                      id={elem}
                      fontSize={"13px"}
                      fontWeight={600}
                      marginRight={"10px"}
                    >
                      {elem}
                    </Typography>
                    {verified(index) ? (
                      <DoneIcon sx={{ color: "green" }} />
                    ) : (
                      <CloseIcon sx={{ color: "red" }} />
                    )}
                  </Stack>
                );
              }
            )}
          </Popover>
        )}
    </Stack>
  );
};

export default ModifiedInput;
