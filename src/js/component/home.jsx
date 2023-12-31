import React, { useState, useEffect } from "react"
import { render } from "react-dom";
import ControlButtons from "./controlButtons";

//create your first component
const Home = () => {
	const [time, setTime] = useState(0)
	const [isActive, setIsActive] = useState(false);
	const [isPaused, setIsPaused] = useState(true);



	useEffect(() => {
		let interval = null;

		if (isActive && isPaused === false) {
			interval = setInterval(() => {
				setTime(time => time + 1);
			}, 1000);
		} else {
			clearInterval(interval);
		}
		return () => {
			clearInterval(interval);
		};
	}, [isActive, isPaused]);

	const handleStart = () => {
		setIsActive(true);
		setIsPaused(false);
	};

	const handlePauseResume = () => {
		setIsPaused(!isPaused);
	};

	const handleReset = () => {
		setIsActive(false);
		setTime(0);
	};


	return (
		<>
			<div className="mt-5">
			<div className="container d-flex justify-content-center bg-secondary bg-gradient bg-opacity-75">
				<p className="text-light" style={{fontSize: "300px"}}>{(Math.floor(time / 1000)) % 10}</p>
				<p className="text-light" style={{fontSize: "300px"}}>{(Math.floor(time / 100)) % 10}</p>
				<p className="text-light" style={{fontSize: "300px"}}>{(Math.floor(time / 10)) % 10}</p>
				<p className="text-light" style={{fontSize: "300px"}}>{(Math.floor(time / 1)) % 10}</p>
			</div>
			<div className="container d-flex justify-content-center">
				<ControlButtons
					active={isActive}
					isPaused={isPaused}
					handleStart={handleStart}
					handlePauseResume={handlePauseResume}
					handleReset={handleReset}
				/>
			</div>
			</div>
		</>
	);
};

export default Home;