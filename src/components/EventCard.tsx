import { useRouter } from "next/router";
import React from "react";
import { EventData } from "@/constant/MockData";
import Image from "next/image";

interface EventCardProps {
  event: EventData;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/events/${event.Id}`);
  };

  return (
    <div
      className="w-72 bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-xl transition-shadow duration-200 cursor-pointer"
      onClick={handleClick}
    >
      <Image
        src={event.BackDropPath}
        alt={event.EventTitle}
        className="w-56 rounded mb-4"
      />
      <h1 className="text-2xl font-bold mb-2 text-center">{event.EventTitle}</h1>
      <p className="text-gray-600 mb-1">{event.Date}</p>
      <p className="mb-1">
        <strong>Location:</strong> {event.Location}
      </p>
      <p className="text-gray-700 text-center">{event.BriefShortDescription}</p>
    </div>
  );
};

export default EventCard;



