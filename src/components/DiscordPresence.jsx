import React from "react";
import { useLanyard } from "react-use-lanyard";

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
    <button className="status-button rounded-xl py-2 px-3 gap-2 items-center inline-flex text-gray-300 bg-neutral-800 max-w-[300px] mt-3">
      {!loading && statusMap[status.discord_status] ? (
        <>
          <span class={`status-dot ${status.discord_status}`}></span>
          <span class="m-0 mr-1 p-0 text-center text-md h-5">{!loading && statusMap[status.discord_status]}</span>
        </>
      ) : (
        <>
          <span class="status-dot loading"></span>
          <span class="m-0 mr-1 p-0 text-center text-md h-5">Cargando...</span>
        </>
      )}
    </button>
  );
};

export default DiscordPresence;
