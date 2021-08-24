import { React, useEffect } from 'react'
import '../Faq.css'
import '../index.css'
import faqImage from '../img/faq-free/FAQ_perspective_matte.png'
import Accordion from './Accordion'

//	Faqdata import
import faqdata from './FaqData'

const Faq = () => {
	useEffect(() => {
		const acc = document.getElementsByClassName('accordion')
		for (let i = 0; i < acc.length; i++) {
			acc[i].addEventListener('click', () => {
				acc[i].classList.toggle('active')
				let expand = acc[i].nextElementSibling
				if (expand.style.opacity === '0.8') {
					expand.style = 'opacity:0;max-height:0px;margin-bottom:0px;padding:0px 16px'
					expand.style.transition = '0.5s'
				} else {
					expand.style =
						'opacity:0.8;max-height:200px;margin-bottom:56px;padding:16px 16px'
					expand.style.transition = '0.5s'
				}
			})
		}
	})

	const half = Math.ceil(faqdata.length / 2)
	const firstFaqdata = faqdata.splice(0, half)
	const secondFaqdata = faqdata.splice(-half)

	return (
		<div className="w-full relative">
			<div className="flex justify-center h-16  md:h-28 mt-20 mb-10 md:my-32">
				<h1 className="text-center font-gilroy text-5xl  md:text-8xl font-bold pr-10">
					FAQ
					<span className="relative cta-heading-end font-gilroy font-bold">s</span>
				</h1>
				<img src={faqImage} alt="faq" className="w-16 h-16 md:w-28 md:h-28" />
			</div>
			{/* <div className="font-bold text-white">Sanidhya</div> */}

			<div className="lg:flex visible">
				<div className="lg:w-1/2">
					{firstFaqdata.map(item => (
						<Accordion heading={item.heading} text={item.text} />
					))}
				</div>
				<div className="lg:w-1/2">
					{secondFaqdata.map(item => (
						<Accordion heading={item.heading} text={item.text} />
					))}
				</div>
			</div>

			{/* <div className="flex flex-col lg:flex-row justify-between mx-12 md:mx-24 xl:mx-48">
				<div className="flex flex-col w-full lg:mr-64 z-auto">
					<Accordion
						heading={'How to choose my Plan?'}
						text={
							'Choose your pricing plan according to your current authentication Usage. If yourAuthentication range is between two plans, Always go for the higher plan. (This willsave you from Over-usage charges)'
						}
					/>
					<Accordion heading={'How long does my Freemium last?'} text={'Forever'} />
					<Accordion
						heading={'What if I need more than 1 Lakh Authentications?'}
						text={
							<a href="#" className="font-semibold hover:underline">
								Contact the Sales Team
							</a>
						}
					/>
					<Accordion
						heading={'Will my authentications be carried forward to next month?'}
						text={'NO :('}
					/>
					<Accordion
						heading={'Which payment method do you accept?'}
						text={
							<span>
								We accept online payments. If you have any questions, please{' '}
								<a href="#" className="font-semibold hover:underline">
									contact our sales team.
								</a>
							</span>
						}
					/>
				</div>
				<div className="flex flex-col w-full">
					<Accordion
						heading={'What is SAWO FREE plan?'}
						text={
							'SAWO’s free plan is best suitable for developers and early-stage startups. This plan provides 5000 Free Authentications and does not require any Credit/Debit Card Details.'
						}
					/>
					<Accordion
						heading={'What happens when you exceed your Usage?'}
						text={
							'Once you exhaust 5000 Free authentications, You will be charged 1Rs per authentication, Or you will be shifted to the next suitable plan, as per your usage.'
						}
					/>
					<Accordion
						heading={'Where can I check my Authentication usage?'}
						text={
							<span>
								On your{' '}
								<a href="#" className="font-semibold hover:underline">
									{' '}
									Dashboard{' '}
								</a>
							</span>
						}
					/>
					<Accordion
						heading={'How can I Upgrade or Downgrade my plan?'}
						text={
							<span>
								You can Upgrade or Downgrade your plan from your
								<a href="#" className="font-semibold hover:underline">
									{' '}
									Dashboard{' '}
								</a>{' '}
								OR{' '}
								<a href="#" className="font-semibold hover:underline">
									Contact Sales{' '}
								</a>
							</span>
						}
					/>
				</div> 
			</div>	*/}
		</div>
	)
}

export default Faq
