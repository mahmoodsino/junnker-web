import { BaseCard } from "@/components/cards";
import { Loading } from "@/components/loading";
import { Pagination } from "@/components/pagination";
import { BlogsType, handelGetBlog } from "@/helper";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";

interface QueryProps {
  page: number;
}

const MainSecton = () => {
  const { addToast } = useToasts();
  const [blog, setBlog] = useState<BlogsType[]>([]);
  const [loading, setLoading] = useState(false);
  const [blogQueryFilters, setBlogQueryFilters] = useState<QueryProps>({
    page: 1,
  });
  const { replace, query } = useRouter();
  const [totalPages, setTotalPages] = useState<number>(0);
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await handelGetBlog();
      if (res) {
        setTotalPages(res.total);
        setBlog(res.data);
      } else {
        addToast("somt thing went wrong !!", { appearance: "error" });
      }
      setLoading(false);
    };
    getData();
  }, []);

  useEffect(() => {
    if (typeof query.page !== "undefined") {
      setBlogQueryFilters((prev) => {
        return { ...prev, page: +query.page! };
      });
    }
  }, [query.page]);

  const setNext = () => {
    setBlogQueryFilters((prev) => {
      return { ...prev, page: blogQueryFilters.page + 1 };
    });

    let next = blogQueryFilters.page + 1;

    replace({ query: { ...query, page: next } }, undefined, {
      scroll: true,
    });
  };

  const setPrev = () => {
    setBlogQueryFilters((prev) => {
      return { ...prev, page: blogQueryFilters.page - 1 };
    });

    let prev = blogQueryFilters.page - 1;

    replace({ query: { ...query, page: prev } }, undefined, {
      scroll: true,
    });
  };

  return (
    <div className="lg:px-12 2xl:container m-auto">
      {!loading ? (
        <div className="py-10">
          <h1 className="text-center font-bold text-3xl">OUR BLOG</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1   m-auto">
            {blog.map((item, i) => {
              return (
                <div key={i} className="m-auto">
                  <BaseCard blog={item} />
                </div>
              );
            })}
          </div>
          <div className="flex justify-center mt-20">
            <Pagination
              total={totalPages}
              setPrev={setPrev}
              setNext={setNext}
              currentPage={blogQueryFilters.page}
            />
          </div>
        </div>
      ) : (
        <Loading className="w-20" />
      )}
    </div>
  );
};

export default MainSecton;
