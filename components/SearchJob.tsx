"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchJob = () => {
  const router = useRouter();
  const [searchPrompt, setSearchPrompt] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (searchPrompt.trim()) {
      // Redirect to searchResult page with query parameters
      router.push(`/searchResult?searchPrompt=${searchPrompt}&location=${location}`);
    }
  };

  return (
    <div className="">
        <h1 className="section-text">Search Job by city</h1>
      <form className="w-full searchbar" 
      onSubmit={handleSearch}
      >
        <div className="searchbar flex-1">
          <input
            value={searchPrompt}
            type="text"
            placeholder="Job title"
            className="searchbar-input"
            onChange={(e) => setSearchPrompt(e.target.value)}
          />

          <input
            value={location}
            type="text"
            placeholder="Location"
            className="searchbar-input"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="searchbar-btn"
          disabled={searchPrompt.trim() === ""}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchJob;
