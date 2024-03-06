import { useLanyard } from "react-use-lanyard";
import { Tooltip } from 'react-tooltip'

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

  return (
    <>
      {!loading && statusMap[status.discord_status] ? (
        <>
          <div>
            <button data-tooltip-id="discord-id" data-tooltip-content="Discord: misfitdude" data-tooltip-place="right" className="status-button select-none rounded-xl py-2 px-3 gap-2 items-center inline-flex text-gray-300 bg-neutral-800 max-w-[300px] mt-3 mr-3">
              <span className={`status-dot ${status.discord_status}`}></span>
              <span className="m-0 mr-1 p-0 text-center text-md select-none h-5">
                {!loading && statusMap[status.discord_status]}
              </span>
              <Tooltip id="discord-id" />
            </button>
          </div>

          {status.spotify && (
            <div>
              <a target="_blank" data-tooltip-id="spotify-song" data-tooltip-content={`${status.spotify.artist} - ${status.spotify.song}`} data-tooltip-place="bottom" href={`https://open.spotify.com/track/${status.spotify.track_id}`} className="spotify-button select-none rounded-xl py-2 px-3 gap-2 items-center inline-flex text-gray-300 bg-neutral-800 mt-3">
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
