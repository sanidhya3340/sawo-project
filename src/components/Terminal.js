import { useEffect, React } from 'react'
import '../index.css'
import '../Terminal.css'
import dark from '../img/dark.png'
import dashboard from '../img/dashboard-free/Dashboard_perspective_matte.png'

const Terminal = () => {
	useEffect(() => {
		document.getElementById(
			'terminal-code'
		).innerHTML = `<span class="dark:text-pink-500">window</span>.<span class="dark:text-terminal-blue">addEventListener</span>(‘DomContenteLoaded’,<br class="block lg:hidden">  ( event ) => {
			<br class="block lg:hidden">if (typeof window.CartPops ===<br class="block md:hidden"> ‘unidentified’ ) {
						return;
						<br class="block lg:hidden">}
		CartPops.drawer.on( ‘show’ ,<br class="block md:hidden">  function( drawer ){
							console.log( The <br class="block lg:hidden"> \${drawer._type} 
showed up :)! );
								//  Do Analytics ,<br class="block lg:hidden"> show a 
popup ,
		} ) ;
});`
	})

	return (
		<section
			className="
						w-full
						relative
						terminal-section
						md:pl-10
						lg:pl-14 lg:pr-6
						overflow-hidden
						pt-10
						md:py-40
						lg:py-56 lg:pb-20
						pb-0
						md:pb-10
					"
		>
			<img
				className="
							select-none
							dark:invert
							transform
							scale-150
							lg-mobile:scale-100
							md:scale-125
							lg:scale-100
							background-graphic
							md:w-1/2
							top-48
							absolute
							lg-mobile:top-0 lg-mobile:-right-72
							md:top-20
							-right-60
							md:-right-60
							3xl:right-0
							opacity-20
							-z-10
						"
				src={dark}
				alt="sawo"
			/>
			<div
				className="
							flex flex-col
							md:flex-row
							w-full
							mt-14
							items-center
							mb-32
							md:mb-20 md:pr-10
							justify-between
						"
			>
				<div className="relative order-1 md:order-none w-11/12 md:w-full lg:w-7/12">
					<img
						className="
									hidden
									md:inline-block
									dashboard-img
									absolute
									md:w-28 md:h-28
									lg:w-40 lg:h-40
								"
						width="10rem"
						height="10rem"
						src={dashboard}
						alt="sawo"
					/>
					<div
						className="
									terminal
									bg-clip-padding
									rounded-xl
									flex
									items-center
									justify-center
									mb-3
									md:pt-2
									lg:pt-4
									pb-3
									lg:px-auto
								"
					>
						<div className="terminal-buttons w-38 flex justify-start absolute top-3 left-2">
							<span style={{ backgroundColor: '#fdb5b5' }}></span>
							<span style={{ backgroundColor: '#fcedb2' }}></span>
							<span style={{ backgroundColor: '#98ffa0' }}></span>
						</div>
						<pre
							id="terminal-code"
							className="
										terminal-code
										text-black
										dark:text-white
										w-full
										text-left
										pt-10
										pl-4
										lg:leading-loose
										text-[10px]
										lg:text-sm
										font-bold
									"
						></pre>
					</div>
				</div>
				<h1
					className="
								relative
								w-full
								lg:w-1/2
								text-2xl
								md:text-4xl
								lg:text-5xl lg:pl-10
								text-right
								mb-20
								md:mb-0 md:order-last
								px-3
								lg:px-auto
							"
				>
					<span className="font-gilroy font-extrabold leading-snug">
						{'6 lines '}
						<br className="hidden md:block" />
						{'away from '}
						<br />
					</span>
					<span className="leading-snug relative font-gilroy font-extrabold w-1/2">
						{'simplifying your '}
						<br className="hidden md:block" />
						authentication;
						<span className="terminal-end-after lg:top-32 md:top-24 top-8"></span>
					</span>
				</h1>
			</div>
		</section>
	)
}

export default Terminal
