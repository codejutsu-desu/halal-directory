"use client";

import React, { useState } from "react";
import { Input, Select, Spinner } from "@chakra-ui/react";
import Cards from "./components/Cards";
import { useRestaurantContext } from "./providers/RestaurantContext";
import Pagination from "./components/Pagination";
import paginate from "./libs/pagination";

export default function Home() {
  const { restaurants, loading } = useRestaurantContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  const onPageChange = (page: any) => {
    setCurrentPage(page);
    console.log(currentPage);
  };

  const paginatedPosts = paginate(restaurants, currentPage, pageSize);

  const filteredPaginatedRestaurants = paginatedPosts.filter((restaurant) =>
    restaurant.restaurantname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="text-center text-3xl text-green-500 font-bold">
        MONOS AI TRIAL TASK
      </div>
      <div className="flex justify-center items-center gap-2 w-3/4 m-auto">
        <Input
          placeholder="Search Here"
          my="12px"
          focusBorderColor="green.400"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <Select
          placeholder="Select your location"
          focusBorderColor="green.400"
        />
      </div>
      {loading ? (
        <div className="flex justify-center items-center">
          <Spinner size="xl" color="green.500" />
        </div>
      ) : (
        <Cards filteredPaginatedRestaurants={filteredPaginatedRestaurants} />
      )}
      <Pagination
        items={restaurants.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />
    </div>
  );
}
