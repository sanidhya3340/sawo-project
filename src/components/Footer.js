import React from 'react'
import '../index.css'
import instagram from '../img/icons8-instagram-48.png'
import twitter from '../img/icons8-twitter-48.png'
import linkedin from '../img/icons8-linkedin-48.png'
import facebook from '../img/icons8-facebook-48.png'
import discord from '../img/icons8-discord-48.png'

const Footer = () => {
	return (
		<>
			<div
				className="
							flex
							w-full
							justify-start
							md:justify-between
							pt-14
							md:pt-36
							flex-wrap
							pl-8
							md:px-16
							2xl:pl-24
						"
			>
				<div className="w-52 mb-5 xl:mr-10">
					<h2 className="font-gilroy font-extrabold mb-3 md:mb-10 text-base md:text-2xl ml-0">
						Support
					</h2>
					<p className="text-[9px] md:text-base font-montserrat mb-3 md:mb-10">
						To get in touch with us write to us at <br />
						<a href="#" className="font-bold">
							contact@sawolabs.com
						</a>
					</p>
				</div>
				<div className="w-56 md:w-72 mb-8 md:mb-20 pr-5 lg:mr-10">
					<h2 className="font-gilroy font-extrabold mb-3 md:mb-10 text-base md:text-2xl">
						Quick Links
					</h2>
					<div className="flex justify-between text-brown-color flex-wrap">
						<ul className="quick-links text-[9px] md:text-base subheading font-montserrat">
							<li className="mb-2">
								<a href="#" className="quick-link">
									Qs
								</a>
							</li>
							<li className="mb-2">
								<a href="#" className="quick-link">
									Pricing
								</a>
							</li>
							<li className="mb-2">
								<a href="#" className="quick-link">
									Docs
								</a>
							</li>
							<li className="mb-2">
								<a href="#" className="quick-link">
									Resource
								</a>
							</li>
						</ul>
						<ul className="quick-links text-[9px] md:text-base subheading font-montserrat">
							<li className="mb-2">
								<a href="#" className="quick-link">
									Careers
								</a>
							</li>
							<li className="mb-2">
								<a href="#" className="quick-link">
									Community
								</a>
							</li>
							<li className="mb-2">
								<a href="#" className="quick-link">
									Privacy Policy
								</a>
							</li>
							<li className="mb-2">
								<a href="#" className="quick-link">
									Sponsorship Program
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="Follow-icons w-56 md:w-80 h-1/8 md:h-1/4">
					<h2 className="mb-3 md:mb-4 font-gilroy font-extrabold text-base md:text-2xl">
						Follow Us:
					</h2>
					<div className="flex mb-3 md:mb-12 flex-wrap">
						<a href="#" className="mr-4">
							<img
								src={instagram}
								alt="sawo"
								className="social-media-icon"
								width="1rem"
								height="1rem"
							/>
						</a>
						<a href="#" className="mr-4">
							<img
								src={twitter}
								alt="sawo"
								className="social-media-icon"
								width="1rem"
								height="1rem"
							/>
						</a>
						<a href="#" className="mr-4">
							<img
								src={linkedin}
								alt="sawo"
								className="social-media-icon"
								width="1rem"
								height="1rem"
							/>
						</a>
						<a href="#" className="mr-4">
							<img
								src={facebook}
								alt="sawo"
								className="social-media-icon"
								width="1rem"
								height="1rem"
							/>
						</a>
						<a href="#" className="mr-4">
							<img
								src={discord}
								alt="sawo"
								className="social-media-icon"
								width="1rem"
								height="1rem"
							/>
						</a>
					</div>
					<div>
						<h3 className="mb-3 md:mb-4 text-[9px] md:text-base subheading font-montserrat text-xl">
							Or subscribe to our newsletters
						</h3>
						<form className="flex items-end md:items-start">
							<label>
								<input
									id="email"
									type="email"
									className="
												focus:outline-none
												rounded-sm
												md:rounded-xl
												px-4
												mr-2
												md:mb-4
												w-28
												h-5
												md:h-12 md:w-52
												border border-brown-color
												dark:text-black
												text-[7px]
												md:text-sm
											"
									pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
									onInvalid={() => {
										document
											.getElementById('email')
											.setCustomValidity('Please Enter a valid Email Address')
									}}
									onChange={() => {
										document.getElementById('email').setCustomValidity('')
									}}
									placeholder="Email address"
								/>
							</label>
							<button
								type="submit"
								className="
											btn
											rounded-sm
											md:rounded-xl
											h-5
											w-14
											md:h-12 md:w-28
											font-gilroy font-extrabold
											text-[8px]
											md:text-base
											flex
											items-center
											justify-center
										"
							>
								submit
							</button>
						</form>
					</div>
				</div>
			</div>

			<div className="mt-10 w-full flex flex-col items-center">
				<hr className="border-t border-brown-color w-5/6 mx-10 md:mx-5" />
				<div className="footer flex justify-center h-20 w-full pt-14 pb-20">
					<p className="subheading font-montserrat text-[9px] md:text-sm">
						All Rights Reserved | Sawo Labs 2021
					</p>
				</div>
			</div>
			{/* Ashish: Footer end */}
		</>
	)
}

export default Footer
