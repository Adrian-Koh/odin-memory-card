export default async function cardsInfo() {
  const response = await fetch(
    "https://api.jikan.moe/v4/characters?q=naruto+uzumaki",
  );
  const parsed = await response.json();
  const data = parsed.data;

  let result = [];
  for (let i = 0; i < Math.min(10, data.length); i++) {
    result.push({
      imageUrl: data[i].images.jpg.image_url,
      name: data[i].images.name,
    });
  }
  return result;
}
