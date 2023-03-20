import styled from "styled-components"

function App() {

  const Link = styled.li`
    height: 53px;
    display: flex;
    align-items: center;
    background-color: var(--color-secundary);
    justify-content: center;
    color: white;
    text-transform: uppercase;
    font-size: 14px;
    margin-bottom: 1rem;
    border-radius: 6px;
    transition: background 400ms;
  `

  const FooterStyled = styled.footer`
margin-top: 20px;
font-size: 12px;
font-family: 'Courier New', Courier, monospace;
`

  const Content = styled.main`
width: 20vw;
margin-top: 3%;
text-align: center;
`
  const Page = styled.body`
    width: 100vw;
    height: 100vh;
    background-color: var(--corlor-primary);
    display: flex;
    align-items: center;
    justify-content: center;`



  return (
    <Page>

      <Content>
        <h2>Carlos Silva</h2>
        <img src="./assets/perfil.jpg" alt="" />

        <ul>
          <Link>
            <a href="https://www.linkedin.com/in/ccarlossilv/" target="_blank">Linkedin</a>
          </Link>
          <Link>
            <a href="https://github.com/carloosf" target="_blank">Github</a>
          </Link>
          <Link>
            <a href="https://www.instagram.com/ccarlos.exe/" target="_blank">Instagram</a>
          </Link>
          <Link>
            <a href="mailto:contato.carlossilvaf@gmail.com" target="_blank">Email</a>
          </Link>
        </ul>

        <FooterStyled>
          <p>Desenvolvidor por Carlos Silva</p>
        </FooterStyled>
      </Content>
    </Page>
  )
}

export default App
