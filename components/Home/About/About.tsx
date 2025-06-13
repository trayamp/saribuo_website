import React from 'react'


const About = () => {
  return (
    <div className="pt-16 pb-16">
        {/*define grid*/}
        <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
         {/*first part*/}
         <div>
            <div className="flex-col items-center space-y-4">
                <h1 className="text-s text-gray-900 font-semibold">
                    Programs and Organizations
                </h1>
                <ol className="w-[90%] lg:w-[70%] text-base text-gray-600">
                    <li>HeForShe</li>
                    <li>UN Women</li>
                    <li>UNICEF</li>
                    <li>WHO</li>
                    <li>Equality Now</li>
                    <li>Garbriela Women&apos;s Party List</li>
                    <li>Gender and Development Advocates (GANDA) Filipinas</li>
                </ol>
            </div>
        </div>
         {/*second part*/}
         <div className="flex-col items-center space-y-4"> 
            <h1 className="text-s text-gray-900 font-semibold">Resources</h1>
            <ol className="w-[90%] lg:w-[70%] text-base text-gray-600">
                    <li>Articles</li>
                    <li>Videos</li>
                    <li>saribuo: tinig ng mamamayan</li>
                    <li>Allies of the movement</li>
                </ol>
             </div>
        {/*third part */ }
        <div className="flex-col items-center space-y-0">
            <h1 className="text-s text-gray-900 font-semibold">Far Eastern University - Institute of Technology</h1>
            <ol className="w-[90%] lg:w-[70%] text-base text-gray-600">
                <li>Justin Fernando</li>
            </ol>
        </div>
        </div>
    </div>
  )
}

export default About