import Image, { StaticImageData } from 'next/image';
import React from 'react';

type Props = {
  ticket: {
    src: StaticImageData;
    title: string;
    date: string;
    local: string;
    cta: string;
  };
};

function CarouselCards({ ticket }: Props) {
  return (
    <div className="card-shadow my-[3.5rem] bg-white mx-auto flex flex-col gap-4 pt-2 pb-3 dark:bg-[#3B3E47] max-w-[257px] w-full h-fit">
      <div className="relative w-full h-[435px] max-sm:h-[300px]">
        <Image
          src={ticket.src}
          alt="ticket"
          fill
          sizes="calc(35vw - 29px)"
          className="object-contain"
        />
      </div>

      <div className="dark:text-white flex flex-col gap-[.5rem] items-center px-1">
        <h1 className="text-[1.1rem] max-sm:text-[.9rem]">{ticket.title}</h1>
        <h2 className="font-[300] text-[.94rem] max-sm:[.8rem]">
          {ticket.date}
        </h2>
        <p className="text-center font-[300] text-[.75rem]">{ticket.local}</p>
      </div>
      <button className="w-[84%] mx-auto py-2 font-[300] text-[.8rem] text-white bg-black ">
        {ticket.cta}
      </button>
    </div>
  );
}

export default CarouselCards;
