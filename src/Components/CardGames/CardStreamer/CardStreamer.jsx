import './CardStreamer.css'

export function CardStreamer() {
  const cardsStreamer = [
    {
      id: 1,
      urlStreamerOne: 'https://static-cdn.jtvnw.net/jtv_user_pictures/d96bbd7a-26e5-4c5e-b6a5-149d708a973b-profile_image-70x70.png',
      id: 2,
      urlStreamertwo: 'https://static-cdn.jtvnw.net/jtv_user_pictures/f4b12683-57ff-4b57-926a-67512b43a7ff-profile_image-70x70.png',
      id: 3,
      urlStreamertrhee: 'https://static-cdn.jtvnw.net/jtv_user_pictures/e80bff37-09c1-46f0-abf7-e72683dab442-profile_image-70x70.png',

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



