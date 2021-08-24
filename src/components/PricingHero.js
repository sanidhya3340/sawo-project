import React from 'react'
import '../index.css'
import backgroundCircles from '../img/dark.png'

const PricingHero = () => {
	return (
		<section className="message-section w-full">
			<img
				className="
				hidden
				lg:block
				select-none
				background-graphic
				dark:invert
				absolute
				md:-top-60
				md:-left-36
				-left-32
				-top-40
				md:w-[37rem]
				w-[25rem]
				opacity-20
				z-20
			"
				src={backgroundCircles}
				alt="sawo"
			/>
			<div className="flex flex-col items-center justify-center w-full h-full">
				<h1
					className="
							select-none
							dark:text-white
							hero-text
							flex flex-col
							items-center
							pt-[128px]
							md:pt-[234px]
							text-[26px] text-center
							md:text-5xl
							uppercase
							font-gilroy font-extrabold
						"
				>
					<div>
						Simple
						<span className="text-secondary-color"> Authentication</span>
					</div>
					<div className="md:mt-12 mt-6">
						Simple
						<span className="inline text-secondary-color"> Pricing</span>
					</div>
				</h1>
			</div>
		</section>
	)
}

export default PricingHero
