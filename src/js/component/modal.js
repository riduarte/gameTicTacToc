import React, { useState } from "react";
import { Board } from "./board.js";

export function Modal() {
	const [modalStatus, ChangeModal] = useState(true);
	const [inputPlayer1, setplayer1] = useState("");
	const [inputPlayer2, setplayer2] = useState("");

	return modalStatus ? (
		<div className="container mt-5 ">
			<div className="  col-10 m-auto rounded bg-warning shadow p-1">
				<h1 className="text-center text-dark p-2">Select player</h1>

				<form>
					<div className="input-group input-group-sm ">
						<div className="row m-auto">
							<i
								className="fa fa-times player1"
								aria-hidden="true"
							/>
							<input
								className="input-group-text m-2 "
								type="text"
								onChange={e => setplayer1(e.target.value)}
								placeholder="Please type your name"
							/>

							<i
								className="fa fa-circle-o player2 "
								aria-hidden="true"
							/>
							<input
								className="input-group-text m-2 "
								type="text"
								onChange={e => setplayer2(e.target.value)}
								placeholder="Please type your name"
							/>
						</div>
					</div>
					<div className="row p-2">
						<button
							className="m-auto rounded"
							type="button"
							onClick={() => {
								ChangeModal(false);
							}}>
							Start
						</button>
					</div>
				</form>
			</div>
		</div>
	) : (
		<div>
			<div className="row d-flex justify-content-center bg-warning">
				<span className="m-2 font-weight-bold d-flex align-items-center">
					<i className="fa fa-times player1" aria-hidden="true" />:
					<span className=" p-1 ml-2">
						{inputPlayer1 ? inputPlayer1 : "Player 1"}
					</span>
				</span>
				<span className="m-2 font-weight-bold d-flex align-items-center">
					<i className="fa fa-circle-o player2 " aria-hidden="true" />
					:
					<span className="p-1 ml-2">
						{inputPlayer2 ? inputPlayer2 : "Player 2"}
					</span>
				</span>
			</div>
			<div className="d-flex justify-content-center mt-3">
				<Board />
			</div>
			<div className="row d-flex mt-2 justify-content-center bg-warning">
				<div className="row p-2">
					<button
						className="m-auto"
						type="button"
						onClick={() => {
							ChangeModal(true);
						}}>
						Back
					</button>
				</div>
			</div>
		</div>
	);
}
