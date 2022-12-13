import './IconsComp.css'

export function IconsComp() {
  const icons = [
    {
      id: 1,
      iconFace: './src/assets/facebook.png',
      id: 2,
      iconDiscord: './src/assets/discord.png',
      id: 3,
      iconLinked: './src/assets/linkedin.png',
      id: 4,
      icongit: './src/assets/github.png',
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





