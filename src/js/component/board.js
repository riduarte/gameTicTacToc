import React, { useState, useEffect } from "react";
import { calculateWinner } from "./calculador";

export function Board() {
	const [turno, setTurno] = useState(true);
	const [square, setSquare] = useState(["", "", "", "", "", "", "", "", ""]);
	const x = " fa fa-times player1";
	const o = " fa fa-circle-o player2";
	let squareClass = "square d-flex align-items-center justify-content-center";

	useEffect(
		() => {
			calculateWinner(square);
		},
		[turno]
	);

	const completeSquare = e => {
		if (turno == true && squareClass == e.target.className) {
			e.target.className = e.target.className.concat(x);
			setTurno(!turno);
			square[e.target.id] = "x";
		} else if (turno == false && squareClass == e.target.className) {
			e.target.className = e.target.className.concat(o);
			setTurno(!turno);
			square[e.target.id] = "o";
		}
	};

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div
					onClick={e => {
						completeSquare(e);
					}}
					id="0"
					className={squareClass}
				/>
				<div
					onClick={e => {
						completeSquare(e);
					}}
					id="1"
					className={squareClass}
				/>
				<div
					onClick={e => {
						completeSquare(e);
					}}
					id="2"
					className={squareClass}
				/>
			</div>
			<div className="row justify-content-center">
				<div
					onClick={e => {
						completeSquare(e);
					}}
					id="3"
					className={squareClass}
				/>
				<div
					onClick={e => {
						completeSquare(e);
					}}
					id="4"
					className={squareClass}
				/>
				<div
					onClick={e => {
						completeSquare(e);
					}}
					id="5"
					className={squareClass}
				/>
			</div>
			<div className="row justify-content-center">
				<div
					onClick={e => {
						completeSquare(e);
					}}
					id="6"
					className={squareClass}
				/>
				<div
					onClick={e => {
						completeSquare(e);
					}}
					id="7"
					className={squareClass}
				/>
				<div
					onClick={e => {
						completeSquare(e);
					}}
					id="8"
					className={squareClass}
				/>
			</div>
		</div>
	);
}
