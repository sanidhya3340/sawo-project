import { React } from 'react'
import '../index.css'
import '../Hero.css'

const Hero = () => {
	document.addEventListener('DOMContentLoaded', () => {
		const h1 = document.querySelector('.type-1')
		const h2 = document.querySelector('.type-2')
		const t1 = document.getElementById('t2')
		const t2 = document.getElementById('t4')

		const TYPING_TIME = 800
		// eslint-disable-next-line no-inner-declarations
		function sleep(ms) {
			return new Promise(resolve => setTimeout(resolve, ms))
		}
		// eslint-disable-next-line no-inner-declarations
		function classList(element) {
			const list = element.classList

			return {
				toggle(c) {
					list.toggle(c)
					return this
				},
				add(c) {
					list.add(c)
					return this
				},
				remove(c) {
					list.remove(c)
					return this
				},
			}
		}
		// eslint-disable-next-line no-inner-declarations
		function showCursor() {
			classList(h1).remove('cursor-at-start').add('cursor-at-end')
			classList(h2).remove('cursor-at-start').add('cursor-at-end')
		}
		// eslint-disable-next-line no-inner-declarations
		function hideCursor() {
			classList(h1).remove('cursor-at-start').remove('cursor-at-end')
			classList(h2).remove('cursor-at-start').remove('cursor-at-end')
		}
		// eslint-disable-next-line no-inner-declarations
		function stopCursorBlink() {
			classList(h1).add('no-blinking-cursor')
			classList(h2).add('no-blinking-cursor')
		}
		// eslint-disable-next-line no-inner-declarations
		function startCursorBlink() {
			classList(h1).remove('no-blinking-cursor').add('cursor-at-end')
			classList(h2).remove('no-blinking-cursor').add('cursor-at-end')
		}
		// eslint-disable-next-line no-inner-declarations
		async function type(word, element, e2) {
			showCursor()
			stopCursorBlink()

			let index = 0,
				currentlyTyped = ''
			// eslint-disable-next-line no-param-reassign
			element.innerText = currentlyTyped
			// eslint-disable-next-line no-param-reassign
			element.style.color = '#fcdc60'
			// eslint-disable-next-line no-param-reassign
			e2.innerText = word

			while (index < word.length) {
				currentlyTyped += word.charAt(index)
				let e2Text = e2.innerHTML
				// eslint-disable-next-line no-param-reassign
				e2.innerHTML = e2Text.slice(1, e2Text.length)
				// eslint-disable-next-line no-param-reassign
				element.innerHTML = currentlyTyped
				index++
				let timeBreak = (TYPING_TIME / word.length).toFixed(2)
				// eslint-disable-next-line no-await-in-loop
				await sleep(timeBreak)
			}

			startCursorBlink()
		}
		// eslint-disable-next-line no-inner-declarations
		async function backspace() {
			hideCursor()
			stopCursorBlink()
			if (document.documentElement.classList.contains('dark')) {
				h1.classList.add('highlight-dark')
				h2.classList.add('highlight-dark')
			} else {
				h1.classList.add('highlight')
				h2.classList.add('highlight')
			}
			// eslint-disable-next-line no-await-in-loop
			await sleep(500)
			// eslint-disable-next-line no-await-in-loop
			await sleep(1000)

			classList(h1).remove('highlight').remove('highlight-dark')
			classList(h2).remove('highlight').remove('highlight-dark')
			classList(h1).add('cursor-at-start').remove('cursor-at-end')
			classList(h2).add('cursor-at-start').remove('cursor-at-end')
			startCursorBlink()
		}
		// eslint-disable-next-line no-inner-declarations
		function insertHiddenText(e, text) {
			e.innerHTML = text
			if (document.documentElement.classList.contains('dark')) {
				e.style.color = '#0A0A16'
			} else {
				e.style.color = '#fff'
			}
		}

		;(async () => {
			const words1 = ['Auth', 'Login']
			const words2 = ['Conversions', 'Revenue']
			let i = 0
			// eslint-disable-next-line no-constant-condition
			while (1) {
				// eslint-disable-next-line no-await-in-loop
				await sleep(2000)
				// eslint-disable-next-line no-await-in-loop
				await backspace()
				insertHiddenText(h1, words1[i])
				insertHiddenText(h2, words2[i])
				startCursorBlink()
				// eslint-disable-next-line no-await-in-loop
				await sleep(300)
				type(words1[i], h1, t1)
				type(words2[i], h2, t2)
				// eslint-disable-next-line no-await-in-loop
				await sleep(300 + TYPING_TIME)
				startCursorBlink()
				i = 1 - i
			}
		})()
		// eslint-disable-next-line no-console
		console.log('DOM is loaded')
	})

	return (
		<>
			<section className="message-section w-full">
				<div className="flex flex-col items-center justify-center w-full h-full">
					<h1
						className="
							select-none
							dark:text-white
							hero-text
							flex flex-col
							items-center
							pt-[188px]
							md:pt-32
							lg:pt-36
							text-[44px] text-center
							md:text-5xl
							mb-10
							md:mb-8
							lg:mb-10
							uppercase
							font-gilroy font-extrabold
						"
					>
						Simplifying
						<br />
						<div>
							<span
								className="
									typewriting
									cursor-at-end
									type-1
									font-gilroy font-extrabold
									text-secondary-color
									inline
								"
							>
								Auth
							</span>
							<span
								id="t2"
								className="text-white inline dark:text-sawo-dark font-gilroy font-extrabold"
							></span>
						</div>
						Increasing
						<div>
							<span
								className="
									inline
									typewriting
									cursor-at-end
									type-2
									font-gilroy font-extrabold
									text-secondary-color
								"
							>
								Conversions
							</span>
							<span
								id="t4"
								className="inline text-white dark:text-sawo-dark font-gilroy font-extrabold"
							></span>
						</div>
					</h1>
					<p
						className="
							subheading
							font-montserrat font-medium
							w-full
							px-5
							md:px-auto
							text-center text-xs
							md:text-base md:leading-tight
						"
					>
						SAWO is the only user-authentication tool that your developers
						<br className="md:hidden block sm-mob:hidden" />
						would crave for.
						<br className="md:block hidden" />
						Our APIs are fast, reliable, integrate onto any
						<br className="md:hidden block sm-mob:hidden" />
						platform, and speak many languages.
						<br className="md:block hidden" />
						What’s more? See your
						<br className="md:hidden block sm-mob:hidden" />
						bounce rates come down by upto 30%
					</p>
					<div className="pt-12 md:block flex flex-col items-center">
						<span className="mr-2 font-montserrat font-medium text-lg mb-3 md:mb-auto">
							Don't believe us?
						</span>
						<a href="/" className="w-52 btn font-gilroy font-bold px-18 md:px-14 py-4">
							Try it for free
						</a>
					</div>
				</div>
				<div
					className="
						flex flex-row
						mx-auto
						items-center
						justify-evenly
						font-bold
						text-[8px]
						md:text-sm
						lg:text-base
						w-full
						lg:w-7/12
						mt-20
						md:mt-32
					"
				>
					<span className="text-center font-montserrat">10,000+ Developers</span>
					<span
						className="
							border-l-2
							font-montserrat
							text-center
							md:py-1
							border-r-2 border-black
							dark:border-white
							px-5
							md:px-12
							lg:px-16
						"
					>
						100+ Communities
					</span>
					<span className="text-center font-montserrat">2000+ Products</span>
				</div>
			</section>
		</>
	)
}

export default Hero
