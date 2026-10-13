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
    {
        "id": 1,
        "subject": "OPERACIONAL",
        "topic": "NORSOP - atribuições do CFP",
        "text": "QUESTÃO 1 — Durante o turno de serviço, o CFP verifica que diferentes Unidades de Serviço estão empregadas em programas de policiamento e atividades operacionais na área de responsabilidade. Ao constatar a necessidade de alinhar a execução dessas atividades às determinações do escalão superior, o CFP avalia as medidas de coordenação e supervisão cabíveis. Considerando a NORSOP, assinale a alternativa correta:",
        "options": [
          "a) Compete ao CFP coordenar e supervisionar os Programas de Policiamento e as Atividades Operacionais Diversas, dentro dos limites estabelecidos pelo escalão superior.",
          "b) Compete ao CFP acompanhar individualmente o tempo-resposta e os horários de início e término de todas as ocorrências atendidas pelas Unidades de Serviço.",
          "c) Compete ao CFP distribuir as Unidades de Serviço em status DISPONÍVEL conforme as determinações do Cmt Cia PM, sem atribuição de supervisão dos programas.",
          "d) Compete ao CFP certificar-se de que todas as Unidades de Serviço da Matriz Operacional I possuam Cartão de Prioridade de Patrulhamento e fiscalizar seu cumprimento."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fundamentação: NORSOP, Diretriz nº PM3-001/02/20, Anexo B, item 2.1 — coordenação e supervisão dos Programas de Policiamento e/ou Atividades Operacionais Diversas, nos limites do escalão superior. B, C e D deslocam para o CFP atribuições específicas descritas no Anexo B entre as atribuições do CGP, especialmente os itens 1.4, 1.2 e 1.3."
      },
      {
        "id": 2,
        "subject": "OPERACIONAL",
        "topic": "NORSOP - estrutura básica do Sistema Operacional",
        "text": "QUESTÃO 2 — De acordo com a Diretriz nº PM3-001/02/20 (NORSOP), como está fixada a estrutura básica do Sistema Operacional de Policiamento PM? Assinale a alternativa correta.",
        "options": [
          "a) Nos princípios básicos e nas diretrizes básicas, sem previsão de matrizes operacionais ou níveis de resposta.",
          "b) Nas Matrizes Operacionais I, II e III e nos Níveis de Resposta de 1 a 4.",
          "c) Nos níveis estratégico, tático e operacional, exclusivamente, conforme a estrutura do Sistema de Comando e Controle.",
          "d) Nos Programas de Policiamento Complementares, que constituem a estrutura básica exclusiva do sistema."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fundamentação: NORSOP, Diretriz nº PM3-001/02/20, item 3.6. A estrutura básica é organizada em Matrizes Operacionais I, II e III e Níveis de Resposta de 1 a 4. A alternativa A confunde estrutura com princípios e diretrizes; C desloca a classificação para níveis decisórios do Sistema de C2; D restringe indevidamente a estrutura aos programas complementares."
      },
      {
        "id": 3,
        "subject": "OPERACIONAL",
        "topic": "NORSOP - fiscalização do atendimento de ocorrências pelo CGP",
        "text": "QUESTÃO 3 — O CGP da 2ª Companhia observa que uma viatura permanece há tempo considerável no atendimento de uma ocorrência de perturbação do sossego. Ao mesmo tempo, há outras ocorrências pendentes na Subárea. O graduado solicita à equipe informações sobre o andamento do atendimento e os motivos da permanência no local, para avaliar a situação operacional. À luz da NORSOP, assinale a alternativa correta:",
        "options": [
          "a) A conduta é compatível com a atribuição do CGP de acompanhar e fiscalizar o atendimento de ocorrências, monitorando o tempo-resposta, os horários de início e término e a permanência das Unidades de Serviço.",
          "b) A conduta é incompatível com as atribuições do CGP, pois o acompanhamento do tempo de atendimento compete exclusivamente à Seção de Planejamento Operacional.",
          "c) A conduta somente seria cabível em ocorrência grave ou de grande repercussão, não abrangendo atendimentos ordinários em andamento.",
          "d) A conduta exige que o CGP assuma pessoalmente a ocorrência e determine a liberação imediata da viatura, independentemente da avaliação do atendimento."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fundamentação: NORSOP, Diretriz nº PM3-001/02/20, Anexo B, item 1.4. O dispositivo atribui ao CGP o acompanhamento e a fiscalização do atendimento, inclusive o monitoramento do tempo-resposta, dos horários e da permanência/necessidade de mais de uma Unidade de Serviço. B atribui exclusividade não prevista; C cria uma restrição inexistente no item; D transforma a fiscalização em ordem automática de encerramento, que o dispositivo não estabelece. O tempo elevado, isoladamente, não prova irregularidade."
      },
      {
        "id": 4,
        "subject": "OPERACIONAL",
        "topic": "NORSOP - princípios básicos e diretrizes básicas",
        "text": "QUESTÃO 4 — Considerando a classificação dos princípios básicos e das diretrizes básicas apresentada no material de NORSOP, analise as proposições:\n\nI. Excelência na Gestão é classificada como princípio básico.\nII. Direitos Humanos é classificado como princípio básico.\nIII. Autonomia Operacional é classificada como princípio básico.\nIV. Universalidade é classificada como diretriz básica.\n\nAssinale a alternativa que reúne apenas as proposições corretas.",
        "options": [
          "a) Apenas I e II.",
          "b) Apenas I, II e IV.",
          "c) Apenas II, III e IV.",
          "d) I, II, III e IV."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fundamentação: material de NORSOP constante de Assuntos Operacionais.pdf, quadro de princípios e diretrizes básicas. Excelência na Gestão e Direitos Humanos aparecem entre os princípios; Autonomia Operacional aparece entre as diretrizes; Universalidade também aparece entre as diretrizes. A proposição III troca a categoria normativa."
      },
      {
        "id": 5,
        "subject": "OPERACIONAL",
        "topic": "SCIPM - Posto de Comando",
        "text": "QUESTÃO 5 — Em um incidente policial estático, o Comandante do Incidente inicia a organização das funções de comando no local. Ainda não há uma estrutura física específica montada, mas um dos veículos presentes pode ser utilizado inicialmente para essa finalidade. Considerando a Diretriz nº PM3-003/02/23 (SCIPM), assinale a alternativa correta:",
        "options": [
          "a) O Posto de Comando pode ser estabelecido inicialmente em um dos veículos presentes, devendo sua localização geográfica ser informada ao COPOM/COBOM.",
          "b) O Posto de Comando somente pode ser estabelecido após a chegada de todas as agências envolvidas e a montagem de uma estrutura física permanente.",
          "c) O Posto de Comando corresponde à área em que os recursos recém-chegados aguardam atribuição de missões, sem concentrar as funções de comando.",
          "d) A localização do Posto de Comando deve ser comunicada apenas após o encerramento do incidente, para evitar alterações durante o atendimento."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fundamentação: Diretriz nº PM3-003/02/23 (SCIPM), itens 6.1.9 e 6.5.2.4.2, conforme o material disponibilizado. Para incidentes policiais estáticos, o Posto de Comando deve ser estabelecido e pode inicialmente corresponder a um dos veículos presentes; sua localização geográfica deve ser informada ao COPOM/COBOM. B impõe condição não prevista; C confunde o Posto de Comando com a área de espera; D contraria a orientação de informar a localização durante a operação."
      },
      {
        "id": 6,
        "subject": "OPERACIONAL",
        "topic": "SCIPM - Oficial de Ligação",
        "text": "QUESTÃO 6 — Durante um incidente crítico, representantes de diferentes órgãos públicos comparecem ao local para apoiar a resposta. O Comandante do Incidente precisa designar integrante do Staff de Comando para manter a ligação com esses representantes. De acordo com a Diretriz nº PM3-003/02/23 (SCIPM), qual função corresponde a essa atribuição?",
        "options": [
          "a) Oficial de Informações Públicas, responsável pela ligação principal com os representantes dos meios de comunicação.",
          "b) Oficial de Segurança, responsável por acompanhar os riscos à segurança das equipes e das operações.",
          "c) Oficial de Ligação, responsável pelo contato com representantes das agências externas envolvidas na resposta ao incidente.",
          "d) Chefe da Seção de Planejamento, responsável por substituir o Comandante do Incidente na articulação com todas as agências."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fundamentação: Diretriz nº PM3-003/02/23 (SCIPM), item 6.4.2.2.3, conforme o material disponibilizado: o Oficial de Ligação é o elo do Comandante do Incidente com representantes de agências externas envolvidas na resposta. A e B correspondem a outras funções do Staff; D atribui à Seção de Planejamento uma função de ligação que o dispositivo indica para o Oficial de Ligação."
      },
      {
        "id": 7,
        "subject": "OPERACIONAL",
        "topic": "Sistema de Comando e Controle - conceitos",
        "text": "QUESTÃO 7 — A Diretriz nº PM3-001/02/23 apresenta conceitos empregados no Sistema de Comando e Controle. Assinale a alternativa INCORRETA.",
        "options": [
          "a) Consciência Situacional é o conhecimento e a compreensão dos acontecimentos, circunstâncias e elementos do ambiente, delimitados no tempo e no espaço, permitindo construir imagem mental coerente e projetar riscos futuros.",
          "b) Imagem Operacional Comum corresponde à compreensão compartilhada entre pessoas engajadas na mesma missão, produzindo uma imagem mental comum dos acontecimentos e do ambiente.",
          "c) Diagnóstico Situacional envolve a identificação de fatores positivos e negativos que afetam a ordem pública no território da OPM, com base em indicadores.",
          "d) Consciência Situacional é exclusivamente um relatório estatístico mensal produzido pela Seção de Inteligência, sem relação com a percepção do ambiente ou a projeção de riscos."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. Fundamentação: Diretriz nº PM3-001/02/23, itens 6.1.6 (Consciência Situacional), 6.1.8 (Imagem Operacional Comum) e 6.1.7 (Diagnóstico Situacional), conforme Assuntos Operacionais.pdf. A alternativa D não corresponde à definição normativa; A, B e C reproduzem, de forma resumida, os conceitos apresentados no material."
      },
      {
        "id": 8,
        "subject": "OPERACIONAL",
        "topic": "Sistema de Comando e Controle - Sala de Operações",
        "text": "QUESTÃO 8 — No âmbito do Sistema de Comando e Controle, uma OPM de nível Batalhão/Companhia precisa identificar o componente responsável pelos serviços essenciais de C2 no nível operacional. Conforme a Diretriz nº PM3-001/02/23, assinale a alternativa correta:",
        "options": [
          "a) O Centro de Comando e Controle de Grande Comando, cuja atuação se restringe ao nível de Companhia.",
          "b) A Sala de Operações, responsável pelos serviços essenciais de C2 no nível operacional da OPM.",
          "c) O COPOM São Paulo, que assume as funções de C2 exclusivamente nas operações locais de uma única Companhia.",
          "d) A Seção de Inteligência, que substitui a Sala de Operações na transmissão de informações e no assessoramento ao comando."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fundamentação: Diretriz nº PM3-001/02/23, item 6.5.4.2.1, conforme Assuntos Operacionais.pdf. A Sala de Operações responde pelos serviços essenciais de C2 no nível operacional (Batalhão/Companhia). A descreve incorretamente o nível do CC2; C atribui ao COPOM São Paulo uma função local exclusiva que o material não prevê; D transfere à Seção de Inteligência as funções indicadas para a Sala de Operações."
      },
      {
        "id": 9,
        "subject": "OPERACIONAL",
        "topic": "COP - temporalidade mínima das evidências digitais",
        "text": "QUESTÃO 9 — Durante a conferência das regras de armazenamento das Câmeras Operacionais Portáteis (COP), um policial precisa distinguir o prazo de temporalidade mínima dos vídeos de rotina daquele aplicável às demais evidências digitais. Conforme a Diretriz nº PM3-001/02/25, assinale a alternativa correta:",
        "options": [
          "a) Vídeos de rotina: 90 dias; demais evidências digitais: 1 ano.",
          "b) Vídeos de rotina: 1 ano; demais evidências digitais: 90 dias.",
          "c) Todos os registros audiovisuais, independentemente da categoria, têm temporalidade mínima de 90 dias.",
          "d) Vídeos de rotina: 30 dias; demais evidências digitais: 5 anos."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fundamentação: Diretriz nº PM3-001/02/25, item 6.8.4.1 e 6.8.4.2. A temporalidade mínima é de 90 dias para vídeos de rotina e de 1 ano para as demais evidências digitais. B inverte os prazos; C aplica o prazo de vídeo de rotina a todas as evidências; D apresenta prazos que não constam do dispositivo."
      },
      {
        "id": 10,
        "subject": "OPERACIONAL",
        "topic": "COP - recolhimento e upload em ocorrência MDIP",
        "text": "QUESTÃO 10 — Após uma ocorrência com resultado morte decorrente de intervenção policial (MDIP), o CFP verifica que os policiais envolvidos utilizaram Câmeras Operacionais Portáteis. Considerando a Diretriz nº PM3-001/02/25, assinale a alternativa correta quanto ao recolhimento dos equipamentos e ao upload do conteúdo captado:",
        "options": [
          "a) O CGP deve recolher as câmeras e realizar o upload em todos os casos, substituindo o procedimento ordinário de entrega ao CFP.",
          "b) Cada policial envolvido deve manter o equipamento consigo e realizar o upload apenas ao final do turno, sem requisição específica.",
          "c) O CFP, ou equivalente, deve requisitar e recolher as COP e providenciar pessoalmente o upload do conteúdo, sempre que possível em ato contínuo ao recebimento, sem prejuízo das medidas necessárias ao gerenciamento da ocorrência.",
          "d) O Chefe da Seção PJMD deve recolher fisicamente as câmeras no local e realizar o upload antes de assumir a administração e a custódia das evidências."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fundamentação: Diretriz nº PM3-001/02/25, itens 6.4.6 e 6.11.3. Em ocorrências de MDIP, o policial deve entregar a COP ao CFP ou equivalente, que deverá requisitar e recolher os equipamentos e providenciar pessoalmente o upload, sempre que possível em ato contínuo ao recebimento, sem prejuízo do gerenciamento da ocorrência. A atribui a tarefa ao CGP; B ignora o procedimento específico; D confunde o recolhimento/upload com a administração e custódia que passam ao Chefe da Seção PJMD após o upload."
      },
      {
        "id": 11,
        "subject": "OPERACIONAL",
        "topic": "COP - ausência de gravação audiovisual",
        "text": "QUESTÃO 11 — Durante a conferência dos registros de uma ocorrência, o comandante constata que um policial militar deixou de produzir a gravação audiovisual exigida para a situação, sem justificativa registrada. De acordo com a Diretriz nº PM3-001/02/25 (COP), qual providência procedimental deve ser adotada diante da ausência injustificada de registro?",
        "options": [
          "a) Instaurar imediatamente Processo Disciplinar de Rito Sumário, sem apuração preliminar.",
          "b) Instaurar Investigação Preliminar (IP), conforme o procedimento previsto na diretriz.",
          "c) Encaminhar obrigatoriamente o caso a Conselho de Disciplina, independentemente das circunstâncias.",
          "d) Arquivar a ocorrência administrativa se houver registro escrito elaborado pela equipe."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fundamentação: Diretriz nº PM3-001/02/25 (COP), item 6.12, conforme o material de Assuntos Operacionais.pdf. O dispositivo indicado no material prevê Investigação Preliminar diante da ausência injustificada de registro. As demais alternativas antecipam procedimento diverso, impõem consequência não demonstrada ou afastam a apuração."
      },
      {
        "id": 12,
        "subject": "OPERACIONAL",
        "topic": "COP - acesso do policial ao próprio registro",
        "text": "QUESTÃO 12 — Um policial militar envolvido em ocorrência de grande repercussão será ouvido formalmente sobre os fatos. Antes de prestar suas declarações, solicita consultar a gravação realizada por sua própria Câmera Operacional Portátil (COP). Considerando a Diretriz nº PM3-001/02/25, assinale a alternativa correta.",
        "options": [
          "a) O acesso é vedado até o encerramento definitivo do procedimento apuratório.",
          "b) O acesso depende necessariamente de autorização judicial específica.",
          "c) É assegurado ao policial consultar o registro de sua COP relativo aos fatos em que participou, antes de prestar suas declarações oficiais, nos termos da diretriz.",
          "d) O acesso é permitido somente ao encarregado da investigação, ainda que o registro seja da própria câmera do policial."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fundamentação: Diretriz nº PM3-001/02/25 (COP), item 6.8, conforme o material de Assuntos Operacionais.pdf. A diretriz assegura ao policial a consulta ao registro de sua COP antes das declarações oficiais sobre o fato. As alternativas A, B e D acrescentam restrições não indicadas no trecho normativo utilizado."
      },
      {
        "id": 13,
        "subject": "OPERACIONAL",
        "topic": "Programa de Policiamento com Drones",
        "text": "QUESTÃO 13 — Uma OPM pretende empregar aeronave não tripulada para apoiar uma ação de policiamento, com transmissão de imagens para melhorar a compreensão do cenário pelos responsáveis pela operação. Considerando a finalidade estabelecida na Diretriz nº PM3-005/02/24, assinale a alternativa correta.",
        "options": [
          "a) O emprego operacional de drones busca integrar recursos tecnológicos ao Sistema de Comando e Controle, ampliando a consciência situacional e contribuindo para mitigar o risco operacional.",
          "b) O emprego de drones substitui a necessidade de coordenação e controle das Unidades de Serviço no terreno.",
          "c) A utilização operacional de drones destina-se exclusivamente à produção de provas criminais após o encerramento da ocorrência.",
          "d) O emprego de drones dispensa a observância das normas e dos parâmetros aplicáveis ao acesso ao espaço aéreo."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fundamentação: Diretriz nº PM3-005/02/24 (Programa de Policiamento com Drones), itens 2 e 3.1–3.2, conforme Assuntos Operacionais.pdf. O programa busca integrar a tecnologia às estruturas institucionais e ao C2, elevando a consciência situacional e mitigando o risco operacional. B e C restringem ou substituem finalidades sem fundamento; D contraria a própria referência da diretriz à regulamentação do espaço aéreo."
      },
{
  "id": 14,
  "subject": "OPERACIONAL",
  "topic": "NORSOP - Programas de Policiamento Primários",
  "text": "QUESTÃO 14 — Ao revisar a distribuição dos recursos humanos e materiais de uma OPM territorial, um Capitão PM precisa distinguir os Programas de Policiamento Primários dos Complementares, conforme a NORSOP. Assinale a alternativa que apresenta exclusivamente os Programas de Policiamento Primários.",
  "options": [
    "a) Programa de Radiopatrulha e Programa de Força Tática.",
    "b) Programa de Policiamento Escolar e Programa de Policiamento Comunitário.",
    "c) Programa de Policiamento de Trânsito e Programa de Policiamento Rural.",
    "d) Programa de Policiamento Escolar e Atividades Operacionais Diversas."
  ],
  "answer": 0,
  "explanation": "Gabarito: A. Fundamentação: NORSOP, Diretriz nº PM3-001/02/20, item 6.4.1.1, conforme Assuntos Operacionais.pdf. Os Programas de Policiamento Primários são o Programa de Radiopatrulha e o Programa de Força Tática. O item 6.4.1.2 classifica Escolar, Comunitário, Trânsito e Rural como Programas Complementares; Atividades Operacionais Diversas constituem categoria própria, não um Programa Primário."
},

      {
        "id": 15,
        "subject": "OPERACIONAL",
        "topic": "Programa de Força Tática - finalidade",
        "text": "QUESTÃO 15 — Durante o planejamento operacional, o Comando de um Batalhão avalia o emprego da Força Tática para reforçar a resposta a ocorrências graves e reduzir os efeitos da criminalidade violenta em áreas de maior incidência. À luz da Diretriz nº PM3-003/02/20, assinale a alternativa correta.",
        "options": [
          "a) O Programa de Força Tática destina-se prioritariamente à guarda fixa de instalações administrativas e à escolta rotineira de autoridades.",
          "b) O Programa de Força Tática organiza o policiamento ostensivo e os apoios táticos executados pelas Forças Táticas, oferecendo suporte especializado a ocorrências e incidentes graves ou passíveis de repercussão.",
          "c) O Programa de Força Tática tem como finalidade substituir permanentemente as Unidades de Serviço do Programa de Radiopatrulha no atendimento ordinário.",
          "d) O Programa de Força Tática é destinado exclusivamente a operações de busca e salvamento sob comando do Corpo de Bombeiros."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fundamentação: Diretriz nº PM3-003/02/20 (Programa de Força Tática), itens 4.1, 4.2 e 6.1.1, conforme Assuntos Operacionais.pdf. A diretriz prevê controle de indicadores de criminalidade violenta, suporte operacional especializado e organização do policiamento e dos apoios táticos. As demais alternativas restringem ou alteram a finalidade descrita."
      },
      {
        "id": 16,
        "subject": "OPERACIONAL",
        "topic": "Programa de Policiamento Escolar - adolescente apreendido em flagrante",
        "text": "QUESTÃO 16 — Durante o patrulhamento no perímetro escolar, uma equipe presencia adolescente praticando ato infracional. Considerando as disposições do Estatuto da Criança e do Adolescente reproduzidas na Diretriz nº PM3-004/02/20 (Programa de Policiamento Escolar), assinale a alternativa correta.",
        "options": [
          "a) O adolescente deve ser entregue à direção da escola, que decidirá se o encaminha à autoridade policial.",
          "b) O adolescente apreendido em flagrante de ato infracional deve ser encaminhado desde logo à autoridade policial competente.",
          "c) O adolescente deve ser encaminhado diretamente à unidade de internação, independentemente de apresentação à autoridade policial.",
          "d) A equipe deve limitar-se a registrar o fato no relatório de serviço e liberar o adolescente, ainda que o flagrante esteja caracterizado."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fundamentação: Diretriz nº PM3-004/02/20, item 2.14, que reproduz o caput do art. 172 do ECA, conforme Assuntos Operacionais.pdf. O dispositivo determina o encaminhamento imediato à autoridade policial competente. As demais alternativas substituem ou suprimem essa etapa."
      },
{
  "id": 17,
  "subject": "OPERACIONAL",
  "topic": "NORSOP - segurança viária durante o policiamento",
  "text": "QUESTÃO 17 — Durante o patrulhamento, uma equipe identifica um obstáculo na via que prejudica a livre circulação e oferece risco aos usuários. Considerando as orientações de segurança viária previstas na NORSOP, assinale a alternativa correta quanto às providências a serem adotadas.",
  "options": [
    "a) Sinalizar imediatamente o local com os meios disponíveis e, em seguida, acionar pelo COPOM/CAD o órgão competente para os reparos emergenciais.",
    "b) Acionar primeiro o órgão responsável pelos reparos e aguardar sua chegada antes de sinalizar o local.",
    "c) Registrar a situação em relatório e manter o patrulhamento, deixando a sinalização a cargo do órgão responsável pela via.",
    "d) Comunicar o obstáculo ao COPOM/CAD e aguardar orientação, sem utilizar os meios de sinalização disponíveis no local."
  ],
  "answer": 0,
  "explanation": "Gabarito: A. Fundamentação: NORSOP, Anexo pertinente às orientações gerais de atuação do policial militar, item 4.14.2, conforme Assuntos Operacionais.pdf. Diante de obstáculo capaz de causar perigo, a orientação é providenciar imediatamente a sinalização com os meios disponíveis e, em seguida, acionar o órgão competente por meio do COPOM/CAD para os reparos emergenciais. B altera a sequência; C e D omitem a sinalização imediata exigida."
},

      {
        "id": 18,
        "subject": "OPERACIONAL",
        "topic": "Programa de Policiamento Rural - conceitos",
        "text": "QUESTÃO 18 — Ao organizar o emprego de uma Patrulha Rural, o comandante precisa identificar a finalidade do Programa de Policiamento Rural e o conceito de Patrulha Rural previstos na Diretriz nº PM3-007/02/20. Assinale a alternativa correta.",
        "options": [
          "a) O Programa de Policiamento Rural organiza o policiamento ostensivo geral voltado ao ambiente rural, e a Patrulha Rural é uma Unidade de Serviço composta por policiais militares designados e treinados para esse programa.",
          "b) O Programa de Policiamento Rural destina-se exclusivamente à fiscalização ambiental, e a Patrulha Rural é composta por agentes civis municipais.",
          "c) O Programa de Policiamento Rural substitui as atividades das OPM territoriais no ambiente rural, e a Patrulha Rural atua somente mediante requisição judicial.",
          "d) O Programa de Policiamento Rural restringe-se à investigação posterior de crimes, e a Patrulha Rural não executa policiamento ostensivo."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fundamentação: Diretriz nº PM3-007/02/20, itens 6.1.1 e 6.1.3, conforme Assuntos Operacionais.pdf. A diretriz define o programa como organização do policiamento ostensivo geral no ambiente rural e a Patrulha Rural como Unidade de Serviço composta por policiais designados e treinados para o programa."
      },
      {
        "id": 19,
        "subject": "OPERACIONAL",
        "topic": "Policiamento Comunitário - atuação junto ao CONSEG",
        "text": "QUESTÃO 19 — Ao assumir o comando de uma Subárea, um Capitão PM verifica que o Conselho Comunitário de Segurança (CONSEG) local está inativo. Considerando as atribuições de comando territorial previstas na NORSOP e as diretrizes do Programa de Policiamento Comunitário, assinale a alternativa correta.",
        "options": [
          "a) O comandante deve aguardar iniciativa exclusiva dos moradores, pois a OPM não possui atribuição relacionada à constituição ou ao funcionamento do CONSEG.",
          "b) O comandante deve atuar junto à estrutura comunitária local, observando as atribuições previstas na NORSOP quanto à constituição e à participação da PM no CONSEG ou Núcleo de Ação Local, conforme aplicável.",
          "c) O comandante deve substituir o CONSEG por órgão de investigação criminal, que passa a deliberar sobre prioridades de policiamento.",
          "d) O comandante deve transferir integralmente a gestão do policiamento local à diretoria do CONSEG."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fundamentação: NORSOP, Anexo C, quadro de funções de comando territorial, e Diretriz nº PM3-005/02/20 (Programa de Policiamento Comunitário), itens 6.4.3 e correlatos, conforme Assuntos Operacionais.pdf. O material prevê atuação dos comandantes na constituição e participação nos CONSEGs/NAL e estimula a integração comunitária. As alternativas A, C e D negam ou extrapolam as atribuições de comando."
      },
{
  "id": 20,
  "subject": "OPERACIONAL",
  "topic": "SCIPM - Sala de Gerenciamento de Incidentes",
  "text": "QUESTÃO 20 — Durante uma operação policial-militar, o Comandante responsável pelas ações em campo verifica a necessidade de integrar a atuação da Polícia Militar com órgãos externos. Segundo a Diretriz nº PM3-003/02/23 (SCIPM), qual alternativa descreve corretamente a instituição da Sala de Gerenciamento de Incidentes?",
  "options": [
    "a) O próprio Comandante responsável pelas operações em campo deve instituí-la obrigatoriamente, mesmo sem necessidade de integração com órgãos externos.",
    "b) A autoridade policial-militar superior ao Comandante responsável pelas operações em campo poderá instituí-la, por solicitação ou de ofício, sempre que houver necessidade de integração com órgãos externos à Polícia Militar.",
    "c) A Sala somente pode ser instituída após o encerramento das ações em campo, para consolidar os relatórios das agências envolvidas.",
    "d) A Sala deve ser instituída exclusivamente quando houver participação de duas ou mais OPM da mesma Matriz Operacional, independentemente da integração com órgãos externos."
  ],
  "answer": 1,
  "explanation": "Gabarito: B. Fundamentação: Diretriz nº PM3-003/02/23 (SCIPM), item 6.5.4.4.1, conforme Assuntos Operacionais.pdf. A Sala de Gerenciamento de Incidentes será instituída por autoridade policial-militar superior ao Comandante responsável pelas operações em campo, por solicitação ou de ofício, sempre que houver necessidade de integração com órgãos externos à Polícia Militar. A atribui a competência à autoridade errada e torna a instituição obrigatória em qualquer caso; C desloca a instituição para depois da operação; D cria requisito não previsto no dispositivo."
},
{
        "id": 21,
        "subject": "OPERACIONAL",
        "topic": "Combate ao Crime Organizado - providências de conhecimento",
        "text": "QUESTÃO 21 — Durante patrulhamento ostensivo, uma Unidade de Serviço identifica circunstâncias que podem sugerir a prática de ações típicas de crime organizado. Considerando a Diretriz nº PM3-001/02/24, assinale a alternativa correta quanto às providências previstas para a equipe e para os policiais militares em funções de comando e supervisão.",
        "options": [
          "a) A US deve aguardar a confirmação da autoria antes de comunicar o fato ao escalão superior, cabendo à Agência de Área decidir se os dados serão preservados.",
          "b) A US deve cientificar imediatamente o escalão superior; os oficiais e graduados em funções de comando e supervisão devem cientificar a Agência de Área e providenciar o envio dos dados e informações obtidos para monitoramento.",
          "c) A US deve encaminhar diretamente os dados ao CComSoc, que passa a ser responsável pela análise de inteligência e pelo acionamento das unidades operacionais.",
          "d) A comunicação é exigível apenas quando a ocorrência resultar em prisão, apreensão de armas ou identificação formal de organização criminosa."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fundamentação: Diretriz nº PM3-001/02/24, itens 6.4.3 e 6.4.4, em Assuntos Operacionais.pdf, p. 225-226. A US que identificar circunstâncias indicativas deve cientificar imediatamente o escalão superior; oficiais e graduados em comando/supervisão devem cientificar a Agência de Área e encaminhar os dados para monitoramento. A acrescenta requisito de confirmação; C transfere a atribuição para órgão diverso; D cria condição que a diretriz não prevê. Trecho: “as US que identificarem as circunstâncias elencadas [...] deverão cientificar, de imediato, o escalão superior”; e “os oficiais e graduados na função de comando e supervisão deverão cientificar a Agência de Área [...] e providenciando o envio dos dados e informações obtidas”."
      },
      {
        "id": 22,
        "subject": "OPERACIONAL",
        "topic": "NORSOP - divisão territorial",
        "text": "QUESTÃO 22 — Ao revisar o módulo de configuração territorial de uma OPM, um oficial precisa distinguir Subárea, Setor e Subsetor. Segundo a NORSOP, qual conceito corresponde ao Subsetor?",
        "options": [
          "a) Espaço territorial atribuído à responsabilidade de uma OPM de escalão Companhia PM ou equivalente.",
          "b) Fração territorial definida pelo Cmt Btl e atribuída à responsabilidade exclusiva de um Cmt Pel PM para gestão operacional localizada.",
          "c) Menor fração territorial existente dentro de uma Subárea, que pode ou não integrar um Setor e à qual será designada uma ou mais Unidades de Serviço.",
          "d) Espaço territorial atribuído à responsabilidade de um Comando de Policiamento, independentemente da organização em Áreas."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fundamentação: NORSOP, Diretriz nº PM3-001/02/20, itens 6.6.1.2 a 6.6.1.5, em Assuntos Operacionais.pdf, p. 257. A define Subárea; B define Setor; D corresponde à Região, atribuída à responsabilidade de um Cmdo Pol. O Subsetor é a menor fração territorial dentro de uma Subárea. Trecho: “Subsetor: Menor fração territorial existente dentro de uma subárea, que pode ou não fazer parte de um setor”."
      },
      {
        "id": 23,
        "subject": "OPERACIONAL",
        "topic": "SCIPM - transferência do comando",
        "text": "QUESTÃO 23 — Durante um incidente crítico, ocorre a transferência da função de Comandante do Incidente. Para que a continuidade da resposta seja mantida com segurança e eficácia, qual procedimento corresponde ao elemento essencial do SCIPM denominado Designação e Transferência do Comando por Processo?",
        "options": [
          "a) Realizar briefing de passagem e transmitir as informações essenciais à continuidade segura e eficaz das operações.",
          "b) Suspender todas as ações em curso até que o novo comandante refaça integralmente o planejamento desde o início.",
          "c) Comunicar a mudança apenas aos órgãos externos, mantendo o Posto de Comando sem atualização até o fim do incidente.",
          "d) Transferir o comando pela simples chegada de autoridade de maior posto, dispensando a transmissão das informações em andamento."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fundamentação: Diretriz nº PM3-003/02/23 (SCIPM), item 6.2.4.5, em Assuntos Operacionais.pdf, p. 145. O processo inclui briefing e transmissão das informações essenciais para manter as operações com segurança e eficácia. B interrompe e reinicia o planejamento sem previsão; C omite a atualização necessária à continuidade; D contraria a exigência de transferência por processo. Trecho: “Designação e transferência do comando por processo: designação do Cmt Inc com base em critérios pré-estabelecidos, e transferência do comandamento por metodologia que inclui briefing e transmissão das informações essenciais à manutenção das operações com segurança e eficácia”."
      },
      {
        "id": 24,
        "subject": "OPERACIONAL",
        "topic": "NORSOP - nível de planejamento operacional",
        "text": "QUESTÃO 24 — Um comandante precisa transformar os objetivos e metas definidos nos níveis estratégico e tático em processos detalhados e padrões de trabalho a serem observados pelos escalões durante ações, operações e missões policial-militares. Segundo a NORSOP, a atividade descrita pertence a qual nível de planejamento?",
        "options": [
          "a) Nível Estratégico, que estabelece as estratégias globais de longo prazo no âmbito do Comando-Geral.",
          "b) Nível Tático, que desdobra o planejamento estratégico em objetivos setoriais de médio prazo e planos gerenciais.",
          "c) Nível de Resposta 2, que corresponde ao apoio tático às Unidades de Serviço da Matriz Operacional I.",
          "d) Nível Operacional, que desenvolve Planos de Ação e detalha processos e padrões de trabalho para a execução."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. Fundamentação: NORSOP, Diretriz nº PM3-001/02/20, itens 6.3.1 a 6.3.3, em Assuntos Operacionais.pdf, p. 254-255. O Nível Operacional desenvolve Planos de Ação e detalha processos e padrões de trabalho. A descreve o nível estratégico; B descreve o tático; C confunde nível de planejamento com Nível de Resposta. Trecho: “Nível Operacional: consiste no desenvolvimento dos Planos de Ação, por meio do detalhamento dos processos e da fixação de padrões de trabalho”."
      },
      {
        "id": 25,
        "subject": "OPERACIONAL",
        "topic": "COP Motorola - modo tático ou velado",
        "text": "QUESTÃO 25 — Durante uma missão em que a disciplina de luz e som é necessária para preservar a segurança da equipe, o policial que utiliza a COP Motorola precisa acionar o modo tático, também denominado velado ou stealth. Conforme o material de COP Motorola constante de Assuntos Operacionais.pdf, qual é o efeito desse modo?",
        "options": [
          "a) A gravação audiovisual é interrompida, mas a localização do equipamento continua sendo transmitida.",
          "b) O equipamento desativa os sons e as luzes, mantendo a gravação audiovisual em funcionamento.",
          "c) A gravação continua apenas em áudio, com interrupção temporária da captação de vídeo.",
          "d) O equipamento transfere imediatamente as evidências para a doca e bloqueia novas gravações até o fim do turno."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fundamentação: Diretriz nº PM3-001/02/25 (COP), itens 6.6.3.1 e 6.6.3.2, em Assuntos Operacionais.pdf, p. 37; a descrição do equipamento Motorola também consta à p. 52. Trecho: “consiste na operação da COP com som e luzes desativados, mantendo-se, contudo, a possibilidade de registro audiovisual em pleno funcionamento”; a funcionalidade deve ser empregada quando a disciplina de luz e som for necessária à segurança da equipe ou ao êxito da missão. A, C e D atribuem ao modo funções que não constam da diretriz."
      },
      {
        "id": 26,
        "subject": "OPERACIONAL",
        "topic": "NORSOP - Matriz Operacional e Nível de Resposta",
        "text": "QUESTÃO 26 — Uma Unidade de Serviço da Matriz Operacional I solicita apoio tático de uma Força Tática pertencente à própria OPM territorial. A situação não exige recursos adicionais do Comando de Policiamento nem apoio especializado. Conforme a NORSOP, qual combinação corresponde ao emprego descrito?",
        "options": [
          "a) Matriz Operacional I e Nível de Resposta 1, pois todo apoio à US permanece classificado como recurso local.",
          "b) Matriz Operacional II e Nível de Resposta 2, pois há apoio tático por contingente capacitado da própria OPM.",
          "c) Matriz Operacional II e Nível de Resposta 3, pois qualquer emprego de Força Tática depende de recursos adicionais do Comando de Policiamento.",
          "d) Matriz Operacional III e Nível de Resposta 4, pois a atuação da Força Tática caracteriza apoio especializado."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fundamentação: NORSOP, Diretriz nº PM3-001/02/20, itens 6.2.1.2 e 6.2.2.2-6.2.2.4, em Assuntos Operacionais.pdf, p. 253-254. A Força Tática integra a Matriz Operacional II; o Nível de Resposta 2 é o apoio tático por contingentes com capacitação e equipamento próprios. O Nível 3 envolve recursos adicionais vinculados aos Cmdo Pol quando excedida a capacidade da OPM territorial; o Nível 4 corresponde a apoios especializados. Trecho: “Matriz Operacional II – Apoios Táticos e Ações Especiais de Polícia: composta pelas Forças Táticas (FT)”; e “Nível de Resposta 2: atuação complementar [...] que executam apoio tático às US da Matriz Operacional I”."
      },
      {
        "id": 27,
        "subject": "OPERACIONAL",
        "topic": "SCIPM - Unidade de Comando",
        "text": "QUESTÃO 27 — Em uma operação com vários respondedores, o Comandante do Incidente verifica que um integrante recebe orientações conflitantes de dois supervisores. Considerando o elemento essencial Unidade de Comando do SCIPM, assinale a alternativa correta.",
        "options": [
          "a) O integrante pode receber ordens de diferentes supervisores, desde que pertençam à mesma agência.",
          "b) A Unidade de Comando exige que todos os órgãos envolvidos se subordinem diretamente ao Comandante-Geral da PMESP.",
          "c) A Unidade de Comando corresponde à linha ordenada de autoridade pela qual tramitam informações e ordens, sem necessidade de definir responsabilidades individuais.",
          "d) A Unidade de Comando pressupõe cadeia de comando definida, clara divisão de responsabilidades, comunicação segura e doutrina operacional comum."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. Fundamentação: Diretriz nº PM3-003/02/23 (SCIPM), item 6.2.4.14, em Assuntos Operacionais.pdf, p. 146. A alternativa C descreve a Cadeia de Comando (item 6.2.4.2), mas omite a definição específica de Unidade de Comando. A admite orientações conflitantes; B impõe subordinação direta não prevista. Trecho: “Unidade de Comando: cadeia de comando bem definida, com clara divisão de responsabilidades, dotada de comunicação segura e confiável e cuja atuação obedece à uma doutrina operacional comum a todos os envolvidos”."
      },
      {
        "id": 28,
        "subject": "OPERACIONAL",
        "topic": "NORSOP - planejamento estratégico",
        "text": "QUESTÃO 28 — No planejamento institucional, são definidas estratégias globais de longo prazo que direcionam o emprego combinado dos Órgãos de Direção, Apoio, Execução e Assessoria. De acordo com a NORSOP, essa atribuição caracteriza qual nível de planejamento?",
        "options": [
          "a) Nível Operacional, materializado pelo detalhamento dos Planos de Ação e dos padrões de trabalho.",
          "b) Nível Tático, materializado pelo desdobramento dos objetivos em planos gerenciais setoriais de médio prazo.",
          "c) Nível Estratégico, desenvolvido no âmbito do Comando-Geral para estabelecer estratégias globais de longo prazo.",
          "d) Nível de Resposta 3, acionado quando a capacidade operativa da OPM territorial é excedida."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fundamentação: NORSOP, Diretriz nº PM3-001/02/20, item 6.3.1.1, em Assuntos Operacionais.pdf, p. 254-255. A descreve o nível operacional; B descreve o tático; D é nível de resposta, não nível de planejamento. Trecho: “no âmbito do Cmdo G, por meio do qual são estabelecidas as estratégias globais de longo prazo da Polícia Militar”."
      },
      {
        "id": 29,
        "subject": "OPERACIONAL",
        "topic": "COP - requerimento de evidências para procedimento apuratório",
        "text": "QUESTÃO 29 — Um policial militar na condição de acusado, por meio de seu defensor, requer acesso a registros audiovisuais da COP para subsidiar procedimento apuratório. Conforme a Diretriz nº PM3-001/02/25, a solicitação deve ser encaminhada:",
        "options": [
          "a) Diretamente ao fornecedor do equipamento, que poderá liberar os arquivos mediante identificação do requerente.",
          "b) Ao Chefe da Seção PJMD, que deverá deferir o acesso independentemente da autoridade responsável pela apuração.",
          "c) Ao Comandante da OPM, exclusivamente, ainda que outra autoridade esteja encarregada do procedimento.",
          "d) À autoridade encarregada do procedimento apuratório."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. Fundamentação: Diretriz nº PM3-001/02/25 (COP), item 6.8.6, em Assuntos Operacionais.pdf, p. 39. O requerimento por acusado civil ou policial militar, ou por seu defensor, deve ser feito à autoridade encarregada. A atribui a liberação ao fornecedor; B transforma a função de custódia em autoridade decisória do requerimento; C restringe o destinatário sem fundamento. Trecho: “o requerimento de dados para subsidiar procedimento apuratório por parte de acusado (civil ou policial militar) ou seu defensor deverá ser feito à autoridade encarregada”."
      },
      {
        "id": 30,
        "subject": "OPERACIONAL",
        "topic": "NORSOP - Plano de Policiamento Inteligente",
        "text": "QUESTÃO 30 — Uma OPM precisa gerir os ativos operacionais disponíveis de acordo com os problemas e as peculiaridades territoriais, em processo de melhoria contínua voltado à redução criminal e ao aumento da percepção de segurança. Segundo a NORSOP, essa metodologia denomina-se:",
        "options": [
          "a) Plano de Policiamento Inteligente (PPI).",
          "b) Plano de Ação do Incidente (PAI).",
          "c) Cartão de Prioridade de Patrulhamento (CPP).",
          "d) Plano de Contingência."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fundamentação: NORSOP, Diretriz nº PM3-001/02/20, item 6.8.1, em Assuntos Operacionais.pdf, p. 259. O PPI é a metodologia de gestão dos ativos operacionais segundo os problemas e peculiaridades territoriais. O PAI pertence ao gerenciamento de incidente; o CPP direciona a atuação de US; o Plano de Contingência planeja previamente a resposta a situação futura. Trecho: “Plano de Policiamento Inteligente (PPI): é a metodologia adotada pela Polícia Militar para gerir os ativos operacionais disponíveis de forma adequada aos problemas e às peculiaridades territoriais”."
      },
      {
        "id": 31,
        "subject": "OPERACIONAL",
        "topic": "Força Tática - atendimento de solicitações emergenciais",
        "text": "QUESTÃO 31 — Durante o desenvolvimento de atividade típica, uma equipe de Força Tática recebe solicitação emergencial que exige primeiro atendimento. Considerando a Diretriz nº PM3-003/02/20, assinale a alternativa correta.",
        "options": [
          "a) A equipe deve ignorar a solicitação, pois a Força Tática só pode atuar em operações previamente planejadas.",
          "b) A equipe deve atender a solicitação emergencial e, conforme o caso, providenciar a continuidade por outra Patrulha, desde que a transferência não implique erro procedimental nem impedimento legal ou regulamentar.",
          "c) A equipe deve encerrar sua atividade típica e transferir automaticamente todas as ocorrências futuras ao CFP, sem avaliar a possibilidade de continuidade por outra Patrulha.",
          "d) A equipe deve assumir obrigatoriamente todo o atendimento até o encerramento, ainda que outra Patrulha possa prosseguir sem erro procedimental ou impedimento legal."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fundamentação: Diretriz nº PM3-003/02/20 (Programa de Força Tática), item 6.8.2, em Assuntos Operacionais.pdf, p. 467. As FT devem prestar primeiro atendimento a solicitações emergenciais que surjam durante suas atividades típicas e podem providenciar continuação por outra Patrulha, observadas as condições previstas. A nega o primeiro atendimento; C cria transferência automática; D torna obrigatória a permanência até o fim. Trecho: “mesmo durante a execução de suas atividades típicas, as FT darão o primeiro atendimento às solicitações emergenciais que eventualmente surgirem, providenciando a continuação por outra Patrulha, conforme o caso”."
      },
      {
        "id": 32,
        "subject": "OPERACIONAL",
        "topic": "SCIPM - Chefe de Planejamento",
        "text": "QUESTÃO 32 — Em um incidente crítico, o Comandante do Incidente precisa de assessoramento para elaborar os planos de ação, captar os recursos necessários, coletar e analisar informações sensíveis e registrar as ações implementadas. Segundo o SCIPM, qual função do Estado-Maior Operacional possui essas atribuições?",
        "options": [
          "a) Chefe de Operações de Campo, responsável pela atuação direta na resposta por meio da execução dos planos de ação.",
          "b) Chefe de Logística, responsável por instalações, serviços e fornecimento de materiais e equipamentos.",
          "c) Chefe de Planejamento, responsável pelo assessoramento para elaboração dos planos de ação, captação de recursos, coleta e análise de informações e registro das ações.",
          "d) Oficial de Ligação, responsável pelo contato com representantes de órgãos externos envolvidos na resposta."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fundamentação: Diretriz nº PM3-003/02/23 (SCIPM), item 6.4.2.3.2, em Assuntos Operacionais.pdf, p. 149. A descreve o Chefe de Operações de Campo; B descreve o Chefe de Logística; D descreve a função de Ligação, prevista no item 6.4.2.2.3. Trecho: “Chefe de Planejamento (Ch Plan): responsável por assessorar o Cmt Inc para a elaboração dos planos de ação, bem como para a captação dos recursos necessários, coleta e análise de informações sensíveis e registro de todas as ações implementadas”."
      },
      {
        "id": 33,
        "subject": "OPERACIONAL",
        "topic": "NORSOP - ação, operação e missão policial-militar",
        "text": "QUESTÃO 33 — Considerando as definições da NORSOP para as formas de atuação operacional, analise as proposições:\n\nI. Ação policial-militar caracteriza a atividade rotineira da Unidade de Serviço, voltada à prevenção criminal e ao aumento da percepção de segurança.\nII. Operação policial-militar envolve o emprego combinado de várias Unidades de Serviço, em ações simultâneas e sucessivas, com objetivo comum delimitado no tempo e no espaço.\nIII. Missão policial-militar envolve a aplicação pontual e específica de efetivos e meios, limitada no tempo e no espaço, para atender demanda imediata que afeta o serviço policial-militar.\nIV. Operação policial-militar caracteriza necessariamente a atuação isolada de uma única Unidade de Serviço, sem planejamento prévio.\n\nAssinale a alternativa correta.",
        "options": [
          "a) Apenas I e IV.",
          "b) Apenas II e III.",
          "c) Apenas I, III e IV.",
          "d) Apenas I, II e III."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. Fundamentação: NORSOP, Diretriz nº PM3-001/02/20, itens 6.8.4.1 a 6.8.4.3, em Assuntos Operacionais.pdf, p. 260. I, II e III correspondem às definições normativas. IV é incorreta porque a operação envolve várias US e é planejada por Programação Antecipada ou Esboço Emergencial. Trechos: “ação policial-militar: caracteriza a atividade rotineira da US”; “operação policial-militar: [...] emprego combinado de várias US”; e “missão policial-militar: envolve a aplicação pontual e específica de efetivos e meios”."
      },
      {
        "id": 34,
        "subject": "OPERACIONAL",
        "topic": "COP - acionamento automático por despacho",
        "text": "QUESTÃO 34 — Uma Unidade de Serviço é despachada pelo Sistema de Informações Operacionais da PM (SIOPM) para atendimento de ocorrência. No modelo de acionamento remoto-automático por despacho previsto na Diretriz das COP, qual evento ativa a gravação da câmera vinculada à US demandada?",
        "options": [
          "a) A chegada física da viatura ao local, após confirmação verbal do encarregado.",
          "b) O encerramento do talão eletrônico, para preservar apenas o resumo da ocorrência.",
          "c) O registro preliminar do talão eletrônico de ocorrência no momento do despacho da US.",
          "d) A autorização individual do Chefe da Seção PJMD após consulta à autoridade encarregada."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fundamentação: Diretriz nº PM3-001/02/25 (COP), item 6.1.3.2, em Assuntos Operacionais.pdf, p. 28. O acionamento por despacho ocorre quando o registro preliminar do talão eletrônico de ocorrência aciona automaticamente a COP vinculada à US demandada. A, B e D introduzem condições diferentes das previstas. Trecho: “o registro preliminar do talão eletrônico de ocorrência aciona automaticamente a gravação da COP vinculada à US demandada”."
      },
      {
        "id": 35,
        "subject": "OPERACIONAL",
        "topic": "Violência doméstica - Patrulha SP Mulher Segura",
        "text": "QUESTÃO 35 — Uma OPM organiza atendimento especializado a mulheres em situação de violência doméstica e familiar, com visitas comunitárias e solidárias, orientação preventiva e atuação voltada à proteção das vítimas. Conforme a Nota de Instrução nº PM3-002/02/26 (Sala de Operações), assinale a alternativa correta sobre a Patrulha SP Mulher Segura.",
        "options": [
          "a) O PVS “Acolher” é um grupo do Programa Vizinhança Solidária voltado à proteção e ao tratamento humanizado das vítimas, não sendo a definição da Patrulha SP Mulher Segura.",
          "b) É uma Unidade de Serviço composta por policiais militares, preferencialmente um masculino e um feminino, capacitados pelo Programa Lar Mais Seguro, voltada à prevenção e ao enfrentamento da violência doméstica e familiar.",
          "c) A Sala de Operações é a equipe móvel que realiza exclusivamente visitas presenciais e captura agressores, sem análise de dados ou assessoramento aos escalões de comando.",
          "d) O Serviço de Intervenção Remota é a patrulha especializada que atua em status 03 com viatura específica para acompanhar medidas protetivas."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fundamentação: Nota de Instrução nº PM3-002/02/26 (Sala de Operações), item 6.1.5, em Assuntos Operacionais.pdf, p. 238. Trecho: “Patrulha ‘SP Mulher Segura’: US composta por policiais militares, preferencialmente um masculino e um feminino, que concluíram a capacitação realizada pelo Programa ‘Lar mais Seguro’ [...] focada em missões de prevenção primária e no enfrentamento à violência doméstica e familiar”. A descreve o PVS Acolher; C confunde as funções da Sala de Operações; D confunde a patrulha com o SIR."
      },
      {
        "id": 36,
        "subject": "OPERACIONAL",
        "topic": "Combate ao Crime Organizado - Plano de Contingência",
        "text": "QUESTÃO 36 — Um incidente crítico relacionado à atuação típica do crime organizado abrange a área de responsabilidade de mais de um Comando de Policiamento. De acordo com a Diretriz nº PM3-001/02/24, qual órgão deve elaborar e manter atualizado o Plano de Contingência para essa resposta integrada?",
        "options": [
          "a) Coordenação Operacional PM, indicando pontos sensíveis e responsáveis pelas medidas iniciais e de continuidade.",
          "b) Cada Unidade de Serviço envolvida, isoladamente, sem consolidação em nível superior.",
          "c) Exclusivamente o CComSoc, por se tratar de incidente com potencial de repercussão pública.",
          "d) Somente o Comandante do Incidente após o encerramento da ocorrência, para registro histórico."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fundamentação: Diretriz nº PM3-001/02/24, item 6.5.5.4, em Assuntos Operacionais.pdf, p. 229. A Coord Op PM deve elaborar e manter atualizado o Plano de Contingência para incidentes críticos de crime organizado que envolvam mais de um Cmdo Pol. B fragmenta a responsabilidade; C confunde comunicação social com planejamento operacional; D posterga indevidamente o planejamento. Trecho: “elaborar, e manter atualizado, Plano de Contingência para resposta a incidentes críticos relacionados à atuação típica de crime organizado que envolva a área de atuação de mais de 1 Cmdo Pol”."
      },
      {
        "id": 37,
        "subject": "OPERACIONAL",
        "topic": "Policiamento com Drones - Piloto Remoto em Comando",
        "text": "QUESTÃO 37 — Durante uma operação com aeronave não tripulada, surge uma questão relativa à segurança do voo e à condução da aeronave. Conforme a Diretriz nº PM3-005/02/24, qual integrante da Equipe Drone possui autoridade decisória sobre tudo o que se relacionar ao UAS enquanto estiver em voo?",
        "options": [
          "a) O Observador de UAS, por ser responsável pela comunicação visual com as equipes em solo.",
          "b) O Comandante da OPM, ainda que não esteja designado para a equipe nem habilitado para a operação.",
          "c) O Oficial Coordenador de Operação de UAS, em todas as decisões imediatas de pilotagem.",
          "d) O Piloto Remoto em Comando (RPIC), responsável pela condução e navegação segura da aeronave."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. Fundamentação: Diretriz nº PM3-005/02/24, itens 6.4.2.1 e 6.5.2, em Assuntos Operacionais.pdf, p. 439. O RPIC possui autoridade decisória sobre tudo que se relacionar ao UAS durante o voo e responde pela condução e navegação segura. O Observador auxilia a segurança do voo; o Oficial Coordenador monitora e controla as atividades do programa; o Cmt OPM não substitui automaticamente o RPIC na condução do voo. Trecho: “Piloto Remoto em Comando (RPIC) [...] possuidor de autoridade decisória sobre tudo que se relacionar ao UAS enquanto estiver em voo, e responsável pela condução e navegação segura da aeronave”."
      },
      {
        "id": 38,
        "subject": "OPERACIONAL",
        "topic": "Policiamento Comunitário - Núcleo de Mediação Comunitária",
        "text": "QUESTÃO 38 — Em uma comunidade, conflitos recorrentes entre moradores podem ser encaminhados para uma estrutura policial-militar destinada à mediação, desde que a atividade seja conduzida por policial capacitado e formalmente habilitado. Segundo a Diretriz nº PM3-005/02/20 (Programa de Policiamento Comunitário), qual estrutura corresponde a essa descrição?",
        "options": [
          "a) Base Comunitária de Segurança (BCS), cuja função principal é servir de sede territorial do policiamento comunitário.",
          "b) Programa Vizinhança Solidária (PVS), destinado à mobilização comunitária e às práticas de prevenção primária.",
          "c) Núcleo de Mediação Comunitária (NUMEC), no qual o policial aplica técnicas para auxiliar as partes na autocomposição pacífica e consensual de seus interesses.",
          "d) Conselho Comunitário de Segurança (CONSEG), órgão que substitui o policial militar na condução formal da mediação."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fundamentação: Diretriz nº PM3-005/02/20, item 6.4.5.3, em Assuntos Operacionais.pdf, p. 422. O NUMEC é instalação policial-militar destinada à mediação de conflitos por policial capacitado e formalmente habilitado. A descreve estrutura de policiamento comunitário; B é programa de mobilização comunitária; D atribui ao CONSEG função que a diretriz não lhe confere. Trecho: “Núcleo de Mediação Comunitária (NUMEC) [...] consiste em instalação policial-militar [...] destinada à mediação de conflitos, onde o policial militar, capacitado e formalmente habilitado, aplica técnicas para auxiliar as pessoas na autocomposição pacífica e consensual de seus interesses”."
      },
      {
        "id": 39,
        "subject": "OPERACIONAL",
        "topic": "Sistema de Comando e Controle - Unidade de Serviço",
        "text": "QUESTÃO 39 — No Sistema de Comando e Controle, uma equipe composta por policiais a pé ou embarcados executa ações em determinado território e está integrada a um Centro de Operações. Segundo a Diretriz nº PM3-001/02/23, essa fração é conceituada como:",
        "options": [
          "a) Unidade de Serviço (US), menor fração de recursos humanos composta por um ou mais policiais militares.",
          "b) Subárea, espaço territorial atribuído à responsabilidade de uma OPM de escalão Companhia PM ou equivalente.",
          "c) Área, espaço territorial atribuído à responsabilidade de uma OPM de escalão Batalhão ou equivalente.",
          "d) Sala de Operações, estrutura física responsável pela análise de dados e transmissão de informações qualificadas."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fundamentação: Diretriz nº PM3-001/02/23 (Sistema de Comando e Controle), item 6.1.12, em Assuntos Operacionais.pdf, p. 200. A definição corresponde à Unidade de Serviço. B e C são divisões territoriais definidas na NORSOP; D é uma estrutura de análise e transmissão de informações. Trecho: “Unidade de Serviço (US): é a menor fração de recursos humanos, composta por um ou mais policiais militares, a pé ou embarcado(s), executando suas ações em um determinado território e integrado(s) a um Centro de Operações”."
      },
      {
        "id": 40,
        "subject": "OPERACIONAL",
        "topic": "Programa de Policiamento de Trânsito - princípios",
        "text": "QUESTÃO 40 — Durante fiscalização de trânsito, o policial militar constata infração administrativa, mas a situação também exige providências imediatas para garantir a segurança de usuários da via. Considerando os princípios do Programa de Policiamento de Trânsito, assinale a alternativa INCORRETA.",
        "options": [
          "a) A proteção à vida e à incolumidade física das pessoas tem prioridade, mesmo em relação à fluidez do tráfego.",
          "b) O policiamento de trânsito deve privilegiar o caráter educativo-preventivo, sendo as medidas repressivas complementares quando constatado descumprimento intencional.",
          "c) Uma vez constatada infração de trânsito, a autuação é obrigatória, mas a diretriz admite exceção por força maior plenamente justificada ou impossibilidade absoluta decorrente da necessidade de garantir a segurança do trânsito.",
          "d) A autuação jamais pode deixar de ser lavrada, ainda que haja força maior plenamente justificada ou impossibilidade absoluta para adoção de medida de segurança viária."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. Fundamentação: Diretriz do Programa de Policiamento de Trânsito, item 6.2.1 a 6.2.3, em Assuntos Operacionais.pdf, p. 483. A proteção prioritária à vida prevalece sobre a fluidez; o caráter educativo-preventivo predomina; e a obrigatoriedade de autuação admite as exceções expressas no item 6.2.3. D elimina essas exceções. Trecho: “uma vez constatada a inobservância de qualquer dispositivo [...] caracterizada como infração de trânsito, é obrigatória a autuação [...] apenas por motivo de força maior plenamente justificado ou impossibilidade absoluta [...] poderá deixar de ser lavrada”."
      },
      {
        "id": 41,
        "subject": "OPERACIONAL",
        "topic": "Programa de Policiamento Escolar - ordem de prioridade",
        "text": "QUESTÃO 41 — O comandante de uma OPM precisa organizar a cobertura dos estabelecimentos de ensino da Subárea e há recursos insuficientes para atendimento simultâneo de todas as escolas. Conforme a Diretriz nº PM3-004/02/20, qual ordem de prioridade deve ser observada?",
        "options": [
          "a) Escolas particulares; escolas municipais; escolas estaduais.",
          "b) Escolas municipais; escolas particulares; escolas estaduais.",
          "c) Escolas estaduais; escolas municipais, especialmente onde não houver Guarda Municipal ou Patrimonial; escolas particulares.",
          "d) Escolas estaduais; escolas particulares; escolas municipais, independentemente da existência de Guarda Municipal ou Patrimonial."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fundamentação: Diretriz nº PM3-004/02/20 (Programa de Policiamento Escolar), item 6.5.2.1, em Assuntos Operacionais.pdf, p. 452. A ordem prevista é escolas estaduais, municipais — especialmente onde não houver Guarda Municipal ou Patrimonial — e particulares. A, B e D alteram a ordem ou eliminam a condição expressamente indicada para as municipais. Trecho: “escolas estaduais, municipais (especialmente onde não houver Guarda Municipal ou Patrimonial) e particulares”."
      },
      {
        "id": 42,
        "subject": "OPERACIONAL",
        "topic": "SCIPM - instalações padronizadas",
        "text": "QUESTÃO 42 — Ao estruturar a resposta a um incidente crítico, o Comandante do Incidente estabelece instalações padronizadas conforme a complexidade do fenômeno, dotadas de segurança, denominação comum e sinalização. Assinale a alternativa que NÃO corresponde a um dos exemplos expressamente citados pelo SCIPM.",
        "options": [
          "a) Posto de Comando.",
          "b) Base de Apoio.",
          "c) Área de Concentração de Vítimas.",
          "d) Conselho Comunitário de Segurança."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. Fundamentação: Diretriz nº PM3-003/02/23 (SCIPM), item 6.2.4.9, em Assuntos Operacionais.pdf, p. 146. Trecho: “São exemplos: Posto de Comando, Base de Apoio, Área de Espera, Área de Concentração de Vítimas, etc.” O CONSEG é uma estrutura de participação comunitária prevista em outra diretriz, não um dos exemplos de instalação padronizada citados pelo SCIPM."
      },
      {
        "id": 43,
        "subject": "OPERACIONAL",
        "topic": "SCIPM - princípio da padronização",
        "text": "QUESTÃO 43 — Em incidente que exige atuação conjunta de diferentes agências, a adoção de métodos, estruturas e termos comuns facilita a interoperabilidade da força responsiva e otimiza tempo e recursos. Segundo o SCIPM, essa descrição corresponde a qual princípio?",
        "options": [
          "a) Flexibilidade, que permite adaptar o sistema às demandas contingenciais e aos eventos programados.",
          "b) Unidade de esforços, que consiste no alcance de objetivos comuns definidos pelo Comandante do Incidente.",
          "c) Padronização, que harmoniza métodos, estruturas e termos para facilitar a interoperabilidade entre as agências.",
          "d) Organização modular, que permite incorporar ou desmobilizar módulos conforme a amplitude e complexidade do incidente."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fundamentação: Diretriz nº PM3-003/02/23 (SCIPM), itens 6.2.3.1 a 6.2.3.3, em Assuntos Operacionais.pdf, p. 145. A descreve Flexibilidade; B descreve Unidade de esforços; D descreve Organização modular, que é elemento essencial e não o princípio solicitado. Trecho: “Padronização: a padronização de métodos, estruturas e termos permite a interoperabilidade da força responsiva com as diversas agências envolvidas, otimizando tempo e recursos”."
      },
      {
        "id": 44,
        "subject": "OPERACIONAL",
        "topic": "Programa de Policiamento Comunitário - CONSEG",
        "text": "QUESTÃO 44 — Ao assumir uma área em que ainda não existe Conselho Comunitário de Segurança (CONSEG), o comandante avalia formas de ampliar a participação comunitária no diagnóstico e na solução dos problemas locais. Conforme a Diretriz nº PM3-005/02/20, assinale a alternativa correta.",
        "options": [
          "a) A atuação junto aos CONSEG deve ser estimulada, inclusive a composição nas Áreas e Subáreas em que ainda não existam, como forma de integrar esforços em prol da segurança pública.",
          "b) A criação de CONSEG é atribuição exclusiva dos moradores e não deve ser estimulada pela OPM.",
          "c) A participação da Polícia Militar limita-se ao envio de estatísticas, sendo vedado o envolvimento em reuniões ou mobilização comunitária.",
          "d) Uma vez constituído o CONSEG, a diretoria passa a definir e comandar diretamente o emprego das Unidades de Serviço."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fundamentação: Diretriz nº PM3-005/02/20 (Programa de Policiamento Comunitário), itens 6.4.3 e 6.4.4, em Assuntos Operacionais.pdf, p. 421. A OPM deve estimular a composição dos CONSEG onde ainda não existam e mobilizar pessoas e entidades para contribuir com a segurança pública. B e C negam a integração prevista; D transfere indevidamente o comando operacional à diretoria comunitária. Trecho: “a atuação das OPM junto aos CONSEG [...] devendo ser estimulada a sua composição nas Áreas e Subáreas onde ainda não existam”."
      },
      {
        "id": 45,
        "subject": "OPERACIONAL",
        "topic": "COP Motorola - transferência e custódia das evidências",
        "text": "QUESTÃO 45 — Ao final do turno, o policial militar responsável por uma COP precisa cumprir a rotina de transferência das gravações. Segundo a Diretriz nº PM3-001/02/25, assinale a alternativa correta quanto à sequência e à responsabilidade pelas evidências digitais.",
        "options": [
          "a) O policial pode manter os dados na câmera até o fim da semana, pois a custódia só começa após requisição de autoridade.",
          "b) O policial deve transferir os dados ao término de cada turno, conectando o equipamento à doca; após o upload, a administração e a custódia passam ao Chefe da Seção PJMD da respectiva OPM.",
          "c) O Chefe da Seção PJMD deve realizar pessoalmente o upload de cada câmera, permanecendo o policial usuário sem responsabilidade pela integridade dos dados.",
          "d) O policial deve transferir os arquivos por qualquer dispositivo externo, podendo editar os vídeos antes de encaminhá-los ao sistema de armazenamento."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fundamentação: Diretriz nº PM3-001/02/25 (COP), itens 6.8.2 e 6.8.3, em Assuntos Operacionais.pdf, p. 39. O upload é obrigatório ao término de cada turno, realizado pelo usuário ou responsável mediante conexão à doca; após o upload, administração e custódia passam ao Chefe da Seção PJMD. A posterga a transferência; C desloca a obrigação de upload; D contraria a integridade da evidência. Trecho: “os dados deverão ser transferidos da COP para o sistema de armazenamento (upload) ao término de cada turno de serviço, obrigatoriamente”; e “realizado o upload [...] a responsabilidade sobre a administração e custódia [...] passa a ser do Chefe da Seção PJMD”."
      },
      {
        "id": 46,
        "subject": "OPERACIONAL",
        "topic": "Programa de Policiamento Rural - implantação",
        "text": "QUESTÃO 46 — Um comandante avalia a implantação do Programa de Policiamento Rural em uma região com propriedades agrícolas, atividades turísticas e registros esporádicos de delitos que afetam a percepção de segurança. Considerando a Diretriz nº PM3-007/02/20, analise as proposições:\n\nI. A presença de comunidades rurais cujas características se enquadrem na diretriz pode orientar a implantação do programa.\nII. Atividades sociais e econômicas rurais que possam constituir focos de ações criminosas ou refúgio de infratores são fatores relevantes.\nIII. Índices criminais ou ações delituosas que, mesmo esporádicas, afetem a percepção de segurança no ambiente rural podem justificar a implantação.\n\nAssinale a alternativa correta.",
        "options": [
          "a) Apenas I.",
          "b) Apenas I e II.",
          "c) Apenas II e III.",
          "d) I, II e III."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. Fundamentação: Diretriz nº PM3-007/02/20 (Programa de Policiamento Rural), itens 6.2.1.1 a 6.2.1.3, em Assuntos Operacionais.pdf, p. 477. Os três fatores estão expressamente previstos como orientadores da implantação do programa. Trecho: “a implantação do Programa Pol Rr será orientada [...] [pela] presença de comunidade(s) rural(is)”; atividades rurais potenciais focos de ações criminosas; e “índices criminais e/ou ações delituosas que, mesmo esporádicas [...] afetem a percepção de segurança”."
      },
      {
        "id": 47,
        "subject": "OPERACIONAL",
        "topic": "SCIPM - Sala de Gerenciamento de Incidentes",
        "text": "QUESTÃO 47 — Durante uma ocorrência, o Comandante do Incidente identifica a necessidade de integrar a resposta da Polícia Militar com órgãos externos. Segundo a Diretriz nº PM3-003/02/23, assinale a alternativa correta sobre a instituição da Sala de Gerenciamento de Incidentes.",
        "options": [
          "a) A sala somente pode ser instituída após o encerramento das ações em campo, para consolidar os relatórios das agências.",
          "b) A sala deve ser instituída em toda ocorrência, independentemente da necessidade de integração com outras agências.",
          "c) A sala pode ser instituída por solicitação do Cmt Inc ou de ofício por autoridade policial-militar superior, sempre que houver necessidade de integração com outras agências, independentemente da complexidade do fenômeno.",
          "d) A instituição da sala compete exclusivamente ao Oficial de Ligação, sem participação do Cmt Inc ou de autoridade superior."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fundamentação: Diretriz nº PM3-003/02/23 (SCIPM), item 6.7.1, em Assuntos Operacionais.pdf, p. 150. A Sala de Gerenciamento de Incidentes pode ser instituída a pedido do Cmt Inc ou de ofício por autoridade policial-militar superior quando necessária a integração com outras agências, independentemente da complexidade. A posterga a instituição; B elimina a condição de necessidade; D atribui a competência a função diversa. Trecho: “poderá ser instituída por solicitação do Cmt Inc ou ex officio por autoridade policial-militar superior, sempre que for constatada necessidade de integração com outras agências, independentemente da complexidade do fenômeno”."
      },
      {
        "id": 48,
        "subject": "OPERACIONAL",
        "topic": "NORSOP - Reuniões de Análise Crítica",
        "text": "QUESTÃO 48 — Considerando as etapas de análise crítica dos indicadores que subsidiam o Plano de Policiamento Inteligente (PPI), analise as proposições:\n\nI. A RAC-Nível I é desenvolvida no âmbito dos Batalhões para avaliar diagnósticos situacionais e estabelecer alternativas de solução para controle de indicadores criminais, aumento da produtividade e redução do tempo-resposta.\nII. A RAC-Nível II é realizada sob responsabilidade dos Comandos de Policiamento do Interior e de Área, para analisar indicadores de desempenho e avaliar medidas de controle, verificando alinhamento com Planos Diretores e Plano de Comando.\nIII. A RAC-Nível III ocorre no âmbito do Comando-Geral, presidida pelo Coord Op PM, para avaliar estratégias regionais em relação aos Planos Diretores e ao Plano de Comando.\n\nAssinale a alternativa correta.",
        "options": [
          "a) Apenas I e II.",
          "b) Apenas I e III.",
          "c) Apenas II e III.",
          "d) I, II e III."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. Fundamentação: NORSOP, Diretriz nº PM3-001/02/20, itens 6.8.1.1 a 6.8.1.3, em Assuntos Operacionais.pdf, p. 259. As três proposições descrevem corretamente os níveis e suas finalidades. Trechos: “RAC-I: desenvolvida no âmbito dos Btl”; “RAC-II: realizada sob a responsabilidade dos Cmt Pol Int e Cmt Pol Área”; e “RAC-III: ocorre no âmbito do Cmdo G, presidida pelo Coord Op PM”."
      },
      {
        "id": 49,
        "subject": "OPERACIONAL",
        "topic": "Programa de Força Tática - composição da Equipe Tática",
        "text": "QUESTÃO 49 — Uma OPM planeja constituir uma Equipe Tática em viatura de quatro rodas. O efetivo disponível, contudo, é inferior ao mínimo ordinário previsto ou não há Subtenente/Sargento para exercer a função de comando. Considerando a Diretriz nº PM3-003/02/20, assinale a alternativa correta.",
        "options": [
          "a) A equipe pode atuar normalmente como Força Tática com dois policiais militares, desde que um Cabo ou Soldado assuma o comando.",
          "b) A equipe deve ser composta ordinariamente por três ou quatro policiais, sendo a função de comando exercida por Oficial ou Subtenente/Sargento; se não for possível compor o mínimo de três ou faltar graduado habilitado para comandá-la, o efetivo disponível deve atuar em ações preventivas, não de apoio tático.",
          "c) A composição ordinária exige cinco policiais militares, e o comando pode ser exercido por qualquer integrante, conforme antiguidade.",
          "d) A composição é livre conforme a disponibilidade, pois a diretriz não diferencia ações preventivas de apoio tático quando há efetivo reduzido."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fundamentação: Diretriz nº PM3-003/02/20 (Programa de Força Tática), itens 6.3.5.1 e 6.3.5.4, em Assuntos Operacionais.pdf, p. 463. A equipe ordinária em viatura de quatro rodas é composta por três ou quatro policiais, com comando por Oficial ou Subtenente/Sargento; é vedado o comando por Cabo/Soldado. Se não houver mínimo de três ou graduado para comandar, o efetivo deve ser empregado em ações preventivas, e não em apoio tático. Trecho: “em circunstâncias ordinárias, a Equipe Tática será composta por 3 ou 4 policiais militares [...] sendo vedado o exercício da função de comando por Cb/Sd PM”; e, se faltar o mínimo de três ou graduado para comandá-la, “o efetivo disponível deverá ser empregado em ações [...] de caráter preventivo e não de apoio tático”."
      },
      {
        "id": 50,
        "subject": "OPERACIONAL",
        "topic": "Sala de Operações - Serviço de Intervenção Remota",
        "text": "QUESTÃO 50 — A Sala de Operações recebe uma demanda que não apresenta risco iminente à vida, à integridade física, ao patrimônio ou ao meio ambiente e que pode ser solucionada por orientação ou atendimento remoto. Conforme a Nota de Instrução nº PM3-002/02/26, em quais condições a demanda pode ser tratada pelo Serviço de Intervenção Remota (SIR)?",
        "options": [
          "a) Sempre que houver ocorrência criminal, independentemente da necessidade de providências presenciais ou de risco iminente.",
          "b) Somente após uma Unidade de Serviço comparecer ao local e constatar pessoalmente a inexistência de risco.",
          "c) Apenas quando o solicitante dispensar qualquer registro nos sistemas corporativos e aceitar o encerramento sem orientação.",
          "d) Quando se tratar de ocorrência não emergencial previamente descrita em rol específico, sem risco iminente e passível de atendimento inicial, triagem ou solução por orientação, mediação ou comunicação remota."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. Fundamentação: Nota de Instrução nº PM3-002/02/26 (Sala de Operações), itens 6.1.8 e 6.3.7.11.1 a 6.3.7.11.3, em Assuntos Operacionais.pdf, p. 238 e 244-245. O SIR se destina a demandas não emergenciais previamente descritas, sem risco iminente, passíveis de solução remota. A e B ampliam ou restringem indevidamente os critérios; C cria condição não prevista. Trecho: “atendimento remoto de ocorrência classificada como não emergencial e previamente descrita em rol específico, caracterizada pela ausência de risco iminente [...] com o objetivo de aumentar a disponibilidade de US”."
      },
 {
        "id": 50,com
        "subject": "OPERACIONAL",
        "topic": "COP Motorola - identificação da evidência digital",
        "text": "QUESTÃO 50 — Sobre o preenchimento do campo ID (AnoMêsDiaTalão) na classificação de evidência digital produzida por COP, analise as proposições.\n\nI. Para evidência vinculada ao talão nº 37, ocorrido em 12/10/2026, o campo deve ser preenchido como “2026101237”.\nII. Para evidência decorrente de abordagem, intervenção ou interação sem relação com talão de ocorrência, deve ser lançado apenas o valor da data, como “20261012”.\nIII. Para padronizar o comprimento do campo, o número do talão deve ser completado com zeros à esquerda.",
        "options": [
          "a) Apenas I e II.",
          "b) Apenas I e III.",
          "c) Apenas II e III.",
          "d) I, II e III."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fonte: Assuntos Operacionais.pdf, POP de classificação das COP, “Esclarecimentos”, item 3, PDF p. 11. Evidência: o campo usa o formato “aaaammddtalão”, sem espaçamento; “Não colocar zeros, pontos, traços antes do número de talão”; sem relação com talão, lança-se apenas a data. I e II estão corretas. III contraria expressamente a proibição de zeros antes do talão. Distrator B inclui III; C exclui I; D inclui III. A combinação única sustentada é I e II."
      },
      {
        "id": 51,
        "subject": "OPERACIONAL",
        "topic": "NORSOP - Matriz Operacional III e Nível de Resposta 4",
        "text": "QUESTÃO 51 — Uma ocorrência apresenta gravidade e complexidade que exigem recursos humanos, materiais e capacitações indisponíveis nas OPM territoriais. Para classificar corretamente o apoio, o oficial deve relacionar a Matriz Operacional e o Nível de Resposta previstos na NORSOP. Assinale a alternativa correta.",
        "options": [
          "a) Matriz Operacional III — Apoios Especializados; Nível de Resposta 4.",
          "b) Matriz Operacional II — Apoios Táticos; Nível de Resposta 2.",
          "c) Matriz Operacional III — Apoios Especializados; Nível de Resposta 3.",
          "d) Matriz Operacional I — recursos locais; Nível de Resposta 4."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fonte: NORSOP, Diretriz nº PM3-001/02/20, itens 6.2.1.3 e 6.2.2.4, Assuntos Operacionais.pdf, PDF p. 253-254. Trecho: a Matriz III desenvolve atividades peculiares quando gravidade, especificidade ou complexidade exigem recursos/capacitação não disponíveis às OPM territoriais; o Nível 4 corresponde a apoios especializados. B descreve apoio tático da Matriz II/Nível 2; C associa indevidamente a Matriz III ao Nível 3, que é de recursos adicionais vinculados diretamente aos Cmdo Pol; D combina recursos locais da Matriz I com Nível 4. Só A preserva as duas classificações."
      },
      {
        "id": 52,
        "subject": "OPERACIONAL",
        "topic": "SCIPM - atribuições do Estado-Maior do Comandante do Incidente",
        "text": "QUESTÃO 52 — No SCIPM, o Comandante do Incidente distribui funções entre integrantes de seu Estado-Maior. Qual alternativa associa corretamente cada função à atribuição normativa correspondente?",
        "options": [
          "a) Segurança: assessorar sobre riscos à segurança operacional de respondedores e vítimas; Chefe de Planejamento: assessorar na elaboração dos planos de ação, captação de recursos, análise de informações sensíveis e registro das ações; Chefe de Logística: prover instalações, serviços, materiais e equipamentos necessários às missões planejadas.",
          "b) Segurança: transmitir informações à imprensa; Chefe de Planejamento: prover alimentação e instalações; Chefe de Logística: analisar informações sensíveis e registrar as ações implementadas.",
          "c) Segurança: prover materiais e equipamentos; Chefe de Planejamento: transmitir informações à imprensa; Chefe de Logística: assessorar o Comandante do Incidente sobre riscos à integridade física e mental dos respondedores.",
          "d) Segurança: elaborar os planos de ação e registrar todas as ações; Chefe de Planejamento: assessorar exclusivamente sobre riscos à segurança dos respondedores; Chefe de Logística: atuar como porta-voz perante os órgãos de imprensa."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fonte: Diretriz nº PM3-003/02/23 (SCIPM), itens 6.4.2.2.1, 6.4.2.3.2 e 6.4.2.3.3, Assuntos Operacionais.pdf, PDF p. 148-149. O item 6.4.2.2.1 atribui à Segurança o assessoramento sobre riscos operacionais; 6.4.2.3.2 atribui ao Ch Plan planos, recursos, informações e registros; 6.4.2.3.3 atribui ao Ch Log instalações, serviços e suprimentos. B troca Segurança por Relações Públicas e Ch Plan por Logística; C desloca para Segurança atribuição logística, para Planejamento a função de imprensa e para Logística a função de Segurança; D permuta as atribuições de Planejamento, Segurança e Relações Públicas. As três correspondências de A são as previstas."
      },
      {
        "id": 53,
        "subject": "OPERACIONAL",
        "topic": "Sistema de C2 - definição do CC2 em operações regionais e estaduais",
        "text": "QUESTÃO 53 — A Coordenação Operacional analisa duas operações: a primeira abrange mais de uma região e envolve OPM de Matrizes Operacionais distintas; a segunda possui abrangência estadual. Considerando a Diretriz de C2, qual designação de Centro de Comando e Controle (CC2) corresponde a cada situação?",
        "options": [
          "a) Na primeira, o Coord Op PM define temporariamente um COPOM Regional comum aos Comandos de Policiamento interessados; na segunda, o COPOM São Paulo assume as atribuições de CC2.",
          "b) Na primeira, o COPOM São Paulo assume obrigatoriamente o CC2; na segunda, cada COPOM Regional atua isoladamente, sem estrutura comum.",
          "c) Na primeira, a Sala de Operações de uma Companhia assume permanentemente o CC2; na segunda, o Coord Op PM deve escolher qualquer COPOM Regional.",
          "d) Na primeira, o Comando-Geral assume diretamente o CC2; na segunda, o CC2 deve ser definido pelo comandante da OPM territorial do local inicial."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fonte: Diretriz nº PM3-001/02/23 (Sistema de C2), itens 6.5.4.1.6 e 6.5.4.1.7, Assuntos Operacionais.pdf, PDF p. 204. Trecho: nas operações em mais de uma região e/ou com OPM de Matrizes distintas, o Coord Op PM define COPOM Regional como CC2 temporário comum; nas operações de abrangência estadual, o COPOM São Paulo assume as atribuições. B inverte as hipóteses e nega a estrutura comum; C confunde CC2 com Sala de Operações de nível Btl/Cia e inventa permanência; D atribui a decisão a autoridades que não são indicadas nesses itens. A é a única que respeita as duas condições."
      },
      {
        "id": 54,
        "subject": "OPERACIONAL",
        "topic": "SCIPM - designação do Comandante do Incidente em incidentes estáticos e dinâmicos",
        "text": "QUESTÃO 54 — À luz do SCIPM, analise as proposições sobre a designação do Comandante do Incidente (Cmt Inc) em incidentes críticos policiais.\n\nI. Nos incidentes estáticos, o Cmt Inc será, em regra, policial militar da OPM da Matriz Operacional I com responsabilidade territorial sobre o local, ou da Matriz III quando se tratar de Nível de Resposta 4, conforme a natureza do fenômeno.\nII. Nos incidentes dinâmicos, o Chefe de Operações do COPOM será o Cmt Inc até a estabilização, quando o evento passa a assumir características de incidente estático.\nIII. Nos incidentes dinâmicos, o policial de maior posto ou graduação presente no local substitui automaticamente o Chefe de Operações do COPOM como Cmt Inc e assume toda a função de comando.",
        "options": [
          "a) Apenas I e II.",
          "b) Apenas I e III.",
          "c) Apenas II e III.",
          "d) I, II e III."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fonte: Diretriz nº PM3-003/02/23 (SCIPM), itens 6.4.2.1.1.1 e 6.4.2.1.1.2.1-6.4.2.1.1.2.2, Assuntos Operacionais.pdf, PDF p. 147-148. I reproduz a regra para incidentes estáticos; II reproduz a regra para incidentes dinâmicos. III é incorreta: o policial de maior posto/graduação presente no local, ou o mais antigo, responde pelo engajamento e manobra do contingente no teatro de operações, sem que o item o transforme automaticamente em Cmt Inc no lugar do Ch Op COPOM. B inclui III; C exclui I; D inclui III. Apenas I e II são sustentadas."
      },
      {
        "id": 55,
        "subject": "OPERACIONAL",
        "topic": "Programa de Policiamento com Drones - composição e funções da Equipe Drone",
        "text": "QUESTÃO 55 — Considerando a composição mínima da Equipe Drone e as funções dos seus integrantes, analise as proposições.\n\nI. A equipe será composta, no mínimo, pelo Piloto Remoto em Comando (RPIC) e pelo Observador de UAS.\nII. O policial militar na função de Segurança é componente obrigatório em toda Equipe Drone, sem possibilidade de exceção.\nIII. O Observador auxilia a condução segura do voo pela observação visual da aeronave e do espaço aéreo e pela comunicação permanente com o RPIC, sem uso de equipamentos óticos, exceto lentes corretivas.",
        "options": [
          "a) Apenas I e III.",
          "b) Apenas I e II.",
          "c) Apenas II e III.",
          "d) I, II e III."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fonte: Diretriz nº PM3-005/02/24, itens 6.4.2 a 6.4.2.3, Assuntos Operacionais.pdf, PDF p. 439. O item 6.4.2 define RPIC e Observador como composição mínima e diz que a equipe deve, preferencialmente, ser integrada por PM na função de Segurança. Assim, I e III estão corretas; II transforma indevidamente uma composição preferencial em requisito obrigatório. B e D incluem II; C exclui I e inclui II. A é a única combinação correta."
      },
      {
        "id": 56,
        "subject": "OPERACIONAL",
        "topic": "Sistema de C2 - confidencialidade e disponibilidade das informações da Sala de Operações",
        "text": "QUESTÃO 56 — Na gestão das informações da Sala de Operações, devem ser distinguidas as regras de confidencialidade e disponibilidade. Analise as proposições.\n\nI. A confidencialidade exige resguardar o caráter sigiloso das informações sensíveis e reforçar o cumprimento da Lei de Acesso à Informação e da Lei Geral de Proteção de Dados.\nII. A disponibilidade autoriza fornecer informações a qualquer integrante da Instituição que as solicite, ainda que não tenha necessidade operacional de conhecê-las.\nIII. Dados preservados para consulta futura podem ser suprimidos pelo operador sempre que deixarem de ser úteis ao turno, sem anuência do Supervisor da Sala de Operações.",
        "options": [
          "a) Apenas I.",
          "b) Apenas I e II.",
          "c) Apenas II e III.",
          "d) I, II e III."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fonte: Diretriz nº PM3-001/02/23 (Sistema de C2), itens 6.2.1.1 e 6.2.1.2.1-6.2.1.2.2, Assuntos Operacionais.pdf, PDF p. 239. I corresponde à regra de confidencialidade. II contraria a disponibilidade: a informação é fornecida a quem tenha necessidade de conhecer, no momento correto e para atender demanda operacional da PM. III contraria a regra de preservação: dados que devam permanecer para consulta futura não podem ser suprimidos sem anuência do Supervisor SOp. B inclui II; C inclui II e III; D inclui ambas as proposições incorretas. Apenas I está correta."
      },
      {
        "id": 57,
        "subject": "OPERACIONAL",
        "topic": "SCIPM - Plano de Ação do Incidente (PAI)",
        "text": "QUESTÃO 57 — Durante a estruturação da resposta a um incidente, o Estado-Maior precisa distinguir o Plano de Ação do Incidente (PAI) de outros instrumentos do SCIPM. Assinale a alternativa que reúne os elementos normativos próprios do PAI.",
        "options": [
          "a) Descrição, no tempo e no espaço, das ações, procedimentos e rotinas a implementar; resultante de planejamento por esboço emergencial; elaborado a partir dos objetivos definidos e desenvolvido pela metodologia 5W2H.",
          "b) Quadro físico com informações atualizadas dos recursos humanos e materiais empregados e dos serviços disponíveis, destinado ao gerenciamento dos recursos.",
          "c) Estrutura de resposta estabelecida conforme amplitude, complexidade, peculiaridades do ambiente e riscos, com módulos incorporados ou desmobilizados por determinação do Cmt Inc.",
          "d) Obrigação de prestar contas sobre planejamento, extensão do controle das ações, recursos empregados e responsabilidade pessoal de cada respondedor."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fonte: Diretriz nº PM3-003/02/23 (SCIPM), item 6.2.4.11, Assuntos Operacionais.pdf, PDF p. 146. O PAI é descrito como plano temporal e espacial de ações, procedimentos e rotinas, resultante de esboço emergencial, baseado nos objetivos e desenvolvido em 5W2H. B define gerenciamento dos recursos (6.2.4.6); C define organização modular (6.2.4.10); D define prestação de contas/Accountability (6.2.4.12). São conceitos verdadeiros do mesmo sistema, mas não definem o PAI."
      },
      {
        "id": 58,
        "subject": "OPERACIONAL",
        "topic": "Programa de Policiamento Comunitário - continuidade do vínculo com a comunidade",
        "text": "QUESTÃO 58 — À luz das orientações gerais para execução do Policiamento Comunitário, analise as proposições.\n\nI. O policial empregado deve dispor de tempo suficiente para conquistar a confiança e desenvolver parcerias com a comunidade, sendo desaconselhável a substituição constante.\nII. O policial deve estar apto a coletar informações junto à comunidade e entrevistar moradores e outras partes interessadas para obter indicadores úteis ao policiamento comunitário.\nIII. O efetivo deve conhecer as características da comunidade, manter vínculos permanentes com cidadãos e lideranças e adotar postura proativa na busca de soluções, incluindo a elaboração de RAIA, se for o caso.\nIV. O policial deve receber críticas e sugestões da comunidade, mas o encaminhamento delas é dispensável quando não houver consenso entre os envolvidos.",
        "options": [
          "a) Apenas I e II.",
          "b) Apenas I, II e III.",
          "c) Apenas II, III e IV.",
          "d) I, II, III e IV."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fonte: Diretriz nº PM3-005/02/20 (Programa de Policiamento Comunitário), itens 6.5.1 a 6.5.3.3, Assuntos Operacionais.pdf, PDF p. 422. I corresponde ao tempo necessário para conquistar confiança e à orientação contra substituição constante; II decorre do item 6.5.2; III reúne as orientações dos itens 6.5.3.1 e 6.5.3.2. IV é incorreta: o item 6.5.3.3 exige postura receptiva a críticas e sugestões, buscando seu devido encaminhamento. A omite III; C inclui IV e omite I; D inclui IV."
      },
      {
        "id": 59,
        "subject": "OPERACIONAL",
        "topic": "COP - reiteração do acionamento manual quando não há acionamento remoto",
        "text": "QUESTÃO 59 — Em uma OPM cujas COP não dispõem de acionamento remoto-intencional nem remoto-automático, analise as providências previstas para reforçar a gravação de fatos de interesse policial.\n\nI. Em ocorrência despachada pelo COPOM/CAD, o despachador deve, além de transmitir os elementos-base, reiterar à Unidade de Serviço a necessidade de acionamento manual.\nII. Se a Unidade de Serviço comunicar diretamente ao COPOM/CAD uma circunstância de intervenção policial ou interação com o público, o despachador também deve reiterar o acionamento manual.\nIII. Os escalões de supervisão, como CFP e CGP ou equivalentes, devem reforçar a necessidade por rede rádio ou fiscalização direta.",
        "options": [
          "a) Apenas I e II.",
          "b) Apenas I e III.",
          "c) Apenas II e III.",
          "d) I, II e III."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. Fonte: Diretriz nº PM3-001/02/25 (COP), itens 6.5.1.1 a 6.5.1.3, Assuntos Operacionais.pdf, PDF p. 36. Os três subitens preveem, respectivamente, a reiteração pelo despachador em ocorrência despachada, a reiteração quando a US comunica diretamente circunstância de intervenção/interação e o reforço pelos escalões de supervisão por rádio ou fiscalização direta. A, B e C omitem uma das providências expressamente previstas."
      },
      {
        "id": 60,
        "subject": "OPERACIONAL",
        "topic": "NORSOP - emprego supletivo de Unidades de Serviço das Matrizes II e III",
        "text": "QUESTÃO 60 — Uma Unidade de Serviço vinculada à Matriz Operacional II ou III não está executando, naquele momento, sua atividade típica de policiamento ostensivo. À luz da NORSOP, qual emprego supletivo pode ser admitido?",
        "options": [
          "a) Desenvolver patrulhamento preventivo no Nível de Resposta 1, em caráter supletivo.",
          "b) Ser automaticamente reclassificada como Unidade da Matriz Operacional I para todos os fins.",
          "c) Permanecer obrigatoriamente sem emprego operacional até ser acionada para sua atividade típica.",
          "d) Executar apenas apoio especializado de Nível de Resposta 4, ainda que não esteja realizando sua atividade típica."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fonte: NORSOP, Diretriz nº PM3-001/02/20, item 6.2.3, Assuntos Operacionais.pdf, PDF p. 254. O texto estabelece que a US da Matriz II ou III que não estiver executando sua atividade típica poderá, de forma supletiva, desenvolver patrulhamento preventivo no Nível de Resposta 1. B inventa alteração automática de matriz; C transforma a faculdade prevista em proibição; D restringe o emprego ao Nível 4 e ignora a autorização supletiva expressa."
      },
      {
        "id": 61,
        "subject": "OPERACIONAL",
        "topic": "SCIPM - gerenciamento dos recursos",
        "text": "QUESTÃO 61 — Durante um incidente crítico, o Comandante do Incidente precisa manter uma visão atualizada dos recursos humanos e materiais empregados e dos serviços disponíveis. Segundo o SCIPM, qual instrumento corresponde especificamente ao gerenciamento dos recursos?",
        "options": [
          "a) Quadro físico com informações precisas e atualizadas sobre recursos humanos e materiais empregados e serviços disponíveis.",
          "b) Plano temporal e espacial de ações, procedimentos e rotinas, desenvolvido a partir dos objetivos por metodologia 5W2H.",
          "c) Estrutura modular que incorpora ou desmobiliza funções conforme a amplitude, a complexidade e os riscos do incidente.",
          "d) Procedimento de transferência do comando que inclui briefing e transmissão das informações essenciais."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fonte: Diretriz nº PM3-003/02/23 (SCIPM), item 6.2.4.6, Assuntos Operacionais.pdf, PDF p. 145-146. O gerenciamento dos recursos é definido como anotação em quadro físico com dados precisos e atualizados sobre recursos humanos/materiais empregados e serviços disponíveis. B é o PAI (6.2.4.11); C é organização modular (6.2.4.10); D é designação e transferência do comando por processo (6.2.4.5). As alternativas B-D são conceitos normativos distintos."
      },
      {
        "id": 62,
        "subject": "OPERACIONAL",
        "topic": "Programa de Policiamento com Drones - Oficial Coordenador de Operação de UAS",
        "text": "QUESTÃO 62 — Sobre a designação e as atribuições do Oficial Coordenador de Operação de UAS, analise as proposições.\n\nI. O Cmt Btl deve designá-lo formalmente e informar a nomeação ao CAvPM, bem como eventual alteração da designação.\nII. Cabe ao Oficial Coordenador monitorar e controlar as atividades das Equipes Drone e fiscalizar os planos de ação elaborados pelo Cmt OPM.\nIII. A autoridade decisória sobre tudo o que se relaciona ao UAS durante o voo pertence ao Oficial Coordenador, e não ao RPIC.",
        "options": [
          "a) Apenas I e II.",
          "b) Apenas I e III.",
          "c) Apenas II e III.",
          "d) I, II e III."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fonte: Diretriz nº PM3-005/02/24, itens 6.2.8, 6.2.9 e 6.4.2.1, Assuntos Operacionais.pdf, PDF p. 437 e 439. I e II correspondem às atribuições de designação, monitoramento, controle e fiscalização do Oficial Coordenador. III transfere indevidamente ao Oficial Coordenador a autoridade decisória durante o voo, que o item 6.4.2.1 atribui ao Piloto Remoto em Comando (RPIC). B inclui III; C exclui I e inclui III; D inclui III."
      },
      {
        "id": 63,
        "subject": "OPERACIONAL",
        "topic": "COP - condições de acesso à transmissão ao vivo",
        "text": "QUESTÃO 63 — A Diretriz das COP delimita quem pode acessar a funcionalidade de transmissão ao vivo. Analise as proposições.\n\nI. Cmt OPM podem acessar a partir do nível mínimo de Companhia PM.\nII. Qualquer policial militar, independentemente de função de comando ou supervisão, pode acessar livremente a transmissão.\nIII. O COPOM São Paulo ou Regional pode acessar conforme a área de atuação.\nIV. Outros representantes de OPM podem acessar quando devidamente autorizados pela Coord Op PM.",
        "options": [
          "a) Apenas I, III e IV.",
          "b) Apenas I e II.",
          "c) Apenas II, III e IV.",
          "d) I, II, III e IV."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fonte: Diretriz nº PM3-001/02/25 (COP), itens 6.6.2.1.1 a 6.6.2.1.4, Assuntos Operacionais.pdf, PDF p. 37. I, III e IV reproduzem as categorias de acesso previstas. II amplia indevidamente o acesso a qualquer policial militar; a norma prevê policiais em função de comando e supervisão, não acesso irrestrito. B inclui II e exclui III/IV; C inclui II e exclui I; D inclui II."
      },
      {
        "id": 64,
        "subject": "OPERACIONAL",
        "topic": "Programa de Policiamento de Trânsito - competência territorial e vias sob responsabilidade do Estado",
        "text": "QUESTÃO 64 — Considere dois cenários: (1) policiamento ostensivo de trânsito na Região Metropolitana ou no Interior, fora de via sob responsabilidade do Estado; (2) policiamento ostensivo de trânsito em via sob responsabilidade do Estado. Conforme a Diretriz nº PM3-006/02/20, qual distribuição de competência está correta?",
        "options": [
          "a) No cenário 1, prioritariamente pelas OPM subordinadas ao CPM e CPI; no cenário 2, pelas OPM subordinadas ao CPRv em todo o Estado, conforme convênio vigente.",
          "b) No cenário 1, exclusivamente pelo CPTran; no cenário 2, pelas OPM territoriais sem participação do CPRv.",
          "c) No cenário 1, prioritariamente pelo CPRv; no cenário 2, exclusivamente pelas OPM subordinadas ao CPM e CPI.",
          "d) Nos dois cenários, exclusivamente pelo CPTran, independentemente de circunstâncias especiais ou carências técnicas."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fonte: Diretriz nº PM3-006/02/20 (Programa de Policiamento de Trânsito), itens 6.3.1.1.2.1 e 6.3.1.2, Assuntos Operacionais.pdf, PDF p. 484. Para Região Metropolitana e Interior, a diretriz prevê prioritariamente OPM subordinadas ao CPM/CPI; nas vias sob responsabilidade do Estado, prevê OPM subordinadas ao CPRv em todo o Estado, conforme convênio. B, C e D trocam as competências ou tornam exclusivo o CPTran, embora a diretriz lhe atribua atuação excepcional em circunstâncias especiais e diante de carências técnicas."
      },
      {
        "id": 65,
        "subject": "OPERACIONAL",
        "topic": "SCIPM - organização modular",
        "text": "QUESTÃO 65 — Ao ampliar a estrutura de resposta a um incidente crítico, o Comandante do Incidente considera incorporar novas funções e, após a redução dos riscos, desmobilizar parte da estrutura. Qual afirmação traduz a definição de organização modular do SCIPM?",
        "options": [
          "a) Estrutura estabelecida conforme amplitude e complexidade do incidente, peculiaridades do ambiente e riscos e ameaças, podendo o Cmt Inc determinar incorporação ou desmobilização de módulos.",
          "b) Quadro físico que registra recursos humanos e materiais empregados e serviços disponíveis, atualizado durante a resposta.",
          "c) Plano que descreve no tempo e no espaço as ações, procedimentos e rotinas, elaborado a partir dos objetivos definidos e pela metodologia 5W2H.",
          "d) Processo de transferência do comando baseado em critérios preestabelecidos, briefing e transmissão de informações essenciais."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fonte: Diretriz nº PM3-003/02/23 (SCIPM), item 6.2.4.10, Assuntos Operacionais.pdf, PDF p. 146. A corresponde à definição de organização modular. B descreve gerenciamento dos recursos (6.2.4.6); C descreve o PAI (6.2.4.11); D descreve designação e transferência do comando por processo (6.2.4.5). Os distratores são definições próximas do mesmo sistema, mas não respondem ao conceito solicitado."
      },
      {
        "id": 66,
        "subject": "OPERACIONAL",
        "topic": "Programa de Policiamento Escolar - identificação de pessoas com deficiência na comunidade escolar",
        "text": "QUESTÃO 66 — No Programa de Policiamento Escolar, analise as obrigações atribuídas aos Cmt OPM quanto aos estabelecimentos de ensino que possuam pessoas com deficiência (PcD) na comunidade escolar.\n\nI. A partir do nível mínimo de Companhia PM, identificar estabelecimentos em que PcD possam necessitar de equipamentos ou procedimentos adaptados durante o atendimento de ocorrências.\nII. Manter atualizados registros referentes à quantidade de pessoas nessas condições e à natureza das respectivas deficiências.\nIII. Limitar a identificação às ocorrências realizadas dentro do estabelecimento, excluindo eventual deslocamento ao distrito policial ou hospital.",
        "options": [
          "a) Apenas I e II.",
          "b) Apenas I e III.",
          "c) Apenas II e III.",
          "d) I, II e III."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fonte: Diretriz nº PM3-004/02/20 (Programa de Policiamento Escolar), item 6.5.2.9, redação atualizada pela Ordem Complementar nº PM3-001/02/26, Assuntos Operacionais.pdf, PDF p. 454. I e II correspondem ao dever de identificação e atualização dos registros. III é incorreta porque a norma inclui a necessidade de equipamentos/procedimentos adaptados durante o atendimento, inclusive deslocamento para distrito policial ou hospital. B e D incluem III; C exclui I e inclui III."
      },
      {
        "id": 67,
        "subject": "OPERACIONAL",
        "topic": "Programa de Policiamento Comunitário - visitas e registro de informações",
        "text": "QUESTÃO 67 — Para potencializar os resultados do Policiamento Comunitário, a Diretriz nº PM3-005/02/20 estabelece providências específicas para as OPM. Analise as proposições.\n\nI. A sistemática de atuação relativa às visitas comunitárias deve ser estabelecida semestralmente por documento próprio de Estado-Maior, visando coletar informações para questionários divulgados pela Coord Op PM.\nII. As OPM devem coordenar visitas comunitárias ou solidárias, campanhas ou reuniões comunitárias e adotar medidas de controle do correto registro das informações no SICoordOp.\nIII. A sistemática deve ser anual, e o registro no SICoordOp é facultativo quando houver reunião presencial.",
        "options": [
          "a) Apenas I e II.",
          "b) Apenas I e III.",
          "c) Apenas II e III.",
          "d) I, II e III."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fonte: Diretriz nº PM3-005/02/20 (Programa de Policiamento Comunitário), itens 6.5.4.1 e 6.5.4.2, Assuntos Operacionais.pdf, PDF p. 422. I corresponde à sistemática semestral fixada por documento de Estado-Maior; II reproduz a coordenação das visitas/campanhas/reuniões e o controle dos registros no SICoordOp. III altera “semestral” para “anual” e torna facultativo um controle que a norma exige. B e D incluem III; C exclui I e inclui III."
      },
      {
        "id": 68,
        "subject": "OPERACIONAL",
        "topic": "Programa de Policiamento de Trânsito - emprego de Unidades de Serviço de outros programas",
        "text": "QUESTÃO 68 — Na Região Metropolitana ou no Interior, o comando avalia empregar ocasional ou programadamente uma Unidade de Serviço de outro Programa de Policiamento no policiamento ostensivo de trânsito. À luz da Diretriz nº PM3-006/02/20, analise as proposições.\n\nI. O emprego de US de outros programas ou de Atividades Operacionais Diversas é admitido desde que as atividades próprias por elas executadas não sofram solução de continuidade.\nII. O emprego excepcional do CPTran em operações próprias ou em apoio/reforço pode ocorrer em circunstâncias especiais quando houver carências técnicas apresentadas pelas OPM territoriais.\nIII. Toda US de outro programa empregada ocasionalmente no trânsito deve, por esse motivo, ser permanentemente incorporada ao efetivo específico do Programa de Policiamento de Trânsito.",
        "options": [
          "a) Apenas I e II.",
          "b) Apenas I e III.",
          "c) Apenas II e III.",
          "d) I, II e III."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fonte: Diretriz nº PM3-006/02/20 (Programa de Policiamento de Trânsito), itens 6.3.1.1.2.1.2 e 6.3.1.1.2.2, Assuntos Operacionais.pdf, PDF p. 484. I reproduz a condição de que as atividades próprias não sofram solução de continuidade; II corresponde à hipótese excepcional de emprego do CPTran diante de circunstâncias especiais e carências técnicas territoriais. III não consta da norma e confunde emprego ocasional/programado de US de outros programas com destinação específica de recursos. B e D incluem III; C exclui I e inclui III."
      },
      {
        "id": 69,
        "subject": "OPERACIONAL",
        "topic": "NORSOP - Nível de Resposta 3",
        "text": "QUESTÃO 69 — Uma ocorrência excede a capacidade operativa das OPM territoriais subordinadas e demanda recursos humanos e meios materiais adicionais vinculados diretamente ao Comando de Policiamento. Não se trata de apoio tático por contingente da Matriz II nem de apoio especializado próprio da Matriz III. Qual classificação corresponde à NORSOP?",
        "options": [
          "a) Nível de Resposta 2, caracterizado pelo apoio tático às US da Matriz I por contingentes com capacitação e equipamentos próprios.",
          "b) Nível de Resposta 3, caracterizado pelo emprego adicional de recursos humanos e meios materiais vinculados diretamente aos Comandos de Policiamento, diante da insuficiência das OPM territoriais subordinadas.",
          "c) Nível de Resposta 4, caracterizado por apoios especializados de efetivos vinculados às OPM especializadas indicadas na NORSOP.",
          "d) Nível de Resposta 1, caracterizado pelo emprego de recursos locais, com uma US isolada ou apoiada por outras US da Matriz I."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fonte: NORSOP, Diretriz nº PM3-001/02/20, itens 6.2.2.1 a 6.2.2.4, Assuntos Operacionais.pdf, PDF p. 253-254. B reproduz o Nível 3. A descreve o Nível 2; C descreve o Nível 4; D descreve o Nível 1. Os distratores correspondem a níveis reais da mesma norma, mas incompatíveis com os elementos decisivos do enunciado: vínculo direto ao Cmdo Pol e insuficiência das OPM territoriais."
      },
      {
        "id": 70,
        "subject": "OPERACIONAL",
        "topic": "COP - ordem de prioridade de distribuição quando os equipamentos são insuficientes",
        "text": "QUESTÃO 70 — Quando não é possível equipar integralmente o efetivo com COP, a Diretriz estabelece uma ordem de prioridade de distribuição. Qual alternativa reproduz corretamente a sequência normativa, incluindo a ordem interna das funções de comando e supervisão?",
        "options": [
          "a) Programas Primários (Radiopatrulha; Força Tática); Programas Complementares (Escolar; Trânsito; Rural; Comunitário); Atividades Operacionais Diversas; funções de comando/supervisão (CGP; CFP; Supervisor Regional).",
          "b) Programas Primários (Força Tática; Radiopatrulha); Programas Complementares (Trânsito; Escolar; Comunitário; Rural); funções de comando/supervisão; Atividades Operacionais Diversas.",
          "c) Programas Primários (Radiopatrulha; Força Tática); Programas Complementares (Escolar; Rural; Trânsito; Comunitário); funções de comando/supervisão (CFP; CGP; Supervisor Regional); Atividades Operacionais Diversas.",
          "d) Programas Primários (Radiopatrulha; Força Tática); Programas Complementares (Escolar; Trânsito; Rural; Comunitário); funções de comando/supervisão (CGP; CFP; Supervisor Regional); Atividades Operacionais Diversas."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fonte: Diretriz nº PM3-001/02/25 (COP), itens 6.2.2 a 6.2.3.4, Assuntos Operacionais.pdf, PDF p. 31. A ordem é: Programas Primários (Radiopatrulha e Força Tática); Complementares (Escolar, Trânsito, Rural e Comunitário); Atividades Operacionais Diversas; funções de comando/supervisão (CGP, CFP e Supervisor Regional). B inverte a ordem dos Primários e dos Complementares e coloca supervisão antes das Atividades Diversas; C altera a ordem dos Complementares, antecipa supervisão e inverte CGP/CFP; D coloca as funções de comando/supervisão antes das Atividades Operacionais Diversas. Apenas A preserva toda a sequência."
      },
{
        id: 71,
        idSimulado: 71,
        subject: "OPERACIONAL",
        topic: "COP — classificação de evidência relacionada a MDIP",
        text: "QUESTÃO 71 — Após uma intervenção policial com resultado morte, o policial usuário da COP encerra a gravação e precisa classificá-la no sistema de evidências digitais. Conforme a Diretriz nº PM3-001/02/25, qual procedimento corresponde à classificação normativa da evidência?",
        options: [
            "a) Classificá-la como Polícia Judiciária (PJ), sem subetiqueta, pois toda ocorrência com resultado morte tramita exclusivamente na Justiça comum.",
            "b) Classificá-la como Polícia Judiciária Militar (PJM), com a subetiqueta Morte Decorrente de Intervenção Policial (MDIP), conforme o rol de etiquetas previsto.",
            "c) Classificá-la como Polícia Administrativa (PA), utilizando a subetiqueta MDIP apenas após autorização do CFP.",
            "d) Classificá-la como Divulgação ao CComSoc, pois a repercussão do fato determina a etiqueta principal."
        ],
        answer: 1,
        explanation: "Gabarito: B. Fundamentação: Diretriz nº PM3-001/02/25, itens 6.7.1.5, 6.7.2 e 6.7.3, em Assuntos Operacionais.pdf, p. 38–39. Trecho: a etiqueta PJM contém evidências de interesse policial para inquéritos e processos da Justiça Militar e admite subetiquetas como MDIP; a Coord Op PM define e atualiza o rol de etiquetas. A é incorreta porque apaga a classificação PJM e a subetiqueta indicada; C atribui ao CFP uma autorização que não consta da regra; D confunde a etiqueta de divulgação com a classificação investigativa. Trecho normativo de suporte: “Essas circunstâncias poderão receber subetiquetas, como Morte Decorrente de Intervenção Policial (MDIP)” (item 6.7.1.5)."
    },
 {
        "id": 72,
        "subject": "OPERACIONAL",
        "topic": "NORSOP — natureza e execução dos Programas de Policiamento Complementares",
        "text": "Uma OPM territorial pretende desenvolver o Programa de Policiamento Comunitário, mas não dispõe de efetivo exclusivo para todas as atividades previstas. À luz da NORSOP, qual solução é compatível com a natureza dos Programas de Policiamento Complementares?",
        "options": [
          "a) O programa deve contar sempre com efetivo e meios exclusivos, vedado utilizar a estrutura de outros programas.",
          "b) O programa pode ser desenvolvido de forma híbrida, com efetivo e meios próprios ou aproveitando estruturas de outros programas, conforme necessidade, disponibilidade e previsão da diretriz específica.",
          "c) O programa substitui os Programas de Policiamento Primários sempre que a OPM não dispuser de efetivo suficiente.",
          "d) O programa somente pode ser executado em resposta a ocorrência em andamento, sem planejamento territorial preventivo."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. A NORSOP define os Programas Complementares como desenvolvidos segundo necessidade e disponibilidade e admite forma híbrida: a OPM pode prever efetivo e meios específicos ou aproveitar estruturas de outros programas, conforme as diretrizes respectivas. A nega expressamente a forma híbrida; C atribui substituição dos programas primários, não prevista; D restringe o programa a resposta imediata, embora o dispositivo não imponha essa limitação. Fonte: Assuntos Operacionais.pdf, Diretriz nº PM3-001/02/20 (NORSOP), item 6.4.1.2. Trecho: “podem ser desenvolvidos de forma híbrida [...] aproveitar as estruturas de outros Programas de Policiamento”."
      },

    {
        id: 73,
        idSimulado: 73,
        subject: "OPERACIONAL",
        topic: "NORSOP — planejamento tático",
        text: "QUESTÃO 73 — Ao revisar um plano de emprego, um comandante precisa distinguir o planejamento tático do planejamento estratégico e do operacional. Segundo a NORSOP, qual descrição corresponde ao nível tático?",
        options: [
            "a) Planejamento de longo prazo que estabelece as estratégias globais do Comando-Geral e orienta o emprego combinado dos órgãos institucionais.",
            "b) Plano gerencial de médio prazo que desdobra o planejamento estratégico nos escalões operacionais e administrativos, definindo objetivos setoriais e metodologia, sem substituir os objetivos estratégicos.",
            "c) Plano de ação voltado exclusivamente à execução imediata de cada ocorrência por uma única Unidade de Serviço.",
            "d) Documento que consolida apenas a distribuição territorial de Setores e Subsetores, sem estabelecer objetivos de gestão."
        ],
        answer: 1,
        explanation: "Gabarito: B. Fundamentação: NORSOP, Diretriz nº PM3-001/02/20, item 6.3.2, em Assuntos Operacionais.pdf, p. 255. Trecho: o nível tático, também chamado Plano Gerencial, desdobra o planejamento estratégico e define objetivos setoriais de médio prazo, podendo complementá-los, mas não substituí-los. A descreve o nível estratégico; C corresponde à lógica de plano de ação operacional e restringe indevidamente sua abrangência; D reduz o planejamento tático à configuração territorial. Trecho normativo de suporte: “O Nível Tático [...] consiste no desdobramento do planejamento estratégico [...] por meio da definição dos objetivos setoriais de médio prazo” (item 6.3.2)."
    },
    {
        id: 74,
        idSimulado: 74,
        subject: "OPERACIONAL",
        topic: "NORSOP — distinção entre princípios e diretrizes básicas",
        text: "QUESTÃO 74 — Na revisão doutrinária da NORSOP, um oficial precisa identificar um conjunto formado exclusivamente por PRINCÍPIOS básicos, sem incluir diretrizes básicas. Assinale a alternativa correta.",
        options: [
            "a) Acessibilidade, proatividade e autonomia operacional.",
            "b) Polícia Comunitária, Excelência na Gestão e Direitos Humanos.",
            "c) Equilíbrio de meios/recursos, universalidade e acessibilidade.",
            "d) Proatividade, universalidade e Polícia Comunitária."
        ],
        answer: 1,
        explanation: "Gabarito: B. Fundamentação: NORSOP, Diretriz nº PM3-001/02/20, seção 6.1, em Assuntos Operacionais.pdf, p. 251–252. O material separa como princípios básicos Polícia Comunitária, Excelência na Gestão e Direitos Humanos; acessibilidade, proatividade, autonomia operacional, equilíbrio de meios/recursos e universalidade são diretrizes básicas. A e C reúnem diretrizes; D mistura diretrizes com um princípio, portanto não atende ao comando de selecionar exclusivamente princípios. Trecho normativo de suporte: “PRINCÍPIOS básicos: Polícia Comunitária; Excelência na Gestão; Direitos Humanos” e “DIRETRIZES básicas: Acessibilidade; Proatividade; Autonomia Operacional; Equilíbrio de meios/recursos; Universalidade” (seção 6.1)."
    },
    {
        id: 75,
        idSimulado: 75,
        subject: "OPERACIONAL",
        topic: "NORSOP — Nível de Resposta 3",
        text: "QUESTÃO 75 — Uma ocorrência excede a capacidade operativa das OPM territoriais subordinadas, mas a avaliação não indica necessidade de recursos especializados próprios da Matriz Operacional III. A resposta exige emprego adicional de efetivo e meios vinculados diretamente ao Comando de Policiamento. Qual nível de resposta corresponde à situação?",
        options: [
            "a) Nível de Resposta 1, pois a atuação permanece no âmbito territorial.",
            "b) Nível de Resposta 2, pois qualquer reforço de uma Unidade de Serviço configura apoio tático.",
            "c) Nível de Resposta 3, pois prevê recursos adicionais vinculados diretamente aos Comandos de Policiamento quando excedida a capacidade operativa das OPM territoriais subordinadas.",
            "d) Nível de Resposta 4, pois todo emprego de efetivo externo à OPM territorial constitui apoio especializado."
        ],
        answer: 2,
        explanation: "Gabarito: C. Fundamentação: NORSOP, Diretriz nº PM3-001/02/20, itens 6.2.2.1 a 6.2.2.4, em Assuntos Operacionais.pdf, p. 253–254. Trecho: o Nível 3 envolve emprego adicional de recursos humanos e meios vinculados diretamente aos Cmdo Pol quando excedida a capacidade operativa das OPM territoriais subordinadas. A descreve recursos locais do Nível 1; B confunde apoio tático da Matriz II/Nível 2 com reforço do Cmdo Pol; D confunde reforço do Nível 3 com apoio especializado do Nível 4. Trecho normativo de suporte: “Nível de Resposta 3: emprego adicional de recursos humanos e meios materiais vinculados diretamente aos Comandos de Policiamento [...] em situações que excedem a capacidade operativa das OPM Territoriais subordinadas” (item 6.2.2.3)."
    },
    {
        id: 76,
        idSimulado: 76,
        subject: "JURIDICO",
        topic: "Lei nº 18.442/26 — requisito para o comando da PMESP",
        text: "QUESTÃO 76 — Considerando a regra apresentada no material autorizado sobre a Lei nº 18.442/26 para o comando da Polícia Militar, assinale a alternativa que reproduz corretamente o requisito referente ao oficial que exerce o Comando-Geral.",
        options: [
            "a) Oficial PM da ativa, de carreira e do último posto do Quadro de Oficiais de Estado-Maior (QOEM).",
            "b) Oficial PM da ativa, de carreira e do último posto de qualquer quadro de oficiais da Corporação.",
            "c) Oficial PM da ativa do QOE, desde que tenha concluído curso de habilitação e esteja no último posto do quadro.",
            "d) Oficial PM da ativa ou da reserva remunerada, desde que ocupe o posto de Coronel PM e seja escolhido pelo Secretário da Segurança Pública."
        ],
        answer: 0,
        explanation: "Gabarito: A. Fundamentação: Lei nº 18.442/26, regra de comando da Corporação, conforme Assuntos Juridicos-administrativos.pdf e Anexo B do edital ACP II-26. O material indica comando por Oficial PM da ativa, de carreira e do último posto do QOEM. B amplia a regra para qualquer quadro; C substitui o QOEM pelo QOE; D admite reserva remunerada e atribui a escolha ao Secretário, elementos não sustentados pelo texto autorizado. Trecho normativo de suporte: “Comandada exclusivamente por Oficial PM da ativa, de carreira e do último posto do Quadro de Oficiais de Estado-Maior” (material autorizado sobre a Lei nº 18.442/26)."
    },
    {
        id: 77,
        idSimulado: 77,
        subject: "JURIDICO",
        topic: "Lei nº 18.442/26 — precedência funcional entre quadros",
        text: "QUESTÃO 77 — Dois Oficiais PM da ativa possuem o mesmo posto e exercem funções que, no caso concreto, não estabelecem superioridade funcional entre si. Para a distinção de precedência funcional entre quadros, qual regra consta do material autorizado?",
        options: [
            "a) Prevalece sempre o oficial de maior idade, independentemente do quadro a que pertença.",
            "b) O Oficial do QOE precede o do QOEM por possuir habilitação especializada.",
            "c) O Oficial do QOEM tem precedência funcional, em igualdade de posto, sobre os Oficiais PM dos demais quadros.",
            "d) A precedência entre quadros somente se aplica quando os oficiais possuem postos diferentes."
        ],
        answer: 2,
        explanation: "Gabarito: C. Fundamentação: Lei nº 18.442/26, art. 4º, § 3º, conforme Assuntos Juridicos-administrativos.pdf. Trecho normativo reproduzido no material: os Oficiais do QOEM terão precedência funcional, em igualdade de postos, com os Oficiais PM dos demais Quadros. A confunde precedência funcional com critério de antiguidade; B inverte a regra; D nega a condição expressa de igualdade de postos. Trecho normativo de suporte: “Os Oficiais PM do QOEM terão precedência funcional, em igualdade de postos, com os Oficiais PM dos demais Quadros” (Lei nº 18.442/26, art. 4º, § 3º)."
    },
    {
        id: 78,
        idSimulado: 78,
        subject: "JURIDICO",
        topic: "Lei nº 18.442/26 — exclusões do limite de efetivo",
        text: "QUESTÃO 78 — Ao conferir o limite de efetivo previsto no art. 3º da Lei nº 18.442/26, um oficial deve identificar as categorias que a própria norma exclui da contagem. Qual alternativa reúne o conjunto previsto no material autorizado?",
        options: [
            "a) Aspirante a Oficial PM; Cadete, Aluno-Oficial, Aluno-Sargento e Aluno-Soldado PM; militar da reserva revertido ao serviço ativo; e PM temporário.",
            "b) Aspirante a Oficial PM; todos os Oficiais do QOE; militares reformados; e praças da reserva remunerada.",
            "c) Cadete e alunos em formação, mas não o Aspirante a Oficial nem o militar da reserva revertido ao serviço ativo.",
            "d) Aspirante a Oficial PM, Cadete e Aluno-Soldado, excluídos os demais alunos em formação e o PM temporário."
        ],
        answer: 0,
        explanation: "Gabarito: A. Fundamentação: Lei nº 18.442/26, art. 3º e parágrafo único, conforme Assuntos Juridicos-administrativos.pdf. O material enumera Aspirante a Oficial; Cadete, Aluno-Oficial, Aluno-Sargento e Aluno-Soldado; militar da reserva revertido ao serviço ativo; e PM temporário. B inclui categorias não listadas; C omite o Aspirante e o militar revertido; D omite alunos e o PM temporário expressamente incluídos na exceção. Trecho normativo de suporte: “Não serão considerados nesses limites: o Aspirante a Oficial PM; o Cadete PM [...] o militar do Estado da reserva revertido ao serviço ativo; o PM temporário” (art. 3º, parágrafo único)."
    },
    {
        id: 79,
        idSimulado: 79,
        subject: "JURIDICO",
        topic: "RDPM — conversão de permanência disciplinar em serviço extraordinário",
        text: "QUESTÃO 79 — Um policial militar, após a publicação de sanção de permanência disciplinar, requer a conversão de parte do período em prestação de serviço extraordinário. À luz dos arts. 18 e 19 do RDPM, qual alternativa reúne corretamente as condições normativas?",
        options: [
            "a) A conversão é automática quando requerida em até cinco dias e pode abranger todo o período, desde que o serviço seja prestado em dias úteis.",
            "b) A autoridade que aplicou a punição pode deferir a conversão mediante decisão motivada, se não houver prejuízo à hierarquia e à disciplina; o pedido deve ser encaminhado em três dias da publicação, e o limite de conversão é de cinco dias.",
            "c) A autoridade superior deve deferir a conversão, que pode ser solicitada até dez dias após a ciência e não interfere no pedido de reconsideração.",
            "d) A conversão depende de autorização judicial, pode abranger até dez dias e deve ser cumprida imediatamente após o término do serviço ordinário."
        ],
        answer: 1,
        explanation: "Gabarito: B. Fundamentação: LC nº 893/01 (RDPM), arts. 18, caput e §§ 3º–4º, e 19, §§ 1º–3º, em Assuntos Juridicos-administrativos.pdf. A conversão depende de juízo motivado da autoridade que aplicou a punição e não pode prejudicar hierarquia e disciplina; o pedido é de três dias da publicação, o limite é de cinco dias e o pedido elide a reconsideração. A erra prazo, automaticidade e limite; C erra autoridade, prazo e efeito sobre o recurso; D inventa autorização judicial e contraria o limite e a vedação de execução imediatamente após serviço ordinário. Trecho normativo de suporte: “O prazo para o encaminhamento do pedido de conversão será de 3 (três) dias” e “o limite máximo de conversão [...] é de 5 (cinco) dias” (arts. 18, § 3º, e 19, § 1º)."
    },
    {
        id: 80,
        idSimulado: 80,
        subject: "JURIDICO",
        topic: "RDPM — responsabilidade solidária do superior hierárquico",
        text: "QUESTÃO 80 — Na apuração de transgressão disciplinar de subordinado, a responsabilidade solidária do superior hierárquico, com incidência das mesmas sanções da transgressão, ocorre em qual das hipóteses previstas no RDPM?",
        options: [
            "a) Somente quando o superior estiver presente e tiver autorizado expressamente a conduta.",
            "b) Apenas quando o superior estiver ausente do local e não tiver recebido comunicação formal do fato.",
            "c) Quando presenciar a transgressão e deixar de fazê-la cessar imediatamente, ou quando concorrer diretamente, por ação ou omissão, para o cometimento, mesmo sem estar presente.",
            "d) Sempre que o subordinado praticar transgressão durante o serviço, independentemente de qualquer conduta do superior."
        ],
        answer: 2,
        explanation: "Gabarito: C. Fundamentação: LC nº 893/01 (RDPM), art. 11, § 2º, itens 1 e 2, em Assuntos Juridicos-administrativos.pdf. O dispositivo prevê as duas hipóteses descritas em C. A restringe indevidamente a responsabilidade à autorização expressa; B inverte o requisito de presença para a primeira hipótese e ignora a contribuição direta; D transforma a responsabilidade em automática, sem os requisitos legais. Trecho normativo de suporte: “presenciar o cometimento da transgressão deixando de atuar para fazê-la cessar imediatamente” ou “concorrer diretamente, por ação ou omissão, para o cometimento [...] mesmo não estando presente” (art. 11, § 2º)."
    },
    {
        id: 81,
        idSimulado: 81,
        subject: "JURIDICO",
        topic: "RDPM — âmbito subjetivo de aplicação",
        text: "QUESTÃO 81 — Ao delimitar o âmbito subjetivo do Regulamento Disciplinar da Polícia Militar, qual alternativa reproduz integralmente as exceções expressas no parágrafo único do art. 2º do RDPM?",
        options: [
            "a) Militares do Estado na reserva remunerada e reformados, além dos agregados.",
            "b) Militares do Estado ocupantes de cargos públicos ou eletivos e Magistrados da Justiça Militar.",
            "c) Apenas militares do Estado que estejam afastados temporariamente do serviço ativo.",
            "d) Todos os militares do Estado que exerçam função administrativa, ainda que não ocupem cargo público."
        ],
        answer: 1,
        explanation: "Gabarito: B. Fundamentação: LC nº 893/01 (RDPM), art. 2º, caput e parágrafo único, em Assuntos Juridicos-administrativos.pdf. A regra geral alcança militares do serviço ativo, reserva remunerada, reformados e agregados; as exceções expressas são ocupantes de cargos públicos ou eletivos e Magistrados da Justiça Militar. A lista pessoas submetidas à regra geral; C cria uma exceção inexistente; D amplia a exceção para qualquer função administrativa. Trecho normativo de suporte: “O disposto neste artigo não se aplica: 1 - aos militares do Estado, ocupantes de cargos públicos ou eletivos; 2 - aos Magistrados da Justiça Militar” (art. 2º, parágrafo único)."
    },
    {
        id: 82,
        idSimulado: 82,
        subject: "JURIDICO",
        topic: "RDPM — critérios de antiguidade em igualdade de posto ou graduação",
        text: "QUESTÃO 82 — Dois militares do Estado estão em igualdade de posto ou graduação e não há regra específica de precedência funcional aplicável. Qual sequência reproduz os critérios de antiguidade previstos no art. 4º do RDPM?",
        options: [
            "a) Maior idade; data da admissão; classificação no curso; graus hierárquicos anteriores; data da última promoção.",
            "b) Data da última promoção; prevalência sucessiva dos graus hierárquicos anteriores; classificação no curso de formação ou habilitação; data de nomeação ou admissão; maior idade.",
            "c) Quadro de origem; função exercida; data da admissão; maior idade; data da última promoção.",
            "d) Data da última promoção; maior idade; precedência funcional; tempo total de serviço; classificação no curso."
        ],
        answer: 1,
        explanation: "Gabarito: B. Fundamentação: LC nº 893/01 (RDPM), art. 4º, incisos I a V e parágrafo único, em Assuntos Juridicos-administrativos.pdf. A ordem legal começa pela última promoção e segue pelos graus anteriores, classificação no curso, nomeação/admissão e idade; há regra particular de classificação em determinados ingressos/promoções. A inverte a ordem; C inclui quadro e função como critérios gerais que não constam da sequência; D substitui critérios legais por tempo total de serviço e altera a ordem. Trecho normativo de suporte: “I - data da última promoção; II - prevalência sucessiva dos graus hierárquicos anteriores; III - classificação no curso de formação ou habilitação; IV - data de nomeação ou admissão; V - maior idade” (art. 4º)."
    },
    {
        id: 83,
        idSimulado: 83,
        subject: "JURIDICO",
        topic: "RDPM — recompensas policiais-militares",
        text: "QUESTÃO 83 — Considere as afirmações sobre as recompensas policiais-militares previstas no RDPM: I — o elogio é uma recompensa; II — o cancelamento de sanções é uma recompensa; III — a dispensa do serviço constitui recompensa policial-militar. Está correto o que se afirma em:",
        options: [
            "a) I, apenas.",
            "b) II e III, apenas.",
            "c) I e II, apenas.",
            "d) I, II e III."
        ],
        answer: 2,
        explanation: "Gabarito: C. Fundamentação: LC nº 893/01 (RDPM), arts. 68 e 69, em Assuntos Juridicos-administrativos.pdf. O art. 68 enumera elogio e cancelamento de sanções; o art. 69 declara expressamente que a dispensa do serviço não é recompensa policial-militar. A omite o cancelamento de sanções; B inclui a dispensa e exclui o elogio; D inclui incorretamente a dispensa. Trecho normativo de suporte: “São recompensas policiais-militares: I - elogio; II - cancelamento de sanções” (art. 68); “A dispensa do serviço não é uma recompensa policial-militar” (art. 69)."
    },
    {
        id: 84,
        idSimulado: 84,
        subject: "JURIDICO",
        topic: "RDPM — distinção entre valores e deveres éticos",
        text: "QUESTÃO 84 — À luz dos arts. 7º e 8º do RDPM, examine as afirmações: I — cumprir os deveres de cidadão é dever ético; II — patriotismo é valor fundamental; III — preservar a natureza e o meio ambiente é dever ético; IV — civismo é dever ético, e não valor fundamental. Está correto o que se afirma em:",
        options: [
            "a) I, II e III, apenas.",
            "b) I e IV, apenas.",
            "c) II, III e IV, apenas.",
            "d) I, II, III e IV."
        ],
        answer: 0,
        explanation: "Gabarito: A. Fundamentação: LC nº 893/01 (RDPM), arts. 7º e 8º, incisos I–III, em Assuntos Juridicos-administrativos.pdf. Cumprir deveres de cidadão e preservar a natureza constam dos deveres éticos; patriotismo e civismo constam dos valores fundamentais. B erra ao classificar civismo como dever e omite II e III; C inclui a afirmação IV, falsa; D também inclui IV. Trecho normativo de suporte: “Os valores fundamentais [...] são [...] patriotismo [e] civismo” (art. 7º); “cumprir os deveres de cidadão” e “preservar a natureza e o meio ambiente” constam do art. 8º."
    },
{
        "id": 85,
        "subject": "JURIDICO",
        "topic": "Procedimento Disciplinar — análise inicial da comunicação disciplinar",
        "text": "QUESTÃO 85 - Ao receber uma comunicação disciplinar, a autoridade competente verifica que ainda não há elementos suficientes para formular o Termo Acusatório. À luz da Portaria do Cmt G CORREGPM-1/360/13, assinale a alternativa INCORRETA sobre as providências possíveis nessa fase.",
        "options": [
          "a) Restituir a comunicação ao signatário para complementar ou esclarecer os fatos, fixando o prazo previsto na Portaria.",
          "b) Encaminhar a comunicação ao policial militar comunicado para manifestação preliminar, no prazo previsto na Portaria.",
          "c) Arquivar a comunicação, se concluir que não houve transgressão, mediante decisão motivada e ciência do policial militar comunicado.",
          "d) Aplicar imediatamente a sanção disciplinar, dispensando Termo Acusatório e oportunidade de defesa, apenas porque os elementos iniciais são insuficientes."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. O art. 2º prevê análise em 5 dias e, se faltarem elementos suficientes para o Termo Acusatório, permite devolver a comunicação ao signatário para complementação em 3 dias, encaminhá-la ao comunicado para manifestação preliminar em 3 dias ou arquivá-la motivadamente quando não houver transgressão, com ciência do policial. A, B e C correspondem a providências expressamente previstas; D antecipa sanção e elimina a formalização acusatória e a defesa, o que o dispositivo não autoriza. Fonte: Assuntos Jurídicos-administrativos.pdf, Portaria CORREGPM-1/360/13, art. 2º (Bol G PM 211/2013, p. 1). Trecho: “analisará os fatos, no prazo de 5 (cinco) dias”."
      },

    {
        id: 86,
        idSimulado: 86,
        subject: "JURIDICO",
        topic: "RDPM — âmbito do Conselho de Justificação",
        text: "QUESTÃO 86 — Na definição do processo regular aplicável aos oficiais, qual alternativa corresponde ao alcance do Conselho de Justificação previsto no RDPM?",
        options: [
            "a) Destina-se exclusivamente a praças com dez ou mais anos de serviço policial-militar.",
            "b) Destina-se a apurar a incapacidade do oficial para permanecer no serviço ativo e também se aplica ao oficial inativo presumivelmente incapaz de permanecer na inatividade.",
            "c) É aplicável somente ao oficial da ativa e depende da existência prévia de sentença criminal transitada em julgado.",
            "d) Substitui o Processo Administrativo Disciplinar destinado às praças com menos de dez anos de serviço."
        ],
        answer: 1,
        explanation: "Gabarito: B. Fundamentação: LC nº 893/01 (RDPM), arts. 71, inciso I, e 73, caput e parágrafo único, em Assuntos Juridicos-administrativos.pdf. O Conselho de Justificação é o processo regular para oficiais e também alcança o oficial inativo presumivelmente incapaz de permanecer na inatividade. A descreve o Conselho de Disciplina; C exclui indevidamente o inativo e exige sentença prévia; D confunde processos aplicáveis a oficiais e praças. Trecho normativo de suporte: “O Conselho de Justificação destina-se a apurar [...] a incapacidade do oficial para permanecer no serviço ativo” e “aplica-se também ao oficial inativo” (art. 73 e parágrafo único)."
    },
    {
        id: 87,
        idSimulado: 87,
        subject: "JURIDICO",
        topic: "RDPM — escolha do processo regular conforme tempo de serviço",
        text: "QUESTÃO 87 — Uma praça possui exatamente dez anos de serviço policial-militar e há notícia de incapacidade moral para permanecer no serviço ativo. Considerando o art. 71 do RDPM, qual processo regular corresponde ao caso?",
        options: [
            "a) Processo Administrativo Disciplinar, porque o Conselho de Disciplina exige mais de dez anos completos.",
            "b) Conselho de Justificação, por se tratar de processo aplicável a qualquer militar do Estado.",
            "c) Conselho de Disciplina, destinado às praças com dez ou mais anos de serviço policial-militar.",
            "d) Sindicância, que substitui o processo regular quando a acusação envolve incapacidade moral."
        ],
        answer: 2,
        explanation: "Gabarito: C. Fundamentação: LC nº 893/01 (RDPM), arts. 71, incisos II e III, e 76, em Assuntos Juridicos-administrativos.pdf. O limite legal é de dez anos ou mais para Conselho de Disciplina; o PAD aplica-se às praças com menos de dez anos. A altera 'dez ou mais' para 'mais de dez'; B atribui a praça um processo próprio de oficiais; D confunde meio sumário de investigação com processo regular. Trecho normativo de suporte: “para praças com 10 (dez) ou mais anos [...] o Conselho de Disciplina; [...] para praças com menos de 10 (dez) anos [...] o Processo Administrativo Disciplinar” (art. 71, II e III)."
    },
 {
        "id": 88,
        "subject": "JURIDICO",
        "topic": "Procedimento Disciplinar — instauração e audiência de instrução e julgamento",
        "text": "QUESTÃO 88 - A autoridade policial-militar competente vislumbra o cometimento de transgressão disciplinar e decide instaurar Procedimento Disciplinar. Conforme o art. 3º da Portaria CORREGPM-1/360/13, qual providência observa os requisitos temporais e formais previstos na norma?",
        "options": [
          "a) Instaurar o procedimento em até 3 dias, autuar os autos e elaborar Termo Acusatório motivado, podendo arrolar até 3 testemunhas de acusação e designar audiência para ocorrer em prazo de 10 dias.",
          "b) Instaurar o procedimento em até 5 dias, elaborar Termo Acusatório sem exposição dos fundamentos jurídicos e designar audiência para ocorrer em prazo de 15 dias.",
          "c) Instaurar o procedimento em até 3 dias, limitar a acusação a 2 testemunhas e realizar a audiência obrigatoriamente em 5 dias.",
          "d) Instaurar o procedimento em até 10 dias, dispensar a autuação quando houver comunicação escrita e designar audiência após a oitiva das testemunhas."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. O art. 3º estabelece instauração em 3 dias, autuação e Termo Acusatório motivado com razões de fato e de direito; o rol da acusação pode conter até 3 testemunhas, e a audiência é designada para prazo de 10 dias. B altera prazo, fundamentação e data; C reduz o limite de testemunhas e muda o prazo; D amplia o prazo de instauração e dispensa formalidade não dispensada. Fonte: Assuntos Jurídicos-administrativos.pdf, Portaria CORREGPM-1/360/13, art. 3º (Bol G PM 211/2013, p. 1). Trecho: “em 3 (três) dias [...] Termo Acusatório [...] até o máximo de 3 (três) [...] audiência [...] num prazo de 10 (dez) dias”."
      },

    {
        id: 89,
        idSimulado: 89,
        subject: "JURIDICO",
        topic: "RDPM — prazos dos recursos disciplinares",
        text: "QUESTÃO 89 — Um militar pretende interpor Pedido de Reconsideração de Ato e, se necessário, posteriormente, Recurso Hierárquico. Qual alternativa distingue corretamente os prazos de interposição previstos nos arts. 57 e 58 do RDPM?",
        options: [
            "a) Ambos devem ser interpostos em cinco dias contados da ciência inicial da punição, independentemente da solução do primeiro recurso.",
            "b) A reconsideração deve ser apresentada em cinco dias da ciência do ato; o recurso hierárquico, em cinco dias do conhecimento da solução da reconsideração ou do vencimento do prazo de trinta dias sem conhecimento oficial da solução.",
            "c) A reconsideração deve ser apresentada em dez dias da publicação; o recurso hierárquico, em cinco dias contados da instauração do procedimento.",
            "d) A reconsideração tem prazo de cinco dias úteis da publicação, e o recurso hierárquico tem prazo de dez dias do recebimento pela autoridade recorrida."
        ],
        answer: 1,
        explanation: "Gabarito: B. Fundamentação: LC nº 893/01 (RDPM), art. 57, § 2º e § 4º, e art. 58, § 1º e § 3º, item 1, em Assuntos Juridicos-administrativos.pdf. O prazo da reconsideração conta da ciência do ato; o hierárquico pressupõe a solução da reconsideração, com a exceção prevista para ausência de conhecimento oficial após trinta dias. A ignora a autonomia e a sequência do recurso hierárquico; C inventa prazo de dez dias para reconsideração e marco inicial incorreto; D troca os marcos e os prazos legais. Trecho normativo de suporte: “O pedido de reconsideração [...] deve ser apresentado no prazo máximo de 5 (cinco) dias” (art. 57, § 2º); o recurso hierárquico tem prazo de cinco dias contado do conhecimento da solução ou do marco alternativo previsto no art. 58, § 3º, item 1."
    },
    {
        id: 90,
        idSimulado: 90,
        subject: "JURIDICO",
        topic: "RDPM — causas de justificação e circunstâncias atenuantes",
        text: "QUESTÃO 90 — Na análise de uma transgressão disciplinar, o encarregado deve distinguir causa de justificação de circunstância atenuante. Qual situação está expressamente prevista no art. 34 do RDPM como causa de justificação?",
        options: [
            "a) O militar ter prestado serviços relevantes à sociedade.",
            "b) O militar estar, no mínimo, no comportamento bom.",
            "c) O militar ter praticado a falta para evitar mal maior.",
            "d) O militar ter agido em legítima defesa própria ou de outrem."
        ],
        answer: 3,
        explanation: "Gabarito: D. Fundamentação: LC nº 893/01 (RDPM), art. 34, inciso III, e art. 35, incisos I, II e IV, em Assuntos Juridicos-administrativos.pdf. A prestação de serviços relevantes, o comportamento no mínimo bom e a prática para evitar mal maior são circunstâncias atenuantes do art. 35; a legítima defesa própria ou de outrem é causa de justificação do art. 34. Trecho normativo de suporte: “Não haverá aplicação de sanção disciplinar” em caso de “legítima defesa própria ou de outrem” (art. 34, III); “ter praticado a falta para evitar mal maior” figura como atenuante (art. 35, IV)."
    },
    {
        id: 91,
        idSimulado: 91,
        subject: "JURIDICO",
        topic: "Lei nº 18.442/26 — requisitos para promoção ao QOE",
        text: "QUESTÃO 91 — Para a promoção de Subtenente PM da ativa ao posto de Segundo-Tenente PM do QOE, qual alternativa reúne os requisitos indicados no material autorizado?",
        options: [
            "a) Aproveitamento no CHOE, quatro anos de interstício como Subtenente, idoneidade moral, não estar agregado, integrar a primeira terça parte do almanaque, comportamento no mínimo ótimo e aptidão sem restrições em inspeção de saúde.",
            "b) Aproveitamento no CHOE, três anos de interstício, comportamento bom, estar na metade superior do almanaque e aptidão com restrições permitidas.",
            "c) Aproveitamento no CHOE e comportamento excepcional, dispensados interstício, posição no almanaque e inspeção de saúde.",
            "d) Quatro anos de interstício e comportamento ótimo, sendo facultativos a idoneidade moral, o CHOE e a condição de não agregado."
        ],
        answer: 0,
        explanation: "Gabarito: A. Fundamentação: Lei nº 18.442/26, requisitos de promoção ao QOE, conforme Assuntos Juridicos-administrativos.pdf. O material enumera CHOE, quatro anos de interstício, idoneidade moral, não estar agregado, primeira terça parte do almanaque, comportamento ao menos ótimo e aptidão sem restrições. B altera interstício, comportamento, classificação e saúde; C dispensa requisitos expressos; D transforma requisitos cumulativos em facultativos. Trecho normativo de suporte: “Quatro anos de interstício na graduação de Subtenente PM”; “integrar a primeira terça parte do almanaque”; “estar, pelo menos, no comportamento ótimo”; e “ser considerado apto, sem restrições, em inspeção de saúde” (requisitos de promoção ao QOE no material autorizado)."
    },
    {
        id: 92,
        idSimulado: 92,
        subject: "JURIDICO",
        topic: "RDPM — limites de competência para aplicação de permanência disciplinar",
        text: "QUESTÃO 92 — Considerando os limites de competência do art. 32 do RDPM, qual alternativa reproduz corretamente os limites máximos de permanência disciplinar que podem ser aplicados pelos oficiais dos postos indicados?",
        options: [
            "a) Coronel: até 15 dias; Tenente-Coronel: até 20 dias; Major: até 10 dias; Capitão: até 5 dias.",
            "b) Coronel: até 20 dias; Tenente-Coronel: até 20 dias; Major: até 15 dias; Capitão: até 10 dias.",
            "c) Coronel: até 20 dias e detenção de até 15 dias; Tenente-Coronel: até 15 dias; Major: até 20 dias; Capitão: até 10 dias.",
            "d) Coronel e Tenente-Coronel: até 30 dias; Major: até 20 dias; Capitão: até 15 dias."
        ],
        answer: 1,
        explanation: "Gabarito: B. Fundamentação: LC nº 893/01 (RDPM), art. 32, incisos III a VI, em Assuntos Juridicos-administrativos.pdf. O limite é de 20 dias para Coronel e Tenente-Coronel, 15 para Major e 10 para Capitão; para Coronel, o art. 32 também prevê detenção até 15 dias. A reduz os limites; C troca os limites de Tenente-Coronel e Major; D apresenta limites superiores aos expressos no dispositivo. Trecho normativo de suporte: “aos oficiais do posto de coronel [...] permanência disciplinar de até 20 (vinte) dias”; “tenente-coronel [...] até 20”; “major [...] até 15”; “capitão [...] até 10” (art. 32, III–VI)."
    },
    {
        id: 93,
        idSimulado: 93,
        subject: "JURIDICO",
        topic: "RDPM — detenção: hipótese e competência",
        text: "QUESTÃO 93 — Ao examinar a possibilidade de aplicar a sanção de detenção, a autoridade deve verificar tanto a hipótese de cabimento quanto a competência. Qual alternativa concilia corretamente os arts. 20, 21 e 32 do RDPM?",
        options: [
            "a) A detenção pode ser aplicada em qualquer primeira transgressão grave por qualquer oficial com competência disciplinar sobre o militar.",
            "b) A detenção somente pode ser aplicada na reincidência em transgressão grave; a competência inclui o Governador, as autoridades indicadas nos arts. 21 e 32 e, nos limites legais, o Subcomandante da PM e os oficiais em funções próprias do posto de Coronel.",
            "c) A detenção é exclusiva do Comandante-Geral e pode ser aplicada por transgressão de qualquer natureza, ainda que sem reincidência.",
            "d) A detenção pode ser aplicada por Capitão ou Major quando a permanência disciplinar exceder dez dias, independentemente de reincidência."
        ],
        answer: 1,
        explanation: "Gabarito: B. Fundamentação: LC nº 893/01 (RDPM), art. 20, § 2º, art. 21 e art. 32, incisos I a III, em Assuntos Juridicos-administrativos.pdf. O art. 20 exige reincidência em transgressão grave; os arts. 21 e 32 delimitam as autoridades e os limites de aplicação. A elimina o requisito de reincidência e amplia a competência; C restringe indevidamente a competência ao Comandante-Geral e ignora o requisito; D atribui detenção a Capitão e Major, embora o art. 32 não lhes atribua essa sanção. Trecho normativo de suporte: “A detenção somente poderá ser aplicada quando da reincidência no cometimento de transgressão disciplinar de natureza grave” (art. 20, § 2º); o art. 21 indica as autoridades de aplicação e o art. 32 complementa os limites de competência."
    },
      {
        "id": 94,
        "subject": "JURIDICO",
        "topic": "Procedimento Disciplinar — interrogatório e direito ao silêncio",
        "text": "QUESTÃO 94 - Durante o interrogatório em Procedimento Disciplinar, o policial militar acusado declara que exercerá o direito de permanecer calado e não responder às perguntas formuladas. Segundo a Portaria CORREGPM-1/360/13, qual consequência deve ser atribuída a essa conduta?",
        "options": [
          "a) O silêncio equivale à confissão, desde que a acusação esteja acompanhada de documentos.",
          "b) O silêncio não importa confissão nem pode ser interpretado em prejuízo da defesa.",
          "c) O silêncio autoriza presumir verdadeiros os fatos, salvo se houver advogado constituído.",
          "d) O acusado perde o direito de apresentar alegações finais se não responder às perguntas."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. O art. 5º determina que, antes do interrogatório, a autoridade informe o direito de permanecer calado e não responder; expressamente, o silêncio “não importará em confissão e nem poderá ser interpretado em prejuízo da defesa”. A e C atribuem efeito probatório contrário ao texto; D cria perda de defesa que o dispositivo não prevê. Fonte: Assuntos Jurídicos-administrativos.pdf, Portaria CORREGPM-1/360/13, art. 5º (Bol G PM 211/2013, p. 3)."
      },
      {
        "id": 95,
        "subject": "JURIDICO",
        "topic": "Procedimento Disciplinar — alegações finais e memoriais",
        "text": "QUESTÃO 95 - Encerrado o interrogatório no Procedimento Disciplinar, não houve aditamento do Termo Acusatório. Considerando o art. 7º da Portaria CORREGPM-1/360/13, assinale a alternativa correta quanto à manifestação final da defesa.",
        "options": [
          "a) A defesa dispõe de 5 minutos improrrogáveis para alegações orais, e a autoridade deve decidir em até 24 horas.",
          "b) A defesa apresenta obrigatoriamente memoriais escritos por 10 dias, ainda que o caso não tenha complexidade especial.",
          "c) São concedidos 10 minutos para alegações finais orais, prorrogáveis por mais 5; excepcionalmente, por complexidade ou número de acusados e decisão motivada em ata, podem ser concedidos 5 dias simultâneos às partes para memoriais.",
          "d) A acusação apresenta alegações finais orais por 10 minutos e a defesa dispõe de 5 dias úteis, sem necessidade de decisão motivada, para memoriais."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. O art. 7º prevê alegações finais orais por 10 minutos, prorrogáveis por mais 5. Excepcionalmente, pela complexidade e/ou número de acusados, com decisão motivada na ata, a autoridade pode conceder 5 dias simultâneos às partes para memoriais; a decisão será proferida em 5 dias contados da juntada do último memorial de defesa. A altera os tempos; B transforma a exceção em regra e altera o prazo; D transfere a manifestação oral à acusação e dispensa a motivação. Fonte: Assuntos Jurídicos-administrativos.pdf, Portaria CORREGPM-1/360/13, art. 7º, caput e § 2º (Bol G PM 211/2013, p. 3)."
      },
      {
        "id": 96,
        "subject": "JURIDICO",
        "topic": "Procedimento Disciplinar — publicação e efeitos do ato",
        "text": "QUESTÃO 96 - Concluído um Procedimento Disciplinar, a autoridade pretende publicar o ato punitivo em Boletim para que produza seus efeitos. Nos termos do art. 12 da Portaria CORREGPM-1/360/13, qual condição deve ser observada?",
        "options": [
          "a) O ato deve ser publicado imediatamente após a audiência, ainda que haja prazo recursal em curso.",
          "b) A publicação pode ocorrer antes da decisão, desde que o Termo Acusatório tenha sido assinado pela autoridade competente.",
          "c) A publicação deve aguardar necessariamente o trânsito em julgado judicial, mesmo quando já encerrada a via recursal administrativa.",
          "d) A publicação ocorre após decisão da qual não caiba mais recurso próprio com efeito suspensivo ou após a decadência dos prazos recursais, circunstância que deve ser certificada nos autos."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. O art. 12 condiciona a publicação do ato punitivo ou de justificação à emissão de decisão da qual não caiba mais recurso próprio com efeito suspensivo ou à decadência dos prazos recursais, circunstância a ser cientificada nos autos; a partir da publicação o ato gera seus efeitos. A e B antecipam a publicação; C exige trânsito judicial, condição não prevista no dispositivo. Fonte: Assuntos Jurídicos-administrativos.pdf, Portaria CORREGPM-1/360/13, art. 12 (Bol G PM 211/2013, p. 4)."
      },
      
    {
        id: 97,
        idSimulado: 97,
        subject: "JURIDICO",
        topic: "RDPM — prescrição da ação disciplinar",
        text: "QUESTÃO 97 — Na análise de prescrição de uma transgressão disciplinar que não constitui também infração penal, qual prazo e marco inicial devem ser adotados conforme o art. 85 do RDPM?",
        options: [
            "a) Dois anos, contados da ciência da autoridade competente.",
            "b) Cinco anos, contados da data do cometimento da transgressão disciplinar.",
            "c) Cinco anos, contados da publicação da sanção aplicada.",
            "d) Dez anos, contados da instauração da investigação preliminar."
        ],
        answer: 1,
        explanation: "Gabarito: B. Fundamentação: LC nº 893/01 (RDPM), art. 85, caput, em Assuntos Juridicos-administrativos.pdf. A ação disciplinar prescreve em cinco anos contados do cometimento da transgressão. A usa prazo e marco inicial não previstos; C conta da publicação da sanção, e não do fato; D duplica o prazo e utiliza marco inicial estranho ao dispositivo. O § 1º prevê regra própria quando a transgressão também for crime, situação excluída do enunciado. Trecho normativo de suporte: “A ação disciplinar da Administração prescreverá em 5 (cinco) anos, contados da data do cometimento da transgressão disciplinar” (art. 85, caput)."
    },
    {
        id: 98,
        idSimulado: 98,
        subject: "JURIDICO",
        topic: "Lei nº 18.442/26 — nomeação do Subcomandante-Geral",
        text: "QUESTÃO 98 — Considerando a regra de provimento do cargo de Subcomandante-Geral da Polícia Militar apresentada no material autorizado, qual alternativa reúne corretamente o posto, o quadro e a autoridade responsável pela nomeação?",
        options: [
            "a) Coronel PM do QOE, nomeado pelo Secretário da Segurança Pública.",
            "b) Coronel PM do QOEM, nomeado pelo Governador do Estado.",
            "c) Tenente-Coronel PM do QOEM, nomeado pelo Comandante-Geral.",
            "d) Coronel PM de qualquer quadro, escolhido pelo Comandante-Geral e confirmado pelo Secretário da Segurança Pública."
        ],
        answer: 1,
        explanation: "Gabarito: B. Fundamentação: Lei nº 18.442/26, art. 10, conforme Assuntos Juridicos-administrativos.pdf. O cargo de Subcomandante-Geral é exercido por Coronel PM do QOEM e a nomeação compete ao Governador do Estado. A altera quadro e autoridade; C altera posto e autoridade; D amplia o requisito de quadro e atribui o provimento a autoridades não indicadas. Trecho normativo de suporte: O material autorizado estabelece que o cargo é exercido por “Oficial do posto de Coronel PM do QOEM, nomeado pelo Governador do Estado” (Lei nº 18.442/26, art. 10, conforme material de estudo)."
    },
    {
        id: 99,
        idSimulado: 99,
        subject: "JURIDICO",
        topic: "RDPM — distinções entre Pedido de Reconsideração e Recurso Hierárquico",
        text: "QUESTÃO 99 — Sobre os recursos disciplinares próprios previstos nos arts. 57 e 58 do RDPM, examine as afirmações: I — o Pedido de Reconsideração é dirigido à autoridade que praticou ou aprovou o ato e deve ser encaminhado diretamente a ela, uma única vez; II — o Pedido de Reconsideração tem efeito suspensivo; III — o Recurso Hierárquico é dirigido à autoridade imediatamente superior àquela que não reconsiderou o ato e pressupõe, em regra, prévia reconsideração. Está correto o que se afirma em:",
        options: [
            "a) I, apenas.",
            "b) I e II, apenas.",
            "c) II e III, apenas.",
            "d) I, II e III."
        ],
        answer: 3,
        explanation: "Gabarito: D. Fundamentação: LC nº 893/01 (RDPM), arts. 57, §§ 1º–2º, e 58, caput e § 1º, em Assuntos Juridicos-administrativos.pdf. As três afirmações correspondem ao texto normativo. A omite II e III; B omite a regra de endereçamento e precedência do Recurso Hierárquico; C omite a regra de encaminhamento do Pedido de Reconsideração. A exceção prevista no art. 57, § 4º, não elimina a regra geral descrita em III. Trecho normativo de suporte: “O pedido de reconsideração de ato, que tem efeito suspensivo” (art. 57, § 2º); “O recurso hierárquico [...] terá efeito suspensivo” e é dirigido à autoridade imediatamente superior (art. 58, caput)."
    },
    {
        id: 100,
        idSimulado: 100,
        subject: "ORGANIZACIONAL",
        topic: "I-16-PM — investigação preliminar e sindicância",
        text: "QUESTÃO 100 — Uma autoridade recebe notícia de irregularidade administrativa, mas os elementos iniciais ainda são insuficientes para decidir pela instauração imediata de sindicância. De acordo com as I-16-PM, qual providência e prazo correspondem à situação?",
        options: [
            "a) Instaurar imediatamente sindicância, cujo prazo inicial é de dez dias improrrogáveis e que se destina apenas à coleta informal de subsídios.",
            "b) Determinar investigação preliminar para colher subsídios que fundamentem a instauração ou não de sindicância ou de outro procedimento; ela deve ser encerrada em dez dias improrrogáveis, contados do despacho de instauração.",
            "c) Instaurar processo regular, pois a investigação preliminar somente pode ocorrer depois de sindicância formalmente encerrada.",
            "d) Determinar investigação preliminar por trinta dias, prorrogável por mais noventa dias, com emprego obrigatório de termos formais de declaração e interrogatório."
        ],
        answer: 1,
        explanation: "Gabarito: B. Fundamentação: I-16-PM, art. 67, §§ 1º a 3º, em Assuntos Organizacionais.pdf, p. 24. A investigação preliminar é meio sumaríssimo para colher subsídios quando a notícia não reúne elementos suficientes e tem prazo improrrogável de dez dias contados do despacho. A confunde o prazo e a finalidade da sindicância; C inverte a sequência; D atribui prazo e prorrogação da sindicância e exige meios formais que não correspondem à investigação preliminar. Trecho normativo de suporte: A investigação preliminar é “meio sumaríssimo destinado à imediata colheita de subsídios” e “será encerrada no prazo improrrogável de 10 (dez) dias” (I-16-PM, art. 67, §§ 1º e 3º)."
    },
 {
        "id": 101,
        "subject": "JURIDICO",
        "topic": "Procedimento Disciplinar — âmbito de aplicação e critérios do rito",
        "text": "Uma comunicação relata possível transgressão disciplinar que, em princípio, não apresenta complexidade suficiente para exigir Sindicância nem gravidade que recomende Processo Regular. À luz do art. 1º da Portaria CORREGPM-1/360/13, qual procedimento e quais critérios orientam a apuração?",
        "options": [
          "a) Sindicância obrigatória, orientada pela formalidade estrita e pela produção escrita de todos os atos.",
          "b) Procedimento Disciplinar, orientado pela oralidade, simplicidade, informalidade, economia processual e celeridade.",
          "c) Processo Regular obrigatório, orientado exclusivamente pela publicidade e pela hierarquia.",
          "d) Investigação criminal militar, orientada pelos prazos e atos próprios do CPPM, ainda que a notícia trate apenas de transgressão disciplinar."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. O art. 1º destina o Procedimento Disciplinar à apuração de transgressões cuja complexidade não exija Sindicância e cuja gravidade não recomende Processo Regular, orientando-o pela oralidade, simplicidade, informalidade, economia processual e celeridade. A e C substituem o rito sem observar os critérios de cabimento; D desloca a apuração disciplinar para procedimento criminal não indicado pelo dispositivo. Fonte: Assuntos Jurídicos-administrativos.pdf, Portaria CORREGPM-1/360/13, art. 1º (Bol G PM 211/2013, p. 1)."
      },
      {
        "id": 102,
        "subject": "JURIDICO",
        "topic": "Procedimento Disciplinar — sequência da audiência e oitiva de testemunhas",
        "text": "Na audiência de instrução e julgamento de um Procedimento Disciplinar, a autoridade deve observar a sequência prevista no art. 4º da Portaria CORREGPM-1/360/13. Assinale a alternativa correta.",
        "options": [
          "a) Ler o Termo Acusatório, receber e juntar documentos apresentados ou solicitados e, em seguida, ouvir as testemunhas da acusação, seguidas pelas testemunhas da defesa.",
          "b) Interrogar o acusado antes de ler o Termo Acusatório e, depois, ouvir primeiro as testemunhas da defesa.",
          "c) Ouvir as testemunhas de defesa antes de admitir documentos e deixar a leitura do Termo Acusatório para o encerramento da audiência.",
          "d) Receber apenas documentos da acusação, ouvir as testemunhas e dispensar a participação do acusado ou defensor na formulação de perguntas."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. O art. 4º prevê início da audiência com leitura do Termo Acusatório, recebimento e juntada de documentos e oitiva das testemunhas eventualmente arroladas na acusação, seguidas das testemunhas trazidas ou requeridas pela defesa. B antecipa o interrogatório, que é tratado no art. 5º após a oitiva; C inverte a ordem e posterga a leitura; D restringe documentos e defesa sem amparo. Fonte: Assuntos Jurídicos-administrativos.pdf, Portaria CORREGPM-1/360/13, art. 4º (Bol G PM 211/2013, p. 2)."
      },
      {
        "id": 103,
        "subject": "JURIDICO",
        "topic": "Procedimento Disciplinar — nova tipificação fundada em fatos novos",
        "text": "Após a produção das provas e o interrogatório, a autoridade policial-militar entende que o fato pode receber nova tipificação jurídica, fundada em fatos novos ainda não abrangidos pelo Termo Acusatório. Conforme o art. 6º da Portaria CORREGPM-1/360/13, qual providência é adequada?",
        "options": [
          "a) Alterar a tipificação apenas na decisão final, sem cientificar o acusado, porque a instrução já foi encerrada.",
          "b) Arquivar obrigatoriamente o procedimento e instaurar nova Sindicância, sem aproveitamento dos atos anteriores.",
          "c) Aditar o Termo Acusatório na audiência, admitir até 3 testemunhas adicionais de acusação e designar nova audiência, permitindo à defesa apresentar até 3 testemunhas adicionais.",
          "d) Manter a tipificação original, pois a autoridade não pode alterar o enquadramento jurídico após a produção de provas."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. O art. 6º permite nova tipificação após o interrogatório; se ela se fundar em fatos novos, a autoridade deve aditar o Termo Acusatório, podendo arrolar até 3 testemunhas adicionais de acusação, e designar nova audiência, na qual a defesa pode apresentar outras 3 testemunhas. A suprime a ciência e a oportunidade de defesa; B impõe arquivamento e Sindicância não previstos; D nega a possibilidade de nova tipificação. Fonte: Assuntos Jurídicos-administrativos.pdf, Portaria CORREGPM-1/360/13, art. 6º e parágrafo único (Bol G PM 211/2013, p. 3)."
      },
      {
        "id": 104,
        "subject": "JURIDICO",
        "topic": "Procedimento Disciplinar — remessa quando cabível Processo Regular",
        "text": "Ao julgar um Procedimento Disciplinar, a autoridade policial-militar entende que, diante da gravidade do caso, é cabível a instauração de Processo Regular. De acordo com o art. 8º da Portaria CORREGPM-1/360/13, como deve proceder?",
        "options": [
          "a) Aplicar a sanção disciplinar de sua competência e remeter os autos apenas para homologação.",
          "b) Converter automaticamente o procedimento em Investigação Preliminar, mantendo a competência decisória original.",
          "c) Arquivar o feito, pois o Procedimento Disciplinar não pode coexistir com Processo Regular.",
          "d) Deixar de aplicar sanção naquele julgamento e remeter os autos à autoridade superior para deliberação."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. O parágrafo único do art. 8º determina que a autoridade não aplique sanção quando julgar cabível a instauração de Processo Regular e remeta os autos à autoridade superior para deliberação. A prevê sanção antes da remessa; B impõe conversão para procedimento diverso; C determina arquivamento não previsto. Fonte: Assuntos Jurídicos-administrativos.pdf, Portaria CORREGPM-1/360/13, art. 8º e parágrafo único (Bol G PM 211/2013, p. 3)."
      },
      {
        "id": 105,
        "subject": "JURIDICO",
        "topic": "Procedimento Disciplinar — registro eletrônico dos atos",
        "text": "Durante a realização de audiência de Procedimento Disciplinar, a autoridade propõe registrar o ato por meio de gravação audiovisual e armazenamento digital. Conforme o art. 13 da Portaria CORREGPM-1/360/13, assinale a alternativa correta.",
        "options": [
          "a) O registro eletrônico é proibido, porque a audiência deve ser documentada exclusivamente por escrito.",
          "b) O uso de meios eletrônicos para registro é válido, mas não dispensa a lavratura do termo de audiência.",
          "c) O registro eletrônico substitui integralmente o termo de audiência, que se torna facultativo.",
          "d) O registro audiovisual depende, em todos os casos, de autorização judicial específica."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. O art. 13 admite meios eletrônicos, incluindo captura de som e imagem e armazenamento de arquivos digitais, para registro do Procedimento Disciplinar, mas ressalva que o termo de audiência não é dispensado. A proíbe meio expressamente aceito; C elimina requisito mantido pela norma; D acrescenta autorização não prevista no dispositivo. Fonte: Assuntos Jurídicos-administrativos.pdf, Portaria CORREGPM-1/360/13, art. 13 (Bol G PM 211/2013, p. 4)."
      },
      {
        "id": 106,
        "subject": "JURIDICO",
        "topic": "Procedimento Disciplinar — numeração dos procedimentos",
        "text": "Uma OPM de nível Batalhão está organizando os registros de Procedimentos Disciplinares instaurados no mesmo ano. Nos termos do art. 14 da Portaria CORREGPM-1/360/13, qual critério de numeração deve adotar?",
        "options": [
          "a) Numeração independente por Companhia, reiniciada a cada trimestre.",
          "b) Numeração única estadual, em ordem decrescente, sem distinção por ano.",
          "c) Numeração única no âmbito da OPM, em ordem crescente e por ano.",
          "d) Numeração por autoridade julgadora, sem vínculo com a OPM de instauração."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. O art. 14 determina numeração única no âmbito da OPM de nível Batalhão ou superior, por ordem crescente e por ano. A cria subdivisão por Companhia e trimestre; B muda o âmbito, a ordem e o critério anual; D troca a unidade de referência pela autoridade julgadora. Fonte: Assuntos Jurídicos-administrativos.pdf, Portaria CORREGPM-1/360/13, art. 14 (Bol G PM 211/2013, p. 4)."
      },
      {
        "id": 107,
        "subject": "JURIDICO",
        "topic": "Procedimento Disciplinar — notícia de transgressão atribuída a militar inativo",
        "text": "Chega à OPM documento que noticia possível transgressão disciplinar atribuída a policial militar já inativo. Conforme o art. 15 da Portaria CORREGPM-1/360/13, para quem deve ser remetido o documento para apreciação, conforme a condição do envolvido?",
        "options": [
          "a) Ao Subcomandante PM, se envolver Praça; ao Comandante-Geral, se envolver Oficial.",
          "b) Ao Comandante-Geral, se envolver Praça; ao Subcomandante PM, se envolver Oficial.",
          "c) Em todos os casos, exclusivamente ao Comandante da OPM em que o militar serviu por último.",
          "d) Em todos os casos, exclusivamente à Corregedoria, sem apreciação pelas autoridades indicadas na Portaria."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. O art. 15 determina remessa ao Subcomandante PM nos casos que envolvam Praças e ao Comandante-Geral nos casos que envolvam Oficiais, para apreciação. B inverte os destinatários; C e D substituem a rota expressamente indicada por destinatário único. Fonte: Assuntos Jurídicos-administrativos.pdf, Portaria CORREGPM-1/360/13, art. 15 (Bol G PM 211/2013, p. 4)."
      },
      {
        "id": 108,
        "subject": "JURIDICO",
        "topic": "Lei nº 18.442/26 — destinação dos Quadros de Oficiais",
        "text": "Considerando a estrutura dos Quadros prevista na Lei nº 18.442/26, assinale a alternativa que distingue corretamente a destinação do QOEM e do QOE.",
        "options": [
          "a) O QOEM destina-se exclusivamente às atividades de saúde; o QOE, ao comando e direção de toda a Instituição.",
          "b) O QOEM executa atividades musicais e culturais; o QOE é composto por militares destinados à execução das atividades de praça.",
          "c) O QOEM destina-se às funções de comando, chefia e direção; o QOE desempenha atividades complementares às previstas para o QOEM.",
          "d) O QOEM e o QOE possuem destinação idêntica e são diferenciados apenas pelo posto máximo de seus integrantes."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. O material da Lei nº 18.442/26 identifica o QOEM como destinado às funções de comando, chefia e direção e o QOE como destinado a atividades complementares às previstas para o QOEM. A atribui ao QOEM a área de saúde e inverte a função do QOE; B transfere ao QOEM a destinação do quadro musical e ao QOE a execução das atividades de praça; D elimina a distinção funcional descrita. Fonte: Assuntos Jurídicos-administrativos.pdf, material referente à Lei nº 18.442/26, quadro de destinação dos Quadros, p. 14 do PDF."
      },
      {
        "id": 109,
        "subject": "JURIDICO",
        "topic": "Lei nº 18.442/26 — critérios para definição do efetivo",
        "text": "Ao definir o efetivo da Polícia Militar, a Lei nº 18.442/26 prevê a consideração de fatores territoriais, demográficos e institucionais. Qual alternativa reúne critérios indicados no material autorizado?",
        "options": [
          "a) Apenas o número de ocorrências atendidas no ano anterior e o total de viaturas disponíveis.",
          "b) Extensão territorial, população, riscos de desastres, desenvolvimento humano, índices de criminalidade e condições socioeconômicas.",
          "c) Exclusivamente disponibilidade orçamentária, número de promoções previstas e quantitativo de cursos em andamento.",
          "d) Somente a distribuição atual de efetivo por OPM e a quantidade de armamentos cadastrados."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. O material referente ao art. 3º da Lei nº 18.442/26 lista território, população, desastres, desenvolvimento humano, índices de criminalidade e condições socioeconômicas como fatores considerados na definição do efetivo. A e D substituem a lista por indicadores não apresentados como conjunto normativo; C confunde critérios de definição do efetivo com disponibilidade orçamentária e distribuição, tratadas em etapa distinta. Fonte: Assuntos Jurídicos-administrativos.pdf, material da Lei nº 18.442/26, art. 3º, p. 11–12 do PDF."
      },
      {
        "id": 110,
        "subject": "JURIDICO",
        "topic": "RDPM — efeitos do cancelamento de sanções disciplinares",
        "text": "Após requerimento do interessado, o Comandante-Geral defere o cancelamento de registros de sanções disciplinares, preenchidos os requisitos do art. 70 do RDPM. Qual efeito decorre do cancelamento, segundo o § 2º desse artigo?",
        "options": [
          "a) As sanções canceladas são consideradas inexistentes desde a data em que foram aplicadas, com revisão automática dos atos administrativos posteriores.",
          "b) O cancelamento retroage à data da transgressão, mas não alcança atos administrativos publicados posteriormente.",
          "c) O cancelamento produz efeitos retroativos apenas para fins de classificação de comportamento.",
          "d) O cancelamento não tem efeito retroativo nem assegura direito à revisão de outros atos administrativos decorrentes das sanções canceladas."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. O art. 70, § 2º, do RDPM estabelece que o cancelamento “não terá efeito retroativo” e não motivará direito de revisão de outros atos administrativos decorrentes das sanções canceladas. A e B atribuem retroatividade e revisão; C cria efeito retroativo parcial que o texto não prevê. Fonte: Assuntos Jurídicos-administrativos.pdf, LC nº 893/01 (RDPM), art. 70, § 2º, p. 101 do PDF."
      },
      {
        "id": 111,
        "subject": "ORGANIZACIONAL",
        "topic": "I-36-PM — autoridade competente para sobrestamento de férias e licença-prêmio",
        "text": "Verificada uma das situações previstas no art. 80 das Instruções para os Afastamentos na Polícia Militar, é necessário sobrestar férias ou licença-prêmio do policial militar. Quem deve efetuar o sobrestamento por meio de publicação em Boletim Interno?",
        "options": [
          "a) A Diretoria de Pessoal, em todos os casos, independentemente da OPM de classificação.",
          "b) O Subcomandante PM, mediante autorização prévia do Comandante-Geral.",
          "c) O Comandante, Chefe ou Diretor da OPM, em relação ao efetivo sob seu comando.",
          "d) A Junta de Saúde que identificou o motivo do afastamento, por despacho médico."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. O art. 80, § 1º, atribui ao Cmt/Ch/Dir de OPM o sobrestamento, por publicação em Bol Int, das férias e licenças-prêmio do efetivo sob seu comando nas situações previstas no artigo. A, B e D transferem a competência para órgãos ou autoridades não indicados nesse dispositivo. Fonte: Assuntos Organizacionais.pdf, I-36-PM, art. 80, § 1º, p. impressa 27–28."
      },
      {
        "id": 112,
        "subject": "ORGANIZACIONAL",
        "topic": "I-36-PM — prevalência de férias e licença-prêmio previamente programadas",
        "text": "Um policial militar tem férias previamente programadas e, antes do início do gozo, surge fato que poderia motivar outro afastamento regulamentar. Conforme o art. 81 das I-36-PM, qual regra geral deve ser observada?",
        "options": [
          "a) As férias ou licença-prêmio previamente programadas prevalecem sobre os demais afastamentos, sem prejuízo de eventual alteração da data de início ou sobrestamento, nos termos das próprias Instruções.",
          "b) O afastamento superveniente sempre prevalece, ainda que as férias ou a licença-prêmio já estejam programadas.",
          "c) A programação prévia torna impossível qualquer alteração da data de início ou sobrestamento, mesmo nas hipóteses previstas nas Instruções.",
          "d) O Comandante deve cancelar definitivamente o afastamento programado e converter o período em dispensa-recompensa."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. O art. 81 estabelece que férias e licença-prêmio previamente programadas devem prevalecer sobre outros afastamentos, ressalvando a possibilidade de alteração da data de início ou sobrestamento conforme os arts. 6º e 80. B inverte a regra; C ignora as ressalvas expressas; D cria conversão e cancelamento definitivo não previstos. Fonte: Assuntos Organizacionais.pdf, I-36-PM, art. 81, p. impressa 28."
      },
      {
        "id": 113,
        "subject": "ORGANIZACIONAL",
        "topic": "I-36-PM — direito à folga quando não cumprido o turno",
        "text": "Um policial militar sujeito a escala de serviço deixa de cumprir determinado turno. À luz do art. 85 das I-36-PM, em qual hipótese a folga a que teria direito poderá ser usufruída?",
        "options": [
          "a) Sempre que o turno deixar de ser cumprido, independentemente de ter sido concedido afastamento que abranja o período.",
          "b) Somente se a concessão de algum afastamento abranger o período correspondente, ressalvada a hipótese de afastamento do turno decorrente de dispensa do serviço.",
          "c) Apenas quando houver autorização judicial, pois a norma não trata de folgas decorrentes de afastamento.",
          "d) Nunca, porque a falta de cumprimento do turno elimina definitivamente qualquer direito à folga."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. O art. 85 prevê que a folga só poderá ser usufruída se algum afastamento concedido abranger o período do turno não cumprido; o parágrafo único excepciona o afastamento decorrente de dispensa do serviço. A dispensa a condição de cobertura por afastamento; C acrescenta autorização judicial inexistente; D transforma a regra em perda definitiva, o que o artigo não estabelece. Fonte: Assuntos Organizacionais.pdf, I-36-PM, art. 85 e parágrafo único, p. impressa 29."
      },
      {
        "id": 114,
        "subject": "ORGANIZACIONAL",
        "topic": "SisTAF — requisito de aprovação no TAF-3 durante a regra de transição",
        "text": "Em 2026, um policial militar realiza o TAF-3 anual. Considerando a regra de transição do Anexo C à Diretriz nº PM3-001/03/25, qual requisito de pontuação se aplica nesse período?",
        "options": [
          "a) Atingir 250 pontos no total e pelo menos 20 pontos em cada teste, sem índice de suficiência nem cômputo da natação de 50 metros na pontuação final.",
          "b) Atingir 300 pontos no total e pelo menos 30 pontos em cada teste, computando obrigatoriamente a natação de 50 metros.",
          "c) Atingir 250 pontos no total, sem pontuação mínima por teste, computando a natação apenas se o avaliado for do sexo masculino.",
          "d) Atingir 300 pontos no total, com pelo menos 20 pontos em cada teste, mas sem computar a natação de 50 metros."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. O Anexo C, item 1.3.1, estabelece, a partir de 1º de janeiro de 2025, 250 pontos no total e mínimo de 20 em cada teste; a natação de 50 m não tem índice de suficiência nem é computada na pontuação final. O patamar de 300 pontos começa em 1º de janeiro de 2029 (item 1.3.2), por isso B e D antecipam a regra futura; C elimina o mínimo por teste e cria distinção por sexo não prevista para a exclusão da natação. Fonte: Assuntos Organizacionais.pdf, Diretriz nº PM3-001/03/25, Anexo C, itens 1.3.1 e 1.3.2, fl. 20."
      },
      {
        "id": 115,
        "subject": "ORGANIZACIONAL",
        "topic": "SisTAF — periodicidade, condição e validade do TAF-3",
        "text": "Sobre a aplicação e a validade do TAF-3, analise as afirmações:\n\nI. A aplicação anual do TAF-3 é obrigatória a todos os policiais militares e está condicionada à realização da Inspeção Anual de Saúde.\nII. O nível de condicionamento físico aferido pelo TAF-3 tem validade de um ano, contado da data da última prova da bateria.\nIII. O policial militar considerado apto no TAF-3 não pode ser reavaliado durante o prazo de validade do teste.\n\nAssinale a alternativa correta.",
        "options": [
          "a) Apenas I.",
          "b) Apenas II e III.",
          "c) Apenas I e III.",
          "d) Apenas I e II."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. O Anexo C, item 1.2, condiciona a aplicação anual obrigatória do TAF-3 à Inspeção Anual de Saúde. A validade de um ano e a contagem a partir da última prova da bateria constam dos itens 6.5.4.6 e 6.5.4.6.1 da Diretriz. O item 6.5.4.7 permite reavaliação para melhorar o resultado, tornando III falsa. Fonte: Assuntos Organizacionais.pdf, Diretriz nº PM3-001/03/25, itens 6.5.4.6, 6.5.4.6.1 e 6.5.4.7; Anexo C, item 1.2."
      },
      {
        "id": 116,
        "subject": "ORGANIZACIONAL",
        "topic": "SisTAF — indicação da categoria de TAF-4 em caso de restrição médica",
        "text": "Um Oficial Médico do QOS considera o policial militar apto para o serviço, mas identifica restrição que exige avaliação física adaptada. Conforme a Diretriz nº PM3-001/03/25, qual providência é exigida para definir o TAF-4 aplicável?",
        "options": [
          "a) O Treinador Físico escolhe livremente a categoria do TAF-4 com base apenas no desempenho anterior do policial.",
          "b) O policial escolhe a categoria de TAF-4 que considere menos exigente, sem indicação médica.",
          "c) O profissional médico do QOS deve indicar expressamente a categoria de TAF-4 a que o policial será submetido, e essa indicação vincula o Treinador Físico.",
          "d) A OPM deve aplicar o TAF-3 ordinário em todos os casos, pois o TAF-4 é facultativo."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. O item 6.5.4.5 determina que, quando o Oficial QOS declarar o policial apto com restrição, indique expressamente a categoria de TAF-4, sendo a indicação obrigatória para o Treinador Físico. A e B transferem a escolha para pessoas sem essa competência; D ignora a previsão de TAF-4 para aptos com restrições médicas. Fonte: Assuntos Organizacionais.pdf, Diretriz nº PM3-001/03/25, item 6.5.4.5 e Anexo D, itens 2 e 3."
      },
      {
        "id": 117,
        "subject": "ORGANIZACIONAL",
        "topic": "TCI — distinção entre Calendário do TCI e Calendário Técnico-Operacional",
        "text": "Na organização anual do Treinamento Continuado Institucional (TCI), a OPM precisa distinguir o Calendário do TCI do Calendário Técnico-Operacional (CTO). Conforme a Diretriz nº PM3-001/03/24, assinale a alternativa correta.",
        "options": [
          "a) O Calendário do TCI é elaborado exclusivamente pela EEF e contém apenas instruções técnico-operacionais; o CTO é a programação local de treinamentos físicos.",
          "b) O Calendário do TCI é a programação anual dos treinamentos físicos e técnico-operacionais nas OPM; o CTO é elaborado anualmente pela EEF e reúne assuntos de interesse institucional para instruções técnico-operacionais a serem aplicadas no TCI.",
          "c) Ambos são calendários mensais elaborados pelo COPOM, voltados exclusivamente à escala de patrulhamento.",
          "d) O CTO contém apenas avaliações físicas individuais e o Calendário do TCI é facultativo para as OPM."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Os itens 6.1.2 e 6.1.3 definem, respectivamente, o Calendário do TCI como programação anual de treinamentos físicos e técnico-operacionais das OPM e o CTO como calendário anual elaborado pela EEF com assuntos institucionais para instruções técnico-operacionais do TCI. A inverte as definições; C atribui elaboração e conteúdo não previstos; D restringe indevidamente o CTO e torna facultativa uma programação definida na norma. Fonte: Assuntos Organizacionais.pdf, Diretriz nº PM3-001/03/24, itens 6.1.2 e 6.1.3, fl. 2."
      },
      {
        "id": 118,
        "subject": "ORGANIZACIONAL",
        "topic": "TCI — finalidade e execução institucional",
        "text": "Considerando a finalidade e a missão do Treinamento Continuado Institucional (TCI), assinale a alternativa que melhor corresponde à Diretriz nº PM3-001/03/24.",
        "options": [
          "a) Concentrar instruções físicas e técnico-operacionais apenas em cursos presenciais de especialização, fora do turno de serviço.",
          "b) Executar treinamento físico exclusivamente para policiais militares que atuem em unidades especializadas, sem calendário anual.",
          "c) Substituir o Estágio de Atualização Profissional e as Instruções de Nivelamento em Procedimentos Operacionais por sessões de treinamento físico.",
          "d) Desenvolver modelo padronizado de treinamento físico e técnico-operacional, contínuo e programado para todo o efetivo, a ser executado durante o turno de serviço."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. O item 4.1 fixa o objetivo de desenvolver modelo institucional padronizado de treinamento físico e técnico-operacional durante o turno, contínuo e programado para todo o efetivo; o item 5 atribui coordenação, execução, monitoramento e controle aos órgãos e comandos indicados. A e B restringem público e deslocam o treinamento para fora do turno; C contraria o item 6.7.2, que afirma que o TCI não dispensa EAP, INPO e demais atividades de ensino. Fonte: Assuntos Organizacionais.pdf, Diretriz nº PM3-001/03/24, itens 4.1, 5 e 6.7.2, fls. 1–3."
      },
      {
        "id": 119,
        "subject": "ORGANIZACIONAL",
        "topic": "Regime de trabalho — autorização excepcional de horário administrativo",
        "text": "Um policial militar requer horário de expediente administrativo diferente da regra geral. Segundo o art. 16 da Portaria do Cmt G PM1-7/02/23, qual conjunto de condições deve ser observado para eventual autorização?",
        "options": [
          "a) A autorização é automática, por prazo indeterminado, desde que o interessado comprove matrícula em curso.",
          "b) Basta que o horário alternativo seja cumprido entre 06h e 23h, sem exigência de jornada mínima ou decisão individualizada.",
          "c) A autorização pode ser concedida pelo Cmt de OPM a partir do nível de Batalhão, mediante requerimento, em caráter individual, excepcional e por tempo determinado, respeitando jornada mínima de 40 horas semanais e faixa entre 07h e 19h; não gera direito subjetivo e pode ser revogada motivadamente.",
          "d) A autorização compete exclusivamente à Diretoria de Pessoal, não pode ser revogada e permite dispensar a jornada semanal mínima."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. O art. 16 permite ao Cmt de OPM, a partir do nível de Batalhão ou superior, autorizar horário diverso a requerimento do interessado, desde que individualizado, excepcional, por tempo determinado, com mínimo de 40 horas semanais e dentro de 07h a 19h; o parágrafo único afasta direito subjetivo e admite revogação motivada por necessidade do serviço. A torna automática e indefinida; B muda a faixa horária e elimina requisitos; D desloca a competência e nega a revogabilidade. Fonte: Assuntos Organizacionais.pdf, Portaria do Cmt G PM1-7/02/23, art. 16, Bol G PM 101/23, p. 5."
      },
      {
        "id": 120,
        "subject": "ORGANIZACIONAL",
        "topic": "Regime de trabalho — interrupção da contagem e fruição da folga mensal obrigatória",
        "text": "Um policial militar em escala operacional deixa de cumprir um turno por motivo que não corresponde à fruição de folga mensal obrigatória de período anterior. Depois de apurado o período de folga mensal, pretende acumulá-la para usufruir em momento posterior ao prazo previsto na Portaria. À luz do art. 12 da Portaria PM1-7/02/23, assinale a alternativa correta.",
        "options": [
          "a) O não cumprimento do turno interrompe a contagem do período de apuração; a folga apurada deve ser usufruída nos 30 dias subsequentes e não pode ser acumulada para fruição futura.",
          "b) O não cumprimento do turno não interfere na contagem, e a folga pode ser acumulada por até 90 dias.",
          "c) A contagem somente é interrompida quando o policial faltar sem justificativa, e a folga pode ser usufruída a qualquer tempo.",
          "d) A contagem é interrompida inclusive quando o policial usufrui folga mensal obrigatória de período anterior, e a nova folga deve ser concedida no mesmo mês civil."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. O art. 12, § 3º, determina que o não cumprimento do turno por qualquer causa interrompe a contagem, exceto o gozo da folga mensal obrigatória relativa a período anterior. O § 4º exige fruição nos 30 dias subsequentes ao período de apuração e proíbe acumulação futura. B e C eliminam a interrupção e inventam prazo; D ignora a exceção do § 3º e substitui o prazo de 30 dias por mês civil. Fonte: Assuntos Organizacionais.pdf, Portaria do Cmt G PM1-7/02/23, art. 12, §§ 3º e 4º, Bol G PM 101/23, p. 4."
      },
{
        "id": 121,
        "subject": "JURIDICO",
        "topic": "RDPM — agravantes e exceção ligada à execução do serviço",
        "text": "QUESTÃO 121 - Na análise de uma transgressão disciplinar, verifica-se que a conduta ocorreu durante a execução do serviço. À luz do art. 36 do RDPM, assinale a alternativa correta.",
        "options": [
          "a) A prática durante o serviço constitui sempre agravante, ainda que a transgressão seja inerente à própria execução da atividade.",
          "b) A prática durante o serviço é circunstância atenuante quando não houver dano ao patrimônio público.",
          "c) A prática durante o serviço é agravante, mas essa circunstância não se aplica quando, pela natureza, a transgressão for inerente à execução do serviço.",
          "d) A prática durante o serviço somente pode ser considerada agravante se houver reincidência específica."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fonte: Assuntos Juridicos-administrativos.pdf, RDPM (LC nº 893/01), art. 36, inciso V e § 1º. Evidência: o inciso V prevê como agravante a falta praticada durante a execução do serviço; o § 1º excepciona os casos em que, pela natureza, a transgressão seja inerente à execução do serviço. A elimina a exceção; B cria atenuante não prevista; D condiciona a agravante à reincidência, requisito ausente no inciso."
      },
      {
        "id": 122,
        "subject": "JURIDICO",
        "topic": "RDPM — etapas da aplicação da sanção disciplinar",
        "text": "QUESTÃO 122 - Ao examinar a aplicação de sanção disciplinar, uma autoridade pretende identificar os componentes que integram esse ato decisório, conforme o art. 37 do RDPM. Assinale a alternativa correta.",
        "options": [
          "a) A aplicação abrange a análise do fato, das circunstâncias da transgressão, o enquadramento e a publicação decorrente.",
          "b) A aplicação limita-se à escolha da sanção e à sua publicação, ficando a análise das circunstâncias reservada ao recurso.",
          "c) A aplicação compreende apenas a análise do fato e a classificação do comportamento, sem necessidade de enquadramento.",
          "d) A aplicação começa pela publicação e, depois, realiza a análise das circunstâncias e a descrição da transgressão."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fonte: Assuntos Juridicos-administrativos.pdf, RDPM, art. 37. Evidência: “A aplicação da sanção disciplinar abrange a análise do fato [...], a análise das circunstâncias que determinaram a transgressão, o enquadramento e a decorrente publicação”. B omite fases expressas; C exclui circunstâncias e enquadramento; D inverte a sequência ao colocar a publicação antes da análise e do enquadramento."
      },
      {
        "id": 123,
        "subject": "JURIDICO",
        "topic": "RDPM — conteúdo do enquadramento disciplinar",
        "text": "QUESTÃO 123 - Ao elaborar o enquadramento disciplinar, a autoridade deve observar os elementos previstos no art. 38 do RDPM. Qual alternativa contém apenas elementos exigidos pelo dispositivo?",
        "options": [
          "a) A indicação da ação ou omissão, a tipificação, a decisão e a assinatura, dispensadas as alegações de defesa e a classificação do comportamento.",
          "b) A indicação da ação ou omissão, a tipificação, as causas de justificação ou circunstâncias pertinentes, a decisão, a classificação do comportamento e as alegações de defesa.",
          "c) A descrição da ação ou omissão, a indicação do órgão criminal competente e a transcrição integral de todos os depoimentos, obrigatoriamente.",
          "d) A indicação da tipificação e da sanção, sendo vedada a inclusão de observações sobre o início ou o local de cumprimento."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fonte: Assuntos Juridicos-administrativos.pdf, RDPM, art. 38, incisos I a VIII. Evidência: o enquadramento deve indicar a ação ou omissão, a tipificação, as causas de justificação ou circunstâncias atenuantes/agravantes, a decisão, a classificação do comportamento, as alegações de defesa, observações cabíveis e a assinatura. A exclui elementos expressos; C acrescenta exigências não previstas no artigo; D contraria o inciso VII, que admite observações sobre cumprimento e outros dados necessários."
      },
      {
        "id": 124,
        "subject": "JURIDICO",
        "topic": "RDPM — publicação da sanção e tratamento da advertência",
        "text": "QUESTÃO 124 - Considerando o art. 39 do RDPM, assinale a alternativa INCORRETA sobre a publicação e os efeitos do ato disciplinar.",
        "options": [
          "a) A publicação divulga oficialmente o ato administrativo referente à aplicação da sanção ou à sua justificação.",
          "b) A publicação dá início aos efeitos do ato disciplinar.",
          "c) A advertência não deve constar de publicação em boletim, embora figure no registro de informações de punições dos oficiais ou na nota de corretivo das praças.",
          "d) A advertência deve constar obrigatoriamente de publicação em boletim, pois somente a publicação permite seu registro funcional."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. Fonte: Assuntos Juridicos-administrativos.pdf, RDPM, art. 39 e parágrafo único. Evidência: o caput define a publicação como divulgação oficial e atribui a ela o início dos efeitos; o parágrafo único exclui a advertência da publicação em boletim e determina seu registro pelos meios ali indicados. A e B correspondem ao caput; C corresponde ao parágrafo único; D contradiz expressamente a exceção."
      },
      {
        "id": 125,
        "subject": "JURIDICO",
        "topic": "RDPM — independência das responsabilidades disciplinar, civil e criminal",
        "text": "QUESTÃO 125 - O mesmo fato atribuído a um policial militar é objeto de apuração criminal e pode configurar transgressão disciplinar. De acordo com o art. 44 do RDPM, assinale a alternativa correta.",
        "options": [
          "a) A instauração de ação criminal impede a imposição de sanção disciplinar até o trânsito em julgado.",
          "b) A sanção disciplinar substitui a responsabilidade civil quando o fato ocorre durante o serviço.",
          "c) A sanção disciplinar não exime o punido das responsabilidades civil e criminal, e a instauração de inquérito ou ação criminal não impede sanção administrativa pelo mesmo fato.",
          "d) A responsabilidade disciplinar somente pode ser examinada após decisão definitiva nas esferas civil e criminal."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fonte: Assuntos Juridicos-administrativos.pdf, RDPM, art. 44 e parágrafo único. Evidência: o artigo declara que a sanção disciplinar não exime as responsabilidades civil e criminal; o parágrafo único afirma que inquérito ou ação criminal não impedem sanção administrativa pelo mesmo fato. A e D estabelecem dependência que o dispositivo afasta; B cria substituição não prevista."
      },
      {
        "id": 126,
        "subject": "JURIDICO",
        "topic": "RDPM — pluralidade de transgressões conexas e não conexas",
        "text": "QUESTÃO 126 - Um procedimento apura duas transgressões disciplinares atribuídas ao mesmo policial militar. Conforme o art. 45 do RDPM, qual critério deve orientar a aplicação das sanções?",
        "options": [
          "a) As sanções correspondentes serão impostas isoladamente quando as transgressões não tiverem conexão; se forem conexas, as de menor gravidade serão consideradas agravantes da transgressão principal.",
          "b) Todas as transgressões deverão ser absorvidas pela de maior gravidade, independentemente de conexão.",
          "c) As sanções serão sempre aplicadas isoladamente, inclusive quando as transgressões forem conexas.",
          "d) As transgressões conexas serão consideradas atenuantes da infração principal, enquanto as não conexas formarão uma única transgressão."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fonte: Assuntos Juridicos-administrativos.pdf, RDPM, art. 45. Evidência: o artigo determina aplicação isolada quando não houver conexão e, em caso de conexão, considera as transgressões de menor gravidade circunstâncias agravantes da principal. B generaliza absorção não prevista; C ignora o tratamento específico das conexas; D inverte o efeito previsto."
      },
      {
        "id": 127,
        "subject": "JURIDICO",
        "topic": "RDPM — transgressão envolvendo militares de mais de uma Unidade",
        "text": "QUESTÃO 127 - Uma transgressão disciplinar envolve policiais militares pertencentes a mais de uma Unidade. À luz do art. 46 do RDPM, assinale a alternativa correta.",
        "options": [
          "a) Cada Comandante de Unidade deverá necessariamente apurar separadamente a conduta de seus subordinados, sem comunicação entre os autos.",
          "b) A apuração cabe exclusivamente ao Comandante-Geral, ainda que o fato esteja circunscrito à área de outro comando.",
          "c) A autoridade da Unidade do militar mais antigo será sempre competente, independentemente do local do fato.",
          "d) Cabe ao comandante do policiamento da área territorial onde ocorreu o fato apurar ou determinar a apuração e, se necessário, remeter os autos à autoridade funcional superior comum aos envolvidos."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. Fonte: Assuntos Juridicos-administrativos.pdf, RDPM, art. 46. Evidência: o dispositivo atribui a apuração ao comandante do policiamento da área territorial do fato e prevê remessa, se necessária, à autoridade funcional superior comum. A impõe apurações separadas; B transfere competência sem base; C substitui o critério territorial por antiguidade."
      },
      {
        "id": 128,
        "subject": "JURIDICO",
        "topic": "RDPM — autoridades disciplinares de níveis hierárquicos diferentes",
        "text": "QUESTÃO 128 - Duas autoridades de níveis hierárquicos diferentes, ambas com ação disciplinar sobre o policial militar, tomam conhecimento da mesma transgressão. Conforme o art. 47 do RDPM, assinale a alternativa correta.",
        "options": [
          "a) A autoridade de menor hierarquia deve apurar obrigatoriamente, cabendo à superior apenas publicar a sanção.",
          "b) Compete à autoridade de maior hierarquia apurar ou determinar que a autoridade menos graduada o faça; se a apuração ficar com a menos graduada, a punição será aplicada após aprovação da superior quando esta assim determinar.",
          "c) A autoridade que primeiro recebeu a notícia exclui automaticamente a competência da outra.",
          "d) A autoridade de maior hierarquia deve assumir pessoalmente todos os atos, sendo vedada a determinação de apuração pela autoridade menos graduada."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fonte: Assuntos Juridicos-administrativos.pdf, RDPM, art. 47 e parágrafo único. Evidência: o caput atribui à autoridade de maior hierarquia a apuração ou a determinação de que a menos graduada apure; o parágrafo condiciona a aprovação da punição à determinação da superior. A inverte a regra; C cria critério temporal inexistente; D elimina a possibilidade expressa de determinar a apuração pela menos graduada."
      },
      {
        "id": 129,
        "subject": "JURIDICO",
        "topic": "RDPM — interrogatório ou sanção em estado de embriaguez",
        "text": "QUESTÃO 129 - No momento em que seria interrogado em procedimento disciplinar, o policial militar apresenta sinais de embriaguez. Considerando o art. 50 do RDPM, assinale a alternativa correta.",
        "options": [
          "a) O interrogatório poderá ocorrer se houver autorização escrita do superior imediato.",
          "b) A sanção poderá ser aplicada, mas o interrogatório deverá ser adiado.",
          "c) O militar não será interrogado nem receberá sanção enquanto estiver em estado de embriaguez ou sob ação de substância que determine dependência física ou psíquica, devendo, se necessário, ser desde logo recolhido disciplinarmente.",
          "d) A autoridade deverá encerrar definitivamente o procedimento, pois a condição impede qualquer apuração posterior."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fonte: Assuntos Juridicos-administrativos.pdf, RDPM, art. 50. Evidência: o artigo veda interrogatório e aplicação de sanção enquanto o militar estiver embriagado ou sob ação de substância entorpecente ou que determine dependência física ou psíquica; prevê, se necessário, recolhimento disciplinar desde logo. A e B afastam parcialmente a vedação; D cria encerramento definitivo que não consta do artigo."
      },
      {
        "id": 130,
        "subject": "JURIDICO",
        "topic": "Procedimento Disciplinar — termo único da audiência",
        "text": "QUESTÃO 130 - Encerrada a audiência de instrução e julgamento de Procedimento Disciplinar, a autoridade precisa formalizar o que ocorreu. Nos termos do art. 9º da Portaria CORREGPM-1/360/13, assinale a alternativa correta.",
        "options": [
          "a) Deve ser lavrado um único termo, assinado pela autoridade policial-militar, testemunhas, acusado e defensor constituído, com resumo dos depoimentos e razões de defesa, incidentes e decisão motivada.",
          "b) Devem ser lavrados termos separados para cada depoimento, sendo dispensada a assinatura do acusado.",
          "c) A gravação audiovisual substitui integralmente o termo escrito da audiência, inclusive a decisão motivada.",
          "d) O termo deve conter somente a decisão final, sem referência às razões de defesa ou aos incidentes ocorridos."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fonte: Assuntos Juridicos-administrativos.pdf, Portaria CORREGPM-1/360/13, art. 9º. Evidência: o dispositivo exige “único termo”, com as assinaturas indicadas e breve resumo dos depoimentos, razões de defesa, incidentes e decisão motivada. B fragmenta o termo e dispensa assinatura prevista; C contraria o art. 13, que mantém a exigência do termo; D omite conteúdo exigido."
      },
      {
        "id": 131,
        "subject": "JURIDICO",
        "topic": "Procedimento Disciplinar — aprovação do ato decisório",
        "text": "QUESTÃO 131 - A autoridade instauradora profere decisão em Procedimento Disciplinar. Conforme o art. 10 da Portaria CORREGPM-1/360/13, qual providência deve ser observada?",
        "options": [
          "a) A decisão só precisa ser submetida à aprovação do Comandante de Unidade quando houver aplicação de sanção privativa de liberdade.",
          "b) A decisão deve ser submetida à aprovação de ato pelo Comandante de Unidade, independentemente do mérito do julgamento.",
          "c) A decisão dispensa aprovação superior quando o acusado tiver confessado os fatos.",
          "d) A aprovação pelo Comandante de Unidade ocorre apenas quando a decisão for absolutória."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fonte: Assuntos Juridicos-administrativos.pdf, Portaria CORREGPM-1/360/13, art. 10. Evidência: “A decisão da autoridade instauradora [...] independente do mérito do julgamento, deverá ser submetida à aprovação de ato pelo Comandante de Unidade”. A, C e D condicionam a aprovação a hipóteses que o artigo não estabelece."
      },
      {
        "id": 132,
        "subject": "JURIDICO",
        "topic": "Procedimento Disciplinar — suspensão dos prazos por afastamento regulamentar",
        "text": "QUESTÃO 132 - Durante a tramitação de Procedimento Disciplinar, o acusado passa a usufruir afastamento regulamentar. De acordo com o art. 11 da Portaria CORREGPM-1/360/13, qual efeito ocorre sobre os prazos?",
        "options": [
          "a) Os prazos continuam correndo, mas a autoridade deve conceder prazo adicional ao final.",
          "b) Os prazos são reiniciados integralmente na data do afastamento, ainda que parte deles já tenha transcorrido.",
          "c) O procedimento é extinto e deverá ser instaurado novamente após o retorno do acusado.",
          "d) Os prazos ficam suspensos e a contagem é retomada a partir da reapresentação do acusado."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. Fonte: Assuntos Juridicos-administrativos.pdf, Portaria CORREGPM-1/360/13, art. 11. Evidência: “No caso de afastamento regulamentar do acusado, os prazos do Procedimento Disciplinar são suspensos, reiniciada a contagem a partir da sua reapresentação”. A mantém a contagem; B reinicia sem base; C cria extinção do procedimento não prevista."
      },
      {
        "id": 133,
        "subject": "JURIDICO",
        "topic": "Lei nº 18.442/26 — condicionantes gerais de acesso e promoção",
        "text": "QUESTÃO 133 - Ao analisar um acesso ou promoção previstos na Lei nº 18.442/26, o setor de pessoal verifica o preenchimento dos requisitos individuais pelo militar. Qual condição geral também deve ser observada, conforme o material autorizado?",
        "options": [
          "a) O acesso pode ocorrer sem vaga quando houver mérito intelectual reconhecido.",
          "b) A disponibilidade orçamentária é exigida somente para promoções ao último posto de cada Quadro.",
          "c) O acesso e a promoção dependem, em qualquer hipótese, da existência de vagas e de disponibilidade orçamentária e financeira, além do cumprimento da legislação de promoções e do Sistema de Ensino PMESP.",
          "d) A existência de vaga substitui o cumprimento dos requisitos previstos na legislação de promoções e no Sistema de Ensino."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fonte: Assuntos Juridicos-administrativos.pdf, material da Lei nº 18.442/26, quadro sobre acesso e promoção, com referência ao Decreto de Distribuição e à legislação de promoções e ao Sistema de Ensino PMESP. Evidência: o texto condiciona o acesso e a promoção, em qualquer hipótese, a vagas, disponibilidade orçamentária e financeira e cumprimento da legislação aplicável. A, B e D eliminam uma ou mais condições expressamente indicadas."
      },
      {
        "id": 134,
        "subject": "JURIDICO",
        "topic": "Lei nº 18.442/26 — promoção de Aspirante a Oficial do QOEM",
        "text": "QUESTÃO 134 - Um Aspirante a Oficial PM concluiu com aproveitamento o estágio administrativo-operacional, mas ainda não completou um ano na graduação. Considerando o quadro de promoção reproduzido no material da Lei nº 18.442/26, assinale a alternativa correta.",
        "options": [
          "a) A promoção ao posto de 1º Tenente PM do QOEM depende do cumprimento do estágio administrativo-operacional e de, no mínimo, um ano na graduação, além das condições gerais de acesso e promoção.",
          "b) A conclusão do estágio, isoladamente, assegura promoção imediata, independentemente do tempo na graduação e da existência de vaga.",
          "c) A promoção ocorre após dois anos na graduação, mesmo que o estágio administrativo-operacional não tenha sido concluído.",
          "d) O Aspirante somente poderá ser promovido ao QOEM após concluir o Curso de Habilitação de Oficial do Quadro de Oficiais Especialistas."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fonte: Assuntos Juridicos-administrativos.pdf, Lei nº 18.442/26, quadro de acesso e promoção, tópico “Quadro de Oficiais de Estado-Maior”. Evidência: o material indica que o Aspirante, após cumprir com aproveitamento o estágio administrativo-operacional e possuir no mínimo um ano na graduação, será promovido por merecimento intelectual ao posto de 1º Tenente PM do QOEM; o quadro geral também condiciona promoções a vagas e disponibilidade orçamentária. B omite requisitos; C altera prazo e elimina o estágio; D confunde o requisito do QOE/QOM com o do QOEM."
      },
      {
        "id": 135,
        "subject": "JURIDICO",
        "topic": "RDPM — requisição de apresentação do transgressor",
        "text": "QUESTÃO 135 - Uma autoridade disciplinar precisa aplicar sanção a policial militar que se encontra a serviço ou à disposição de outra autoridade. Nos termos do art. 49 do RDPM, qual providência é prevista?",
        "options": [
          "a) Encaminhar a decisão diretamente ao setor de pessoal, sem comunicação à autoridade que detém o militar.",
          "b) Requisitar a apresentação do transgressor; se o local de cumprimento não for a respectiva OPM, indicar o local designado para sua apresentação.",
          "c) Transferir definitivamente o militar para a OPM da autoridade sancionadora antes da aplicação da sanção.",
          "d) Solicitar ao acusado que escolha livremente o local de cumprimento, sem determinação da autoridade."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fonte: Assuntos Juridicos-administrativos.pdf, RDPM, art. 49 e parágrafo único. Evidência: a autoridade deve requisitar a apresentação do transgressor que esteja a serviço ou à disposição de outra autoridade; quando o local de cumprimento não for a respectiva OPM, deve indicar o local de apresentação. A omite a requisição; C transforma apresentação em movimentação definitiva; D transfere ao acusado decisão atribuída à autoridade."
      },
      {
        "id": 136,
        "subject": "ORGANIZACIONAL",
        "topic": "I-2-PM — condições para movimentação por conveniência própria",
        "text": "QUESTÃO 136 - Um policial militar solicita movimentação por conveniência própria. Considerando o art. 9º das I-2-PM, assinale a alternativa que reúne condições expressamente previstas para o pedido.",
        "options": [
          "a) Estar no comportamento excepcional, se praça, e não possuir qualquer registro disciplinar anterior.",
          "b) Ter anuência prévia de todos os comandantes da cadeia hierárquica e comprovar cinco anos na OPM, em qualquer hipótese.",
          "c) Não estar respondendo a processo disciplinar, sendo dispensado o prazo mínimo previsto em edital ou instrução de concurso.",
          "d) Se praça, estar no mínimo no bom comportamento; não responder a processo disciplinar ou IPM que recomende permanência na OPM; e ter cumprido o prazo mínimo de permanência fixado em edital ou instrução."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. Fonte: Assuntos Organizacionais.pdf, I-2-PM, art. 9º, incisos I a III. Evidência: o artigo exige, para praça, no mínimo bom comportamento; ausência de processo disciplinar ou IPM que recomende permanência na OPM; e cumprimento do prazo mínimo estabelecido em edital ou instrução de concurso. A eleva indevidamente o comportamento e exige ausência de qualquer registro; B cria anuência geral e prazo fixo; C elimina requisito expresso."
      },
      {
        "id": 137,
        "subject": "ORGANIZACIONAL",
        "topic": "I-2-PM — formalização do pedido de movimentação por conveniência própria",
        "text": "QUESTÃO 137 - Preenchidas as condições regulamentares para movimentação por conveniência própria, o policial militar pretende encaminhar seu pedido. Segundo o art. 10 das I-2-PM, qual procedimento deve adotar?",
        "options": [
          "a) Apresentar requerimento verbal ao comandante da OPM de destino, que deverá decidir imediatamente.",
          "b) Instruir o pedido por meio do formulário PM P-74, que somente será encaminhado nos termos do art. 18 se atendidas as condições do artigo anterior.",
          "c) Encaminhar diretamente o pedido à OPM de destino, dispensando o formulário quando se tratar de praça.",
          "d) Utilizar o formulário PM P-74 apenas depois de ter sido incluído na relação de prioridade de transferência."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fonte: Assuntos Organizacionais.pdf, I-2-PM, art. 10. Evidência: “O pedido de movimentação por conveniência própria deve ser instruído através do formulário PM P-74 e somente encaminhado [...] se preenchidas as condições previstas no artigo anterior”. A cria pedido verbal e decisão imediata; C dispensa o formulário para praça sem previsão; D inverte a ordem entre instrução e inclusão."
      },
      {
        "id": 138,
        "subject": "ORGANIZACIONAL",
        "topic": "I-2-PM — movimentação por união de cônjuges",
        "text": "QUESTÃO 138 - Um policial militar requer movimentação com fundamento na união de cônjuges. Considerando os arts. 12 e 13 das I-2-PM, assinale a alternativa correta.",
        "options": [
          "a) A movimentação deve ocorrer para qualquer município indicado pelo requerente, desde que haja vaga em OPM.",
          "b) A movimentação é automática para a mesma OPM do cônjuge e independe de impacto sobre o serviço.",
          "c) A movimentação será para o município da residência do cônjuge e depende, entre outras condições, de não prejudicar o serviço, não ter havido movimentação pelo mesmo fundamento nos últimos cinco anos e coincidirem município de exercício e residência do cônjuge.",
          "d) O pedido somente pode ser formulado quando os cônjuges forem policiais militares e estiverem lotados na mesma Unidade."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fonte: Assuntos Organizacionais.pdf, I-2-PM, arts. 12 e 13, incisos I a III. Evidência: a movimentação é feita para o município de residência do cônjuge; exige que não prejudique o serviço, que não tenha ocorrido movimentação nos últimos cinco anos pelo mesmo fundamento e que o município de exercício e a residência do cônjuge sejam os mesmos. A amplia o destino; B elimina condições; D acrescenta requisito de vínculo institucional não previsto."
      },
      {
        "id": 139,
        "subject": "ORGANIZACIONAL",
        "topic": "I-2-PM — movimentação excepcional fora dos critérios ordinários",
        "text": "QUESTÃO 139 - Em situação excepcional, a OPM considera necessária movimentação imediata que não se enquadra nos critérios ordinários de banco de dados ou de relação de prioridade de transferência. Nos termos do parágrafo único do art. 11 das I-2-PM, como deve ser instruído o caso?",
        "options": [
          "a) Com documentação comprobatória que justifique a necessidade imediata, encaminhada para análise e decisão conforme a competência prevista no art. 18.",
          "b) Apenas com declaração do interessado, pois a excepcionalidade afasta a necessidade de comprovação.",
          "c) Com parecer verbal do comandante da OPM de origem, dispensado encaminhamento para decisão.",
          "d) Com inclusão automática na relação de prioridade, sem necessidade de análise da excepcionalidade."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fonte: Assuntos Organizacionais.pdf, I-2-PM, art. 11, parágrafo único. Evidência: o caso excepcional deve ser instruído com documentação comprobatória da necessidade imediata e encaminhado para análise e decisão nos termos do art. 18. B dispensa comprovação expressamente exigida; C substitui o encaminhamento formal por parecer verbal; D torna automática uma medida sujeita à análise."
      },
      {
        "id": 140,
        "subject": "ORGANIZACIONAL",
        "topic": "I-36-PM — aquisição do direito às férias anuais",
        "text": "QUESTÃO 140 - Um policial militar ingressou na PMESP após ter prestado serviço público estadual, com intervalo de oito dias entre o encerramento do vínculo anterior e a admissão na Instituição. Considerando o art. 2º das I-36-PM, assinale a alternativa correta sobre a contagem do primeiro ano para férias.",
        "options": [
          "a) O tempo anterior nunca pode ser considerado para completar o primeiro ano de exercício funcional.",
          "b) O tempo anterior pode ser computado para completar o primeiro ano, pois a interrupção entre os vínculos não excedeu dez dias; após um ano de exercício funcional, há direito a trinta dias de férias anuais conforme o plano competente.",
          "c) O tempo anterior só pode ser computado quando não houver qualquer intervalo entre os vínculos.",
          "d) O policial adquire direito a trinta dias de férias a cada seis meses, desde que tenha trabalhado anteriormente no serviço público estadual."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fonte: Assuntos Organizacionais.pdf, I-36-PM, art. 2º, caput e §§ 1º a 3º. Evidência: o policial tem direito a 30 dias de férias anuais após um ano de exercício funcional; o tempo de serviço público estadual anterior conta para completar o primeiro ano se não houver interrupção superior a dez dias. A e C ignoram a regra expressa; D altera a periodicidade."
      },
      {
        "id": 141,
        "subject": "ORGANIZACIONAL",
        "topic": "I-36-PM — férias escolares e emprego do efetivo discente",
        "text": "QUESTÃO 141 - Durante o recesso escolar de um curso da PMESP, um policial militar não está usufruindo férias anuais concomitantemente, pois já as fruiu. De acordo com o art. 12 das I-36-PM, assinale a alternativa correta.",
        "options": [
          "a) O policial fica dispensado de todas as atividades da Instituição durante o recesso escolar.",
          "b) O policial deve usufruir novamente férias anuais, ainda que já as tenha fruído no mesmo exercício.",
          "c) O órgão de ensino deve encaminhá-lo obrigatoriamente para licença-prêmio durante o período de recesso.",
          "d) Ele fica dispensado das atividades curriculares, mas deve ser empregado pelo próprio órgão de ensino em outras atividades, como operações de policiamento, administração da Unidade ou reforço a outras OPM."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. Fonte: Assuntos Organizacionais.pdf, I-36-PM, art. 12, inciso II. Evidência: quem está em férias escolares, mas não usufrui férias anuais concomitantes por já tê-las fruído ou por não ter direito, fica dispensado das atividades curriculares e deve ser empregado pelo órgão de ensino em outras atividades. A transforma o recesso em dispensa total; B duplica férias; C cria licença-prêmio não prevista."
      },
      {
        "id": 142,
        "subject": "ORGANIZACIONAL",
        "topic": "I-36-PM — interrupção do bloco aquisitivo de licença-prêmio",
        "text": "QUESTÃO 142 - Na apuração do bloco aquisitivo de licença-prêmio, a OPM identifica que o policial militar acumulou 34 dias de dispensa do serviço e de licença para tratamento de saúde em pessoa da família, consideradas em conjunto, no período de cinco anos. Conforme o art. 16, inciso III, das I-36-PM, qual consequência normativa se aplica?",
        "options": [
          "a) A contagem é interrompida apenas se o total dessas ausências superar 60 dias no período de cinco anos.",
          "b) As ausências não afetam o bloco aquisitivo, pois somente a detenção pode produzir interrupção.",
          "c) Como o total excedeu 30 dias no período de cinco anos, incide a causa interruptiva prevista para essas ausências, observadas as condições temporais do dispositivo.",
          "d) O bloco aquisitivo é suspenso por exatamente 30 dias, sem reinício de contagem."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fonte: Assuntos Organizacionais.pdf, I-36-PM, art. 16, inciso III. Evidência: dispensa do serviço e licença para tratamento de saúde em pessoa da família e, nas condições temporais previstas, LTS do policial militar, constituem causa interruptiva quando o total dessas ausências excede 30 dias no período de cinco anos. A altera o limite; B ignora o inciso III; D substitui interrupção por suspensão e cria prazo fixo."
      },
      {
        "id": 143,
        "subject": "ORGANIZACIONAL",
        "topic": "SisTAF — frequência e duração mínima do treinamento físico",
        "text": "QUESTÃO 143 - Ao organizar o plano de treinamento físico da OPM, o comandante precisa observar a frequência mínima e a duração das sessões previstas na Diretriz nº PM3-001/03/25. Assinale a alternativa correta.",
        "options": [
          "a) O treinamento físico é aplicado, no mínimo, duas vezes por semana para cada policial militar, com sessões de 30 a 45 minutos.",
          "b) O treinamento físico é aplicado uma vez por semana, com sessões de 60 a 90 minutos.",
          "c) A frequência e a duração ficam exclusivamente a critério individual de cada policial militar.",
          "d) O treinamento físico deve ocorrer três vezes por mês, com sessões de duração mínima de duas horas."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fonte: Assuntos Organizacionais.pdf, Diretriz nº PM3-001/03/25 (SisTAF), item 6.5.3.2. Evidência: “o TF será aplicado, no mínimo, duas vezes por semana para cada policial militar e as sessões terão duração entre 30 e 45 minutos”. B, C e D alteram frequência, duração ou responsável pelo planejamento."
      },
      {
        "id": 144,
        "subject": "ORGANIZACIONAL",
        "topic": "SisTAF — destinação dos TAF-1 e TAF-2",
        "text": "QUESTÃO 144 - Um gestor de ensino precisa selecionar o teste de aptidão física adequado à finalidade pretendida. Conforme o item 6.5.4.1 da Diretriz nº PM3-001/03/25, assinale a alternativa correta.",
        "options": [
          "a) O TAF-1 destina-se à avaliação periódica de todo o efetivo da ativa, enquanto o TAF-2 é exclusivo para policiais com restrições médicas.",
          "b) O TAF-1 avalia candidatos ao cargo de Aluno-Oficial PM e Soldado PM; o TAF-2 avalia candidatos a cursos e estágios específicos ou policiais selecionados para funções cujo critério de elegibilidade utilize o TAF.",
          "c) O TAF-1 destina-se a policiais aptos para o serviço, mas com restrições médicas; o TAF-2 é aplicado anualmente a todo o efetivo.",
          "d) O TAF-1 é exclusivo de cursos de especialização; o TAF-2 destina-se somente ao provimento do cargo de Soldado PM."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fonte: Assuntos Organizacionais.pdf, Diretriz nº PM3-001/03/25 (SisTAF), itens 6.5.4.1.1 e 6.5.4.1.2. Evidência: TAF-1 avalia candidatos aos cargos de Aluno-Oficial PM e Soldado PM; TAF-2 avalia candidatos a cursos e estágios específicos ou policiais selecionados para funções que adotem o TAF como critério de elegibilidade. A e C trocam as finalidades do TAF-3/TAF-4; D inverte e restringe indevidamente os destinatários."
      },
      {
        "id": 145,
        "subject": "ORGANIZACIONAL",
        "topic": "SisTAF — aprovação de testes físicos adicionais pela EEF",
        "text": "QUESTÃO 145 - Uma OPM pretende aplicar, por necessidade fundamentada, um teste físico que não consta do rol de testes da Diretriz nº PM3-001/03/25. Qual providência é exigida pelo Anexo B?",
        "options": [
          "a) Aplicar o teste imediatamente e encaminhar os resultados à EEF apenas para ciência posterior.",
          "b) Solicitar aprovação somente após a primeira aplicação, juntando a tabela de pontuação se houver recurso.",
          "c) Submeter a pretensão à EEF, por requerimento do Responsável pelo Treinamento da OPM, com fundamentação científica, protocolo de aplicação e tabela de pontuação com interpolação de pontos.",
          "d) Substituir um dos testes previstos na Diretriz por qualquer teste escolhido pelo comandante, sem submissão à EEF."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fonte: Assuntos Organizacionais.pdf, Diretriz nº PM3-001/03/25, Anexo B, item 1.3. Evidência: testes diversos dos existentes exigem submissão à EEF para aprovação, mediante requerimento do Responsável pelo Treinamento da OPM, com fundamentação científica, protocolo e tabela de pontuação com interpolação. A e B deixam a aprovação para depois; D dispensa a análise exigida."
      },
      {
        "id": 146,
        "subject": "ORGANIZACIONAL",
        "topic": "SisTAF — pedido de pontuação mais rigorosa no TAF-2",
        "text": "QUESTÃO 146 - Uma OPM pretende adotar, no TAF-2, pontuação mais rigorosa do que a constante das tabelas da Diretriz nº PM3-001/03/25. Considerando o Anexo B, assinale a alternativa correta.",
        "options": [
          "a) A OPM pode aumentar ou reduzir os índices livremente, desde que publique ordem interna.",
          "b) A solicitação de pontuação mais rigorosa deve ser encaminhada à EEF pelo Responsável pelo Treinamento da OPM, sendo proibida a utilização de índice inferior aos das tabelas existentes.",
          "c) A pontuação mais rigorosa depende exclusivamente de autorização do médico do QOS, sem participação da EEF.",
          "d) A OPM pode adotar índice inferior ao previsto, mas não pode elevar o índice mínimo."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fonte: Assuntos Organizacionais.pdf, Diretriz nº PM3-001/03/25, Anexo B, item 1.4. Evidência: pontuação mais rigorosa exige solicitação à EEF formulada pelo Responsável pelo Treinamento da OPM; o dispositivo proíbe utilizar índice inferior ao das tabelas existentes. A e D autorizam redução vedada; C desloca a competência para o QOS."
      },
      {
        "id": 147,
        "subject": "ORGANIZACIONAL",
        "topic": "SisTAF — classificação por pontuação do TAF-3 a partir de 2029",
        "text": "QUESTÃO 147 - Um policial militar realiza o TAF-3 em 2029 e obtém 420 pontos. Considerando a tabela de conceitos prevista no Anexo C da Diretriz nº PM3-001/03/25 para vigência a partir de 1º de janeiro de 2029, qual conceito corresponde à pontuação?",
        "options": [
          "a) Reprovado.",
          "b) Regular.",
          "c) Muito Bom.",
          "d) Bom."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. Fonte: Assuntos Organizacionais.pdf, Diretriz nº PM3-001/03/25, Anexo C, item 1.11.2. Evidência: a partir de 01JAN29, até 299 pontos corresponde a Reprovado, de 300 a 399 a Regular, de 400 a 499 a Bom e de 500 a 600 a Muito Bom. 420 está na faixa de 400 a 499. A e B correspondem a faixas inferiores; C exige ao menos 500 pontos."
      },
      {
        "id": 148,
        "subject": "ORGANIZACIONAL",
        "topic": "SisTAF — impossibilidade de execução dos testes previstos no TAF-4",
        "text": "QUESTÃO 148 - Um policial militar apto para o serviço, mas com restrições médicas, não consegue realizar nenhum dos TAF-4 previstos para sua categoria. Conforme o Anexo D da Diretriz nº PM3-001/03/25, assinale a alternativa correta.",
        "options": [
          "a) Deve ser criado um quinto tipo de TAF individual, definido livremente pela OPM.",
          "b) A OPM deve aplicar o TAF-3 com redução informal dos índices de suficiência.",
          "c) A aplicação de outro tipo de TAF fica vedada quando o policial, em razão das restrições médicas, não conseguir realizar nenhum dos TAF-4 previstos na norma.",
          "d) O policial deve ser submetido obrigatoriamente ao TAF-2, independentemente de sua finalidade."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fonte: Assuntos Organizacionais.pdf, Diretriz nº PM3-001/03/25, Anexo D, item 3. Evidência: “Não será aplicado outro tipo de TAF diverso dos existentes nesta norma” ao policial que, por restrições médicas, não conseguir realizar nenhum dos TAF-4 previstos. A cria modalidade não prevista; B autoriza redução informal; D desconsidera a finalidade do TAF-2."
      },
      {
        "id": 149,
        "subject": "ORGANIZACIONAL",
        "topic": "Portaria PM4-001/1.2/24 — comunicação de aquisição de munição",
        "text": "QUESTÃO 149 - Um policial militar da ativa adquiriu munição e precisa cumprir a obrigação de comunicação prevista na Portaria PM4-001/1.2/24, com a redação reproduzida no material autorizado. Assinale a alternativa correta.",
        "options": [
          "a) Deve informar ao Comandante da Unidade à qual está funcionalmente vinculado, mediante declaração do Apêndice P do Anexo IV, em até 30 dias da aquisição.",
          "b) Deve informar ao Comandante-Geral em até cinco dias, por mensagem informal, dispensado o formulário.",
          "c) Deve informar exclusivamente à Seção de Logística em até 90 dias, por meio de relatório anual consolidado.",
          "d) Deve comunicar apenas quando a munição for de uso restrito e antes da aquisição."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fonte: Assuntos Organizacionais.pdf, Portaria do Cmt G PM4-1/1.2/24, alteração publicada no Bol G PM 241/24, art. 19, § 2º. Evidência: o policial da ativa deve informar ao comandante da Unidade à qual está funcionalmente vinculado, por declaração do Apêndice P do Anexo IV, em até 30 dias da aquisição. B, C e D alteram destinatário, prazo, meio ou hipótese de incidência."
      },
      {
        "id": 150,
        "subject": "ORGANIZACIONAL",
        "topic": "Portaria PM4-001/1.2/24 — assinatura no pedido de autorização para arma de uso restrito",
        "text": "QUESTÃO 150 - Para solicitar autorização junto ao Exército Brasileiro para aquisição de arma de fogo de uso restrito no comércio ou indústria, o policial militar reúne o formulário do Apêndice A-1 do Anexo IV. Conforme o procedimento descrito no material autorizado, assinale a alternativa correta.",
        "options": [
          "a) O formulário deve conter assinatura digital do requerente, sendo dispensada a assinatura do comandante.",
          "b) O formulário deve conter assinatura física do requerente e do comandante competente; é vedada assinatura digital ou digitalizada, e a tramitação para solicitar a autorização deve ser realizada pessoalmente pelo policial militar interessado.",
          "c) A assinatura do comandante é dispensada quando o policial apresentar autorização da OPM de destino.",
          "d) O pedido deve ser apresentado exclusivamente pela OPM ao Exército, sem participação pessoal do interessado."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fonte: Assuntos Organizacionais.pdf, Portaria do Cmt G PM4-1/1.2/24, alteração publicada no Bol G PM 241/24, Anexo I, item 2.1.1. Evidência: o formulário deve conter assinaturas físicas do requerente e do comandante da Unidade a que está vinculado (ou do comandante da Unidade detentora do AI, se veterano), sendo vedada assinatura digital ou digitalizada; a tramitação para obtenção da autorização do SFPC/2ª RM deve ser realizada pessoalmente pelo interessado. A e C dispensam exigências expressas; D transfere integralmente a tramitação à OPM."
      },
{
        "id": 151,
        "subject": "OPERACIONAL",
        "topic": "Programa de Radiopatrulha — quantidade mínima de patrulhas",
        "text": "QUESTÃO 151 - Ao revisar o Plano Diretor de uma Companhia PM territorial, o comandante verifica a distribuição das patrulhas que devem operar ininterruptamente. Considerando a Diretriz do Programa de Radiopatrulha, assinale a alternativa correta.",
        "options": [
          "a) Cada Companhia PM deve manter, no mínimo, três Patrulhas distribuídas na Subárea, compondo um Grupo de Patrulha supervisionado pelo CGP.",
          "b) Cada Companhia PM deve manter, no mínimo, duas Patrulhas, sendo facultativa a supervisão por CGP quando houver atendimento pelo COPOM.",
          "c) A quantidade mínima de Patrulhas é definida exclusivamente pelo Comando de Policiamento, sem parâmetro de distribuição por Companhia PM.",
          "d) A exigência de operação ininterrupta aplica-se somente às patrulhas em municípios com população superior a limite definido pelo Comando-Geral."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fundamentação: Diretriz nº PM3-002/02/20 (Programa de Radiopatrulha), item 6.2.3.1, Assuntos Operacionais.pdf, p. 471. O dispositivo prevê ao menos três Patrulhas por Cia PM, distribuídas na Subárea e compondo um Grupo de Patrulha supervisionado pelo CGP. B reduz o mínimo e cria dispensa; C elimina parâmetro expresso; D cria critério populacional não previsto."
      },
      {
        "id": 152,
        "subject": "OPERACIONAL",
        "topic": "Programa de Radiopatrulha — emprego de motocicletas",
        "text": "QUESTÃO 152 - Uma OPM avalia substituir, em parte do turno, uma patrulha em viatura de quatro rodas por patrulhamento com motocicleta. À luz da Diretriz do Programa de Radiopatrulha, assinale a alternativa correta.",
        "options": [
          "a) A motocicleta deve ser ocupada por dois policiais militares, para assegurar que o condutor não acumule tarefas de observação.",
          "b) O patrulhamento com motocicleta deve ocorrer exclusivamente entre 06h00 e 23h00, sendo vedada qualquer alteração durante o turno.",
          "c) O emprego depende da conveniência do Cmt OPM, da necessidade operacional e da disponibilidade de meios; cada motocicleta será ocupada por um policial militar e o emprego será preferencialmente entre 06h00 e 23h00.",
          "d) A decisão de emprego cabe exclusivamente ao CGP, independentemente da previsão no Plano Diretor e das condições locais."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fundamentação: Diretriz nº PM3-002/02/20, itens 6.2.9.1 a 6.2.9.4, Assuntos Operacionais.pdf, p. 472. A motocicleta é ocupada por um policial; o período de 06h00 a 23h00 é preferencial, não absoluto, e a patrulha pode ser realocada conforme serviço, local e clima. A e D contrariam as condições descritas; B transforma preferência em vedação."
      },
      {
        "id": 153,
        "subject": "OPERACIONAL",
        "topic": "Força Tática — composição excepcional da Equipe Tática",
        "text": "QUESTÃO 153 - Durante operação de controle de multidões, o comandante avalia a composição da Equipe Tática em viatura de quatro rodas. Considerando a Diretriz do Programa de Força Tática, assinale a alternativa correta.",
        "options": [
          "a) A composição ordinária é de cinco policiais militares, podendo ser reduzida para três por decisão do motorista.",
          "b) A composição ordinária é de três ou quatro policiais militares, sendo vedado o exercício da função de comando por Cabo ou Soldado; excepcionalmente, em ações de controle de multidões, a equipe pode chegar a cinco integrantes.",
          "c) A composição ordinária é de quatro policiais militares, mas o comando pode ser exercido por Cabo ou Soldado quando houver Oficial em outra viatura.",
          "d) Em controle de multidões, a composição de até cinco integrantes torna-se permanente, mesmo após cessarem as ações."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fundamentação: Diretriz nº PM3-003/02/20 (Programa de Força Tática), itens 6.3.5.1 e 6.3.5.2, Assuntos Operacionais.pdf, p. 463. A composição ordinária é de três ou quatro integrantes, com comando por Oficial ou Subtenente/Sargento; a composição de até cinco é excepcional para controle de multidões e cessa com essas ações. A e C alteram a composição e a regra de comando; D transforma a exceção em regra permanente."
      },
      {
        "id": 154,
        "subject": "OPERACIONAL",
        "topic": "Força Tática — composição da Patrulha de Escolta",
        "text": "QUESTÃO 154 - Uma equipe será organizada para executar movimentação de presos no âmbito do Programa de Força Tática. Conforme a diretriz específica, assinale a alternativa correta sobre a Patrulha de Escolta.",
        "options": [
          "a) Deve ser composta por exatamente dois policiais militares, cabendo sempre ao Oficial mais antigo a função de encarregado.",
          "b) Deve ser composta por três a cinco policiais militares, com encarregado escolhido pelo comandante da OPM, independentemente de posto ou graduação.",
          "c) Deve ser composta por quatro policiais militares, sendo vedada a atuação de integrantes de graduação diferente.",
          "d) Deve ser composta por dois a quatro policiais militares, sendo a função de encarregado atribuída ao integrante de maior posto ou graduação."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. Fundamentação: Diretriz nº PM3-003/02/20, item 6.3.7.2, Assuntos Operacionais.pdf, p. 464. A Patrulha de Escolta é composta por dois a quatro policiais, e o encarregado é o de maior posto/graduação. A, B e C alteram o número de integrantes ou o critério de designação."
      },
      {
        "id": 155,
        "subject": "OPERACIONAL",
        "topic": "Programa de Policiamento Escolar — Adoção Escolar",
        "text": "QUESTÃO 155 - Uma OPM pretende adotar escola situada nas proximidades de sua sede, utilizando policiais militares do serviço administrativo para atividade preventiva cumulativa. Segundo a Diretriz do Programa de Policiamento Escolar, assinale a alternativa correta.",
        "options": [
          "a) A Adoção Escolar pode designar um ou dois policiais militares do serviço administrativo para policiamento ostensivo escolar cumulativo em estabelecimento situado a menos de 500 metros da sede da OPM, priorizando horários críticos.",
          "b) A Adoção Escolar exige equipe exclusiva de três policiais militares e escola situada a, no máximo, dois quilômetros da sede da OPM.",
          "c) A Adoção Escolar é restrita às escolas estaduais e substitui a necessidade de planejamento dos horários de entrada e saída dos alunos.",
          "d) A Adoção Escolar pode ser realizada por qualquer efetivo administrativo, sem designação formal, desde que a escola solicite apoio."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fundamentação: Diretriz nº PM3-004/02/20 (Programa de Policiamento Escolar), item 6.4.1, Assuntos Operacionais.pdf, p. 452. A regra prevê um ou dois policiais do serviço administrativo, cumulativamente, em escola a menos de 500 metros da sede, considerando acesso e horários críticos. B, C e D acrescentam ou retiram condições não previstas."
      },
      {
        "id": 156,
        "subject": "OPERACIONAL",
        "topic": "Programa de Policiamento Escolar — limites de atuação",
        "text": "QUESTÃO 156 - Durante reunião com a direção de uma escola, o comandante recebe pedido para que a equipe de policiamento escolar passe a resolver questões disciplinares internas dos alunos. Considerando a Diretriz do Programa de Policiamento Escolar, assinale a alternativa INCORRETA.",
        "options": [
          "a) Os policiais militares podem ser estimulados a participar de reuniões escolares para colher informações sobre problemas na escola e em suas imediações.",
          "b) As informações colhidas, as atividades realizadas e as propostas de aperfeiçoamento devem ser registradas em relatório.",
          "c) Os policiais militares devem assumir a resolução de assuntos de ordem interna do estabelecimento de ensino sempre que a direção solicitar, ainda que não sejam atribuições policiais.",
          "d) Na travessia de escolares, deve ser observado o cumprimento e a fiscalização da legislação de trânsito em vigor."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fundamentação: Diretriz nº PM3-004/02/20, itens 6.10.3 a 6.10.7, Assuntos Operacionais.pdf, p. 456. A diretriz veda envolver-se em assuntos de ordem interna dos estabelecimentos ou realizar funções alheias às atribuições policiais. A, B e D correspondem às orientações expressas nos itens citados."
      },
      {
        "id": 157,
        "subject": "OPERACIONAL",
        "topic": "Programa de Policiamento Rural — fatores de implantação",
        "text": "QUESTÃO 157 - Um Comando de Policiamento avalia implantar o Programa de Policiamento Rural em determinada circunscrição. De acordo com a Diretriz nº PM3-007/02/20, qual conjunto reúne fatores expressamente considerados para orientar a implantação?",
        "options": [
          "a) Existência de fórum criminal, unidade prisional e demanda de policiamento exclusivamente urbano.",
          "b) Presença de comunidades rurais; atividades sociais, políticas ou econômicas potencialmente exploráveis por criminosos; e índices criminais ou ações delituosas que afetem a percepção de segurança rural, ainda que esporádicos.",
          "c) Necessidade de substituir integralmente o policiamento ostensivo urbano e disponibilidade obrigatória de base rural própria.",
          "d) Existência de crimes violentos em todos os municípios da circunscrição e autorização prévia de órgão municipal."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fundamentação: Diretriz nº PM3-007/02/20 (Programa de Policiamento Rural), item 6.2.1.1 a 6.2.1.3, Assuntos Operacionais.pdf, p. 477. Os fatores incluem comunidades rurais, atividades que possam ser foco de ações criminosas/refúgio de infratores e ocorrências que afetem a percepção de segurança, mesmo esporádicas. A, C e D impõem requisitos estranhos ao dispositivo."
      },
      {
        "id": 158,
        "subject": "OPERACIONAL",
        "topic": "Programa de Policiamento Rural — planejamento conjunto",
        "text": "QUESTÃO 158 - No planejamento do policiamento rural, duas OPM identificam que a distribuição inicialmente proposta pode provocar sobreposição de patrulhas e desperdício de recursos. Considerando a Diretriz nº PM3-007/02/20, assinale a alternativa correta.",
        "options": [
          "a) A sobreposição deve ser mantida para garantir que cada OPM atue sem compartilhar informações com as demais.",
          "b) O planejamento deve ser feito exclusivamente pelas OPM especializadas, sem participação das OPM territoriais.",
          "c) A distribuição dos efetivos e meios deve ser planejada para evitar sobreposição de esforços e permitir melhor alocação de recursos, com compartilhamento técnico entre as OPM envolvidas.",
          "d) A diretriz determina que todas as patrulhas rurais sejam empregadas apenas em bloqueios, sem previsão de outras medidas."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fundamentação: Diretriz nº PM3-007/02/20, itens 6.4.3.5 e 6.6.1, Assuntos Operacionais.pdf, pp. 479-480. O planejamento deve evitar sobreposição e otimizar a alocação de recursos, privilegiando o canal técnico para compartilhamento de informações e planejamento conjunto. A e B negam essa integração; D restringe indevidamente as medidas possíveis."
      },
      {
        "id": 159,
        "subject": "OPERACIONAL",
        "topic": "Policiamento com Drones — custódia de evidências digitais",
        "text": "QUESTÃO 159 - Uma OPM subordinada a Comando de Policiamento empregou drone e produziu evidência digital de interesse da segurança pública. Considerando a Diretriz nº PM3-005/02/24, assinale a alternativa correta sobre armazenamento e custódia.",
        "options": [
          "a) A evidência deve permanecer exclusivamente com o Piloto Remoto em Comando até o encerramento de qualquer procedimento.",
          "b) O armazenamento deve ocorrer exclusivamente na Seção de Inteligência, que exercerá também a custódia final em todos os casos.",
          "c) A evidência deve ser entregue diretamente ao fornecedor do sistema, ficando a OPM dispensada de organizar sua custódia.",
          "d) A custódia deve ser estruturada prioritariamente na Sala de Operações do Batalhão, com custódia final na Divisão/Seção de Operações ou equivalente; na ausência de estrutura em Sala de Operações, deve ocorrer diretamente naquela Divisão/Seção no primeiro momento possível."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. Fundamentação: Diretriz nº PM3-005/02/24, item 6.10.12.2 e subitens, Assuntos Operacionais.pdf, p. 447. A diretriz estabelece a estrutura de armazenamento e custódia em Sala de Operações, com custódia final na Div Op/Seç Op ou equivalente, e prevê o encaminhamento direto a esta última quando não houver estrutura na Sala. A, B e C contrariam o fluxo normativo."
      },
      {
        "id": 160,
        "subject": "OPERACIONAL",
        "topic": "Policiamento com Drones — proteção de dados e classificação",
        "text": "QUESTÃO 160 - Ao estabelecer procedimentos internos para o emprego operacional de drones, uma OPM precisa disciplinar o tratamento de dados e o grau inicial de sigilo das disposições da diretriz. Assinale a alternativa correta.",
        "options": [
          "a) Devem ser observadas as disposições da Lei Geral de Proteção de Dados, e as disposições da diretriz são inicialmente classificadas como reservadas, nos termos da legislação de acesso à informação indicada no documento.",
          "b) A diretriz dispensa a aplicação da legislação de proteção de dados quando as imagens forem captadas em via pública.",
          "c) Todas as imagens devem ser divulgadas ao público após a missão, pois a diretriz não admite classificação de sigilo.",
          "d) O grau de sigilo é definido individualmente pelo Piloto Remoto em Comando após o encerramento de cada voo."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fundamentação: Diretriz nº PM3-005/02/24, itens 6.11.4 e 6.11.5, Assuntos Operacionais.pdf, p. 448. O texto determina observância da LGPD e classificação inicial das disposições da diretriz no grau reservado. B e C afastam comandos expressos; D transfere competência sem previsão normativa."
      },
      {
        "id": 161,
        "subject": "OPERACIONAL",
        "topic": "Policiamento com Drones — indicadores de desempenho",
        "text": "QUESTÃO 161 - Na avaliação institucional do Programa de Policiamento com Drones, o Comando precisa identificar como são desenvolvidos e acompanhados os indicadores específicos de desempenho e resultados. Segundo a Diretriz nº PM3-005/02/24, assinale a alternativa correta.",
        "options": [
          "a) Os indicadores são definidos exclusivamente por cada Piloto Remoto em Comando e permanecem fora das ferramentas institucionais de acompanhamento.",
          "b) Os indicadores são produzidos apenas ao final do ano e não integram as reuniões de análise crítica.",
          "c) A Coord Op PM desenvolve indicadores específicos, integrados ao Guia de Indicadores dos Programas de Policiamento, com informações gerenciais em aba própria do SiCoordOp e avaliação periódica nas RAC-III; os Cmdo Pol também desenvolvem indicadores próprios.",
          "d) O programa é avaliado somente pelo número de aeronaves adquiridas, sem indicadores operacionais ou de resultados."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fundamentação: Diretriz nº PM3-005/02/24, itens 6.9.1 e 6.9.2, Assuntos Operacionais.pdf, p. 442. A Coord Op PM desenvolve os indicadores específicos e as informações gerenciais integram o SiCoordOp, com avaliação periódica nas RAC-III; os Comandos de Policiamento desenvolvem indicadores próprios. A, B e D excluem elementos expressos."
      },
      {
        "id": 162,
        "subject": "OPERACIONAL",
        "topic": "Programa de Policiamento de Trânsito — composição das US territoriais",
        "text": "QUESTÃO 162 - Uma OPM territorial designa Unidade de Serviço para atuar especificamente no policiamento ostensivo de trânsito. Conforme a Diretriz nº PM3-006/02/20, assinale a alternativa correta.",
        "options": [
          "a) A Unidade de Serviço deve ser composta por três policiais militares e atuar exclusivamente em viatura de quatro rodas.",
          "b) A Unidade de Serviço será composta por dois policiais militares e poderá atuar a pé ou em viatura de duas ou quatro rodas, conforme previsão no Plano Diretor.",
          "c) A Unidade de Serviço será composta por um único policial militar e poderá escolher livremente o processo de policiamento, sem previsão no Plano Diretor.",
          "d) A Unidade de Serviço deverá ser composta por quatro policiais militares, independentemente do meio de transporte empregado."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fundamentação: Diretriz nº PM3-006/02/20 (Programa de Policiamento de Trânsito), item 6.4.1, Assuntos Operacionais.pdf, p. 485. A diretriz prevê dois policiais militares por US e permite patrulha a pé ou em viatura de duas ou quatro rodas, conforme Plano Diretor. A, C e D alteram o efetivo ou as condições de emprego."
      },
      {
        "id": 163,
        "subject": "OPERACIONAL",
        "topic": "Programa de Policiamento de Trânsito — níveis de resposta",
        "text": "QUESTÃO 163 - Uma equipe do CPTran executa atividade típica de policiamento ostensivo de trânsito urbano e, em outra situação, é solicitada para prestar apoio especializado a uma Unidade de Serviço. À luz da Diretriz nº PM3-006/02/20, assinale a alternativa correta.",
        "options": [
          "a) Ambas as situações correspondem obrigatoriamente ao Nível de Resposta 2, por envolverem recursos especializados.",
          "b) A atividade típica deve ocorrer no Nível de Resposta 4, enquanto o apoio especializado é enquadrado no Nível 1.",
          "c) O CPTran somente pode atuar no Nível de Resposta 1, sendo vedado prestar apoio especializado a outra US.",
          "d) O emprego típico do CPTran e do CPRv ocorre ordinariamente no Nível de Resposta 1; excepcionalmente, podem atuar no Nível 4, fornecendo apoio especializado a qualquer US."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. Fundamentação: Diretriz nº PM3-006/02/20, item 6.4.2.5.1 e 6.4.2.5.2, Assuntos Operacionais.pdf, p. 486. O emprego ordinário é no Nível 1 para atividades típicas de trânsito, e o apoio especializado excepcional caracteriza o Nível 4. A e B invertem ou generalizam os níveis; C elimina a hipótese expressa de apoio especializado."
      },
      {
        "id": 164,
        "subject": "OPERACIONAL",
        "topic": "NORSOP — Plano de Ação",
        "text": "QUESTÃO 164 - Após a fase de diagnóstico situacional, uma OPM consolida as áreas de interesse e os pontos de concentração ou fixação do policiamento para otimizar o emprego das Unidades de Serviço. Segundo a NORSOP, qual instrumento resulta desse planejamento?",
        "options": [
          "a) O Plano de Ação, baseado nas informações do diagnóstico situacional e formalizado com base em Nota de Instrução a ser editada pelo CIPM.",
          "b) O Plano Diretor, que é elaborado exclusivamente após a ocorrência e se limita a registrar os resultados obtidos.",
          "c) O Cartão de Prioridade de Patrulhamento, que substitui integralmente o diagnóstico situacional e o planejamento da OPM.",
          "d) O Plano de Contingência, obrigatório para qualquer ação rotineira de uma única Unidade de Serviço."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fundamentação: NORSOP, Diretriz nº PM3-001/02/20, item 6.8.3, Assuntos Operacionais.pdf, p. 260. O Plano de Ação resulta do planejamento feito com base no diagnóstico situacional, permitindo representar áreas e pontos de policiamento, e é formalizado com base em Nota de Instrução do CIPM. B, C e D confundem instrumentos com finalidades distintas."
      },
      {
        "id": 165,
        "subject": "OPERACIONAL",
        "topic": "NORSOP — competência para definir regimes de trabalho",
        "text": "QUESTÃO 165 - Na elaboração de Planos Diretores de abrangência operacional, surge divergência sobre quem pode estabelecer o regime de trabalho dos Programas de Policiamento e das Atividades Operacionais Diversas. Conforme a NORSOP, assinale a alternativa correta.",
        "options": [
          "a) A decisão cabe ao CGP, por ser responsável pela supervisão diária das Patrulhas.",
          "b) Cada comandante de pelotão pode definir autonomamente o regime de trabalho de todos os programas, sem limitação hierárquica.",
          "c) A decisão de estabelecer o regime de trabalho de todos os Programas de Policiamento e Atividades Operacionais Diversas cabe única e exclusivamente aos oficiais no posto de Coronel PM que ocupam a função de comandante.",
          "d) A definição compete exclusivamente à Seção de Pessoal, sem participação do comando operacional."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fundamentação: NORSOP, Diretriz nº PM3-001/02/20, itens 6.10.1 e 6.10.2, Assuntos Operacionais.pdf, p. 263. Embora os Comandos de Policiamento tenham autonomia para descrever regimes nos Planos Diretores, a decisão para estabelecer o regime de todos os programas e atividades cabe exclusivamente aos Coronéis PM na função de comandante. A, B e D deslocam a competência."
      },
      {
        "id": 166,
        "subject": "OPERACIONAL",
        "topic": "NORSOP — Supervisor Regional",
        "text": "QUESTÃO 166 - Fora do horário de expediente administrativo, uma região necessita de supervisão das atividades de polícia ostensiva e de preservação da ordem pública. Considerando a NORSOP, assinale a alternativa correta sobre o Supervisor Regional.",
        "options": [
          "a) A função é exercida exclusivamente por Subtenente PM e limita-se à fiscalização de uma Companhia.",
          "b) A função é exercida, em regra, por Capitão QOPM fora do expediente administrativo; eventualmente, pode ser empregado Tenente QOPM que esteja em função de Capitão PM, conforme as peculiaridades regionais.",
          "c) A função é exercida apenas durante o expediente administrativo, por Oficial Superior de Sobreaviso.",
          "d) O Supervisor Regional atua somente após autorização judicial e não pode acompanhar ou apoiar Unidades de Serviço."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fundamentação: NORSOP, Diretriz nº PM3-001/02/20, itens 6.9.4.1 e 6.9.4.2, Assuntos Operacionais.pdf, p. 262. A função é exercida fora do expediente administrativo, em regra por Cap QOPM, com possibilidade de emprego de Ten QOPM em função de Cap PM; abrange supervisão regional e apoio às US. A, C e D restringem ou alteram a função."
      },
      {
        "id": 167,
        "subject": "OPERACIONAL",
        "topic": "Policiamento com Drones — habilitação do Observador de UAS",
        "text": "QUESTÃO 167 - Uma OPM pretende designar policial militar para exercer a função de Observador de UAS em Equipe Drone. Segundo a Diretriz nº PM3-005/02/24, qual requisito se aplica à habilitação desse integrante?",
        "options": [
          "a) Basta a designação verbal do comandante da ocorrência, sem curso ou renovação de habilitação.",
          "b) A habilitação depende exclusivamente de experiência anterior em patrulhamento com motocicleta.",
          "c) O Observador deve possuir habilitação de Piloto Remoto em Comando e renovar essa habilitação por teste de proficiência anual.",
          "d) A habilitação depende da conclusão, com aproveitamento, do curso de especialização profissional desenvolvido pela PM; a renovação ocorre por treinamento específico e periodicidade definida pelo CAvPM."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. Fundamentação: Diretriz nº PM3-005/02/24, itens 6.7.3.1 e 6.7.3.2, Assuntos Operacionais.pdf, p. 441. A habilitação do Observador depende de conclusão com aproveitamento do curso de especialização profissional; a renovação se dá por treinamento específico conforme periodicidade definida pelo CAvPM. A e B eliminam requisitos; C confunde a função e o processo de renovação."
      },
      {
        "id": 168,
        "subject": "JURIDICO",
        "topic": "RDPM — espécies de sanções disciplinares",
        "text": "QUESTÃO 168 - Ao orientar uma autoridade sobre o rol de sanções disciplinares previsto no RDPM, um oficial precisa distinguir as espécies expressamente enumeradas no regulamento. Assinale a alternativa correta.",
        "options": [
          "a) Advertência, repreensão, permanência disciplinar, detenção, reforma administrativa disciplinar, demissão, expulsão e proibição do uso de uniformes.",
          "b) Advertência, repreensão, multa, suspensão remuneratória, demissão, cassação de aposentadoria, expulsão e transferência compulsória.",
          "c) Advertência, repreensão, prisão administrativa, perda temporária de posto, reforma civil, demissão e afastamento preventivo.",
          "d) Repreensão, permanência disciplinar, detenção, perda de férias, transferência, demissão, expulsão e proibição de porte de arma."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fundamentação: RDPM, art. 14, Assuntos Juridicos-administrativos.pdf, p. 84. O rol legal contém as oito sanções indicadas em A. B, C e D incluem medidas não enumeradas no art. 14 e omitem ou substituem sanções previstas."
      },
      {
        "id": 169,
        "subject": "JURIDICO",
        "topic": "RDPM — conversão da permanência disciplinar em serviço extraordinário",
        "text": "QUESTÃO 169 - Um policial militar punido com permanência disciplinar solicita a conversão do cumprimento em prestação de serviço extraordinário. Considerando o art. 18 do RDPM, assinale a alternativa correta.",
        "options": [
          "a) A conversão é automática sempre que requerida, independentemente de avaliação da autoridade que aplicou a sanção.",
          "b) A conversão pode ser concedida a pedido do transgressor, mediante juízo devidamente motivado da autoridade que aplicou a punição, desde que não prejudique a manutenção da hierarquia e da disciplina.",
          "c) A conversão somente pode ser requerida depois de cumprida metade da permanência disciplinar e depende de autorização judicial.",
          "d) A conversão é vedada quando a sanção de permanência disciplinar tiver sido publicada em boletim."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fundamentação: RDPM, art. 18, caput, Assuntos Juridicos-administrativos.pdf, p. 84-85. O pedido é do transgressor e a decisão depende de juízo motivado da autoridade que aplicou a sanção, sem prejuízo à hierarquia e à disciplina. A transforma faculdade em direito automático; C cria requisito e autoridade não previstos; D estabelece vedação inexistente."
      },
      {
        "id": 170,
        "subject": "JURIDICO",
        "topic": "RDPM — limites da prestação de serviço extraordinário",
        "text": "QUESTÃO 170 - Deferida a conversão de parte da permanência disciplinar em prestação de serviço extraordinário, a autoridade precisa fixar a duração e os limites do cumprimento. À luz do art. 19 do RDPM, assinale a alternativa correta.",
        "options": [
          "a) Cada prestação deve durar entre quatro e seis horas, sem limite máximo de dias convertidos.",
          "b) A prestação pode ser executada imediatamente após o serviço ordinário, desde que a autoridade registre a necessidade.",
          "c) A prestação deve durar entre seis e oito horas nos dias em que o militar estaria de folga; o limite máximo de conversão é de cinco dias, e o serviço extraordinário não pode ser executado imediatamente após o término do serviço ordinário.",
          "d) A conversão fica limitada a três dias, com duração fixa de oito horas, independentemente do serviço ordinário."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fundamentação: RDPM, art. 19, caput e §§ 1º a 3º, Assuntos Juridicos-administrativos.pdf, p. 85. O serviço extraordinário dura de seis a oito horas, ocorre em dias de folga, limita-se a cinco dias convertidos e não pode ser executado imediatamente após o serviço ordinário. A, B e D contrariam os limites expressos."
      },
      {
        "id": 171,
        "subject": "JURIDICO",
        "topic": "RDPM — hipóteses e limites do recolhimento disciplinar",
        "text": "QUESTÃO 171 - Em situação envolvendo policial militar, avalia-se a necessidade de recolhimento à prisão sem nota de punição publicada em boletim. Segundo o art. 26 do RDPM, assinale a alternativa correta.",
        "options": [
          "a) O recolhimento pode ser determinado por qualquer superior hierárquico, sem fundamentação, por prazo de até dez dias.",
          "b) O recolhimento somente é possível após condenação criminal transitada em julgado e não admite comunicação ao Juiz Corregedor.",
          "c) O recolhimento é medida exclusiva para ausência ao serviço e não pode ser aplicado quando houver risco à ordem ou à disciplina.",
          "d) O recolhimento pode ocorrer diante de indício de autoria de infração penal, quando necessário às investigações, ou para preservar a ordem e a disciplina; a decisão deve ser fundamentada e comunicada ao Juiz Corregedor, e o prazo máximo é de cinco dias."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. Fundamentação: RDPM, art. 26, incisos I e II e §§ 3º-4º, Assuntos Juridicos-administrativos.pdf, p. 88. O dispositivo prevê as duas hipóteses, exige fundamentação e comunicação ao Juiz Corregedor e limita a medida a cinco dias. A afasta exigências e amplia o prazo; B cria requisito de condenação; C restringe indevidamente as hipóteses."
      },
      {
        "id": 172,
        "subject": "JURIDICO",
        "topic": "RDPM — conteúdo da comunicação disciplinar",
        "text": "QUESTÃO 172 - Um superior elabora comunicação disciplinar sobre possível transgressão de subordinado. Considerando o art. 28 do RDPM, assinale a alternativa correta quanto ao conteúdo e à forma do documento.",
        "options": [
          "a) Deve conter a opinião pessoal do signatário sobre a personalidade do acusado, ainda que não relacionada às circunstâncias do fato.",
          "b) Deve ser clara, concisa e precisa, identificar pessoas ou coisas envolvidas, local, data e hora, descrever as circunstâncias e registrar as alegações do faltoso quando presentes, sem comentários ou opiniões pessoais.",
          "c) Pode omitir local e horário quando o signatário considerar que a transgressão é conhecida na OPM.",
          "d) Deve antecipar a sanção pretendida e dispensar a descrição das circunstâncias quando houver testemunhas."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fundamentação: RDPM, art. 28, caput, Assuntos Juridicos-administrativos.pdf, p. 88. O dispositivo define conteúdo mínimo e determina que não sejam tecidos comentários ou opiniões pessoais. A contraria a vedação expressa; C omite dados exigidos; D confunde a comunicação com o julgamento."
      },
      {
        "id": 173,
        "subject": "JURIDICO",
        "topic": "RDPM — prazo para solução do procedimento disciplinar",
        "text": "QUESTÃO 173 - Após o recebimento da defesa do acusado em procedimento disciplinar, a autoridade competente precisa observar o prazo para solução e a comunicação ao signatário. Segundo o art. 29 do RDPM, assinale a alternativa correta.",
        "options": [
          "a) A solução deve ser dada em 30 dias, contados do recebimento da defesa, prorrogáveis por até 15 dias mediante declaração dos motivos no próprio enquadramento; o signatário deve ser notificado da solução em até 90 dias da comunicação.",
          "b) A solução deve ser dada em 15 dias, contados da comunicação inicial, sem possibilidade de prorrogação.",
          "c) A solução deve ser dada em 60 dias, prorrogáveis por mais 30, e o signatário só precisa ser informado após requerimento.",
          "d) O prazo de solução começa com a apresentação da comunicação disciplinar e não sofre alteração em caso de afastamento regulamentar do transgressor."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fundamentação: RDPM, art. 29, caput e §§ 1º a 4º, Assuntos Juridicos-administrativos.pdf, pp. 89-90. O prazo é de 30 dias após o recebimento da defesa, com prorrogação máxima de 15 dias motivada no enquadramento; a notificação do signatário deve ocorrer em até 90 dias da comunicação. B e C alteram prazos; D ignora a interrupção prevista para afastamento regulamentar."
      },
      {
        "id": 174,
        "subject": "JURIDICO",
        "topic": "RDPM — representação contra ato de superior",
        "text": "QUESTÃO 174 - Um policial militar considera irregular, injusto ou ilegal ato praticado por superior hierárquico ou funcional e pretende apresentar representação. Conforme o art. 30 do RDPM, assinale a alternativa correta.",
        "options": [
          "a) A representação deve ser dirigida à autoridade que praticou o ato e pode ser apresentada a qualquer tempo.",
          "b) A representação é cabível apenas contra ato de subordinado e deve ser encaminhada ao Comandante-Geral.",
          "c) A representação é comunicação relativa a ato de superior reputado irregular, ofensivo, injusto ou ilegal; deve ser dirigida à autoridade funcional imediatamente superior àquela contra a qual se atribui o ato e encaminhada em cinco dias do fato motivador.",
          "d) A representação contra ato disciplinar pode ser apresentada antes de solucionados os recursos disciplinares, mesmo que não verse sobre legalidade."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fundamentação: RDPM, art. 30, caput e §§ 1º, 2º e 4º, Assuntos Juridicos-administrativos.pdf, p. 90. A representação é dirigida à autoridade funcional imediatamente superior e o prazo ordinário de encaminhamento é de cinco dias. A indica destinatário e prazo errados; B restringe indevidamente o objeto; D contraria as condições específicas para representação contra ato disciplinar."
      },
      {
        "id": 175,
        "subject": "JURIDICO",
        "topic": "RDPM — causas de justificação",
        "text": "QUESTÃO 175 - Ao apreciar uma transgressão disciplinar, a autoridade examina se há causa de justificação que impeça a aplicação de sanção. À luz do art. 34 do RDPM, assinale a alternativa correta.",
        "options": [
          "a) A mera alegação de desconhecimento da norma constitui causa automática de justificação.",
          "b) A existência de qualquer ordem superior justifica a conduta, mesmo quando a ordem recebida for manifestamente ilegal.",
          "c) A colaboração do acusado na apuração é causa de justificação que impede a aplicação de sanção em qualquer hipótese.",
          "d) A obediência a ordem superior pode constituir causa de justificação, desde que a ordem recebida não seja manifestamente ilegal."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. Fundamentação: RDPM, art. 34, inciso IV, Assuntos Juridicos-administrativos.pdf, p. 92. A obediência a ordem superior só figura como causa de justificação quando a ordem não é manifestamente ilegal. A não consta do rol; B elimina condição expressa; C confunde circunstância atenuante do art. 35 com causa de justificação."
      },
      {
        "id": 176,
        "subject": "JURIDICO",
        "topic": "RDPM — circunstâncias atenuantes",
        "text": "QUESTÃO 176 - Na análise das circunstâncias de uma transgressão disciplinar, a autoridade precisa distinguir as atenuantes das agravantes previstas no RDPM. Assinale a alternativa que apresenta circunstância atenuante expressamente prevista no art. 35.",
        "options": [
          "a) Ter praticado a falta em presença de subordinado, de tropa ou de civil.",
          "b) Colaborar na apuração da transgressão disciplinar.",
          "c) Ter praticado a falta com abuso de autoridade hierárquica ou funcional.",
          "d) Ter agido em conluio com duas ou mais pessoas."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fundamentação: RDPM, art. 35, inciso VIII, Assuntos Juridicos-administrativos.pdf, p. 92. A colaboração na apuração é atenuante. A e C constam como agravantes no art. 36; D corresponde ao conluio, também agravante."
      },
      {
        "id": 177,
        "subject": "JURIDICO",
        "topic": "RDPM — limites gerais na aplicação das sanções",
        "text": "QUESTÃO 177 - Ao aplicar sanção disciplinar, a autoridade identifica circunstâncias atenuantes e agravantes e verifica que há uma única transgressão. Considerando o art. 41 do RDPM, assinale a alternativa correta.",
        "options": [
          "a) A existência de circunstância atenuante autoriza sempre a aplicação da sanção em seu limite máximo.",
          "b) A mesma transgressão pode receber duas sanções, desde que uma seja publicada de forma reservada.",
          "c) Quando as circunstâncias atenuantes preponderarem, a sanção não será aplicada em seu limite máximo; quando as agravantes preponderarem, poderá ser aplicada até o limite máximo, e não se aplica mais de uma sanção pela mesma transgressão.",
          "d) As circunstâncias agravantes impedem a aplicação da sanção em seu limite máximo."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fundamentação: RDPM, art. 41, incisos I a III, Assuntos Juridicos-administrativos.pdf, p. 94. O artigo estabelece os três limites reproduzidos em C. A e D invertem o efeito das circunstâncias; B contraria a regra de uma única sanção pela mesma transgressão."
      },
      {
        "id": 178,
        "subject": "JURIDICO",
        "topic": "RDPM — limites de sanção conforme a natureza da falta",
        "text": "QUESTÃO 178 - Ao enquadrar transgressão de natureza média, a autoridade verifica também a existência de reincidência específica. De acordo com o art. 42 do RDPM, assinale a alternativa correta.",
        "options": [
          "a) A falta média é punível com permanência disciplinar de até oito dias e, na reincidência específica, com permanência disciplinar de até quinze dias.",
          "b) A falta média é punível apenas com advertência verbal, mesmo em caso de reincidência específica.",
          "c) A falta média é punível com detenção de até quinze dias, independentemente de reincidência.",
          "d) A falta média autoriza permanência disciplinar de até vinte dias na primeira ocorrência e não admite agravamento por reincidência."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fundamentação: RDPM, art. 42, inciso II, Assuntos Juridicos-administrativos.pdf, p. 94. O limite é de até oito dias de permanência disciplinar, chegando a até quinze dias na reincidência específica. B, C e D apresentam sanções ou limites incompatíveis com o inciso."
      },
      {
        "id": 179,
        "subject": "JURIDICO",
        "topic": "RDPM — início e contagem do cumprimento da sanção",
        "text": "QUESTÃO 179 - Um policial militar toma ciência da publicação da sanção disciplinar e questiona quando deverá iniciar seu cumprimento e como será computado cada dia. Segundo o art. 52 do RDPM, assinale a alternativa correta.",
        "options": [
          "a) O cumprimento deve começar em até quinze dias, e cada dia corresponde a oito horas de serviço.",
          "b) O cumprimento deve começar em até cinco dias após a ciência da publicação; a contagem começa quando o militar efetivamente inicia a sanção, computando-se cada dia como período de 24 horas.",
          "c) O cumprimento deve começar no mesmo instante da publicação, ainda que o punido não tenha ciência do ato.",
          "d) O cumprimento deve começar em até trinta dias, e o período de afastamento regulamentar conta como sanção cumprida."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fundamentação: RDPM, art. 52, caput e § 1º, Assuntos Juridicos-administrativos.pdf, p. 96. O início deve ocorrer em até cinco dias da ciência da publicação e cada dia é computado como 24 horas a partir do início efetivo. A, C e D alteram o prazo ou a forma de contagem."
      },
      {
        "id": 180,
        "subject": "JURIDICO",
        "topic": "RDPM — classificação do comportamento policial-militar",
        "text": "QUESTÃO 180 - Para classificar o comportamento de uma praça, a autoridade verifica que, nos últimos cinco anos, foram aplicadas até duas repreensões e não há outras sanções relevantes no período considerado. Segundo o art. 54 do RDPM, qual classificação corresponde a esse critério?",
        "options": [
          "a) Excelente.",
          "b) Bom.",
          "c) Regular.",
          "d) Ótimo."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. Fundamentação: RDPM, art. 54, inciso II, Assuntos Juridicos-administrativos.pdf, p. 97. O comportamento ótimo corresponde ao período de cinco anos com até duas repreensões. Excelente exige dez anos sem sanção; bom tem critério próprio de dois anos e permanências; regular considera um ano e limites específicos de permanência/detenção."
      },
      {
        "id": 181,
        "subject": "JURIDICO",
        "topic": "RDPM — pedido de reconsideração de ato",
        "text": "QUESTÃO 181 - Um policial militar pretende impugnar ato disciplinar que reputa injusto. Conforme o art. 57 do RDPM, assinale a alternativa correta sobre o pedido de reconsideração de ato.",
        "options": [
          "a) Deve ser apresentado à autoridade imediatamente superior e não produz efeito suspensivo.",
          "b) Pode ser apresentado sucessivamente a várias autoridades, sem limite de quantidade, no prazo de dez dias.",
          "c) Deve ser encaminhado diretamente e uma única vez à autoridade que praticou ou aprovou o ato; tem efeito suspensivo e deve ser apresentado em até cinco dias da ciência do ato.",
          "d) Deve ser dirigido ao Poder Judiciário antes de qualquer análise administrativa."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fundamentação: RDPM, art. 57, caput e §§ 1º a 3º, Assuntos Juridicos-administrativos.pdf, p. 98. O pedido é dirigido diretamente à autoridade recorrida, uma única vez, tem efeito suspensivo e prazo máximo de cinco dias. A erra destinatário e efeito; B altera número de pedidos e prazo; D cria requisito não previsto."
      },
      {
        "id": 182,
        "subject": "JURIDICO",
        "topic": "RDPM — recurso hierárquico",
        "text": "QUESTÃO 182 - Após receber a solução do pedido de reconsideração de ato, o policial militar avalia interpor recurso hierárquico. Segundo o art. 58 do RDPM, assinale a alternativa correta.",
        "options": [
          "a) O recurso hierárquico deve, em regra, ser precedido do pedido de reconsideração; seu prazo de interposição é de cinco dias contados do conhecimento da solução ou do vencimento do prazo previsto no art. 57, § 4º.",
          "b) O recurso hierárquico pode ser apresentado diretamente, sem pedido de reconsideração, em qualquer matéria e no prazo de trinta dias.",
          "c) O prazo de interposição é de dez dias contados da prática do ato, e a autoridade destinatária dispõe de trinta dias para solucioná-lo.",
          "d) O recurso hierárquico não possui prazo de interposição e deve ser dirigido à mesma autoridade que praticou o ato, para uma segunda reconsideração."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fundamentação: RDPM, art. 58, § 1º e § 3º, item 1, Assuntos Juridicos-administrativos.pdf, pp. 98-99. A regra exige prévio pedido de reconsideração e fixa prazo de cinco dias após o conhecimento da solução, ressalvada a hipótese expressa do art. 57, § 4º. B, C e D alteram cabimento, destinatário ou prazo."
      },
      {
        "id": 183,
        "subject": "JURIDICO",
        "topic": "RDPM — revisão de atos disciplinares",
        "text": "QUESTÃO 183 - Uma autoridade examina a possibilidade de rever sanção disciplinar por irregularidade ou ilegalidade. Considerando o art. 62 do RDPM, assinale a alternativa correta.",
        "options": [
          "a) A revisão somente pode ocorrer por decisão judicial, sendo vedada a atuação de ofício da autoridade disciplinar.",
          "b) As autoridades competentes para aplicar sanção, exceto as ocupantes dos postos de Major e Capitão, podem praticar retificação, atenuação, agravação ou anulação, mediante ato motivado e publicado; a anulação está sujeita ao prazo de cinco anos da publicação.",
          "c) A autoridade pode agravar a sanção exclusivamente porque o militar interpôs recurso, ainda que não haja fundamento disciplinar.",
          "d) A anulação de sanção pode ser feita sem motivação e sem publicação, desde que a autoridade considere o ato inconveniente."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fundamentação: RDPM, arts. 62 a 66, Assuntos Juridicos-administrativos.pdf, pp. 100-101. O art. 62 prevê os atos de revisão, exclui as autoridades nos postos de Major e Capitão e exige motivação e publicação; a anulação só pode ocorrer em cinco anos. A elimina a revisão de ofício; C contraria a vedação de agravar em razão do recurso; D dispensa requisitos expressos."
      },
      {
        "id": 184,
        "subject": "JURIDICO",
        "topic": "RDPM — dispensa do serviço e recompensas",
        "text": "QUESTÃO 184 - Um comandante avalia conceder dispensa do serviço a policial militar por motivo excepcional. De acordo com o art. 69 do RDPM, assinale a alternativa correta.",
        "options": [
          "a) A dispensa do serviço é uma recompensa policial-militar e pode ser concedida livremente, sem limite anual.",
          "b) A dispensa do serviço pode ser concedida por qualquer superior hierárquico por até quinze dias, sem publicação.",
          "c) A dispensa do serviço é uma sanção disciplinar e só pode ser aplicada após procedimento acusatório.",
          "d) A dispensa do serviço não é recompensa policial-militar e somente pode ser concedida, a juízo do Comandante da Unidade, por motivo de força maior, limitada a seis dias por ano e publicada em boletim."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. Fundamentação: RDPM, art. 69 e parágrafo único, Assuntos Juridicos-administrativos.pdf, p. 101. A dispensa não é recompensa, depende de motivo de força maior a juízo do Cmt Unidade, limita-se a seis dias anuais e deve ser publicada. A, B e C atribuem natureza, competência ou limites incorretos."
      },
      {
        "id": 185,
        "subject": "JURIDICO",
        "topic": "RDPM — espécies de processo regular",
        "text": "QUESTÃO 185 - Para definir o processo regular aplicável a militar do Estado, a autoridade precisa considerar a condição funcional e o tempo de serviço policial-militar. Conforme o art. 71 do RDPM, assinale a alternativa correta.",
        "options": [
          "a) Para oficiais, Conselho de Justificação; para praças com dez ou mais anos de serviço, Conselho de Disciplina; para praças com menos de dez anos, Processo Administrativo Disciplinar.",
          "b) Para todos os militares, independentemente de posto, graduação ou tempo de serviço, aplica-se exclusivamente o Conselho de Disciplina.",
          "c) Para oficiais, Processo Administrativo Disciplinar; para praças com dez ou mais anos, Conselho de Justificação; para praças com menos de dez anos, Conselho de Disciplina.",
          "d) Para oficiais e praças com mais de dez anos, aplica-se Conselho de Justificação; para os demais, não há processo regular."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fundamentação: RDPM, art. 71, incisos I a III, Assuntos Juridicos-administrativos.pdf, p. 102. O dispositivo diferencia o processo regular conforme a categoria funcional e o tempo de serviço. B, C e D trocam os instrumentos ou criam exclusões não previstas."
      },
      {
        "id": 186,
        "subject": "JURIDICO",
        "topic": "RDPM — composição do Conselho de Disciplina",
        "text": "QUESTÃO 186 - Instaurado Conselho de Disciplina, deve ser definida sua composição e a função de cada integrante. À luz do art. 78 do RDPM, assinale a alternativa correta.",
        "options": [
          "a) O Conselho é composto por dois oficiais e um graduado, sendo o graduado obrigatoriamente o presidente.",
          "b) O Conselho é composto por três oficiais da ativa; o mais antigo, no mínimo Capitão, é o presidente, o seguinte em antiguidade ou precedência funcional é o interrogante, e o mais moderno é relator e escrivão.",
          "c) O Conselho é composto por três oficiais da reserva, sendo o mais moderno o presidente e o mais antigo o escrivão.",
          "d) O Conselho é composto por cinco oficiais da ativa, com funções distribuídas por sorteio, sem requisito mínimo para a presidência."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fundamentação: RDPM, art. 78, caput e § 1º, Assuntos Juridicos-administrativos.pdf, p. 103. O Conselho tem três oficiais da ativa; a composição funcional e o requisito mínimo de Capitão para presidente estão expressos no dispositivo. A, C e D alteram número, situação funcional ou funções."
      },
      {
        "id": 187,
        "subject": "JURIDICO",
        "topic": "RDPM — concurso de agentes e competência para instauração",
        "text": "QUESTÃO 187 - Um único ato disciplinar foi praticado em concurso por policiais militares pertencentes a OPM diferentes. Considerando o art. 80 do RDPM, assinale a alternativa correta.",
        "options": [
          "a) Deve ser instaurado um processo autônomo por acusado, ainda que os fatos sejam os mesmos.",
          "b) A autoridade de menor antiguidade entre as OPM envolvidas deve instaurar todos os processos, sem comunicação ao escalão superior.",
          "c) Deve ser instaurado apenas um processo; havendo acusados de OPM diversas, a instauração compete à autoridade imediatamente superior comum aos respectivos comandantes.",
          "d) O processo somente pode ser instaurado após sentença criminal transitada em julgado."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fundamentação: RDPM, art. 80, caput e § 1º, Assuntos Juridicos-administrativos.pdf, p. 104. O regulamento determina processo único para atos praticados em concurso e atribui a instauração, havendo OPM diversas, à autoridade imediatamente superior comum. A e B contrariam a regra de unidade e competência; D cria condição não prevista."
      },
      {
        "id": 188,
        "subject": "JURIDICO",
        "topic": "Lei nº 18.442/26 — promoção no QOEM por turma",
        "text": "QUESTÃO 188 - Ao planejar as promoções no Quadro de Oficiais de Estado-Maior, o setor de pessoal precisa aplicar a regra de promoção por turma prevista na Lei nº 18.442/26. Assinale a alternativa correta.",
        "options": [
          "a) A promoção de Oficiais do QOEM deve ocorrer exclusivamente por antiguidade individual, sem referência a turma de formação.",
          "b) A lei determina a promoção simultânea de todas as turmas do QOEM em cada semestre, independentemente de vagas.",
          "c) A promoção por turma é facultativa e pode ser substituída por promoção individual sem observância das condições legais.",
          "d) Para o Oficial do QOEM, processar-se-á, no mínimo, a promoção de uma turma por ano-base, para cada posto do respectivo Quadro, observadas as condições legais de vaga e disponibilidade orçamentária e financeira."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. Fundamentação: Lei nº 18.442/26, art. 8º, inciso I, conforme Assuntos Juridicos-administrativos.pdf, pp. 16-18. A regra é a promoção mínima de uma turma por ano-base para cada posto, sem afastar as condições gerais de vaga e disponibilidade orçamentária/financeira. A, B e C alteram a forma ou eliminam condicionantes."
      },
      {
        "id": 189,
        "subject": "JURIDICO",
        "topic": "Lei nº 18.442/26 — requisitos para promoção a 2º Tenente do QOE/QOM",
        "text": "QUESTÃO 189 - Um Subtenente PM da ativa pretende concorrer à promoção a Segundo-Tenente PM do QOE ou do QOM. Considerando os requisitos apresentados na Lei nº 18.442/26, assinale a alternativa correta.",
        "options": [
          "a) A promoção exige quatro anos na graduação de Subtenente, conclusão com aproveitamento do CHOE ou CHO-MUS correspondente, idoneidade moral, inclusão na primeira terça parte do almanaque, comportamento no mínimo ótimo, aptidão sem restrições em inspeção de saúde e ausência de agregação.",
          "b) Basta ter quatro anos na graduação, sendo dispensáveis o curso de habilitação, a idoneidade moral e a inspeção de saúde.",
          "c) A promoção exige comportamento no mínimo bom e inclusão em qualquer posição do almanaque, desde que haja vaga.",
          "d) A promoção pode ocorrer mesmo que o Subtenente esteja agregado ou não tenha concluído o curso de habilitação, se houver indicação do comandante."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fundamentação: Lei nº 18.442/26, disposições sobre promoção ao QOE/QOM e requisitos resumidos no material, Assuntos Juridicos-administrativos.pdf, pp. 21-22. O conjunto de requisitos inclui curso, quatro anos de interstício, idoneidade, primeira terça parte, comportamento ótimo, aptidão sem restrições e não agregação. B, C e D eliminam requisitos expressos."
      },
      {
        "id": 190,
        "subject": "JURIDICO",
        "topic": "Lei nº 18.442/26 — interstícios mínimos das praças",
        "text": "QUESTÃO 190 - Ao conferir os interstícios mínimos previstos na Lei nº 18.442/26 para promoções das praças, qual alternativa reproduz corretamente a sequência de requisitos temporais apresentada no material?",
        "options": [
          "a) 3º Sgt PM: um ano para 2º Sgt PM; 2º Sgt PM: dois anos para 1º Sgt PM; Soldado PM: quatro anos para Cb PM.",
          "b) 3º Sgt PM: no mínimo dois anos na graduação para 2º Sgt PM; 2º Sgt PM: no mínimo três anos para 1º Sgt PM; Soldado PM: no mínimo cinco anos na graduação para Cb PM.",
          "c) 3º Sgt PM: três anos para 2º Sgt PM; 2º Sgt PM: quatro anos para 1º Sgt PM; Soldado PM: seis anos para Cb PM.",
          "d) Os interstícios são fixados exclusivamente por ato de cada comandante de OPM, sem previsão legal."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fundamentação: Lei nº 18.442/26, art. 8º, critérios de promoção das praças, conforme Assuntos Juridicos-administrativos.pdf, p. 16. O material prevê dois anos para 3º Sgt PM ascender a 2º Sgt PM, três anos para 2º Sgt PM ascender a 1º Sgt PM e cinco anos para Soldado PM ascender a Cb PM. A e C alteram os prazos; D nega a previsão legal."
      },
      {
        "id": 191,
        "subject": "ORGANIZACIONAL",
        "topic": "I-36-PM — redução das férias anuais",
        "text": "QUESTÃO 191 - Ao elaborar o plano de férias do exercício, a Seção de Pessoal verifica que um policial militar acumulou, no exercício anterior, mais de dez não comparecimentos ao serviço em razão de situações previstas nas Instruções para os Afastamentos na PM. Qual consequência prevê o art. 11 da I-36-PM?",
        "options": [
          "a) As férias anuais são reduzidas de 30 para 20 dias, observadas as condições e hipóteses enumeradas no artigo.",
          "b) As férias anuais são automaticamente canceladas por todo o exercício seguinte, qualquer que seja a causa dos não comparecimentos.",
          "c) As férias anuais são reduzidas para 15 dias, desde que haja autorização judicial.",
          "d) O período de férias permanece em 30 dias, pois ausências e afastamentos não influenciam sua duração."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fundamentação: I-36-PM, art. 11, Assuntos Organizacionais.pdf, p. 9. O dispositivo reduz de 30 para 20 dias as férias quando houver mais de dez não comparecimentos no período de 1º de janeiro a 31 de dezembro do exercício anterior, considerados em conjunto os motivos enumerados. B e C criam consequências não previstas; D ignora a regra expressa."
      },
      {
        "id": 192,
        "subject": "ORGANIZACIONAL",
        "topic": "I-36-PM — formalização e publicidade do plano de férias",
        "text": "QUESTÃO 192 - Na conferência do Plano Anual de Férias, a autoridade verifica se o documento contém as informações e a publicidade exigidas pelas Instruções para os Afastamentos na PM. Assinale a alternativa correta.",
        "options": [
          "a) O início do gozo é contado a partir das 08h00 do primeiro dia, e o término ocorre às 08h00 do último dia, sem necessidade de publicidade.",
          "b) O plano deve permanecer reservado à Seção de Pessoal e pode omitir o exercício a que as férias se referem.",
          "c) O início do gozo é contado às 00h00 do dia indicado e o término às 24h00 do último dia do período; o plano deve indicar o exercício e ter publicidade em local visível.",
          "d) A publicidade do plano é obrigatória somente após o retorno do policial militar ao serviço."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fundamentação: I-36-PM, art. 5º, incisos IV a VI, Assuntos Organizacionais.pdf, p. 8. O plano deve considerar o início à zero hora, o término às 24 horas do último dia, indicar o exercício e permanecer afixado em local visível. A altera os horários; B e D contrariam as exigências de conteúdo e publicidade."
      },
      {
        "id": 193,
        "subject": "ORGANIZACIONAL",
        "topic": "I-36-PM — convalescença médica e licença para tratamento de saúde",
        "text": "QUESTÃO 193 - Um policial militar está temporariamente impossibilitado de comparecer ao serviço por motivo de saúde. O Oficial Médico PM avalia que há previsibilidade de cura em até dez dias ininterruptos. Segundo a I-36-PM, qual providência corresponde a essa hipótese?",
        "options": [
          "a) Afastamento por prazo indeterminado, concedido exclusivamente pelo Comandante da OPM.",
          "b) O próprio Oficial Médico PM responsável pelo atendimento da OPM deve indicar o prazo necessário e o local adequado para recuperação, regularizando o afastamento por prescrição de convalescença médica, sem ultrapassar dez dias ininterruptos.",
          "c) Licença para tratamento de saúde superior a dez dias, concedida diretamente pelo Oficial Médico PM sem encaminhamento à Junta de Saúde.",
          "d) Encaminhamento obrigatório imediato à Junta de Saúde, mesmo quando há previsão de cura em até dez dias."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fundamentação: I-36-PM, arts. 20, § 1º, e 21, caput, Assuntos Organizacionais.pdf, p. 13. Com previsão de cura em até dez dias, o Oficial Médico PM indica o prazo e local e prescreve convalescença; quando não há previsão nesse prazo, o policial deve ser encaminhado à Junta de Saúde. A, C e D alteram competência ou hipótese de encaminhamento."
      },
      {
        "id": 194,
        "subject": "ORGANIZACIONAL",
        "topic": "I-36-PM — providências diante de atestado médico civil",
        "text": "QUESTÃO 194 - Um policial militar recebe atestado médico civil que prescreve impossibilidade de comparecer ao serviço ou cumprir normalmente suas atribuições. Considerando o art. 23 da I-36-PM, assinale a alternativa correta.",
        "options": [
          "a) Deve aguardar o término do atestado e apresentá-lo somente ao setor de pessoal, sem comunicar o superior imediato.",
          "b) O atestado civil produz automaticamente todos os efeitos funcionais, dispensando qualquer deliberação de Oficial Médico PM.",
          "c) Deve encaminhar o atestado diretamente à Junta de Saúde, sem contato com a UIS ou com o superior imediato.",
          "d) Deve prontamente comunicar a condição ao superior imediato e apresentar-se imediatamente ao Oficial Médico PM da UIS responsável por sua OPM para deliberação sobre a ratificação do atestado."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. Fundamentação: I-36-PM, art. 23, caput, Assuntos Organizacionais.pdf, p. 14. O policial deve comunicar prontamente o superior imediato e apresentar-se ao Oficial Médico PM da UIS responsável para deliberação sobre a ratificação. A omite as providências; B atribui efeito automático ao atestado; C substitui o procedimento previsto."
      },
      {
        "id": 195,
        "subject": "ORGANIZACIONAL",
        "topic": "I-36-PM — internação em hospital civil ou entidade particular",
        "text": "QUESTÃO 195 - A OPM é informada de que um policial militar foi internado em hospital civil. Segundo o art. 25 da I-36-PM, qual sequência deve ser observada?",
        "options": [
          "a) A OPM deve aguardar alta hospitalar e somente depois informar a situação à Diretoria de Saúde.",
          "b) A internação deve ser comunicada imediatamente à OPM, que informará o Oficial Médico PM da UIS respectiva para, dentro do possível, realizar visita e regularizar a situação funcional; se ele não puder comparecer, a internação será comunicada à divisão competente da DS.",
          "c) A comunicação deve ser feita exclusivamente pelo hospital à autoridade judicial, sem atuação da OPM.",
          "d) O policial deve ser considerado automaticamente em licença para tratamento de saúde por todo o período de internação, sem regularização funcional."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fundamentação: I-36-PM, art. 25 e parágrafo único, Assuntos Organizacionais.pdf, p. 15. A internação deve ser informada imediatamente à OPM, que aciona o Oficial Médico PM da UIS; se a visita não for possível, comunica-se a Divisão de UIS e Saúde Ocupacional da DS. A posterga a comunicação; C afasta a OPM; D cria efeito automático não previsto."
      },
      {
        "id": 196,
        "subject": "ORGANIZACIONAL",
        "topic": "SisTAF — tentativas e realização dos testes do TAF-1",
        "text": "QUESTÃO 196 - Em processo seletivo de ingresso, um candidato não atinge o índice mínimo em um dos testes do TAF-1. Considerando o Anexo A da Diretriz nº PM3-001/03/25, assinale a alternativa correta.",
        "options": [
          "a) Todos os testes admitem duas tentativas adicionais, inclusive a corrida de 2.400 metros, e podem ser realizados em dias diferentes sem repetição.",
          "b) Somente a natação é eliminatória; os testes de condicionamento físico geral servem apenas para classificação.",
          "c) Todos os testes são eliminatórios; exceto a corrida de 2.400 metros, os demais admitem mais uma tentativa, e os testes de condicionamento físico geral devem ser realizados no mesmo dia ou, se isso não for possível, todos devem ser refeitos, descartando-se a pontuação anterior.",
          "d) A reprovação em qualquer teste permite que o candidato prossiga nos demais, desde que apresente justificativa ao avaliador."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fundamentação: Diretriz nº PM3-001/03/25 (SisTAF), Anexo A, itens 1.2 a 1.5, Assuntos Organizacionais.pdf, p. 345. Todos os testes são eliminatórios; a corrida de 2.400 m admite apenas uma oportunidade, os demais admitem mais uma tentativa, e os testes gerais devem ocorrer no mesmo dia ou ser integralmente refeitos. A, B e D contrariam essas regras."
      },
      {
        "id": 197,
        "subject": "ORGANIZACIONAL",
        "topic": "SisTAF — cadastro de responsáveis pelo treinamento físico",
        "text": "QUESTÃO 197 - Uma OPM designa policial militar para exercer função de treinador físico e pretende regularizar seu acesso ao sistema institucional. Conforme a Diretriz nº PM3-001/03/25, assinale a alternativa correta.",
        "options": [
          "a) O credenciamento dos membros da SisTAF é prévio pela EEF e se materializa pela inclusão dos treinadores físicos no SITAF; os policiais que exercem as funções indicadas na diretriz e os docentes de Educação Física também devem estar cadastrados.",
          "b) O cadastro no SITAF é facultativo para todos os treinadores físicos e só é exigido quando houver aplicação de TAF-1.",
          "c) A OPM pode credenciar diretamente qualquer policial, sem participação da EEF, e dispensar o registro das informações de treinamento.",
          "d) O cadastro no SITAF é reservado aos Oficiais do QOS, sendo vedado a policiais militares formados em Educação Física por outras instituições."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fundamentação: Diretriz nº PM3-001/03/25 (SisTAF), itens 6.4.2 a 6.4.2.3, Assuntos Organizacionais.pdf, pp. 337-338. O credenciamento é prévio pela EEF e materializado no SITAF; as funções e docentes previstos devem estar cadastrados. B e C eliminam exigências; D cria restrição não prevista, pois formados por outras instituições podem solicitar cadastro mediante envio do certificado à EEF."
      },
      {
        "id": 198,
        "subject": "ORGANIZACIONAL",
        "topic": "SisTAF — avaliação antropométrica antes do TAF periódico",
        "text": "QUESTÃO 198 - Antes de aplicar o TAF de avaliação periódica, o Treinador Físico da OPM organiza os procedimentos prévios e o registro dos resultados. Segundo a Diretriz nº PM3-001/03/25, assinale a alternativa correta.",
        "options": [
          "a) A avaliação antropométrica é facultativa e só pode ser feita depois da aplicação do TAF.",
          "b) A avaliação antropométrica substitui os testes físicos quando o policial militar já tiver realizado inspeção anual de saúde.",
          "c) Os resultados antropométricos são registrados exclusivamente pelo Oficial Médico, sem lançamento no SITAF.",
          "d) A avaliação antropométrica deve ocorrer obrigatoriamente antes do TAF de avaliação periódica, incluindo IMC, circunferência abdominal e percentual de gordura corporal; seus resultados devem ser inseridos no SITAF pelo Treinador Físico."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. Fundamentação: Diretriz nº PM3-001/03/25, itens 6.5.1.1 e 6.5.1.2, Assuntos Organizacionais.pdf, p. 338. A avaliação precede obrigatoriamente o TAF periódico, abrange os dados indicados e tem resultados inseridos no SITAF pelo Treinador Físico. A e B tornam facultativo ou substitutivo o procedimento; C atribui o registro a agente diverso."
      },
      {
        "id": 199,
        "subject": "ORGANIZACIONAL",
        "topic": "TCI — conceito de anamnese",
        "text": "QUESTÃO 199 - Na preparação de programa de treinamento físico, o responsável reúne informações sobre histórico de saúde, hábitos de vida, condições físicas e mentais do policial militar, por entrevista ou questionário estruturado, para identificar limitações e orientar exercícios seguros. Segundo a Diretriz do Treinamento Continuado Institucional, esse procedimento denomina-se:",
        "options": [
          "a) Calendário Técnico-Operacional (CTO).",
          "b) Anamnese.",
          "c) Calendário do TCI.",
          "d) Avaliação de desempenho operacional."
        ],
        "answer": 1,
        "explanation": "Gabarito: B. Fundamentação: Diretriz nº PM3-001/03/24 (TCI), item 6.1.1, Assuntos Organizacionais.pdf, p. 443. Anamnese é a coleta sistemática de informações de saúde, hábitos e condições físicas e mentais por entrevista ou questionário estruturado, para identificar condições e orientar programas seguros. A e C são calendários anuais; D não corresponde ao conceito definido."
      },
      {
        "id": 200,
        "subject": "ORGANIZACIONAL",
        "topic": "I-36-PM — nova inspeção após incapacidade temporária",
        "text": "QUESTÃO 200 - Um policial militar permanece temporariamente incapacitado para o serviço ou apto com restrição médica por período superior a sessenta dias. De acordo com o art. 27 da I-36-PM, qual providência deve ocorrer ao final desse período?",
        "options": [
          "a) A situação é encerrada automaticamente, sem nova inspeção, desde que exista atestado médico civil.",
          "b) A OPM deve conceder automaticamente férias anuais adicionais de trinta dias.",
          "c) O policial militar deve ser submetido a nova inspeção médica; o próprio interessado é responsável por agendar seu comparecimento na UIS ao final do período, observadas as regras aplicáveis quando houver Junta de Saúde.",
          "d) A nova inspeção somente pode ocorrer após cento e oitenta dias e depende de solicitação judicial."
        ],
        "answer": 2,
        "explanation": "Gabarito: C. Fundamentação: I-36-PM, art. 27 e § 1º, Assuntos Organizacionais.pdf, p. 15. A incapacidade temporária ou aptidão com restrição por mais de 60 dias exige nova inspeção médica ao final do período, cabendo ao interessado agendar seu comparecimento na UIS. A, B e D criam dispensa, benefício ou prazo inexistentes."
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
