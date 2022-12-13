import './CardGamer.css'

export function CardGamer() {

  const cardsDinamic = [
    {
      id: 1,
      urlImgPokemon: './src/assets/card-pokemon-unite.jpg',
      alt: 'card do pokemon de capa',
      id: 2,
      urlImgWarzone: './src/assets/card-warzone.jpg',
      id: 3,
      urlImgRocketLeague: './src/assets/card-rocket-league.jpg',
      id: 4,
      urlImgFortnite: './src/assets/card-fortnite.jpg',
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














