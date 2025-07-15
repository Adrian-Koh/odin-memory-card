import { useEffect, useState } from "react";
import { cardsInfo, IMAGE_COUNT, randomizeSequence } from "./cards-info";
import "../styles/cards.css";

export default function Cards() {
  const [infos, setInfos] = useState([]);
  const [clickedIds, setClickedIds] = useState(
    new Array(IMAGE_COUNT).fill(false),
  );
  const [bestScore, setBestScore] = useState(0);

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
      const score = newClickedIds.filter((clicked) => clicked).length;
      if (score > bestScore) setBestScore(score);
    }
    setClickedIds(newClickedIds);
    setInfos(randomizeSequence(infos));
  }

  return (
    <div className="container">
      <div className="score">
        <p>Score: {clickedIds.filter((clicked) => clicked).length}</p>
        <p>Best score: {bestScore}</p>
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
