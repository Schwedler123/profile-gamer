import './CardStreamer.css'

export function CardStreamer() {
  const cardsStreamer = [
    {
      id: 1,
      urlStreamerOne: './src/assets/paulinho-loko-streamer.png',
      id: 2,
      urlStreamertwo: './src/assets/gaules-streamer.png',
      id: 3,
      urlStreamertrhee: './src/assets/dilera-streamer.png',

    }
  ];

  return (
    <>
      {
        cardsStreamer.map((e) => {
          return (
            <div key={e.id} className='container-principal-streamers' >
              <div>
                <a target="_blank" href="https://www.twitch.tv/paulinholokobr">

                  <img className='streamer-card' src={e.urlStreamerOne} alt="Card com a foto do canal Paulinho loko" />
                </a>
              </div>
              <div>
                <a target="_blank" href="https://www.twitch.tv/gaules">
                  <img className='streamer-card' src={e.urlStreamertwo} alt=" Card com a foto do canal do Gaules" />
                </a>
              </div>
              <div>
                <a target="_blank" href="https://www.twitch.tv/dilera">
                  <img className='streamer-card' src={e.urlStreamertrhee} alt="Card com a foto do canal do Dilera" />
                </a>
              </div>

            </div>
          )
        })
      }
    </>
  );
}



