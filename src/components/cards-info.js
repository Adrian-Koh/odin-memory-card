const API_LINK = "https://api.jikan.moe/v4/anime/666/characters";
const IMAGE_COUNT = 12;

async function cardsInfo() {
  const response = await fetch(API_LINK);
  const parsed = await response.json();
  const data = parsed.data;

  let result = [];
  for (let i = 0; i < Math.min(IMAGE_COUNT, data.length); i++) {
    result.push({
      id: i,
      imageUrl: data[i].character.images.jpg.image_url,
      name: data[i].character.name,
    });
  }
  return result;
}

function randomizeSequence(arr) {
  let newArr = new Array(arr.length).fill(null);

  for (let i = 0; i < arr.length; i++) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 12);
    } while (newArr[randomNumber] !== null);
    newArr[randomNumber] = arr[i];
  }

  return newArr;
}

export { cardsInfo, randomizeSequence, IMAGE_COUNT };
