import { LocationIcon } from "@/components/icons";
import { Loading } from "@/components/loading";
import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
  geocodeByPlaceId,
} from "react-places-autocomplete";

interface Props {
  lat: {
    lat: number;
    lng: number;
  };
  setLat: any;
  address: string;
  setAddress: any;
  ErrorMassege?: boolean;
}

const PalceApi = ({
  lat,
  setLat,
  address,
  setAddress,
  ErrorMassege,
}: Props) => {
  const handleChange = (value: any) => {
    setAddress(value);
  };

  const handleSelect = (value: any, placeId: any) => {
    geocodeByPlaceId(placeId).then((re) => {
      setAddress(re[0].formatted_address);
    });

    geocodeByAddress(value)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        // console.log("Success", latLng);
        setLat(latLng);
      })
      .catch((error) => console.error("Error", error));
    // setAddress(value);
  };

  return (
    <div>
      <div>
        <PlacesAutocomplete
          value={address}
          onChange={handleChange}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <label htmlFor="" className="flex items-center space-x-1">
                <LocationIcon className="text-second_gray h-10" />
                <span className="font-bold text-lg">Car Location</span>
                <span className="text-red-600">*</span>
              </label>
              <input
                className="w-full outline-none border border-black rounded-md px-3 py-2 "
                {...getInputProps({
                  placeholder: "Enter Address...",
                })}
              />
              <div className="border">
                {loading && (
                  <div>
                    <Loading className="w-10" />
                  </div>
                )}
                {suggestions.map((suggestion, i) => {
                  const style = suggestion.active
                    ? { backgroundColor: "#FA5D3A", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };

                  return (
                    <div key={i}>
                      <div {...getSuggestionItemProps(suggestion, { style })}>
                        {suggestion.description}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
      {ErrorMassege && lat == undefined && (
        <span className="text-sm text-red-600">please select location</span>
      )}
    </div>
  );
};

export default PalceApi;
