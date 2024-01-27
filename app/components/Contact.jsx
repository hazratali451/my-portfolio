"use client";
import Link from "next/link";
import React from "react";
import { BugIcon, CallIcon, Plane } from "./Icon";
import Input from "./Input";

const Contact = () => {
	const [name, setValue] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [message, setMessage] = React.useState("");
	const [checked, setChecked] = React.useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<section className="contact-section">
			<div className="container">
				<div className="section-title">
					<h3 className="title">Get In Touch</h3>
				</div>
				<div className="contact-section-wrapper">
					<div className="contact-wrapper">
						<form onSubmit={handleSubmit}>
							<div className="row g-4">
								<div className="col-md-7">
									<div className="mb-32">
										<Input
											label={"Name"}
											value={name}
											onChange={(e) => setValue(e.target.value)}
										/>
									</div>
									<div>
										<Input
											label={"E-Mail"}
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</div>
								</div>
								<div className="col-md-5">
									<div>
										<Input
											textarea
											placeholder="Your message..."
											label={"Message"}
											value={message}
											onChange={(e) => setMessage(e.target.value)}
										/>
									</div>
								</div>
								<div className="col-md-7 align-self-center">
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
											id="check"
											checked={checked}
											onChange={(e) => setChecked(e.target.checked)}
										/>
										<label
											className="form-check-label m-0"
											for="check"
										>
											I agree with{" "}
											<Link className="text-gradient" href="">
												Terms of Use{" "}
											</Link>
											and{" "}
											<Link className="text-gradient" href="">
												Privacy Policy
											</Link>
										</label>
									</div>
								</div>
								<div className="col-md-5">
									<button type="submit" className="submit-btn">
										<span>Send Message</span>
										<Plane />
									</button>
								</div>
							</div>
						</form>
					</div>
					<div className="contact-info">
						<div className="contact-info-item">
							<div className="icon">
								<CallIcon />
							</div>
							<div className="info">
								<h5 className="title">Call</h5>
								<span className="text">Schedule a call</span>
							</div>
						</div>
						<div className="contact-info-item">
							<div className="icon">
								<BugIcon />
							</div>
							<div className="info">
								<h5 className="title">Bug</h5>
								<span className="text">Report a Bug</span>
							</div>
						</div>
						<div className="contact-info-item">
							<div className="icon">
								<CallIcon />
							</div>
							<div className="info">
								<h5 className="title">Help</h5>
								<span className="text">Ask a question</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
