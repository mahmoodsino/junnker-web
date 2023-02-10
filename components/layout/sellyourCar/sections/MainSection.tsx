import React, { useCallback, useEffect, useState } from "react";
import {
  AccountIcont,
  EmailIcon,
  LocationIcon,
  MessageIcon,
  MobileIcon,
  PlusIcon,
  SearchIcon,
} from "@/components/icons";
import { BaseInput } from "@/components/input";
import UploadVehicleImages from "./UploadVehicleImages";
import UploadTitleImages from "./UploadTitleImages";
import Select, { StylesConfig } from "react-select";
import { handelGetMakes, handelPostBid } from "@/helper";
import { useToasts } from "react-toast-notifications";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Map from "./Map";
import PalceApi from "./PalceApi";
const json_data = require("../../../../public/years.json");
import * as yup from "yup";
import { Loading } from "@/components/loading";

interface MakeType {
  id: number;
  name: string;
  logo: string;
}

interface selectType {
  value: string;
  label: string;
}

interface IFormInputs {
  fullname: string;
  phone: string;
  // address: string;
  // title: string;
  // title_img: File;
  make_id: number;
  model: number;
  year: string;
  color: string;
  vin: number;
  have_chrome_rims: number;
  have_converter: number;
  is_complete: number;
  is_alluminium_wheels: number;
  place: any;
  notes?: string;
  // vehicle_img:File[]
  email: string;
}

let modifMake: selectType[] = [];
const sellSchema = yup.object().shape({
  fullname: yup.string().required(),
  phone: yup.string().required(),
  vin: yup.string().required(),
  make_id: yup.number(),
  model: yup.string().required(),
  year: yup.string().required(),
  email: yup.string().email(),
  // color: yup.string().required(),
  have_chrome_rims: yup.number().required(),
  have_converter: yup.number().required(),
  is_complete: yup.number().required(),
  is_alluminium_wheels: yup.number().required(),
  // place: yup.mixed().required(),
  notes: yup.string(),
  // title_img: yup.mixed().required(),
});

const MainSection = () => {
  const { addToast } = useToasts();
  const [makes, setMakes] = useState<selectType[]>([]);
  const [lat, setLat] = useState<{
    lat: number;
    lng: number;
  }>();
  const [address, setAddress] = useState("");
  const [titleFile, setTitleFile] = useState<File>({} as File);
  const [myFiles, setMyFiles] = useState<File[]>([]);
  const [errorMassege, setErroeMassege] = useState(false);
  const [loading, setLoading] = useState(false);
  const [havetitle, seHaveTitle] = useState("yes");

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(sellSchema),
  });

  useEffect(() => {
    const getData = async () => {
      const res = await handelGetMakes();
      if (res) {
        let modifiedResponse: MakeType[] = res.data;
        modifiedResponse.map((item) => {
          let makevalue = item.id.toString();
          let makelabel = item.name;
          let newmake = {
            label: makelabel,
            value: makevalue,
          };
          modifMake.push(newmake);
          setMakes(modifMake);
        });
      } else {
        addToast("some thing went wrong !!", { appearance: "error" });
      }
    };
    getData();
  }, []);

  const customStyles: StylesConfig<{
    value: string;
    label: string;
  }> = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px solid #F8F8F8",
      color: state.isSelected ? "#373737" : "#373737",
      // paddingRight: 40,
    }),
    control: (base) => ({
      ...base,
      "&:hover": { borderColor: "787878" },
      border: "1px solid black",
      borderRadius: "7px",
      boxShadow: "none",
      paddingTop: 4,
      paddingBottom: 4,
    }),
  };

  const submit = async (data: IFormInputs) => {
    if (myFiles.length !== 0 && lat?.lat && lat.lng) {
      setLoading(true);
      let formdata = new FormData();
      formdata.append("user[fullname]", data.fullname);
      formdata.append("user[phone]", data.phone);
      formdata.append("user[email]", data.email);
      formdata.append("user[address]", address);
      formdata.append("vehicle[title_img]", titleFile);
      formdata.append("vehicle[make_id]", data.make_id.toString());
      formdata.append("vehicle[model]", data.model.toString());
      formdata.append("vehicle[year]", data.year);
      formdata.append("vehicle[vin]", data.vin.toString());
      formdata.append(
        "vehicle[have_chrome_rims]",
        data.have_chrome_rims.toString()
      );
      formdata.append(
        "vehicle[have_converter]",
        data.have_converter.toString()
      );
      formdata.append("vehicle[is_complete]", data.is_complete.toString());
      formdata.append(
        "vehicle[is_alluminium_wheels]",
        data.is_alluminium_wheels.toString()
      );
      formdata.append("lat", lat?.lat.toString()!);
      formdata.append("lng", lat?.lng.toString()!);
      if (data.notes) {
        formdata.append("notes", data.notes);
      }
      myFiles.map((file) => {
        formdata.append("vehicle[images][]", file);
      });

      const res = await handelPostBid(formdata);
      if (res) {
        addToast("your bid created successfully", { appearance: "success" });
      } else {
        addToast("some thing went wrong !", { appearance: "error" });
      }
      setLoading(false);
    }

    if (myFiles.length == 0 || lat == undefined) {
      setErroeMassege(true);
    }
  };

  return (
    <div className="2xl:container m-auto  sm:px-3 lg:px-12">
      <div className="text-center py-10  space-y-2">
        <h1 className="text-4xl text-center font-bold ">
          GET AN INSTANT OFFER
        </h1>
        <h3 className=" font-semibold text-therd_gray  ">
          If you’re looking to get the most value for your junk vehicle <br />
          let buyers bid on it and get the most out of it
        </h3>
      </div>
      <div className="mt-10">
        <div>
          <h3 className="font-bold text-xl">Do you have a title?</h3>
          <form
          defaultValue={havetitle}
            onChange={(e: any) => seHaveTitle(e.target?.value)}
            className="flex mt-3 space-x-2"
          >
            <label className="radio_label">
              <input defaultChecked value="yes" type="radio" name="title" />
              <span>Yes</span>
            </label>
            <label className="radio_label">
              <input value="no" type="radio" name="title" />
              <span>No</span>
            </label>
          </form>
        </div>
        <form  onSubmit={handleSubmit(submit)}>
          <div className="relative">
            <div className="space-y-10 border-b pb-5">
              <div className="mt-5 relative md:w-[50%] lg:w-[25%] ">
                <label className="font-bold text-xl">Your Car’s VIN</label>
                <input
                  {...register("vin")}
                  placeholder="12345678910111223"
                  type="text"
                  className="w-full  mt-2 block outline-none border border-black px-3 rounded-md py-2"
                />
                <button className="absolute right-3 bottom-2">
                  <SearchIcon />
                </button>
              </div>
              <div className="mt-5 space-y-5">
                <h3 className="font-bold text-xl">Vehicle Information</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  <Controller
                    name="make_id"
                    control={control}
                    render={({ field: { onChange, value, name, ref } }) => {
                      const handleSelectChange = async (
                        selectedOption: {
                          value: string;
                          label: string;
                        } | null
                      ) => {
                        if (selectedOption?.label) {
                        }
                        onChange(selectedOption?.value);
                      };
                      return (
                        <Select
                          theme={(theme) => ({
                            ...theme,
                            borderRadius: 0,
                            colors: {
                              ...theme.colors,
                              primary: "gray",
                            },
                          })}
                          className="w-full  "
                          ref={ref}
                          name={name}
                          placeholder="Toyota"
                          options={makes}
                          //@ts-ignore
                          onChange={handleSelectChange}
                          isSearchable={true}
                          styles={customStyles}
                        />
                      );
                    }}
                  />

                  <input
                    {...register("model")}
                    type="text"
                    className="w-full outline-none border border-black rounded-md px-3 py-2 "
                    placeholder="Enter Car Model"
                  />
                  <Controller
                    name="year"
                    control={control}
                    render={({ field: { onChange, value, name, ref } }) => {
                      const handleSelectChange = async (
                        selectedOption: {
                          value: string;
                          label: string;
                        } | null
                      ) => {
                        if (selectedOption?.label) {
                        }
                        onChange(selectedOption?.label);
                      };
                      return (
                        <Select
                          theme={(theme) => ({
                            ...theme,
                            borderRadius: 0,
                            colors: {
                              ...theme.colors,
                              primary: "gray",
                            },
                          })}
                          className="w-full  "
                          ref={ref}
                          name={name}
                          placeholder="years"
                          options={json_data}
                          //@ts-ignore
                          onChange={handleSelectChange}
                          isSearchable={true}
                          styles={customStyles}
                        />
                      );
                    }}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-5">
                <div>
                  <h3 className="font-bold ">
                    Do the vehicle has aluminum wheels?
                  </h3>
                  <div className="flex mt-3 space-x-2">
                    <label className="radio_label">
                      <input
                        {...register("is_alluminium_wheels")}
                        type="radio"
                        name="is_alluminium_wheels"
                        value={1}
                      />
                      <span>Yes</span>
                    </label>
                    <label className="radio_label">
                      <input
                        {...register("is_alluminium_wheels")}
                        type="radio"
                        name="is_alluminium_wheels"
                        value={0}
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold ">Is the vehicle complete?</h3>
                  <div className="flex mt-3 space-x-2">
                    <label className="radio_label">
                      <input
                        {...register("is_complete")}
                        type="radio"
                        name="is_complete"
                        value={1}
                      />
                      <span>Yes</span>
                    </label>
                    <label className="radio_label">
                      <input
                        {...register("is_complete")}
                        type="radio"
                        name="is_complete"
                        value={0}
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold ">have converter?</h3>
                  <div className="flex mt-3 space-x-2">
                    <label className="radio_label">
                      <input
                        {...register("have_converter")}
                        type="radio"
                        name="have_converter"
                        value={1}
                      />
                      <span>Yes</span>
                    </label>
                    <label className="radio_label">
                      <input
                        {...register("have_converter")}
                        type="radio"
                        name="have_converter"
                        value={0}
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold ">have chrome rims?</h3>
                  <div className="flex mt-3 space-x-2">
                    <label className="radio_label">
                      <input
                        {...register("have_chrome_rims")}
                        type="radio"
                        name="have_chrome_rims"
                        value={1}
                      />
                      <span>Yes</span>
                    </label>
                    <label className="radio_label">
                      <input
                        {...register("have_chrome_rims")}
                        type="radio"
                        name="have_chrome_rims"
                        value={0}
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>
                {/* <div>
                <h3 className="font-bold ">Number of Converters</h3>
                <input
                  placeholder="0"
                  type="number"
                  className="w-[15%]  mt-2 block outline-none border border-black px-3 rounded-md py-2"
                />
              </div> */}
              </div>
            </div>
            <div className="py-10 space-y-5">
              <h3 className="font-bold text-xl">Personal Information</h3>
              <div className="flex sm:flex-col md:flex-row justify-between mt5">
                <div className="space-y-5 md:w-[40%]">
                  <BaseInput
                    name="fullname"
                    register={register}
                    icon={<AccountIcont className="text-second_gray " />}
                    title="Full Name"
                    placeholder="Enter Full Name"
                    type="text"
                    optional={true}
                  />
                  <BaseInput
                    name="phone"
                    register={register}
                    icon={<MobileIcon className="text-second_gray h-10 " />}
                    title="Mobile"
                    placeholder="Enter Mobile Number"
                    type="text"
                    optional={true}
                  />
                  <BaseInput
                    name="email"
                    register={register}
                    icon={<EmailIcon className="text-second_gray h-10" />}
                    title="Email Address"
                    placeholder="Enter Email Address (Optional)"
                    type="text"
                    optional={false}
                  />
                  <BaseInput
                    name="notes"
                    register={register}
                    icon={<MessageIcon className="text-second_gray h-10" />}
                    title="Notes"
                    placeholder="Enter Your notes"
                    type="text"
                    optional={false}
                  />
                  <PalceApi
                    ErrorMassege={errorMassege}
                    address={address!}
                    setAddress={setAddress}
                    lat={lat!}
                    setLat={setLat}
                  />
                </div>
                <div className="md:w-[50%]">
                  <Map lat={lat!} setLat={setLat} />
                </div>
              </div>
            </div>
            <div className=" space-y-5">
              <UploadVehicleImages
                myFiles={myFiles}
                setMyFiles={setMyFiles}
                ErrorMassege={errorMassege}
              />
              <UploadTitleImages file={titleFile} setFile={setTitleFile} />
            </div>
            {!loading ? (
              <button
                type="submit"
                className="border-2 hover:bg-primary/5 transition-all duration-200 border-primary text-primary px-10 my-5 rounded-md py-2 text-lg font-bold"
              >
                submit
              </button>
            ) : (
              <Loading className="w-10" />
            )}
            {havetitle == "no" &&
        <div className="absolute  w-full h-full bottom-0 left-0 bg-white/40"></div>
            }
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainSection;
