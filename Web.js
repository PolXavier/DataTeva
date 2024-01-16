class TheClass extends React.Component  {
  constructor(props) {
    super(props);
    this.state = { page: "Inici" };
    this.handleButton = this.handleButton.bind(this);
    //this.renderContent = this.renderContent.bind(this);
    this.toggleSection = this.toggleSection.bind(this);
  }

  handleButton(event){
    this.setState({
      page: event.target.value,
      title: event.target.innerText,
    });
  }

  toggleSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.classList.toggle('hidden-section');
  }

  render() {
    switch (this.state.page) {
	case "PersProj":
        return (
          <div>
            <div className="ButHeader">
                  <img src="Logo.png" style={{top: 0, width: "4%", minHeight: "100%", maxHeight: "100%", float: "left", transform: "translate(0, -10%)"}}/>
                  <button onClick={this.handleButton} value="Inici">Inici</button>
                  <button onClick={this.handleButton} value="PersProj">Projectes</button>
                  <button onClick={this.handleButton} value="Contact">Contacta'm!</button>
        	  </div>
            <br />
            <div>
		            <div class="Projects">
                    <div class="Project">
                      <a href={"https://github.com/PolXavier/Projecte-de-final-de-grau"} target="_blank" rel="noopener noreferrer">
                        <img src="tfg icono.png" class="WebLogo" />
                        <br />
                        <p class="WebTitle">Projecte de final de grau</p>
                      </a>
                      </div>
                      <div class="Project">
                        <a href={"https://github.com/PolXavier/Inferint-la-funcio-d-una-proteina-desconeguda"} target="_blank" rel="noopener noreferrer">
                          <img src="proteina.png" class="WebLogo" />
                          <br />
                          <p class="WebTitle">Inferint la funció d'una proteïna</p>
                        </a>
                      </div>
                      <div class="Project">
                        <a href={"https://github.com/PolXavier/TevaData"} target="_blank" rel="noopener noreferrer">
                          <img src="web.jpg" class="WebLogo" />
                          <br />
                          <p class="WebTitle">Codi d'aquesta web</p>
                        </a>
                      </div>
                  </div>
	          </div>
          </div>
        );
      case "Inici":
        return (
          <div>
              <div className="ButHeader">
                <img src="Logo.png" style={{width: "4%", minHeight: "100%", maxHeight: "100%", float: "left", top: "0", transform: "translate(0, -10%)"}}/>
                <button onClick={this.handleButton} value="Inici">Inici</button>
                <button onClick={this.handleButton} value="PersProj">Projectes</button>
                <button onClick={this.handleButton} value="Contact">Contacta'm!</button>
              </div>
            <br />
          <div style={{textAlign: "center"}}>
            <img src="Logo.png" style={{margin: "6% auto", height: "20%", width: "20%"}} />
          </div>
        <div className="Mainest_main">      
            <h2>Benvingut/da a, TevaDada! El teu servei personalitzat d'anàlisi de dades</h2>
			<h4>Em dic Pol i m'acabo de graduar de la carrera de bioinformàtica. Durant aquests 3 anys he adquirit habilitats analítiques i és per això que he decidit emprendre i oferir les meves capacitats a empreses que busquen recolectar dades, analitzar-les, extreure resultats i conclusions.</h4>
			<h4>Els llenguatges de programació (R, Python i Bash) i la preparació d'informes són els meus punts més forts.</h4>
                	<p>Vols veure alguns dels meus treballs i projectes que he dut a terme durant la meva carrera professional? Clica <a target="_blank" href="https://github.com/PolXavier?tab=repositories">aquí.</a> Et portarà als meus repositoris que tinc al GitHub.</p>
		        <br />
            <br />
            <fieldset style={{backgroundColor: "red", width: "80%", border: "none", margin: "auto"}} />
            <br />
            <br />
            <h3 onClick={() => this.toggleSection('bioinformatics')}>Bioinformàtica<br /><br /><label class="Extend">+</label></h3>
			<div id="bioinformatics" class="hidden-section">
			<p>La bioinformàtica és una subdisciplina científica que implica l'ús de la informàtica per recopilar, emmagatzemar, analitzar i difondre dades i informació biològica (seqüències d'ADN, aminoàcids o anotacions sobre aquestes seqüències).</p>
			<p>La bioinformàtica també abarca moltes més àrees, com per exemple, l'aprenentatge estatístic on es posen pràctica models de predicció, la visualització i base de dades, o, l'estudi de la genètica de poblacions. Algunes aplicacions i objectius són:</p>
				<ul>
				<li>Augmentar la comprensió de la salut i de malalties.</li>
				<li>Aplicacions en l'agricultura per fer els cultius més resistents i eficients (agrogenòmica).</li>
				<li>Investigació per fer vacunes.</li>
				</ul>
				<p>La meva especialització recau en l'analisi d'ADN ja que he treballat amb seqüències de material genètic mitocondrial. Si busques a algú experimentat en l'analisi estatístic poblacional, no dubtis en contactar-me!</p>
				<img src="bioinfo.png" style={{margin: "2% 0"}}/>
						</div>
      <br />
      <br />
      <fieldset style={{backgroundColor: "red", width: "80%", border: "none", margin: "auto"}} />
			<br />
      <br />
      <h3 onClick={() => this.toggleSection('data-collection')}>Recollida de dades / anàlisi / informes / consultoria / assessoria<br /><br /><label class="Extend">+</label></h3>
			<div id="data-collection" class="hidden-section">
				<p>Els meus interessos van més enllà de la biologia, i són molt més diversos, com per exemple, el món de l'esport. Estic disposat a ampliar els meus coneixements treballant per altres tipus d'empreses i aprendre noves coses! Si ets una empresa que busca un perfil com el meu no dubtis en contactar-me!</p>
				<img src="futbol.png" />
						</div>
      {/*
			<footer>
			<p>Aquesta actuació està impulsada i subvencionada pel Departament d’Empresa i Treball i
			cofinançada per la Unió Europea mitjançant el Fons Social Europeu Plus.</p>

			<img src="CoFinancatUE_lateral.png" class="WebLogo" />
			<img src="Next Generation+Generalitat.png" class="WebLogo" />
			</footer>		
        */}
            </div>
        <div class="footer">
            <p>Aquesta actuació està impulsada i subvencionada pel Departament d’Empresa i Treball i
            cofinançada per la Unió Europea mitjançant el Fons Social Europeu Plus.</p>

            <img src="CoFinancatUE_lateral.png" class="WebLogo" />
            <img src="Next Generation+Generalitat.png" class="WebLogo" />
		    </div>
          </div>
        );
      case "Contact":
        return (
          <div style={{textAlign: "center"}}>
            <div className="ButHeader">
                <img src="Logo.png" style={{width: "4%", minHeight: "100%", float: "left", top: "0", transform: "translate(0, -10%)"}}/>
                <button onClick={this.handleButton} value="Inici">Inici</button>
                <button onClick={this.handleButton} value="PersProj">Projectes</button>
                <button onClick={this.handleButton} value="Contact">Contacta'm!</button>
            </div>
            <br />
            <div class="Mainest_main" style={{width: "60%", transform: "translate(0, 50%)", margin: "auto"}}>
              <h1>Contacta'm!</h1>
		<h4> Telèfon mòvil: +34 644 52 09 10 </h4>
		<h4> Correu electrònic: c11militari@gmail.com </h4>
		<h4> <a target="_blank" href="www.linkedin.com/in/pol-xavier-perez-rodriguez"> LinkedIn </a> </h4>
            </div>
          </div>
        );
      default:
        return null;
    }
  }
/*
  render() {
    gg = this.renderContent()
    return (
      <div>
        <br />
        <div className="Mainest_main">
          {gg}
        </div>
      </div>
    );
  }
*/
}
ReactDOM.render(<TheClass />, document.getElementById("root"));
