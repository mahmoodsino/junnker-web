import { Loading } from "@/components/loading";
import { FAQsType, handelGetFaq } from "@/helper";
import React, { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import { useToasts } from "react-toast-notifications";

const MainSection = () => {
  const { addToast } = useToasts();
  const [loading, setLoading] = useState(false);
  const [faq, setFaq] = useState<FAQsType[]>([]);
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await handelGetFaq();
      if (res) {
        setFaq(res.data);
      } else {
        addToast("some thing went wrong !", { appearance: "error" });
      }
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <div className="lg:px-12 py-10">
      <h1 className="font-bold text-3xl text-center">
        Frequently Asked Questions
      </h1>
      {!loading ? (
        <div className="md:w-[80%] lg:w-[70%] m-auto my-10">
          {faq.map((item, i) => {
            return (
              <div key={i} className=" border-b mr-10">
                <Collapsible
                  tabIndex={0}
                  trigger={<h3 className="ml-3 text-lg">{item.question}</h3>}
                >
                  <div className="border-l-4 text-therd_gray border-l-primary pl-5 ml-10 mb-5">
                    <p>{item.answer}</p>
                  </div>
                </Collapsible>
              </div>
            );
          })}
        </div>
      ) : (
        <Loading className="w-20" />
      )}
    </div>
  );
};

export default MainSection;
