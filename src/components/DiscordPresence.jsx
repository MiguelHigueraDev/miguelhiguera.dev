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
                  <Tooltip id="game-playing">
                    <div>
                      <h3>Jugando: {gameActivity.name}</h3>
                      <p>{gameActivity.details}</p>
                      <p>{gameActivity.state}</p>
                    </div>
                  </Tooltip>
                </button>
              </div>
            )}
          </div>

          {status.spotify && (
            <div>
              <a target="_blank" data-tooltip-id="spotify-song" data-tooltip-content={`Escuchando en Spotify: ${status.spotify.artist} - ${status.spotify.song}`} data-tooltip-place="bottom" href={`https://open.spotify.com/track/${status.spotify.track_id}`} className="spotify-button select-none rounded-xl py-2 px-3 gap-2 items-center inline-flex text-gray-300 bg-neutral-800 hover:bg-neutral-700 transition-colors duration-50 ease-in-out mt-3">
                <img src="spotify.svg" alt="" className={`status-dot`}></img>
                <span className="m-0 mr-1 p-0 text-center text-md select-none md:h-5">
                  {status.spotify.artist.length < 25 ? status.spotify.artist : (status.spotify.artist.slice(0, 25) + '...')} - {status.spotify.song.length < 25 ? status.spotify.song : (status.spotify.song.slice(0, 25) + '...')}
                </span>
                <Tooltip id="spotify-song" />
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
