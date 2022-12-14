import './ProfileGamer.css'
import { useState, useEffect } from 'react'
import { CardStreamer } from '../../Components/CardGames/CardStreamer/CardStreamer'
import { CardGamer } from '../../Components/CardGames/CardGamer/CardGamer'
import { IconsComp } from '../../Components/CardGames/IconsComp/IconsComp'

export function ProfileGamer() {
  const [api, setApi] = useState({ avatar_url: '' })

  useEffect(() => {
    fetch('https://api.github.com/users/Schwedler123')
      .then(response => response.json())
      .then(data => {
        setApi({
          avatar: data.avatar_url
        })
      })
  }, [])
  return (
    <div className='container-principal' >
      <div className='container-img' >
        <img className='background-img' src="https://lh3.googleusercontent.com/Ia8C8krP5UgoanDp38Lt5m_thNo0bEPtij6VL2mIHf2j-EYSGNb0BU4R9UwoWc1BRjs4BfWuUHHZhyFp_86COAvVcrsEtFwPMrHodkXdS3FFysisg5WRfKgY4ebAqzFhaAYMPE80j70mvX5JxePKsPzOeBUM3Y1s2yhfDylflhhrePXeuQDYj8MWuGlRXaKSSWBBTWu0rD5nVukPbhP5hd_6JnfqHyTMOPboGMCHeWaUWzKddeuQiv9KyD50bAqAS7E26KxjRoDPUvSX0OMZ5iUaUY95FpE5TdzFkSS0sShmpwpwuvSIsHfbOKGTwl6npFC-Ey__pO1h4V23LTAwtsVCNLemCe46_wZMNh_FOQ-7E18JlIh6CvAvWDDu5dh2tgRa6ELNxMu_so15bUnM6Q7qjgUGS5lmLYLuKJd8x3eDLPPzsnipDQAdDRo9l8QMA74JFc0w7CRkYbwGakkj-IGUHXEdeWYLIer-H6BjTOGbwx6njRoQlhzIDARmHMVAH3L_pAJ3I28XCzX4yicOe_TQhl5HU9PoQOs7XWQBzGRVZ-Co-SrEAP0SMSxCQ0kbgNfXJyPI7EutAhVubSXkLpSp3XmR4vAaqXrOc2yH8YEH3eBbHwLCQV88NkRd0i5KWiN3LB35dNxxQVU8n0o-6W7IwLlaqzITC7KN7hTbmb7CFOKtdtBuS-OvCf5y9QVbRZRKz1JRUO4qZoYeNhs4BS9ckloWBV3UqUJd08DnTw6IVVbI-Ps6TEj4xha6KNXzeveDXQaB75UV4vtfxej4OlWrwzUlr7xHpbk1MCyF3zsN60LlLD3B4BGOZiCP9IHZFfLr5XscakYmqSbukDSi-6kw4Dj9N06pyt-xra9BGxQTCd7n4sn-Ywp4mSafJFmbic9DtoVeiG2ERjx5xyT-fp7m0Dpd_9EW-s4UN477Rie5A4H4ewz748cqMqkVI0D1crvL6jQ01Kl0siXVi8uIN8IBx_CoPQL_rfSketl-naDrLxAJC2KF670kiA=w1271-h667-no?authuser=0" />
      </div>
      <section className='section-principal' >
        <div className='container-header' >
          <header className='header-container' >
            <img className='img-header' src={api.avatar} alt="" />
          </header>
        </div>
      </section>
      <section className='my-games' >
        <div className='container-games' >
          <div>
            <h2 className='title-games' >Meus Jogos</h2>
          </div>
          <div>
            <p className='content-games' >Os games que eu mais curto jogar!</p>
          </div>
          <div className='container-img' >
            <div className='container-img'  >
            <CardGamer/>
            </div>
          </div>
        </div>
      </section>
      <section className='my-streamers' >
        <div className='container-streamers' >
          <div>
            <h2 className='title-games' >Canais e streamers</h2>
          </div>
          <div>
            <p className='content-games ' >Lista de canais e transmissões que não perco!</p>
          </div>
          <div className='container-img' >
            <div className='container-img'  >
              <CardStreamer/>
            </div>
          </div>
        </div>
      </section>
      <section className='my-redes' >
        <div className='container-streamers' >
          <div>
            <h2 className='title-games' >Minhas redes</h2>
          </div>
          <div>
            <p className='content-games ' >Se conecte comigo agora mesmo!</p>
          </div>
          <div className='container-img' >
            <div className='container-img'  >
              <IconsComp/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
