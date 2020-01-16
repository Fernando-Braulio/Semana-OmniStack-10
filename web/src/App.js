import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

//Componente: bloco isolado de html, css e js no qual nao intefere no restante da aplicação
//Propriedade: Imformações que um componente PAI passa pra o componente FILHO
//Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required/>  
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologia</label>
            <input name="techs" id="techs" required/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>
            
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://jornaldoempreendedor.com.br/wp-content/uploads/2014/08/pessoa-autentica.jpg" alt="Fernando Bráulio"/>
              <div className="user-info">
                <strong>Fernando Bráulio</strong>
                <span>React JS, React Native, Node.js</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/Fernando-Braulio">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://jornaldoempreendedor.com.br/wp-content/uploads/2014/08/pessoa-autentica.jpg" alt="Fernando Bráulio"/>
              <div className="user-info">
                <strong>Fernando Bráulio</strong>
                <span>React JS, React Native, Node.js</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/Fernando-Braulio">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://jornaldoempreendedor.com.br/wp-content/uploads/2014/08/pessoa-autentica.jpg" alt="Fernando Bráulio"/>
              <div className="user-info">
                <strong>Fernando Bráulio</strong>
                <span>React JS, React Native, Node.js</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/Fernando-Braulio">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://jornaldoempreendedor.com.br/wp-content/uploads/2014/08/pessoa-autentica.jpg" alt="Fernando Bráulio"/>
              <div className="user-info">
                <strong>Fernando Bráulio</strong>
                <span>React JS, React Native, Node.js</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/Fernando-Braulio">Acessar perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;