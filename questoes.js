/**
 * BANCO DE DADOS OFICIAL DE QUESTÕES - PMESP (ACP II/26)
 * Arquivo: questoes.js
 * Padrão Examinador: Banca APMBB / PMESP - Habilitação ao Posto de Capitão PM
 * 
 * Distribuição de Matérias:
 * - ~50% Assuntos Operacionais (75 questões)
 * - ~30% Assuntos Jurídico-Administrativos (45 questões)
 * - ~20% Assuntos Organizacionais (30 questões)
 * 
 * Ajustes Doutrinários e de Estilo Aplicados:
 * 1. Uso rigoroso da terminologia técnica da PMESP (ex: "cerco", "P/2 / Seção de Inteligência").
 * 2. Isolamento normativo estrito quando a questão versa sobre diretriz específica (ex: NORSOP).
 * 3. Incorporação de questões de letra fria da norma, questões de assertivas (I, II, III) e questões de "Incorreta".
 * 4. Distratores de alta verossimilhança construídos com inversões de comandos legais ("deve" x "não deve", "vedado" x "permitido").
 */

const BANCO_GERAL_QUESTOES = [
    // =========================================================================
    // ASSUNTOS OPERACIONAIS (~50%) - QUESTÕES 1 A 75
    // =========================================================================
    {
        id: 1,
        idSimulado: 1,
        subject: "OPERACIONAL",
        topic: "NORSOP - Diretriz nº PM3-001/02/20",
        text: "Durante o turno de serviço, o CFP identifica que todas as Unidades de Serviço se encontram empenhadas em atendimentos de ocorrências diversas. Nesse contexto, surge uma ocorrência grave, com potencial de repercussão e necessidade de intervenção imediata. Considerando as atribuições do CFP previstas na Diretriz nº PM3-001/02/20 (NORSOP), assinale a alternativa correta:",
        options: [
            "a) O CFP poderá prestar o primeiro atendimento à ocorrência e, simultaneamente, coordenar o emprego de recursos adicionais, inclusive de outras Companhias ou Programas de Policiamento, conforme a necessidade.",
            "b) O CFP não poderá prestar o primeiro atendimento à ocorrência, devendo aguardar obrigatoriamente a liberação de uma Unidade de Serviço ordinária para a intervenção inicial no local.",
            "c) O CFP deve comunicar o fato ao escalão superior e aguardar orientação presencial, sendo-lhe vedado intervir diretamente na ocorrência antes da chegada do Coordenador Operacional.",
            "d) O CFP deverá acionar exclusivamente o Supervisor Regional, transferindo a ele de forma irrevogável a responsabilidade pelo gerenciamento tático da ocorrência."
        ],
        answer: 0,
        explanation: "Fundamentação: NORSOP (Diretriz nº PM3-001/02/20, Anexo B, item 2.1). Diante da indisponibilidade de US e da gravidade do fato, compete ao CFP prestar o primeiro atendimento e coordenar simultaneamente os recursos adicionais."
    },
    {
        id: 2,
        idSimulado: 2,
        subject: "OPERACIONAL",
        topic: "NORSOP - Diretriz nº PM3-001/02/20",
        text: "De acordo com a Diretriz nº PM3-001/02/20 (NORSOP), como está fixada a estrutura básica do Sistema Operacional de Policiamento PM?",
        options: [
            "a) Em programas de policiamento primários, a saber o Programa de Radiopatrulha e Programa de Força Tática, exclusivamente.",
            "b) Nas Matrizes Operacionais I, II e III, bem como nos Níveis de Resposta de 1 a 4, onde são alocadas as estruturas ordinárias de emprego operacional e direcionada a sua atuação em resposta às demandas de segurança pública.",
            "c) Nos níveis estratégico, tático e operacional de emprego dos recursos exclusivamente no âmbito dos Comandos de Policiamento de Área.",
            "d) Nos programas de policiamento complementares, somente, a exemplo dos Programas de Policiamento Escolar e Comunitário."
        ],
        answer: 1,
        explanation: "Fundamentação: NORSOP (Diretriz nº PM3-001/02/20, item 3.6). A estrutura do Sistema Operacional fixa-se nas Matrizes Operacionais I, II e III e nos Níveis de Resposta de 1 a 4."
    },
    {
        id: 3,
        idSimulado: 3,
        subject: "OPERACIONAL",
        topic: "NORSOP - Diretriz nº PM3-001/02/20",
        text: "O CGP observa que, no seu turno de serviço, uma Unidade de Serviço permanece por longo período em atendimento de ocorrência de baixa complexidade, enquanto outras demandas começam a surgir na Subárea. Diante desse cenário, o Subten/Sgt PM passa a avaliar o tempo de permanência da Unidade de Serviço no atendimento da ocorrência e a real necessidade de empenho da equipe naquele local. À luz da Diretriz nº PM3-001/02/20 (NORSOP), assinale a alternativa correta:",
        options: [
            "a) A conduta descrita está adequada, pois compete ao CGP acompanhar e fiscalizar o atendimento das ocorrências na Subárea, intervindo para otimizar o emprego operacional das Unidades de Serviço.",
            "b) A conduta descrita está inadequada, pois o acompanhamento do tempo de atendimento de ocorrências é atribuição exclusiva do Chefe da Seção de Planejamento Operacional (P/3).",
            "c) A conduta descrita está inadequada, pois cabe exclusivamente ao COPOM deliberar sobre a liberação ou permanência de viaturas no local da ocorrência.",
            "d) A conduta descrita está adequada, contudo o CGP deveria obrigatoriamente assumir a ocorrência para si e liberar a equipe do local sem prévia consulta."
        ],
        answer: 0,
        explanation: "Fundamentação: NORSOP (Diretriz nº PM3-001/02/20, Anexo C). Compete ao CGP a fiscalização contínua e o controle do tempo do atendimento de ocorrências pelas US sob sua supervisão."
    },
    {
        id: 4,
        idSimulado: 4,
        subject: "OPERACIONAL",
        topic: "NORSOP - Diretriz nº PM3-001/02/20",
        text: "Analise as assertivas abaixo relativas aos tipos formais de atuação operacional previstos na Diretriz nº PM3-001/02/20 (NORSOP):\n\nI. A Ação Policial-Militar é a atividade operacional ordinária e continuada, executada segundo normas fixas e planejamento permanente.\nII. A Operação Policial-Militar é a atividade operacional extraordinária, com prazo de duração e local definidos, destinada a responder a demandas específicas.\nIII. A Missão Policial-Militar é a tarefa operacional eventual de caráter emergencial ou de cumprimento imediato atribuída a uma fração de tropa ou viatura.\n\nEstá(ão) correta(s):",
        options: [
            "a) Apenas a assertiva I.",
            "b) Apenas as assertivas I e II.",
            "c) Apenas as assertivas II e III.",
            "d) Todas as assertivas (I, II e III)."
        ],
        answer: 3,
        explanation: "Fundamentação: NORSOP (Diretriz nº PM3-001/02/20, item 3.7.2). As três definições correspondem à conceituação doutrinária exata de Ação, Operação e Missão Policial-Militar."
    },
    {
        id: 5,
        idSimulado: 5,
        subject: "OPERACIONAL",
        topic: "SCIPM - Diretriz nº PM3-003/02/23",
        text: "No âmbito do Sistema de Comando de Incidentes da Polícia Militar (SCIPM), durante o gerenciamento de um incidente estático de alta complexidade com reféns, estabelece-se a estrutura organizacional de solo. Sobre a localização e caracterização do Posto de Comando (PC), assinale a alternativa correta:",
        options: [
            "a) O Posto de Comando deve ser instalado no Perímetro Interno (Zona Vermelha) para assegurar o contato visual direto do Comandante do Incidente com o ponto crítico.",
            "b) Haverá obrigatoriamente apenas 1 (um) Posto de Comando físico no incidente, instalado em local seguro no Perímetro Externo (Zona Verde), no qual se concentram as funções de comando.",
            "c) Cada agência participante da operação (PM, Polícia Civil, Corpo de Bombeiros) deve estabelecer seu próprio Posto de Comando físico isolado no local do evento.",
            "d) O Posto de Comando não deve ser instalado no local do incidente, devendo funcionar sempre nas dependências da Sala de Operações da OPM mais próxima."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz nº PM3-003/02/23 (SCIPM, item 5.1). No SCIPM, há estritamente 1 (um) único Posto de Comando físico por incidente, situado em local seguro."
    },
    {
        id: 6,
        idSimulado: 6,
        subject: "OPERACIONAL",
        topic: "SCIPM - Diretriz nº PM3-003/02/23",
        text: "Em um incidente crítico, o Comandante do Incidente (Cmt Inc) precisa designar um integrante do Staff de Comando para atuar como ponto de contato com os representantes das agências públicas de apoio e instituições externas presentes na cena. De acordo com a Diretriz nº PM3-003/02/23 (SCIPM), essa atribuição cabe ao:",
        options: [
            "a) Oficial de Informações Públicas.",
            "b) Oficial de Segurança.",
            "c) Oficial de Ligação.",
            "d) Chefe da Seção de Planejamento."
        ],
        answer: 2,
        explanation: "Fundamentação: Diretriz nº PM3-003/02/23 (SCIPM, item 5.4.3). O Oficial de Ligação faz a articulação direta entre o Cmt Inc e os representantes das agências parceiras."
    },
    {
        id: 7,
        idSimulado: 7,
        subject: "OPERACIONAL",
        topic: "Sistema de C2 - Diretriz nº PM3-001/02/23",
        text: "A Diretriz nº PM3-001/02/23 (Sistema de Comando e Controle) conceitua a Consciência Situacional no processo decisório. Sobre o tema, assinale a alternativa correta:",
        options: [
            "a) Trata-se da capacidade técnica do sistema de rádio corporativo de transmitir dados criptografados sem perda de sinal em áreas de sombra.",
            "b) É o conhecimento e a compreensão contínua que o comandante desenvolve sobre os fatos, elementos do ambiente e riscos, delimitados no tempo e espaço, viabilizando decisões fundamentadas.",
            "c) Constitui o protocolo exclusivo emitido pelo Comandante-Geral para autorizar o emprego de munição química em praças públicas.",
            "d) É o relatório estatístico mensal produzido pela Seção de Inteligência da OPM para mapeamento do comportamento indisciplinar da tropa."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz nº PM3-001/02/23 (C2, item 4). Consciência situacional é a assimilação precisa do ambiente operacional para tomada de decisão fundamentada."
    },
    {
        id: 8,
        idSimulado: 8,
        subject: "OPERACIONAL",
        topic: "Sistema de C2 - Diretriz nº PM3-001/02/23",
        text: "No tocante aos Níveis de Decisão do Sistema de C2 na PMESP, assinale a alternativa que indica corretamente o nível responsável por converter os objetivos institucionais e diretrizes estratégicas em planos operacionais e de articulação das Unidades de Área:",
        options: [
            "a) Nível Estratégico.",
            "b) Nível Tático.",
            "c) Nível Operacional.",
            "d) Nível Decisório."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz nº PM3-001/02/23 (C2, item 4.1). O Nível Tático realiza a ponte entre as diretrizes estratégicas do Comando-Geral e a execução operacional na ponta."
    },
    {
        id: 9,
        idSimulado: 9,
        subject: "OPERACIONAL",
        topic: "Câmeras Operacionais Portáteis (COP) - Diretriz nº PM3-001/02/25",
        text: "Acerca da temporariedade e custódia das evidências audiovisuais gravadas pelas Câmeras Operacionais Portáteis (COP), nos termos da Diretriz nº PM3-001/02/25, assinale a alternativa correta:",
        options: [
            "a) O 'Vídeo de Rotina', que não possui vinculação inicial com ocorrências criminais ou procedimentos administrativos, deve permanecer armazenado pelo prazo mínimo de 90 (noventa) dias.",
            "b) O 'Vídeo de Rotina' deve ser excluído automaticamente do sistema de nuvem após 30 (trinta) dias da realização do upload.",
            "c) Todos os vídeos gravados pelas COP, independentemente da natureza da ocorrência, possuem o prazo de custódia fixo e improrrogável de 5 (cinco) anos.",
            "d) Mídias vinculadas a Inquérito Policial Militar de Morte Decorrente de Intervenção Policial (MDIP) devem ser expurgadas após 180 (cento e oitenta) dias."
        ],
        answer: 0,
        explanation: "Fundamentação: Diretriz nº PM3-001/02/25 (COP, item 6.9). O prazo mínimo de guarda no sistema para o Vídeo de Rotina é de 90 dias."
    },
    {
        id: 10,
        idSimulado: 10,
        subject: "OPERACIONAL",
        topic: "Câmeras Operacionais Portáteis (COP) - Diretriz nº PM3-001/02/25",
        text: "Em caso de atendimento de ocorrência que resulte em Morte Decorrente de Intervenção Policial (MDIP), a Diretriz nº PM3-001/02/25 estabelece que a recolha dos equipamentos COP dos policiais envolvidos e o imediato upload das mídias na OPM é de atribuição do:",
        options: [
            "a) Graduado na função de Comando Grupo Patrulha (CGP).",
            "b) Próprio policial envolvido, ao final do seu turno ordinário de trabalho.",
            "c) Oficial Comando de Força de Patrulha (CFP) ou autoridade policial-militar equivalente presente no local.",
            "d) Auxiliar da Seção de Polícia Judiciária Militar e Disciplina da Unidade."
        ],
        answer: 2,
        explanation: "Fundamentação: Diretriz nº PM3-001/02/25 (COP, item 6.11). A recolha e o upload prioritário dos arquivos em ocorrências graves (MDIP/LCDIP) compete ao CFP."
    },
    {
        id: 11,
        idSimulado: 11,
        subject: "OPERACIONAL",
        topic: "Câmeras Operacionais Portáteis (COP) - Diretriz nº PM3-001/02/25",
        text: "Quando constatada a falta de gravação audiovisual decorrente de inobservância das normas de acionamento da COP por integrante da equipe de serviço, a norma corporativa determina a instauração obrigatória de qual procedimento?",
        options: [
            "a) Sindicância para Exclusão por Inaptidão.",
            "b) Investigação Preliminar (IP).",
            "c) Processo Disciplinar de Rito Sumário imediato.",
            "d) Conselho de Disciplina."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz nº PM3-001/02/25 (COP, item 6.12). A ausência injustificada de registro na COP impõe a abertura de Investigação Preliminar."
    },
    {
        id: 12,
        idSimulado: 12,
        subject: "OPERACIONAL",
        topic: "Câmeras Operacionais Portáteis (COP) - Diretriz nº PM3-001/02/25",
        text: "Sobre o direito de acesso do policial militar envolvido em ocorrência de grande repercussão às imagens gravadas por sua própria Câmera Operacional Portátil (COP), a Diretriz nº PM3-001/02/25 estabelece que:",
        options: [
            "a) É vedado ao policial militar assistir ao vídeo antes de prestar suas declarações em sede de IPM.",
            "b) O policial militar tem o direito de visualizar o registro de sua COP relativo aos fatos em que participou, auxiliando na fidelidade de seu relato formal.",
            "c) O acesso somente será franqueado mediante autorização judicial expedida pelo Tribunal de Justiça Militar.",
            "d) As imagens somente poderão ser exibidas após o encerramento da fase instrutória do processo."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz nº PM3-001/02/25 (COP, item 6.8). É assegurado ao militar consultar o registro de sua COP antes de prestar depoimento oficial sobre o fato."
    },
    {
        id: 13,
        idSimulado: 13,
        subject: "OPERACIONAL",
        topic: "ARPAS / Drones - Normativa de Emprego",
        text: "A utilização de Sistemas de Aeronaves Não Tripuladas (ARPAS/Drones) no âmbito da PMESP para apoio ao policiamento e fiscalização exige observância legal e regulamentar. Assinale a alternativa INCORRETA quanto às normas de emprego do equipamento:",
        options: [
            "a) A operação exige piloto qualificado e credenciado no órgão corporativo, com plano de voo aprovado no sistema SARPAS/DECEA.",
            "b) É permitido ao policial militar empregar drone de sua propriedade particular não tombado no patrimônio da PMESP durante o serviço ordinário, desde que credenciado.",
            "c) Os voos sobre aglomerações humanas devem respeitar as distâncias mínimas de segurança estabelecidas pelas normas do DECEA.",
            "d) A captação de imagens por ARPAS em missões de inteligência e controle de distúrbios deve integrar o banco de dados oficial da OPM."
        ],
        answer: 1,
        explanation: "Fundamentação: Regulamentação de ARPAS na PMESP e Normas do DECEA (ICA 100-40). É vedado o uso de equipamentos particulares não tombados no patrimônio em serviço."
    },
    {
        id: 14,
        idSimulado: 14,
        subject: "OPERACIONAL",
        topic: "Programas de Policiamento - Ronda Maria da Penha",
        text: "Durante o acompanhamento de uma vítima de violência doméstica assistida pelo Programa Ronda Maria da Penha, a equipe constata que o agressor descumpriu a Medida Protetiva de Urgência de afastamento do lar ao aproximar-se do imóvel. Qual a conduta legal e padronizada a ser adotada pela equipe?",
        options: [
            "a) Prender o infrator em flagrante delito pelo crime do Art. 24-A da Lei nº 11.340/06 e conduzi-lo imediatamente à Polícia Judiciária.",
            "b) Lavrar Termo Circunstanciado no local e liberar o agressor após compromisso de comparecimento ao Juizado.",
            "c) Notificar o agressor por escrito e conceder o prazo de 24 horas para desocupação voluntária das imediações.",
            "d) Orientar a vítima a procurar a Defensoria Pública no próximo dia útil para requerer a citação do agressor."
        ],
        answer: 0,
        explanation: "Fundamentação: Art. 24-A da Lei nº 11.340/06 e Diretriz do Programa Ronda Maria da Penha. O descumprimento de MPU configura crime inafiançável na esfera policial, impondo prisão em flagrante."
    },
    {
        id: 15,
        idSimulado: 15,
        subject: "OPERACIONAL",
        topic: "Programas de Policiamento - Força Tática",
        text: "A Força Tática constitui a reserva tática do Comando de Batalhão para atuação em ocorrências de maior gravidade. Sobre as diretrizes do seu emprego, assinale a alternativa correta:",
        options: [
            "a) Deve ser empregada precipuamente em guarda fixa de prédios públicos e escolta de autoridades administrativas estaduais.",
            "b) Atua prioritariamente em patrulhamento tático orientado por manchas criminais, apoio ao Rádio Patrulhamento em ocorrências graves e controle de distúrbios em 1º nível.",
            "c) Subordina-se taticamente ao Comando do Corpo de Bombeiros nas ações de busca em locais de difícil acesso.",
            "d) É expressamente proibido o seu emprego em operações de cerco viário e bloqueios táticos na subárea."
        ],
        answer: 1,
        explanation: "Fundamentação: Manual de Doutrina de Força Tática da PMESP. A FT é a tropa de apoio tático do Batalhão direcionada para combate à criminalidade violenta e apoio à RP."
    },
    {
        id: 16,
        idSimulado: 16,
        subject: "OPERACIONAL",
        topic: "Programas de Policiamento - Escolar",
        text: "Em patrulhamento preventivo pelo Programa de Policiamento Escolar, a equipe depara-se com um adolescente de 16 anos praticando ato infracional análogo ao crime de tráfico de drogas no interior de uma escola pública. Diante do fato, nos termos do ECA e da diretriz corporativa, a equipe deve:",
        options: [
            "a) Encaminhar o adolescente diretamente à Fundação CASA sem registro de ocorrência na Polícia Judiciária.",
            "b) Realizar a apreensão em flagrante do adolescente por ato infracional e conduzi-lo à Polícia Judiciária com acompanhamento dos responsáveis legais ou Conselho Tutelar.",
            "c) Entregar o adolescente à Direção da escola para aplicação de sanções disciplinares previstas no regimento escolar.",
            "d) Aplicar advertência verbal ao adolescente e liberá-lo no local sem notificação à família."
        ],
        answer: 1,
        explanation: "Fundamentação: Lei nº 8.069/90 (ECA, Art. 171) e Diretriz do Policiamento Escolar da PMESP. Flagrante de ato infracional exige apreensão e condução à Polícia Judiciária."
    },
    {
        id: 17,
        idSimulado: 17,
        subject: "OPERACIONAL",
        topic: "Programas de Policiamento - Trânsito (CTB)",
        text: "Durante Ponto de Fiscalização de Trânsito (PFT), o condutor de um veículo automotor recusa-se a realizar o teste do etilômetro ofertado pelos policiais militares. Não sendo constatados sinais visíveis de alteração da capacidade psicomotora, a equipe deve adotar a seguinte providência com amparo no CTB:",
        options: [
            "a) Liberar o condutor e o veículo sem qualquer tipo de autuação por ausência de prova de embriaguez.",
            "b) Lavrar o Auto de Infração pelo Art. 165-A do CTB, recolher o documento de habilitação e reter o veículo até a apresentação de condutor habilitado.",
            "c) Efetuar a prisão em flagrante delito do condutor pelo crime do Art. 306 do CTB.",
            "d) Recolher o veículo diretamente ao Pátio da Receita Federal."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 165-A e Art. 277 do CTB. A recusa sem sinais de embriaguez enseja a autuação pelo Art. 165-A, recolhimento da CNH e retenção do veículo."
    },
    {
        id: 18,
        idSimulado: 18,
        subject: "OPERACIONAL",
        topic: "Programas de Policiamento - Rural",
        text: "Uma das principais ferramentas operacionais e estratégicas adotadas pelo Programa de Policiamento Rural da PMESP para reduzir o tempo de resposta e localizar ocorrências no campo é:",
        options: [
            "a) O uso de rádio transmissor em frequência aberta sem codificação.",
            "b) O cadastramento e mapeamento georreferenciado (coordenadas GPS) das propriedades rurais integrado às Salas de Operações e COPOM.",
            "c) A substituição das patrulhas motorizadas por patrulhamento a pé nas rodovias rurais.",
            "d) A fiscalização direta de impostos estaduais agrícolas pela equipe de patrulha."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz do Policiamento Rural da PMESP. O georreferenciamento das propriedades rurais assegura a localização célere e o planejamento tático do patrulhamento."
    },
    {
        id: 19,
        idSimulado: 19,
        subject: "OPERACIONAL",
        topic: "Programas de Policiamento - Comunitário",
        text: "A filosofia de Polícia Comunitária pauta-se na parceria entre a instituição de segurança e a comunidade. O canal formal e entidade de apoio à Polícia Militar no nível local para discussão de problemas de segurança é o:",
        options: [
            "a) Conselho Permanente de Justiça (CPJ).",
            "b) Conselho Comunitário de Segurança (CONSEG).",
            "c) Conselho de Disciplina e Fiscalização.",
            "d) Centro de Apoio Operacional das Promotorias."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretrizes de Polícia Comunitária da PMESP e Regulamento dos CONSEGs. Os CONSEGs atuam como ponto de integração entre a comunidade e as forças de segurança."
    },
    {
        id: 20,
        idSimulado: 20,
        subject: "OPERACIONAL",
        topic: "Inteligência Operacional - SIPOM",
        text: "Ao receber dados e informações coletados no patrulhamento ordinário referentes a pontos de receptação de cargas roubadas, a Seção de Inteligência (P/2) do Batalhão elabora um documento de assessoramento decisório para o Comandante da Unidade denominado:",
        options: [
            "a) Auto de Exibição e Apreensão.",
            "b) Relatório de Inteligência (RELINT).",
            "c) Parte de Serviço Especial.",
            "d) Inquérito Policial Militar de Informação."
        ],
        answer: 1,
        explanation: "Fundamentação: Doutrina SIPOM/PMESP. O RELINT é o documento de inteligência que analisa dados e assessora o Comando na tomada de decisões operacionais."
    },
    {
        id: 21,
        idSimulado: 21,
        subject: "OPERACIONAL",
        topic: "Combate ao Crime Organizado - Plano de Cerco",
        text: "Em caso de ataque a valores perpetrado por facção criminosa modalidade 'Domínio de Cidade' (Novo Cangaço), qual ação imediata é prioritária para o Coordenador Operacional (CoordOp) no nível tático?",
        options: [
            "a) Determinar a ida isolada de viaturas de Rádio Patrulhamento ao ponto central do confronto.",
            "b) Acionar o Plano de Cerco Regional, centralizar a coordenação do canal de rádio e posicionar bloqueios operacionais nas rotas de escoamento com apoio de tropas táticas.",
            "c) Aguardar o encerramento dos disparos para só então iniciar as comunicações com o COPOM.",
            "d) Desativar as Câmeras Operacionais Portáteis de todo o efetivo da região."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz de C2 e Planos de Contingência contra Roubos a Bancos. A resposta contra o 'Domínio de Cidade' exige acionamento do Plano de Cerco e contenção estratégica."
    },
    {
        id: 22,
        idSimulado: 22,
        subject: "OPERACIONAL",
        topic: "NORSOP - Diretriz nº PM3-001/02/20",
        text: "Na estrutura de divisão geográfica estabelecida pela NORSOP, a menor fração de divisão territorial colocada sob o comando direto e responsabilidade operacional de um Capitão PM é a:",
        options: [
            "a) Subárea (Companhia PM).",
            "b) Setor de Rádio Patrulhamento.",
            "c) Área do Comando de Policiamento de Área.",
            "d) Circunscrição do Distrito Policial."
        ],
        answer: 0,
        explanation: "Fundamentação: NORSOP (Diretriz nº PM3-001/02/20, item 3.4). A Subárea corresponde ao espaço territorial gerido e comandado por um Capitão PM (Cmt de Cia)."
    },
    {
        id: 23,
        idSimulado: 23,
        subject: "OPERACIONAL",
        topic: "SCIPM - Diretriz nº PM3-003/02/23",
        text: "No SCIPM, quando uma autoridade de maior posto chega ao local de um incidente e decide assumir a função de Comandante do Incidente (Cmt Inc), o procedimento formal exige:",
        options: [
            "a) Assunção automática do comando sem necessidade de comunicação formal entre os Oficiais.",
            "b) Realização de briefing de passagem de comando entre o Cmt Inc substituído e o atual, com atualização do quadro de situação e notificação do Posto de Comando e COPOM.",
            "c) Revogação compulsória de todas as ações operacionais anteriormente iniciadas no local.",
            "d) Publicação prévia da transferência de comando em Boletim Geral da PMESP."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz nº PM3-003/02/23 (SCIPM, item 5.8). A transferência de comando no SCIPM requer briefing formal de passagem de serviço com atualização do quadro de situação."
    },
    {
        id: 24,
        idSimulado: 24,
        subject: "OPERACIONAL",
        topic: "Sistema de C2 - Diretriz nº PM3-001/02/23",
        text: "No âmbito do Sistema de C2 da PMESP, o nível de decisão responsável por executar diretamente as ações e operações policiais-militares na ponta da linha por meio das equipes de patrulhamento é o:",
        options: [
            "a) Nível Estratégico.",
            "b) Nível Tático.",
            "c) Nível Operacional.",
            "d) Nível Político-Institucional."
        ],
        answer: 2,
        explanation: "Fundamentação: Diretriz nº PM3-001/02/23 (C2, item 4.1). O Nível Operacional engloba a execução direta e tática das missões pelas equipes em patrulhamento."
    },
    {
        id: 25,
        idSimulado: 25,
        subject: "OPERACIONAL",
        topic: "Câmeras Operacionais Portáteis (COP) - Diretriz nº PM3-001/02/25",
        text: "Ao prestar atendimento a ocorrência que envolva criança na condição de vítima de abuso de vulnerável, a conduta regulamentar do policial equipado com COP quanto à gravação das imagens é:",
        options: [
            "a) Desligar o equipamento e abster-se de realizar qualquer gravação.",
            "b) Focar a captação audiovisual nas evidências do local e corpo de delito, preservando a intimidade e a imagem do rosto do menor nos termos do ECA.",
            "c) Entregar a COP para que o responsável pelo menor conduza a gravação.",
            "d) Transmitir as imagens ao vivo em redes sociais para identificação de denúncias."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz nº PM3-001/02/25 (COP, item 6.7). O registro audiovisual com menores vítimas deve focar vestígios do local e proteger a identidade da criança."
    },
    {
        id: 26,
        idSimulado: 26,
        subject: "OPERACIONAL",
        topic: "NORSOP - Diretriz nº PM3-001/02/20",
        text: "Ocorrência de confronto armado com criminosos homiziados em galpão que exige o cercamento da área por Força Tática da Unidade e o acionamento de apoio aéreo (Grupamento Aéreo - Águia) enquadra-se em qual Matriz Operacional e Nível de Resposta?",
        options: [
            "a) Matriz Operacional I e Nível de Resposta 1.",
            "b) Matriz Operacional II e Nível de Resposta 2.",
            "c) Matriz Operacional II e Nível de Resposta 3.",
            "d) Matriz Operacional III e Nível de Resposta 4."
        ],
        answer: 2,
        explanation: "Fundamentação: NORSOP (Diretriz nº PM3-001/02/20, item 3.6). O emprego de reforço tático suplementar da Unidade (Força Tática e Águia) configura a Matriz II / Nível de Resposta 3."
    },
    {
        id: 27,
        idSimulado: 27,
        subject: "OPERACIONAL",
        topic: "SCIPM - Diretriz nº PM3-003/02/23",
        text: "No SCIPM, o princípio da Unidade de Comando estabelece categoricamente que:",
        options: [
            "a) Todas as forças de segurança presentes subordinam-se diretamente ao Comandante-Geral da PMESP.",
            "b) Cada indivíduo empregado no incidente responde e reporta-se a apenas 1 (um) único supervisor designado.",
            "c) O Posto de Comando deve ser instalado duplicadamente em limites de Batalhões.",
            "d) O Comandante do Incidente só pode emitir ordens após concordância do Ministério Público."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz nº PM3-003/02/23 (SCIPM, item 5.3). A Unidade de Comando garante que cada recurso preste contas a um único superior no incidente."
    },
    {
        id: 28,
        idSimulado: 28,
        subject: "OPERACIONAL",
        topic: "Sistema de C2 - Diretriz nº PM3-001/02/23",
        text: "A responsabilidade por definir as políticas de segurança pública, alocar macro-recursos e estabelecer as diretrizes institucionais do policiamento recai sobre qual Nível de Decisão de C2?",
        options: [
            "a) Nível Operacional.",
            "b) Nível Tático.",
            "c) Nível Estratégico.",
            "d) Nível de Execução Local."
        ],
        answer: 2,
        explanation: "Fundamentação: Diretriz nº PM3-001/02/23 (C2, item 4.1). O Nível Estratégico (Comando-Geral e Grandes Comandos) estabelece diretrizes e políticas institucionais."
    },
    {
        id: 29,
        idSimulado: 29,
        subject: "OPERACIONAL",
        topic: "Câmeras Operacionais Portáteis (COP) - Diretriz nº PM3-001/02/25",
        text: "Em caso de ocorrência envolvendo Lesão Corporal Decorrente de Intervenção Policial (LCDIP) de natureza grave, o prazo regulamentar mínimo de armazenamento da mídia na plataforma corporativa das COP é de:",
        options: [
            "a) 30 dias.",
            "b) 90 dias.",
            "c) 180 dias.",
            "d) 1 (um) ano."
        ],
        answer: 3,
        explanation: "Fundamentação: Diretriz nº PM3-001/02/25 (COP, item 6.9). Gravações vinculadas a apurações correcionais de gravidade (MDIP/LCDIP) exigem guarda de no mínimo 1 ano."
    },
    {
        id: 30,
        idSimulado: 30,
        subject: "OPERACIONAL",
        topic: "NORSOP - Diretriz nº PM3-001/02/20",
        text: "O Cartão de Prioridade de Patrulhamento (CPP) utilizado pelas Unidades de Serviço é um instrumento tático derivado diretamente de qual documento de gestão da NORSOP?",
        options: [
            "a) Do Relatório de Sindicância da OPM.",
            "b) Do Plano de Policiamento Inteligente (PPI) fundamentado na análise criminal.",
            "c) Do Auto de Prisão em Flagrante Delito.",
            "d) Da Parte de Serviço do Coordenador Operacional."
        ],
        answer: 1,
        explanation: "Fundamentação: NORSOP (Diretriz nº PM3-001/02/20, item 3.7.1). O CPP é a desmultiplicação operacional direta do Plano de Policiamento Inteligente (PPI)."
    },
    {
        id: 31,
        idSimulado: 31,
        subject: "OPERACIONAL",
        topic: "Programas de Policiamento - Força Tática (CDC)",
        text: "Quando empregada no controle de distúrbios civis em primeiro nível, a Força Tática atua fundamentada no uso progressivo da força. O emprego de munições de impacto controlado (menos letais) é ordenado pelo:",
        options: [
            "a) Delegado de Polícia da área.",
            "b) Comandante da Tropa/Cena, observados os princípios de legalidade, necessidade e proporcionalidade.",
            "c) Perito do Instituto de Criminalística.",
            "d) Prefeito Municipal."
        ],
        answer: 1,
        explanation: "Fundamentação: Manual de Doutrina de CDC e Força Tática. O uso de munições menos letais é determinado pelo Comandante da Tropa sob estrito respaldo legal."
    },
    {
        id: 32,
        idSimulado: 32,
        subject: "OPERACIONAL",
        topic: "SCIPM - Diretriz nº PM3-003/02/23",
        text: "Na estrutura do SCIPM, a Seção encarregada do acompanhamento dos recursos, coleta de dados, avaliação do quadro de situação e confecção do Plano de Ação do Incidente (PAI) é a:",
        options: [
            "a) Seção de Operações.",
            "b) Seção de Planejamento.",
            "c) Seção de Logística.",
            "d) Seção de Finanças."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz nº PM3-003/02/23 (SCIPM, item 5.4.1). A Seção de Planejamento elabora o PAI e mantém o controle de dados e recursos do incidente."
    },
    {
        id: 33,
        idSimulado: 33,
        subject: "OPERACIONAL",
        topic: "Programas de Policiamento - Rádio Patrulhamento",
        text: "Ao atender ocorrência de furto consumado em estabelecimento comercial sem presença de suspeitos, a equipe de Rádio Patrulha deve adotar o seguinte procedimento do POP:",
        options: [
            "a) Recusar o atendimento por não se tratar de crime em andamento.",
            "b) Preservar o local de crime se houver vestígios para perícia, qualificar testemunhas/vítima e registrar o BOPM.",
            "c) Encaminhar a vítima diretamente ao Comando de Policiamento de Área.",
            "d) Solicitar acionamento imediato do GATE."
        ],
        answer: 1,
        explanation: "Fundamentação: POP - Atendimento de Ocorrências PMESP. Exige preservação de vestígios para perícia e confecção formal do registro via BOPM."
    },
    {
        id: 34,
        idSimulado: 34,
        subject: "OPERACIONAL",
        topic: "Câmeras Operacionais Portáteis (COP) - Diretriz nº PM3-001/02/25",
        text: "O acionamento da gravação da COP pelo policial militar é OBRIGATÓRIO no seguinte contexto de serviço:",
        options: [
            "a) Durante o horário regulamentar de refeição dentro da OPM.",
            "b) Em todas as abordagens, buscas pessoais, fiscalizações, atendimentos de ocorrências e deslocamentos de emergência.",
            "c) Em reuniões administrativas internas de passagem de serviço.",
            "d) Durante o uso de sanitários e vestiários das Unidades."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz nº PM3-001/02/25 (COP, item 6.2). O acionamento da gravação é compulsório em todas as interações operacionais e emergências."
    },
    {
        id: 35,
        idSimulado: 35,
        subject: "OPERACIONAL",
        topic: "Programas de Policiamento - Ronda Maria da Penha",
        text: "A missão precípua do Programa Ronda Maria da Penha na Polícia Militar do Estado de São Paulo é:",
        options: [
            "a) Realizar a investigação criminal de homicídios tentados de mulheres.",
            "b) Fiscalizar e acompanhar o cumprimento das Medidas Protetivas de Urgência deferidas às vítimas pelo Poder Judiciário.",
            "c) Julgar processos de família e fixar pensão alimentícia provisória.",
            "d) Executar a segurança ostensiva em portas de estabelecimentos noturnos."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz do Programa Ronda Maria da Penha PMESP. O pilar do programa é o acompanhamento e monitoramento do cumprimento das MPUs."
    },
    {
        id: 36,
        idSimulado: 36,
        subject: "OPERACIONAL",
        topic: "Combate ao Crime Organizado - Cerco Operacional",
        text: "O Plano de Cerco acionado pelas Salas de Operações/COPOM após roubos a estabelecimentos bancários visa primariamente:",
        options: [
            "a) Suspender o serviço de patrulhamento do município vizinho.",
            "b) Bloquear pontos estratégicos de estrangulamento viário e rotas de fuga para isolar os autores e viabilizar a interceptação tática.",
            "c) Cancelar a realização de periciais do Instituto de Criminalística.",
            "d) Transferir a competência de polícia ostensiva para guardas municipais."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretrizes de C2 e Planos de Cerco da PMESP. O cerco articula contenções viárias nas rotas estratégicas de escoamento criminal."
    },
    {
        id: 37,
        idSimulado: 37,
        subject: "OPERACIONAL",
        topic: "ARPAS / Drones - Regulamentação Corporativa",
        text: "O emprego de Drones/ARPAS pela PMESP é VEDADO na seguinte condição de voo:",
        options: [
            "a) Em operações de inteligência policial para mapeamento de áreas de risco.",
            "b) Em sobrevoos sobre estabelecimentos prisionais durante rebeliões.",
            "c) Operação por policial militar não credenciado no órgão corporativo ou sem a devida autorização do espaço aéreo pelo DECEA/SARPAS.",
            "d) Em missões de busca e salvamento operadas pelo Corpo de Bombeiros."
        ],
        answer: 2,
        explanation: "Fundamentação: Regulamentação de ARPAS da PMESP e DECEA. Operar sem credenciamento ou autorização de voo no SARPAS é expressamente proibido."
    },
    {
        id: 38,
        idSimulado: 38,
        subject: "OPERACIONAL",
        topic: "Inteligência Operacional - SIPOM",
        text: "Os dados coletados pelas equipes de Rádio Patrulha no patrulhamento ordinário alimentam o sistema de inteligência da OPM por meio de qual documento oficial?",
        options: [
            "a) Relatório de Informação de Pessoal.",
            "b) Relatório de Inteligência Operacional / Parte de Informação.",
            "c) Auto de Exibição e Apreensão.",
            "d) Termo de Recebimento de Carga."
        ],
        answer: 1,
        explanation: "Fundamentação: Doutrina SIPOM/PMESP. Os relatórios de informação operacional encaminham dados relevantes da ponta para processamento na P/2."
    },
    {
        id: 39,
        idSimulado: 39,
        subject: "OPERACIONAL",
        topic: "NORSOP - Diretriz nº PM3-001/02/20",
        text: "Conceitua-se como a menor célula de execução do policiamento ostensivo, composta por recursos humanos e materiais empenhados em cartão de prioridade, a:",
        options: [
            "a) Base Comunitária de Segurança.",
            "b) Unidade de Serviço (US).",
            "c) Seção de Planejamento da OPM.",
            "d) Patrulha de Infantaria."
        ],
        answer: 1,
        explanation: "Fundamentação: NORSOP (Diretriz nº PM3-001/02/20, item 3.2). A Unidade de Serviço (US) é a menor fração de execução do policiamento (ex: RP, ROCAM)."
    },
    {
        id: 40,
        idSimulado: 40,
        subject: "OPERACIONAL",
        topic: "Programas de Policiamento - Trânsito (CTB)",
        text: "O condutor de veículo automotor submetido ao teste do etilômetro que apresente resultado igual ou superior a 0,34 mg de álcool por litro de ar alveolar deve ser:",
        options: [
            "a) Apenas autuado administrativamente e liberado com o veículo.",
            "b) Autuado pelo Art. 165 do CTB e conduzido à Polícia Judiciária pelo crime de trânsito do Art. 306 do CTB.",
            "c) Liberado no local com retenção da Carteira de Habilitação exclusivamente.",
            "d) Encaminhado diretamente ao Presídio Militar."
        ],
        answer: 1,
        explanation: "Fundamentação: Arts. 165 e 306 do CTB c/c Resolução CONTRAN nº 432/12. Valor igual ou superior a 0,34 mg/L no etilômetro caracteriza crime de trânsito."
    },
    {
        id: 41,
        idSimulado: 41,
        subject: "OPERACIONAL",
        topic: "Programas de Policiamento - Escolar",
        text: "No âmbito do Policiamento Escolar, constitui prioridade operacional da equipe de patrulha:",
        options: [
            "a) O patrulhamento ostensivo no entorno das escolas nos horários de entrada, saída e intervalos, articulando-se com a direção escolar.",
            "b) A realização de revistas corporais diárias em todos os alunos nos portões de acesso.",
            "c) A regência de disciplinas escolares em substituição ao corpo docente.",
            "d) A interdição do trânsito viário sem autorização do órgão competente."
        ],
        answer: 0,
        explanation: "Fundamentação: Diretriz do Policiamento Escolar PMESP. A prioridade é a presença ostensiva nos horários de pico e prevenção no entorno escolar."
    },
    {
        id: 42,
        idSimulado: 42,
        subject: "OPERACIONAL",
        topic: "SCIPM - Diretriz nº PM3-003/02/23",
        text: "No SCIPM, a instalação delimitada taticamente para onde os recursos operacionais adicionais solicitados devem deslocar e aguardar atribuição de missão pelo Cmt Inc chama-se:",
        options: [
            "a) Posto de Comando.",
            "b) Área de Espera (Staging Area).",
            "c) Acampamento.",
            "d) Base de Helicópteros."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz nº PM3-003/02/23 (SCIPM, item 5.1). A Área de Espera concentra recursos disponíveis em prontidão para rápida alocação."
    },
    {
        id: 43,
        idSimulado: 43,
        subject: "OPERACIONAL",
        topic: "Sistema de C2 - Diretriz nº PM3-001/02/23",
        text: "A capacidade de diferentes sistemas de comunicação e estruturas de comando trocarem dados e informações de forma integrada durante operações conjuntas é denominada:",
        options: [
            "a) Centralização Operacional.",
            "b) Interoperabilidade.",
            "c) Segregação de Frequência.",
            "d) Autonomia Seccional."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz nº PM3-001/02/23 (C2, item 4). Interoperabilidade é a capacidade de integração técnica e doutrinária entre diferentes forças."
    },
    {
        id: 44,
        idSimulado: 44,
        subject: "OPERACIONAL",
        topic: "Programas de Policiamento - Comunitário",
        text: "No âmbito da filosofia de Polícia Comunitária, compete ao Oficial CFP na sua área de atuação:",
        options: [
            "a) Proibir praças de dialogar com moradores e comerciantes locais.",
            "b) Participar de reuniões de CONSEG, identificar anseios de segurança e orientar o policiamento para a solução colaborativa de problemas.",
            "c) Cobrar taxas para prestação de policiamento ostensivo em bairros comerciais.",
            "d) Delegar a lavratura de BOPM aos presidentes de bairro."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretrizes de Polícia Comunitária PMESP. O CFP atua como elo entre o Comando da OPM e as lideranças comunitárias no CONSEG."
    },
    {
        id: 45,
        idSimulado: 45,
        subject: "OPERACIONAL",
        topic: "Câmeras Operacionais Portáteis (COP) - Diretriz nº PM3-001/02/25",
        text: "Em caso de requisição formal de mídias de COP emitida pelo Poder Judiciário ou Ministério Público, a responsabilidade pelo envio oficial das gravações no Batalhão cabe ao:",
        options: [
            "a) Auxiliar da Seção de Pessoal da OPM.",
            "b) Comandante da Unidade ou autoridade por ele delegada encarregada da custódia das mídias.",
            "c) Técnico da empresa privada fornecedora sem anuência da PMESP.",
            "d) Encarregado da Viatura de Rádio Patrulha do setor."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz nº PM3-001/02/25 (COP, item 6.10). A tramitação e disponibilização de vídeos a órgãos externos cabe ao Cmt de OPM."
    },
    {
        id: 46,
        idSimulado: 46,
        subject: "OPERACIONAL",
        topic: "Programas de Policiamento - Rural",
        text: "A abordagem a veículos em estradas rurais não pavimentadas exige da equipe policial atentar-se taticamente para:",
        options: [
            "a) Apagar todos os faróis da viatura no período noturno durante a aproximação.",
            "b) Manter distância de segurança ampliada, utilizar abrigo e sinalização adequada em razão da poeira e baixa visibilidade.",
            "c) Abordar os ocupantes a pé a mais de 1 km da viatura.",
            "d) Dispensar o uso de coletes balísticos no campo."
        ],
        answer: 1,
        explanation: "Fundamentação: POP - Policiamento Rural PMESP. Exige ampliação do perímetro de segurança tática devido às condições de visibilidade e terreno."
    },
    {
        id: 47,
        idSimulado: 47,
        subject: "OPERACIONAL",
        topic: "SCIPM - Diretriz nº PM3-003/02/23",
        text: "Em um incidente estático de gerenciamento de crise com reféns, a área que isola o ponto crítico diretamente exposto ao risco de disparos chama-se:",
        options: [
            "a) Perímetro Externo (Zona Verde).",
            "b) Perímetro Interno (Zona Vermelha).",
            "c) Área de Espera (Zona Amarela).",
            "d) Perímetro de Imprensa."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz nº PM3-003/02/23 (SCIPM/Crises). O Perímetro Interno isola o ponto crítico (Zona Vermelha) de exposição direta ao risco."
    },
    {
        id: 48,
        idSimulado: 48,
        subject: "OPERACIONAL",
        topic: "NORSOP - Diretriz nº PM3-001/02/20",
        text: "A Reunião de Análise Crítica (RAC) promovida no âmbito da NORSOP tem por objetivo pedagógico e gerencial:",
        options: [
            "a) Punir disciplinarmente os policiais envolvidos em sinistros de trânsito.",
            "b) Avaliar os resultados do emprego operacional, identificar boas práticas e pontos de melhoria no planejamento e execução do policiamento.",
            "c) Homologar os contratos de fornecimento de combustível da OPM.",
            "d) Indicar policiais para cursos no exterior."
        ],
        answer: 1,
        explanation: "Fundamentação: NORSOP (Diretriz nº PM3-001/02/20, item 3.8). A RAC é ferramenta gerencial de avaliação do emprego e ajuste do planejamento."
    },
    {
        id: 49,
        idSimulado: 49,
        subject: "OPERACIONAL",
        topic: "Programas de Policiamento - Força Tática",
        text: "Em apoio a uma viatura de Rádio Patrulha envolvida em acompanhamento de veículo roubado, a equipe de Força Tática deve:",
        options: [
            "a) Ultrapassar a viatura de Rádio Patrulha sem avisar na rede de rádio.",
            "b) Coordenar o cerco tático nas vias de escoamento e assumir a liderança da intervenção mediante comunicação na rede e posição favorável.",
            "c) Determinar o cancelamento do acompanhamento e retorno das viaturas à base.",
            "d) Efetuar disparos de fuzil contra os pneus do veículo em via movimentada."
        ],
        answer: 1,
        explanation: "Fundamentação: Manual de Força Tática e POP de Acompanhamento. Prioriza a coordenação do cerco viário e a assunção segura da intervenção."
    },
    {
        id: 50,
        idSimulado: 50,
        subject: "OPERACIONAL",
        topic: "NORSOP - Diretriz nº PM3-001/02/20",
        text: "A estrutura responsável por monitorar o patrulhamento em tempo real, redistribuir cartões de prioridade em emergências e manter ligação com o COPOM na Companhia PM é a:",
        options: [
            "a) Seção de Justiça e Disciplina.",
            "b) Sala de Operações da OPM.",
            "c) Seção de Inteligência (P/2).",
            "d) Seção de Pessoal (P/1)."
        ],
        answer: 1,
        explanation: "Fundamentação: NORSOP (Diretriz nº PM3-001/02/20) e Diretriz de C2 (PM3-001/02/23). A Sala de Operações monitora e redistribui os recursos operacionais na Subárea."
    },
    {
        id: 51,
        idSimulado: 51,
        subject: "OPERACIONAL",
        topic: "NORSOP - Diretriz nº PM3-001/02/20",
        text: "O Coordenador Operacional (CoordOp) verifica que uma ocorrência de gravidade excepcional exige a intervenção de apoio tático do Batalhão de Ações Especiais de Polícia (BAEP) e do Grupamento Aéreo. Essa articulação operacional enquadra o fato na:",
        options: [
            "a) Matriz Operacional I / Nível de Resposta 1.",
            "b) Matriz Operacional II / Nível de Resposta 2.",
            "c) Matriz Operacional III / Nível de Resposta 4.",
            "d) Matriz Operacional I / Nível de Resposta 3."
        ],
        answer: 2,
        explanation: "Fundamentação: NORSOP (Diretriz nº PM3-001/02/20, item 3.6). Emprego de Unidades Especializadas de nível regional/corporativo (BAEP/Águia) insere o fato na Matriz III / Nível 4."
    },
    {
        id: 52,
        idSimulado: 52,
        subject: "OPERACIONAL",
        topic: "SCIPM - Diretriz nº PM3-003/02/23",
        text: "No SCIPM, a função responsável por zelar pela segurança das equipes operacionais, identificar situações de risco iminente e interromper ações inseguras na cena do incidente é o:",
        options: [
            "a) Oficial de Ligação.",
            "b) Oficial de Segurança.",
            "c) Oficial de Informações Públicas.",
            "d) Chefe da Seção de Logística."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz nº PM3-003/02/23 (SCIPM, item 5.4.2). O Oficial de Segurança possui autoridade para suspender ações que coloquem em risco a tropa."
    },
    {
        id: 53,
        idSimulado: 53,
        subject: "OPERACIONAL",
        topic: "Sistema de C2 - Diretriz nº PM3-001/02/23",
        text: "No Sistema de C2, a Sala de Operações da OPM atua no nível de decisão:",
        options: [
            "a) Estratégico do Comando-Geral.",
            "b) Tático da Subárea/Batalhão.",
            "c) Político-Governamental.",
            "d) Exclusivamente Pericial."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz nº PM3-001/02/23 (C2, item 4.3). As Salas de Operações operam no Nível Tático para coordenação descentralizada do policiamento."
    },
    {
        id: 54,
        idSimulado: 54,
        subject: "OPERACIONAL",
        topic: "Câmeras Operacionais Portáteis (COP) - Diretriz nº PM3-001/02/25",
        text: "A gravação audiovisual efetuada por COP que capta atendimento de ocorrência com prisão em flagrante delito por roubo qualificado deve ser categorizada no sistema como:",
        options: [
            "a) Vídeo de Rotina.",
            "b) Vídeo de Evidência / Ocorrência.",
            "c) Arquivo Pessoal do Policial.",
            "d) Registro Administrativo Interno."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz nº PM3-001/02/25 (COP, item 6.9). Gravações com registros de infrações penais e prisões devem ser indexadas como Vídeo de Evidência."
    },
    {
        id: 55,
        idSimulado: 55,
        subject: "OPERACIONAL",
        topic: "Programas de Policiamento - ROCAM",
        text: "A principal vantagem tática e operacional do emprego do policiamento com motocicletas (ROCAM) no ambiente urbano é:",
        options: [
            "a) A capacidade de transporte de grande número de detidos.",
            "b) A alta mobilidade e agilidade na supressão do tráfego congestionado para rápida prestação de apoio.",
            "c) O isolamento total contra disparos de armas de fogo.",
            "d) A dispensa do uso de equipamentos de proteção individual."
        ],
        answer: 1,
        explanation: "Fundamentação: Manual de Doutrina ROCAM/PMESP. A ROCAM diferencia-se pela mobilidade tática e rapidez de deslocamento no trânsito denso."
    },
    {
        id: 56,
        idSimulado: 56,
        subject: "OPERACIONAL",
        topic: "Combate ao Crime Organizado - Planos de Cerco",
        text: "Em ocorrência de grande envergadura com fuga de criminosos armados com fuzis, o cerco operacional coordenado pela Sala de Operações/COPOM deve abarcar:",
        options: [
            "a) Apenas as vias internas do bairro onde ocorreu o fato.",
            "b) As rotas primárias e secundárias de escoamento viário, pontes, rodovias estaduais e limites de municípios vizinhos.",
            "c) Somente as portarias de prédios públicos estaduais.",
            "d) O recolhimento de todas as viaturas aos pátios das Unidades."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz de C2 e Planos de Cerco PMESP. O cerco viário abrange eixos viários estratégicos de escoamento e limites territoriais."
    },
    {
        id: 57,
        idSimulado: 57,
        subject: "OPERACIONAL",
        topic: "Programas de Policiamento - Trânsito (CTB)",
        text: "Condutor habilitado que se recusa a realizar o teste do etilômetro e não apresenta sinais visíveis de embriaguez deve ter o seu documento de habilitação recolhido pela equipe mediante lavratura de:",
        options: [
            "a) Auto de Infração do Art. 165-A do CTB c/c Recibo de Recolhimento de Documento (RRD).",
            "b) Termo Circunstanciado de Infração Penal.",
            "c) Auto de Exibição e Apreensão Penal.",
            "d) Portaria de Cassação Disciplinar."
        ],
        answer: 0,
        explanation: "Fundamentação: Art. 165-A e Art. 269 do CTB. A recusa implica recolhimento da CNH mediante recibo próprio e autuação administrativa."
    },
    {
        id: 58,
        idSimulado: 58,
        subject: "OPERACIONAL",
        topic: "SCIPM - Diretriz nº PM3-003/02/23",
        text: "No SCIPM, o Plano de Ação do Incidente (PAI) é elaborado pela Seção de Planejamento para vigência em qual período?",
        options: [
            "a) Por todo o ano civil de execução da operação.",
            "b) Para o Período Operacional específico determinado pelo Comandante do Incidente.",
            "c) Apenas para os primeiros 15 minutos do evento.",
            "d) Somente após o encerramento definitivo do incidente."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz nº PM3-003/02/23 (SCIPM, item 5.4.1). O PAI vigora durante o Período Operacional estabelecido para a gestão do incidente."
    },
    {
        id: 59,
        idSimulado: 59,
        subject: "OPERACIONAL",
        topic: "NORSOP - Diretriz nº PM3-001/02/20",
        text: "A modalidade de policiamento ostensivo executada com foco em áreas comerciais e de grande circulação de pedestres, empregando duplas de policiais a pé, denomina-se:",
        options: [
            "a) Policiamento de Força Tática.",
            "b) Policiamento Ostensivo a Pé (POP).",
            "c) Policiamento Montado de Choque.",
            "d) Patrulhamento Tático Rodoviário."
        ],
        answer: 1,
        explanation: "Fundamentação: NORSOP (Diretriz nº PM3-001/02/20, item 3.3). O Policiamento a Pé assegura a presença ostensiva em corredores de pedestres."
    },
    {
        id: 60,
        idSimulado: 60,
        subject: "OPERACIONAL",
        topic: "Programas de Policiamento - Escolar",
        text: "O Cartão de Prioridade de Patrulhamento do Policiamento Escolar deve prever pontos de estacionamento das viaturas prioritariamente nos:",
        options: [
            "a) Horários de entrada, saída e intervalos das Unidades Escolares cadastradas.",
            "b) Períodos da madrugada entre 02:00 e 05:00 horas.",
            "c) Pátios internos de postos de combustíveis particulares.",
            "d) Limites estritamente rurais do município."
        ],
        answer: 0,
        explanation: "Fundamentação: Diretriz do Policiamento Escolar PMESP. O lançamento tático foca nos horários de maior fluxo de alunos e comunidade escolar."
    },
    {
        id: 61,
        idSimulado: 61,
        subject: "OPERACIONAL",
        topic: "Câmeras Operacionais Portáteis (COP) - Diretriz nº PM3-001/02/25",
        text: "Durante o uso de instalações sanitárias ou momentos de refeição em local reservado, o policial equipado com COP:",
        options: [
            "a) É obrigado a manter a gravação ligada voltada para o ambiente íntimo.",
            "b) Pode pausar/desligar temporariamente o equipamento para preservar sua intimidade, reativando-o imediatamente diante de qualquer intervenção policial.",
            "c) Deve entregar o equipamento para o Comandante da Unidade.",
            "d) Comete transgressão disciplinar grave se interromper a gravação por qualquer motivo."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz nº PM3-001/02/25 (COP, item 6.5). A norma preserva a intimidade do policial em momentos pessoais/sanitários."
    },
    {
        id: 62,
        idSimulado: 62,
        subject: "OPERACIONAL",
        topic: "Systema de C2 - Diretriz nº PM3-001/02/23",
        text: "A estrutura do COPOM atua precipuamente no atendimento de emergências do número 190 e no gerenciamento/despacho das viaturas operacionais no nível de:",
        options: [
            "a) Grande Comando (CPM / CPI).",
            "b) Pelotão Destacado.",
            "c) Grupo de Patrulha Suburbano.",
            "d) Delegacia de Polícia Civil."
        ],
        answer: 0,
        explanation: "Fundamentação: Diretriz nº PM3-001/02/23 (C2, item 4.3). O COPOM coordena o atendimento 190 e despacho de frota no nível de Grande Comando."
    },
    {
        id: 63,
        idSimulado: 63,
        subject: "OPERACIONAL",
        topic: "NORSOP - Diretriz nº PM3-001/02/20",
        text: "A Metodologia do Plano de Policiamento Inteligente (PPI) adota como premissa basilar para o lançamento de recursos operacionais:",
        options: [
            "a) A distribuição equitativa e cega de viaturas por quilômetro quadrado.",
            "b) A análise contínua de estatísticas e manchas criminais para alocação orientada de patrulhas.",
            "c) A antiguidade dos motoristas das viaturas.",
            "d) O atendimento exclusivo de solicitações telefônicas do comércio."
        ],
        answer: 1,
        explanation: "Fundamentação: NORSOP (Diretriz nº PM3-001/02/20, item 3.7). O PPI fundamenta-se no diagnóstico de manchas criminais para direcionamento de patrulhas."
    },
    {
        id: 64,
        idSimulado: 64,
        subject: "OPERACIONAL",
        topic: "SCIPM - Diretriz nº PM3-003/02/23",
        text: "No SCIPM, a Seção encarregada de prover os meios materiais, alimentação, transporte e suporte de comunicações para as equipes no incidente é a:",
        options: [
            "a) Seção de Operações.",
            "b) Seção de Planejamento.",
            "c) Seção de Logística.",
            "d) Seção de Inteligência."
        ],
        answer: 2,
        explanation: "Fundamentação: Diretriz nº PM3-003/02/23 (SCIPM, item 5.4.4). A Seção de Logística supre os recursos materiais, transporte e suporte operacional."
    },
    {
        id: 65,
        idSimulado: 65,
        subject: "OPERACIONAL",
        topic: "Programas de Policiamento - Ronda Maria da Penha",
        text: "Ao constatar que uma mulher assistida pelo Programa Ronda Maria da Penha está sofrendo novas ameaças veladas por aplicativo do ex-companheiro fora de situação de flagrante, a equipe deve:",
        options: [
            "a) Descadastrar a vítima do programa imediatamente.",
            "b) Documentar os fatos no relatório de acompanhamento, orientar a formalização no Distrito Policial e acionar o Judiciário para reavaliação de risco.",
            "c) Efetuar a prisão do agressor em domicílio sem mandado judicial.",
            "d) Determinar o recolhimento do aparelho celular da vítima."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz do Programa Ronda Maria da Penha PMESP. Exige documentação das novas ameaças, registro legal e reavaliação de risco no Judiciário."
    },
    {
        id: 66,
        idSimulado: 66,
        subject: "OPERACIONAL",
        topic: "ARPAS / Drones - Normativa Corporativa",
        text: "Em caso de aproximação não autorizada de drone privado sobre o Perímetro Interno de uma ocorrência policial gerenciada com apoio de ARPAS da PMESP, o operador credenciado deve:",
        options: [
            "a) Disparar tiros de fuzil contra o equipamento privado no ar.",
            "b) Priorizar a segurança de voo, adotar manobra defensiva e notificar o Comandante da Cena para providências de solo.",
            "c) Colidir intencionalmente a ARPA policial contra o drone civil.",
            "d) Cancelar toda a operação policial de solo."
        ],
        answer: 1,
        explanation: "Fundamentação: Regulamentação de ARPAS PMESP e normas DECEA. A preservação da segurança aérea exige manobra defensiva e intervenção em solo."
    },
    {
        id: 67,
        idSimulado: 67,
        subject: "OPERACIONAL",
        topic: "Inteligência Operacional - SIPOM",
        text: "Análises de dados criminais produzidas pela Seção de Inteligência que apontam o surgimento de novas modalidades criminosas na subárea da Companhia subsidiam o Cmt de Cia na elaboração do:",
        options: [
            "a) Cartão de Prioridade de Patrulhamento e ajustes do PPI.",
            "b) Regulamento Disciplinar do Batalhão.",
            "c) Quadro de Férias Anual do Efetivo.",
            "d) Processo de Licitação de Peças de Viatura."
        ],
        answer: 0,
        explanation: "Fundamentação: Doutrina SIPOM c/c NORSOP. Os relatórios de inteligência subsidiam a adequação dos cartões de prioridade e do PPI."
    },
    {
        id: 68,
        idSimulado: 68,
        subject: "OPERACIONAL",
        topic: "Programas de Policiamento - Trânsito (CTB)",
        text: "Veículo automotor em circulação que apresente alteração nas características originais não autorizada pelo órgão competente deve ser submetido à seguinte medida administrativa do CTB:",
        options: [
            "a) Retenção do veículo para regularização.",
            "b) Destruição imediata no local da abordagem.",
            "c) Perda automática da propriedade em favor do Estado.",
            "d) Prisão em flagrante do condutor."
        ],
        answer: 0,
        explanation: "Fundamentação: Art. 230, X do CTB. A alteração indevida de característica veicular enseja infração grave e retenção do veículo para regularização."
    },
    {
        id: 69,
        idSimulado: 69,
        subject: "OPERACIONAL",
        topic: "SCIPM - Diretriz nº PM3-003/02/23",
        text: "No SCIPM, a instalação equipada para suprir as necessidades de alojamento, alimentação, descanso e higiene dos recursos em operações prolongadas chama-se:",
        options: [
            "a) Posto de Comando.",
            "b) Acampamento (Camp).",
            "c) Área de Espera.",
            "d) Heliporto."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz nº PM3-003/02/23 (SCIPM, item 5.1). O Acampamento provê suporte de repouso, alimentação e higiene em operações longas."
    },
    {
        id: 70,
        idSimulado: 70,
        subject: "OPERACIONAL",
        topic: "NORSOP - Diretriz nº PM3-001/02/20",
        text: "As frações de policiamento ostensivo lançadas em cartão de prioridade que realizam a patrulha em viaturas de quatro rodas integram a modalidade de:",
        options: [
            "a) Policiamento a Pé.",
            "b) Rádio Patrulhamento de Área (RPA).",
            "c) Policiamento de Manobra Aérea.",
            "d) Patrulha de Operações Ribeirinhas."
        ],
        answer: 1,
        explanation: "Fundamentação: NORSOP (Diretriz nº PM3-001/02/20, item 3.3). O Rádio Patrulhamento de Área é a modalidade básica em viaturas de 4 rodas."
    },
    {
        id: 71,
        idSimulado: 71,
        subject: "OPERACIONAL",
        topic: "Câmeras Operacionais Portáteis (COP) - Diretriz nº PM3-001/02/25",
        text: "A retenção e preservação das mídias digitais de COP relativas a fatos que gerem instauração de Inquérito Policial Militar de homicídio praticado por militar do Estado de serviço deve ser mantida pelo prazo mínimo de:",
        options: [
            "a) 30 dias.",
            "b) 90 dias.",
            "c) 180 dias.",
            "d) 1 (um) ano."
        ],
        answer: 3,
        explanation: "Fundamentação: Diretriz nº PM3-001/02/25 (COP, item 6.9). Mídias associadas a IPMs de homicídio/MDIP exigem guarda mínima de 1 ano no sistema."
    },
    {
        id: 72,
        idSimulado: 72,
        subject: "OPERACIONAL",
        topic: "Programas de Policiamento - Comunitário",
        text: "Na metodologia de solução de problemas (Método IARA) adotada no Policiamento Comunitário, as etapas sequenciais do ciclo gerencial são:",
        options: [
            "a) Inspeção, Auditoria, Repressão e Anulação.",
            "b) Identificação, Análise, Resposta e Avaliação.",
            "c) Intervenção, Acompanhamento, Rastreio e Apreensão.",
            "d) Investigação, Autuação, Relatório e Arquivamento."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretrizes de Polícia Comunitária PMESP. O Método IARA fundamenta-se em Identificação, Análise, Resposta e Avaliação."
    },
    {
        id: 73,
        idSimulado: 73,
        subject: "OPERACIONAL",
        topic: "Sistema de C2 - Diretriz nº PM3-001/02/23",
        text: "O nível de decisão em C2 encarregado de formular os planos de ação da Companhia PM e articular o emprego das Unidades de Serviço na Subárea é o:",
        options: [
            "a) Nível Estratégico.",
            "b) Nível Tático.",
            "c) Nível Político Nacional.",
            "d) Nível Judiciário Militar."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz nº PM3-001/02/23 (C2, item 4.1). O Nível Tático (Cia/BPM) desmultiplica as diretrizes operacionais no terreno."
    },
    {
        id: 74,
        idSimulado: 74,
        subject: "OPERACIONAL",
        topic: "Programas de Policiamento - Força Tática",
        text: "A Força Tática da Unidade deve ser empregada com foco em áreas de sobreposição de manchas criminais para apoiar o Rádio Patrulhamento em ocorrências de:",
        options: [
            "a) Furtos simples sem autoria.",
            "b) Maior complexidade, roubos com retenção de vítima, tráfico e roubos de carga.",
            "c) Infração administrativa de postura municipal.",
            "d) Conflitos vizinhos de barulho sem violência."
        ],
        answer: 1,
        explanation: "Fundamentação: Manual de Doutrina de Força Tática PMESP. O lançamento foca no combate aos crimes violentos e apoio tático à RP."
    },
    {
        id: 75,
        idSimulado: 75,
        subject: "OPERACIONAL",
        topic: "NORSOP - Diretriz nº PM3-001/02/20",
        text: "O escalonamento do atendimento de emergências operacionais na NORSOP que demanda a mobilização de meios adicionais da própria Companhia enquadra-se no Nível de Resposta:",
        options: [
            "a) Nível de Resposta 1.",
            "b) Nível de Resposta 2.",
            "c) Nível de Resposta 4.",
            "d) Nível de Resposta Especial de Estado."
        ],
        answer: 1,
        explanation: "Fundamentação: NORSOP (Diretriz nº PM3-001/02/20, item 3.6). O Nível de Resposta 2 mobiliza reforços e recursos suplementares da própria Cia PM."
    },

    // =========================================================================
    // ASSUNTOS JURÍDICO-ADMINISTRATIVOS (~30%) - QUESTÕES 76 A 120
    // =========================================================================
    {
        id: 76,
        idSimulado: 76,
        subject: "JURIDICO",
        topic: "Lei Complementar nº 18.442/26",
        text: "A Lei Complementar nº 18.442, de 02ABR26, reestruturou os Quadros de Oficiais da Polícia Militar. Sobre a organização dos cargos de cúpula da Instituição, assinale a alternativa correta:",
        options: [
            "a) As funções de Secretário-Chefe da Casa Militar, Comandante-Geral e Subcomandante-Geral são exclusivas de Oficial da ativa do último posto do Quadro de Oficiais Estado-Maior (QOEM).",
            "b) O cargo de Comandante-Geral da Polícia Militar pode ser exercido por Oficial ocupante do último posto do Quadro de Oficiais Especialistas (QOE).",
            "c) Oficiais da reserva remunerada promovidos ao posto de Coronel PM podem ser nomeados Comandante-Geral sem necessidade de reversão ao serviço ativo.",
            "d) As funções de cúpula da Corporação são providas por escolha e nomeação direta do Secretário da Segurança Pública entre Oficiais de qualquer Quadro."
        ],
        answer: 0,
        explanation: "Fundamentação: Art. 10 da Lei Complementar nº 18.442/26. Os cargos de cúpula são privativos de Coronéis PM do serviço ativo integrantes do QOEM."
    },
    {
        id: 77,
        idSimulado: 77,
        subject: "JURIDICO",
        topic: "Lei Complementar nº 18.442/26",
        text: "No tocante à regra de precedência funcional estabelecida no artigo 4º, § 3º da Lei Complementar nº 18.442/26, assinale a alternativa correta:",
        options: [
            "a) Em igualdade de postos entre militares da ativa, o Oficial integrante do QOEM tem precedência funcional sobre os Oficiais dos demais Quadros.",
            "b) O Oficial do Quadro de Oficiais Especialistas (QOE) tem precedência funcional sobre o Oficial do QOEM em razão da especialização do curso.",
            "c) A precedência funcional entre Oficiais da ativa de quadros distintos é determinada exclusivamente pelo critério de maior idade cronológica.",
            "d) Não há precedência funcional entre Oficiais em igualdade de postos, prevalecendo a ordem de chegada ao local da ocorrência."
        ],
        answer: 0,
        explanation: "Fundamentação: Art. 4º, § 3º da Lei Complementar nº 18.442/26. O Oficial do QOEM possui precedência funcional sobre os demais quadros em igualdade de posto no serviço ativo."
    },
    {
        id: 78,
        idSimulado: 78,
        subject: "JURIDICO",
        topic: "Lei Complementar nº 18.442/26",
        text: "Quanto ao teto do efetivo fixado no artigo 3º da Lei Complementar nº 18.442/26 (93.802 cargos), a própria norma estabelece expressamente que NÃO serão computados nesse limite de vagas:",
        options: [
            "a) Os Tenentes-Coronéis PM e Majores PM do QOEM em serviço ativo.",
            "b) O Aspirante a Oficial PM, o Cadete PM, o Aluno-Soldado PM e o militar revertido da reserva.",
            "c) Os Capitães PM e Tenentes PM integrantes do QOE.",
            "d) Os Subtenentes PM e Sargentos PM do Quadro de Praças."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 3º, parágrafo único da Lei Complementar nº 18.442/26. Alunos em formação e militares revertidos da reserva não computam no teto de vagas fixado."
    },
    {
        id: 79,
        idSimulado: 79,
        subject: "JURIDICO",
        topic: "RDPM - Lei Complementar nº 893/01",
        text: "Nos termos do Regulamento Disciplinar da Polícia Militar (LC nº 893/01), a sanção de Permanência Disciplinar pode, a pedido do transgressor e a juízo da autoridade punidora, ser convertida em prestação de serviço extraordinário. Sobre o efeito do pedido de conversão, assinale a opção correta:",
        options: [
            "a) O pedido de conversão elide a interposição do recurso administrativo de reconsideração de ato pelo punido.",
            "b) O pedido de conversão suspende o prazo de prescrição da ação disciplinar por 5 anos.",
            "c) A conversão garante a promoção por antiguidade do militar no quadrimestre seguinte.",
            "d) O serviço extraordinário oriundo da conversão será prestado sem fardamento nas dependências da CorregPM."
        ],
        answer: 0,
        explanation: "Fundamentação: Art. 16, § 4º do RDPM (LC nº 893/01). A solicitação da conversão de permanência disciplinar em serviço extraordinário importa na renúncia/elisão do recurso de reconsideração de ato."
    },
    {
        id: 80,
        idSimulado: 80,
        subject: "JURIDICO",
        topic: "RDPM - Lei Complementar nº 893/01",
        text: "O superior hierárquico responderá solidariamente na esfera administrativa disciplinar, incorrendo nas mesmas sanções da transgressão praticada por seu subordinado, quando:",
        options: [
            "a) Presenciar a prática da falta disciplinar e deixar de atuar para fazê-la cessar imediatamente.",
            "b) Tiver conhecimento do fato e instaurar Investigação Preliminar em até 5 dias.",
            "c) Estiver em gozo de férias regulamentares no momento da infração praticada pelo subordinado.",
            "d) Deixar de conceder elogio ao subordinado ao final da operação policial."
        ],
        answer: 0,
        explanation: "Fundamentação: Art. 11, § 2º do RDPM (LC nº 893/01). A omissão presencial imediata do superior diante da transgressão do subordinado gera responsabilidade disciplinar solidária."
    },
    {
        id: 81,
        idSimulado: 81,
        subject: "JURIDICO",
        topic: "RDPM - Lei Complementar nº 893/01",
        text: "De acordo com o texto da LC nº 893/01 (RDPM), NÃO estão sujeitos às sanções do Regulamento Disciplinar da Polícia Militar do Estado de São Paulo:",
        options: [
            "a) Os militares do Estado agregados.",
            "b) Os militares do Estado na reserva remunerada.",
            "c) Os militares do Estado no exercício de cargos públicos civis ou de cargos eletivos.",
            "d) Os Oficiais alunos do Curso Superior de Polícia."
        ],
        answer: 2,
        explanation: "Fundamentação: Art. 3º, § 2º do RDPM (LC nº 893/01). Policiais militares no exercício de cargos públicos civis ou eletivos não se submetem às normas do RDPM durante o mandato/cargo."
    },
    {
        id: 82,
        idSimulado: 82,
        subject: "JURIDICO",
        topic: "RDPM - Lei Complementar nº 893/01",
        text: "Nos termos da LC nº 893/01 (RDPM), a escala hierárquica e a ordenação da autoridade na Polícia Militar do Estado de São Paulo culminam no:",
        options: [
            "a) Comandante-Geral da Polícia Militar.",
            "b) Secretário da Segurança Pública.",
            "c) Governador do Estado, Chefe Supremo da Polícia Militar.",
            "d) Presidente do Tribunal de Justiça Militar do Estado."
        ],
        answer: 2,
        explanation: "Fundamentação: Art. 4º do RDPM (LC nº 893/01). O Governador do Estado é a autoridade suprema na qual culmina a estrutura hierárquica da PMESP."
    },
    {
        id: 83,
        idSimulado: 83,
        subject: "JURIDICO",
        topic: "RDPM - Lei Complementar nº 893/01",
        text: "No Capítulo referente às Recompensas Policiais-Militares na LC nº 893/01 (RDPM), constituem modalidades formais de recompensa concedidas pela autoridade competente:",
        options: [
            "a) O Elogio e o Cancelamento de Sanções Disciplinares.",
            "b) O Elogio e a Promoção por Bravura.",
            "c) A Dispensa do Serviço e a Medalha de Valor Militar.",
            "d) A Concessão de Gratificação Financeira Indenizatória."
        ],
        answer: 0,
        explanation: "Fundamentação: Art. 67 do RDPM (LC nº 893/01). As recompensas previstas no RDPM são formalmente duas: o Elogio e o Cancelamento de Sanções."
    },
    {
        id: 84,
        idSimulado: 84,
        subject: "JURIDICO",
        topic: "RDPM - Lei Complementar nº 893/01",
        text: "Assinale a alternativa que apresenta um DEVER ÉTICO do policial militar (Art. 8º do RDPM) e não um Valor Fundamental (Art. 7º do RDPM):",
        options: [
            "a) Patriotismo.",
            "b) Cumprir os deveres de cidadão.",
            "c) Civismo.",
            "d) A fé na missão elevada da Polícia Militar."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 8º, I do RDPM (LC nº 893/01). 'Cumprir os deveres de cidadão' é dever ético; patriotismo, civismo e fé na missão constituem valores fundamentais."
    },
    {
        id: 85,
        idSimulado: 85,
        subject: "JURIDICO",
        topic: "Doutrina Correcional - CPPM",
        text: "Durante a instrução de Sindicância, emergem indícios suficientes de autoria de crime militar doloso contra a vida praticado por policial militar de serviço contra civil. De acordo com a legislação e a doutrina correcional da PMESP, a providência da autoridade é:",
        options: [
            "a) Arquivar o procedimento correcional e remeter a apuração para a Polícia Civil.",
            "b) Instaurar ou dar prosseguimento ao Inquérito Policial Militar (IPM) e remeter os autos à Justiça Comum (Tribunal do Júri), mantendo a apuração disciplinar autônoma.",
            "c) Remeter o IPM para julgamento perante o Tribunal de Justiça Militar.",
            "d) Aplicar diretamente a demissão do investigado sem remessa ao Poder Judiciário."
        ],
        answer: 1,
        explanation: "Fundamentação: Lei nº 9.299/96 c/c Art. 82, § 2º do CPPM. O crime doloso contra a vida de civil praticado por militar é apurado em IPM e julgado na Justiça Comum (Tribunal do Júri)."
    },
    {
        id: 86,
        idSimulado: 86,
        subject: "JURIDICO",
        topic: "Processos Disciplinares - Conselho de Justificação",
        text: "O processo administrativo disciplinar destinado a julgar a incapacidade do Oficial PM para permanecer no serviço ativo da Polícia Militar é denominado:",
        options: [
            "a) Conselho de Disciplina.",
            "b) Processo Disciplinar de Rito Sumário.",
            "c) Conselho de Justificação.",
            "d) Inquérito Policial Militar Especial."
        ],
        answer: 2,
        explanation: "Fundamentação: Lei Federal nº 5.836/72 e legislação estadual. O Conselho de Justificação julga a incapacidade moral e profissional dos Oficiais."
    },
    {
        id: 87,
        idSimulado: 87,
        subject: "JURIDICO",
        topic: "Processos Disciplinares - Conselho de Disciplina",
        text: "O Conselho de Disciplina é o processo administrativo destinado a avaliar a incapacidade moral ou profissional de qual categoria de militares do Estado?",
        options: [
            "a) Exclusivamente de Oficiais Superiores.",
            "b) De Praças com estabilidade assegurada (Subtenentes, Sargentos, Cabos e Soldados com mais de 10 anos de efetivo serviço).",
            "c) De alunos em formação no Curso de Formação de Soldados.",
            "d) De Oficiais do Quadro de Saúde."
        ],
        answer: 1,
        explanation: "Fundamentação: Decreto Estadual nº 15.848/76. O Conselho de Disciplina julga as praças com estabilidade assegurada."
    },
    {
        id: 88,
        idSimulado: 88,
        subject: "JURIDICO",
        topic: "Doutrina Correcional - CPPM",
        text: "A lavratura do Auto de Prisão em Flagrante Delito (APFD) por crime militar cometido por policial militar no âmbito da Unidade é de competência originária do:",
        options: [
            "a) Delegado de Polícia Civil do Distrito Policial mais próximo.",
            "b) Oficial da ativa da Polícia Militar no exercício da Polícia Judiciária Militar.",
            "c) Juiz de Direito da Comarca local.",
            "d) Promotor de Justiça Militar."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 7º e Art. 245 do CPPM. A Polícia Judiciária Militar é exercida pelos Oficiais da Corporação no âmbito de suas atribuições."
    },
    {
        id: 89,
        idSimulado: 89,
        subject: "JURIDICO",
        topic: "RDPM - Lei Complementar nº 893/01",
        text: "Nos termos do Regulamento Disciplinar da PMESP, qual é o prazo regulamentar para o militar do Estado interpor Pedido de Reconsideração de Ato contra punição disciplinar aplicada?",
        options: [
            "a) 2 (dois) dias úteis.",
            "b) 5 (cinco) dias úteis.",
            "c) 8 (oito) dias úteis.",
            "d) 10 (dez) dias úteis."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 58 do RDPM (LC nº 893/01). O prazo para Pedido de Reconsideração de Ato é de 5 dias úteis contados do ato/publicação."
    },
    {
        id: 90,
        idSimulado: 90,
        subject: "JURIDICO",
        topic: "RDPM - Lei Complementar nº 893/01",
        text: "Qual das hipóteses abaixo constitui uma CAUSA DE JUSTIFICAÇÃO (que elimina a transgressão disciplinar) nos termos do Artigo 34 do RDPM?",
        options: [
            "a) Estar no ótimo comportamento.",
            "b) Ter prestado relevantes serviços à sociedade.",
            "c) Ter praticado a ação para evitar mal maior ou em legítima defesa de si ou de outrem.",
            "d) Ter confessado espontaneamente a autoria da falta."
        ],
        answer: 2,
        explanation: "Fundamentação: Art. 34 do RDPM (LC nº 893/01). Ação praticada para evitar mal maior ou em legítima defesa constitui Causa de Justificação, isentando de punição."
    },
    {
        id: 91,
        idSimulado: 91,
        subject: "JURIDICO",
        topic: "Lei Complementar nº 18.442/26",
        text: "Para o ingresso de Subtenentes PM no Quadro de Oficiais Especialistas (QOE), além do aproveitamento no CHOE, exige-se do candidato estar classificado, no mínimo, em qual comportamento disciplinar?",
        options: [
            "a) Comportamento Bom.",
            "b) Comportamento Ótimo.",
            "c) Comportamento Excepcional.",
            "d) Isenção total de punições em toda a carreira."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 12 da Lei Complementar nº 18.442/26. O ingresso no QOE exige classificação mínima no comportamento 'Ótimo'."
    },
    {
        id: 92,
        idSimulado: 92,
        subject: "JURIDICO",
        topic: "RDPM - Lei Complementar nº 893/01",
        text: "A sanção disciplinar de Permanência Disciplinar não poderá ultrapassar o prazo máximo continuado de:",
        options: [
            "a) 5 (cinco) dias.",
            "b) 10 (dez) dias.",
            "c) 20 (vinte) dias.",
            "d) 30 (trinta) dias."
        ],
        answer: 2,
        explanation: "Fundamentação: Art. 16 do RDPM (LC nº 893/01). A permanência disciplinar possui o teto máximo de 20 dias consecutivos."
    },
    {
        id: 93,
        idSimulado: 93,
        subject: "JURIDICO",
        topic: "RDPM - Lei Complementar nº 893/01",
        text: "A sanção disciplinar de Detenção (Artigo 17 do RDPM) é de competência de aplicação restrita a quais autoridades na escala hierárquica?",
        options: [
            "a) Exclusivamente do Governador do Estado.",
            "b) Do Comandante-Geral e demais Oficiais ocupantes de funções próprias do posto de Coronel PM.",
            "c) De qualquer Capitão Comandante de Companhia.",
            "d) Do Chefe da Seção de Pessoal do Batalhão."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 31 do RDPM (LC nº 893/01). A aplicação da sanção de Detenção exige competência de Oficial no posto de Coronel PM (ou superiores)."
    },
    {
        id: 94,
        idSimulado: 94,
        subject: "JURIDICO",
        topic: "Processos Disciplinares - PDRS",
        text: "O Processo Disciplinar de Rito Sumário (PDRS) é a modalidade apuratória adequada para instruir faltas disciplinares cometidas por:",
        options: [
            "a) Oficiais Superiores acusados de conduta incompatível.",
            "b) Praças sem estabilidade assegurada ou praças estabilizadas em faltas não demissórias.",
            "c) Militares acusados de crimes dolosos contra a vida de civil.",
            "d) Servidores civis regidos pela CLT."
        ],
        answer: 1,
        explanation: "Fundamentação: Instruções do Processo Administrativo Disciplinar na PMESP. O PDRS destina-se ao julgamento célere de faltas não demissórias."
    },
    {
        id: 95,
        idSimulado: 95,
        subject: "JURIDICO",
        topic: "Doutrina Correcional - CPPM",
        text: "De acordo com o Código de Processo Penal Militar (CPPM), o prazo para conclusão do Inquérito Policial Militar (IPM), estando o indiciado PRESO em flagrante ou preventivamente, é de:",
        options: [
            "a) 10 (dez) dias improrrogáveis.",
            "b) 20 (vinte) dias.",
            "c) 40 (quarenta) dias.",
            "d) 60 (sessenta) dias."
        ],
        answer: 0,
        explanation: "Fundamentação: Art. 20 do CPPM. O prazo de conclusão de IPM com indiciado preso é de 10 dias corridos improrrogáveis."
    },
    {
        id: 96,
        idSimulado: 96,
        subject: "JURIDICO",
        topic: "Doutrina Correcional - CPPM",
        text: "Estando o indiciado SOLTO, o prazo regulamentar para a conclusão do Inquérito Policial Militar (IPM) é de:",
        options: [
            "a) 10 dias.",
            "b) 20 dias.",
            "c) 40 dias, prorrogáveis por mais 20 dias mediante solicitação fundamentada à autoridade judiciária.",
            "d) 180 dias sem prorrogação."
        ],
        answer: 2,
        explanation: "Fundamentação: Art. 20 do CPPM. Para indiciado solto, o prazo inicial do IPM é de 40 dias, prorrogável por mais 20 dias pelo Juiz."
    },
    {
        id: 97,
        idSimulado: 97,
        subject: "JURIDICO",
        topic: "RDPM - Lei Complementar nº 893/01",
        text: "A ação disciplinar da administração prescreve em quanto tempo para faltas sujeitas às sanções de Advertência, Repreensão e Permanência Disciplinar?",
        options: [
            "a) 1 (um) ano.",
            "b) 2 (dois) anos.",
            "c) 5 (cinco) anos.",
            "d) 10 (dez) anos."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 85 do RDPM (LC nº 893/01). A sanção disciplinar não demissória prescreve no prazo de 2 anos contados da data do fato."
    },
    {
        id: 98,
        idSimulado: 98,
        subject: "JURIDICO",
        topic: "Lei Complementar nº 18.442/26",
        text: "O cargo de Subcomandante-Geral da Polícia Militar do Estado de São Paulo é exercido por Oficial do posto de Coronel PM do QOEM, nomeado pelo:",
        options: [
            "a) Presidente da Assembleia Legislativa.",
            "b) Governador do Estado.",
            "c) Secretário de Segurança Pública.",
            "d) Tribunal de Justiça Militar."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 10 da Lei Complementar nº 18.442/26. A nomeação dos cargos de cúpula da PMESP é ato do Chefe do Poder Executivo (Governador)."
    },
    {
        id: 99,
        idSimulado: 99,
        subject: "JURIDICO",
        topic: "RDPM - Lei Complementar nº 893/01",
        text: "A interposição de Pedido de Reconsideração de Ato contra punição disciplinar possui qual efeito em relação à execução da sanção?",
        options: [
            "a) Efeito suspensivo automático obrigatoriamente.",
            "b) Apenas efeito devolutivo, podendo a autoridade conceder efeito suspensivo de forma motivada.",
            "c) Anulação automática da sanção.",
            "d) Extinção da ação penal comum associada."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 60 do RDPM (LC nº 893/01). O recurso possui efeito devolutivo, sendo o efeito suspensivo faculdade motivada da autoridade."
    },
    {
        id: 100,
        idSimulado: 100,
        subject: "JURIDICO",
        topic: "Doutrina Correcional - Sindicância",
        text: "A Sindicância é o procedimento administrativo instaurado no âmbito da PMESP com a finalidade primária de:",
        options: [
            "a) Demitir imediatamente Oficial acusado de crime comum.",
            "b) Apurar fatos de autoria incerta ou controvertida, acidentes com viaturas e danos ao patrimônio sem caráter acusatório inicial direto.",
            "c) Julgar crimes militares de competência do Tribunal do Júri.",
            "d) Substituir a fase instrutória do Processo Penal Militar."
        ],
        answer: 1,
        explanation: "Fundamentação: Instruções de Sindicância da PMESP (I-16-PM). A Sindicância possui caráter investigativo/preparatório para elucidar autoria e materialidade de irregularidades."
    },
    {
        id: 101,
        idSimulado: 101,
        subject: "JURIDICO",
        topic: "RDPM - Lei Complementar nº 893/01",
        text: "O cancelamento de registros de sanções disciplinares (Artigo 68 do RDPM) exige o transcurso do prazo de efetivo serviço sem novas punições de:",
        options: [
            "a) 1 ano.",
            "b) 5 (cinco) anos.",
            "c) 10 anos.",
            "d) 20 anos."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 68 do RDPM (LC nº 893/01). O cancelamento administrativo de registros de sanções exige 5 anos de efetivo serviço sem novas punições."
    },
    {
        id: 102,
        idSimulado: 102,
        subject: "JURIDICO",
        topic: "Processos Disciplinares - Conselho de Disciplina",
        text: "O Conselho de Disciplina instaurado para avaliar praça estabilizada é composto por:",
        options: [
            "a) 3 (três) Oficiais da ativa da Polícia Militar.",
            "b) 1 Juiz de Direito e 2 Promotores de Justiça.",
            "c) 3 Subtenentes com mais de 25 anos de serviço.",
            "d) 5 civis indicados pela Corregedoria Geral."
        ],
        answer: 0,
        explanation: "Fundamentação: Decreto Estadual nº 15.848/76. O Conselho de Disciplina é constituído por 3 Oficiais da ativa (Presidente, Interrogante e Relator)."
    },
    {
        id: 103,
        idSimulado: 103,
        subject: "JURIDICO",
        topic: "Doutrina Correcional - CPPM",
        text: "O crime militar de Deserção praticado por Praça (Artigo 187 do CPM) consuma-se quando o militar ausenta-se, sem licença, da unidade onde serve por mais de:",
        options: [
            "a) 24 horas.",
            "b) 5 dias.",
            "c) 8 (oito) dias consecutivos.",
            "d) 30 dias."
        ],
        answer: 2,
        explanation: "Fundamentação: Art. 187 do Código Penal Militar (CPM). A consumação da deserção de praça exige ausência injustificada por mais de 8 dias consecutivos."
    },
    {
        id: 104,
        idSimulado: 104,
        subject: "JURIDICO",
        topic: "RDPM - Lei Complementar nº 893/01",
        text: "Assinale a alternativa que apresenta uma CIRCUNSTÂNCIA AGRAVANTE no julgamento de transgressão disciplinar nos termos do Artigo 35 do RDPM:",
        options: [
            "a) Ter o transgressor prestado serviços relevantes.",
            "b) A prática da falta em concurso de dois ou mais militares ou na presença de subordinado ou do público.",
            "c) Estar classificado no comportamento Excepcional.",
            "d) Ter agido sob coação irresistível."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 35 do RDPM (LC nº 893/01). A prática da infração em concurso de agentes ou perante público/subordinados constitui agravante."
    },
    {
        id: 105,
        idSimulado: 105,
        subject: "JURIDICO",
        topic: "Lei Complementar nº 18.442/26",
        text: "Para o ingresso de candidatos civis no Curso de Formação de Oficiais (CFO) para acesso ao QOEM, exige-se a comprovação de título de:",
        options: [
            "a) Ensino Médio completo exclusivamente.",
            "b) Bacharel em Direito.",
            "c) Qualificação técnica em contabilidade.",
            "d) Pós-graduação stricto sensu em Segurança Pública."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 5º da Lei Complementar nº 18.442/26 c/c Lei de Ingressos. Exige-se a graduação em Bacharel em Direito para ingresso no CFO/QOEM."
    },
    {
        id: 106,
        idSimulado: 106,
        subject: "JURIDICO",
        topic: "RDPM - Lei Complementar nº 893/01",
        text: "A sanção disciplinar de Repreensão é aplicada por escrito e publicada em boletim, sendo classificada como sanção de natureza:",
        options: [
            "a) Demissória.",
            "b) Amformativa de exclusão sumária.",
            "c) Não privativa de liberdade / Moral.",
            "d) Pecuniária compulsória com multa."
        ],
        answer: 2,
        explanation: "Fundamentação: Art. 15 do RDPM (LC nº 893/01). A repreensão constitui sanção disciplinar de cunho moral publicada formalmente em boletim."
    },
    {
        id: 107,
        idSimulado: 107,
        subject: "JURIDICO",
        topic: "Doutrina Correcional - APFD",
        text: "Em caso de prisão em flagrante por crime militar praticado por Oficial PM, a lavratura do APFD e a condução do procedimento de Polícia Judiciária Militar cabem a Oficial:",
        options: [
            "a) De posto inferior ao do preso.",
            "b) De posto superior ou de maior antiguidade que o do preso.",
            "c) Exclusivamente do Quadro de Saúde.",
            "d) Da reserva remunerada."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 245 do CPPM. A lavratura de APFD envolvendo Oficial exige presidência de Oficial de posto superior ou mais antigo."
    },
    {
        id: 108,
        idSimulado: 108,
        subject: "JURIDICO",
        topic: "Processos Disciplinares - Conselho de Justificação",
        text: "A decisão definitiva de perda do posto e da patente do Oficial julgado em Conselho de Justificação cabe ao Tribunal de Justiça Militar do Estado e é decretada por ato do:",
        options: [
            "a) Comandante-Geral da PMESP.",
            "b) Governador do Estado.",
            "c) Presidente da Assembleia Legislativa.",
            "d) Corregedor Geral da Justiça."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 142, § 3º, VI da CF c/c Lei nº 5.836/72. A cassação de posto e patente de Oficial é ato do Chefe do Poder Executivo (Governador)."
    },
    {
        id: 109,
        idSimulado: 109,
        subject: "JURIDICO",
        topic: "RDPM - Lei Complementar nº 893/01",
        text: "A anulação de ato punitivo disciplinar (Artigo 64 do RDPM) pode ser concedida pela autoridade que o praticou ou por autoridade superior quando constatada:",
        options: [
            "a) Apenas após a aposentadoria do militar.",
            "b) Ilegalidade ou injustiça na aplicação da sanção.",
            "c) Mudança de endereço residencial do punido.",
            "d) Aprovação do militar em concurso público."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 64 do RDPM (LC nº 893/01). A anulação de punição disciplinar é promovida diante de vício de ilegalidade ou injustiça manifesta."
    },
    {
        id: 110,
        idSimulado: 110,
        subject: "JURIDICO",
        topic: "Doutrina Correcional - CPPM",
        text: "O auto de busca e apreensão no âmbito do Inquérito Policial Militar quando realizado em dependências de Unidade Militar exige a presença acompanhante do:",
        options: [
            "a) Presidente do Sindicato dos Vigilantes.",
            "b) Comandante da Unidade ou Oficial por ele designado na OPM.",
            "c) Prefeito da Comarca local.",
            "d) Chefe de Gabinete da Secretaria de Finanças."
        ],
        answer: 1,
        explanation: "Fundamentação: CPPM e Instruções Correcionais CorregPM. Diligências em dependências militares exigem acompanhamento do Comandante de OPM ou Oficial delegado."
    },
    {
        id: 111,
        idSimulado: 111,
        subject: "JURIDICO",
        topic: "Lei Complementar nº 18.442/26",
        text: "A Promoção por Bravura na Polícia Militar ocorre:",
        options: [
            "a) Somente se houver vaga fixada no almanaque do Quadro.",
            "b) Independentemente da existência de vaga na escala hierárquica do Quadro.",
            "c) Apenas se o militar for possuidor de pós-graduação.",
            "d) Mediante concurso interno de provas e títulos."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 14 da Lei Complementar nº 18.442/26. A promoção por bravura independe da existência de vaga preexistente no Quadro."
    },
    {
        id: 112,
        idSimulado: 112,
        subject: "JURIDICO",
        topic: "RDPM - Lei Complementar nº 893/01",
        text: "Enquadra-se no Comportamento Disciplinar 'Excepcional' a praça que no período de 9 (nove) anos de efetivo serviço:",
        options: [
            "a) Tenha sido punida com até 2 repreensoes.",
            "b) Não tenha sofrido qualquer sanção disciplinar.",
            "c) Tenha cumprido apenas uma permanência disciplinar.",
            "d) Esteja respondendo a IPM em andamento."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 52 do RDPM (LC nº 893/01). Exige ausência total de punições disciplinares pelo período de 9 anos de efetivo serviço."
    },
    {
        id: 113,
        idSimulado: 113,
        subject: "JURIDICO",
        topic: "Doutrina Correcional - CPPM",
        text: "A restituição de coisas apreendidas no âmbito de IPM que não mais interessem à prova nem estejam sujeitas a confisco cabe:",
        options: [
            "a) À Autoridade de Polícia Judiciária Militar antes da remessa dos autos ao Juízo ou ao Juiz Militar competente.",
            "b) Exclusivamente ao Prefeito Municipal.",
            "c) Ao Perito Criminal do caso.",
            "d) Ao chefe do almoxarifado civil."
        ],
        answer: 0,
        explanation: "Fundamentação: Art. 190 do CPPM. A restituição de bens apreendidos cabe à APJM ou ao Juiz Militar competente se não mais interessarem ao processo."
    },
    {
        id: 114,
        idSimulado: 114,
        subject: "JURIDICO",
        topic: "Processos Disciplinares - PDRS",
        text: "No Processo Disciplinar de Rito Sumário (PDRS), o prazo para apresentação de Defesa Prévia pelo acusado após a citação regular é de:",
        options: [
            "a) 24 horas.",
            "b) 5 (cinco) dias úteis.",
            "c) 15 dias corridos.",
            "d) 30 dias."
        ],
        answer: 1,
        explanation: "Fundamentação: Instruções do PAD na PMESP c/c RDPM. O prazo para indicação de provas e defesa prévia no PDRS é de 5 dias úteis."
    },
    {
        id: 115,
        idSimulado: 115,
        subject: "JURIDICO",
        topic: "RDPM - Lei Complementar nº 893/01",
        text: "O Recurso Hierárquico contra ato disciplinar punitivo é dirigido à autoridade:",
        options: [
            "a) Que aplicou a punição em 1ª instância.",
            "b) Imediatamente superior àquela que proferiu a decisão no Pedido de Reconsideração de Ato.",
            "c) Do Poder Judiciário Federal.",
            "d) Do Ministério Público do Trabalho."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 61 do RDPM (LC nº 893/01). O Recurso Hierárquico é apreciado pela autoridade imediatamente superior à que manteve a punição."
    },

    // =========================================================================
    // ASSUNTOS ORGANIZACIONAIS (~20%) - QUESTÕES 116 A 150
    // =========================================================================
    {
        id: 116,
        idSimulado: 116,
        subject: "ORGANIZACIONAL",
        topic: "Regime de Trabalho - Portaria nº PM1-7/02/23",
        text: "Com base na Portaria do Cmt G nº PM1-7/02/23 (Regime de Trabalho na PMESP), o policial militar fixado na escala de turnos de 12 horas (12x36 ou 12x24/12x48) terá direito a 1 (uma) folga mensal obrigatória após cumprir ininterruptamente quantos serviços?",
        options: [
            "a) 9 (nove) serviços.",
            "b) 12 (doze) serviços.",
            "c) 14 (quatorze) serviços.",
            "d) 18 (dezoito) serviços."
        ],
        answer: 2,
        explanation: "Fundamentação: Art. 12 da Portaria do Cmt G nº PM1-7/02/23. Nas escalas de 12h, a folga mensal regulamentar é adquirida a cada 14 serviços cumpridos."
    },
    {
        id: 117,
        idSimulado: 117,
        subject: "ORGANIZACIONAL",
        topic: "Regime de Trabalho - Portaria nº PM1-7/02/23",
        text: "Na escala de serviço de 24 horas de trabalho por 48 horas de descanso (24x48), prevista na Portaria nº PM1-7/02/23, o policial militar faz jus a 1 (uma) folga mensal a cada quantos serviços cumpridos?",
        options: [
            "a) 5 serviços.",
            "b) 9 (nove) serviços ininterruptos.",
            "c) 14 serviços.",
            "d) 20 serviços."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 12 da Portaria do Cmt G nº PM1-7/02/23. Na escala de 24x48, a folga mensal regulamentar é concedida a cada 9 serviços."
    },
    {
        id: 118,
        idSimulado: 118,
        subject: "ORGANIZACIONAL",
        topic: "Material Bélico - Portaria nº PM4-001/1.2/24",
        text: "O policial militar que extraviar o seu Certificado de Registro de Arma de Fogo (CRAF) de armamento institucional ou particular deve adotar a seguinte providência imediata nos termos da Portaria nº PM4-001/1.2/24:",
        options: [
            "a) Continuar portando a arma normalmente sem registro físico.",
            "b) Registrar Boletim de Ocorrência e comunicar imediatamente o fato por escrito ao seu Comandante de Unidade.",
            "c) Adquirir outro armamento no comércio para substituição.",
            "d) Aguardar o licenciamento anual para informar a OPM."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 21 da Portaria nº PM4-001/1.2/24. Em caso de perda/extravio de CRAF, exige-se lavratura de BO e comunicação formal à OPM."
    },
    {
        id: 119,
        idSimulado: 119,
        subject: "ORGANIZACIONAL",
        topic: "Material Bélico - Portaria nº PM4-001/1.2/24",
        text: "O Comandante de Unidade é OBRIGADO a revogar a autorização para Carga Individual de material bélico da PMESP ao policial militar que:",
        options: [
            "a) For movimentado de Companhia a pedido próprio.",
            "b) Ingressar no comportamento disciplinar 'Mau' e enquanto nele permanecer.",
            "c) Completar 10 anos de efetivo serviço.",
            "d) For aprovado no Teste de Aptidão Física."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 11 da Portaria nº PM4-001/1.2/24. O ingresso no comportamento 'Mau' impõe a revogação OBRIGATÓRIA da carga individual de armas."
    },
    {
        id: 120,
        idSimulado: 120,
        subject: "ORGANIZACIONAL",
        topic: "Material Bélico - Portaria nº PM4-001/1.2/24",
        text: "A revogação da autorização de Carga Individual pelo período de 12 (doze) meses é MEDIDA OBRIGATÓRIA aplicável ao policial militar que:",
        options: [
            "a) Tiver o material bélico sob sua Carga Individual furtado, roubado ou extraviado.",
            "b) For transferido de Batalhão a pedido.",
            "c) Solicitar licença-prêmio em parcelas de 15 dias.",
            "d) Mudar de residência no mesmo município."
        ],
        answer: 0,
        explanation: "Fundamentação: Art. 11, § 3º da Portaria nº PM4-001/1.2/24. Furto, roubo ou extravio de material bélico em carga individual gera revogação compulsória por 12 meses."
    },
    {
        id: 121,
        idSimulado: 121,
        subject: "ORGANIZACIONAL",
        topic: "Afastamentos Regulamentares",
        text: "Ocorrendo fato gerador de Afastamento por Luto (falecimento de cônjuge, pais ou filhos) durante o gozo de férias regulamentares do policial militar, qual orientação deve ser observada?",
        options: [
            "a) O luto absorve as férias e o policial perde o saldo restante.",
            "b) O gozo das férias é interrompido/suspenso, iniciando-se o afastamento por luto, sendo o saldo remanescente das férias gozado posteriormente.",
            "c) O luto deve ser usufruído somente após o encerramento total das férias.",
            "d) O policial deve retornar ao trabalho imediatamente sem direito ao luto."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretrizes da Diretoria de Pessoal (DP-PMESP). Afastamentos compulsórios em razão de luto ou núpcias suspendem a contagem das férias."
    },
    {
        id: 122,
        idSimulado: 122,
        subject: "ORGANIZACIONAL",
        topic: "Sistema de Teste de Aptidão Física - SisTAF",
        text: "No tocante ao Sistema de Teste de Aptidão Física (SisTAF) na PMESP, assinale a afirmativa correta:",
        options: [
            "a) A realização do TAF é facultativa para praças da ativa.",
            "b) O SisTAF constitui ferramenta contínua de avaliação da aptidão física, sendo a aprovação nos níveis regulamentares requisito obrigatório nos processos promocionais.",
            "c) Policiais militares gestantes realizam obrigatoriamente a prova de corrida de 12 minutos.",
            "d) O SisTAF é aplicado exclusivamente aos Cadetes da Academia do Barro Branco."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretrizes do SisTAF / Diretoria de Pessoal. A aprovação no SisTAF é requisito de prontidão e condição em processos promocionais."
    },
    {
        id: 123,
        idSimulado: 123,
        subject: "ORGANIZACIONAL",
        topic: "Violência Doméstica - Protocolo Institucional",
        text: "Quando um policial militar for envolvido em ocorrência de Violência Doméstica na condição de autor/agressor, qual medida cautelar administrativa/correcional deve ser adotada imediatamente pelo Comando da OPM?",
        options: [
            "a) Transferência sumária do militar para a reserva ex officio.",
            "b) Recolhimento cautelar do armamento (institucional e particular) e avaliação psicológica e correcional imediata do envolvido.",
            "c) Concessão de elogio em boletim por preservar a intimidade familiar.",
            "d) Suspensão dos vencimentos do militar sem procedimento legal."
        ],
        answer: 1,
        explanation: "Fundamentação: Protocolo Institucional de Violência Doméstica da PMESP. A prevenção de riscos exige o recolhimento cautelar do armamento e suporte de saúde."
    },
    {
        id: 124,
        idSimulado: 124,
        subject: "ORGANIZACIONAL",
        topic: "Treinamento Continuado - Método Giraldi",
        text: "O Programa de Treinamento Continuado em Tiro Defensivo na Preservação da Vida (Método Giraldi) pauta-se precipuamente pelo:",
        options: [
            "a) Disparo reflexo sem identificação de alvos.",
            "b) Condicionamento tático pautado pelo respeito à lei, direitos humanos e uso legítimo e progressivo da força com foco na preservação de vidas.",
            "c) Treinamento exclusivo para competições esportivas de tiro.",
            "d) Emprego de munição real em ambientes sem pista de tiro isolada."
        ],
        answer: 1,
        explanation: "Fundamentação: Doutrina do Método Giraldi (PMESP). Fundamenta-se na preservação da vida, uso legítimo da força e respeito aos Direitos Humanos."
    },
    {
        id: 125,
        idSimulado: 125,
        subject: "ORGANIZACIONAL",
        topic: "Processo Administrativo - Sindicância",
        text: "A apuração de colisão envolvendo viatura policial militar que resulte em danos ao patrimônio público exige a instauração de:",
        options: [
            "a) Inquérito Policial Militar de Incompetência.",
            "b) Sindicância, assegurados o contraditório e a ampla defesa ao motorista envolvido.",
            "c) Desconto direto no contracheque sem procedimento apuratório.",
            "d) Processo de Exclusão por Inaptidão Veicular."
        ],
        answer: 1,
        explanation: "Fundamentação: Instruções de Sindicância da PMESP (I-16-PM). A apuração de avarias em viaturas/bens públicos exige instauração de Sindicância."
    },
    {
        id: 126,
        idSimulado: 126,
        subject: "ORGANIZACIONAL",
        topic: "Material Bélico - Portaria nº PM4-001/1.2/24",
        text: "O policial militar de folga que pretenda frequentar locais de aglomeração de pessoas portando sua arma de fogo deve cumprir a seguinte condição da Portaria nº PM4-001/1.2/24:",
        options: [
            "a) Exibir a arma ostensivamente na cintura.",
            "b) Cientificar o policiamento do evento, portar a arma de forma velada e abster-se do consumo de bebidas alcoólicas.",
            "c) Entregar a arma ao organizador do evento civil na entrada.",
            "d) Dispensar qualquer aviso por possuir porte livre."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 7º, parágrafo único da Portaria nº PM4-001/1.2/24. Exige porte velado, sobriedade total e dar ciência ao policiamento da área."
    },
    {
        id: 127,
        idSimulado: 127,
        subject: "ORGANIZACIONAL",
        topic: "Material Bélico - Portaria nº PM4-001/1.2/24",
        text: "A Carga Individual de material bélico concedida ao policial militar abrange:",
        options: [
            "a) Uma arma de fogo de porte, cartuchos operacionais correspondentes e um colete de proteção balística.",
            "b) Duas metralhadoras e granadas quimicas.",
            "c) Apenas munição de treino sem armamento.",
            "d) Exclusivamente espingarda calibre 12."
        ],
        answer: 0,
        explanation: "Fundamentação: Art. 11 da Portaria nº PM4-001/1.2/24. A carga individual compreende a arma de porte, munição e colete balístico."
    },
    {
        id: 128,
        idSimulado: 128,
        subject: "ORGANIZACIONAL",
        topic: "Afastamentos Regulamentares",
        text: "O afastamento regulamentar em virtude de casamento (Licença Nupcial) concedido ao militar do Estado é de:",
        options: [
            "a) 3 dias.",
            "b) 5 dias.",
            "c) 8 (oito) dias consecutivos.",
            "d) 15 dias."
        ],
        answer: 2,
        explanation: "Fundamentação: Regulamento de Afastamentos da PMESP. Concede 8 dias consecutivos a contar do casamento civil."
    },
    {
        id: 129,
        idSimulado: 129,
        subject: "ORGANIZACIONAL",
        topic: "SisTAF - TAF Alternativo",
        text: "O policial militar que apresentar restrição médica temporária atestada pela Junta Regular de Saúde para a corrida de 12 minutos realiza no SisTAF:",
        options: [
            "a) Prova alternativa regulamentada (como caminhada de 2.400m ou natação de 200m).",
            "b) Subida em corda naval de 10 metros.",
            "c) Maratona de 42 km.",
            "d) Abdominal remador em velocidade máxima."
        ],
        answer: 0,
        explanation: "Fundamentação: Diretrizes do SisTAF / Diretoria de Pessoal. Permite aplicação de prova alternativa de menor impacto autorizada pela JRS."
    },
    {
        id: 130,
        idSimulado: 130,
        subject: "ORGANIZACIONAL",
        topic: "Violência Doméstica - Prisão de Militar",
        text: "Ocorrendo prisão em flagrante de policial militar por crime de violência doméstica contra a mulher, o recolhimento do militar preso deve ser efetuado no:",
        options: [
            "a) Centro de Detenção Provisória civil comum.",
            "b) Presídio Militar Romão Gomes ou dependência de OPM designada para custódia militar.",
            "c) Domicílio da vítima sob vigilância privada.",
            "d) Prédio da Câmara Municipal."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 242 do CPPM e Diretrizes Correcionais. O militar preso permanece sob custódia em estabelecimento militar (PMRG / OPM)."
    },
    {
        id: 131,
        idSimulado: 131,
        subject: "ORGANIZACIONAL",
        topic: "Material Bélico - Armas Particulares",
        text: "Para que o policial militar possa portar arma de fogo particular, é indispensável:",
        options: [
            "a) Apenas a nota fiscal da loja.",
            "b) O devido cadastro no sistema corporativo de material bélico e expedição do respectivo CRAF.",
            "c) Autorização verbal do Prefeito.",
            "d) Inexistência de multas de trânsito."
        ],
        answer: 1,
        explanation: "Fundamentação: Portaria nº PM4-001/1.2/24. Exige cadastro no sistema corporativo e expedição do CRAF."
    },
    {
        id: 132,
        idSimulado: 132,
        subject: "ORGANIZACIONAL",
        topic: "Regime de Trabalho - DEJEM",
        text: "A execução de serviço na Diária Especial por Jornada Extraordinária de Trabalho Policial-Militar (DEJEM) possui natureza de trabalho:",
        options: [
            "a) Compulsória e não remunerada.",
            "b) Voluntária e gratificada, realizada durante o período de folga do militar.",
            "c) Substitutiva do expediente ordinário.",
            "d) Exclusiva para praças punidas."
        ],
        answer: 1,
        explanation: "Fundamentação: LC Estadual nº 1.227/13 (DEJEM). A prestação é voluntária, gratificada e executada nas folgas regulamentares."
    },
    {
        id: 133,
        idSimulado: 133,
        subject: "ORGANIZACIONAL",
        topic: "Afastamentos Regulamentares",
        text: "O policial militar masculino faz jus à Licença Paternidade pelo nascimento de filho pelo período regulamentar total de:",
        options: [
            "a) 5 dias corridos.",
            "b) 20 (vinte) dias consecutivos (com a prorrogação estadual).",
            "c) 60 dias.",
            "d) 180 dias."
        ],
        answer: 1,
        explanation: "Fundamentação: Decreto Estadual nº 62.138/16. A licença paternidade abrange o período base somado à prorrogação estadual, totalizando 20 dias."
    },
    {
        id: 134,
        idSimulado: 134,
        subject: "ORGANIZACIONAL",
        topic: "Processo Administrativo - Apuração Preliminar",
        text: "A Apuração Preliminar é o procedimento simplificado instaurado quando a infração não estiver suficientemente caracterizada quanto à autoria. Seu prazo de conclusão é de:",
        options: [
            "a) 10 dias.",
            "b) 30 (trinta) dias.",
            "c) 90 dias.",
            "d) 1 ano."
        ],
        answer: 1,
        explanation: "Fundamentação: Instruções de Processo Administrativo PMESP (I-16-PM). O prazo regular de conclusão é de 30 dias, prorrogável motivadamente."
    },
    {
        id: 135,
        idSimulado: 135,
        subject: "ORGANIZACIONAL",
        topic: "Regime de Trabalho - Portaria nº PM1-7/02/23",
        text: "No regime de expediente administrativo das 08:00 às 18:00 horas, a jornada semanal de trabalho desmultiplica-se em:",
        options: [
            "a) 10 turnos de 5 horas sem folga.",
            "b) 8 turnos de trabalho efetivo, sendo 2 turnos convertidos em folgas regulamentares.",
            "c) 5 turnos no final de semana.",
            "d) 20 horas semanais no total."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 8º da Portaria nº PM1-7/02/23. No expediente padrão (10 turnos de 5h), 8 turnos são trabalhados e 2 convertidos em folga."
    },
    {
        id: 136,
        idSimulado: 136,
        subject: "ORGANIZACIONAL",
        topic: "Material Bélico - Portaria nº PM4-001/1.2/24",
        text: "O policial militar com Carga Individual de material bélico que vá realizar viagem ao exterior em gozo de férias deve:",
        options: [
            "a) Levar a arma institucional na viagem.",
            "b) Recolher obrigatoriamente a arma, munições e colete na reserva de armas da Unidade antes da viagem.",
            "c) Entregar a arma em hotel do país de destino.",
            "d) Deixar a arma no veículo no aeroporto."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 18 da Portaria nº PM4-001/1.2/24. Viagens ao exterior exigem recolhimento cautelar obrigatório do material bélico na OPM."
    },
    {
        id: 137,
        idSimulado: 137,
        subject: "ORGANIZACIONAL",
        topic: "Afastamentos Regulamentares",
        text: "O gozo do bloco de 90 dias de Licença-Prêmio pode ser fracionado, a pedido do interessado e conveniência do serviço, em parcelas não inferiores a:",
        options: [
            "a) 5 dias.",
            "b) 15 (quinze) dias.",
            "c) 45 dias.",
            "d) 60 dias."
        ],
        answer: 1,
        explanation: "Fundamentação: Regulamento de Licença-Prêmio / Diretoria de Pessoal. Permite fracionamento em períodos mínimos regulamentares de 15 dias."
    },
    {
        id: 138,
        idSimulado: 138,
        subject: "ORGANIZACIONAL",
        topic: "Violência Doméstica - Apoio Interno",
        text: "Em ocorrências de conflito familiar/violência doméstica envolvendo policiais militares, o Comando da OPM encaminhará as partes para suporte de qual órgão interno?",
        options: [
            "a) Seção de Tesouraria.",
            "b) Centro de Assistência Social (CAS) / Diretoria de Saúde.",
            "c) Fundo Social Municipal exclusivamente.",
            "d) Junta Comercial."
        ],
        answer: 1,
        explanation: "Fundamentação: Protocolo Institucional de Prevenção a Conflitos Familiares. Encaminha as partes para acompanhamento do CAS/Diretoria de Saúde."
    },
    {
        id: 139,
        idSimulado: 139,
        subject: "ORGANIZACIONAL",
        topic: "Processo Administrativo - Sindicância",
        text: "Sindicância instaurada para apurar extravio involuntário de rádio HT em enchente que conclua por motivo de força maior e ausência de culpa enseja:",
        options: [
            "a) Demissão do policial militar.",
            "b) Arquivamento do processo e baixa patrimonial do bem sem débito financeiro ao militar.",
            "c) Desconto de 10 equipamentos na folha de pagamento.",
            "d) Remessa do policial ao Presídio Romão Gomes."
        ],
        answer: 1,
        explanation: "Fundamentação: Instruções de Sindicância da PMESP (I-16-PM). Caracterizada a força maior e ausência de culpa, impõe-se o arquivamento sem débito."
    },
    {
        id: 140,
        idSimulado: 140,
        subject: "ORGANIZACIONAL",
        topic: "Regime de Trabalho - Atividade Delegada",
        text: "A prestação de serviço em Atividade Delegada pelo policial militar em folga exige:",
        options: [
            "a) Cumprimento obrigatório mesmo em licença médica.",
            "b) Voluntariedade, estar no gozo de folga, fardado, em plena aptidão funcional e respeitando o limite de horas extraordinárias.",
            "c) Dispensa do uso de fardamento corporativo.",
            "d) Substituição do patrulhamento ordinário."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretrizes da Atividade Delegada PMESP. Exige voluntariedade, fardamento, aptidão e cumprimento durante a folga."
    },
    {
        id: 141,
        idSimulado: 141,
        subject: "ORGANIZACIONAL",
        topic: "Treinamento Continuado - Método Giraldi",
        text: "As Pistas de Aplicação do Método Giraldi visam simular cenários operacionais onde o policial desenvolve reflexos de:",
        options: [
            "a) Disparo contínuo sem verbalização.",
            "b) Verbalização, abrigamento, identificação de alvo e tomada de decisão legal sobre disparar ou não disparar.",
            "c) Tiro de precisão esportiva a 500 metros.",
            "d) Arremesso de granadas de mão."
        ],
        answer: 1,
        explanation: "Fundamentação: Doutrina do Método Giraldi PMESP. Condiciona o policial à verbalização, postura tática e decisão legal respaldada."
    },
    {
        id: 142,
        idSimulado: 142,
        subject: "ORGANIZACIONAL",
        topic: "Processo Administrativo - PAD",
        text: "A citação do acusado em procedimento disciplinar da OPM concede para apresentação de Defesa Prévia o prazo de:",
        options: [
            "a) 24 horas.",
            "b) 5 (cinco) dias úteis.",
            "c) 15 dias corridos.",
            "d) 30 dias."
        ],
        answer: 1,
        explanation: "Fundamentação: Instruções de Processo Administrativo PMESP c/c RDPM. A citação para defesa prévia garante prazo de 5 dias úteis."
    },
    {
        id: 143,
        idSimulado: 143,
        subject: "ORGANIZACIONAL",
        topic: "Material Bélico - Portaria nº PM4-001/1.2/24",
        text: "Policial militar submetido a restrição médica/psicológica do porte de arma pela Junta de Saúde tem sua Carga Individual de armamento:",
        options: [
            "a) Mantida sob sua posse em domicílio.",
            "b) Revogada e recolhida cautelarmente para depósito na reserva de armas da Unidade.",
            "c) Vendida em leilão imediatamente.",
            "d) Transferida para um familiar civil."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 12 da Portaria nº PM4-001/1.2/24. A restrição médica/psicológica impõe o recolhimento cautelar do material bélico."
    },
    {
        id: 144,
        idSimulado: 144,
        subject: "ORGANIZACIONAL",
        topic: "Regime de Trabalho - Portaria nº PM1-7/02/23",
        text: "O intervalo para refeição nas escalas operacionais de 12 horas tem a duração regulamentar de:",
        options: [
            "a) 1 (uma) hora, concedido mediante escalonamento das equipes para não desfalcar a cobertura operacional.",
            "b) 4 horas contínuas fora do município.",
            "c) 15 minutos em viatura em movimento.",
            "d) Inexistente em turnos de 12 horas."
        ],
        answer: 0,
        explanation: "Fundamentação: Art. 10 da Portaria nº PM1-7/02/23. Prevê intervalo de 1 hora escalonado para manutenção da cobertura tática."
    },
    {
        id: 145,
        idSimulado: 145,
        subject: "ORGANIZACIONAL",
        topic: "Afastamentos Regulamentares",
        text: "O afastamento por motivo de Luto decorrente do falecimento de cônjuge, pais ou filhos concede ao militar do Estado o período de:",
        options: [
            "a) 3 dias corridos.",
            "b) 8 (oito) dias consecutivos.",
            "c) 15 dias úteis.",
            "d) 30 dias."
        ],
        answer: 1,
        explanation: "Fundamentação: Regulamento de Afastamentos da PMESP. Concede 8 dias consecutivos a contar do óbito de familiares diretos."
    },
    {
        id: 146,
        idSimulado: 146,
        subject: "ORGANIZACIONAL",
        topic: "SisTAF - Avaliação Corporativa",
        text: "A aprovação no SisTAF é exigida com qual finalidade regulamentar na carreira do policial militar?",
        options: [
            "a) Requisito compulsório de higidez física e pronto emprego para inclusão em Quadro de Acesso e Promoção.",
            "b) Critério para concessão de desconto no imposto de renda.",
            "c) Isenção do cumprimento do Regulamento Disciplinar.",
            "d) Obtenção de autorização para residir em outro Estado."
        ],
        answer: 0,
        explanation: "Fundamentação: Diretrizes do SisTAF / Diretoria de Pessoal. A aprovação é requisito obrigatório para pontuação e promoção na carreira."
    },
    {
        id: 147,
        idSimulado: 147,
        subject: "ORGANIZACIONAL",
        topic: "Material Bélico - Portaria nº PM4-001/1.2/24",
        text: "A autorização de aquisição de arma de fogo de uso restrito por policial militar da ativa é de competência do:",
        options: [
            "a) Comandante da Companhia.",
            "b) Comandante-Geral da Polícia Militar.",
            "c) Delegado do Ministério do Trabalho.",
            "d) Chefe do Almoxarifado Municipal."
        ],
        answer: 1,
        explanation: "Fundamentação: Portaria nº PM4-001/1.2/24. A autorização para aquisição de arma de uso restrito por militar cabe ao Comandante-Geral."
    },
    {
        id: 148,
        idSimulado: 148,
        subject: "ORGANIZACIONAL",
        topic: "Violência Doméstica - Medida Preventiva OPM",
        text: "Em caso de concessão de Medida Protetiva de Urgência pelo Judiciário em desfavor de policial militar em conflito familiar, a OPM deve determinar:",
        options: [
            "a) O recolhimento imediato de todo o armamento sob posse do militar e seu acompanhamento pela Seção de Saúde.",
            "b) A promoção automática do militar para evitar abalo emocional.",
            "c) A transferência do militar para outro Estado da Federação.",
            "d) A destruição da carteira de identidade funcional."
        ],
        answer: 0,
        explanation: "Fundamentação: Protocolo Institucional de Violência Doméstica PMESP. A concessão de MPU exige recolhimento cautelar do armamento."
    },
    {
        id: 149,
        idSimulado: 149,
        subject: "ORGANIZACIONAL",
        topic: "Processo Administrativo - Sindicância",
        text: "A Sindicância concluída que comprove responsabilidade subjetiva (dolo ou culpa) de policial em dano a viatura enseja:",
        options: [
            "a) Parecer para ressarcimento ao erário e remessa de cópia para apuração disciplinar/penal cabível.",
            "b) Promoção por merecimento imediata.",
            "c) Arquivamento definitivo com perda do bem.",
            "d) Envio do processo para a Receita Federal."
        ],
        answer: 0,
        explanation: "Fundamentação: Instruções de Sindicância da PMESP (I-16-PM). Constatada a responsabilidade pelo dano, propõe-se o ressarcimento e medidas correcionais."
    },
    {
        id: 150,
        idSimulado: 150,
        subject: "ORGANIZACIONAL",
        topic: "Regime de Trabalho - Portaria nº PM1-7/02/23",
        text: "O controle do cumprimento das escalas de serviço operacionais e a concessão de folgas regulamentares na Companhia é de responsabilidade gerencial direta do:",
        options: [
            "a) Comandante da Companhia PM / Chefe da Seção de Pessoal e Operações.",
            "b) Presidente do Conselho de Bairro.",
            "c) Juiz de Direito da Comarca.",
            "d) Delegado de Polícia Titular."
        ],
        answer: 0,
        explanation: "Fundamentação: Portaria nº PM1-7/02/23. Cabe ao Comando de Cia / Seção de Operações a gestão direta do cumprimento de escalas e folgas."
    },
        // =========================================================================
    // BLOCO ADICIONAL DE 50 QUESTÕES INÉDITAS E PRINCIPICAIS (QUESTÕES 151 A 200)
    // =========================================================================
    {
        id: 151,
        idSimulado: 151,
        subject: "OPERACIONAL",
        topic: "NORSOP - Princípios e Diretrizes Doutrinárias",
        text: "Durante a elaboração do planejamento operacional de um Batalhão de Área, o Chefe da P/3 propõe a supressão temporária do patrulhamento em determinada subárea comercial para concentrar todo o efetivo em um evento festivo local. À luz dos princípios e diretrizes doutrinárias regentes da Norma Operacional Padrão (NORSOP - Diretriz nº PM3-001/02/20), a proposta do Oficial viola diretamente qual princípio fundamental do policiamento ostensivo?",
        options: [
            "a) Princípio da Supremacia do Interesse Privado, que determina o atendimento prioritário a eventos fechados com cobrança de ingressos.",
            "b) Princípio da Continuidade do Serviço Policial-Militar, que estabelece que a presença ostensiva e a cobertura preventiva não podem ser descontinuadas nas subáreas sob responsabilidade da OPM.",
            "c) Princípio da Unidade de Comando, que proíbe a realização de operações extraordinárias em dias de semana.",
            "d) Princípio da Flexibilidade Absoluta, que faculta ao Comandante de Companhia extinguir o Rádio Patrulhamento sem prévia autorização judicial."
        ],
        answer: 1,
        explanation: "Fundamentação: NORSOP (Diretriz nº PM3-001/02/20, item 2.2). O Princípio da Continuidade do Serviço Policial-Militar impõe a manutenção ininterrupta da cobertura preventiva básica nas subáreas sob responsabilidade da OPM."
    },
    {
        id: 152,
        idSimulado: 152,
        subject: "OPERACIONAL",
        topic: "SCIPM - Princípios do Sistema de Comando de Incidentes",
        text: "No gerenciamento de um grande incêndio em parque industrial com vazamento de produtos químicos, reúnem-se no local o Corpo de Bombeiros, o Policiamento de Área, a CETESB e a Defesa Civil. Para evitar ordens conflitantes e garantir a eficiência das ações, os órgãos adotam o modelo de Comando Unificado do SCIPM (Diretriz nº PM3-003/02/23). Quanto às características do Comando Unificado, assinale a opção que traduz corretamente suas diretrizes:",
        options: [
            "a) Cada instituição estabelece o seu próprio Posto de Comando físico isolado e atua de forma autônoma sem prestar contas aos demais órgãos.",
            "b) As agências operam sob um único Posto de Comando físico, determinam objetivos e estratégias conjuntas em um só Plano de Ação do Incidente (PAI), mantendo a integridade de suas respectivas cadeias de comando.",
            "c) O Comandante do Policiamento de Área assume a coordenação operacional direta e exclusiva dos bombeiros e técnicos da CETESB em substituição aos seus respectivos superiores.",
            "d) O Comando Unificado extingue o princípio da Unidade de Comando, permitindo que os subordinados recebam ordens simultâneas de qualquer autoridade presente."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz nº PM3-003/02/23 (SCIPM, item 5.5). No Comando Unificado, há apenas 1 Posto de Comando físico; as decisões e o PAI são integrados, respeitando-se as competências legais e a cadeia de comando de cada agência."
    },
    {
        id: 153,
        idSimulado: 153,
        subject: "OPERACIONAL",
        topic: "Sistema de C2 - Princípios e Atributos da Informação",
        text: "Em termos de doutrina de Comando e Controle (Diretriz nº PM3-001/02/23), a informação que subsidia a tomada de decisão no Nível Tático precisa preencher atributos essenciais de qualidade. Quando o Oficial Coordenador Operacional recebe dados em tempo hábil para interferir no curso de uma ocorrência grave em andamento, diz-se que a informação atendeu primordialmente ao atributo da:",
        options: [
            "a) Redundância estática.",
            "b) Oportunidade (ou Tempestividade).",
            "c) Inalterabilidade compulsória.",
            "d) Imparcialidade sumária."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz nº PM3-001/02/23 (C2, item 4.2). O atributo da Oportunidade (Tempestividade) estabelece que a informação deve chegar ao tomador de decisão a tempo de permitir ações eficazes."
    },
    {
        id: 154,
        idSimulado: 154,
        subject: "OPERACIONAL",
        topic: "Câmeras Operacionais Portáteis (COP) - Diretrizes e Uso Ético",
        text: "Policial militar equipado com Câmera Operacional Portátil (COP) é acionado para atender ocorrência de tentativa de suicídio em ambiente privado. Diante do quadro, o policial desliga voluntariamente o equipamento sob a justificativa de que a cena causaria constrangimento ao indivíduo. Nos termos da Diretriz nº PM3-001/02/25 (COP), assinale a opção correta quanto ao enquadramento da conduta:",
        options: [
            "a) A conduta está correta, pois a preservação da intimidade prevalece sobre o dever de gravação em qualquer tipo de ocorrência de emergência.",
            "b) A conduta está incorreta, pois a gravação é compulsória em intervenções operacionais e atendimentos de ocorrência, devendo a proteção da intimidade da pessoa ser resguardada na restrição do acesso às mídias, e não pelo desligamento unilateral do equipamento.",
            "c) A conduta é lícita desde que o cidadão assine termo de recusa de gravação antes da intervenção policial.",
            "d) A conduta configura falta médica de competência exclusiva do Conselho Regional de Medicina."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz nº PM3-001/02/25 (COP, item 6.3). A gravação de interações operacionais é obrigatória. A preservação da intimidade é tratada na limitação de acesso e sigilo das mídias, vedada a interrupção unilateral do registro pelo policial."
    },
    {
        id: 155,
        idSimulado: 155,
        subject: "OPERACIONAL",
        topic: "Programas de Policiamento - Filosofia de Polícia Comunitária",
        text: "A implantação da filosofia de Polícia Comunitária na PMESP fundamenta-se em princípios organizacionais e operacionais bem delimitados. Dentre as alternativas abaixo, qual representa um PRINCIPIAMENTO CENTRAL dessa filosofia?",
        options: [
            "a) Centralização do processo decisório nas instâncias administrativas do Comando-Geral.",
            "b) Descentralização tática e mobilização comunitária para a solução preventiva de problemas de segurança no nível local.",
            "c) Atuação reativa focada estritamente na lavratura de autos de prisão após a consumação dos delitos.",
            "d) Transferência da responsabilidade de patrulhamento ostensivo para empresas de vigilância privada."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretrizes de Polícia Comunitária PMESP. O pilar central é a descentralização tática e a parceria com a comunidade para resolução de problemas (Método IARA)."
    },
    {
        id: 156,
        idSimulado: 156,
        subject: "JURIDICO",
        topic: "Lei Complementar nº 18.442/26 - Princípios da Carreira",
        text: "A Lei Complementar nº 18.442/26 reestruturou os Quadros de Oficiais da PMESP. Em relação às promoções na hierarquia policial-militar, a norma consagra o princípio de que a ascensão na carreira baseia-se em critérios objetivos e de valor profissional. Assinale a alternativa que indica uma exigência novatio legis introduzida para a promoção ao posto de Capitão PM do QOEM:",
        options: [
            "a) Conclusão obrigatória de curso de graduação em Engenharia Civil.",
            "b) Aprovação na Avaliação de Competência Profissional (ACP) e cumprimento do interstício mínimo de 4 anos como 1º Tenente PM.",
            "c) Isenção total do Teste de Aptidão Física (SisTAF) para todos os concorrentes.",
            "d) Apresentação de artigo científico publicado no exterior."
        ],
        answer: 1,
        explanation: "Fundamentação: Arts. 8º e 11 da LC nº 18.442/26. Para acesso ao posto de Capitão PM, exige-se aprovação na ACP e o cumprimento do interstício legalmente fixado."
    },
    {
        id: 157,
        idSimulado: 157,
        subject: "JURIDICO",
        topic: "RDPM - Princípios Fundamentais do Regime Disciplinar",
        text: "De acordo com os princípios e disposições gerais do Regulamento Disciplinar da Polícia Militar (LC nº 893/01), a disciplina policial-militar é conceituada como:",
        options: [
            "a) A rigorosa observância e o acatamento integral das leis, regulamentos, normas e disposições que fundamentam o organismo policial-militar e traduzem-se pelo cumprimento do dever por parte de todos e de cada um dos seus integrantes.",
            "b) A faculdade atribuída aos superiores hierárquicos de aplicar punições verbais sem necessidade de fundamentação escrita.",
            "c) A subordinação exclusiva dos praças às ordens judiciais de natureza cível.",
            "d) A obrigação de cumprir ordens de superiores mesmo quando manifestamente ilegais."
        ],
        answer: 0,
        explanation: "Fundamentação: Art. 2º da LC nº 893/01 (RDPM). É o conceito exato de disciplina policial-militar positivado na norma."
    },
    {
        id: 158,
        idSimulado: 158,
        subject: "JURIDICO",
        topic: "RDPM - Hierarquia e Subordinação",
        text: "Nos termos do RDPM (LC nº 893/01), quando uma ordem exarada por autoridade superior parecer manifestamente ilegal ao subordinado incumbido de sua execução, qual é a diretriz normativa a ser adotada?",
        options: [
            "a) O subordinado deve cumprir a ordem imediatamente e requerer indenização financeira posterior.",
            "b) O subordinado não deve cumpri-la, representando imediatamente à autoridade superior competente, sob pena de responder em concurso pelas ilegalidades praticadas.",
            "c) O subordinado deve cumprir a ordem mediante assinatura de termo de isenção formulado pelo próprio punho.",
            "d) O subordinado deve ausentar-se do serviço sem avisar a OPM."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 10, § 2º do RDPM (LC nº 893/01). Ordens manifestamente ilegais não devem ser cumpridas, devendo o fato ser representado à autoridade competente."
    },
    {
        id: 159,
        idSimulado: 159,
        subject: "JURIDICO",
        topic: "Doutrina Correcional - Princípios do Processo Administrativo Disciplinar",
        text: "No âmbito dos Processos Disciplinares (PAD, CD, CJ), o Princípio da Inviolabilidade da Ampra Defesa e do Contraditório assegura ao acusado o direito de acompanhar os atos instrutórios. Caso uma testemunha de acusação seja ouvida sem a prévia e regular intimação do acusado e de seu defensor constituído, o procedimento padece de:",
        options: [
            "a) Mero vício sanável sem qualquer reflexo administrativo.",
            "b) Nulidade absoluta por cerceamento de defesa, invalidando o ato probatório praticado e os dele decorrentes.",
            "c) Confissão ficta do acusado.",
            "d) Anulação automática da carreira militar da testemunha."
        ],
        answer: 1,
        explanation: "Fundamentação: Instruções de PAD na PMESP c/c Súmula Vinculante 5 do STF. A ausência de intimação para oitiva de testemunha gera cerceamento de defesa e nulidade absoluta do ato."
    },
    {
        id: 160,
        idSimulado: 160,
        subject: "ORGANIZACIONAL",
        topic: "Material Bélico - Princípios de Posse e Guarda",
        text: "A Portaria nº PM4-001/1.2/24 disciplina o uso e a guarda de material bélico. O princípio da responsabilidade patrimonial e de salvaguarda do armamento estabelece que o policial militar em gozo de folga é responsável pela custódia segura de sua arma de fogo. A esse respeito, assinale a conduta que VIOLA frontalmente as normas corporativas:",
        options: [
            "a) Guardar a arma de fogo desalimentada em cofre ou local seguro no interior de sua residência.",
            "b) Deixar a arma de fogo no porta-luvas de veículo estacionado em via pública desacompanhada de vigilância.",
            "c) Transportar o armamento veladamente junto ao corpo.",
            "d) Manter as munições armazenadas em local seco e abrigado do calor excessivo."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 8º da Portaria nº PM4-001/1.2/24. Deixar armamento em veículo sem vigilância constitui negligência grave na guarda de material bélico."
    },
    {
        id: 161,
        idSimulado: 161,
        subject: "OPERACIONAL",
        topic: "NORSOP - Matrizes e Níveis de Resposta",
        text: "Durante um protesto violento com bloqueio de rodovia e arremesso de artefatos incendiários contra a tropa, o Coordenador Operacional solicita o empenho do Batalhão de Polícia de Choque (BPChq) para restauração da ordem pública. Segundo a NORSOP (Diretriz nº PM3-001/02/20), o emprego de tropa especializada em Controle de Distúrbios Civis de nível corporativo classifica o evento na:",
        options: [
            "a) Matriz Operacional I / Nível de Resposta 1.",
            "b) Matriz Operacional II / Nível de Resposta 2.",
            "c) Matriz Operacional III / Nível de Resposta 4.",
            "d) Matriz Operacional I / Nível de Resposta 3."
        ],
        answer: 2,
        explanation: "Fundamentação: NORSOP (Diretriz nº PM3-001/02/20, item 3.6). O emprego do BPChq em CDC enquadra-se no Apoio Especializado Corporativo (Matriz III / Nível de Resposta 4)."
    },
    {
        id: 162,
        idSimulado: 162,
        subject: "OPERACIONAL",
        topic: "Programas de Policiamento - Trânsito (CTB)",
        text: "O princípio da legalidade administrativa e o devido processo legal aplicados à fiscalização de trânsito (Lei nº 9.503/97 - CTB) determinam que a lavratura do Auto de Infração de Trânsito (AIT) pelo policial militar na função de agente da autoridade de trânsito é ato:",
        options: [
            "a) Discricionário, podendo o agente optar por não autuar se o condutor pedir desculpas.",
            "b) Vinculado, devendo o agente lavrar a autuação ao constatar a prática da infração, sob pena de responsabilidade funcional.",
            "c) Facultativo, dependendo de autorização prévia do Delegado de Polícia.",
            "d) Inexistente em rodovias estaduais."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 280 do CTB. Constatada a infração de trânsito, a lavratura do AIT é ato administrativo vinculado."
    },
    {
        id: 163,
        idSimulado: 163,
        subject: "JURIDICO",
        topic: "RDPM - Classificação das Transgressões Disciplinares",
        text: "De acordo com o Artigo 12 do RDPM (LC nº 893/01), a transgressão disciplinar é classificada em Leve, Média e Grave. A respeito dos critérios determinantes para essa classificação, a norma fixa que a autoridade deve considerar:",
        options: [
            "a) Exclusivamente a quantidade de anos de serviço do transgressor.",
            "b) A natureza dos fatos, as consequências que dela advierem para o serviço e para a Instituição, e o grau de culpa ou dolo do agente.",
            "c) A opinião emitida em redes sociais pelo público civil.",
            "d) O resultado do teste do SisTAF do envolvido."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 12 do RDPM (LC nº 893/01). A dosimetria e classificação da falta observam a natureza do fato, consequências e o elemento subjetivo (dolo/culpa)."
    },
    {
        id: 164,
        idSimulado: 164,
        subject: "JURIDICO",
        topic: "Doutrina Correcional - Princípios da Prisão em Flagrante",
        text: "Em caso de prisão em flagrante por crime militar praticado por praça, o Oficial encarregado da lavratura do APFD deve expedir a Nota de Culpada no prazo máximo de:",
        options: [
            "a) 12 horas após a prisão.",
            "b) 24 (vinte e quatro) horas após a efetivação da prisão, assinada pela autoridade e com recibo do preso.",
            "c) 5 dias úteis.",
            "d) 10 dias corridos."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 247 do CPPM. O prazo constitucional e legal para emissão da Nota de Culpada e entrega ao preso em flagrante é de 24 horas."
    },
    {
        id: 165,
        idSimulado: 165,
        subject: "ORGANIZACIONAL",
        topic: "Regime de Trabalho - Diretrizes de Escala",
        text: "A Portaria do Cmt G nº PM1-7/02/23 fixa a diretriz de humanização do trabalho e preservação da higidez física da tropa. Segundo a norma, é vedado escalar o policial militar em regime de turnos sem observar o intervalo mínimo de descanso interjornada entre os serviços de:",
        options: [
            "a) 2 horas.",
            "b) 6 horas.",
            "c) O dobro das horas trabalhadas no turno anterior ou o descanso regulamentar previsto para a escala respectiva.",
            "d) 72 horas obrigatoriamente em todos os casos."
        ],
        answer: 2,
        explanation: "Fundamentação: Portaria do Cmt G nº PM1-7/02/23. Exige a preservação do descanso interjornada regulamentar previsto em cada modalidade de escala."
    },
    {
        id: 166,
        idSimulado: 166,
        subject: "OPERACIONAL",
        topic: "NORSOP - Conceitos de Apoio e Reforço",
        text: "A NORSOP (Diretriz nº PM3-001/02/20) estabelece a diferença conceitual precisa entre Apoio e Reforço no emprego operacional. Sobre essa distinção, assinale a alternativa correta:",
        options: [
            "a) Apoio e Reforço são sinônimos perfeitos na doutrina militar.",
            "b) No Apoio, a fração empregada auxilia outra sem subordinação tática ao comandante da área apoiada; no Reforço, os recursos passam a subordinar-se taticamente ao comandante da Unidade reforçada.",
            "c) O Reforço não pode ser utilizado em missões de Rádio Patrulhamento.",
            "d) O Apoio só pode ser prestado por órgãos de fora da Polícia Militar."
        ],
        answer: 1,
        explanation: "Fundamentação: NORSOP (Diretriz nº PM3-001/02/20, item 3.5.2). No Apoio mantém-se a autonomia tática da fração apoiadora; no Reforço ocorre a transferência de subordinação tática."
    },
    {
        id: 167,
        idSimulado: 167,
        subject: "OPERACIONAL",
        topic: "SCIPM - Princípio do Alcance do Controle",
        text: "O princípio do Alcance do Controle (Span of Control) no SCIPM (Diretriz nº PM3-003/02/23) estabelece que o número ideal de recursos ou subordinados supervisionados diretamente por um único gestor no incidente deve ser de:",
        options: [
            "a) 1 a 2 recursos.",
            "b) 3 a 7 recursos, sendo o número ideal de 5 (cinco) subordinados por supervisor.",
            "c) Exatamente 15 recursos.",
            "d) Sem limite numérico, dependendo da antiguidade do supervisor."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz nº PM3-003/02/23 (SCIPM, item 5.2). O alcance de controle eficaz varia de 3 a 7 recursos por supervisor, sendo 5 o ponto ideal."
    },
    {
        id: 168,
        idSimulado: 168,
        subject: "JURIDICO",
        topic: "Lei Complementar nº 18.442/26 - Vagas e Quadro de Acesso",
        text: "Para que um Oficial 1º Tenente PM possa figurar no Quadro de Acesso por Merecimento ou Antiguidade para promoção ao posto de Capitão PM, a LC nº 18.442/26 exige o seu posicionamento na:",
        options: [
            "a) Primeira metade do almanaque da sua turma.",
            "b) Primeira quarta parte (1/4) do almanaque do seu posto e Quadro.",
            "c) Totalidade do almanaque sem qualquer restrição de limite.",
            "d) Apenas entre os 3 mais antigos do Batalhão."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 11, § 2º da LC nº 18.442/26. Exige-se estar posicionado na primeira quarta parte (1/4) da escala hierárquica do posto."
    },
    {
        id: 169,
        idSimulado: 169,
        subject: "JURIDICO",
        topic: "RDPM - Circunstâncias Atenuantes",
        text: "Dentre as opções abaixo, qual representa uma CIRCUNSTÂNCIA ATENUANTE na aplicação de sanção disciplinar prevista expressamente no Artigo 36 do RDPM (LC nº 893/01)?",
        options: [
            "a) Ter praticado a falta em concurso de dois ou mais militares.",
            "b) Estar no comportamento Ótimo ou Excepcional.",
            "c) Ter cometido a infração durante o cumprimento de serviço noturno.",
            "d) Ser o infrator militar de maior posto no local."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 36, I do RDPM (LC nº 893/01). A boa classificação disciplinar (Ótimo/Excepcional) constitui circunstância atenuante."
    },
    {
        id: 170,
        idSimulado: 170,
        subject: "ORGANIZACIONAL",
        topic: "Processo Administrativo - Recursos em Sindicância",
        text: "Da decisão proferida pelo Comandante de Unidade que aprova Solução de Sindicância e determina a imputação de ressarcimento de dano ao patrimônio ao policial militar, cabe recurso de Apelação Administrativa no prazo de:",
        options: [
            "a) 24 horas.",
            "b) 5 (cinco) dias úteis.",
            "c) 10 (dez) dias úteis.",
            "d) 30 dias."
        ],
        answer: 1,
        explanation: "Fundamentação: Instruções de Sindicância da PMESP (I-16-PM). O prazo para recurso contra decisão financeira/patrimonial em Sindicância é de 5 dias úteis."
    },
    {
        id: 171,
        idSimulado: 171,
        subject: "OPERACIONAL",
        topic: "Programas de Policiamento - Policiamento Escolar",
        text: "O Plano de Ação do Programa de Policiamento Escolar da PMESP fixa como princípio de atuação junto à comunidade escolar:",
        options: [
            "a) A repressão ostensiva com uso diário de cães de faro nos pátios das escolas.",
            "b) A integração preventiva com a direção escolar, a patrulha ostensiva no entorno e o desenvolvimento do PROERD como ferramenta educacional de prevenção às drogas.",
            "c) O patrulhamento interno permanente dentro das salas de aula.",
            "d) A autuação de infrações de trânsito dos professores dentro do estacionamento escolar."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz do Policiamento Escolar e PROERD. Pauta-se na integração preventiva, patrulhamento de entorno e ações educacionais."
    },
    {
        id: 172,
        idSimulado: 172,
        subject: "OPERACIONAL",
        topic: "ARPAS / Drones - Princípios de Segurança Aérea",
        text: "De acordo com as diretrizes do DECEA e normas corporativas de emprego de ARPAS, em caso de perda de link de comunicação (Lost Link) entre o controle de solo e o Drone em missão policial, o equipamento deve:",
        options: [
            "a) Despencar imediatamente no local sobre as pessoas.",
            "b) Executar automaticamente a rotina preprogramada de RTH (Return to Home), retornando e pousando no ponto de decolagem seguro.",
            "c) Acelerar para o espaço aéreo reservado a aviões comerciais.",
            "d) Desligar os motores em pleno voo."
        ],
        answer: 1,
        explanation: "Fundamentação: Regulamentação de ARPAS (DECEA / PMESP). O protocolo de Lost Link aciona a rotina RTH (Return to Home) para pouso seguro."
    },
    {
        id: 173,
        idSimulado: 173,
        subject: "JURIDICO",
        topic: "Doutrina Correcional - Exclusão por Inaptidão",
        text: "A exoneração ex officio por inaptidão para a função policial-militar aplicada à praça em estágio probatório exige:",
        options: [
            "a) Processo Administrativo Exoneratório no qual se assegurem o contraditório e a ampla defesa.",
            "b) Ato sumário sem necessidade de notificação ao interessado.",
            "c) Julgamento prévio perante o Tribunal de Justiça Militar.",
            "d) Autorização prévia da Câmara dos Deputados."
        ],
        answer: 0,
        explanation: "Fundamentação: Súmula 20 do STF c/c Instruções Correcionais. A exoneração de servidor em estágio probatório exige processo administrativo com ampla defesa."
    },
    {
        id: 174,
        idSimulado: 174,
        subject: "ORGANIZACIONAL",
        topic: "Violência Doméstica - Princípios de Atendimento Interno",
        text: "O Protocolo de Acolhimento do Policial Militar Vítima ou Autor de Conflito Familiar / Violência Doméstica fundamenta-se no princípio da:",
        options: [
            "a) Divulgação ampla dos fatos no Boletim Geral da Unidade.",
            "b) Atenção multiprofissional (médica, psicológica, social e jurídica), preservação da dignidade da pessoa humana e neutralização de riscos com armamento.",
            "c) Demissão imediata de ambas as partes.",
            "d) Transferência compulsória para Unidades de fronteira."
        ],
        answer: 1,
        explanation: "Fundamentação: Protocolo de Acolhimento em Violência Doméstica (PMESP). Prioriza a abordagem multiprofissional, suporte de saúde e gestão de risco."
    },
    {
        id: 175,
        idSimulado: 175,
        subject: "OPERACIONAL",
        topic: "NORSOP - Conceito de Cartão de Prioridade",
        text: "No contexto da NORSOP (Diretriz nº PM3-001/02/20), o Cartão de Prioridade de Patrulhamento (CPP) do Rádio Patrulhamento caracteriza-se por:",
        options: [
            "a) Ser um documento genérico sem indicação de locais ou horários.",
            "b) Ser a ordem de serviço operacional da equipe, delimitando o setor, os PONTOS DE ESTACIONAMENTO (PE) e os itinerários prioritários nos horários de maior incidência criminal.",
            "c) Ser uma autorização para o policial permanecer na base durante todo o turno.",
            "d) Ser emitido exclusivamente pela Polícia Rodoviária Federal."
        ],
        answer: 1,
        explanation: "Fundamentação: NORSOP (Diretriz nº PM3-001/02/20, item 3.7.1). O CPP desmultiplica o PPI direcionando a patrulha a PEs e itinerários de risco criminal."
    },
    {
        id: 176,
        idSimulado: 176,
        subject: "JURIDICO",
        topic: "RDPM - Causas de Justificação e Isenção",
        text: "Não haverá punição disciplinar quando for reconhecida qualquer das causas de justificação do Artigo 34 do RDPM. Assinale a opção que NÃO se enquadra como causa de justificação:",
        options: [
            "a) Ter sido cometida a transgressão na prática de ação meritória.",
            "b) Ter sido cometida a falta em legítima defesa própria ou de outrem.",
            "c) Ter sido praticada a falta por ignorância plenamente comprovada da norma.",
            "d) Ter sido praticada a falta sob o efeito voluntário de bebidas alcoólicas."
        ],
        answer: 3,
        explanation: "Fundamentação: Art. 34 c/c Art. 35 do RDPM (LC nº 893/01). Embriaguez voluntária não é causa de justificação, constituindo agravante disciplinar."
    },
    {
        id: 177,
        idSimulado: 177,
        subject: "ORGANIZACIONAL",
        topic: "SisTAF - Frequência de Avaliação",
        text: "Conforme as diretrizes do SisTAF (Sistema de Teste de Aptidão Física), a avaliação física da tropa da ativa é aplicada com qual periodicidade regular?",
        options: [
            "a) Mensalmente.",
            "b) Semestralmente / Anualmente conforme o plano da Diretoria de Pessoal.",
            "c) Apenas a cada 10 anos.",
            "d) Somente quando o militar for promovido."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretrizes do SisTAF / DP. O acompanhamento físico do efetivo é periódico (semestral/anual) para manutenção da prontidão funcional."
    },
    {
        id: 178,
        idSimulado: 178,
        subject: "OPERACIONAL",
        topic: "Programas de Policiamento - Policiamento Rural",
        text: "Uma importante diretriz tática no patrulhamento rural efetuado por equipes motorizadas da PMESP para prevenir emboscadas e sinistros em vias não pavimentadas é:",
        options: [
            "a) Circular com a viatura em velocidade máxima constante independentemente do terreno.",
            "b) Manter disciplina de luzes quando necessário, distância tática ampliada entre viaturas no comboio e comunicação periódica com a Sala de Operações.",
            "c) Desligar o rádio transceptor da viatura.",
            "d) Abandono da viatura em caso de chuva."
        ],
        answer: 1,
        explanation: "Fundamentação: POP - Policiamento Rural PMESP. Exige manutenção do espaço tático entre veículos no comboio, postura defensiva e contato com C2."
    },
    {
        id: 179,
        idSimulado: 179,
        subject: "JURIDICO",
        topic: "Lei Complementar nº 18.442/26 - Ingresso no QOE",
        text: "O ingresso de Subtenentes PM no Quadro de Oficiais Especialistas (QOE) fundamenta-se nos princípios do mérito profissional e antiguidade. Nos termos da LC nº 18.442/26, as vagas para o CHOE são preenchidas na proporção de:",
        options: [
            "a) 100% por indicação do Comandante-Geral.",
            "b) 50% por antiguidade e 50% por merecimento mediante concurso interno de provas e títulos.",
            "c) 100% por sorteio entre os mais idosos.",
            "d) Exclusivamente por promoção por bravura."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 12 da LC nº 18.442/26. As vagas de acesso ao QOE/CHOE dividem-se equitativamente entre os critérios de antiguidade e merecimento."
    },
    {
        id: 180,
        idSimulado: 180,
        subject: "OPERACIONAL",
        topic: "Câmeras Operacionais Portáteis (COP) - Auditoria e Controle",
        text: "A Diretriz nº PM3-001/02/25 (COP) estabelece cotas mínimas de auditagem periódica das gravações da tropa pelos Oficiais Oficiais Comandantes de Companhia e de Pelotão. Essa auditoria tem por finalidade técnica e princípios:",
        options: [
            "a) Comercializar os vídeos para emissoras de televisão.",
            "b) Verificar a conformidade do uso dos equipamentos, aferir a qualidade do atendimento policial, identificar necessidades de treinamento e coibir desvios de conduta.",
            "c) Deletar vídeos de ocorrências de flagrante.",
            "d) Monitorar a vida privada dos policiais de folga."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz nº PM3-001/02/25 (COP, item 7.1). A auditoria visa o controle de qualidade operacional, padronização de procedimentos e doutrina."
    },
    {
        id: 181,
        idSimulado: 181,
        subject: "ORGANIZACIONAL",
        topic: "Afastamentos Regulamentares - Licença-Prêmio",
        text: "O direito do militar do Estado à fruição de Licença-Prêmio (90 dias a cada quinquênio de efetivo serviço) subordina-se ao princípio do interesse público. Assim, a concessão do gozo pode ser indeferida ou adiada motivadamente pelo Comando diante de:",
        options: [
            "a) Vontade pessoal do chefe de seção sem justificativa.",
            "b) Necessidade imperiosa do serviço e manutenção do efetivo mínimo operacional da Unidade.",
            "c) Existência de saldo bancário positivo na conta do militar.",
            "d) Pedido de vizinhos da OPM."
        ],
        answer: 1,
        explanation: "Fundamentação: Regulamento de Licença-Prêmio PMESP. A fruição subordina-se à conveniência da administração e manutenção da continuidade do serviço."
    },
    {
        id: 182,
        idSimulado: 182,
        subject: "OPERACIONAL",
        topic: "SCIPM - Organização das Instalações",
        text: "No SCIPM (Diretriz nº PM3-003/02/23), a instalação temporária estabelecida para prestar atendimento médico de emergência e triagem de vítimas no local do incidente chama-se:",
        options: [
            "a) Posto de Comando.",
            "b) Posto Médico Avançado (PMA) / Área de Triage.",
            "c) Heliporto.",
            "d) Base de Manutenção."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz nº PM3-003/02/23 (SCIPM, item 5.1). O Posto Médico Avançado provê primeiro atendimento e triagem na cena."
    },
    {
        id: 183,
        idSimulado: 183,
        subject: "JURIDICO",
        topic: "RDPM - Recursos Administrativos",
        text: "O princípio do duplo grau de jurisdição administrativa manifesta-se no RDPM (LC nº 893/01) no direito do punido interpor recursos. Contra a decisão proferida pelo Comandante-Geral em grau de Recurso Hierárquico, cabe qual providência na esfera administrativa corporativa?",
        options: [
            "a) Apelação ao Tribunal de Justiça Comum.",
            "b) Esgotamento da via administrativa corporativa, não cabendo novos recursos na esfera da Polícia Militar.",
            "c) Novo Pedido de Reconsideração ao Subcomandante-Geral.",
            "d) Mandado de Segurança perante o Prefeito."
        ],
        answer: 1,
        explanation: "Fundamentação: Arts. 57 e 62 do RDPM (LC nº 893/01). A decisão do Comandante-Geral encerra definitivamente a instância recursal administrativa na PMESP."
    },
    {
        id: 184,
        idSimulado: 184,
        subject: "OPERACIONAL",
        topic: "NORSOP - Conceito de Níveis de Decisão",
        text: "Na estrutura de C2 da NORSOP, o Oficial Comando de Força de Patrulha (CFP) atua predominantemente no nível de decisão e execução tático-operacional da Subárea. Durante o turno, sua principal função de comando no terreno é:",
        options: [
            "a) Elaborar o orçamento anual de investimento da Secretaria da Segurança.",
            "b) Acompanhar, orientar, fiscalizar e coordenar no local a atuação das Unidades de Serviço, assumindo o comando do policiamento em ocorrências de maior complexidade.",
            "c) Julgar processos do Tribunal de Justiça Militar.",
            "d) Expedir carteiras de motorista civis."
        ],
        answer: 1,
        explanation: "Fundamentação: NORSOP (Diretriz nº PM3-001/02/20, Anexo B). O CFP é o coordenador do policiamento em campo, orientando e assumindo crises graves."
    },
    {
        id: 185,
        idSimulado: 185,
        subject: "JURIDICO",
        topic: "Doutrina Correcional - Deserção de Oficial",
        text: "A cometimento do crime militar de Deserção por Oficial PM (Artigo 187 do CPM) difere da deserção de praça em razão do rito processual. O Oficial que se ausenta sem licença por mais de 8 dias passa à condição de desertor após a lavratura do:",
        options: [
            "a) Termo de Ausência e posterior Termo de Deserção lavrado pela autoridade competente.",
            "b) Auto de Prisão em Flagrante delito sumário no 1º dia.",
            "c) Apenas publicação de nota no jornal local.",
            "d) Perdão tácito do Comando."
        ],
        answer: 0,
        explanation: "Fundamentação: Arts. 451 e 452 do CPPM. O rito da deserção formaliza-se com a contagem de ausência e lavratura do Termo de Deserção."
    },
    {
        id: 186,
        idSimulado: 186,
        subject: "ORGANIZACIONAL",
        topic: "Treinamento Continuado - Método Giraldi",
        text: "No contexto do Método Giraldi, o princípio de que 'a arma de fogo é um instrumento de defesa de última ratio' estabelece que o uso da força letal pelo policial militar deve ser precedido, sempre que taticamente possível, por:",
        options: [
            "a) Disparos de advertência para o alto em áreas habitadas.",
            "b) Presença ostensiva, verbalização firme e clara, e uso de meios de menor potencial ofensivo.",
            "c) Abandono do local de confronto sem intervir.",
            "d) Disparos contra veículos em fuga."
        ],
        answer: 1,
        explanation: "Fundamentação: Doutrina do Método Giraldi / Uso Progressivo da Força. A força letal é extrema ratio, antecedida de verbalização e meios menos letais quando viável."
    },
    {
        id: 187,
        idSimulado: 187,
        subject: "OPERACIONAL",
        topic: "Programas de Policiamento - Ronda Maria da Penha",
        text: "A diretriz de sigilo e proteção dos dados das vítimas cadastradas no Programa Ronda Maria da Penha veda expressamente às equipes de patrulha:",
        options: [
            "a) Transmitir as coordenadas da residência da vítima na rede aberta de rádio transceptor sem codificação ou revelar dados a terceiros estranhos ao serviço.",
            "b) Realizar visitas periódicas à residência da vítima.",
            "c) Registrar os acompanhamentos no relatório oficial.",
            "d) Orientar a vítima sobre seus direitos."
        ],
        answer: 0,
        explanation: "Fundamentação: Diretriz do Programa Ronda Maria da Penha. Protege os dados e localização da vítima contra vazamentos para salvaguarda da vida."
    },
    {
        id: 188,
        idSimulado: 188,
        subject: "JURIDICO",
        topic: "Lei Complementar nº 18.442/26 - Quadro de Oficiais Músicos",
        text: "A LC nº 18.442/26 reestruturou o Quadro de Oficiais Músicos (QOM). O acesso ao posto inicial do QOM exige do militar do Estado:",
        options: [
            "a) Apenas indicação do Mestre de Banda.",
            "b) Aprovação no Curso de Habilitação de Oficiais Músicos (CHO-MUS) e diploma de graduação/licenciatura em Música reconhecido.",
            "c) Idade superior a 60 anos.",
            "d) Desempenho no futebol da OPM."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 13 da LC nº 18.442/26. Exige aprovação no CHO-MUS e graduação de nível superior em Música."
    },
    {
        id: 189,
        idSimulado: 189,
        subject: "OPERACIONAL",
        topic: "Combate ao Crime Organizado - Doutrina de Patrulhamento Tático",
        text: "O Patrulhamento Tático realizado pelas equipes de Força Tática e BAEP fundamenta-se nos princípios da disciplina tática, mentalidade de combate e uso coordenado de cobertura. O objetivo precípuo dessa modalidade de patrulha é:",
        options: [
            "a) Substituir a fiscalização de posturas do município.",
            "b) Prevenir e reprimir criminalidade violenta, atuar em áreas de alto risco e dar suporte às viaturas de Rádio Patrulhamento em ocorrências de grande envergadura.",
            "c) Realizar cobrança de pedágio em rodovias.",
            "d) Transportar presos civis entre presídios municipais sem escolta."
        ],
        answer: 1,
        explanation: "Fundamentação: Manual de Patrulhamento Tático PMESP. Foca na repressão qualificada aos crimes graves e apoio tático no terreno."
    },
    {
        id: 190,
        idSimulado: 190,
        subject: "JURIDICO",
        topic: "RDPM - Competência Disciplinar dos Capitães",
        text: "Nos termos do Artigo 31 do RDPM (LC nº 893/01), o Oficial no posto de Capitão PM possui competência disciplinar original para aplicar às praças subordinadas as sanções de:",
        options: [
            "a) Demissão e Expulsão.",
            "b) Advertência, Repreensão e Permanência Disciplinar até 8 (oito) dias.",
            "c) Detenção por 30 dias.",
            "d) Cassação de aposentadoria."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 31, IV do RDPM (LC nº 893/01). Capitães PM têm competência para aplicar Advertência, Repreensão e Permanência Disciplinar até 8 dias."
    },
    {
        id: 191,
        idSimulado: 191,
        subject: "ORGANIZACIONAL",
        topic: "Material Bélico - Portaria nº PM4-001/1.2/24 (Arma de Aluguel/Empréstimo)",
        text: "A Portaria nº PM4-001/1.2/24 veda categoricamente ao policial militar em relação ao armamento institucional recebido sob sua guarda:",
        options: [
            "a) Utilizá-lo em serviço de patrulhamento ostensivo.",
            "b) Emprestar, ceder, alugar, permutar ou dar em garantia o armamento pertencente ao patrimônio da PMESP a terceiros ou outros policiais sem autorização legal.",
            "c) Submetê-lo à manutenção na reserva de armas da OPM.",
            "d) Transportá-lo em coldre regulamentar."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 10 da Portaria nº PM4-001/1.2/24. É vedado qualquer trespasse, empréstimo ou cessão não autorizada do bem bélico público."
    },
    {
        id: 192,
        idSimulado: 192,
        subject: "OPERACIONAL",
        topic: "SCIPM - Princípio da Terminologia Comum",
        text: "O princípio da Terminologia Comum no SCIPM (Diretriz nº PM3-003/02/23) estabelece que durante operações interagências os integrantes devem utilizar:",
        options: [
            "a) Códigos Q e jargões internos exclusivos da PMESP.",
            "b) Linguagem clara, sem o uso de códigos ou jargões corporativos específicos que possam gerar ambiguidade entre as diferentes instituições.",
            "c) Diálogo exclusivamente em língua estrangeira.",
            "d) Códigos numéricos de sinais de apito."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz nº PM3-003/02/23 (SCIPM, item 5.2). Terminologia Comum exige linguagem clara para integração efetiva entre agências."
    },
    {
        id: 193,
        idSimulado: 193,
        subject: "JURIDICO",
        topic: "Doutrina Correcional - IPM com Indiciado Preso",
        text: "No IPM instaurado para apurar crime militar com indiciado preso em flagrante, o Encarregado constata a necessidade de realizar perícia complexa que excederá o prazo legal de 10 dias. À luz do CPPM e da doutrina correcional, como deve proceder o Encarregado?",
        options: [
            "a) Solimitar a prorrogação do IPM por mais 60 dias e manter o indiciado preso na OPM.",
            "b) Encerra o IPM no prazo rigoroso de 10 dias com o relatório preliminar, remete os autos à Justiça Militar e informa que o laudo pericial será juntado posteriormente como peça complementar.",
            "c) Soltar o preso por conta própria sem aviso ao Juiz.",
            "d) Rasgar os autos de prisão em flagrante."
        ],
        answer: 1,
        explanation: "Fundamentação: Art. 20 do CPPM c/c Instruções CorregPM. O prazo de 10 dias com preso é fatal; laudos periciais pendentes são remetidos a posteriori."
    },
    {
        id: 194,
        idSimulado: 194,
        subject: "ORGANIZACIONAL",
        topic: "Regime de Trabalho - Faltas ao Serviço",
        text: "O policial militar que faltar ao serviço sem causa justificável comete infração disciplinar. No âmbito da gestão de pessoal e escala, a ausência injustificada sujeita o militar, além da sanção disciplinar, a:",
        options: [
            "a) Perda da remuneração correspondente ao dia de ausência e desconto nos cômputos para fins de licença-prêmio e aposentadoria.",
            "b) Prisão sumária de 5 anos no Presídio Romão Gomes sem processo.",
            "c) Elogio na folha de alterações.",
            "d) Concessão de folga compensatória no dia seguinte."
        ],
        answer: 0,
        explanation: "Fundamentação: Diretrizes da Diretoria de Pessoal e Lei de Remuneração. A falta injustificada acarreta desconto pecuniário e reflexos no tempo de serviço."
    },
    {
        id: 195,
        idSimulado: 195,
        subject: "OPERACIONAL",
        topic: "NORSOP - Conceito de Nível de Resposta 3",
        text: "O Nível de Resposta 3 na NORSOP (Diretriz nº PM3-001/02/20) caracteriza-se por mobilizar recursos de reforço e apoio tático no âmbito do:",
        options: [
            "a) Exclusivamente do Pelotão local de Rádio Patrulhamento.",
            "b) Batalhão de Polícia Militar (BPM) ou Comando de Policiamento de Área (CPA), envolvendo Força Tática e OPMs vizinhas.",
            "c) Ministério da Defesa.",
            "d) Interpol."
        ],
        answer: 1,
        explanation: "Fundamentação: NORSOP (Diretriz nº PM3-001/02/20, item 3.6). O Nível de Resposta 3 aciona reforços táticos no âmbito da Unidade/CPA."
    },
    {
        id: 196,
        idSimulado: 196,
        subject: "JURIDICO",
        topic: "RDPM - Início e Cumprimento das Sanções",
        text: "As sanções disciplinares privativas de liberdade ou restritivas de folga (Permanência Disciplinar e Detenção) aplicadas ao militar do Estado começam a ser cumpridas:",
        options: [
            "a) Apenas após o trânsito em julgado na esfera cível.",
            "b) Após a publicação em boletim e notificação do punido, respeitadas as fases recursais ou eventual concessão de efeito suspensivo.",
            "c) Dez anos após a falta.",
            "d) Antes da instauração do procedimento apuratório."
        ],
        answer: 1,
        explanation: "Fundamentação: Arts. 56 e 60 do RDPM (LC nº 893/01). A execução pressupõe publicação formal e esgotamento/não concessão de suspensão recursal."
    },
    {
        id: 197,
        idSimulado: 197,
        subject: "OPERACIONAL",
        topic: "Sistema de C2 - Sala de Situação do CPA",
        text: "A Sala de Situação instalada no nível de Comando de Policiamento de Área (CPA) tem por missão primária no Sistema de C2:",
        options: [
            "a) Realizar a lavratura de autos de infração de trânsito.",
            "b) Acompanhar eventos de grande envergadura na região, centralizar informações estratégicas, monitorar o desdobramento das operações e assessorar o Comandante Regional na tomada de decisões.",
            "c) Substituir a guarda de presídios civis.",
            "d) Vender materiais bélicos ao público."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz nº PM3-001/02/23 (C2, item 4.3). A Sala de Situação do CPA centraliza a consciência situacional no Nível Tático/Estratégico Regional."
    },
    {
        id: 198,
        idSimulado: 198,
        subject: "JURIDICO",
        topic: "Lei Complementar nº 18.442/26 - Conselho de Ação Social",
        text: "A LC nº 18.442/26 prevê a organização da estrutura de assistência à saúde e apoio social aos integrantes da Polícia Militar. A gestão desses serviços de saúde e assistência cabe à:",
        options: [
            "a) Diretoria de Saúde e Diretoria de Pessoal da PMESP.",
            "b) Prefeitura Municipal de São Paulo exclusivamente.",
            "c) Empresa privada de previdência aberta.",
            "d) Guarda Municipal."
        ],
        answer: 0,
        explanation: "Fundamentação: LC nº 18.442/26 c/c Regulamento de Saúde da PMESP. A gestão do sistema de saúde e assistência é atribuição das Diretorias especializadas."
    },
    {
        id: 199,
        idSimulado: 199,
        subject: "ORGANIZACIONAL",
        topic: "Material Bélico - Portaria nº PM4-001/1.2/24 (Inspeção de Armamento)",
        text: "A inspeção periódica do material bélico sob Carga Individual ou acautelado nas reservas de armas das Companhias é atribuição de fiscalização do:",
        options: [
            "a) Oficial de Material Bélico da OPM e dos Comandantes de Companhia e Pelotão.",
            "b) Auditor do Tribunal de Contas da União.",
            "c) Perito do IML civil.",
            "d) Chefe do pátio de recolhimento de veículos."
        ],
        answer: 0,
        explanation: "Fundamentação: Art. 15 da Portaria nº PM4-001/1.2/24. A fiscalização e inspeção de armas cabem ao Oficial de Material Bélico e cadeia de comando."
    },
    {
        id: 200,
        idSimulado: 200,
        subject: "OPERACIONAL",
        topic: "SCIPM - Encerramento do Incidente",
        text: "Ao término de uma operação gerenciada pelo SCIPM (Diretriz nº PM3-003/02/23), a última etapa obrigatória conduzida pelo Comandante do Incidente antes da desmobilização total dos recursos é a:",
        options: [
            "a) Destruição de todos os documentos do Posto de Comando.",
            "b) Realização do Briefing de Desmobilização e confecção do Relatório Final do Incidente (Debriefing / RAC).",
            "c) Prisão preventiva de todas as testemunhas.",
            "d) Doação dos equipamentos policiais à população local."
        ],
        answer: 1,
        explanation: "Fundamentação: Diretriz nº PM3-003/02/23 (SCIPM, item 5.9). O encerramento formal exige a desmobilização ordenada, reunião de debriefing e relatório final do evento."
    },
{
                id: 201,
                subject: "OPERACIONAL",
                topic: "NORSOP - Matrizes e Níveis de Resposta",
                text: "Durante o turno de serviço sob o comando do Oficial CFP, ocorre uma ocorrência de roubo a estabelecimento bancário com tomada de reféns na área central. Os criminosos barricaram-se no local e a Força Tática da OPM efetuou o cerco inicial. O Coordenador Operacional (CoordOp) aciona o Grupo de Ações Táticas Especiais (GATE) do CPChq para assumir a negociação tática, enquanto solicita o apoio do Grupamento Aéreo (Águia) para sobrevoo de monitoramento. Considerando a classificação das Matrizes Operacionais e Níveis de Resposta previstos na NORSOP (Diretriz nº PM3-001/02/20), analise as proposições abaixo:\n\nI. O empenho da Força Tática da própria OPM insere a ocorrência na Matriz Operacional II e Nível de Resposta 2.\nII. O acionamento e emprego de Tropa Especializada de nível corporativo (GATE/CPChq) enquadram o evento na Matriz Operacional III.\nIII. A mobilização simultânea de recursos especializados corporativos exige o escalonamento para o Nível de Resposta 4.\n\nAssinale a alternativa correta:",
                options: [
                    "a) Apenas as proposições I e II estão corretas.",
                    "b) Apenas as proposições II e III estão corretas.",
                    "c) Apenas a proposição III está correta.",
                    "d) Todas as proposições (I, II e III) estão corretas."
                ],
                answer: 1,
                explanation: "Fundamentação: NORSOP (Diretriz nº PM3-001/02/20, item 3.6). O item I está incorreto porque o empenho da Força Tática (recurso de reforço do Batalhão/CPA) enquadra-se no Nível de Resposta 3 (e não 2, que abrange apenas reforço interno da própria Companhia). Os itens II e III estão corretos, pois recursos corporativos especializados (GATE/CPChq) configuram a Matriz III e impõem o Nível de Resposta 4."
            },
            {
                id: 202,
                subject: "OPERACIONAL",
                topic: "NORSOP - Atribuições e Estrutura de C2",
                text: "Um Capitão PM assume o Comando de uma Companhia Territorial (Subárea) e passa a auditar os processos de planejamento e execução do patrulhamento. A respeito das atribuições operacionais fixadas na Diretriz nº PM3-001/02/20 (NORSOP), assinale a alternativa INCORRETA:",
                options: [
                    "a) Compete à Sala de Operações da OPM realizar o acompanhamento em tempo real das Unidades de Serviço, promovendo o remanejamento tático de Cartões de Prioridade (CPP) em casos de urgência.",
                    "b) O Cartão de Prioridade de Patrulhamento (CPP) constitui documento tático derivado do Plano de Policiamento Inteligente (PPI), sendo a ordem de serviço da Unidade de Serviço no terreno.",
                    "c) O Coordenador Operacional (CoordOp) pode alterar os limites territoriais das Subáreas das Companhias em caráter definitivo durante o seu turno de serviço por portaria própria.",
                    "d) Cabe ao Oficial CFP realizar a fiscalização presencial da execução dos PONTOS DE ESTACIONAMENTO (PE) e assumir o gerenciamento inicial de ocorrências de gravidade na Subárea."
                ],
                answer: 2,
                explanation: "Fundamentação: NORSOP (Diretriz nº PM3-001/02/20, itens 3.4 e 3.5). A definição e alteração de limites territoriais de Subáreas e Batalhões é competência estrutural estratégica do Comando-Geral/Decreto, sendo vedado ao Coordenador Operacional alterar formalmente limites de OPM durante o turno de serviço."
            },
            {
                id: 203,
                subject: "OPERACIONAL",
                topic: "SCIPM - Organização e Staff de Comando",
                text: "No gerenciamento de um incidente grave de colapso de estrutura de prédio residencial com múltiplas vítimas, o Comandante do Incidente (Cmt Inc) estabelece a estrutura do SCIPM (Diretriz nº PM3-003/02/23). Durante a operação, um repórter de televisão e autoridades políticas locais pressionam as equipes no Perímetro Externo buscando dados sobre os resgatados. Para assegurar a fluidez do comando, o Cmt Inc designa integrantes do Staff de Comando. Analise as proposições sobre as funções do Staff de Comando:\n\nI. O Oficial de Informações Públicas é o único integrante autorizado a preparar e divulgar releases e conceder entrevistas à imprensa, após aprovação do Cmt Inc.\nII. O Oficial de Ligação atua como ponto de contato direto entre o Cmt Inc e os representantes das demais agências de apoio presentes na cena.\nIII. O Oficial de Segurança possui autoridade tática para suspender ou alterar imediatamente qualquer ação operacional que represente risco iminente à vida da tropa.\n\nEstá(ão) correta(s):",
                options: [
                    "a) Apenas a proposição I.",
                    "b) Apenas as proposições I e III.",
                    "c) Apenas as proposições II e III.",
                    "d) Todas as proposições (I, II e III)."
                ],
                answer: 3,
                explanation: "Fundamentação: Diretriz nº PM3-003/02/23 (SCIPM, item 5.4). As três proposições refletem com precisão absoluta as atribuições doutrinárias dos integrantes do Staff de Comando no SCIPM (Oficial de Informações Públicas, Oficial de Ligação e Oficial de Segurança)."
            },
            {
                id: 204,
                subject: "OPERACIONAL",
                topic: "SCIPM - Instalações e Comando Unificado",
                text: "A respeito das instalações operacionais e dos modelos de comando previstos no Sistema de Comando de Incidentes (Diretriz nº PM3-003/02/23), assinale a alternativa correta:",
                options: [
                    "a) No modelo de Comando Unificado, cada agência participante deve instalar o seu próprio Posto de Comando (PC) físico isolado no local do evento.",
                    "b) O Posto de Comando (PC) deve ser posicionado prioritariamente no Perímetro Interno (Zona Vermelha) para facilitar a visualização tática do ponto crítico pelo Comandante.",
                    "c) A Área de Espera (Staging Area) é o local onde os recursos operacionais que chegam ao incidente aguardam, em prontidão, a atribuição de missões específicas pelo Comando.",
                    "d) A substituição do Comandante do Incidente por Oficial de maior antiguidade ocorre de forma automática e tácita, dispensando briefing de passagem de comando."
                ],
                answer: 2,
                explanation: "Fundamentação: Diretriz nº PM3-003/02/23 (SCIPM, itens 5.1 e 5.8). A alternativa C é exata. A alternativa A erra pois no Comando Unificado há apenas 1 PC físico; a B erra pois o PC situa-se em local seguro na Zona Verde/Perímetro Externo; a D erra pois a passagem de comando exige briefing formal obrigatório."
            },
            {
                id: 205,
                subject: "OPERACIONAL",
                topic: "Sistema de C2 - Níveis de Decisão e Processo Decisório",
                text: "A Diretriz nº PM3-001/02/23 conceitua o Sistema de Comando e Controle na PMESP. Durante uma grande operação de reintegração de posse em área urbana, a articulação entre os Níveis de Decisão exige o alinhamento da Consciência Situacional. Considerando os Níveis de Decisão em C2, analise as afirmativas:\n\nI. O Nível Estratégico (Comando-Geral e Grandes Comandos) é responsável por fixar diretrizes institucionais, políticas de segurança e alocação macro de recursos.\nII. O Nível Tático (Comandos de Área e Batalhões) traduz os objetivos estratégicos em planos operacionais, gerenciando a alocação dos meios nas subáreas.\nIII. O Nível Operacional compreende a execução direta das missões táticas no terreno pelas Unidades de Serviço e frações de tropa.\n\nAssinale a alternativa correta:",
                options: [
                    "a) Apenas os itens I e II estão corretos.",
                    "b) Apenas os itens II e III estão corretos.",
                    "c) Apenas o item I está correto.",
                    "d) Todos os itens (I, II e III) estão corretos."
                ],
                answer: 3,
                explanation: "Fundamentação: Diretriz nº PM3-001/02/23 (Sistema de C2, item 4.1). As três proposições detalham adequadamente a divisão funcional dos Níveis Estratégico, Tático e Operacional do Sistema de C2 da PMESP."
            },
            {
                id: 206,
                subject: "OPERACIONAL",
                topic: "Câmeras Operacionais Portáteis (COP) - Diretrizes e Prazos",
                text: "Em uma ocorrência de patrulhamento tático, a equipe de Força Tática envolve-se em confronto armado que resulta em Lesão Corporal Decorrente de Intervenção Policial (LCDIP). O Oficial CFP desloca até o local e assume a preservação da cena. Diante das regras estipuladas na Diretriz nº PM3-001/02/25 (COP), assinale a alternativa INCORRETA:",
                options: [
                    "a) Cabe ao Oficial CFP ou autoridade equivalente recolher os equipamentos COP dos policiais envolvidos e realizar/supervisionar o imediato upload no sistema da OPM.",
                    "b) As mídias vinculadas a procedimentos correcionais de grave repercussão (MDIP/LCDIP) devem ser classificadas como 'Vídeo de Evidência' e mantidas sob custódia armazenada pelo prazo mínimo de 1 (um) ano.",
                    "c) O 'Vídeo de Rotina', sem vinculação com ocorrências criminais ou administrativas, deve permanecer armazenado no sistema corporativo pelo prazo mínimo de 90 (noventa) dias.",
                    "d) O policial militar envolvido na ocorrência fica expressamente proibido de visualizar o registro gravado por sua própria COP antes de prestar depoimento formal no Inquérito Policial Militar."
                ],
                answer: 3,
                explanation: "Fundamentação: Diretriz nº PM3-001/02/25 (COP, item 6.8). A alternativa D é incorreta pois a norma assegura ao policial militar o direito de visualizar o registro de sua COP antes de prestar suas declarações oficiais, auxiliando na fidelidade do seu relato."
            },
            {
                id: 207,
                subject: "OPERACIONAL",
                topic: "Câmeras Operacionais Portáteis (COP) - Interrupção e Auditoria",
                text: "Durante o patrulhamento ordinário, um Cabo PM desliga temporariamente a sua COP ao adentrar o sanitário de um posto de combustíveis. Mais tarde, no atendimento de uma ocorrência de violência doméstica em residência, a gravação deixa de ser efetuada por esgotamento injustificado do acionamento pelo policial. À luz da Diretriz nº PM3-001/02/25 (COP), analise a conduta do militar:\n\nI. A interrupção da gravação no uso do sanitário é permitida para salvaguarda da intimidade do policial, devendo o equipamento ser reativado imediatamente diante de intervenção policial.\nII. A ausência injustificada de gravação em atendimento de ocorrência operacional impõe a instauração obrigatória de Investigação Preliminar (IP) para apuração de responsabilidade disciplinar.\nIII. A cota de auditoria das mídias das COP pelos Comandantes de Companhia é opcional, realizando-se apenas quando houver denúncia formal da imprensa.\n\nEstá(ão) correta(s) apenas a(s) proposição(ões):",
                options: [
                    "a) I e II.",
                    "b) II e III.",
                    "c) I e III.",
                    "d) I."
                ],
                answer: 0,
                explanation: "Fundamentação: Diretriz nº PM3-001/02/25 (COP, itens 6.5, 6.12 e 7.1). As proposições I e II estão corretas. A proposição III é incorreta porque a auditoria periódica por Comandantes de Cia e Pelotão é obrigatória e possui cotas regulamentares fixadas na norma."
            },
            {
                id: 208,
                subject: "OPERACIONAL",
                topic: "Programas de Policiamento - Força Tática",
                text: "A Força Tática constitui o programa de policiamento responsável por prover apoio tático às Unidades de Serviço de Rádio Patrulhamento em ocorrências de maior complexidade. Sobre as diretrizes doutrinárias da Força Tática, assinale a alternativa correta:",
                options: [
                    "a) O patrulhamento tático da Força Tática deve ser executado obrigatoriamente sem vinculação com manchas criminais ou prioridades do Batalhão.",
                    "b) No controle de distúrbios civis em primeiro nível, a Força Tática atua pautada pelo uso progressivo da força, sendo o emprego de munições de impacto controlado determinado pelo Comandante da Tropa/Cena sob estrito respaldo legal.",
                    "c) A Força Tática subordina-se taticamente ao Delegado de Polícia Titular do município durante o cumprimento de mandados de busca.",
                    "d) É vedado à equipe de Força Tática realizar o cerco e acompanhamento tático de veículos roubados."
                ],
                answer: 1,
                explanation: "Fundamentação: Manual de Doutrina de Força Tática da PMESP. A alternativa B descreve perfeitamente a atuação no controle de distúrbios em 1º nível. As demais alternativas contrariam frontalmente o emprego de patrulhamento orientado por manchas criminais e a subordinação tática militar."
            },
            {
                id: 209,
                subject: "OPERACIONAL",
                topic: "Programas de Policiamento - Ronda Maria da Penha",
                text: "Uma equipe do Programa Ronda Maria da Penha realiza visita de monitoramento a uma vítima de violência doméstica assistida. Ao chegar ao local, a vítima informa que o ex-companheiro esteve na porta da residência proferindo ameaças verbais há cerca de 10 minutos e evadiu-se a pé. Diante desse cenário, analise as condutas táticas da equipe à luz da norma do Programa:\n\nI. Iniciar imediatamente o patrulhamento nas imediações para localização e prisão em flagrante do agressor pelo crime do Art. 24-A da Lei nº 11.340/06 (descumprimento de MPU).\nII. Caso o agressor não seja localizado em flagrante, lavrar o relatório de acompanhamento, orientar a vítima a registrar os fatos no Distrito Policial e informar a autoridade judiciária para reavaliação de risco.\nIII. Realizar a transmissão imediata dos dados de qualificação e endereço completo da vítima na rede aberta de rádio transceptor sem qualquer tipo de codificação.\n\nEstão corretas as condutas descritas nos itens:",
                options: [
                    "a) I e II, apenas.",
                    "b) II e III, apenas.",
                    "c) I e III, apenas.",
                    "d) I, II e III."
                ],
                answer: 0,
                explanation: "Fundamentação: Diretriz do Programa Ronda Maria da Penha PMESP. Os itens I e II são condutas padronizadas e corretas. O item III é incorreto, pois a norma exige o sigilo dos dados e endereço da vítima para evitar exposição de risco, vedando a veiculação desnecessária em rede aberta de rádio."
            },
            {
                id: 210,
                subject: "OPERACIONAL",
                topic: "Programas de Policiamento - Policiamento Escolar",
                text: "Em patrulhamento pelo entorno de uma escola pública estadual, a equipe de Policiamento Escolar é acionada pela Direção, que flagrou um estudante de 17 anos vendendo porções de maconha no pátio interno. O adolescente foi contido no Gabinete da Direção. Assinale a alternativa que indica o procedimento regulamentar correto:",
                options: [
                    "a) Liberar o adolescente no local mediante assinatura de termo de compromisso pelo Diretor da escola, sem acionamento da Polícia Judiciária.",
                    "b) Efetuar a apreensão em flagrante do adolescente por ato infracional análogo ao crime de tráfico de drogas, conduzindo-o à Polícia Judiciária com acompanhamento dos responsáveis ou Conselho Tutelar e apreensão das substâncias.",
                    "c) Aplicar sanção disciplinar prevista no RDPM diretamente ao estudante no âmbito escolar.",
                    "d) Encaminhar o adolescente diretamente à Fundação CASA sem necessidade de lavratura de Auto de Apreensão em Flagrante de Ato Infracional."
                ],
                answer: 1,
                explanation: "Fundamentação: Lei nº 8.069/90 (ECA, Art. 171) e Diretriz do Policiamento Escolar da PMESP. Diante de flagrante de ato infracional grave, impõe-se a apreensão e condução à Polícia Judiciária com garantias do ECA."
            },
            {
                id: 211,
                subject: "OPERACIONAL",
                topic: "Programas de Policiamento - Trânsito (CTB e Resoluções CONTRAN)",
                text: "Durante Ponto de Fiscalização de Trânsito (PFT), um condutor é abordado apresentando forte hálito etílico, agressividade e desorientação temporal. O condutor recusa-se a soprar o etilômetro. A equipe policial militar elabora o Auto de Constatação de Sinais de Alteração da Capacidade Psicomotora nos termos da Resolução CONTRAN aplicável. Diante desses fatos, analise as proposições:\n\nI. A constatação dos sinais de embriaguez atestada pelos policiais supre a ausência do teste de etilômetro para fins de caracterização do crime de trânsito do Art. 306 do CTB.\nII. Além da condução do motorista à Polícia Judiciária pelo crime de trânsito, a equipe deve lavrar o Auto de Infração pelo Art. 165-A do CTB.\nIII. Como medida administrativa, a equipe deve recolher o documento de habilitação e reter o veículo até a apresentação de condutor habilitado.\n\nAssinale a alternativa correta:",
                options: [
                    "a) Apenas os itens I e II estão corretos.",
                    "b) Apenas os itens II e III estão corretos.",
                    "c) Apenas o item I está correto.",
                    "d) Todos os itens (I, II e III) estão corretos."
                ],
                answer: 3,
                explanation: "Fundamentação: Arts. 165-A, 277 e 306 do CTB c/c Resolução CONTRAN nº 432/12. Os sinais visíveis atestados no termo oficial comprovam a alteração psicomotora para o crime penal, cumulando-se com as sanções administrativas do Art. 165-A (autuação, recolhimento de CNH e retenção veicular)."
            },
            {
                id: 212,
                subject: "OPERACIONAL",
                topic: "Programas de Policiamento - Policiamento Rural",
                text: "A respeito das estratégias e doutrina de emprego do Policiamento Rural na Polícia Militar do Estado de São Paulo, assinale a alternativa incorreta:",
                options: [
                    "a) O cadastramento georreferenciado (coordenadas GPS) das propriedades rurais constitui ferramenta essencial para agilizar o deslocamento das patrulhas e reduzir o tempo de resposta.",
                    "b) O patrulhamento rural deve ser realizado com distância tática ampliada entre viaturas em comboio e manutenção de disciplina de luzes quando exigido pelo terreno.",
                    "c) É permitido às patrulhas rurais realizar a apreensão de bens e máquinas agrícolas sem qualquer registro formal ou comunicação à Sala de Operações.",
                    "d) A integração com lideranças comunitárias rurais e sindicatos patronais/trabalhadores fortalece a rede de prevenção contra furtos de insumos e maquinários."
                ],
                answer: 2,
                explanation: "Fundamentação: Diretriz do Policiamento Rural PMESP. A alternativa C é incorreta, pois qualquer apreensão de bens ou intervenção policial exige estrito cumprimento do devido processo legal e registro formal via BOPM/SOP."
            },
            {
                id: 213,
                subject: "OPERACIONAL",
                topic: "Programas de Policiamento - Polícia Comunitária e Método IARA",
                text: "A filosofia de Polícia Comunitária adota o Método IARA como metodologia científica de solução de problemas. Um Capitão Cmt de Cia orienta seus Comandantes de Pelotão a aplicarem o método no combate a furtos de veículos em um setor específico. Analise as etapas do Método IARA:\n\nI. Identificação: Mapeamento do problema específico de segurança na comunidade a partir do diálogo e dados estatísticos.\nII. Análise: Estudo aprofundado das causas, vulnerabilidades ambientais e atores envolvidos no problema criminal.\nIII. Resposta: Formulação e execução de ações estratégicas conjuntas entre a PM, comunidade e órgãos públicos.\nIV. Avaliação: Mensuração contínua dos resultados obtidos para verificar a efetividade da solução adotada.\n\nEstão corretas as definições contidas em:",
                options: [
                    "a) I e III, apenas.",
                    "b) II e IV, apenas.",
                    "c) I, II e III, apenas.",
                    "d) I, II, III e IV."
                ],
                answer: 3,
                explanation: "Fundamentação: Diretrizes de Polícia Comunitária PMESP (Método IARA). As quatro etapas sequenciais do acrônimo IARA (Identificação, Análise, Resposta e Avaliação) estão perfeitamente conceituadas."
            },
            {
                id: 214,
                subject: "OPERACIONAL",
                topic: "Programas de Policiamento - Drones / ARPAS",
                text: "Acerca da regulamentação do uso de Sistemas de Aeronaves Não Tripuladas (ARPAS/Drones) no âmbito da PMESP, de acordo com as normas corporativas e instrução do DECEA (ICA 100-40), analise as afirmações:\n\nI. A operação de ARPAS em missões policiais exige operador militar devidamente credenciado e aprovação prévia do plano de voo no sistema SARPAS/DECEA.\nII. É vedado o emprego de equipamentos privados pertencentes ao acervo pessoal do policial militar durante o serviço ordinário.\nIII. Em caso de perda de sinal de controle (Lost Link) durante o voo, o drone executa automaticamente a rotina preprogramada de retorno ao ponto de decolagem (RTH - Return to Home).\n\nEstá(ão) correta(s):",
                options: [
                    "a) Apenas a afirmação I.",
                    "b) Apenas as afirmações I e II.",
                    "c) Apenas as afirmações II e III.",
                    "d) Todas as afirmações (I, II e III)."
                ],
                answer: 3,
                explanation: "Fundamentação: Regulamentação de ARPAS na PMESP c/c ICA 100-40 DECEA. As três afirmações são corretas e traduzem as normas de segurança aérea e corporativa para uso de drones."
            },
            {
                id: 215,
                subject: "OPERACIONAL",
                topic: "Combate ao Crime Organizado - Planos de Cerco e Intimidadores",
                text: "Uma facção criminosa executa um ataque coordenado no modelo 'Domínio de Cidade' (Novo Cangaço) contra a sede de uma empresa de transporte de valores no interior do Estado. O Coordenador Operacional (CoordOp) assume a gestão inicial da crise no Nível Tático. Considerando as diretrizes de C2 e contingência contra crimes violentos patrimoniais, assinale a opção com a providência tática INCORRETA:",
                options: [
                    "a) Acionar imediatamente o Plano de Cerco Regional, estabelecendo pontos de bloqueio viário e contenção nas rotas estratégicas de fuga.",
                    "b) Determinar que viaturas isoladas de Rádio Patrulhamento efetuem incursões diretas ao centro do Ponto Crítico sem apoio de tropa tática.",
                    "c) Centralizar as comunicações no canal de rádio e manter constante fluxo de informações com a Sala de Operações e COPOM.",
                    "d) Solicitar o empenho de Unidades Especializadas de Reforço (BAEP, BPChq, CAvPM) para cerco ampliado e varredura de área."
                ],
                answer: 1,
                explanation: "Fundamentação: Diretrizes de C2 e Planos de Contingência da PMESP contra Roubos a Bancos/Novo Cangaço. A opção B é taticamente incorreta e vedada, pois expõe viaturas isoladas a emboscadas por armamento de alto calibre (fuzis), exigindo contenção à distância e atuação coordenada com tropa tática."
            },
            {
                id: 216,
                subject: "OPERACIONAL",
                topic: "Inteligência Operacional - Doutrina SIPOM",
                text: "No âmbito do Sistema de Inteligência da Polícia Militar (SIPOM), a produção do conhecimento inteligência subsidia o planejamento operacional do Batalhão. O documento elaborado pela Seção de Inteligência (P/2) que analisa dados coletados na ponta e apresenta diagnósticos táticos para tomada de decisão do Comandante de Unidade denomina-se:",
                options: [
                    "a) Auto de Prisão em Flagrante Delito (APFD).",
                    "b) Relatório de Inteligência (RELINT).",
                    "c) Parte de Ocorrência Especial.",
                    "d) Portaria de Investigação Preliminar."
                ],
                answer: 1,
                explanation: "Fundamentação: Doutrina SIPOM/PMESP. O RELINT (Relatório de Inteligência) é o documento formal do SIPOM destinado a difundir conhecimentos analisados para assessorar os comandantes."
            },
            {
                id: 217,
                subject: "OPERACIONAL",
                topic: "NORSOP - Tipos Formais de Atuação Operacional",
                text: "A Diretriz nº PM3-001/02/20 (NORSOP) conceitua os tipos formais de atuação operacional da Polícia Militar. Correlacione os termos da Coluna 1 com as respectivas definições da Coluna 2:\n\nColuna 1:\n(1) Ação Policial-Militar\n(2) Operação Policial-Militar\n(3) Missão Policial-Militar\n\nColuna 2:\n( A ) Atividade extraordinária, com prazo e local determinados, destinada a responder a demandas específicas de segurança.\n( B ) Atividade ordinária e continuada, executada segundo normas fixas e planejamento permanente da OPM.\n( C ) Tarefa eventual de caráter emergencial ou de cumprimento imediato atribuída a uma fração de tropa.\n\nA sequência correta da correlação é:",
                options: [
                    "a) 1-B, 2-A, 3-C.",
                    "b) 1-A, 2-B, 3-C.",
                    "c) 1-C, 2-A, 3-B.",
                    "d) 1-B, 2-C, 3-A."
                ],
                answer: 0,
                explanation: "Fundamentação: NORSOP (Diretriz nº PM3-001/02/20, item 3.7.2). Ação (ordinária e continuada = B), Operação (extraordinária com prazo = A) e Missão (tarefa eventual/emergencial = C)."
            },
            {
                id: 218,
                subject: "OPERACIONAL",
                topic: "SCIPM - Princípios da Estrutura Modular",
                text: "No SCIPM (Diretriz nº PM3-003/02/23), a estrutura organizacional expande-se e recolhe-se de forma modular. A respeito desse princípio, é correto afirmar que:",
                options: [
                    "a) Todas as seções e funções do SCIPM devem ser obrigatoriamente ativadas no instante inicial de qualquer ocorrência simples.",
                    "b) O crescimento da estrutura organizacional ocorre de baixo para cima, ativando-se apenas as seções e funções estritamente necessárias conforme a complexidade do incidente.",
                    "c) A estrutura modular impede que o Comandante do Incidente acumule funções operacionais no início da crise.",
                    "d) A desmobilização dos recursos deve ser feita de forma simultânea sem qualquer cronograma tático."
                ],
                answer: 1,
                explanation: "Fundamentação: Diretriz nº PM3-003/02/23 (SCIPM, item 5.2). A estrutura modular é dinâmica e cresce conforme a necessidade e complexidade do incidente, ativando seções gradualmente."
            },
            {
                id: 219,
                subject: "OPERACIONAL",
                topic: "Câmeras Operacionais Portáteis (COP) - Situações de Exceção",
                text: "Durante o atendimento de ocorrência de crime contra a dignidade sexual envolvendo vítima vulnerável no interior de estabelecimento de saúde, a equipe policial militar equipada com COP atua no local. Em relação à captação de imagens e proteção da intimidade, a Diretriz nº PM3-001/02/25 determina que:",
                options: [
                    "a) Os policiais devem desligar o equipamento e recusar a produção de qualquer imagem da ocorrência.",
                    "b) A gravação da intervenção deve focar a produção de provas, vestígios do local e qualificações, adotando-se enquadramentos que zelem pela dignidade e evitem a exposição indevida da intimidade da vítima.",
                    "c) A COP deve ser entregue aos familiares da vítima para que eles conduzam a gravação.",
                    "d) O arquivo gravado deve ser publicado em redes sociais para identificação de denúncias."
                ],
                answer: 1,
                explanation: "Fundamentação: Diretriz nº PM3-001/02/25 (COP, item 6.7). Mantém-se o dever de gravação com foco na colheita de provas e vestígios do fato, enquadrando-se com sensibilidade para proteger a intimidade e imagem do vulnerável."
            },
            {
                id: 220,
                subject: "OPERACIONAL",
                topic: "Programas de Policiamento - ROCAM",
                text: "A ROCAM (Rondas Ostensivas com Apoio de Motocicletas) destaca-se pela mobilidade tática no ambiente urbano congestionado. Assinale a alternativa que indica a principal diretriz de lançamento da ROCAM:",
                options: [
                    "a) Atuação exclusiva em guarda de presídios e escolta de presos civis.",
                    "b) Emprego prioritário em corredores de grande tráfego, corredores comerciais e manchas criminais de roubo de veículos/transeuntes, dando apoio rápido à RP.",
                    "c) Realização de patrulhamento de estradas rurais não pavimentadas em comboio pesado.",
                    "d) Interdição de vias públicas sem prévia autorização da autoridade de trânsito."
                ],
                answer: 1,
                explanation: "Fundamentação: Manual de Doutrina ROCAM/PMESP. Foca em flexibilidade, agilidade e supressão do trânsito denso para combate aos roubos urbanos e apoio rápido."
            },
            {
                id: 221,
                subject: "OPERACIONAL",
                topic: "NORSOP - Conceito de Unidade de Serviço (US)",
                text: "Na estrutura conceitual da NORSOP (Diretriz nº PM3-001/02/20), a menor célula de execução do policiamento ostensivo, composta por recursos humanos e materiais empenhada em cartão de prioridade, denomina-se:",
                options: [
                    "a) Subárea de Policiamento.",
                    "b) Unidade de Serviço (US).",
                    "c) Posto de Comando Regional.",
                    "d) Pelotão de Força Tática."
                ],
                answer: 1,
                explanation: "Fundamentação: NORSOP (Diretriz nº PM3-001/02/20, item 3.2). Definição exata de Unidade de Serviço (US) na norma (ex: viatura de RP, dupla de ROCAM, patrulha a pé)."
            },
            {
                id: 222,
                subject: "OPERACIONAL",
                topic: "SCIPM - Unidade de Comando",
                text: "O princípio da Unidade de Comando no SCIPM (Diretriz nº PM3-003/02/23) estabelece expressamente que:",
                options: [
                    "a) Todas as forças de segurança estaduais e federais no local respondem diretamente ao Governador do Estado.",
                    "b) Cada indivíduo empregado no incidente reporta-se e recebe ordens de apenas 1 (um) único supervisor designado na cadeia de comando.",
                    "c) O Posto de Comando deve ser dividido em duas instalações separadas para Oficiais e Praças.",
                    "d) Apenas 1 (um) policial militar pode estar empenhado no local da crise."
                ],
                answer: 1,
                explanation: "Fundamentação: Diretriz nº PM3-003/02/23 (SCIPM, item 5.3). Unidade de Comando significa que cada participante presta contas a apenas 1 supervisor direto."
            },
            {
                id: 223,
                subject: "OPERACIONAL",
                topic: "Programas de Policiamento - Trânsito (Competência e Legislação)",
                text: "Um motorista é flagrado por equipe de Rádio Patrulhamento dirigindo veículo com placas de identificação adulteradas (dublê). Diante dessa constatação, a conduta correta da equipe abrange:",
                options: [
                    "a) Liberar o condutor após remoção das placas e aplicação de advertência verbal.",
                    "b) Efetuar a prisão em flagrante delito do condutor pelo crime do Art. 311 do Código Penal, apreender o veículo e conduzir as partes à Polícia Judiciária.",
                    "c) Aplicar sanção disciplinar militar ao motorista civil.",
                    "d) Incinerar o veículo no local do fato."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 311 do Código Penal e Procedimento Operacional Padrão. A adulteração de sinal identificador veicular constitui crime grave, impondo prisão em flagrante e apreensão."
            },
            {
                id: 224,
                subject: "OPERACIONAL",
                topic: "Sistema de C2 - Sala de Operações da OPM",
                text: "A Sala de Operações da OPM atua como nó de C2 descentralizado no Nível Tático. Dentre suas atribuições regulamentares, NÃO se inclui:",
                options: [
                    "a) O monitoramento contínuo do lançamento das Unidades de Serviço no terreno.",
                    "b) A redistribuição de Cartões de Prioridade (CPP) em caso de ocorrências de emergência.",
                    "c) A edição de leis de trânsito em substituição ao Congresso Nacional.",
                    "d) A interlocução constante de C2 com o COPOM e com o Oficial CFP."
                ],
                answer: 2,
                explanation: "Fundamentação: Diretriz nº PM3-001/02/23 (C2) e NORSOP. A opção C é esdrúxula e patentemente incorreta em termos de atribuição institucional do Poder Executivo/PMESP."
            },
            {
                id: 225,
                subject: "OPERACIONAL",
                topic: "Programas de Policiamento - Ronda Maria da Penha (Descumprimento de MPU)",
                text: "O crime de descumprimento de Medida Protetiva de Urgência (Art. 24-A da Lei nº 11.340/06) praticado por agressor flagrado pela equipe da Ronda Maria da Penha possui a seguinte peculiaridade jurídica na esfera policial:",
                options: [
                    "a) Admite a concessão de fiança diretamente pela Autoridade Policial (Delegado de Polícia) no Distrito Policial.",
                    "b) A fiança somente poderá ser concedida pelo Juiz de Direito competente, sendo vedada a fiança na esfera policial.",
                    "c) Transforma-se em infração administrativa de trânsito sem sanção penal.",
                    "d) Impõe a imediata libertação do autor sem lavratura de Auto de Prisão."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 24-A, § 2º da Lei nº 11.340/06 (Lei Maria da Penha). Na prisão em flagrante pelo descumprimento de MPU, a fiança só pode ser concedida pelo Juiz."
            },

            // =========================================================================
            // ASSUNTOS JURÍDICO-ADMINISTRATIVOS (~30% - QUESTÕES 226 A 240)
            // =========================================================================
            {
                id: 226,
                subject: "JURIDICO",
                topic: "Lei Complementar nº 18.442/26 - Estrutura dos Quadros e Precedência",
                text: "A Lei Complementar nº 18.442, de 02ABR26, reorganizou o pessoal e a carreira da PMESP. Em uma ocorrência de grande repercussão, encontram-se presentes dois 1º Tenentes PM da ativa promovidos na mesma data: um integrante do Quadro de Oficiais Estado-Maior (QOEM) e outro do Quadro de Oficiais Especialistas (QOE). À luz das regras de precedência funcional da LC nº 18.442/26, analise as proposições:\n\nI. O Oficial integrante do QOEM possui precedência funcional sobre o Oficial do QOE em igualdade de postos no serviço ativo.\nII. Os cargos de Comandante-Geral, Subcomandante-Geral e Secretário-Chefe da Casa Militar são privativos de Coronéis PM do serviço ativo integrantes do QOEM.\nIII. Os Oficiais do QOE podem progredir na carreira até o posto de Coronel PM do QOEM sem necessidade de concurso.\n\nAssinale a alternativa correta:",
                options: [
                    "a) Apenas os itens I e II estão corretos.",
                    "b) Apenas os itens II e III estão corretos.",
                    "c) Apenas o item I está correto.",
                    "d) Todos os itens (I, II e III) estão corretos."
                ],
                answer: 0,
                explanation: "Fundamentação: Arts. 4º (§ 3º), 7º e 10 da Lei Complementar nº 18.442/26. Os itens I e II estão corretos. O item III é incorreto, pois os Oficiais do QOE possuem carreira delimitada nos postos do seu quadro, não migrando compulsoriamente aos postos do QOEM sem a formação no CFO/Direito."
            },
            {
                id: 227,
                subject: "JURIDICO",
                topic: "Lei Complementar nº 18.442/26 - Efetivo Fixado e Exceções",
                text: "O artigo 3º da Lei Complementar nº 18.442/26 fixa o teto do efetivo da Polícia Militar do Estado de São Paulo em 93.802 cargos. O parágrafo único do mesmo artigo estabelece exceções expressas que NÃO são computadas nesse limite legal. Analise a listagem abaixo:\n\n1. Aspirantes a Oficial PM\n2. Cadetes PM (Alunos-Oficiais PM)\n3. Alunos-Soldados PM\n4. Policiais Militares da Reserva Remunerada Revertidos ao serviço ativo\n5. Policiais Militares Temporários\n\nNÃO integram o cômputo do teto fixado de 93.802 cargos:",
                options: [
                    "a) Apenas os itens 1, 2 e 3.",
                    "b) Apenas os itens 2, 3 e 5.",
                    "c) Apenas os itens 1, 4 e 5.",
                    "d) Todos os itens (1, 2, 3, 4 e 5)."
                ],
                answer: 3,
                explanation: "Fundamentação: Art. 3º, parágrafo único da Lei Complementar nº 18.442/26. Todos os cinco grupos listados são expressamente excluídos do cômputo do limite máximo de 93.802 cargos fixados na lei."
            },
            {
                id: 228,
                subject: "JURIDICO",
                topic: "RDPM - Sanções e Conversão em Serviço Extraordinário",
                text: "Nos termos da LC nº 893/01 (RDPM), a sanção disciplinar de Permanência Disciplinar implica a retenção do militar na OPM. O punido pode requerer a conversão da permanência disciplinar em prestação de serviço extraordinário. A respeito dessa conversão e seus efeitos jurídicos, assinale a alternativa correta:",
                options: [
                    "a) O deferimento do pedido de conversão é ato vinculado da autoridade, não podendo ser indeferido.",
                    "b) A solicitação da conversão formulada pelo punido importa na renúncia ou elisão do direito de interpor recurso de Reconsideração de Ato.",
                    "c) O serviço extraordinário fruto da conversão será prestado sem fardamento nas folgas e com remuneração em dobro.",
                    "d) A conversão anula o registro de punição do assentamento individual do militar."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 16, § 4º da LC nº 893/01 (RDPM). O pedido de conversão formulado pelo transgressor e deferido a juízo motivado da autoridade importa na renúncia/elisão do recurso administrativo de reconsideração de ato."
            },
            {
                id: 229,
                subject: "JURIDICO",
                topic: "RDPM - Classificação do Comportamento Disciplinar",
                text: "Um Cabo PM possui em seus assentamentos funcionais o registro de 1 (uma) Permanência Disciplinar sofrida há 18 meses e NENHUMA outra sanção no período de 2 anos. De acordo com as regras do Artigo 53 do RDPM (LC nº 893/01), em qual Comportamento Disciplinar a praça estará enquadrada?",
                options: [
                    "a) Comportamento Excepcional.",
                    "b) Comportamento Ótimo.",
                    "c) Comportamento Bom.",
                    "d) Comportamento Insuficiente."
                ],
                answer: 2,
                explanation: "Fundamentação: Art. 53 do RDPM (LC nº 893/01). Enquadra-se no Comportamento 'Bom' a praça que, no período de 2 anos de efetivo serviço, tenha sido punida com até 2 Permanências Disciplinares (ou equivalente em repreensões)."
            },
            {
                id: 230,
                subject: "JURIDICO",
                topic: "RDPM - Deveres Éticos e Causas de Justificação",
                text: "Analise a situação fática: Um Policial Militar, ao notar que um veículo desgovernado caminhava em direção a uma multidão de pedestres, colidiu intencionalmente a viatura policial contra o automóvel sem freios, destruindo a frente da viatura e evitando o atropelamento de dezenas de pessoas. Instaurou-se procedimento para apurar o dano ao patrimônio público. Diante do RDPM (LC nº 893/01), a conduta do militar enquadra-se na:",
                options: [
                    "a) Circunstância Agravante de dano ao patrimônio.",
                    "b) Causa de Justificação (prática de ação para evitar mal maior), isentando o militar de punição disciplinar.",
                    "c) Transgressão Disciplinar de Natureza Grave com demissão ex officio.",
                    "d) Circunstância Atenuante de confissão espontânea apenas."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 34, II do RDPM (LC nº 893/01). A conduta praticada para evitar mal maior ou em legítima defesa constitui Causa de Justificação, eliminando a transgressão disciplinar."
            },
            {
                id: 231,
                subject: "JURIDICO",
                topic: "Doutrina Correcional - Prazos do IPM e Indiciado Preso",
                text: "Um Inquérito Policial Militar (IPM) é instaurado para apurar crime militar de peculato. O indiciado encontra-se PRESO preventivamente por ordem da Justiça Militar. Nos termos expressos do Artigo 20 do Código de Processo Penal Militar (CPPM), qual é o prazo para a conclusão e remessa dos autos?",
                options: [
                    "a) 10 (dez) dias corridos e improrrogáveis.",
                    "b) 20 (vinte) dias, prorrogáveis por mais 10 dias.",
                    "c) 40 (quarenta) dias, prorrogáveis por mais 20 dias.",
                    "d) 60 (sessenta) dias sem prorrogação."
                ],
                answer: 0,
                explanation: "Fundamentação: Art. 20 do CPPM. Estando o indiciado preso, o prazo para conclusão e remessa do IPM é de 10 dias corridos improrrogáveis, contados do cumprimento da prisão."
            },
            {
                id: 232,
                subject: "JURIDICO",
                topic: "Doutrina Correcional - IPM com Indiciado Solto e Prorrogação",
                text: "Estando o indiciado SOLTO no Inquérito Policial Militar (IPM), o prazo de conclusão regulamentar previsto no Artigo 20 do CPPM é de 40 (quarenta) dias. Caso o Encarregado necessite de prazo complementar para diligências imprescindíveis, a prorrogação do IPM deve ser solicitada à autoridade judiciária e poderá ser concedida pelo prazo de até:",
                options: [
                    "a) 10 dias.",
                    "b) 20 (vinte) dias adicionais.",
                    "c) 90 dias adicionais.",
                    "d) 180 dias adicionais."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 20, § 1º do CPPM. Estando o indiciado solto, o prazo inicial é de 40 dias, prorrogável por mais 20 dias mediante autorização fundamentada do Juiz Militar."
            },
            {
                id: 233,
                subject: "JURIDICO",
                topic: "Processos Disciplinares - Conselho de Disciplina e PDRS",
                text: "A respeito dos Processos Administrativos Disciplinares na PMESP (Conselho de Disciplina, Conselho de Justificação e PDRS), analise as afirmações:\n\nI. O Conselho de Justificação é o processo destinado a julgar a incapacidade moral e profissional de Oficiais da Polícia Militar.\nII. O Conselho de Disciplina aplica-se ao julgamento de Praças com estabilidade assegurada (com mais de 10 anos de efetivo serviço).\nIII. O Processo Disciplinar de Rito Sumário (PDRS) destina-se a julgar faltas disciplinares de praças não demissórias de forma célere.\n\nAssinale a alternativa correta:",
                options: [
                    "a) Apenas os itens I e II estão corretos.",
                    "b) Apenas os itens II e III estão corretos.",
                    "c) Apenas o item III está correto.",
                    "d) Todos os itens (I, II e III) estão corretos."
                ],
                answer: 3,
                explanation: "Fundamentação: Lei nº 5.836/72 (CJ), Decreto nº 15.848/76 (CD) e Instruções do PAD da PMESP (PDRS). As três proposições delimitam com perfeição o escopo de aplicação dos três processos disciplinares."
            },
            {
                id: 234,
                subject: "JURIDICO",
                topic: "RDPM - Prazos de Prescrição Disciplinar",
                text: "A ação disciplinar da Administração para apurar transgressões disciplinares sujeitas às sanções de Advertência, Repreensão e Permanência Disciplinar prescreve no prazo de:",
                options: [
                    "a) 1 (um) ano.",
                    "b) 2 (dois) anos, contados da data em que a falta foi praticada.",
                    "c) 5 (cinco) anos.",
                    "d) 10 (dez) anos."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 85 do RDPM (LC nº 893/01). A prescrição da ação disciplinar para sanções não demissórias ocorre no prazo de 2 anos contados do cometimento do fato."
            },
            {
                id: 235,
                subject: "JURIDICO",
                topic: "Doutrina Correcional - Crime Doloso contra a Vida de Civil",
                text: "Quando policiais militares de serviço envolvem-se em confronto que resulte na morte dolosa de um civil (MDIP), a competência para a lavratura do procedimento de Polícia Judiciária Militar e para o julgamento final do crime doloso contra a vida é dividida do seguinte modo:",
                options: [
                    "a) A PMESP lavra a Sindicância e a Justiça Militar julga o homicídio doloso.",
                    "b) A Polícia Judiciária Militar (Oficial PM) instaura e conduz o Inquérito Policial Militar (IPM), e a remessa dos autos é feita à Justiça Comum (Tribunal do Júri) para processamento e julgamento.",
                    "c) O procedimento é instaurado exclusivamente pela Guarda Municipal e julgado no TRF.",
                    "d) O caso é julgado diretamente pelo Comandante de Batalhão sem remessa ao Judiciário."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 82, § 2º do CPPM c/c Lei nº 9.299/96. A apuração do crime militar contra a vida de civil é feita em IPM conduzido por Oficial PM, sendo a competência de julgamento do Tribunal do Júri (Justiça Comum)."
            },
            {
                id: 236,
                subject: "JURIDICO",
                topic: "Lei Complementar nº 18.442/26 - Requisitos de Promoção a Capitão PM",
                text: "Para que um 1º Tenente PM do QOEM concorra à promoção ao posto de Capitão PM, a Lei Complementar nº 18.442/26 estabelece requisitos cumulativos. Dentre as exigências abaixo, assinale a INCORRETA:",
                options: [
                    "a) Cumprimento do interstício mínimo de 4 (quatro) anos no posto de 1º Tenente PM.",
                    "b) Aprovação na Avaliação de Competência Profissional (ACP).",
                    "c) Estar posicionado na primeira quarta parte (1/4) do almanaque do posto.",
                    "d) Possuir obrigatoriamente título de doutorado stricto sensu em Direito Penal."
                ],
                answer: 3,
                explanation: "Fundamentação: Arts. 8º e 11 da LC nº 18.442/26. As alternativas A, B e C são requisitos legais expressos. A exigência de doutorado (D) é falsa e não prevista na legislação corporativa."
            },
            {
                id: 237,
                subject: "JURIDICO",
                topic: "RDPM - Competências Disciplinares",
                text: "Assinale a alternativa que indica a autoridade que possui competência disciplinar legal para aplicar a sanção de EXPULSÃO a praça com estabilidade assegurada, nos termos do RDPM (LC nº 893/01):",
                options: [
                    "a) Comandante de Companhia PM.",
                    "b) Coordenador Operacional da OPM.",
                    "c) Comandante-Geral da Polícia Militar.",
                    "d) Chefe da P/1 do Batalhão."
                ],
                answer: 2,
                explanation: "Fundamentação: Art. 31, I do RDPM (LC nº 893/01). A aplicação da sanção demissória de Expulsão ou Demissão é competência exclusiva do Comandante-Geral da PMESP."
            },
            {
                id: 238,
                subject: "JURIDICO",
                topic: "RDPM - Cancelamento de Sanções Disciplinares",
                text: "O cancelamento de registros de sanções disciplinares do assentamento individual do militar (Artigo 68 do RDPM) pode ser concedido após o transcurso sem punições do prazo de efetivo serviço de:",
                options: [
                    "a) 1 (um) ano.",
                    "b) 3 (três) anos.",
                    "c) 5 (cinco) anos.",
                    "d) 10 (dez) anos."
                ],
                answer: 2,
                explanation: "Fundamentação: Art. 68 do RDPM (LC nº 893/01). O cancelamento administrativo de registros de sanções exige o cumprimento de 5 anos de efetivo serviço sem qualquer nova punição disciplinar."
            },
            {
                id: 239,
                subject: "JURIDICO",
                topic: "Doutrina Correcional - Deserção de Praça (Prazo de Consumação)",
                text: "O crime militar de Deserção praticado por Praça sem licença (Artigo 187 do Código Penal Militar) consuma-se quando a ausência não justificável da Unidade onde serve ultrapassa o prazo de:",
                options: [
                    "a) 24 horas.",
                    "b) 48 horas.",
                    "c) 8 (oito) dias consecutivos.",
                    "d) 30 dias."
                ],
                answer: 2,
                explanation: "Fundamentação: Art. 187 do Código Penal Militar (CPM). A consumação da deserção exige ausência injustificada por mais de 8 dias consecutivos (a partir do primeiro minuto do 9º dia)."
            },
            {
                id: 240,
                subject: "JURIDICO",
                topic: "RDPM - Prazos Recursais",
                text: "O prazo regulamentar para o militar do Estado interpor Pedido de Reconsideração de Ato contra punição disciplinar aplicada pela autoridade é de:",
                options: [
                    "a) 2 (dois) dias úteis.",
                    "b) 5 (cinco) dias úteis.",
                    "c) 10 (dez) dias corridos.",
                    "d) 15 (quinze) dias úteis."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 58 do RDPM (LC nº 893/01). O prazo formal para interposição do recurso de Reconsideração de Ato é de 5 dias úteis contados da notificação/publicação."
            },

            // =========================================================================
            // ASSUNTOS ORGANIZACIONAIS (~20% - QUESTÕES 241 A 250)
            // =========================================================================
            {
                id: 241,
                subject: "ORGANIZACIONAL",
                topic: "Regime de Trabalho - Portaria nº PM1-7/02/23 e Folga Mensal",
                text: "De acordo com as regras da Portaria do Cmt G nº PM1-7/02/23 (Regime de Trabalho na PMESP), os policiais militares fixados em escalas de turnos operacionais de 12 horas (12x36 ou 12x24/12x48) fazem jus à concessão de 1 (uma) Folga Mensal Regulamentar a cada ciclo de cumprimento ininterrupto de quantos serviços?",
                options: [
                    "a) 8 serviços.",
                    "b) 10 serviços.",
                    "c) 14 (quatorze) serviços.",
                    "d) 18 serviços."
                ],
                answer: 2,
                explanation: "Fundamentação: Art. 12 da Portaria do Cmt G nº PM1-7/02/23. Nas escalas de turnos de 12 horas, o direito a 1 folga mensal é adquirido a cada 14 serviços prestados ininterruptamente."
            },
            {
                id: 242,
                subject: "ORGANIZACIONAL",
                topic: "Material Bélico - Portaria nº PM4-001/1.2/24 (Revogação Obrigatória)",
                text: "A Portaria nº PM4-001/1.2/24 disciplina a concessão e revogação de Carga Individual de material bélico. Assinale a alternativa que apresenta hipótese em que a revogação da Carga Individual por 12 (doze) meses é MEDIDA OBRIGATÓRIA:",
                options: [
                    "a) Quando o policial militar for movimentado de Companhia dentro do mesmo Batalhão.",
                    "b) Ao policial militar que tiver o material bélico da PMESP sob sua Carga Individual furtado, roubado ou extraviado.",
                    "c) Quando o militar for eleito representante de turma em curso da Polícia Militar.",
                    "d) Quando o militar obtiver nota inferior a 8,0 no Teste de Aptidão Física."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 11, § 3º da Portaria nº PM4-001/1.2/24. O furto, roubo ou extravio de material bélico institucional sob carga individual acarreta a revogação compulsória da autorização pelo prazo de 12 meses."
            },
            {
                id: 243,
                subject: "ORGANIZACIONAL",
                topic: "Material Bélico - Portaria nº PM4-001/1.2/24 (Comportamento Mau)",
                text: "Nos termos do Artigo 11 da Portaria nº PM4-001/1.2/24, o Comandante de Unidade é OBRIGADO a revogar a autorização para Carga Individual de material bélico do policial militar que:",
                options: [
                    "a) Completar 10 anos de efetivo serviço.",
                    "b) Ingressar no comportamento disciplinar 'Mau' e enquanto nele permanecer.",
                    "c) For transferido de Batalhão a pedido próprio.",
                    "d) For promovido à graduação de Cabo PM."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 11, II da Portaria nº PM4-001/1.2/24. O ingresso do policial militar no comportamento disciplinar 'Mau' impõe a revogação obrigatória da Carga Individual de armamento."
            },
            {
                id: 244,
                subject: "ORGANIZACIONAL",
                topic: "Violência Doméstica - Protocolo Institucional e Medidas Cautelares",
                text: "Um Policial Militar é envolvido como autor/agressor em ocorrência de Violência Doméstica contra a mulher, sendo deferida Medida Protetiva de Urgência (MPU) pelo Poder Judiciário. À luz do Protocolo Institucional de Prevenção e Atendimento a Conflitos Familiares da PMESP, qual medida cautelar administrativa e correcional OBRIGATÓRIA deve ser adotada de imediato pelo Comando da OPM?",
                options: [
                    "a) Demissão sumária sem procedimento administrativo.",
                    "b) Recolhimento cautelar imediato de todo o armamento (institucional e particular) sob posse do militar e seu encaminhamento para avaliação de saúde mental.",
                    "c) Concessão de elogio por preservar a vida privada.",
                    "d) Transferência do militar para a reserva remunerada ex officio."
                ],
                answer: 1,
                explanation: "Fundamentação: Protocolo Institucional de Atendimento em Violência Doméstica da PMESP. Diante de MPU ou risco grave em conflito familiar, impõe-se o recolhimento cautelar do armamento e acompanhamento de saúde."
            },
            {
                id: 245,
                subject: "ORGANIZACIONAL",
                topic: "Afastamentos Regulamentares - Luto e Férias",
                text: "Ocorrendo o falecimento de cônjuge, pais ou filhos (fato gerador de Afastamento por Luto) durante o gozo de férias regulamentares do policial militar, qual orientação corporativa deve ser observada?",
                options: [
                    "a) O afastamento por luto é absorvido pelas férias, perdendo o militar o direito a qualquer compensação.",
                    "b) A fruição das férias é interrompida/suspensa no dia do óbito, iniciando-se a contagem dos 8 dias de luto, devendo o saldo remanescente das férias ser gozado posteriormente.",
                    "c) O luto somente poderá ser usufruído após o término do período de férias.",
                    "d) O militar deve retornar imediatamente ao serviço no dia seguinte sem gozo do luto."
                ],
                answer: 1,
                explanation: "Fundamentação: Diretrizes da Diretoria de Pessoal (DP-PMESP) e Regulamento de Afastamentos. Ocorrendo luto ou núpcias durante as férias, estas são suspensas, gozando-se o afastamento compulsório e remanejando-se o saldo de férias."
            },
            {
                id: 246,
                subject: "ORGANIZACIONAL",
                topic: "Treinamento Continuado - Método Giraldi (Princípios)",
                text: "A Doutrina de Tiro Defensivo na Preservação da Vida (Método Giraldi) é o padrão oficial de treinamento de armamento da PMESP. Sobre os princípios fundamentais do Método Giraldi, analise as assertivas:\n\nI. A arma de fogo é considerada instrumento de defesa extrema ratio, cuja utilização deve ser pautada pela legalidade, necessidade e proporcionalidade.\nII. A verbalização firme, clara e a busca por abrigo tático precedem o uso da força letal sempre que taticamente viável.\nIII. As pistas de aplicação do método visam condicionar o policial a refletir e tomar decisões legais sobre disparar ou não disparar.\n\nEstá(ão) correta(s):",
                options: [
                    "a) Apenas as assertivas I e II.",
                    "b) Apenas as assertivas II e III.",
                    "c) Apenas a assertiva I.",
                    "d) Todas as assertivas (I, II e III)."
                ],
                answer: 3,
                explanation: "Fundamentação: Doutrina do Método Giraldi (PMESP). As três assertivas retratam com fidelidade pedagógica e doutrinária os pilares do Tiro Defensivo na Preservação da Vida."
            },
            {
                id: 247,
                subject: "ORGANIZACIONAL",
                topic: "SisTAF - TAF Alternativo e Condição Promocional",
                text: "A respeito do Sistema de Teste de Aptidão Física (SisTAF) na PMESP, assinale a alternativa correta:",
                options: [
                    "a) A aprovação no SisTAF é facultativa para praças que concorrem a promoções por antiguidade.",
                    "b) O policial militar com restrição médica temporária atestada pela Junta Regular de Saúde (JRS) pode realizar a prova alternativa regulamentada (ex: caminhada ou natação).",
                    "c) A aprovação no SisTAF dispensa a realização de inspeção de saúde anual.",
                    "d) Gestantes devem realizar a prova de corrida de 12 minutos sob supervisão."
                ],
                answer: 1,
                explanation: "Fundamentação: Diretrizes do SisTAF / Diretoria de Pessoal. A alternativa B é correta pois prevê a realização de modalidade alternativa regulamentada autorizada pela JRS para militares com restrição temporária."
            },
            {
                id: 248,
                subject: "ORGANIZACIONAL",
                topic: "Processo Administrativo - Sindicância para Danos ao Erário",
                text: "Uma Sindicância é instaurada para apurar colisão de viatura policial militar contra muro particular. A comissão apura que o motorista agiu com imprudência grave (culpa provada). A respeito da Solução da Sindicância, a autoridade deve determinar:",
                options: [
                    "a) O arquivamento do processo sem qualquer cobrança por se tratar de viatura pública.",
                    "b) O encaminhamento para ressarcimento dos danos ao erário ao militar responsável, sem prejuízo da remessa de cópia para apuração disciplinar/penal cabível.",
                    "c) A demissão imediata do militar sem direito a recurso.",
                    "d) A transferência do débito para a seguradora privada da vítima sem apuração interna."
                ],
                answer: 1,
                explanation: "Fundamentação: Instruções de Sindicância da PMESP (I-16-PM). Provada a responsabilidade subjetiva (culpa/dolo) por dano ao patrimônio, impõe-se a notificação para ressarcimento ao erário e abertura de apuração disciplinar."
            },
            {
                id: 249,
                subject: "ORGANIZACIONAL",
                topic: "Regime de Trabalho - DEJEM e Atividade Delegada",
                text: "A prestação de serviço em Diária Especial por Jornada Extraordinária de Trabalho Policial-Militar (DEJEM) e em Atividade Delegada possui as seguintes características regulamentares comuns:",
                options: [
                    "a) São de cumprimento compulsório durante o horário do expediente administrativo.",
                    "b) São de adesão voluntária, prestadas durante o período de folga do militar, fardado e remuneradas mediante gratificação específica.",
                    "c) Substituem o cumprimento de punições de permanência disciplinar.",
                    "d) Podem ser executadas por policiais militares em gozo de licença médica."
                ],
                answer: 1,
                explanation: "Fundamentação: LC nº 1.227/13 (DEJEM) e Convênios de Atividade Delegada. Ambas as jornadas extraordinárias exigem voluntariedade, prestação durante folgas regulamentares e plena aptidão funcional."
            },
            {
                id: 250,
                subject: "ORGANIZACIONAL",
                topic: "Material Bélico - Portaria nº PM4-001/1.2/24 (Viagem ao Exterior)",
                text: "O policial militar detentor de autorização de Carga Individual de material bélico que vá realizar viagem ao exterior em gozo de férias regulamentares deve adotar a seguinte providência obrigatória antes do embarque:",
                options: [
                    "a) Levar a arma institucional na bagagem de mão.",
                    "b) Recolher obrigatoriamente a arma de fogo, munições e colete balístico na reserva de armas de sua Unidade.",
                    "c) Deixar a arma de fogo no interior do seu veículo particular no estacionamento do aeroporto.",
                    "d) Doar a arma de fogo a um cidadão civil."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 18 da Portaria nº PM4-001/1.2/24. Em caso de viagem ao exterior, o militar é obrigado a recolher cautelarmente todo o material bélico sob sua carga na reserva de armas da OPM."
            }
        
];

// Estrutura de Exportação e Integração ao index.html
const BANCO_SIMULADOS = {
    "simulado_01": {
        "titulo": "Simulado Geral ACP II/26 - Processo de Habilitação ao Posto de Capitão PM",
        "questoes": BANCO_GERAL_QUESTOES
    }
};

window.questionsDatabase = BANCO_GERAL_QUESTOES;
