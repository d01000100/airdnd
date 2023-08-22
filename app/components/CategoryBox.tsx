'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import qs from "query-string";

interface CategoryBoxProps {
  icon: IconType,
  label: string,
  selected?: boolean,
}
 
const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon : Icon, label, selected
}) => {
  const router = useRouter();
  const params = useSearchParams();
  
  const handleClick = useCallback(() => {
    let currentQuery = {};

    /* Recovering all the other parameters that may be on the url already */
    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    /* Adding this category's label to the query params */
    const updatedQuery : any = {
      ...currentQuery,
      category: label
    }

    /* If this category was already on the original query, remove it */
    if (params?.get('category') === label) {
      delete updatedQuery.category
    }

    /* Build the new url with the query */
    const url = qs.stringifyUrl({
      url: "/",
      query: updatedQuery,
    }, {
      skipNull: false
    })

    /* "Redirect" to the url */
    router.push(url);

  }, [params, label, router])

  return <div
    onClick={handleClick}
    className={`
      flex
      flex-col
      items-center
      justify-center
      gap-2
      p-3
      border-b-2
      hover:text-neutral-800
      transition
      cursor-pointer
      ${selected ? "border-b-neutral-800" : "border-transparent"}
      ${selected ? "text-neutral-800" : "text-neutral-500"}
    `}
    >
      <Icon size={26}></Icon>
      <div className="font-medium text-sm">
        {label}
      </div>
    </div>;
}
 
export default CategoryBox;