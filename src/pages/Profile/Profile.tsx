import Heading, { TextColour } from "../../components/base/Heading/Heading";
import Text, { TextSize } from "../../components/base/Text/Text";
import VerticalSpacing from "../../components/base/VerticalSpacing/VerticalSpacing";
import Header from "../../components/global/Header/Header";
import SplitScreen from "../../components/SplitScreen/SplitScreen";
import TabsContent from "../../components/TabsGallery/TabsContent/TabsContent";
import TabsGallery from "../../components/TabsGallery/TabsGallery";
import ItemsGrid from "./components/ItemsGrid/ItemsGrid";
import ItemTile from "./components/ItemTile/ItemTile";

import "./Profile.css";

interface IProps {
  data: any;
}

const Profile = ({ data }: IProps) => {
  return (
    <div className="profile">
      <span className="profile__fade1"></span>
      <span className="profile__fade2"></span>
      <Header
        linkLabels={[
          { label: "Work", urlPath: "/" },
          { label: "Profile", urlPath: "/profile" },
          // { label: "Testimonials", urlPath: "/testimonials" },
          // { label: "Contact", urlPath: "/contact" },
        ]}
      />
      <SplitScreen
        heading=" Hallo, I'm Eddie"
        copy="I’m a British/German UI/UX Designer and Front-End Developer that loves
          to bridge the gap between amazing design and technical implementation."
        imageURL="profileImage.jpg"
        primaryCTA="See skills overview"
        secondaryCTA="Read Testimonials"
      />
      <VerticalSpacing size="xl" />
      {/* <VerticalSpacing size="xl" />
      <VerticalSpacing size="xl" />
      <VerticalSpacing size="xl" /> */}
      {/* <div className="width-100 row justify-center align-center profile__heading">
        <Heading colour={TextColour.white}>What I help with</Heading>
        <VerticalSpacing size="xl" />
      </div> */}

      <TabsGallery
        data={[
          { label: "All", active: true },
          { label: "Design", active: true },
          { label: "Code", active: true },
        ]}
        heading="What I help with"
      />
      {/* <ItemTile label="Tetsing" subInfo="Decent" /> */}
    </div>
  );
};

export default Profile;
