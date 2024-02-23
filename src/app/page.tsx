import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Card from "./Card";
import Card1 from "./Images/Card1.svg";
import Card2 from "./Images/Card2.svg";
import Card3 from "./Images/Card3.svg";
import HowItWorks from "./HowItWorks";
import CodeJaraTalents from "./CodeJaraTalents";


const Home: React.FC = () => {
  return (
    <main className="bg-[#FAFAFA] mb-[10%]">
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
      <HowItWorks/>
      <CodeJaraTalents/>

    </main>
  );
};

export default Home;
