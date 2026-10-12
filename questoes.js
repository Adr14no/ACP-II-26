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
