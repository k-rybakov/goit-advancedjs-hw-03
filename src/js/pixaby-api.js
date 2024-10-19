const API_KEY = '46595178-4dac5182a4d6048d037515019';
const url = 'https://pixabay.com/api/?';

const findPhotos = async search => {
  const options = {
    key: API_KEY,
    q: search,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const queryString = new URLSearchParams(options).toString();
  const searhUrl = url + queryString;
  const response = await fetch(searhUrl);
  return response.json();
};

export default findPhotos;
