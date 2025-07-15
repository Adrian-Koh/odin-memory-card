import { useEffect, useState } from "react";
import { cardsInfo, IMAGE_COUNT, randomizeSequence } from "./cards-info";
import "../styles/cards.css";

export default function Cards() {
  const [infos, setInfos] = useState([]);
  const [clickedIds, setClickedIds] = useState(
    new Array(IMAGE_COUNT).fill(false),
  );

  useEffect(() => {
    let fetchImages = async () => {
      let result = await cardsInfo();
      setInfos(result);
    };
    fetchImages();
  }, []);

  function handleClick(id) {
    let newClickedIds;
    if (clickedIds[id]) {
      // reset score
      newClickedIds = new Array(IMAGE_COUNT).fill(false);
    } else {
      newClickedIds = [...clickedIds];
      newClickedIds[id] = true;
    }
    setClickedIds(newClickedIds);
    setInfos(randomizeSequence(infos));
  }

  return (
    <div className="container">
      <div className="score">
        Score: {clickedIds.filter((clicked) => clicked).length}
      </div>
      <div className="grid">
        {infos.map((info) => (
          <div className="card" key={info.id}>
            <img src={info.imageUrl} onClick={() => handleClick(info.id)}></img>
            <p>{info.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
