"use client";

import React, { Component } from "react";
import { useState } from "react";
import SearchBar from "material-ui-search-bar";

async function clicked(data) {
  const response = await fetch("/api/song", {
    method: "POST",
    body: JSON.stringify({ data: "hi" }),
  });
  return response.json();
}

export default function Search() {
  const [search, setSearch] = useState("");
  return (
    <SearchBar
      value={search}
      onChange={() => setSearch()}
      onRequestSearch={(data) => clicked(data)}
    />
  );
}
