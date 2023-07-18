export const exerciseOptions = {
 method: 'GET',
 headers: {
  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
   'X-RapidAPI-Key': 'a38189e7d3mshf0798b5b7953a79p11e65djsn79c6dccd638d'
 }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'a38189e7d3mshf0798b5b7953a79p11e65djsn79c6dccd638d',
  },
};

export const fetchData = async (url, options) =>
{
 const response = await fetch(url, options);
 const data = await response.json();
 return data;
}