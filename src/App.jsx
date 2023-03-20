import './App.css'

function App() {

  const user = [
    { link: "https://www.linkedin.com/in/ccarlossilv/", namelink: "Linkedin" },
    { link: "https://github.com/carloosf", namelink: "Github" },
    { link: "https://www.instagram.com/ccarlos.exe/", namelink: "Instagram" },
    { link: "mailto:contato.carlossilvaf@gmail.com", namelink: "Email" },
  ]

  return (

    <body>
      <main>
        <img src="src/assets/perfil.jpg" alt="" />
        <h2>Carlos Silva</h2>

        <ul>
          {user.map((item) => (
            <li>
              <a
                href={item.link}
                target="_blank">

                {item.namelink}
              </a>
            </li>
          ))}
        </ul>

        <footer>
          <p>Desenvolvidor por Carlos Silva</p>
        </footer>
      </main>
    </body >

  )
}

export default App
