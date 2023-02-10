import { handelGetBuying, handelGetSelling, PageDetailsTypes } from "@/helper";
import React, { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import Parser from "react-html-parser";
import { Loading } from "@/components/loading";

const MainSection = () => {
  const { addToast } = useToasts();
  const [buying, SetBuying] = useState<PageDetailsTypes>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await handelGetBuying();
      if (res) {
        SetBuying(res.data);
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
            <img src={buying?.img} alt={buying?.img} />
          </div>
          <div className="space-y-3">
            <h1 className="font-semibold text-3xl">{buying?.title}</h1>
            <p className="text-sm">{Parser(buying?.body!)}</p>
          </div>
        </div>
      ) : (
        <Loading className="w-20" />
      )}
    </div>
  );
};

export default MainSection;
