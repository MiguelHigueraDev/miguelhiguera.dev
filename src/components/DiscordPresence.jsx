import { useLanyard } from "react-use-lanyard";
import { Tooltip } from 'react-tooltip'
import { startTransition } from "react";

const DiscordPresence = () => {
  const { loading, status } = useLanyard({
    userId: "205519765312241665",
    socket: true,
  });

  const statusMap = {
    online: "Conectado",
    idle: "Ausente",
    dnd: "Ocupado",
    offline: "Desconectado",
  };

  const gameActivity = status && status.activities ? status.activities.find((ac) => ac.type === 0) : null;
  return (
    <>
      {!loading && statusMap[status.discord_status] ? (
        <>
          <div className="md:flex gap-2">
            <button data-tooltip-id="discord-id" data-tooltip-content="Discord: misfitdude" data-tooltip-place="bottom" className="status-button select-none rounded-xl py-2 px-3 gap-2 items-center inline-flex text-gray-300 bg-neutral-800 hover:bg-neutral-700 transition-colors duration-50 ease-in-out max-w-[300px] mt-3">
              <span className={`status-dot ${status.discord_status}`}></span>
              <span className="m-0 mr-1 p-0 text-center text-md select-none h-5">
                {!loading && statusMap[status.discord_status]}
              </span>
              <Tooltip id="discord-id" />
            </button>
            {gameActivity && (
              <div>
                <button target="_blank" data-tooltip-id="game-playing" data-tooltip-place="bottom" className="spotify-button select-none rounded-xl py-2 px-3 gap-2 items-center inline-flex text-gray-300 bg-neutral-800 hover:bg-neutral-700 transition-colors duration-50 ease-in-out mt-3">
                  <img src="joystick.svg" alt="" className={`status-dot`}></img>
                  <span className="m-0 mr-1 p-0 text-center text-md select-none md:h-5">
                    {gameActivity.name.length < 25 ? gameActivity.name : gameActivity.name.slice(0, 25) + "..." }
                  </span>
                  <Tooltip id="game-playing" style={{ backgroundColor: '#2f2f2f', opacity: 1}}>
                    <div className="flex gap-3">
                      <div className="items-center justify-center">
                        <img src={`https://cdn.discordapp.com/app-assets/${gameActivity.application_id}/${gameActivity.assets.small_image}.png`} 
                          className="h-12 w-12 md:w-20 md:h-20 mt-2 md:mt-0" alt="" />
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <h3 className="text-md md:text-xl font-bold">{gameActivity.name}</h3>
                        <p className="text-sm md:text-md font-semibold">{gameActivity.details}</p>
                        <p className="text-sm md:text-md">{gameActivity.state}</p>
                      </div>
                    </div>
                  </Tooltip>
                </button>
              </div>
            )}
          </div>

          {status.spotify && (
            <div>
              <a target="_blank" data-tooltip-id="spotify-song" data-tooltip-place="bottom" href={`https://open.spotify.com/track/${status.spotify.track_id}`} className="spotify-button select-none rounded-xl py-2 px-3 gap-2 items-center inline-flex text-gray-300 bg-neutral-800 hover:bg-neutral-700 transition-colors duration-50 ease-in-out mt-3">
                <img src="spotify.svg" alt="" className={`status-dot`}></img>
                <span className="m-0 mr-1 p-0 text-center text-md select-none md:h-5">
                  {status.spotify.artist.length < 25 ? status.spotify.artist : (status.spotify.artist.slice(0, 25) + '...')} - {status.spotify.song.length < 25 ? status.spotify.song : (status.spotify.song.slice(0, 25) + '...')}
                </span>
                <Tooltip id="spotify-song">
                  <div className="flex gap-3">
                      <div className="items-center justify-center">
                        <img src={status.spotify.album_art_url} 
                          className="h-12 w-12 md:w-20 md:h-20 mt-2 md:mt-0" alt="" />
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <h3 className="text-md md:text-lg font-bold">{status.spotify.artist}</h3>
                        <p className="text-sm md:text-md font-semibold">{status.spotify.song}</p>
                        <p className="text-xs md:text-sm">{status.spotify.album}</p>
                      </div>
                  </div>
                </Tooltip>
              </a>
            </div>
          )}
        </>
      ) : (
        <button className="status-button rounded-xl py-2 px-3 gap-2 items-center inline-flex text-gray-300 bg-neutral-800 max-w-[300px] mt-3">
          <span className="status-dot loading"></span>
          <span className="m-0 mr-1 p-0 text-center text-md select-none h-5">
            Cargando...
          </span>
        </button>
      )}
    </>
  );
};

export default DiscordPresence;
