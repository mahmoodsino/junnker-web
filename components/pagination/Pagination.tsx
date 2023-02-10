import React from "react";
import { DoubleSmallLeft, DoubleSmallRight } from "../icons";

interface Props {
  currentPage: number;
  setNext: () => void;
  setPrev: () => void;
  total: number;
}

const Pagination = ({ currentPage, setNext, setPrev, total }: Props) => {
  return (
    <div className="flex space-x-4">
      <button disabled={currentPage == 1 ? true : false}>
        <DoubleSmallLeft className="fill-black disabled:fill-[#A9A9A9]" />
      </button>
      <button
        disabled={currentPage == 1 ? true : false}
        onClick={() => setPrev()}
        className="font-semibold text-black disabled:text-[#A9A9A9]"
      >
        Previous
      </button>
      <span className="text-second_gray">Page {currentPage}</span>
      <button
        disabled={currentPage === total ? true : false}
        onClick={() => setNext()}
        className="font-semibold text-black"
      >
        Next
      </button>
      <button disabled={currentPage === total ? true : false}>
        <DoubleSmallRight className="fill-black" />
      </button>
    </div>
  );
};

export default Pagination;
