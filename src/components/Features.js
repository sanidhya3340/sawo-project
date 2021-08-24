import React from 'react'
import '../index.css'
import '../Features.css'
import dark from '../img/dark.png'
import shield from '../img/shield-free/Shield_perspective_matte.png'
import chart from '../img/chart-free/Chart_perspective_matte.png'
import user from '../img/user-free/User_perspective_matte.png'
import cloud from '../img/cloud-free/Cloud_perspective_matte.png'
import faq from '../img/faq-free/FAQ_perspective_matte.png'
import lightBlock from '../img/light block2.png'

const Features = () => {
	return (
		<>
			<section
				id="#features"
				className="
					relative
					flex flex-col
					md:flex-row
					w-full
					md:items-start
					pt-20
					pb-5
					md:pt-40
					lg:pb-20
					md:justify-between
					text-center
					px-5
					md:px-10
					lg:pl-20
				"
			>
				<img
					className="
					select-none
					background-graphic
					dark:invert
					transform
					scale-150
					lg-mobile:scale-100
					md:scale-125
					lg:scale-110
					absolute
					top-60
					lg-mobile:top-12
					md:top-60
					-left-72
					3xl:-left-12
					lg:top-36 lg:block
					md:w-5/12 md:-left-52
					opacity-20
					-z-10
					"
					src={dark}
					alt="sawo"
				/>
				<h1
					className="
						relative
						md:mr-10
						lg:mr-40
						md:w-5/12
						font-gilroy font-extrabold
						mb-10
						md:mb-20
						text-left text-3xl
						md:text-5xl
						lg:text-6xl
					"
				>
					<span className="leading-snug">
						{'It is '}
						<br className="hidden md:block" />
						{'time '}
						<br className="hidden md:block" />
					</span>
					<span className="features-heading-end leading-snug font-gilroy font-extrabold relative">
						we flex
					</span>
				</h1>
				<div
					className="
						features-animation
						grid grid-flow-row
						md:grid-flow-col md:grid-cols-2 md:grid-rows-3
						w-full
						mb-20
						text-left
						gap-5
						md:gap-0
					"
				>
					<figure className="features-card md:-ml-8 lg:-ml-12 lg:mr-8">
						<img src={shield} alt="sawo" className="shield relative md:-top-2 top-0" />
						<figcaption>
							<h1>Biometric Authentication</h1>
							<p className="md:pr-2 lg:pr-14">
								Your security is literally in your hands.
							</p>
						</figcaption>
					</figure>
					<figure className="features-card md:-ml-8 lg:-ml-12 lg:mr-8">
						<img
							src={chart}
							alt="sawo"
							width="4rem"
							height="4rem"
							className="relative chart"
						/>
						<figcaption>
							<h1>Improves Bounce Rate</h1>
							<p className="md:pr-2 lg:pr-12">
								Swift and secure login process to improve customer onboarding by 54%
							</p>
						</figcaption>
					</figure>
					<figure className="features-card lg:pt-5 md:-ml-8 lg:-ml-12 lg:mr-8">
						<img
							src={user}
							alt="sawo"
							width="4rem"
							height="4rem"
							className="relative user"
						/>
						<figcaption>
							<h1>User Convenience</h1>
							<p className="md:pr-2 lg:pr-10">
								Fast, seamless, and hassle-free. What more do your customers need?
							</p>
						</figcaption>
					</figure>
					<figure className="features-card">
						<img
							src={cloud}
							alt="sawo"
							width="4rem"
							height="4rem"
							className="relative md:-top-6 top-0 cloud"
						/>
						<figcaption>
							<h1>Data Autonomy</h1>
							<p className="md:pr-2 lg:pr-12">
								Your data is end-to-end encrypted throughout.
							</p>
						</figcaption>
					</figure>
					<figure className="features-card">
						<img
							src={faq}
							alt="sawo"
							width="4rem"
							height="4rem"
							className="relative faq"
						/>
						<figcaption>
							<h1>Multi-Platform Support</h1>
							<p>
								Easy integration and support with all popular web, cloud, VPN,
								remote access gateway, and more.
							</p>
						</figcaption>
					</figure>
				</div>
				<img
					className="select-none background-graphic background-blocks absolute right-12 top-[27rem] hidden lg:block"
					src={lightBlock}
					alt="sawo"
				/>
			</section>
		</>
	)
}

export default Features
