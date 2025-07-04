import { Geist, Geist_Mono } from "next/font/google";
import MockData from "@/constant/MockData";
import EventCard from "@/components/EventCard";
import React, { useState } from "react";
import Head from "next/head";
import { Sun, Moon } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(""); // For search on button click
  const [dark, setDark] = useState(false);

  // Show all events if no search has been made (on refresh)
  const filteredEvents =
  query.trim() === ""
    ? MockData
    : MockData.filter(
        event =>
          event.Location.trim().toLowerCase() === query.trim().toLowerCase()
      );
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div
      className={`${
        dark ? "dark bg-gray-900" : "bg-gray-50"
      } min-h-screen flex flex-col items-center justify-start py-10 px-4`}
      style={{ fontFamily: "var(--font-geist-sans)" }}
    >
      <Head>
        <title>EventDash - Discover Events</title>
        <meta
          name="description"
          content="Find and explore events by location, theme, and more on EventDash."
        />
      </Head>
      <form
        className="w-full max-w-4xl flex justify-center mb-8 gap-2"
        onSubmit={handleSearch}
        role="search"
        aria-label="Event location search"
      >
        <input
          placeholder="Search for Location"
          className="border border-gray-300 dark:border-gray-700 rounded-l-md px-4 py-2 w-2/3 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
          value={search}
          onChange={e => setSearch(e.target.value)}
          aria-label="Search for Location"
        />
        <button
          type="submit"
          className=" bg-gray-800 text-white px-6 py-2 hover:gray-red-700 transition"
          aria-label="Search"
        >
          Search
        </button>
        <button
          type="button"
          className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-2 rounded-r-md hover:bg-gray-300 dark:hover:bg-gray-600 transition flex items-center"
          onClick={() => setDark(d => !d)}
          aria-label="Toggle dark/light mode"
        >
          {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </form>
      <main className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <EventCard key={event.Id} event={event} />
          ))
        ) : (
          <div className="col-span-full text-center text-lg text-blue-500 dark:text-red-800 mt-8">
            No events found for this location.
          </div>
        )}
      </main>
    </div>
  );
}