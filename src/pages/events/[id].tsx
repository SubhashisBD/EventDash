import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import MockData from "@/constant/MockData";
import { EventData } from "@/constant/MockData";
import Image from "next/image";
import {
  Calendar,
  Clock,
  Hourglass,
  Users,
  Languages,
  Music,
  MapPin,
} from "lucide-react";
import React from "react";

interface EventDetailProps {
  event: EventData | null;
}

export default function EventDetail({ event }: EventDetailProps) {
  if (!event) return <main><h1>Event not found</h1></main>;

  return (
    <>
      <Head>
        <title>{event.EventTitle} - {event.Location} | EventDash</title>
        <meta
          name="description"
          content={event.BriefShortDescription}
        />
        <meta property="og:title" content={`${event.EventTitle} - ${event.Location}`} />
        <meta property="og:description" content={event.BriefShortDescription} />
        <meta property="og:image" content={event.PosterPath} />
      </Head>
      <main className="bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen py-4 px-2 md:px-8">
        <section
          className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto animate-fade-in"
          aria-labelledby="event-title"
        >
          {/* Image and tags */}
          <article className="flex-1 flex flex-col">
            <img
              src={event.PosterPath}
              alt={event.EventTitle}
              className="w-full max-w-4xl h-[220px] sm:h-[320px] md:h-[400px] lg:h-[440px] object-cover rounded-2xl mb-2 shadow-lg transition-transform duration-300 hover:scale-105"
              tabIndex={0}
            />
            <div className="flex flex-wrap gap-2 mt-1 mb-2">
              <span className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm font-medium shadow-sm">{event.Type1}</span>
              <span className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm font-medium shadow-sm">{event.Type2}</span>
            </div>
          </article>

          {/* Details Card */}
          <aside
            className="flex-shrink-0 w-full lg:w-[380px] bg-white border rounded-2xl p-4 flex flex-col gap-2 shadow-xl"
            aria-label="Event Details"
          >
            <h1
              id="event-title"
              className="text-2xl font-bold mb-2 text-gray-900"
              tabIndex={0}
            >
              {event.EventTitle} <span className="text-blue-700 font-semibold">- {event.Location}</span>
            </h1>
            <div className="flex items-center gap-2 text-gray-700">
              <Calendar size={20} aria-hidden="true" />
              <span>{event.Date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Clock size={20} aria-hidden="true" />
              <span>{event.Time} PM</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Hourglass size={20} aria-hidden="true" />
              <span>4 Hours</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Users size={20} aria-hidden="true" />
              <span>Age Limit - {event.Age}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Languages size={20} aria-hidden="true" />
              <span>{event.Language}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Music size={20} aria-hidden="true" />
              <span>{event.Theme}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin size={20} aria-hidden="true" />
              <span>{event.Location}</span>
            </div>
            <hr className="my-2" />
            <div className="flex items-center justify-between">
              <div>
                <span className="text-lg font-bold text-gray-900">₹ {event.Price} Onwards</span>
                <div className="text-rose-500 text-xs font-semibold">Filling Fast</div>
              </div>
              <button
                className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-6 py-2 rounded-lg font-semibold text-base shadow transition focus:outline-none focus:ring-2 focus:ring-rose-400"
                tabIndex={0}
              >
                Book Now
              </button>
            </div>
          </aside>
        </section>
        <section className="max-w-4xl mx-auto mt-6 bg-white rounded-xl shadow p-4 md:p-8 transition-all animate-fade-in">
          <h2 className="font-bold text-xl mb-2 text-blue-700">About the Event</h2>
          <p className="text-gray-700 leading-relaxed">{event.BriefLongDescription}</p>
        </section>
      </main>
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: MockData.map((event) => ({
      params: { id: event.Id.toString() },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  const event = MockData.find((e) => e.Id.toString() === id) || null;
  return {
    props: { event },
  };
};