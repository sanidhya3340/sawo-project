import React from 'react'
import '../index.css'

const Accordion = props => {
	return (
		<div className="faq-container mx-12 md:mx-24 xl:mx-48">
			<hr className="border-t-2 border-black dark:border-white w-full mx-10 md:mx-5 " />
			<div className="expand-div  w-full ">
				<span className="accordion">{props.heading}</span>
				<div className="expand-element">
					<div className="" dangerouslySetInnerHTML={{ __html: props.text }}></div>
				</div>
			</div>

			<hr className="border-t-2 border-black dark:border-white w-full mx-10 md:mx-5" />
		</div>
	)
}

export default Accordion
