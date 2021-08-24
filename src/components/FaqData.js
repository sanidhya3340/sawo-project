let idCounter = 0

const faqdata = [
	{
		id: ++idCounter,
		heading: 'How to choose my Plan?',
		text: '<div>Choose your pricing plan according to your current authentication Usage. If yourAuthentication range is between two plans, Always go for the higher plan. (This willsave you from Over-usage charges)</div>',
	},
	{
		id: ++idCounter,
		heading: 'How long does my Freemium last?',
		text: 'Forever',
	},
	{
		id: ++idCounter,
		heading: 'What if I need more than 1 Lakh Authentications?',
		text: '<a href="" style="font-weight: bold;" class=" hover:underline">Contact the Sales Team</a>',
	},
	{
		id: ++idCounter,
		heading: 'Will my authentications be carried forward to next month?',
		text: 'NO :(',
	},
	{
		id: ++idCounter,
		heading: 'Which payment method do you accept?',
		text: '<span>We accept online payments. If you have any questions, please <a href="" style="font-weight: bold;" class=" hover:underline">contact our sales team.</a></span>',
	},
	{
		id: ++idCounter,
		heading: 'What is SAWO FREE plan?',
		text: 'SAWO’s free plan is best suitable for developers and early-stage startups. This plan provides 5000 Free Authentications and does not require any Credit/Debit Card Details.',
	},
	{
		id: ++idCounter,
		heading: 'What happens when you exceed your Usage?',
		text: 'Once you exhaust 5000 Free authentications, You will be charged 1Rs per authentication, Or you will be shifted to the next suitable plan, as per your usage.',
	},
	{
		id: ++idCounter,
		heading: 'Where can I check my Authentication usage?',
		text: '<span>On your<a href="" style="font-weight: bold;" class=" hover:underline"> Dashboard</a></span>',
	},
	{
		id: ++idCounter,
		heading: 'How can I Upgrade or Downgrade my plan?',
		text: `<span>You can Upgrade or Downgrade your plan from your<a href="" style="font-weight: bold;" class="link hover:underline" > Dashboard</a> OR <a href="" style="font-weight: bold;" class="link hover:underline"  > Contact Sales</a></span>`,
	},
]

export default faqdata
