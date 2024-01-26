export const ContactIcon = () => (
	<svg
		width="25"
		height="24"
		viewBox="0 0 25 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M17.5 7L6.5 18"
			stroke="white"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M11.5 6.13151C11.5 6.13151 17.1335 5.65662 17.9885 6.51153C18.8434 7.36645 18.3684 13 18.3684 13"
			stroke="white"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);

export const ClearIcon = ({ color }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="32"
		height="32"
		viewBox="0 0 32 32"
		fill="none"
	>
		<path
			d="M24 8L8 24"
			stroke={color ? color : "#ffffff"}
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M8 8L24 24"
			stroke={color ? color : "#ffffff"}
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export const HamburgerIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="white"
		width={40}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
		/>
	</svg>
);
