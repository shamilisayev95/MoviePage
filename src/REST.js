const token = 'aafb85d2-2e97-4c5f-a171-0aeb36a63ba7'

export const getRate = async () => {

    return await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1',
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'X-API-KEY': token,
        }
    }).then(response => response.json())
      .catch(error => console.log('error------>', error));      
}
