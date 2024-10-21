export interface Expert {
	name: string;
	title: string;
	description: string;
	src: string;
}

export const experts: Array<Expert> = [
	{
		name: 'Fransisca',
		title: 'CEO',
		description: 'Fransisca is a CEO of a company',
		src: './images/profile/fransisca.png'
	},
	{
		name: 'Kenny',
		title: 'CEO',
		description: 'Kenny is a CEO of a company',
		src: './images/profile/kenny.png'
	}
];
