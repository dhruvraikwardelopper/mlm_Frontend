import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa6";

import Img from "./image";
import Data from "./Data";
function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (<>
    <div className="w-3/4 m-auto mb-2.5">
      <h1 className="text-[45px] font-bold  text-center pt-20">Our Happy Members </h1>
      <div className="flex text-[2vw] text-amber-400 justify-center">
        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
      </div>
      <div className="m-15  justify-center relative z-10">
        <Slider {...settings}>
          {data.map((d) => (<>
       
          <div className="h-[23vw] p-10 w-full flex gap-5 bg-[#addae4] text-white rounded-xl  px-5 items-center">
           <Img image={d.image}/>
           <Data name={d.name} review={d.review} />
           </div>
        
           </>
          ))}
        </Slider>
      </div>
    </div>
  </>)
}



const data = [
  {
    "name": "Priya Sharma",
    "image": "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    "review": "Joining this platform has completely changed my perspective on earning extra income. The support from the community is outstanding and the training materials helped me get started with ease. I see real growth in my network and finances every month."
  },
  {
    "name": "Rohan Mehta",
    "image": "https://media.istockphoto.com/id/2063799507/photo/business-portrait-and-black-man-in-city-outdoor-for-career-or-job-of-businessman-face.webp?a=1&b=1&s=612x612&w=0&k=20&c=lTdFATHVSi9pxSoQ5rZdmEikvruuPVtOMu3-1xenhZA=",
    "review": "The dashboard design is simple and convenient for tracking both my performance and my team’s progress. Payments have always been on time, which builds trust. I appreciate how responsive the support staff is whenever I have a query."
  },
  {
    "name": "Anjali Kumari",
    "image": "https://th.bing.com/th/id/OIP.wUwGw9P6XBSFQnjKtkYvWQHaLH?w=120&h=181&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",
    "review": "I was hesitant about MLM before, but this company is so transparent with their processes. Everything is clearly documented and accessible. The consistent communication helps me stay motivated and updated about the latest opportunities."
  },
  {
    "name": "Amit Patel",
    "image": "https://th.bing.com/th/id/OIP.P7S-fJZEuXSRmElgkckXmQHaHa?w=173&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",
    "review": "The step-by-step training sessions made joining as a newcomer completely hassle-free. I quickly learned not just about the products but also about growing my network effectively. The encouragement from mentors is genuine and ongoing."
  },
  {
    "name": "Sunita Joshi",
    "image": "https://th.bing.com/th/id/OIP.nwX_H_2OberbgGM-Ke5grgHaHa?w=179&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",
    "review": "One of the best features is the timely profit payouts every cycle. I love how innovative and high-quality the product line is! My team is growing every month thanks to the excellent resources available."
  },
  {
    "name": "Rahul Sinha",
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
    "review": "The rewards and incentives given through this program are a true motivator for my performance. Regular webinars help me learn new strategies and grow as a leader. Networking with others in this space is rewarding and educational."
  },
  {
    "name": "Sneha Desai",
    "image": "https://th.bing.com/th/id/OIP.ZhgFZucZcqRg-Cg78dyIhQHaHa?w=187&h=187&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",
    "review": "Personalized mentoring has been the key to my successful journey with this platform. The community is always active in supporting each other’s goals. I feel connected and valued as part of this network."
  },

]

export default MainSlider;