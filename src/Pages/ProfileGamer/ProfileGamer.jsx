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
