import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import videoSource from "../IMAGES/myvideo.mp4";
import HomeCard from "./HomeCard";
import cardsData from "./data";
import ManIcon from "@mui/icons-material/Man";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import KeenSlider from "https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm";
import { Link } from "react-router-dom";


function Home() {
	const keenSliderRef = useRef(null);
	const [showAllCards, setShowAllCards] = useState(false);
	const toggleShowCards = () => {
		setShowAllCards(!showAllCards);
	};

	const numCardsToShow = showAllCards ? cardsData.length : 8;

  useEffect(() => {
		const options = {
			loop: true,
			slides: {
				origin: "center",
				perView: 1.25,
				spacing: 16,
			},
			breakpoints: {
				"(min-width: 1024px)": {
					slides: {
						origin: "auto",
						perView: 2.5,
						spacing: 32,
					},
				},
			},
		};

		// Initialize KeenSlider
		keenSliderRef.current = new KeenSlider("#keen-slider", options);

		const keenSliderPrevious = document.getElementById("keen-slider-previous");
		const keenSliderNext = document.getElementById("keen-slider-next");

		keenSliderPrevious.addEventListener("click", () =>
			keenSliderRef.current.prev()
		);
		keenSliderNext.addEventListener("click", () =>
			keenSliderRef.current.next()
		);

		return () => {
			// Clean up event listeners and destroy KeenSlider when the component unmounts
			keenSliderRef.current.destroy();
			keenSliderPrevious.removeEventListener("click", () =>
				keenSliderRef.current.prev()
			);
			keenSliderNext.removeEventListener("click", () =>
				keenSliderRef.current.next()
			);
		};
	}, []);

	return (
		<>
			<div className="main" initial="initial" animate="animate">
				<div className="semi-container">
					<div className="container">
						<video autoPlay muted loop playsInline id="video-banner">
							<source
								src="https://res.cloudinary.com/drbzxsbop/video/upload/v1694758626/myvideo_lxaxna.mp4"
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>

						<div className="overlay"></div>

						<div id="content">
							<h4>"Start Your Story Here"</h4>
							<h4 style={{ color: "red" }}> With The Best Vibes </h4>
							<div className="bttn-row flex">
								<a className="bttn bttn--primary bg-pink-600">Explore</a>
								<a className="bttn bttn--primary bg-pink-600">Grow</a>
								<a className="bttn bttn--primary bg-pink-600">Success</a>
							</div>
						</div>
					</div>
				</div>

				<div className="popup">
					<section
						className="rounded-3xl shadow-2xl mt-2"
						style={{
							width: "300px",
							position: "absolute",
							top: "160px",
							right: "10px",
							backgroundColor: "#fff",
						}}
					>
						<div className="p-8 text-center sm:p-6 ">
							<p className="text-sm font-extrabold uppercase tracking-widest text-pink-500">
								Admission
							</p>

							<h2 className="mt-6 text-3xl font-bold">ADMISSIONS ARE OPENED</h2>

							<Link
								className="mt-8 inline-block w-full rounded-full bg-pink-600 py-4 text-sm font-bold text-white shadow-xl"
								to="/admission"
							>
								OPEN
							</Link>
						</div>
					</section>
				</div>

				<div
					className="header bg-white"
					style={{
						height: "100%",
					}}
				>
					<img
						src="https://gdcdhami.ac.in/images/demo/courses.jpg"
						alt=""
						style={{
							paddingTop: "20px",
							width: "80%",
							margin: "0 auto",
							marginTop: "260px",
							height: "240px",
						}}
					/>
					<div
						className="card-container"
						style={{
							width: "100%",
							height: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<div
							className="cards2"
							style={{
								paddingTop: "100px",
								display: "grid",
								height: "auto",
							}}
						>
							<div className="card-container">
								<div
									className={`cards2 ${
										showAllCards ? "show-more-cards" : "show-less-cards"
									}`}
								>
									{cardsData.slice(0, numCardsToShow).map((card, index) => (
										<HomeCard
											key={index}
											srcI={card.srcI}
											title={card.title}
											dep={card.dep}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className="show-more-button" style={{ textAlign: "center" }}>
						<button onClick={toggleShowCards}>
							{showAllCards ? "Show Less" : "Show More"}
						</button>
					</div>
				</div>

				<div className="numbers">
					<section className="bg-gray-50 p-10">
						<div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
							<div className="mx-auto max-w-3xl text-center">
								<h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
									PB Siddhartha Current Record
								</h2>

								<p className="mt-4 text-gray-500 sm:text-xl">
									Below is the information about the college analysed data of
									current number. The data represents the Total number of
									student and teacher and courses exist. And also projects the
									Academic acheivements of our campus.
								</p>
							</div>

							<div className="mt-8 sm:mt-14">
								<dl className="grid grid-cols-1 gap-4 sm:grid-cols-4">
									<div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
										<dt className="order-last text-lg font-medium text-gray-500">
											Happy Students <br />{" "}
											<ManIcon
												style={{
													fontSize: "50px",
												}}
											/>
										</dt>

										<dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
											5,248
										</dd>
									</div>

									<div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
										<dt className="order-last text-lg font-medium text-gray-500">
											OUR COURSES <br />
											<MenuBookRoundedIcon
												style={{
													fontSize: "50px",
												}}
											/>
										</dt>

										<dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
											675
										</dd>
									</div>

									<div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
										<dt className="order-last text-lg font-medium text-gray-500">
											OUR TEACHERS <br />{" "}
											<SchoolIcon
												style={{
													fontSize: "50px",
												}}
											/>
										</dt>

										<dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
											248
										</dd>
									</div>

									<div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
										<dt className="order-last text-lg font-medium text-gray-500">
											Award Won <br />{" "}
											<EmojiEventsIcon
												style={{
													fontSize: "50px",
												}}
											/>
										</dt>

										<dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
											24
										</dd>
									</div>
								</dl>
							</div>
						</div>
					</section>
				</div>

				<div className="test mt-36">
					<section>
						<div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
							<div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
								<div className="relative z-10 lg:py-16">
									<div className="relative h-64 sm:h-80 lg:h-full">
										<img
											alt="College Image"
											src="https://scontent.fvga1-2.fna.fbcdn.net/v/t31.18172-8/14444591_297203563995328_8381065143679874093_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=ZYzvh2_8CTwAX_4I5QP&_nc_ht=scontent.fvga1-2.fna&oh=00_AfA3HOGPyP2mxJFixv_c34R0yx9Mcs33SKSc5Du6kB7vEw&oe=6516B378"
											className="absolute inset-0 h-full w-full object-cover"
										/>
									</div>
								</div>

								<div className="relative flex items-center bg-gray-100">
									<span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>
									<div className="p-8 sm:p-16 lg:p-24">
										<h2 className="text-2xl font-bold sm:text-3xl">
											Parvathaneni Brahmayya Siddhartha College of Arts &
											Science
										</h2>

										<p
											className="mt-4 text-gray-600"
											style={{
												fontFamily: "sans-serif",
												fontSize: "1rem",
											}}
										>
											PB Siddhartha College is located in Vijayawada, Andhra
											Pradesh, India. It is a well-known educational institution
											in the city.The college is situated in the Siddhartha
											Nagar area of Vijayawada, which is a prominent educational
											and residential locality in the city. It offers a variety
											of undergraduate and postgraduate courses in arts,
											science, commerce, and other fields. The exact location
											may vary slightly, so it's a good idea to use a map or
											navigation app for precise directions if you plan to visit
											the college.
										</p>

										<Link
											to="/contactus"
											className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
										>
											Get in Touch
										</Link>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>

				<div className="testimonials">
					{/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

					<link
						href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css"
						rel="stylesheet"
					/>

					<link
						href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css"
						rel="stylesheet"
					/>
					<section className="bg-gray-50">
						<div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
							<div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
								<h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
									Checkout Students Reviews
								</h2>

								<div className="mt-8 flex gap-4 lg:mt-0">
									<button
										aria-label="Previous slide"
										id="keen-slider-previous"
										className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="h-5 w-5 rtl:rotate-180"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M15.75 19.5L8.25 12l7.5-7.5"
											/>
										</svg>
									</button>

									<button
										aria-label="Next slide"
										id="keen-slider-next"
										className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
									>
										<svg
											className="h-5 w-5 rtl:rotate-180"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9 5l7 7-7 7"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
											/>
										</svg>
									</button>
								</div>
							</div>

							<div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
								<div id="keen-slider" className="keen-slider">
									<div className="keen-slider__slide">
										<blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
											<div>
												<div className="flex gap-0.5 text-green-500">
													<svg
														className="h-5 w-5"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>

													<svg
														className="h-5 w-5"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>

													<svg
														className="h-5 w-5"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>
												</div>

												<div className="mt-4">
													<p className="text-2xl font-bold text-rose-600 sm:text-3xl">
														Sai Kiran
													</p>

													<p className="mt-4 leading-relaxed text-gray-700">
														Ok kind of college, Faculty are fine..facilities are
														ok..sudents are not futuristic...Girls look like
														lizards in this capmus.. but infrasture is ok..and
														Gym and other things are good.
													</p>
												</div>
											</div>

											<footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
												&mdash; III BCA
											</footer>
										</blockquote>
									</div>

									<div className="keen-slider__slide">
										<blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
											<div>
												<div className="flex gap-0.5 text-green-500">
													<svg
														className="h-5 w-5"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>

													<svg
														className="h-5 w-5"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>

													<svg
														className="h-5 w-5"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>

													<svg
														className="h-5 w-5"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>
												</div>

												<div className="mt-4">
													<p className="text-2xl font-bold text-rose-600 sm:text-3xl">
														Naveen Chuadhary
													</p>

													<p className="mt-4 leading-relaxed text-gray-700">
														The college campus is well-maintained, The college
														organizes seminars, workshops, and guest lectures to
														enhance students' exposure to real-world
														scenariosits focus on character development along
														with academics
													</p>
												</div>
											</div>

											<footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
												&mdash; III BCA
											</footer>
										</blockquote>
									</div>

									<div className="keen-slider__slide">
										<blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
											<div>
												<div className="flex gap-0.5 text-green-500">
													<svg
														className="h-5 w-5"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>

													<svg
														className="h-5 w-5"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>

													<svg
														className="h-5 w-5"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>
												</div>

												<div className="mt-4">
													<p className="text-2xl font-bold text-rose-600 sm:text-3xl">
														Avinash Mudduru
													</p>

													<p className="mt-4 leading-relaxed text-gray-700">
														The college campus is well-maintained, and students
														appreciate the cultural and extracurricular
														activities Overall, PB Siddhartha College is known
														for its quality education and holistic development
														opportunities
													</p>
												</div>
											</div>

											<footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
												&mdash; III BCA
											</footer>
										</blockquote>
									</div>

									<div className="keen-slider__slide">
										<blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
											<div>
												<div className="flex gap-0.5 text-green-500">
													<svg
														className="h-5 w-5"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>

													<svg
														className="h-5 w-5"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>

													<svg
														className="h-5 w-5"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>

													<svg
														className="h-5 w-5"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>

													<svg
														className="h-5 w-5"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>
												</div>

												<div className="mt-4">
													<p className="text-2xl font-bold text-rose-600 sm:text-3xl">
														Dariya Vali
													</p>

													<p className="mt-4 leading-relaxed text-gray-700">
														The library and research facilities at PB Siddhartha
														College are commendable, providing resources for
														in-depth learning I enjoy a sense of camaraderie and
														actively participate in social initiatives. And I
														always used to top the class.. Love attending
														Regular Classes.
													</p>
												</div>
											</div>

											<footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
												&mdash; III BCA
											</footer>
										</blockquote>
									</div>

									<div className="keen-slider__slide">
										<blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
											<div>
												<div className="flex gap-0.5 text-green-500">
													<svg
														className="h-5 w-5"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>

													<svg
														className="h-5 w-5"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>
												</div>

												<div className="mt-4">
													<p className="text-2xl font-bold text-rose-600 sm:text-3xl">
														Surya Teja
													</p>

													<p className="mt-4 leading-relaxed text-gray-700">
														Everything is Normal, Facilities are average,
														Infrastructure is ok, Teaching is also ok, College
														life is average.. One day study is impossibe for
														exams here.. so better to Read before and Teaching
														Staff is sweet..
													</p>
												</div>
											</div>

											<footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
												&mdash; III BCA
											</footer>
										</blockquote>
									</div>

									<div className="keen-slider__slide">
										<blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
											<div>
												<div className="flex gap-0.5 text-green-500">
													<svg
														className="h-5 w-5"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>

													<svg
														className="h-5 w-5"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>
													<svg
														className="h-5 w-5"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>
													<svg
														className="h-5 w-5"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>
												</div>

												<div className="mt-4">
													<p className="text-2xl font-bold text-rose-600 sm:text-3xl">
														Teja Pavan Kumar
													</p>

													<p className="mt-4 leading-relaxed text-gray-700">
														I really Love this collge Since I attend Regularly
														To College I can say Best college Ever. The
														placement cell strives to connect students with job
														opportunities and has a good track record of
														placements
													</p>
												</div>
											</div>

											<footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
												&mdash; III BCA
											</footer>
										</blockquote>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>

				{/* Footeer */}

				{/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.

  Plugins:
    - @tailwindcss/forms
*/}
			</div>
		</>
	);
}

export default Home;
