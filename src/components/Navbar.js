import { useState, React } from 'react'
import { Link } from 'react-router-dom'
import lightLogo from '../img/logo-light2.png'
import darkLogo from '../img/logo-dark.png'
import sun from '../img/sun.svg'
import moon from '../img/moon.svg'
import '../index.css'

const Navbar = () => {
	const [darkmode, setdarkMode] = useState(false)

	window.onload = () => {
		if (localStorage.getItem('darkmode') === 'true') {
			setdarkMode(true)
			document.getElementById('darkDot').style = 'transform:translateX(120%)'
			document.getElementById('darkDot2').style = 'transform:translateX(120%)'
			document.documentElement.classList.add('dark')
		} else {
			setdarkMode(false)
			document.getElementById('darkDot').style = 'transform:translateX(0px)'
			document.getElementById('darkDot2').style = 'transform:translateX(0px)'
			document.documentElement.classList.remove('dark')
		}
	}

	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		localStorage.setItem('darkmode', 'true')
	}
	if (localStorage.getItem('darkmode') === null) {
		localStorage.setItem('darkmode', 'false')
	}

	const dark = e => {
		if (e.target.checked) {
			document.documentElement.classList.add('dark')
			localStorage.setItem('darkmode', 'true')
			document.getElementById('darkDot').style = 'transform:translateX(120%)'
			document.getElementById('darkDot2').style = 'transform:translateX(120%)'
		} else {
			document.documentElement.classList.remove('dark')
			localStorage.setItem('darkmode', 'false')
			document.getElementById('darkDot').style = 'transform:translateX(0px)'
			document.getElementById('darkDot2').style = 'transform:translateX(0px)'
		}
	}

	const menu = () => {
		const menuOpen = document.getElementById('menu')
		menuOpen.classList.add('transition-all')
		menuOpen.classList.toggle('-top-10')
		menuOpen.classList.toggle('-top-96')
		setTimeout(() => {
			menuOpen.classList.remove('transition-all')
		}, 800)
	}

	return (
		<div className="relative 3xl:w-10/12 3xl:mx-auto w-full">
			<nav className="navbar block text-black dark:text-white absolute top-0 py-8 w-full">
				<div
					className="
						flex
						w-full
						h-full
						relative
						font-gilroy font-bold
						justify-end
						items-center
						md:px-0
						lg:px-16
					"
				>
					<a
						className="block dark:hidden w-28 z-10 md:w-28 lg:w-32 absolute left-5  lg:left-16"
						href="/"
					>
						<img
							className="logoImg"
							src={lightLogo}
							alt="sawo"
							width="12rem"
							height="4rem"
						/>
					</a>
					<a
						className="hidden dark:block w-28 z-10 md:w-28 lg:w-32 absolute left-5  lg:left-16"
						href="/"
					>
						<img
							className="logoImg"
							src={darkLogo}
							alt="sawo"
							width="12rem"
							height="4rem"
						/>
					</a>

					<div className="flex flex-wrap md:hidden absolute right-20">
						<label htmlFor="dark-mode" className="flex items-center cursor-pointer">
							<div className="relative">
								<input
									type="checkbox"
									value={darkmode}
									id="dark-mode"
									className="sr-only"
									onChange={dark}
								/>

								<div
									className="
										flex
										justify-between
										bg-black
										dark:bg-primary-color
										w-12
										h-7
										md:w-14 md:h-7
										rounded-full
									"
								>
									<div className="h-full w-5 flex items-center pl-1">
										<img src={sun} alt="" />
									</div>
									<div className="h-full w-5 flex items-center float-right pr-1">
										<img src={moon} alt="" />
									</div>
								</div>
								<div
									id="darkDot"
									className="
										dot
										absolute
										left-1
										top-1
										md:left-1 md:top-1
										bg-white
										w-5
										h-5
										md:w-5 md:h-5
										rounded-full
										transition
										duration-500
									"
								></div>
							</div>
						</label>
					</div>
					<div
						id="menuIcon"
						onClick={menu}
						className="
							z-20
							flex flex-col
							justify-evenly
							items-end
							absolute
							right-8
							md:hidden
							cursor-pointer
							w-10
							h-8
						"
					>
						<span className="rounded-md bg-secondary-color w-7/12 h-1"></span>
						<span className="rounded-md bg-secondary-color w-6/12 h-1"></span>
						<span className="rounded-md bg-secondary-color w-4/12 h-1"></span>
					</div>

					<ul
						id="menu"
						className="
							nav-items
							lg:ml-64
							absolute
							-top-96
							md:static
							flex flex-col
							items-center
							md:flex-row
							w-full
							justify-center
							md:justify-end
							text-base
							md:text-sm
							bg-gray-50
							md:bg-transparent
							dark:bg-sawo-dark dark:text-gray-200
							pt-20
							pb-14
							md:pt-0 md:pb-0
							
							ml-96
							z-10 md:z-auto
						"
					>
						<li>
							<Link to="/" onClick={menu}>
								Docs
							</Link>
						</li>
						<li>
							<Link to="/" onClick={menu}>
								Features
							</Link>
						</li>
						<li>
							<Link to="/pricing" onClick={menu}>
								Pricing
							</Link>
						</li>
						<li>
							<Link to="/" onClick={menu}>
								Community
							</Link>
						</li>
						<li>
							<div className="hidden flex-wrap md:flex">
								<label
									htmlFor="dark-mode"
									className="flex items-center cursor-pointer"
								>
									<div className="relative">
										<input
											type="checkbox"
											value={darkmode}
											id="dark-mode"
											className="sr-only"
											onChange={dark}
										/>

										<div
											className="
												flex
												justify-between
												bg-black
												dark:bg-primary-color
												w-8
												h-4
												md:w-12 md:h-7
												rounded-full
											"
										>
											<div className="h-full w-5 flex items-center pl-1">
												<img src={sun} alt="" />
											</div>
											<div className="h-full w-5 flex items-center float-right pr-1">
												<img src={moon} alt="" />
											</div>
										</div>
										<div
											id="darkDot2"
											className="
												dot
												absolute
												left-0.5
												top-0.5
												md:left-1 md:top-1
												bg-white
												w-3
												h-3
												md:w-5 md:h-5
												rounded-full
												transition
												duration-500
											"
										></div>
									</div>
								</label>
							</div>
						</li>
						<li className="mt-4 md:mt-0">
							<a
								href="/"
								className="btn font-extrabold text-sm mt-5 md:mt-0 px-10 py-3"
							>
								Register
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
