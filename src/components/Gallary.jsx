import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import './Gallary.css'
export default function Gallary() {
	return (
		<MDBRow
			className="bg-white"
			style={{
				width: "99.7vw",
			}}
		>
			<MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
				<img
					src="https://res.cloudinary.com/drbzxsbop/image/upload/v1694756287/g1_o1qmay.jpg"
					className="w-100 shadow-1-strong rounded mb-4"
					alt="Boat on Calm Water"
				/>

				<img
					src="https://res.cloudinary.com/drbzxsbop/image/upload/v1694756296/g2_mgmxa0.jpg"
					className="w-100 shadow-1-strong rounded mb-4"
					alt="Wintry Mountain Landscape"
				/>
			</MDBCol>

			<MDBCol lg={4} className="mb-4 mb-lg-0">
				<img
					src="https://res.cloudinary.com/drbzxsbop/image/upload/v1694756287/g3_aofu2q.jpg"
					className="w-100 shadow-1-strong rounded mb-4"
					alt="Mountains in the Clouds"
				/>

				<img
					src="https://res.cloudinary.com/drbzxsbop/image/upload/v1694756288/g4_rpwpoj.jpg"
					className="w-100 shadow-1-strong rounded mb-4"
					alt="Boat on Calm Water"
				/>
			</MDBCol>

			<MDBCol lg={4} className="mb-4 mb-lg-0">
				<img
					src="https://res.cloudinary.com/drbzxsbop/image/upload/v1694756287/g5_vvtur1.jpg"
					className="w-100 shadow-1-strong rounded mb-4"
					alt="Waves at Sea"
				/>

				<img
					src="https://res.cloudinary.com/drbzxsbop/image/upload/v1694756298/g6_cpbjzk.jpg"
					className="w-100 shadow-1-strong rounded mb-4"
					alt="sasasas National Park"
				/>
			</MDBCol>
			<MDBCol lg={4} className="mb-4 mb-lg-0">
				<img
					src="https://res.cloudinary.com/drbzxsbop/image/upload/v1694756288/g7_lkcfrw.jpg"
					className="w-100 shadow-1-strong rounded mb-4"
					alt="Waves at Sea"
				/>

				<img
					src="https://res.cloudinary.com/drbzxsbop/image/upload/v1694756290/g8_fafc0a.jpg"
					className="w-100 shadow-1-strong rounded mb-4"
					alt="Yosemite National Park"
				/>
			</MDBCol>
			<MDBCol lg={4} className="mb-4 mb-lg-0">
				<img
					src="https://res.cloudinary.com/drbzxsbop/image/upload/v1694756290/g9_mwbqog.jpg"
					className="w-100 shadow-1-strong rounded mb-4"
					alt="Waves at Sea"
				/>

				<img
					src="https://res.cloudinary.com/drbzxsbop/image/upload/v1694756290/g10_dn6gcp.jpg"
					className="w-100 shadow-1-strong rounded mb-4"
					alt="Yosemite National Park"
				/>
			</MDBCol>
			<MDBCol lg={4} className="mb-4 mb-lg-0">
				<img
					src="https://res.cloudinary.com/drbzxsbop/image/upload/v1694756290/g11_nuoscn.jpg"
					className="w-100 shadow-1-strong rounded mb-4"
					alt="Waves at Sea"
				/>

				<img
					src="https://res.cloudinary.com/drbzxsbop/image/upload/v1694756291/g12_dzgayr.jpg"
					className="w-100 shadow-1-strong rounded mb-4"
					alt="Yosemite National Park"
				/>
			</MDBCol>
		</MDBRow>
	);
}
