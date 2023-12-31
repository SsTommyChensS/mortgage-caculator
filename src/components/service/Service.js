import * as React from "react"

import useServiceData from "../../services/useServiceData";

import ServiceItem from "./ServiceItem";

//Hero component
const Service = () => {
    const service_info = useServiceData();

    return (
        <div id="service-section" className="service-section h-max md:h-full lg:h-full md:w-full px-8 py-4 relative bg-gray-100">
            <div className="service-section__title my-2 lg:my-4 font-black text-[#27292E] text-3xl md:text-5xl lg:text-7xl md:text-4xl lg:text-6xl text-center leading-loose md:leading-normal lg:leading-loose tracking-wider">
                High Quality Output, <br/>Awesome Service
            </div>
            <div className="service-section__servcies-list m-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-2 h:max lg:h-96 mt-10 mb-10">
                {
                    service_info.allContentfulIconIntroBlock.nodes.map((service, index) => {
                        return (
                            <ServiceItem key={index} icon={service.icon.url} title={service.title} description={service.description}/>
                        )
                    })
                }
            </div>
        </div>
    )
};


export default Service;