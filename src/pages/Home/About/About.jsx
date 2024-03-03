import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
         <div className="lg:w-1/2 relative">
         <img src={person} className="w-3/4  shadow-2xl rounded-lg" />
         <img src={parts} className="w-1/2 right-5 border-white border-8 top-1/2 shadow-2xl absolute rounded-lg" />
         </div>
          <div className="lg:w-1/2 space-y-5">
            <h3 className="text-3xl text-orange-500 font-bold">About Us</h3>
            <h1 className="text-5xl font-bold">We are Qualified in This Field</h1>
            <p className="py-6">
At our service, your satisfaction is our priority. With a dedicated team committed to prompt and efficient resolutions, we ensure a seamless and delightful experience. From inquiries to issue resolution, we prioritize your time and aim to exceed your expectations with every interaction. Trust us to deliver excellence and build lasting relationships based on reliability and trust.</p>
<p>
At our service, excellence is our standard. From inquiries to resolutions, we're dedicated to providing prompt and personalized assistance. Count on us for efficient solutions tailored to your needs, ensuring your satisfaction every step of the way.
</p>
            <button className="btn bg-orange-500 border-orange-500 text-white font-bold text-lg mt-5">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;