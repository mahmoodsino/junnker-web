import { PlusIcon } from "@/components/icons";
import path from "path";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

// interface Props {
//   name: string;
//   register: any;
// }

interface Props {
  file:File,
  setFile:any
}

const UploadTitleImages = ({file,setFile}:Props) => {
  const [paths, setPaths] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      setFile(acceptedFiles[0]);
      setPaths(acceptedFiles.map((file: any) => URL.createObjectURL(file)));
    },
    [setPaths]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/jpg": [],
    },
    multiple: false,
  });

  const removeFile = () => {
    setFile({} as File);
    setPaths([]);
  };

  return (
    <div>
      <div className="flex items-center mb-3">
        <h3 className="font-bold text-xl ">Upload Title Images</h3>
        <span className="text-therd_gray text-sm">(optional)</span>
        {paths.length !== 0 && (
          <button
            type="button"
            onClick={() => removeFile()}
            className="text-red-600 ml-3"
          >
            Delete File
          </button>
        )}
      </div>
      <div
        {...getRootProps({ onClick: (e) => e.preventDefault() })}
        className=" "
      >
        <label className="flex justify-center w-[153px]  h-[153px]  transition rounded-md bg-[#D9D9D9]/30  appearance-none cursor-pointer  focus:outline-none">
          <span className="flex items-center space-x-2">
            {paths?.length !== 0 ? (
              paths.map((path) => (
                <img
                  style={{ objectFit: "cover" }}
                  className="w-[153px]  h-[153px]"
                  key={path}
                  src={path}
                />
              ))
            ) : (
              <div className="flex items-center space-x-2">
                <PlusIcon className="fill-primary" />
              </div>
            )}
          </span>
          <input
            {...getInputProps()}
            className=""
          />
        </label>
      </div>
    </div>
  );
};

export default UploadTitleImages;
