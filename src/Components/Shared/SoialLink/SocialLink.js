import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookSquare,
	faGithub,
	faLinkedin,
	faTwitterSquare,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const Link = (props) => {
	const { icon, url } = props.link;
	return (
		<li>
			<a href={url} target='_blank' rel='noreferrer'>
				<FontAwesomeIcon icon={icon} />
			</a>
		</li>
	);
};

const links = [
	{
		icon: faGithub,
		url: 'https://github.com/Cold-Thunder',
	},
	{
		icon: faLinkedin,
		url: 'https://www.linkedin.com/in/md-hemal-230b6021b/',
	},
	{
		icon: faTwitterSquare,
		url: 'https://x.com/InsideEdge21',
	},
	{
		icon: faInstagram,
		url: 'https://www.instagram.com/coldthunder2023/',
	},
	{
		icon: faFacebookSquare,
		url: 'https://www.facebook.com/profile.php?id=100071112683576',
	},
];
const SocialLink = () => {
	return (
		<Ul>
			{links.map((link, index) => (
				<Link key={index} link={link}></Link>
			))}
		</Ul>
	);
};

const Ul = styled.ul`
	position: absolute;
	right: 15px;
	bottom: 15px;
	z-index: 111;
	color: #fff;
	height: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	a {
		color: #fff;
		font-size: 23px;
		padding: 6px 17px;
		display: inline-block;
		transition: 1s;

		:hover {
			color: #00aeff;
			transform: rotate(360deg);
		}
	}
`;

export default SocialLink;
