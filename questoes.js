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
        "id": 50,
        "subject": "OPERACIONAL",
        "topic": "COP Motorola - identificação da evidência digital",
        "text": "Sobre o preenchimento do campo ID (AnoMêsDiaTalão) na classificação de evidência digital produzida por COP, analise as proposições.\n\nI. Para evidência vinculada ao talão nº 37, ocorrido em 12/10/2026, o campo deve ser preenchido como “2026101237”.\nII. Para evidência decorrente de abordagem, intervenção ou interação sem relação com talão de ocorrência, deve ser lançado apenas o valor da data, como “20261012”.\nIII. Para padronizar o comprimento do campo, o número do talão deve ser completado com zeros à esquerda.",
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
        "text": "Uma ocorrência apresenta gravidade e complexidade que exigem recursos humanos, materiais e capacitações indisponíveis nas OPM territoriais. Para classificar corretamente o apoio, o oficial deve relacionar a Matriz Operacional e o Nível de Resposta previstos na NORSOP. Assinale a alternativa correta.",
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
        "text": "No SCIPM, o Comandante do Incidente distribui funções entre integrantes de seu Estado-Maior. Qual alternativa associa corretamente cada função à atribuição normativa correspondente?",
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
        "text": "A Coordenação Operacional analisa duas operações: a primeira abrange mais de uma região e envolve OPM de Matrizes Operacionais distintas; a segunda possui abrangência estadual. Considerando a Diretriz de C2, qual designação de Centro de Comando e Controle (CC2) corresponde a cada situação?",
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
        "text": "À luz do SCIPM, analise as proposições sobre a designação do Comandante do Incidente (Cmt Inc) em incidentes críticos policiais.\n\nI. Nos incidentes estáticos, o Cmt Inc será, em regra, policial militar da OPM da Matriz Operacional I com responsabilidade territorial sobre o local, ou da Matriz III quando se tratar de Nível de Resposta 4, conforme a natureza do fenômeno.\nII. Nos incidentes dinâmicos, o Chefe de Operações do COPOM será o Cmt Inc até a estabilização, quando o evento passa a assumir características de incidente estático.\nIII. Nos incidentes dinâmicos, o policial de maior posto ou graduação presente no local substitui automaticamente o Chefe de Operações do COPOM como Cmt Inc e assume toda a função de comando.",
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
        "text": "Considerando a composição mínima da Equipe Drone e as funções dos seus integrantes, analise as proposições.\n\nI. A equipe será composta, no mínimo, pelo Piloto Remoto em Comando (RPIC) e pelo Observador de UAS.\nII. O policial militar na função de Segurança é componente obrigatório em toda Equipe Drone, sem possibilidade de exceção.\nIII. O Observador auxilia a condução segura do voo pela observação visual da aeronave e do espaço aéreo e pela comunicação permanente com o RPIC, sem uso de equipamentos óticos, exceto lentes corretivas.",
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
        "text": "Na gestão das informações da Sala de Operações, devem ser distinguidas as regras de confidencialidade e disponibilidade. Analise as proposições.\n\nI. A confidencialidade exige resguardar o caráter sigiloso das informações sensíveis e reforçar o cumprimento da Lei de Acesso à Informação e da Lei Geral de Proteção de Dados.\nII. A disponibilidade autoriza fornecer informações a qualquer integrante da Instituição que as solicite, ainda que não tenha necessidade operacional de conhecê-las.\nIII. Dados preservados para consulta futura podem ser suprimidos pelo operador sempre que deixarem de ser úteis ao turno, sem anuência do Supervisor da Sala de Operações.",
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
        "text": "Durante a estruturação da resposta a um incidente, o Estado-Maior precisa distinguir o Plano de Ação do Incidente (PAI) de outros instrumentos do SCIPM. Assinale a alternativa que reúne os elementos normativos próprios do PAI.",
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
        "text": "À luz das orientações gerais para execução do Policiamento Comunitário, analise as proposições.\n\nI. O policial empregado deve dispor de tempo suficiente para conquistar a confiança e desenvolver parcerias com a comunidade, sendo desaconselhável a substituição constante.\nII. O policial deve estar apto a coletar informações junto à comunidade e entrevistar moradores e outras partes interessadas para obter indicadores úteis ao policiamento comunitário.\nIII. O efetivo deve conhecer as características da comunidade, manter vínculos permanentes com cidadãos e lideranças e adotar postura proativa na busca de soluções, incluindo a elaboração de RAIA, se for o caso.\nIV. O policial deve receber críticas e sugestões da comunidade, mas o encaminhamento delas é dispensável quando não houver consenso entre os envolvidos.",
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
        "text": "Em uma OPM cujas COP não dispõem de acionamento remoto-intencional nem remoto-automático, analise as providências previstas para reforçar a gravação de fatos de interesse policial.\n\nI. Em ocorrência despachada pelo COPOM/CAD, o despachador deve, além de transmitir os elementos-base, reiterar à Unidade de Serviço a necessidade de acionamento manual.\nII. Se a Unidade de Serviço comunicar diretamente ao COPOM/CAD uma circunstância de intervenção policial ou interação com o público, o despachador também deve reiterar o acionamento manual.\nIII. Os escalões de supervisão, como CFP e CGP ou equivalentes, devem reforçar a necessidade por rede rádio ou fiscalização direta.",
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
        "text": "Uma Unidade de Serviço vinculada à Matriz Operacional II ou III não está executando, naquele momento, sua atividade típica de policiamento ostensivo. À luz da NORSOP, qual emprego supletivo pode ser admitido?",
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
        "text": "Durante um incidente crítico, o Comandante do Incidente precisa manter uma visão atualizada dos recursos humanos e materiais empregados e dos serviços disponíveis. Segundo o SCIPM, qual instrumento corresponde especificamente ao gerenciamento dos recursos?",
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
        "text": "Sobre a designação e as atribuições do Oficial Coordenador de Operação de UAS, analise as proposições.\n\nI. O Cmt Btl deve designá-lo formalmente e informar a nomeação ao CAvPM, bem como eventual alteração da designação.\nII. Cabe ao Oficial Coordenador monitorar e controlar as atividades das Equipes Drone e fiscalizar os planos de ação elaborados pelo Cmt OPM.\nIII. A autoridade decisória sobre tudo o que se relaciona ao UAS durante o voo pertence ao Oficial Coordenador, e não ao RPIC.",
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
        "text": "A Diretriz das COP delimita quem pode acessar a funcionalidade de transmissão ao vivo. Analise as proposições.\n\nI. Cmt OPM podem acessar a partir do nível mínimo de Companhia PM.\nII. Qualquer policial militar, independentemente de função de comando ou supervisão, pode acessar livremente a transmissão.\nIII. O COPOM São Paulo ou Regional pode acessar conforme a área de atuação.\nIV. Outros representantes de OPM podem acessar quando devidamente autorizados pela Coord Op PM.",
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
        "text": "Considere dois cenários: (1) policiamento ostensivo de trânsito na Região Metropolitana ou no Interior, fora de via sob responsabilidade do Estado; (2) policiamento ostensivo de trânsito em via sob responsabilidade do Estado. Conforme a Diretriz nº PM3-006/02/20, qual distribuição de competência está correta?",
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
        "text": "Ao ampliar a estrutura de resposta a um incidente crítico, o Comandante do Incidente considera incorporar novas funções e, após a redução dos riscos, desmobilizar parte da estrutura. Qual afirmação traduz a definição de organização modular do SCIPM?",
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
        "text": "No Programa de Policiamento Escolar, analise as obrigações atribuídas aos Cmt OPM quanto aos estabelecimentos de ensino que possuam pessoas com deficiência (PcD) na comunidade escolar.\n\nI. A partir do nível mínimo de Companhia PM, identificar estabelecimentos em que PcD possam necessitar de equipamentos ou procedimentos adaptados durante o atendimento de ocorrências.\nII. Manter atualizados registros referentes à quantidade de pessoas nessas condições e à natureza das respectivas deficiências.\nIII. Limitar a identificação às ocorrências realizadas dentro do estabelecimento, excluindo eventual deslocamento ao distrito policial ou hospital.",
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
        "text": "Para potencializar os resultados do Policiamento Comunitário, a Diretriz nº PM3-005/02/20 estabelece providências específicas para as OPM. Analise as proposições.\n\nI. A sistemática de atuação relativa às visitas comunitárias deve ser estabelecida semestralmente por documento próprio de Estado-Maior, visando coletar informações para questionários divulgados pela Coord Op PM.\nII. As OPM devem coordenar visitas comunitárias ou solidárias, campanhas ou reuniões comunitárias e adotar medidas de controle do correto registro das informações no SICoordOp.\nIII. A sistemática deve ser anual, e o registro no SICoordOp é facultativo quando houver reunião presencial.",
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
        "text": "Na Região Metropolitana ou no Interior, o comando avalia empregar ocasional ou programadamente uma Unidade de Serviço de outro Programa de Policiamento no policiamento ostensivo de trânsito. À luz da Diretriz nº PM3-006/02/20, analise as proposições.\n\nI. O emprego de US de outros programas ou de Atividades Operacionais Diversas é admitido desde que as atividades próprias por elas executadas não sofram solução de continuidade.\nII. O emprego excepcional do CPTran em operações próprias ou em apoio/reforço pode ocorrer em circunstâncias especiais quando houver carências técnicas apresentadas pelas OPM territoriais.\nIII. Toda US de outro programa empregada ocasionalmente no trânsito deve, por esse motivo, ser permanentemente incorporada ao efetivo específico do Programa de Policiamento de Trânsito.",
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
        "text": "Uma ocorrência excede a capacidade operativa das OPM territoriais subordinadas e demanda recursos humanos e meios materiais adicionais vinculados diretamente ao Comando de Policiamento. Não se trata de apoio tático por contingente da Matriz II nem de apoio especializado próprio da Matriz III. Qual classificação corresponde à NORSOP?",
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
        "text": "Quando não é possível equipar integralmente o efetivo com COP, a Diretriz estabelece uma ordem de prioridade de distribuição. Qual alternativa reproduz corretamente a sequência normativa, incluindo a ordem interna das funções de comando e supervisão?",
        "options": [
          "a) Programas Primários (Radiopatrulha; Força Tática); Programas Complementares (Escolar; Trânsito; Rural; Comunitário); Atividades Operacionais Diversas; funções de comando/supervisão (CGP; CFP; Supervisor Regional).",
          "b) Programas Primários (Força Tática; Radiopatrulha); Programas Complementares (Trânsito; Escolar; Comunitário; Rural); funções de comando/supervisão; Atividades Operacionais Diversas.",
          "c) Programas Primários (Radiopatrulha; Força Tática); Programas Complementares (Escolar; Rural; Trânsito; Comunitário); funções de comando/supervisão (CFP; CGP; Supervisor Regional); Atividades Operacionais Diversas.",
          "d) Programas Primários (Radiopatrulha; Força Tática); Programas Complementares (Escolar; Trânsito; Rural; Comunitário); funções de comando/supervisão (CGP; CFP; Supervisor Regional); Atividades Operacionais Diversas."
        ],
        "answer": 0,
        "explanation": "Gabarito: A. Fonte: Diretriz nº PM3-001/02/25 (COP), itens 6.2.2 a 6.2.3.4, Assuntos Operacionais.pdf, PDF p. 31. A ordem é: Programas Primários (Radiopatrulha e Força Tática); Complementares (Escolar, Trânsito, Rural e Comunitário); Atividades Operacionais Diversas; funções de comando/supervisão (CGP, CFP e Supervisor Regional). B inverte a ordem dos Primários e dos Complementares e coloca supervisão antes das Atividades Diversas; C altera a ordem dos Complementares, antecipa supervisão e inverte CGP/CFP; D coloca as funções de comando/supervisão antes das Atividades Operacionais Diversas. Apenas A preserva toda a sequência."
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
