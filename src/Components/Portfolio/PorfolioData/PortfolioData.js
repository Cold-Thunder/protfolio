import kidsAbc from '../../../Images/portfolio/kids_abc.png';
import memeGen from '../../../Images/portfolio/meme-generator.png';
import qrCode from '../../../Images/portfolio/qr-code.png';
import notesKeeper from '../../../Images/portfolio/notes-keeper.png';
import myMotors from '../../../Images/portfolio/myMotors.jpg';
import bmiCalculator from '../../../Images/portfolio/bmi-calculator.png';
import athena from '../../../Images/portfolio/Athena.jpg';
import accesories from '../../../Images/portfolio/rj-accesories.jpg';
import reen from '../../../Images/portfolio/reen.jpg';

const portfolioData = [
	{
		image: kidsAbc,
		title: 'Kids ABC Learning',
		description: `Animated Learning mobile app for kids. So that, they can learn with fun.`,
		technology: [
			'Dart',
			'Flutter',
			'Styled Component',
		],
		link: {
			git: '',
			site: 'https://play.google.com/store/apps/details?id=com.kids_abc&pcampaignid=web_share',
		},
		category: 'frontend',
	},
	{
		image: bmiCalculator,
		title: 'BMI Calculator',
		description: `BMI Calculator is a small Flutter app that can calculator Body Mess Index of a person.`,
		technology: [
			'Dart',
			'Flutter',
		],
		link: {
			git: 'https://github.com/Cold-Thunder/bmi-app',
			site: '',
		},
		category: 'frontend',
	},
	{
		image: memeGen,
		title: 'Meme Generator',
		description: `Meme Generator is that app which can be used for making memes easily.`,
		technology: [
			'Dart',
			'Flutter'
		],
		link: {
			git: 'https://github.com/Cold-Thunder/MemeGenerator_Flutter',
			site: '',
		},
		category: 'frontend',
	},
	{
		image: qrCode,
		title: 'QR Code Scanner and Generator',
		description: `QR Code Scanner is for generating and scanning QR Code.`,
		technology: [
			'Dart',
			'Flutter'
		],
		link: {
			git: 'https://github.com/Cold-Thunder/QR-code-flutter',
			site: '',
		},
		category: 'frontend',
	},
	{
		image: notesKeeper,
		title: 'Notes Keeper',
		description: `In this note keeper app you can add note,edit note, and share note as PDF file.`,
		technology: [
			'JavaScript',
			'React Native'
		],
		link: {
			git: 'https://github.com/Cold-Thunder/react-native-note-keeper',
			site: '',
		},
		category: 'frontend',
	},
	
];

export default portfolioData;
