import './IconsComp.css'

export function IconsComp() {
  const icons = [
    {
      id: 1,
      iconFace: 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-256.png',
      id: 2,
      iconDiscord: 'https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/discord-256.png',
      id: 3,
      iconLinked: 'https://cdn0.iconfinder.com/data/icons/social-media-2091/100/social-06-256.png',
      id: 4,
      icongit: 'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/71-github-256.png',
    }
  ];

  return (
    <>
      {
        icons.map((e) => {
          return (
            <div key={e.id} className='container-principal-redes' >
              <div>
                <a target="_blank" href="https://www.facebook.com/tiago.vilela.90">
                  <img className='icons-card' src={e.iconFace} alt="Icone redirecionando Facebook" />
                </a>
              </div>
              <div>
                <a target="_blank" href="https://discord.com/channels/@me">
                  <img className='icons-card' src={e.iconDiscord} alt="Icone redirecionando Discord" />
                </a>
              </div>
              <div>
                <a target="_blank" href="https://www.linkedin.com/in/tiago-vilela-15a548239/">
                  <img className='icons-card' src={e.iconLinked} alt="Icone redirecionando Linkedin" />
                </a>
              </div>
              <div>
                <a target="_blank" href="https://github.com/Schwedler123">
                  <img className='icons-card' src={e.icongit} alt="Icone redirecionando Github" />
                </a>
              </div>
            </div>
          )
        })
      }
    </>
  );
}





