import { handelGetBlofDetails, PageDetailsTypes } from "@/helper";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import Parser from "react-html-parser";
import { Loading } from "@/components/loading";

const MainSection = () => {
  const { addToast } = useToasts();
  const { query } = useRouter();
  const [blogDetail, setBlogDetails] = useState<PageDetailsTypes>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (query.blogId) {
      setLoading(true);
      const getData = async () => {
        //@ts-ignore
        const res = await handelGetBlofDetails(query.blogId!);
        if (res) {
          setBlogDetails(res.data);
        } else {
          addToast("some thing went wrong !", { appearance: "error" });
        }
        setLoading(false);
      };
      getData();
    }
  }, [query.blogId]);

  return (
    <div className="2xl:container m-auto lg:px-10">
      {!loading ? (
        <div>
          <div className="py-10">
            <img src={blogDetail?.img} alt={blogDetail?.img} />
          </div>
          <div className="space-y-3">
            <h1 className="font-semibold text-3xl">{blogDetail?.title}</h1>
            <p className="text-sm">{Parser(blogDetail?.body!)}</p>
          </div>
        </div>
      ) : (
        <Loading className="w-20" />
      )}
    </div>
  );
};

export default MainSection;
