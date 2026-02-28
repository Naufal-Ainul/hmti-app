import Card from "../../components/card/Card";
import { Faq } from "../../components/faq/Faq";
import Hero from "../../components/hero/Hero";
type Mentor = {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  instagram?: string;
  github?: string;
  linkedin?: string;
};

type Hero = {
  title: string;
};

// const mentor: Mentor[] = [
// 	{
// 		id: 1,
// 		role: "Donsen",
// 		name: "Pak Dhika",
// 		imageUrl: "",
//     instagram: "",
//     linkedin: "",
//     github: "",
// 	},

// ];

const Member = () => {
  return (
    <div>
      <Hero title="Member HMTI" />
      <Card
        name="eki"
        role="staff ristek"
        imageUrl="https://res.cloudinary.com/dxjptcgdd/image/upload/v1769555389/Gemini_Generated_Image_u2rvp6u2rvp6u2rv_offhf7.png"
        instagram=""
        github=""
        linkedin=""
      />
      <Card
        name="affan"
        role="staff ristek"
        imageUrl="https://res.cloudinary.com/dxjptcgdd/image/upload/v1769555389/Gemini_Generated_Image_u2rvp6u2rvp6u2rv_offhf7.png"
        instagram=""
        github=""
        linkedin=""
      />
      <Card
        name="zara"
        role="staff ristek"
        imageUrl="https://res.cloudinary.com/dxjptcgdd/image/upload/v1769555389/Gemini_Generated_Image_u2rvp6u2rvp6u2rv_offhf7.png"
        instagram=""
        github=""
        linkedin=""
      />
      <Faq />
    </div>
  );
};

export default Member;
