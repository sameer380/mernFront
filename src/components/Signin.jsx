import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Signin() {
	const navigate = useNavigate(); // Ensure you have a Router component wrapping this component
	
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
	const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	const notifyA = (message) => toast.error(message);
	const notifyB = (message) => toast.success(message);

	const postData = async () => {
		if (!emailRegex.test(email)) {
			notifyA("Invalid Email");
			return;
		}
		

		try {
			const response = await axios.post(
				"https://pbscbackend23.onrender.com/signin",
				{
					email: email,
					password: password,
				}
			);

			if (response.data.error) {
				notifyA(response.data.error);
			} else {
				notifyB("Signed In Successfull");
				console.log(response.data);
				localStorage.setItem("jwt", response.data.token);
				localStorage.setItem("user", JSON.stringify(response.data.user));
			
				navigate("/");
			}
		} catch (error) {
			if (error.response && error.response.data && error.response.data.error) {
				notifyA(error.response.data.error);
			} else {
				console.log(error);
				notifyA("An error occurred during the request.");
			}
		}
	};

	return (
		<div>
			{/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}{" "}
			<section className="relative flex flex-wrap lg:h-screen lg:items-center">
				<div className="w-full px-4 pt-0 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
					<div className="mx-auto max-w-lg text-center">
						<img
							src="https://res.cloudinary.com/drbzxsbop/image/upload/v1694756291/logo-sm_r9of4e.png"
							height="110px"
							width="140px"
							style={{
								margin: "20px auto",
								opacity: "0.7",
							}}
							alt=""
						/>
						<h1 className="text-2xl font-bold sm:text-3xl">
							Login to Knowledge World!!
						</h1>

						<p className="mt-4 text-gray-500">
							Unlock the gateway to education. Access opportunities, knowledge,
							and growth. Join our vibrant community of learners. Sign in now to
							begin your inspiring educational journey with us.
						</p>
					</div>

					<form
						onSubmit={(e) => {
							e.preventDefault(); // Prevent the default form submission
							postData();
						}}
						className="mx-auto mb-0 mt-8 max-w-md space-y-4"
					>
						<div>
							<label htmlFor="email" className="sr-only">
								Email
							</label>

							<div className="relative">
								<input
									type="email"
									className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-red-600"
									placeholder="Enter email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									style={{
										border: "1px solid purple",
										boxShadow: "0 0 5pt 2pt rgba(224, 0, 0, 0.24)",
									}}
								/>

								<span className="absolute inset-y-0 end-0 grid place-content-center px-4">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4 text-gray-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
										/>
									</svg>
								</span>
							</div>
						</div>

						<div>
							<label htmlFor="password" className="sr-only">
								Roll Number
							</label>

							<div className="relative">
								<input
									type="password"
									className="w-full rounded-lg  p-4 pe-12 text-sm"
									placeholder="Enter Roll Number"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									style={{
										border: "1px solid purple",
										boxShadow: "0 0 5pt 2pt rgba(224, 0, 0, 0.24)",
									}}
								/>

								<span className="absolute inset-y-0 end-0 grid place-content-center px-4">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4 text-gray-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
										/>
									</svg>
								</span>
							</div>
						</div>

						<div className="flex items-center justify-between">
							<p className="text-sm text-gray-500">
								No account?
								<Link className="underline" href="" to="/register">
									Sign up
								</Link>
							</p>

							<button
								type="submit"
								className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
							>
								Sign in
							</button>
						</div>
					</form>
				</div>

				<div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
					<img
						alt="Welcome"
						src="https://res.cloudinary.com/drbzxsbop/image/upload/v1694756296/g2_mgmxa0.jpg"
						className="absolute inset-0 h-full w-full object-cover"
					/>
				</div>
			</section>
		</div>
	);
}

export default Signin;
