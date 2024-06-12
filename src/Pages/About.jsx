import person from "../assets/images/about_us/person.jpg"
import parts from "../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="hero min-h-screen bg-white mt-10 mb-10 ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2  relative">
                <img src={person} className="w-3/4  rounded-lg shadow-2xl" />
                <img src={parts} className="w-1/2 rounded-lg shadow-2xl lg:absolute right-5 top-1/2 border-8 border-white" />
                </div>
         
                <div className="lg:w-1/2 p-4 space-y-3">
                <h1 className="text-red-500 font-bold text-xl">About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified <br/> & of experience <br/> in this field</h1>
                    <p className="py-3 text-xl text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-3 text-xl text-gray-400 ">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                    <button className="px-5 py-4 bg-orange-500 text-white rounded-xl">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;