class TheClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {Page: "Inici"};
        this.handleButton = this.handleButton.bind(this);
    }

    handleButton(event){
        this.setState({
            Page: event.target.value
        });
    }
    
    render(){
        const Location = window.location.href
        switch (this.state.Page){
            case "PersProj":
                return(<div>
                    <div class="ButHeader">
                        <button id="Inici" onClick={this.handleButton} value="Inici">Inici</button>
                        <button id="PersProjects" onClick={this.handleButton} value="PersProj" class="ClickedBut">Projectes</button>
                        <button id="AcProjects" onClick={this.handleButton} value="AcProjects">Academic Projects</button>
                    </div>
                    <br />
                    <div class="Mainest_main">
                        <h1>Projectes</h1>
                        <h3 style={{textAlign: "center"}}>Websites</h3>
                        <div class="Projects">
                            <div class="Project">
                                <a href={Location + "/RomanConverter"} target="_blank" rel="noopener noreferrer">
                                    <img src="https://i.pinimg.com/564x/71/86/c0/7186c0389fe57abb0958f00a49b8df2a.jpg" class="WebLogo" />
                                    <p class="WebTitle">Roman Converter</p>
                                </a>
                            </div>
                            <div class="Project">
                                <a href={Location + "/RandomQuotes"} target="_blank" rel="noopener noreferrer">
                                    <img src="https://www.publicdomainpictures.net/pictures/180000/velka/planet-earth-1467948406vpS.jpg" class="WebLogo" />
                                    <p class="WebTitle">Random Quotes</p>
                                </a>
                            </div>
                            <div class="Project">
                                <a href={Location + "/HorrorStories"} target="_blank" rel="noopener noreferrer">
                                    <img src="https://publicdomainvectors.org/photos/Terrified-Face.png" class="WebLogo" />
                                    <p class="WebTitle">Horror Stories</p>
                                </a>
                            </div>
                        </div>
                        <h3 style={{textAlign: "center"}}>Apps/Programs</h3>
                        <div class="Projects">
                            <div class="Project">
                                <a href={Location + "/SpaceInvaders"} target="_blank" rel="noopener noreferrer">
                                    <img src="https://lh3.googleusercontent.com/pw/ADCreHd9O9A8xxMrPvTjkt--jqwdsZWZ8PCBLhC2-xhMgo7TGfBp6rxhXcwPZpkltSLQb6nZlMn0NRlLAZF4WCwxlvs629sJ-vQla6DH8ka_iO5E2KLoMcBROdlsNZ8DptOZmZwAnpn86qs9BXv39UocFYU=w64-h63-s-no-gm?authuser=0" class="WebLogo" alt="SpaceInvadersClone Logo"/>
                                    <p class="WebTitle">Space Invaders</p>
                                </a>
                            </div>
                            <div class="Project">
                                <a href={Location + "/SmithWaterman"} target="_blank" rel="noopener noreferrer">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Needleman-Wunsch_pairwise_sequence_alignment.png" class="WebLogo" alt="SmithWaterman Logo"/>
                                    <p class="WebTitle">Smith Waterman</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>);
            case "Inici":
                return(<div>
                    <div class="ButHeader">
                        <button id="Inici" onClick={this.handleButton} value="Inici" class="ClickedBut"></button>
                        <button id="PersProjects" onClick={this.handleButton} value="PersProj">Projectes</button>
                        <button id="AcProjects" onClick={this.handleButton} value="AcProjects">Academic Projects</button>
                    </div>
                    <br />
                    <div class="Mainest_main">
                        <h1>Inici</h1>
                        <br />
                            <title>TevaDada</title>
								<body>
									<main>
										<h2>Servei personalitzat d'anàlisi de dades</h2>
										<h4>Em dic Pol i m'acabo de graduar en la carrera de bioinformàtica. Durant aquests 3 anys he adquirit habilitats analítiques i és per això que he decidit emprendre i oferir les meves capacitats a empreses que busquen recolectar dades, analitzar-les, extreure resultats i conclusions.</h4>
										<h4>Els llenguatges de programació (R, Python i Bash) i la preparació d'informes són els meus punts més forts.</h4>

										<p>Vols veure alguns dels meus treballs i projectes que he dut a terme durant la meva carrera professional? Clica <a target="_blank" href="https://github.com/PolXavier?tab=repositories">aquí.</a> Et portarà als meus repositoris que tinc al GitHub.</p>

										<h3 onclick="toggleSection('bioinformatics')">Bioinformàtica</h3>
										<div id="bioinformatics" class="hidden-section">
											<p>La bioinformàtica és una subdisciplina científica que implica l'ús de la informàtica per recopilar, emmagatzemar, analitzar i difondre dades i informació biològica (seqüències d'ADN, aminoàcids o anotacions sobre aquestes seqüències).</p>
											<p>La bioinformàtica també abarca moltes més àrees, com per exemple, l'aprenentatge estatístic on es posen pràctica models de predicció, la visualització i base de dades, o, l'estudi de la genètica de poblacions. Algunes aplicacions i objectius són:</p>
											<ul>
												<li>Augmentar la comprensió de la salut i de malalties.</li>
												<li>Aplicacions en l'agricultura per fer els cultius més resistents i eficients (agrogenòmica).</li>
												<li>Investigació per fer vacunes.</li>
											</ul>
											<p>La meva especialització recau en l'analisi d'ADN ja que he treballat amb seqüències de material genètic mitocondrial. Si busques a algú experimentat en l'analisi estatístic poblacional, no dubtis en contactar-me!</p>
											<img src="https://photos.fife.usercontent.google.com/pw/ABLVV86nQnJJ5qIVjEKPOdFlYDhryZrOUOioCqEN38doJVX1ZogdtshSkFZ4qw=w501-h291-s-no-gm?authuser=1">
										</div>

										<h3 onclick="toggleSection('data-collection')">Recollida de dades/anàlisi/informes/consultoria/assessoria</h3>
										<div id="data-collection" class="hidden-section">
											<p>Els meus interessos van més allà de la biologia, i són molt més diversos, com per exemple, el món de l'esport. Estic disposat a ampliar els meus coneixements treballant per altres tipus d'empreses i aprendre noves coses! Si ets una empresa que busca un perfil com el meu no dubtis en contactar-me!</p>
											<img src="https://github.com/PolXavier/P-gina-web/blob/main/futbol.png">
										</div>

										<footer>
											<p>Aquesta actuació està impulsada i subvencionada pel Departament d’Empresa i Treball i
											cofinançada per la Unió Europea mitjançant el Fons Social Europeu Plus.</p>

											<img src="https://github.com/PolXavier/P-gina-web/blob/main/CoFinancatUE_lateral.png">
											<img src="https://github.com/PolXavier/P-gina-web/blob/main/Next%20Generation%2BGeneralitat.png">
										</footer>
									</main>
								</body>
                            </div>
                        </div>
                        <div style={{float: "right", fontSize: "small", textAlign: "left", width: "54%"}}>
                        </div>
                    </div>
                    </div>);
            case "AcProjects":
                return(<div>
                    <div class="ButHeader">
                        <button id="Inici" onClick={this.handleButton} value="Inici">Inici</button>
                        <button id="PersProjects" onClick={this.handleButton} value="PersProj">Projectes</button>
                        <button id="AcProjects" onClick={this.handleButton} value="AcProjects" class="ClickedBut">Academic Projects</button>
                    </div>
                    <br />
                    <div class="Mainest_main">
                        <h1>Academic Projects</h1>
                        <h3 style={{textAlign: "center"}}>Pipelines</h3>
                        <div class="Projects">
                            <div class="Project">
                                <a href={Location + "/FinalDegreeProject"} target="_blank" rel="noopener noreferrer">
                                    <img src="https://lh3.googleusercontent.com/pw/ADCreHefWWvoomeqfIPib3vIc3GbIQ0PtZsw4T67JGBL-YC7jr_0k4ADqh4JyAEt8BSSczOE-bodvSXTkKHpnjVNP17Vq1rUsHKdCzd6Fvse8FBCGCeIpJJrCfW21RZPjBBtWpeP53ejB1vwDF1TGylAgI0=w880-h630-s-no-gm?authuser=0" class="WebLogo" alt="FinalDegreeProject Logo" />
                                    <p class="WebTitle">TFG</p>
                                </a>
                            </div>
                            <div class="Project">
                                <a href={Location + "/HeartFailure"} target="_blank" rel="noopener noreferrer">
                                    <img src="https://biopharmaapac.com/uploads/articles/download_2-1570.jpg" class="WebLogo" alt="Heart Failure Logo"/>
                                    <p class="WebTitle">Heart Failure</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>)
        }
    }
}
ReactDOM.render(<TheClass />, document.getElementById("NeededElement"))
