const urls = 'https://kinopoiskapiunofficial.tech';
const type = 'TOP_100_POPULAR_FILMS';
const page = 1;
export default getRate = async () => {
    return await fetch(`${urls}/api/v2.2/films/top?type-${type}&page-${page}`,
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': 'aafb85d2-2e97-4c5f-a171-0aeb36a63ba7',
        }
    }).then(response => response.json())
      .then(response => response)
      .catch(error => console.log('error------>', error));
};
const films = getRate()
console.log('films', films);
getRate().then(res => console.log(res););
