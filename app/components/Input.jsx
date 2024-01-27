import { useState } from "react";
import { Eye, EyeSlash } from "./Icon";

const Input = ({
	icon,
	label,
	type,
	eye,
	value,
	textarea,
	height,
	required,
	...rest
}) => {
	const [inputType, setInputType] = useState(type);

	return (
		<div>
			{label && (
				<label className="form-label form--label">
					{label}{" "}
					{required == "true" && <span style={{ color: "red" }}>*</span>}
				</label>
			)}
			<div className="position-relative">
				{textarea ? (
					<textarea
						required
						className="form-control form--control"
						type={inputType ? inputType : "text"}
						{...rest}
						value={value}
						style={{ height: height ? height : "" }}
					></textarea>
				) : (
					<>
						<input
							required={required}
							className={`form-control form--control ${
								type === "password" ? "password" : ""
							}`}
							type={inputType ? inputType : "text"}
							{...rest}
							value={value}
							style={{
								position: "relative",
								zIndex: "3",
							}}
						/>
					</>
				)}
				{icon && <span className="input-left-icon">{icon}</span>}
				{type === "password" &&
					(inputType === "password" ? (
						<span
							className="eye"
							onClick={() => {
								if (inputType === "password") {
									setInputType("text");
								} else {
									setInputType("password");
								}
							}}
						>
							<Eye />
						</span>
					) : (
						<span
							className="eye"
							onClick={() => {
								if (inputType === "password") {
									setInputType("text");
								} else {
									setInputType("password");
								}
							}}
						>
							<EyeSlash />
						</span>
					))}
			</div>
		</div>
	);
};

export default Input;
