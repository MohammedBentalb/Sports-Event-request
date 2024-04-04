import { firstSection } from '@/constant';
import React from 'react';
import PlayersCard from './PlayersCard';
import { logo } from '@/public';
import Image from 'next/image';

function Section() {
  return (
    <ul className="max-width m-auto mt-8 gap-2 max-xl:justify-center flex justify-between flex-wrap">
      {firstSection.map((item, index) => (
        <PlayersCard player={item} key={index} />
      ))}
      <li className="card-shadow flex flex-col bg-white dark:bg-[#3B3E47] py-2 px-2 max-w-[238px] w-full max-h-[513px]">
        <div className="bg-[#006655] flex flex-col h-full">
          <div className="relative w-full h-[420px]">
            <Image
              alt={`logo`}
              src={logo}
              fill
              sizes="220px"
              placeholder="blur"
              className="object-contain"
            />
          </div>
          <div className="dark:bg-[#3B3E47] bg-white py-1 px-2  h-full w-[98%] mb-[0.05rem] mx-auto">
            <h1 className="text-[1.2rem] dark:text-white mt-2">
              Advertisement title
            </h1>
            <p className="custom-width  text-[.8rem] dark:text-white font-[300]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default Section;
