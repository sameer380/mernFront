import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import Button from "./Button";
import Grid from "./Grid";
import axios from "axios";
import { toast } from "react-toastify";

function ImgUploader() {
	const navigate = useNavigate();
	const [photos, setPhotos] = useState([]);
	const [updateUI, setUpdateUI] = useState("");

	useEffect(() => {
	if (!localStorage.getItem("jwt")) {

			toast.error("You have to login!! To Access Memes ❤️❤️");
			navigate("/register");
		}
	},[]);

	useEffect(() => {
		
		if (localStorage.getItem("jwt")) {
			axios
				.get("https://pbscbackend23.onrender.com/api/get")
				.then((res) => {
					console.log("Data fetched successfully");
					console.log(res.data);
					setPhotos(res.data);
				})
				.catch((err) => console.log(err));
		}
	}, [updateUI]);




	return (
		<div className="App">
		

			<Grid photos={photos} />
			<Button setUpdateUI={setUpdateUI} />
		</div>
	);
}

export default ImgUploader;
