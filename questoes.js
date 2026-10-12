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
        id: 71,
        idSimulado: 71,
        subject: "OPERACIONAL",
        topic: "COP — classificação de evidência relacionada a MDIP",
        text: "Após uma intervenção policial com resultado morte, o policial usuário da COP encerra a gravação e precisa classificá-la no sistema de evidências digitais. Conforme a Diretriz nº PM3-001/02/25, qual procedimento corresponde à classificação normativa da evidência?",
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
        id: 73,
        idSimulado: 73,
        subject: "OPERACIONAL",
        topic: "NORSOP — planejamento tático",
        text: "Ao revisar um plano de emprego, um comandante precisa distinguir o planejamento tático do planejamento estratégico e do operacional. Segundo a NORSOP, qual descrição corresponde ao nível tático?",
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
        text: "Na revisão doutrinária da NORSOP, um oficial precisa identificar um conjunto formado exclusivamente por PRINCÍPIOS básicos, sem incluir diretrizes básicas. Assinale a alternativa correta.",
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
        text: "Uma ocorrência excede a capacidade operativa das OPM territoriais subordinadas, mas a avaliação não indica necessidade de recursos especializados próprios da Matriz Operacional III. A resposta exige emprego adicional de efetivo e meios vinculados diretamente ao Comando de Policiamento. Qual nível de resposta corresponde à situação?",
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
        text: "Considerando a regra apresentada no material autorizado sobre a Lei nº 18.442/26 para o comando da Polícia Militar, assinale a alternativa que reproduz corretamente o requisito referente ao oficial que exerce o Comando-Geral.",
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
        text: "Dois Oficiais PM da ativa possuem o mesmo posto e exercem funções que, no caso concreto, não estabelecem superioridade funcional entre si. Para a distinção de precedência funcional entre quadros, qual regra consta do material autorizado?",
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
        text: "Ao conferir o limite de efetivo previsto no art. 3º da Lei nº 18.442/26, um oficial deve identificar as categorias que a própria norma exclui da contagem. Qual alternativa reúne o conjunto previsto no material autorizado?",
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
        text: "Um policial militar, após a publicação de sanção de permanência disciplinar, requer a conversão de parte do período em prestação de serviço extraordinário. À luz dos arts. 18 e 19 do RDPM, qual alternativa reúne corretamente as condições normativas?",
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
        text: "Na apuração de transgressão disciplinar de subordinado, a responsabilidade solidária do superior hierárquico, com incidência das mesmas sanções da transgressão, ocorre em qual das hipóteses previstas no RDPM?",
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
        text: "Ao delimitar o âmbito subjetivo do Regulamento Disciplinar da Polícia Militar, qual alternativa reproduz integralmente as exceções expressas no parágrafo único do art. 2º do RDPM?",
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
        text: "Dois militares do Estado estão em igualdade de posto ou graduação e não há regra específica de precedência funcional aplicável. Qual sequência reproduz os critérios de antiguidade previstos no art. 4º do RDPM?",
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
        text: "Considere as afirmações sobre as recompensas policiais-militares previstas no RDPM: I — o elogio é uma recompensa; II — o cancelamento de sanções é uma recompensa; III — a dispensa do serviço constitui recompensa policial-militar. Está correto o que se afirma em:",
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
        text: "À luz dos arts. 7º e 8º do RDPM, examine as afirmações: I — cumprir os deveres de cidadão é dever ético; II — patriotismo é valor fundamental; III — preservar a natureza e o meio ambiente é dever ético; IV — civismo é dever ético, e não valor fundamental. Está correto o que se afirma em:",
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
        id: 86,
        idSimulado: 86,
        subject: "JURIDICO",
        topic: "RDPM — âmbito do Conselho de Justificação",
        text: "Na definição do processo regular aplicável aos oficiais, qual alternativa corresponde ao alcance do Conselho de Justificação previsto no RDPM?",
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
        text: "Uma praça possui exatamente dez anos de serviço policial-militar e há notícia de incapacidade moral para permanecer no serviço ativo. Considerando o art. 71 do RDPM, qual processo regular corresponde ao caso?",
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
        id: 89,
        idSimulado: 89,
        subject: "JURIDICO",
        topic: "RDPM — prazos dos recursos disciplinares",
        text: "Um militar pretende interpor Pedido de Reconsideração de Ato e, se necessário, posteriormente, Recurso Hierárquico. Qual alternativa distingue corretamente os prazos de interposição previstos nos arts. 57 e 58 do RDPM?",
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
        text: "Na análise de uma transgressão disciplinar, o encarregado deve distinguir causa de justificação de circunstância atenuante. Qual situação está expressamente prevista no art. 34 do RDPM como causa de justificação?",
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
        text: "Para a promoção de Subtenente PM da ativa ao posto de Segundo-Tenente PM do QOE, qual alternativa reúne os requisitos indicados no material autorizado?",
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
        text: "Considerando os limites de competência do art. 32 do RDPM, qual alternativa reproduz corretamente os limites máximos de permanência disciplinar que podem ser aplicados pelos oficiais dos postos indicados?",
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
        text: "Ao examinar a possibilidade de aplicar a sanção de detenção, a autoridade deve verificar tanto a hipótese de cabimento quanto a competência. Qual alternativa concilia corretamente os arts. 20, 21 e 32 do RDPM?",
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
        id: 97,
        idSimulado: 97,
        subject: "JURIDICO",
        topic: "RDPM — prescrição da ação disciplinar",
        text: "Na análise de prescrição de uma transgressão disciplinar que não constitui também infração penal, qual prazo e marco inicial devem ser adotados conforme o art. 85 do RDPM?",
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
        text: "Considerando a regra de provimento do cargo de Subcomandante-Geral da Polícia Militar apresentada no material autorizado, qual alternativa reúne corretamente o posto, o quadro e a autoridade responsável pela nomeação?",
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
        text: "Sobre os recursos disciplinares próprios previstos nos arts. 57 e 58 do RDPM, examine as afirmações: I — o Pedido de Reconsideração é dirigido à autoridade que praticou ou aprovou o ato e deve ser encaminhado diretamente a ela, uma única vez; II — o Pedido de Reconsideração tem efeito suspensivo; III — o Recurso Hierárquico é dirigido à autoridade imediatamente superior àquela que não reconsiderou o ato e pressupõe, em regra, prévia reconsideração. Está correto o que se afirma em:",
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
        text: "Uma autoridade recebe notícia de irregularidade administrativa, mas os elementos iniciais ainda são insuficientes para decidir pela instauração imediata de sindicância. De acordo com as I-16-PM, qual providência e prazo correspondem à situação?",
        options: [
            "a) Instaurar imediatamente sindicância, cujo prazo inicial é de dez dias improrrogáveis e que se destina apenas à coleta informal de subsídios.",
            "b) Determinar investigação preliminar para colher subsídios que fundamentem a instauração ou não de sindicância ou de outro procedimento; ela deve ser encerrada em dez dias improrrogáveis, contados do despacho de instauração.",
            "c) Instaurar processo regular, pois a investigação preliminar somente pode ocorrer depois de sindicância formalmente encerrada.",
            "d) Determinar investigação preliminar por trinta dias, prorrogável por mais noventa dias, com emprego obrigatório de termos formais de declaração e interrogatório."
        ],
        answer: 1,
        explanation: "Gabarito: B. Fundamentação: I-16-PM, art. 67, §§ 1º a 3º, em Assuntos Organizacionais.pdf, p. 24. A investigação preliminar é meio sumaríssimo para colher subsídios quando a notícia não reúne elementos suficientes e tem prazo improrrogável de dez dias contados do despacho. A confunde o prazo e a finalidade da sindicância; C inverte a sequência; D atribui prazo e prorrogação da sindicância e exige meios formais que não correspondem à investigação preliminar. Trecho normativo de suporte: A investigação preliminar é “meio sumaríssimo destinado à imediata colheita de subsídios” e “será encerrada no prazo improrrogável de 10 (dez) dias” (I-16-PM, art. 67, §§ 1º e 3º)."
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
