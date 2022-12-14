import './CardGamer.css'

export function CardGamer() {

  const cardsDinamic = [
    {
      id: 1,
      urlImgPokemon: 'https://static-cdn.jtvnw.net/ttv-boxart/518379_IGDB-90x120.jpg',
      alt: 'card do pokemon de capa',
      id: 2,
      urlImgWarzone: 'https://static-cdn.jtvnw.net/ttv-boxart/512710-144x192.jpg',
      id: 3,
      urlImgRocketLeague: 'https://static-cdn.jtvnw.net/ttv-boxart/30921-144x192.jpg',
      id: 4,
      urlImgFortnite: 'https://static-cdn.jtvnw.net/ttv-boxart/33214-144x192.jpg',
    }
  ];

  return (
    <>
      {
        cardsDinamic.map((e) => {
          return (
            <div key={e.id} className='container-principal-dinamic' >
              <div>
                <a target="_blank" href="https://www.twitch.tv/directory/game/Pok%C3%A9mon%20Unite">
                  <img className='game-card' src={e.urlImgPokemon} alt="Card pokemon " />
                </a>
              </div>
              <div>
                <a target="_blank" href="https://www.twitch.tv/directory/game/Call%20of%20Duty%3A%20Warzone">
                  <img className='game-card' src={e.urlImgWarzone} alt="Card Warzone" />
                </a>
              </div>
              <div>
                <a target="_blank" href="https://www.twitch.tv/directory/game/Rocket%20League">
                  <img className='game-card' src={e.urlImgRocketLeague} alt="Card RocketLeague" />
                </a>
              </div>
              <div>
                <a target="_blank" href="https://www.twitch.tv/directory/game/Fortnite">
                  <img className='game-card' src={e.urlImgFortnite} alt="Card Fortnite" />
                </a>
              </div>
            </div>
          )
        })
      }
    </>
  );
}














