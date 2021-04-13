import React from "react";
import styled from "styled-components";
import theme from "../theme";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import getUnixTime from "date-fns/getUnixTime";
import MomentLocaleUtils, {
  formatDate,
  parseDate
} from "react-day-picker/moment";
import "moment/locale/es";
const ContenedorInput = styled.div`
  input {
    font-family: "Work Sans", sans-serif;
    box-sizing: border-box;
    background: ${theme.grisClaro};
    border: none;
    cursor: pointer;
    border-radius: 0.625rem; /* 10px */
    height: 5rem; /* 80px */
    width: 100%;
    padding: 0 1.25rem; /* 20px */
    font-size: 1.5rem; /* 24px */
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 60rem) {
    /* 950px */
    & > * {
      width: 100%;
    }
  }
`;

const DatePicker = ({ fecha, cambiarFecha }) => {
  const handleDayChange = (selectedDay, modifiers, dayPickerInput) => {
   
    cambiarFecha(selectedDay);
  };
  return (
    <ContenedorInput>
      <DayPickerInput
        onDayChange={handleDayChange}
        value={fecha}
        formatDate={formatDate}
        parseDate={parseDate}
        format="LL"
        dayPickerProps={{
          locale: "es",
          localeUtils: MomentLocaleUtils
        }}
      />
    </ContenedorInput>
  );
};
export default DatePicker;
