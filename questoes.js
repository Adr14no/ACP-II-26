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
