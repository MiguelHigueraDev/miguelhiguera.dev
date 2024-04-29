import { LanyardDiscordCard } from "discord-card-react";
import { useState } from "react";

const MisfitCard = () => {
  const [message, setMessage] = useState("");

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }
  return (
    <LanyardDiscordCard
      client:load
      userId="205519765312241665"
      imageUrl="pfp.webp"
      bannerUrl="banner.webp"
      primaryColor="#007777"
      accentColor="#8500d3"
      basicInfo={{
        displayname: "Miguel",
        username: "miguelhigueradev",
      }}
      badges={[{ name: "Active Developer", iconUrl: "developer-badge.png" }]}
      status={{
        status: "Tech nerd",
      }}
      aboutMe={{
        items: [
          {
            text: "Passionate about technology",
          },
          {
            text: "and coding especially",
          },
          {
            text: "INTP",
            marginBottom: 8,
          },
          {
            text: "👨‍💻🖥️",
          },
        ],
      }}
      memberSince={{
        title: "Alive since",
        discordJoinDate: "Feb 9th 1999",
      }}
      roles={{
        roles: [
          { name: "JavaScript", color: "#f7df1e" },
          { name: "TypeScript", color: "#007acc" },
          { name: "Java", color: "#f89820" },
          { name: "PHP", color: "#4f3e66" },
          { name: "React", color: "#61DBFB" },
          { name: "Vue", color: "#41B883" },
        ],
      }}
      priority="spotify"
      message={{
        handleInput: handleMessageChange,
        message: message,
        accentColor: "#8500d3",
        placeholder: "Message @miguelhigueradev",
      }}
    />
  );
};

export default MisfitCard;
