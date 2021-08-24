import React from 'react'
import '../index.css'
import '../PricingCards.css'
import circle from '../img/circle-dark.png'
import triangle from '../img/triangle.png'
import coffee from '../img/Coffee3.png'
import phone from '../img/Phone1.png'

const PricingCards = () => {
	const dev = () => {
		const developers = document.getElementById('developers')
		const company = document.getElementById('company')
		const devBtn = document.getElementById('devBtn')
		const companyBtn = document.getElementById('companyBtn')
		developers.classList.remove('hidden')
		company.classList.add('hidden')
		devBtn.classList.add('btn')
		devBtn.classList.remove('secondary-btn')
		companyBtn.classList.add('secondary-btn')
		companyBtn.classList.remove('btn')
		document.getElementById('toggleDot').style =
			'transform:translateX(0px); transition: all 0.6s ease;'
		document.getElementById('bgDot').style = 'background: black; transition: all 0.6s ease;'
	}

	const team = () => {
		const developers = document.getElementById('developers')
		const company = document.getElementById('company')
		const devBtn = document.getElementById('devBtn')
		const companyBtn = document.getElementById('companyBtn')
		company.classList.remove('hidden')
		developers.classList.add('hidden')
		devBtn.classList.remove('btn')
		devBtn.classList.add('secondary-btn')
		companyBtn.classList.remove('secondary-btn')
		companyBtn.classList.add('btn')
		document.getElementById('toggleDot').style =
			'transform:translateX(124%); transition: all 0.6s ease;'
		document.getElementById('bgDot').style = 'background: #F2F2F2; transition: all 0.6s ease;'
	}

	const toggle = () => {
		if (document.getElementById('toggle').checked) {
			team()
		} else {
			dev()
		}
	}

	return (
		<>
			<div className="md:mt-[168px] mt-[62px] flex mx-auto max-w-[1126px] justify-evenly items-center">
				<button
					id="devBtn"
					onClick={dev}
					className="
						md:w-[334px]
						w-[140px]
						outline-none
						md:text-[20px]
						text-[8px]
						btn
						flex 
						flex-col
						justify-center
						items-center
						font-gilroy font-bold
						md:h-[92px]
						h-[39px]
						
					"
				>
					<p className="md:h-[20px] h-[10px]">SAWO for</p>
					<p>Developers</p>
				</button>
				<div className="relative">
					<label
						htmlFor="toggle"
						className="flex items-center justify-center cursor-pointer"
					>
						<input type="checkbox" id="toggle" className="sr-only" onChange={toggle} />
						<div
							id="bgDot"
							className="block bg-black dark:bg-[#1E1E26] md:w-20 md:h-[42px] w-[33px] h-[18px] rounded-full"
						></div>
						<div
							id="toggleDot"
							className="
								dot
								absolute
								md:left-1
								md:top-[0.3rem]
								top-[0.15rem]
								left-[0.1rem]
								bg-secondary-color
								md:w-8
								md:h-8
								w-[13px]
								h-[13px]
								rounded-full
								transition
							"
						></div>
					</label>
				</div>
				<button
					id="companyBtn"
					onClick={team}
					className="
						md:w-[334px]
						w-[140px]
						md:text-[20px]
						text-[8px]
						secondary-btn
						outline-none
						font-gilroy font-bold
						md:h-[92px]
						h-[39px]
						flex
						flex-col
						justify-center
						items-center
					"
				>
					<p className="md:h-[20px] h-[10px]">SAWO for</p>
					<p className="">Teams/Organizations</p>
				</button>
			</div>
			<div id="developers" className="w-full md:mt-[87px] mt-[27px]">
				<div className="hidden md:flex flex-row items-center justify-evenly relative">
					<img
						className="hidden lg:block absolute -z-10 top-64 left-24 w-10 opacity-20 dark:opacity-100"
						src={circle}
						alt="sawo"
					/>
					<div className="relative">
						<div
							className="
							plan-card plan-card-animate-2
							dark:bg-[#1E1E26]
							lg:lg:w-[341px] w-[250px]
							lg:h-[452px] h-[331px]
						"
						></div>
						<p
							className="
							absolute
							lg:top-[28px]
							top-[25px]
							lg:left-[131px]
							left-[100px]
							text-secondary-color
							font-gilroy font-extrabold
							lg:text-[67px] text-[40px]
						"
						>
							$0
						</p>
						<p
							className="
							absolute
							lg:top-[115px]
							top-[100px]
							lg:left-[107px]
							left-[80px]
							text-secondary-color
							font-gilroy font-extrabold
							lg:text-[30px] text-[20px]
						"
						>
							Free Plan
						</p>
						<ul className="card-ul absolute lg:top-[191px] top-[150px] lg:left-[63px] left-[50px] font-extrabold font-gilroy lg:text-[21px] text-[14px]">
							<li className="li-1 pl-[44px] pb-[104px]">
								<p className="animate-text">No. of auths</p>
								<p className="lg:text-[17px] text-[10px] font-medium font-montserrat pt-[10px]">
									5000
								</p>
							</li>
						</ul>
						<a
							href=""
							className="
							plan-card-animate-2
							absolute
							lg:top-[356px] top-[270px]
							left-[53px]
							btn
							lg:text-[17.4px]
							text-[10px]
							font-gilroy font-bold
							lg:py-[18px]
							py-2
							lg:px-[54px]
							px-8
						"
						>
							Getting Started
						</a>
					</div>
					<div className="relative">
						<div
							className="
							plan-card plan-card-animate-2
							dark:bg-[#1E1E26]
							lg:w-[341px] w-[250px]
							lg:h-[452px] h-[331px]
						"
						></div>
						<p
							className="
							absolute
							lg:top-[28px]
							lg:left-[121px]
							top-[25px]
							left-[98px]
							text-secondary-color
							font-gilroy font-extrabold
							lg:text-[67px] text-[40px]
						"
						>
							$19
						</p>
						<p
							className="
							absolute
							lg:top-[115px] top-[100px]
							lg:left-[88px] left-[70px]
							text-secondary-color
							font-gilroy font-extrabold
							lg:text-[30px] text-[20px]
						"
						>
							Starter Plan
						</p>
						<ul className="card-ul absolute lg:top-[191px] top-[150px] lg:left-[63px] left-[50px] font-extrabold font-gilroy lg:text-[21px] text-[14px]">
							<li className="li-1 pl-[44px] pb-[20px]">
								<p className="animate-text-2">No. of auths</p>
								<p className="lg:text-[17px] text-[10px] font-medium font-montserrat pt-[10px]">
									5000
								</p>
							</li>
							<li className="li-2 pl-[44px]">
								<p className="animate-text-2">Per paisa charges</p>
								<p className="lg:text-[17px] text-[10px] font-medium font-montserrat pt-[10px]">
									$0.00126 cost/auth
								</p>
							</li>
						</ul>
						<a
							href=""
							className="
							plan-card-animate-2
							absolute
							lg:top-[356px] top-[270px]
							left-[53px]
							btn
							lg:text-[17.4px] text-[10px]
							font-gilroy font-bold
							lg:py-[18px] py-2
							lg:px-[54px] px-8
						"
						>
							Getting Started
						</a>
					</div>
				</div>

				<div className="md:hidden flex flex-col items-center justify-evenly ">
					<div className="relative flex">
						<div
							className="
							plan-card-1
							dark:bg-[#1E1E26]
							flex
							justify-center
							items-center
							w-[133px]
							h-[106px]
						"
						>
							<p
								className="
							text-secondary-color
							font-gilroy font-extrabold
							text-[67px] 
						"
							>
								$0
							</p>
						</div>
						<div
							className="
							plan-card-2
							relative
							dark:bg-[#1E1E26]
							flex
							flex-col
							items-center
							w-[164px]
							h-[106px]
						"
						>
							<p
								className="
								mt-4
							text-secondary-color
							font-gilroy font-extrabold
							text-base
						"
							>
								Free Plan
							</p>
							<ul className="card-ul mt-2 mr-12 font-extrabold font-gilroy text-[8px]">
								<li className="li-1 pl-2">
									<p>No. of auths</p>
									<p className="text-[6px] font-medium font-montserrat">5000</p>
								</li>
							</ul>
							<a
								href=""
								className="
							absolute
							-bottom-4
							left-[27%]
							btn
							text-[7px]
							font-gilroy font-bold
							py-[px]
							px-[12px]
						"
							>
								Getting Started
							</a>
						</div>
					</div>

					<div className="mt-12 relative flex">
						<div
							className="
							plan-card-1
							dark:bg-[#1E1E26]
							flex
							justify-center
							items-center
							w-[133px]
							h-[106px]
						"
						>
							<p
								className="
							text-secondary-color
							font-gilroy font-extrabold
							text-[67px]
						"
							>
								$19
							</p>
						</div>
						<div
							className="
							plan-card-2
							relative
							dark:bg-[#1E1E26]
							flex
							flex-col
							items-center
							w-[164px]
							h-[106px]
						"
						>
							<p
								className="
								mt-4
							text-secondary-color
							font-gilroy font-extrabold
							text-base
						"
							>
								Starter Plan
							</p>
							<ul className="card-ul mt-1 mr-12 font-extrabold font-gilroy text-[8px]">
								<li className="li-1 pl-2">
									<p>No. of auths</p>
									<p className="text-[6px] font-medium font-montserrat">5000</p>
								</li>
								<li className="li-2 pl-2 mt-1">
									<p>No. of auths</p>
									<p className="text-[6px] font-medium font-montserrat">5000</p>
								</li>
							</ul>
							<a
								href=""
								className="
							absolute
							-bottom-4
							left-[27%]
							btn
							text-[7px]
							font-gilroy font-bold
							py-[px]
							px-[12px]
						"
							>
								Getting Started
							</a>
						</div>
					</div>
				</div>

				<div className="mt-20 text-center w-full">
					<p className="font-gilroy font-extrabold md:text-[30px] text-base md:mb-[23px] mb-[14px]">
						Still Confused About Which Plan to choose?
					</p>
					<p className="font-montserrat md:text-2xl text-sm md:mb-[37px] mb-4">
						We can help you with that
					</p>
					<button
						href=""
						className="
								secondary-btn
								md:text-[2rem]
								text-base
								bg-black
								dark:bg-white dark:text-black
								hover:bg-black hover:bg-opacity-80 dark:hover:bg-opacity-80
								text-white
								font-gilroy font-bold
								relative
								md:py-8
								py-[18px]
								md:pl-[18px]
								pl-[10px]
								md:pr-[122px]
								pr-[76px]
							"
					>
						Grab a chai with us
						<img
							src={coffee}
							alt="sawo"
							className="absolute md:-top-1 top-[0.1rem] right-2 md:w-24 md:h-24 w-[52px] h-[52px]"
						/>
					</button>
				</div>
			</div>
			<img
				className="
						background-graphic
						hidden
						lg:block
						absolute
						top-[650px]
						transform
						rotate-45
						right-1/33
						w-20
						opacity-20
						dark:opacity-100
						-z-10
					"
				src={triangle}
				alt="sawo"
			/>

			<div id="company" className="hidden w-full md:mt-[87px] mt-[27px] relative z-10">
				<div className="md:flex hidden flex-row items-center justify-evenly">
					<div className="relative">
						<div
							className="
							plan-card plan-card-animate
							dark:bg-[#1E1E26]
							lg:w-[341px] w-[250px]
							lg:h-[452px] h-[331px]
						"
						></div>
						<p
							className="
							absolute
							lg:top-[28px] top-[25px]
							lg:left-[121px] left-[98px]
							text-secondary-color
							font-gilroy font-extrabold
							lg:text-[67px] text-[40px]
						"
						>
							$49
						</p>
						<p
							className="
							absolute
							lg:top-[115px] top-[100px]
							lg:left-[88px] left-[70px]
							text-secondary-color
							font-gilroy font-extrabold
							lg:text-[30px] text-[20px]
						"
						>
							Startup Plan
						</p>
						<ul className="card-ul absolute lg:top-[191px] top-[150px] lg:left-[63px] left-[50px] font-extrabold font-gilroy lg:text-[21px] text-[14px]">
							<li className="li-1 pl-[44px] pb-[20px]">
								<p className="animate-text">No. of auths</p>
								<p className="lg:text-[17px] text-[10px] font-medium font-montserrat pt-[10px]">
									5000
								</p>
							</li>
							<li className="li-2 pl-[44px]">
								<p>Per paisa charges</p>
								<p className="lg:text-[17px] text-[10px] font-medium font-montserrat pt-[10px]">
									$0.00098 cost/auth
								</p>
							</li>
						</ul>
						<a
							href=""
							className="
							plan-card-animate
							absolute
							lg:top-[356px] top-[270px]
							left-[53px]
							btn
							lg:text-[17.4px] text-[10px]
							font-gilroy font-bold
							lg:py-[18px] py-2
							lg:px-[54px] px-8
						"
						>
							Getting Started
						</a>
					</div>

					<div className="relative">
						<div
							className="
							plan-card plan-card-animate-2
							dark:bg-[#1E1E26]
							lg:w-[341px] w-[250px]
							lg:h-[452px] h-[331px]
						"
						></div>
						<p
							className="
							absolute
							lg:top-[28px] top-[25px]
							lg:left-[121px] left-[98px]
							text-secondary-color
							font-gilroy font-extrabold
							lg:text-[67px] text-[40px]
						"
						>
							$99
						</p>
						<p
							className="
							absolute
							lg:top-[115px] top-[100px]
							lg:left-[88px] left-[70px]
							text-secondary-color
							font-gilroy font-extrabold
							lg:text-[30px] text-[20px]
						"
						>
							Company Plan
						</p>
						<ul className="card-ul absolute lg:top-[191px] top-[150px] lg:left-[63px] left-[50px] font-extrabold font-gilroy lg:text-[21px] text-[14px]">
							<li className="li-1 pl-[44px] pb-[20px]">
								<p className="animate-text-2">No. of auths</p>
								<p className="lg:text-[17px] text-[10px] font-medium font-montserrat pt-[10px]">
									125000
								</p>
							</li>
							<li className="li-2 pl-[44px]">
								<p className="animate-text">Per paisa charges</p>
								<p className="lg:text-[17px] text-[10px] font-medium font-montserrat pt-[10px]">
									$0.00792 cost/auth
								</p>
							</li>
						</ul>
						<a
							href=""
							className="
							plan-card-animate-2
							absolute
							lg:top-[356px] top-[270px]
							left-[53px]
							btn
							lg:text-[17.4px] text-[10px]
							font-gilroy font-bold
							lg:py-[18px] py-2
							lg:px-[54px] px-8
						"
						>
							Getting Started
						</a>
					</div>

					<div className="relative">
						<div
							className="
							plan-card
							dark:bg-[#1E1E26]
							lg:w-[341px] w-[250px]
							lg:h-[452px] h-[331px]
						"
						></div>
						<p
							className="
							absolute
							lg:top-[28px] top-[25px]
							lg:left-[152px]
							left-[117px]
							text-secondary-color
							font-gilroy font-extrabold
							lg:text-[67px] text-[40px]
						"
						>
							$
						</p>
						<p
							className="
							absolute
							lg:top-[115px] top-[100px]
							lg:left-[84px]
							left-[75px]
							text-secondary-color
							font-gilroy font-extrabold
							lg:text-[30px] text-[20px]
						"
						>
							Custom Plan
						</p>
						<ul className="card-ul absolute lg:top-[191px] top-[150px] lg:left-[63px] left-[50px] font-extrabold font-gilroy lg:text-[21px] text-[14px]">
							<li className="li-1 pl-[44px] pb-[20px]">
								<p>Custom Pricing</p>
							</li>
						</ul>
						<a
							href=""
							className="
							absolute
							lg:top-[356px] top-[270px]
							left-[53px]
							btn
							lg:text-[17.4px] text-[10px]
							font-gilroy font-bold
							lg:py-[18px] py-2
							lg:px-[66px] px-[45px]
						"
						>
							Talk to Sales
						</a>
					</div>
				</div>

				<div className="md:hidden flex flex-col items-center justify-evenly ">
					<div className=" relative flex">
						<div
							className="
							plan-card-1
							dark:bg-[#1E1E26]
							flex
							justify-center
							items-center
							w-[133px]
							h-[106px]
						"
						>
							<p
								className="
							text-secondary-color
							font-gilroy font-extrabold
							text-[67px]
						"
							>
								$49
							</p>
						</div>
						<div
							className="
							plan-card-2
							relative
							dark:bg-[#1E1E26]
							flex
							flex-col
							items-center
							w-[164px]
							h-[106px]
						"
						>
							<p
								className="
								mt-4
							text-secondary-color
							font-gilroy font-extrabold
							text-base
						"
							>
								Startup Plan
							</p>
							<ul className="card-ul mt-1 mr-12 font-extrabold font-gilroy text-[8px]">
								<li className="li-1 pl-2">
									<p>No. of auths</p>
									<p className="text-[6px] font-medium font-montserrat">5000</p>
								</li>
								<li className="li-2 pl-2 mt-1">
									<p>Per paisa charges</p>
									<p className="text-[6px] font-medium font-montserrat">
										$0.00098 cost/auth
									</p>
								</li>
							</ul>
							<a
								href=""
								className="
							absolute
							-bottom-4
							left-[27%]
							btn
							text-[7px]
							font-gilroy font-bold
							py-[px]
							px-[12px]
						"
							>
								Getting Started
							</a>
						</div>
					</div>

					<div className="mt-12 relative flex">
						<div
							className="
							plan-card-1
							dark:bg-[#1E1E26]
							flex
							justify-center
							items-center
							w-[133px]
							h-[106px]
						"
						>
							<p
								className="
							text-secondary-color
							font-gilroy font-extrabold
							text-[67px]
						"
							>
								$99
							</p>
						</div>
						<div
							className="
							plan-card-2
							relative
							dark:bg-[#1E1E26]
							flex
							flex-col
							items-center
							w-[164px]
							h-[106px]
						"
						>
							<p
								className="
								mt-4
							text-secondary-color
							font-gilroy font-extrabold
							text-base
						"
							>
								Company Plan
							</p>
							<ul className="card-ul mt-1 mr-12 font-extrabold font-gilroy text-[8px]">
								<li className="li-1 pl-2">
									<p>No. of auths</p>
									<p className="text-[6px] font-medium font-montserrat">125000</p>
								</li>
								<li className="li-2 pl-2 mt-1">
									<p>Per paisa charges</p>
									<p className="text-[6px] font-medium font-montserrat">
										$0.00792 cost/auth
									</p>
								</li>
							</ul>
							<a
								href=""
								className="
							absolute
							-bottom-4
							left-[27%]
							btn
							text-[7px]
							font-gilroy font-bold
							py-[px]
							px-[12px]
						"
							>
								Getting Started
							</a>
						</div>
					</div>

					<div className="mt-12 relative flex">
						<div
							className="
							plan-card-1
							dark:bg-[#1E1E26]
							flex
							justify-center
							items-center
							w-[133px]
							h-[106px]
						"
						>
							<p
								className="
							text-secondary-color
							font-gilroy font-extrabold
							text-[67px]
						"
							>
								$
							</p>
						</div>
						<div
							className="
							plan-card-2
							relative
							dark:bg-[#1E1E26]
							flex
							flex-col
							items-center
							w-[164px]
							h-[106px]
						"
						>
							<p
								className="
								mt-4
							text-secondary-color
							font-gilroy font-extrabold
							text-base
						"
							>
								Custom Plan
							</p>
							<ul className="card-ul mt-2 mr-12 font-extrabold font-gilroy text-[8px]">
								<li className="li-1 pl-2">
									<p>Custom Pricing</p>
								</li>
							</ul>
							<a
								href=""
								className="
							absolute
							-bottom-4
							left-[27%]
							btn
							text-[7px]
							font-gilroy font-bold
							py-[px]
							px-[12px]
						"
							>
								Getting Started
							</a>
						</div>
					</div>
				</div>
				<div className="mt-20 text-center w-full">
					<p className="font-gilroy font-extrabold lg:text-[30px] md:text-[25px] text-base md:mb-[23px] mb-[14px]">
						Not sure which plan will fit your company, or want a customised plan?
					</p>
					<p className="font-montserrat md:text-2xl text-sm md:mb-[37px] mb-4">
						We can help you with that
					</p>
					<button
						href=""
						className="
								secondary-btn
								md:text-[2rem]
								text-[18px]
								bg-black
								dark:bg-white  dark:text-black
								hover:bg-black hover:bg-opacity-80 dark:hover:bg-opacity-80
								text-white
								font-gilroy font-bold
								md:py-8
								py-[17px]
								relative
								md:pl-8
								pl-[23px]
								md:pr-[86px]
								pr-[59px]

							"
					>
						Book a Call
						<img
							src={phone}
							alt="sawo"
							className="absolute md:top-[13px] md:right-[11px] top-[12px] right-[10px] md:w-16 md:h-16 w-[40px] h-[40px]"
						/>
					</button>
				</div>
			</div>
		</>
	)
}

export default PricingCards
