import React from 'react'
import '../index.css'
import '../Company.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import SwiperCore, { Pagination, Navigation } from 'swiper/core'
import wordpress from '../img/wordpress-ar21.svg'
import googleCloud from '../img/google_cloud-ar21.svg'
import shopify from '../img/shopify-ar21.svg'
import wix from '../img/wix-ar21.svg'
import oracle from '../img/oracle-ar21.svg'
import azure from '../img/microsoft_azure-ar21.svg'
import salesforce from '../img/salesforce-ar21.svg'
import woo from '../img/WooCommerce_logo.svg'
import zapier from '../img/zapier-ar21.svg'
import docker from '../img/docker-official.svg'
import sap from '../img/sap-ar21.svg'

SwiperCore.use([Pagination, Navigation])

const Companies = () => {
	return (
		<div className="container-fluid text-center w-full md:pt-20">
			<div
				className="
							cta-heading
							px-3
							lg:px-auto
							text-left
							md:text-center
							relative
							font-gilroy font-extrabold
							text-xl
							md:text-3xl
							w-full
							pb-5
							md:pb-10
						"
			>
				{'Building trust , '}
				<br className="block md:hidden" />
				{'one developer at a '}
				<span className="relative cta-heading-end font-gilroy font-extrabold">time</span>
			</div>
			<h3 className="font-montserrat font-medium text-center text-xs lg:text-[18.7px] pb-5 md:pb-10">
				We offer 15+ No-code platforms and Cloud Integrations
			</h3>
			<div className="carousel relative block md:hidden">
				<Swiper
					slidesPerView={1}
					spaceBetween={20}
					loop={true}
					pagination={{
						clickable: false,
					}}
					navigation={false}
					className="mySwiper"
				>
					<SwiperSlide>
						<div className="grid grid-cols-2">
							<div className="company-grid-item">
								<img
									className="company-image"
									width="2.75rem"
									height="1.6rem"
									src={wordpress}
									alt="sawo"
								/>
							</div>
							<div className="company-grid-item border-r-[0.5px]">
								<img
									className="company-image"
									width="2.75rem"
									height="1.6rem"
									src={googleCloud}
									alt="sawo"
								/>
							</div>
							<div className="company-grid-item border-b-[0.5px]">
								<img
									className="company-image"
									width="2.75rem"
									height="1.6rem"
									src={shopify}
									alt="sawo"
								/>
							</div>
							<div className="company-grid-item border-b-[0.5px] border-r-[0.5px]">
								<img
									className="company-image"
									width="2.75rem"
									height="1.6rem"
									src={wix}
									alt="sawo"
								/>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="grid md:hidden grid-cols-2">
							<div className="company-grid-item">
								<img
									className="company-image"
									width="2.75rem"
									height="1.6rem"
									src={oracle}
									alt="sawo"
								/>
							</div>
							<div className="company-grid-item border-r-[0.5px]">
								<img
									className="company-image"
									width="2.75rem"
									height="1.6rem"
									src={azure}
									alt="sawo"
								/>
							</div>
							<div className="company-grid-item border-b-[0.5px]">
								<img
									className="company-image w-10 h-10 md:w-20 md:h-20"
									width="2.75rem"
									height="1.6rem"
									src={salesforce}
									alt="sawo"
								/>
							</div>
							<div className="company-grid-item border-b-[0.5px] border-r-[0.5px]">
								<img
									className="company-image w-10 h-10 md:w-20 md:h-20"
									width="2.5rem"
									height="2.5rem"
									src={sap}
									alt="sawo"
								/>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="grid md:hidden grid-cols-2">
							<div className="company-grid-item">
								<img
									className="company-image w-10 h-10 md:w-20 md:h-20"
									width="2.5rem"
									height="2.5rem"
									src={docker}
									alt="sawo"
								/>
							</div>
							<div className="company-grid-item border-r-[0.5px]">
								<img
									className="company-image w-10 h-10 md:w-24 md:h-24"
									width="2.5rem"
									height="2.5rem"
									src={zapier}
									alt="sawo"
								/>
							</div>
							<div className="company-grid-item border-b-[0.5px]">
								<img
									className="company-image w-10 h-10 md:w-20 md:h-20"
									width="2.5rem"
									height="2.5rem"
									src={woo}
									alt="sawo"
								/>
							</div>
							<div className="and-more font-bold subheading font-montserrat border-[0.5px]">
								<h2 className="text-black dark:text-secondary-color">
									...AND MORE
								</h2>
							</div>
						</div>
					</SwiperSlide>

					{/* <label htmlFor="carousel-3" className="carousel-control prev control-1">
						‹
					</label>
					<label htmlFor="carousel-2" className="carousel-control next control-1">
						›
					</label>
					<label htmlFor="carousel-1" className="carousel-control prev control-2">
						‹
					</label>
					<label htmlFor="carousel-3" className="carousel-control next control-2">
						›
					</label>
					<label htmlFor="carousel-2" className="carousel-control prev control-3">
						‹
					</label>
					<label htmlFor="carousel-1" className="carousel-control next control-3">
						›
					</label> */}
					{/* <ol className="carousel-indicators">
						<li className="inline-block mr-3">
							<label
								htmlFor="carousel-1"
								className="
											carousel-bullet
											cursor-pointer
											block
											text-4xl text-white
											hover:text-blue-700
										"
							>
								•
							</label>
						</li>
						<li className="inline-block mr-3">
							<label
								htmlFor="carousel-2"
								className="
											carousel-bullet
											cursor-pointer
											block
											text-4xl text-white
											hover:text-blue-700
										"
							>
								•
							</label>
						</li>
						<li className="inline-block mr-3">
							<label
								htmlFor="carousel-3"
								className="
											carousel-bullet
											cursor-pointer
											block
											text-4xl text-white
											hover:text-blue-700
										"
							>
								•
							</label>
						</li>
					</ol> */}
				</Swiper>
			</div>
			<div className="hidden md:grid md:grid-cols-4">
				<div className="company-grid-item">
					<img
						className="company-image"
						width="2.75rem"
						height="1.6rem"
						src={wordpress}
						alt="sawo"
					/>
				</div>
				<div className="company-grid-item">
					<img
						className="company-image"
						width="2.75rem"
						height="1.6rem"
						src={googleCloud}
						alt="sawo"
					/>
				</div>
				<div className="company-grid-item">
					<img
						className="company-image"
						width="2.75rem"
						height="1.6rem"
						src={shopify}
						alt="sawo"
					/>
				</div>
				<div className="company-grid-item border-r-[0.5px]">
					<img
						className="company-image"
						width="2.75rem"
						height="1.6rem"
						src={wix}
						alt="sawo"
					/>
				</div>
				<div className="company-grid-item">
					<img
						className="company-image"
						width="2.75rem"
						height="1.6rem"
						src={oracle}
						alt="sawo"
					/>
				</div>
				<div className="company-grid-item">
					<img
						className="company-image"
						width="2.75rem"
						height="1.6rem"
						src={azure}
						alt="sawo"
					/>
				</div>
				<div className="company-grid-item">
					<img
						className="company-image w-10 h-10 md:w-20 md:h-20"
						width="2.75rem"
						height="1.6rem"
						src={salesforce}
						alt="sawo"
					/>
				</div>
				<div className="company-grid-item border-r-[0.5px] border-b-[0.5px]">
					<img
						className="company-image w-10 h-10 md:w-20 md:h-20"
						width="2.5rem"
						height="2.5rem"
						src={sap}
						alt="sawo"
					/>
				</div>
				<div className="company-grid-item border-b-[0.5px]">
					<img
						className="company-image w-10 h-10 md:w-20 md:h-20"
						width="2.5rem"
						height="2.5rem"
						src={docker}
						alt="sawo"
					/>
				</div>
				<div className="company-grid-item border-b-[0.5px]">
					<img
						className="company-image w-10 h-10 md:w-24 md:h-24"
						width="2.5rem"
						height="2.5rem"
						src={zapier}
						alt="sawo"
					/>
				</div>
				<div className="company-grid-item border-b-[0.5px] border-r-[0.5px]">
					<img
						className="company-image w-10 h-10 md:w-20 md:h-20"
						width="2.5rem"
						height="2.5rem"
						src={woo}
						alt="sawo"
					/>
				</div>
				<div className="and-more font-bold subheading font-montserrat border-b-[0.5px] border-r-[0.5px]">
					<h2 className="dark:text-secondary-color">...AND MORE</h2>
				</div>
			</div>
		</div>
	)
}

export default Companies
