import { Loading, SellMainSection } from "@/components";
import React from "react";
//@ts-ignore
import scriptLoader from "react-async-script-loader";

const sellyourCar = ({ isScriptLoaded, isScriptLoadSucceed }: any) => {
  return (
    <div>
      {isScriptLoaded && isScriptLoadSucceed ? (
        <SellMainSection />
      ) : (
        <Loading className="w-20" />
      )}
    </div>
  );
};

export default scriptLoader([
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyBWaj-R2dzFa7fYHE_ITWxjj8DRc6eRp1k&libraries=places",
])(sellyourCar);
