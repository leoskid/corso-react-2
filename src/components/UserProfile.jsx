import React from "react";
import PropTypes from "prop-types";

function UserProfile(props) {
	return (
		<div>
			<h1>{props.name}</h1>
			<p>Age: {props.age}</p>
			{props.hobbies?.length > 0 && (
				<ul>
					{props.hobbies.map((hobby, index) => (
						<li key={index}>{hobby}</li>
					))}
				</ul>
			)}
		</div>
	);
}
UserProfile.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	hobbies: PropTypes.arrayOf(PropTypes.string),
};

export default UserProfile;
