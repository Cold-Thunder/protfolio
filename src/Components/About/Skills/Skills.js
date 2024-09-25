import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { ExpTitle } from '../Experince/Experince';
import SkillShape from '../SkillShape/SkillShape';

const Comfortable = [
	{ name: "Dart"},
	{ name: 'Flutter'},
	{ name: 'Javascript' },
	{ name: 'ES6' },
	{ name: 'ReactJs' },
	{ name: 'React Native' },
	{ name: 'React Router' },
	{ name: 'Html/Html5' },
	{ name: 'Css/Css3' },
];
const Familiar = [
	{ name: 'Provider' },
	{ name: 'Firebase' },
	{ name: 'Redux' },
	{ name: 'Material UI' },
	{ name: 'C Language' },
	{ name: 'Python'},
	{ name: 'OOP' },
	{ name: 'Responsive UI Design' },
];
const Tools = [
	{ name: 'Git' },
	{ name: 'GitHub' },
	{ name: 'NPM' },
	{ name: 'Netlify' },
	{ name: 'Android Studio'},
	{ name: 'VS Code' },
	{ name: 'Linux' },
];
const Skills = () => {
	return (
		<>
			<Row className='py-3 my-3'>
				<Col lg={4}>
					<ExpTitle>Comfortable</ExpTitle>
					{mapFunc(Comfortable)}
				</Col>
				<Col lg={4}>
					<ExpTitle>Familiar</ExpTitle>

					{mapFunc(Familiar)}
				</Col>
				<Col lg={4}>
					<ExpTitle>Tools</ExpTitle>
					{mapFunc(Tools)}
				</Col>
			</Row>
		</>
	);
};

const mapFunc = (arr) => {
	return arr.map((skill, index) => <SkillShape key={index} skill={skill} />);
};

export default Skills;
