import * as React from "react";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { Card, TextField } from "@mui/material";
import axios from "axios";
import API_URL from "../routes/Api";
import {
  selectCartItems,
  selectTotalItemsPrice,
} from "../redux/slices/cartSlice";

const steps = [
  {
    label: "Shipping Info",
    description: `Here's the form for shipping info`,
    formFields: [
      { name: "address", label: "address" },
      { name: "city", label: "city" },
      { name: "state", label: "state" },
      { name: "country", label: "country" },
      { name: "pinCode", label: "pinCode" },
      { name: "phone", label: "phone" },
    ],
  },
  {
    label: "Order Items",
    description: `Here are the order items you should get them from Redux`,
  },
  {
    label: "Confirm Order",
    description: `Display the total price and confirm the order`,
  },
];

export default function StepperForm() {
  const cartItems = useSelector(selectCartItems);
  const totalItemsPrice = useSelector(selectTotalItemsPrice);

  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const formik = useFormik({
    initialValues: {
      address: "",
      city: "",
      state: "",
      country: "",
      pinCode: "",
      phone: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);

      if (activeStep === 0) {
        // dispatch(saveShippingInfo(values));
        handleNext(); // Proceed to the next step
      } else if (activeStep === steps.length - 1) {
        // Perform final submit
        const orderData = {
          shippingInfo: values,
          orderItems: cartItems,
          itemsPrice: totalItemsPrice,
          shippingPrice: 10,
          totalPrice: totalItemsPrice + 10,
        };

        try {
          // Send the orderData in the POST request
          await axios.post(`${API_URL}order/add`, orderData, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });

          // Dispatch any necessary actions after successful submission
          // dispatch(createOrder(orderData));

          handleNext();
        } catch (error) {
          console.error("Error submitting order:", error);
          // Handle error scenario
        }
      } else {
        handleNext();
      }
    },
  });

  return (
    <Box sx={{ color: "#ffffff" }}>
      <Stepper
        sx={{ color: "#ffffff" }}
        activeStep={activeStep}
        orientation="vertical"
      >
        {steps.map((step, index) => (
          <Step
            key={step.label}
            sx={{
              "& .MuiStepLabel-root .Mui-completed": {
                color: "secondary.light", // circle color (COMPLETED)
                fontSize: "30px",
              },
              "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                {
                  color: "primary.main", // Just text label (COMPLETED)
                  fontSize: "30px",
                },
              "& .MuiStepLabel-root .Mui-active": {
                color: "secondary.contrastText", // circle color (ACTIVE)
                fontSize: "30px",
              },
              "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                {
                  color: "primary.main", // Just text label (ACTIVE)
                  fontSize: "30px",
                },
              "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                fill: "black", // circle's number (ACTIVE)
                // color:"secondary.contrastText"
              },
            }}
          >
            <StepLabel
              optional={
                index === steps.length - 1 ? (
                  <Typography sx={{ color: "#ffffff" }} variant="caption">
                    
                  </Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography sx={{ color: "#ffffff" }}>
                {step.description}
              </Typography>
              {activeStep === 1 && (
                <>
                  {cartItems.map((item, index) => (
                    <Card
                      key={index}
                      sx={{ display: "flex", m: "2px", color: "#ffffff" }}
                    >
                      <Box
                        sx={{
                          backgroundColor:"#1f2937",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          p: 2,
                          color: "#ffffff",
                        }}
                      >
                        <img
                          alt="name"
                          style={{ width: "10%" }}
                          src={item.productImage}
                        />
                        <Box>
                          <Typography
                            sx={{ color: "#ffffff" }}
                            variant="h6"
                            
                          >
                            {`${item.productName}`
                              .substring(0, 80)
                              .concat("..")}
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              color: "#ffffff",
                            }}
                          >
                            <p style={{ color: "#ffffff" }}>{item.quantity}</p>
                          </Box>
                        </Box>
                        <Box>
                        <Button
                            variant="outlined"
                            sx={{
                              color: "success.main",
                              border: "2px #5dc65f solid",
                              borderRadius: "10px",
                              fontSize: "15px",
                              fontWeight: 600,
                              padding: "1px",
                            }}
                          >
                          {(item.productPrice * item.quantity).toFixed(2)}$

                          </Button>
                         
                        </Box>

                      </Box>
                    </Card>
                  ))}
                </>
              )}

              {activeStep === 2 && (
                <>
                  <Typography sx={{ color: "#ffffff" }}>
                    Items Price: {totalItemsPrice.toFixed(2)}$
                  </Typography>
                  <Typography sx={{ color: "#ffffff" }}>
                    Shipping Price: 10$
                  </Typography>
                  <Typography sx={{ color: "#ffffff" }}>
                    Total Price: {totalItemsPrice.toFixed(2)}$
                  </Typography>
                </>
              )}

              <Box sx={{ mb: 2 }}>
                <form onSubmit={formik.handleSubmit}>
                  {activeStep === 0 && (
                    <>
                      {step.formFields &&
                        step.formFields.map((field) => (
                          <TextField
                            sx={{
                              margin: "10px 0",
                              "& input": {
                                color: "#ffffff", // Text color inside the TextField
                                caretColor: "#ffffff", // Cursor color
                              },
                              "& label": {
                                color: "#ffffff", // Label color
                              },
                              "& .MuiOutlinedInput-root": {
                                borderColor: "#ffffff", // Border color of the TextField
                                borderRadius: "20px", // Adding border radius
                                "& fieldset": {
                                  border:" 1px solid #ffffff" // Border width of the TextField
                                },
                              },
                            }}
                            key={field.name}
                            id={field.name}
                            name={field.name}
                            label={field.label}
                            value={formik.values[field.name]}
                            onChange={formik.handleChange}
                            fullWidth
                            variant="outlined"
                          />
                        ))}
                    </>
                  )}
                  <div>
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{ mt: 1, mr: 1, color: "secondary.light" }}
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1, color: "secondary.light" }}
                    >
                      Back
                    </Button>
                  </div>
                </form>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ backgroundColor:"#1f2937",p: 3 }}>
          <Typography sx={{ color: "#ffffff" }}>
            Thank you, you will receive an invoice in your email
          </Typography>
        </Paper>
      )}
    </Box>
  );
}
