import { useEffect, useState } from "react";
import cardsInfo from "./cards-info";
import "../styles/cards.css";

export default function Cards() {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    let update = async () => {
      let result = await cardsInfo();
      setInfos(result);
    };
    update();
  }, []);

  return (
    <div className="grid">
      {infos.map((info) => (
        <img src={info.imageUrl} key={info.name}></img>
      ))}
    </div>
  );
}
