import { PlusIcon } from "@/components/icons";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

interface Props {
  myFiles: File[];
  setMyFiles: any;
  ErrorMassege?: boolean;
}

const UploadVehicleImages = ({ myFiles, setMyFiles, ErrorMassege }: Props) => {

  const removeFile = (file: any) => () => {
    const newFiles = [...myFiles];
    newFiles.splice(newFiles.indexOf(file), 1);
    setMyFiles(newFiles);
  };

  const onDrop = useCallback((acceptedFiles: any) => {
    setMyFiles((prev: any) => {
      return [...prev, acceptedFiles[0]];
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/jpg": [],
    },
    multiple: false,
  });

  return (
    <div className="">
      <h3 className="font-bold text-xl mb-3">
        Upload Vehicle Images <span className="text-red-600">*</span>
      </h3>
      <div className="flex md:flex-row sm:flex-col justify-start items-start space-x-3">
        <div
          {...getRootProps({ onClick: (e) => e.preventDefault() })}
          className="  w-fit"
        >
          <label className="flex justify-center m-auto  w-[153px]  h-[153px] px-4 rounded-lg transition bg-[#D9D9D9]/30 appearance-none cursor-pointer focus:outline-none">
            <span className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <PlusIcon className="fill-primary" />
              </div>
            </span>
            <input {...getInputProps()} className="" />
          </label>
        </div>
        <div className=" space-x-3">
          {myFiles.map((file,i) => (
            <div key={i} className="relative inline-block">
              <button
                onClick={removeFile(file)}
                type="button"
                className="absolute top-0 text-red-600 font-bold right-1 "
              >
                X
              </button>
              <img
                style={{ objectFit: "cover" }}
                className="w-[153px]  h-[153px] rounded-lg  inline-block"
                key={URL.createObjectURL(file)}
                src={URL.createObjectURL(file)}
              />
            </div>
          ))}
        </div>
      </div>
      {ErrorMassege && myFiles.length == 0 && (
        <span className="text-sm text-red-600">please add photos</span>
      )}
    </div>
  );
};

export default UploadVehicleImages;
