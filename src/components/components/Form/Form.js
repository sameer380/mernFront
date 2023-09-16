
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { toast } from "react-toastify";

const validationSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your first name'),
  lastName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your last name'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  password1: yup
    .string()
    .required('Please specify your password')
    .min(8, 'The password should have at minimum length of 8'),
});

const Form = () => {

  const navigate = useNavigate();
	const notifyA = (message) => toast.error(message);
	const notifyB = (message) => toast.success(message);

	const onSubmit = async (values) => {

	  const { firstName, lastName, email, password } = values;

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passRegex = /^21\d{4}[pP]$/;


    if (!emailRegex.test(email)) {
      notifyA("Invalid Email");
      return;
    }
		if (!passRegex.test(password)) {
	   console.log(password);
			notifyA(
				"Roll Number must contain exactly Six digits followed by 'p' like 2******p"
			);
			return;
		}

    if (!firstName || !email || !password || !lastName) {
      notifyA("Please fill in all fields");
      return;
    }




	const url = "https://pbscbackend23.onrender.com";

    try {
		const response = await axios.post(
			"https://pbscbackend23.onrender.com/register",
			{
				firstName: firstName,
				lastName: lastName,
				email: email,
				password: password,
			}
		);


      if (response.data.error) {
        notifyA(response.data.error); // Display the error message from the server
      } else {
        notifyB(response.data.message);
        navigate("/signin");
        console.log(response.data);
      }
	} catch (error) {
		console.log(error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.error
      ) {
        // The request was made and the server responded with a status code
        // Extract the error message from the response
        const errorMessage = error.response.data.error;
        notifyA(errorMessage); // Display the error message
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something else happened while setting up the request
        console.log("Error", error.message);
      }
      console.log(error.config);
    }
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
		<Box>
			<Box>
				<img
					src="https://pbsiddhartha.ac.in/assets/images/logo-sm.png"
					height="110px"
					width="140px"
					style={{
						margin: "20px auto",
						opacity: "0.9",
					}}
					alt=""
				/>
			</Box>

			<form onSubmit={formik.handleSubmit} style={{ marginTop: "60px" }}>
				<Grid container spacing={4}>
					<Grid item xs={12} sm={6}>
						<Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
							Enter your first name
						</Typography>
						<TextField
							label="First name *"
							variant="outlined"
							name="firstName"
							fullWidth
							value={formik.values.firstName}
							onChange={formik.handleChange}
							error={
								formik.touched.firstName && Boolean(formik.errors.firstName)
							}
							helperText={formik.touched.firstName && formik.errors.firstName}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
							Enter your last name
						</Typography>
						<TextField
							label="Last name *"
							variant="outlined"
							name="lastName"
							fullWidth
							value={formik.values.lastName}
							onChange={formik.handleChange}
							error={formik.touched.lastName && Boolean(formik.errors.lastName)}
							helperText={formik.touched.lastName && formik.errors.lastName}
						/>
					</Grid>
					<Grid item xs={12}>
						<Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
							Enter your email
						</Typography>
						<TextField
							label="Email *"
							variant="outlined"
							name="email"
							type="eamil"
							fullWidth
							value={formik.values.email}
							onChange={formik.handleChange}
							error={formik.touched.email && Boolean(formik.errors.email)}
							helperText={formik.touched.email && formik.errors.email}
						/>
					</Grid>
					<Grid item xs={12}>
						<Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
							Enter your Roll-Number
						</Typography>
						<TextField
							label="Roll Number *"
							variant="outlined"
							name="password"
							type="password"
							fullWidth
							value={formik.values.password}
							onChange={formik.handleChange}
							error={formik.touched.password && Boolean(formik.errors.password)}
							helperText={formik.touched.password && formik.errors.password}
						/>
					</Grid>
					<Grid item container xs={12}>
						<Box
							display="flex"
							flexDirection={{ xs: "column", sm: "row" }}
							alignItems={{ xs: "stretched", sm: "center" }}
							justifyContent={"space-between"}
							width={1}
							maxWidth={600}
							margin={"0 auto"}
						>
							<Box marginBottom={{ xs: 1, sm: 0 }}>
								<Typography variant={"subtitle2"}>
									Already have an account?{" "}
									<Link
										component={"a"}
										color={"primary"}
										href={"/signin"}
										underline={"none"}
									>
										Login.
									</Link>
								</Typography>
							</Box>
							<Button
								size={"large"}
								variant={"contained"}
								type={"submit"}
							  onClick={() => {
		
									onSubmit(formik.values);
								}}
							>
								Sign up
							</Button>
						</Box>
					</Grid>
				</Grid>
			</form>
		</Box>
	);
};

export default Form;
