import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Container } from "@mui/material";
import StepperForm from "../../utils/StepperForm";
import API_URL from "../../routes/Api";


const CheckOut = () => {
  const dispatch = useDispatch();
  const orderInfo = {};

  const newOrder = async () => {
    try {
      const response = await axios.post(`${API_URL}/order/add`, orderInfo, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <StepperForm />
    </Container>
  );
};

export default CheckOut;
