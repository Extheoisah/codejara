import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Card from "./Card";
import Card1 from "./Images/Card1.svg";
import Card2 from "./Images/Card2.svg";
import Card3 from "./Images/Card3.svg";
import HowItWorks from "./HowItWorks";
import CodeJaraTalents from "./CodeJaraTalents";
import Question from "./Question";
import TechTalent from "./TechTalent";
import SE from "./Images/SE.svg";
import PD from "./Images/PD.svg";
import PM from "./Images/PM.svg";
import DA from "./Images/DA.svg";
import LD from "./Images/LD.svg";
import BD from "./Images/BD.svg";
import Connect from "./Connect";
import Footer from "./Footer";

const Home: React.FC = () => {
  return (
    <main className=" mb-[]">
      <Navbar />
      <HeroSection />
      <Card
        src={Card1}
        alt="Image 1"
        text1="Bridging the Gap"
        text2="At Codejara, we serve as the bridge that connects clients seeking exceptional talents with the rich and diverse pool of creative minds in Nigeria."
      />

      <Card
        src={Card2}
        alt="Image 1"
        text1="Customised Services"
        text2="Whether you are a client with a specific project in mind or a talent looking for the right opportunity, we offer tailored services to meet your requirements."
      />

      <Card
        src={Card3}
        alt="Image 1"
        text1="End-to-End Coordination"
        text2="We are not just a connection platform; we facilitate the entire project life, ensuring smooth coordination from the initial concept to the final delivery."
      />
      <HowItWorks />
      <CodeJaraTalents />
      <Question />
  
      <div className="bg-[#FAFAFA] pt-[100px] pb-[70px]">
        <div className="text-[#090909] pt-[30px] px-[20px]">
          <p className="text-[32px] font-bold text-center pt-[20px]">
            Tech Talents you can find at Codejara{" "}
          </p>
          <p className="text-[18px] leading-[30px] mt-[10px] font-normal text-center">
            Find the tech talent you need with our versatile expertise. Explore
            our tech stack offerings below:{" "}
          </p>
        </div>
        <TechTalent
          Img={PD}
          alt="alt"
          text1="Product Design"
          text2="Elevate your product's user experience with innovative design concepts and user-centric interfaces crafted by our talented designers"
        />

        <TechTalent
          Img={PM}
          alt="alt"
          text1="Project Management"
          text2="Ensure the successful execution of your projects with our efficient project managers, guiding your ideas from start to finish."
        />

        <TechTalent
          Img={DA}
          alt="alt"
          text1="Data Analysis"
          text2="Leverage the power of data with our skilled analysts, turning raw information into valuable insights to drive informed decision"
        />

        <TechTalent
          Img={LD}
          alt="alt"
          text1="Lightning Development"
          text2="Accelerate your project timelines with our Lightning developers, delivering efficient solutions without compromising on quality."
        />

        <TechTalent
          Img={BD}
          alt="alt"
          text1="Blockchain Development"
          text2="Explore the possibilities of blockchain technology with our expert developers, creating decentralised solutions for apps"
        />
      </div>
      <Connect />
      <Footer/>
    </main>
  );
};

export default Home;
