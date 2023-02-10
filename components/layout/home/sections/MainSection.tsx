import { Loading } from "@/components/loading";
import { handelGetHome, HomePageAtom, HomePageType } from "@/helper";
import React, { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { useRecoilState } from "recoil";
import AboutJunkkers from "./AboutJunkkers";
import Blog from "./Blog";
import JoinSellers from "./JoinSellers";
import TopSection from "./TopSection";
import WhyJunkkers from "./WhyJunkkers";

const MainSection = () => {
  const { addToast } = useToasts();
  const [homePage, setHomePage] = useRecoilState(HomePageAtom);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await handelGetHome();
      if (res) {
        setHomePage(res.data);
      } else {
        addToast("some thing went wrong", { appearance: "error" });
      }
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <div className=" 2xl:container m-auto">
      {!loading ? (
        <div>
          <TopSection GoogleReviews={homePage?.google_reviews!} />
          <JoinSellers />
          <AboutJunkkers />
          <WhyJunkkers FAQs={homePage?.faqs!} />
          <Blog
            Blogs={homePage?.articles!}
            appstore_link={homePage?.appstore_link!}
            playstore_link={homePage?.playstore_link!}
          />
        </div>
      ) : (
        <Loading className="w-32" />
      )}
    </div>
  );
};

export default MainSection;
