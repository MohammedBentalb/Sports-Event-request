import Image, { StaticImageData } from 'next/image';

type Props = {
  player: {
    id: string;
    src: StaticImageData;
    team: string;
    events: string;
    sport: string;
  };
};
function PlayersCard({ player }: Props) {
  return (
    <li className="card-shadow flex flex-col gap-4 bg-white dark:bg-[#3B3E47] py-2 px-3 max-w-[240px] w-full max-h-[513px]">
      <div className="relative w-full h-[388px]">
        <Image
          alt={`${player.team} player`}
          src={player.src}
          fill
          priority
          sizes="212px"
          placeholder="blur"
          className="object-cover"
        />
      </div>
      <h1 className="dark:text-white text-[1rem] tracking-[1px]">
        {player.team}
      </h1>
      <div className="flex justify-between bg-[#f5f5f5] dark:bg-[#292B32] items-center p-1 mt-auto">
        <div className="w-1/2 flex flex-col items-start pl-3 pt-2 gap-1">
          <h2 className="dark:text-white text-[.72rem] font-[300]">
            Total Events
          </h2>
          <p className="dark:text-white text-[.75rem]">
            {player.events} Events
          </p>
        </div>
        <div className="w-1/2 flex flex-col items-start pl-3 pt-2 gap-1">
          <h2 className="dark:text-white text-[.72rem] font-[300]">Sport</h2>
          <p className="dark:text-white text-[.75rem]">{player.sport}</p>
        </div>
      </div>
    </li>
  );
}

export default PlayersCard;
