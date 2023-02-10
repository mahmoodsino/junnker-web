import { handelGetAbout, PageDetailsTypes } from "@/helper";
import React, { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import Parser from "react-html-parser";
import { Loading } from "@/components/loading";

const MainSection = () => {
  const { addToast } = useToasts();
  const [about, SetAbout] = useState<PageDetailsTypes>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await handelGetAbout();
      if (res) {
        SetAbout(res.data);
      } else {
        addToast("some thing went wrong !", { appearance: "error" });
      }
      setLoading(false);
    };
    getData();
  }, []);
  return (
    <div className="2xl:container m-auto lg:px-10">
      {!loading ? (
        <div>
          <div className="py-10">
            <img src={about?.img} alt={about?.img} />
          </div>
          <div className="space-y-3">
            <h1 className="font-semibold text-3xl">{about?.title}</h1>
            <p className="text-sm">{Parser(about?.body!)}</p>
          </div>
        </div>
      ) : (
        <Loading className="w-20" />
      )}
    </div>
  );
};

export default MainSection;
