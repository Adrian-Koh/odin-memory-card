export default async function cardsInfo() {
  const response = await fetch("https://api.jikan.moe/v4/anime/666/characters");
  const parsed = await response.json();
  const data = parsed.data;

  let result = [];
  for (let i = 0; i < Math.min(12, data.length); i++) {
    result.push({
      imageUrl: data[i].character.images.jpg.image_url,
      name: data[i].character.name,
    });
  }
  return result;
}
