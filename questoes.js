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
        "text": "Durante o turno de serviço, o CFP verifica que diferentes Unidades de Serviço estão empregadas em programas de policiamento e atividades operacionais na área de responsabilidade. Ao constatar a necessidade de alinhar a execução dessas atividades às determinações do escalão superior, o CFP avalia as medidas de coordenação e supervisão cabíveis. Considerando a NORSOP, assinale a alternativa correta:",
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
        "text": "De acordo com a Diretriz nº PM3-001/02/20 (NORSOP), como está fixada a estrutura básica do Sistema Operacional de Policiamento PM? Assinale a alternativa correta.",
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
        "text": "O CGP da 2ª Companhia observa que uma viatura permanece há tempo considerável no atendimento de uma ocorrência de perturbação do sossego. Ao mesmo tempo, há outras ocorrências pendentes na Subárea. O graduado solicita à equipe informações sobre o andamento do atendimento e os motivos da permanência no local, para avaliar a situação operacional. À luz da NORSOP, assinale a alternativa correta:",
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
        "text": "Considerando a classificação dos princípios básicos e das diretrizes básicas apresentada no material de NORSOP, analise as proposições:\n\nI. Excelência na Gestão é classificada como princípio básico.\nII. Direitos Humanos é classificado como princípio básico.\nIII. Autonomia Operacional é classificada como princípio básico.\nIV. Universalidade é classificada como diretriz básica.\n\nAssinale a alternativa que reúne apenas as proposições corretas.",
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
        "text": "Em um incidente policial estático, o Comandante do Incidente inicia a organização das funções de comando no local. Ainda não há uma estrutura física específica montada, mas um dos veículos presentes pode ser utilizado inicialmente para essa finalidade. Considerando a Diretriz nº PM3-003/02/23 (SCIPM), assinale a alternativa correta:",
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
        "text": "Durante um incidente crítico, representantes de diferentes órgãos públicos comparecem ao local para apoiar a resposta. O Comandante do Incidente precisa designar integrante do Staff de Comando para manter a ligação com esses representantes. De acordo com a Diretriz nº PM3-003/02/23 (SCIPM), qual função corresponde a essa atribuição?",
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
        "text": "A Diretriz nº PM3-001/02/23 apresenta conceitos empregados no Sistema de Comando e Controle. Assinale a alternativa INCORRETA.",
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
        "text": "No âmbito do Sistema de Comando e Controle, uma OPM de nível Batalhão/Companhia precisa identificar o componente responsável pelos serviços essenciais de C2 no nível operacional. Conforme a Diretriz nº PM3-001/02/23, assinale a alternativa correta:",
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
        "text": "Durante a conferência das regras de armazenamento das Câmeras Operacionais Portáteis (COP), um policial precisa distinguir o prazo de temporalidade mínima dos vídeos de rotina daquele aplicável às demais evidências digitais. Conforme a Diretriz nº PM3-001/02/25, assinale a alternativa correta:",
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
        "text": "Após uma ocorrência com resultado morte decorrente de intervenção policial (MDIP), o CFP verifica que os policiais envolvidos utilizaram Câmeras Operacionais Portáteis. Considerando a Diretriz nº PM3-001/02/25, assinale a alternativa correta quanto ao recolhimento dos equipamentos e ao upload do conteúdo captado:",
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
        "text": "11 - Durante a conferência dos registros de uma ocorrência, o comandante constata que um policial militar deixou de produzir a gravação audiovisual exigida para a situação, sem justificativa registrada. De acordo com a Diretriz nº PM3-001/02/25 (COP), qual providência procedimental deve ser adotada diante da ausência injustificada de registro?",
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
        "text": "12 - Um policial militar envolvido em ocorrência de grande repercussão será ouvido formalmente sobre os fatos. Antes de prestar suas declarações, solicita consultar a gravação realizada por sua própria Câmera Operacional Portátil (COP). Considerando a Diretriz nº PM3-001/02/25, assinale a alternativa correta.",
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
        "text": "13 - Uma OPM pretende empregar aeronave não tripulada para apoiar uma ação de policiamento, com transmissão de imagens para melhorar a compreensão do cenário pelos responsáveis pela operação. Considerando a finalidade estabelecida na Diretriz nº PM3-005/02/24, assinale a alternativa correta.",
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
  "text": "14 - Ao revisar a distribuição dos recursos humanos e materiais de uma OPM territorial, um Capitão PM precisa distinguir os Programas de Policiamento Primários dos Complementares, conforme a NORSOP. Assinale a alternativa que apresenta exclusivamente os Programas de Policiamento Primários.",
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
        "text": "15 - Durante o planejamento operacional, o Comando de um Batalhão avalia o emprego da Força Tática para reforçar a resposta a ocorrências graves e reduzir os efeitos da criminalidade violenta em áreas de maior incidência. À luz da Diretriz nº PM3-003/02/20, assinale a alternativa correta.",
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
        "text": "16 - Durante o patrulhamento no perímetro escolar, uma equipe presencia adolescente praticando ato infracional. Considerando as disposições do Estatuto da Criança e do Adolescente reproduzidas na Diretriz nº PM3-004/02/20 (Programa de Policiamento Escolar), assinale a alternativa correta.",
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
  "text": "17 - Durante o patrulhamento, uma equipe identifica um obstáculo na via que prejudica a livre circulação e oferece risco aos usuários. Considerando as orientações de segurança viária previstas na NORSOP, assinale a alternativa correta quanto às providências a serem adotadas.",
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
        "text": "18 - Ao organizar o emprego de uma Patrulha Rural, o comandante precisa identificar a finalidade do Programa de Policiamento Rural e o conceito de Patrulha Rural previstos na Diretriz nº PM3-007/02/20. Assinale a alternativa correta.",
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
        "text": "19 - Ao assumir o comando de uma Subárea, um Capitão PM verifica que o Conselho Comunitário de Segurança (CONSEG) local está inativo. Considerando as atribuições de comando territorial previstas na NORSOP e as diretrizes do Programa de Policiamento Comunitário, assinale a alternativa correta.",
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
  "text": "20 - Durante uma operação policial-militar, o Comandante responsável pelas ações em campo verifica a necessidade de integrar a atuação da Polícia Militar com órgãos externos. Segundo a Diretriz nº PM3-003/02/23 (SCIPM), qual alternativa descreve corretamente a instituição da Sala de Gerenciamento de Incidentes?",
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
        "text": "21 - Durante patrulhamento ostensivo, uma Unidade de Serviço identifica circunstâncias que podem sugerir a prática de ações típicas de crime organizado. Considerando a Diretriz nº PM3-001/02/24, assinale a alternativa correta quanto às providências previstas para a equipe e para os policiais militares em funções de comando e supervisão.",
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
        "text": "22 - Ao revisar o módulo de configuração territorial de uma OPM, um oficial precisa distinguir Subárea, Setor e Subsetor. Segundo a NORSOP, qual conceito corresponde ao Subsetor?",
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
        "text": "23 - Durante um incidente crítico, ocorre a transferência da função de Comandante do Incidente. Para que a continuidade da resposta seja mantida com segurança e eficácia, qual procedimento corresponde ao elemento essencial do SCIPM denominado Designação e Transferência do Comando por Processo?",
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
        "text": "24 - Um comandante precisa transformar os objetivos e metas definidos nos níveis estratégico e tático em processos detalhados e padrões de trabalho a serem observados pelos escalões durante ações, operações e missões policial-militares. Segundo a NORSOP, a atividade descrita pertence a qual nível de planejamento?",
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
        "text": "25 - Durante uma missão em que a disciplina de luz e som é necessária para preservar a segurança da equipe, o policial que utiliza a COP Motorola precisa acionar o modo tático, também denominado velado ou stealth. Conforme o material de COP Motorola constante de Assuntos Operacionais.pdf, qual é o efeito desse modo?",
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
        "text": "26 - Uma Unidade de Serviço da Matriz Operacional I solicita apoio tático de uma Força Tática pertencente à própria OPM territorial. A situação não exige recursos adicionais do Comando de Policiamento nem apoio especializado. Conforme a NORSOP, qual combinação corresponde ao emprego descrito?",
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
        "text": "27 - Em uma operação com vários respondedores, o Comandante do Incidente verifica que um integrante recebe orientações conflitantes de dois supervisores. Considerando o elemento essencial Unidade de Comando do SCIPM, assinale a alternativa correta.",
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
        "text": "28 - No planejamento institucional, são definidas estratégias globais de longo prazo que direcionam o emprego combinado dos Órgãos de Direção, Apoio, Execução e Assessoria. De acordo com a NORSOP, essa atribuição caracteriza qual nível de planejamento?",
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
        "text": "29 - Um policial militar na condição de acusado, por meio de seu defensor, requer acesso a registros audiovisuais da COP para subsidiar procedimento apuratório. Conforme a Diretriz nº PM3-001/02/25, a solicitação deve ser encaminhada:",
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
        "text": "30 - Uma OPM precisa gerir os ativos operacionais disponíveis de acordo com os problemas e as peculiaridades territoriais, em processo de melhoria contínua voltado à redução criminal e ao aumento da percepção de segurança. Segundo a NORSOP, essa metodologia denomina-se:",
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
        "text": "31 - Durante o desenvolvimento de atividade típica, uma equipe de Força Tática recebe solicitação emergencial que exige primeiro atendimento. Considerando a Diretriz nº PM3-003/02/20, assinale a alternativa correta.",
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
        "text": "32 - Em um incidente crítico, o Comandante do Incidente precisa de assessoramento para elaborar os planos de ação, captar os recursos necessários, coletar e analisar informações sensíveis e registrar as ações implementadas. Segundo o SCIPM, qual função do Estado-Maior Operacional possui essas atribuições?",
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
        "text": "33 - Considerando as definições da NORSOP para as formas de atuação operacional, analise as proposições:\n\nI. Ação policial-militar caracteriza a atividade rotineira da Unidade de Serviço, voltada à prevenção criminal e ao aumento da percepção de segurança.\nII. Operação policial-militar envolve o emprego combinado de várias Unidades de Serviço, em ações simultâneas e sucessivas, com objetivo comum delimitado no tempo e no espaço.\nIII. Missão policial-militar envolve a aplicação pontual e específica de efetivos e meios, limitada no tempo e no espaço, para atender demanda imediata que afeta o serviço policial-militar.\nIV. Operação policial-militar caracteriza necessariamente a atuação isolada de uma única Unidade de Serviço, sem planejamento prévio.\n\nAssinale a alternativa correta.",
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
        "text": "34 - Uma Unidade de Serviço é despachada pelo Sistema de Informações Operacionais da PM (SIOPM) para atendimento de ocorrência. No modelo de acionamento remoto-automático por despacho previsto na Diretriz das COP, qual evento ativa a gravação da câmera vinculada à US demandada?",
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
        "text": "35 - Uma OPM organiza atendimento especializado a mulheres em situação de violência doméstica e familiar, com visitas comunitárias e solidárias, orientação preventiva e atuação voltada à proteção das vítimas. Conforme a Nota de Instrução nº PM3-002/02/26 (Sala de Operações), assinale a alternativa correta sobre a Patrulha SP Mulher Segura.",
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
        "text": "36 - Um incidente crítico relacionado à atuação típica do crime organizado abrange a área de responsabilidade de mais de um Comando de Policiamento. De acordo com a Diretriz nº PM3-001/02/24, qual órgão deve elaborar e manter atualizado o Plano de Contingência para essa resposta integrada?",
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
        "text": "37 - Durante uma operação com aeronave não tripulada, surge uma questão relativa à segurança do voo e à condução da aeronave. Conforme a Diretriz nº PM3-005/02/24, qual integrante da Equipe Drone possui autoridade decisória sobre tudo o que se relacionar ao UAS enquanto estiver em voo?",
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
        "text": "38 - Em uma comunidade, conflitos recorrentes entre moradores podem ser encaminhados para uma estrutura policial-militar destinada à mediação, desde que a atividade seja conduzida por policial capacitado e formalmente habilitado. Segundo a Diretriz nº PM3-005/02/20 (Programa de Policiamento Comunitário), qual estrutura corresponde a essa descrição?",
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
        "text": "39 - No Sistema de Comando e Controle, uma equipe composta por policiais a pé ou embarcados executa ações em determinado território e está integrada a um Centro de Operações. Segundo a Diretriz nº PM3-001/02/23, essa fração é conceituada como:",
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
        "text": "40 - Durante fiscalização de trânsito, o policial militar constata infração administrativa, mas a situação também exige providências imediatas para garantir a segurança de usuários da via. Considerando os princípios do Programa de Policiamento de Trânsito, assinale a alternativa INCORRETA.",
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
        "text": "41 - O comandante de uma OPM precisa organizar a cobertura dos estabelecimentos de ensino da Subárea e há recursos insuficientes para atendimento simultâneo de todas as escolas. Conforme a Diretriz nº PM3-004/02/20, qual ordem de prioridade deve ser observada?",
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
        "text": "42 - Ao estruturar a resposta a um incidente crítico, o Comandante do Incidente estabelece instalações padronizadas conforme a complexidade do fenômeno, dotadas de segurança, denominação comum e sinalização. Assinale a alternativa que NÃO corresponde a um dos exemplos expressamente citados pelo SCIPM.",
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
        "text": "43 - Em incidente que exige atuação conjunta de diferentes agências, a adoção de métodos, estruturas e termos comuns facilita a interoperabilidade da força responsiva e otimiza tempo e recursos. Segundo o SCIPM, essa descrição corresponde a qual princípio?",
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
        "text": "44 - Ao assumir uma área em que ainda não existe Conselho Comunitário de Segurança (CONSEG), o comandante avalia formas de ampliar a participação comunitária no diagnóstico e na solução dos problemas locais. Conforme a Diretriz nº PM3-005/02/20, assinale a alternativa correta.",
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
        "text": "45 - Ao final do turno, o policial militar responsável por uma COP precisa cumprir a rotina de transferência das gravações. Segundo a Diretriz nº PM3-001/02/25, assinale a alternativa correta quanto à sequência e à responsabilidade pelas evidências digitais.",
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
        "text": "46 - Um comandante avalia a implantação do Programa de Policiamento Rural em uma região com propriedades agrícolas, atividades turísticas e registros esporádicos de delitos que afetam a percepção de segurança. Considerando a Diretriz nº PM3-007/02/20, analise as proposições:\n\nI. A presença de comunidades rurais cujas características se enquadrem na diretriz pode orientar a implantação do programa.\nII. Atividades sociais e econômicas rurais que possam constituir focos de ações criminosas ou refúgio de infratores são fatores relevantes.\nIII. Índices criminais ou ações delituosas que, mesmo esporádicas, afetem a percepção de segurança no ambiente rural podem justificar a implantação.\n\nAssinale a alternativa correta.",
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
        "text": "47 - Durante uma ocorrência, o Comandante do Incidente identifica a necessidade de integrar a resposta da Polícia Militar com órgãos externos. Segundo a Diretriz nº PM3-003/02/23, assinale a alternativa correta sobre a instituição da Sala de Gerenciamento de Incidentes.",
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
        "text": "48 - Considerando as etapas de análise crítica dos indicadores que subsidiam o Plano de Policiamento Inteligente (PPI), analise as proposições:\n\nI. A RAC-Nível I é desenvolvida no âmbito dos Batalhões para avaliar diagnósticos situacionais e estabelecer alternativas de solução para controle de indicadores criminais, aumento da produtividade e redução do tempo-resposta.\nII. A RAC-Nível II é realizada sob responsabilidade dos Comandos de Policiamento do Interior e de Área, para analisar indicadores de desempenho e avaliar medidas de controle, verificando alinhamento com Planos Diretores e Plano de Comando.\nIII. A RAC-Nível III ocorre no âmbito do Comando-Geral, presidida pelo Coord Op PM, para avaliar estratégias regionais em relação aos Planos Diretores e ao Plano de Comando.\n\nAssinale a alternativa correta.",
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
        "text": "49 - Uma OPM planeja constituir uma Equipe Tática em viatura de quatro rodas. O efetivo disponível, contudo, é inferior ao mínimo ordinário previsto ou não há Subtenente/Sargento para exercer a função de comando. Considerando a Diretriz nº PM3-003/02/20, assinale a alternativa correta.",
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
        "text": "50 - A Sala de Operações recebe uma demanda que não apresenta risco iminente à vida, à integridade física, ao patrimônio ou ao meio ambiente e que pode ser solucionada por orientação ou atendimento remoto. Conforme a Nota de Instrução nº PM3-002/02/26, em quais condições a demanda pode ser tratada pelo Serviço de Intervenção Remota (SIR)?",
        "options": [
          "a) Sempre que houver ocorrência criminal, independentemente da necessidade de providências presenciais ou de risco iminente.",
          "b) Somente após uma Unidade de Serviço comparecer ao local e constatar pessoalmente a inexistência de risco.",
          "c) Apenas quando o solicitante dispensar qualquer registro nos sistemas corporativos e aceitar o encerramento sem orientação.",
          "d) Quando se tratar de ocorrência não emergencial previamente descrita em rol específico, sem risco iminente e passível de atendimento inicial, triagem ou solução por orientação, mediação ou comunicação remota."
        ],
        "answer": 3,
        "explanation": "Gabarito: D. Fundamentação: Nota de Instrução nº PM3-002/02/26 (Sala de Operações), itens 6.1.8 e 6.3.7.11.1 a 6.3.7.11.3, em Assuntos Operacionais.pdf, p. 238 e 244-245. O SIR se destina a demandas não emergenciais previamente descritas, sem risco iminente, passíveis de solução remota. A e B ampliam ou restringem indevidamente os critérios; C cria condição não prevista. Trecho: “atendimento remoto de ocorrência classificada como não emergencial e previamente descrita em rol específico, caracterizada pela ausência de risco iminente [...] com o objetivo de aumentar a disponibilidade de US”."
      
];

// Estrutura de Exportação e Integração ao index.html
const BANCO_SIMULADOS = {
    "simulado_01": {
        "titulo": "Simulado Geral ACP II/26 - Processo de Habilitação ao Posto de Capitão PM",
        "questoes": BANCO_GERAL_QUESTOES
    }
};

window.questionsDatabase = BANCO_GERAL_QUESTOES;
