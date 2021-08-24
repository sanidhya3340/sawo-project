import { useEffect, React } from 'react'

const CtaButtons = () => {
	useEffect(() => {
		document.getElementById('unchanged').addEventListener('mouseenter', () => {
			document.getElementById('unchanged').style =
				'transform: translateX(-100px);transition:  transform 0.3s 0.3s, opacity 0.5s 0.3s;opacity:0'
			document.getElementById('changed').style = 'background-color: #D13F3F'
		})

		document.getElementById('sixDays').addEventListener('mouseleave', () => {
			document.getElementById('unchanged').style =
				'transform: translateX(0);transition: transform 0.3s 0.3s,opacity 0.3s 0.3s;'
		})
	})

	return (
		<div className="w-full mt-20">
			<div className="text-center items-center md:pt-40">
				<h1
					className="
								w-full
								leading-10
								text-xl
								md:text-[42.21px] md:px-10
								font-gilroy font-extrabold
								heading
							"
				>
					{'How much time would you like to spend on '}
					<span className="relative footer-heading-end font-gilroy font-extrabold">
						authentication?
					</span>
				</h1>
				<div className="flex justify-center">
					<div className="flex justify-center items-center py-14 md:pt-28 md:pb-36 w-full">
						<div id="sixDays" className="inline-block relative">
							<button
								id="unchanged"
								className="
											absolute
											top-0
											left-0
											btn
											w-32
											md:w-72
											font-gilroy font-extrabold
											text-[9px]
											md:text-3xl
											py-1
											md:py-6
											transition
										"
							>
								<span className="border-brown-color text-sawo-dark"> 6 Days</span>
							</button>
							<button
								id="changed"
								className="
											btn
											w-32
											md:w-72
											font-gilroy font-extrabold
											text-[9px]
											md:text-2xl
											py-1
											md:py-6
											bg-red-color
											transition
										"
							>
								<span className="border-brown-color text-sawo-dark">
									WE DON'T DO THAT
								</span>
							</button>
						</div>
						<div className="px-5 md:px-14 subheading font-montserrat text-[10px] md:text-[26.8px]">
							or
						</div>
						<button
							className="
										btn
										w-32
										md:w-72
										font-gilroy font-extrabold
										text-[9px]
										md:text-3xl
										py-1
										md:py-6
									"
						>
							<span className="border-brown-color text-sawo-dark">6 Minutes</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CtaButtons
