import React from 'react'
import '../index.css'
import '../Toggle.css'
import triangle from '../img/triangle.png'
import circle from '../img/circle-dark.png'
import tools from '../img/tools-free/Tools_perspective_matte_s.png'
import code from '../img/code-free/Code_perspective_matte_s.png'
import discount from '../img/discount-free/Discount_perspective_matte_s.png'
import exchange from '../img/exchange-free/Exchange_perspective_matte.png'
import money from '../img/money-free/Money_perspective_matte_s.png'
import computer from '../img/computer-free/Computer_perspective_matte.png'
import calculator from '../img/calculator-free/Calculator_perspective_matte.png'
import key from '../img/key-free/Key_perspective_matte.png'
import clipboard from '../img/clipboard-free/Clipboard_perspective_matte.png'
import padlock from '../img/padlock-free/Padlock_perspective_matte_s.png'
import dashboard from '../img/dashboard-free/Dashboard_perspective_matte.png'
import clock from '../img/clock-free/Clock_perspective_matte.png'

const Toggle = () => {
	const toggle = () => {
		const change = document.getElementById('change')
		const unchange = document.getElementById('unchange')
		if (document.getElementById('toggle').checked) {
			change.classList.remove('hidden')
			change.classList.add('flex')
			unchange.classList.remove('flex')
			unchange.classList.add('hidden')

			document.getElementById('without-sawo').classList.remove('opacity-10')
			document.getElementById('with-sawo').style = 'color:#fcdc60; opacity: 20%'
			document.getElementById('toggleDot').style =
				'transform:translateX(136%); background: white'
		} else {
			change.classList.remove('flex')
			change.classList.add('hidden')
			unchange.classList.remove('hidden')
			unchange.classList.add('flex')

			document.getElementById('without-sawo').classList.add('opacity-10')
			document.getElementById('with-sawo').style = 'color:#fcdc60'
			document.getElementById('toggleDot').style =
				'transform:translateX(0px); background: #fcdc60'
		}
	}

	return (
		<div className="relative w-full">
			<div className="flex relative justify-center w-full mb-12">
				<img
					className="
							background-graphic
							hidden
							lg:block
							absolute
							top-96
							transform
							rotate-45
							left-1/33
							w-20
							opacity-10
							dark:opacity-100
						"
					src={triangle}
					alt="sawo"
				/>

				<label htmlFor="toggle" className="flex items-center justify-center cursor-pointer">
					<div
						className="
								mr-3
								text-secondary-color
								font-gilroy font-extrabold
								h-11
								text-base
								md:text-2xl
								flex
								items-center
								justify-center
							"
						id="with-sawo"
					>
						WITH SAWO
					</div>
					<div className="relative">
						<input type="checkbox" id="toggle" className="sr-only" onChange={toggle} />

						<div className="block bg-black dark:bg-primary-color w-8 h-4 md:w-14 md:h-7 rounded-full"></div>
						<div
							id="toggleDot"
							className="
									dot
									absolute
									left-0.5
									top-0.5
									md:left-1 md:top-1
									bg-secondary-color
									w-3
									h-3
									md:w-5 md:h-5
									rounded-full
									transition
								"
						></div>
					</div>
					<div
						id="without-sawo"
						className="
								ml-3
								text-black
								dark:text-white
								opacity-10
								font-gilroy font-extrabold
								h-11
								text-base
								md:text-2xl
								flex
								items-center
								justify-center
							"
					>
						WITHOUT SAWO
					</div>
				</label>
			</div>
			<div
				className="cards flex flex-wrap justify-evenly font-gilroy font-extrabold"
				id="unchange"
			>
				<div
					className="
							flex
							items-center
							justify-evenly
							xl:justify-between
							w-full
							mb-8
							md:mb-16
							px-2
							md:px-0
							xl:px-64
						"
				>
					<div className="toggle-card relative">
						<div className="toggle-card-body">
							<img
								className="toggle-card-image"
								width="2.5rem"
								height="2.5rem"
								src={tools}
								alt="sawo"
							/>
							<div className="flex-1">
								<h2 id="first" className="toggle-card-text">
									6 Minutes integration onto your platform
								</h2>
							</div>
						</div>
						<img
							className="
									background-graphic
									hidden
									lg:block
									relative
									-top-16
									left-36
									w-14
									opacity-10
									dark:opacity-100
								"
							src={circle}
							alt="sawo"
						/>
					</div>
					<div className="toggle-card">
						<div className="toggle-card-body">
							<img
								className="toggle-card-image"
								width="2.5rem"
								height="2.5rem"
								src={code}
								alt="sawo"
							/>
							<div className="flex-1">
								<h2 id="second" className="toggle-card-text">
									No frontend code customization needed
								</h2>
							</div>
						</div>
					</div>
					<div className="toggle-card">
						<div className="toggle-card-body">
							<img
								className="toggle-card-image"
								width="2.5rem"
								height="2.5rem"
								src={discount}
								alt="sawo"
							/>
							<div className="flex-1">
								<h2 id="third" className="toggle-card-text">
									Decrease bounce rates with efficient customer onboarding
								</h2>
							</div>
						</div>
						<img
							className="
									background-graphic
									hidden
									lg:block
									relative
									-top-64
									-right-40
									w-20
									transform
									rotate-45
									opacity-10
									dark:opacity-100
								"
							src={triangle}
							alt="sawo"
						/>
					</div>
				</div>

				<div className="flex items-center justify-evenly xl:justify-between w-full px-2 md:px-0 xl:px-64">
					<div className="toggle-card">
						<div className="toggle-card-body">
							<img
								className="toggle-card-image"
								width="2.5rem"
								height="2.5rem"
								src={money}
								alt="sawo"
							/>
							<div className="flex-1">
								<h2 id="fourth" className="toggle-card-text">
									Decrease authentication costs by 4 times
								</h2>
							</div>
						</div>
					</div>
					<div className="toggle-card">
						<div className="toggle-card-body">
							<img
								className="toggle-card-image"
								width="2.5rem"
								height="2.5rem"
								src={padlock}
								alt="sawo"
							/>
							<div className="flex-1">
								<h2 id="fifth" className="toggle-card-text">
									Secure your users’ data and trust
								</h2>
							</div>
						</div>
						<img
							className="
									background-graphic
									hidden
									lg:block
									relative
									-top-56
									left-36
									w-20
									opacity-10
									dark:opacity-100
								"
							src={triangle}
							alt="sawo"
						/>
					</div>
					<div className="toggle-card">
						<div className="toggle-card-body">
							<img
								className="toggle-card-image"
								width="2.5rem"
								height="2.5rem"
								src={dashboard}
								alt="sawo"
							/>
							<div className="flex-1">
								<h2 id="sixth" className="toggle-card-text">
									Quick and comfortable user experience
								</h2>
							</div>
						</div>
						<img
							className="
									background-graphic
									hidden
									lg:block
									relative
									top-36
									right-12
									w-12
									opacity-10
									dark:opacity-100
									-z-10
								"
							src={circle}
							alt="sawo"
						/>
					</div>
				</div>
			</div>

			<div
				className="cards flex-wrap justify-evenly font-gilroy font-extrabold hidden"
				id="change"
			>
				<div
					className="
							flex
							items-center
							justify-evenly
							xl:justify-between
							w-full
							mb-8
							md:mb-16
							px-2
							md:px-0
							xl:px-64
						"
				>
					<div className="toggle-card">
						<div className="toggle-card-body">
							<img
								className="toggle-card-image"
								width="2.5rem"
								height="2.5rem"
								src={exchange}
								alt="sawo"
							/>
							<div className="flex-1">
								<h2 id="first" className="toggle-card-text">
									Auth service take days to build
								</h2>
							</div>
						</div>
						<img
							className="
									background-graphic
									hidden
									lg:block
									relative
									-top-16
									left-36
									w-14
									opacity-10
									dark:opacity-100
								"
							src={circle}
							alt="sawo"
						/>
					</div>
					<div className="toggle-card">
						<div className="toggle-card-body">
							<img
								className="toggle-card-image"
								width="2.5rem"
								height="2.5rem"
								src={clock}
								alt="sawo"
							/>
							<div className="flex-1">
								<h2 id="second" className="toggle-card-text">
									Lot of time spent on troubleshooting
								</h2>
							</div>
						</div>
					</div>
					<div className="toggle-card">
						<div className="toggle-card-body">
							<img
								className="toggle-card-image"
								width="2.5rem"
								height="2.5rem"
								src={clipboard}
								alt="sawo"
							/>
							<div className="flex-1">
								<h2 id="third" className="toggle-card-text">
									Confusing and unclear documentation
								</h2>
							</div>
						</div>
						<img
							className="
									background-graphic
									hidden
									lg:block
									relative
									-top-58
									-right-40
									w-20
									transform
									rotate-45
									opacity-10
									dark:opacity-100
								"
							src={triangle}
							alt="sawo"
						/>
					</div>
				</div>

				<div className="flex items-center justify-evenly xl:justify-between w-full px-2 md:px-0 xl:px-64">
					<div className="toggle-card">
						<div className="toggle-card-body">
							<img
								className="toggle-card-image"
								width="2.5rem"
								height="2.5rem"
								src={key}
								alt="sawo"
							/>
							<div className="flex-1 flex flex-col items-center text-center">
								<h2 id="fourth" className="toggle-card-text">
									User data security at risk
								</h2>
							</div>
						</div>
					</div>
					<div className="toggle-card">
						<div className="toggle-card-body">
							<img
								className="toggle-card-image"
								width="2.5rem"
								height="2.5rem"
								alt="sawo"
								src={calculator}
							/>
							<div className="flex-1">
								<h2 id="fifth" className="toggle-card-text">
									Financial overheads, loss of leads, & increase in bounce rates
								</h2>
							</div>
						</div>
						<img
							className="
									background-graphic
									hidden
									lg:block
									relative
									-top-62
									left-36
									w-20
									opacity-10
									dark:opacity-100
								"
							src={triangle}
							alt="sawo"
						/>
					</div>
					<div className="toggle-card">
						<div className="toggle-card-body">
							<img
								className="toggle-card-image"
								width="2.5rem"
								height="2.5rem"
								src={computer}
								alt="sawo"
							/>
							<div className="flex-1">
								<h2 id="sixth" className="toggle-card-text">
									Bad user experience
								</h2>
							</div>
						</div>
						<img
							className="
									background-graphic
									hidden
									lg:block
									relative
									top-36
									right-12
									w-12
									opacity-10
									dark:opacity-100
									-z-10
								"
							src={circle}
							alt="sawo"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Toggle
