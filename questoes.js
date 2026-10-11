/**
 * BANCO INTEGRADO DE QUESTÕES PMESP - ACP II/26
 * Arquivo: questoes.js
 * Banca Examinadora PMESP | Processo de Promoção e Habilitação ao Posto de Capitão PM
 * Proporção: ~50% Operacional, ~30% Jurídico-Administrativo, ~20% Organizacional
 */

const BANCO_SIMULADOS = {
    "simulado_01": {
        "titulo": "Simulado ACP II/26 - Capitão PM (Banca Examinadora PMESP)",
        "questoes": [
            // =========================================================================
            // ASSUNTOS OPERACIONAIS (~50%) - QUESTÕES 1 A 25
            // =========================================================================
            {
                id: 1,
                subject: "OPERACIONAL",
                topic: "NORSOP - Atribuições de Comando (CFP)",
                text: "Durante o turno de serviço, o Comando de Força de Patrulha (CFP) identifica que todas as Unidades de Serviço (US) ordinárias da área se encontram empenhadas em ocorrências simultâneas de menor complexidade. Nesse momento, surge uma ocorrência grave de roubo a estabelecimento bancário com tomada de reféns. De acordo com as atribuições operacionais do CFP previstas na Diretriz nº PM3-001/02/20 (NORSOP), assinale a alternativa correta:",
                options: [
                    "a) O CFP deve aguardar no Pátio da OPM a liberação de pelo menos duas viaturas de Rádio Patrulha para então deslocar como Comandante de Cena.",
                    "b) O CFP poderá prestar o primeiro atendimento à ocorrência e, simultaneamente, coordenar o emprego dos recursos operacionais adicionais e apoios táticos/especializados.",
                    "c) O CFP deve repassar obrigatoriamente a coordenação da ocorrência ao Supervisor Regional e abster-se de atuar diretamente no local.",
                    "d) O CFP deve determinar o encerramento sumário de todos os atendimentos em andamento na área para deslocamento em comboio único ao local."
                ],
                answer: 1,
                explanation: "Fundamentação: NORSOP (Diretriz nº PM3-001/02/20, Anexo B - CFP). Na indisponibilidade pontual de US ou diante de ocorrência de elevada gravidade/repercussão, o CFP tem a atribuição explícita de prestar o primeiro atendimento e coordenar simultaneamente os meios necessários."
            },
            {
                id: 2,
                subject: "OPERACIONAL",
                topic: "NORSOP - Matrizes e Níveis de Resposta",
                text: "Uma viatura de Rádio Patrulha é acionada para averiguar invasão de domicílio. Ao chegar ao local, a equipe depara-se com um indivíduo armado com faca mantendo a ex-companheira sob refém. O Coordenador Operacional (COP) determina o cerco e aciona a Força Tática da Unidade. Diante do insucesso da negociação inicial, o CFP solicita ao COP o acionamento do GATE/CPChq. Segundo a NORSOP, a evolução dessa ocorrência exige o enquadramento em qual Matriz Operacional e Nível de Resposta?",
                options: [
                    "a) Matriz Operacional I e Nível de Resposta 1.",
                    "b) Matriz Operacional II e Nível de Resposta 2.",
                    "c) Matriz Operacional III e Nível de Resposta 4.",
                    "d) Matriz Operacional I e Nível de Resposta 3."
                ],
                answer: 2,
                explanation: "Fundamentação: Conforme a NORSOP (PM3-001/02/20), o acionamento de unidades de apoio especializado de ações táticas e operações especiais (GATE/CPChq) insere o incidente na Matriz Operacional III (Apoios Especializados) e exige o Nível de Resposta 4."
            },
            {
                id: 3,
                subject: "OPERACIONAL",
                topic: "NORSOP - Plano de Policiamento Inteligente (PPI)",
                text: "Metodologia adotada pela Polícia Militar do Estado de São Paulo para gerir os ativos operacionais disponíveis de forma adequada aos problemas e às peculiaridades territoriais em um processo de melhoria contínua, buscando a redução criminal e o aumento na percepção de segurança é a definição doutrinária de qual conceito?",
                options: [
                    "a) Reunião de Análise Crítica (RAC).",
                    "b) Diagnóstico Situacional de Seção.",
                    "c) Plano de Policiamento Inteligente (PPI).",
                    "d) Nível de Resposta Operacional 2."
                ],
                answer: 2,
                explanation: "Fundamentação: Diretriz NORSOP (PM3-001/02/20, item 3.7). O Plano de Policiamento Inteligente (PPI) é a metodologia oficial de gestão dos ativos operacionais com base na análise criminal."
            },
            {
                id: 4,
                subject: "OPERACIONAL",
                topic: "NORSOP - Tipos de Atuação Operacional",
                text: "De acordo com a Diretriz nº PM3-001/02/20 (NORSOP), quais são os 3 (três) tipos formais de atuação operacional desenvolvidas pela Polícia Militar como forma de execução de seus planos de ação?",
                options: [
                    "a) Fiscalização, monitoramento e patrulhamento preventivo.",
                    "b) Ação policial-militar, operação policial-militar e missão policial-militar.",
                    "c) Nível estratégico, nível tático e nível operacional.",
                    "d) Policiamento ostensivo, policiamento velado e polícia judiciária."
                ],
                answer: 1,
                explanation: "Fundamentação: NORSOP (PM3-001/02/20, item 3.7.2). Os três tipos formais de atuação operacional da PMESP são: Ação Policial-Militar, Operação Policial-Militar e Missão Policial-Militar."
            },
            {
                id: 5,
                subject: "OPERACIONAL",
                topic: "SCIPM - Princípios do Sistema de Comando de Incidentes",
                text: "Em um incidente crítico envolvendo a fuga de criminosos armados de fuzil após ataque a transporte de valores com reféns na área de limite de Batalhões, a estrutura do Sistema de Comando de Incidentes (SCIPM) é ativada. Segundo a Diretriz nº PM3-003/02/23, assinale os princípios fundamentais que regem o SCIPM:",
                options: [
                    "a) Gestão pela qualidade, Padronização e Unidade de esforços.",
                    "b) Moralidade, Impessoalidade e Publicidade das comunicações.",
                    "c) Flexibilidade, Padronização e Unidade de esforços.",
                    "d) Aceitabilidade, Validade do Risco e Necessidade de intervenção."
                ],
                answer: 2,
                explanation: "Fundamentação: Diretriz SCIPM (PM3-003/02/23, item 5.3). Os três princípios basilares do SCIPM são Flexibilidade, Padronização e Unidade de Esforços."
            },
            {
                id: 6,
                subject: "OPERACIONAL",
                topic: "SCIPM - Posto de Comando (PC)",
                text: "No âmbito do SCIPM, durante um incidente crítico que mobiliza a Polícia Militar, Polícia Civil, Corpo de Bombeiros e Polícia Rodoviária Federal sob o modelo de Comando Unificado, qual é a regra doutrinária aplicável à montagem do Posto de Comando (PC)?",
                options: [
                    "a) Cada instituição participante deve montar seu próprio Posto de Comando físico no local do fato.",
                    "b) O Posto de Comando deve ser instalado no ponto central do confronto tático, independente dos riscos.",
                    "c) Haverá estritamente apenas 1 (um) Posto de Comando físico no incidente, localizado em área segura e taticamente viável.",
                    "d) O Posto de Comando somente pode ser instalado em dependências fixas de um Batalhão PM."
                ],
                answer: 2,
                explanation: "Fundamentação: Diretriz SCIPM (PM3-003/02/23, item 5.1). No SCIPM, mesmo sob o regime de Comando Unificado com várias agências, haverá estritamente Apenas UM Posto de Comando (PC) físico no teatro de operações."
            },
            {
                id: 7,
                subject: "OPERACIONAL",
                topic: "SCIPM - Comandante do Incidente Dinâmico",
                text: "Na metodologia do SCIPM, durante a fase inicial de um incidente crítico policial dinâmico (onde os transgressores estão em constante deslocamento), quem exerce a função de Comandante do Incidente (Cmt Inc) até que a situação seja estabilizada?",
                options: [
                    "a) O Comando de Grupo de Patrulha (CGP).",
                    "b) O Chefe de Operações do COPOM / Sala de Operações.",
                    "c) O Comandante do Corpo de Bombeiros da área.",
                    "d) O Encarregado da primeira viatura de Rádio Patrulha que chegou ao local."
                ],
                answer: 1,
                explanation: "Fundamentação: Diretriz SCIPM (PM3-003/02/23, item 5.6). Em incidentes dinâmicos, o Chefe de Operações do COPOM/Centro de Operações assume a função de Comandante do Incidente até sua consolidação e delimitação geográfica."
            },
            {
                id: 8,
                subject: "OPERACIONAL",
                topic: "Sistema de C2 - Consciência Situacional",
                text: "No âmbito da Diretriz nº PM3-001/02/23 (Sistema de Comando e Controle da Polícia Militar), assinale o conceito correto de Consciência Situacional aplicado às decisões de comando dos Oficiais:",
                options: [
                    "a) Conjunto de instalações e equipamentos de transmissão via rádio criptografado.",
                    "b) Conhecimento e compreensão que uma pessoa desenvolve sobre os acontecimentos, as circunstâncias e os elementos do ambiente de atuação, delimitados no tempo e espaço, viabilizando decisões fundamentadas e seguras.",
                    "c) Protocolo de autorização verbal emitido pelo Comandante-Geral para disparo de armas de alta precisão.",
                    "d) Mapeamento cartográfico e estatístico quadrimestral produzido exclusivamente pela Corregedoria."
                ],
                answer: 1,
                explanation: "Fundamentação: Diretriz de C2 (PM3-001/02/23, item 4). Consciência situacional é a sintonia precisa entre a situação percebida pelo operador/comandante e a situação real delimitada no tempo e espaço."
            },
            {
                id: 9,
                subject: "OPERACIONAL",
                topic: "Sistema de C2 - Salas de Operações",
                text: "De acordo com as diretrizes estabelecidas na Diretriz nº PM3-001/02/23 (Sistema de Comando e Controle da PMESP), as Salas de Operações (nível tático/operacional) deverão ser estruturadas em nível mínimo de:",
                options: [
                    "a) Grande Comando (CPM / CPI).",
                    "b) Batalhão de Polícia Militar (BPM).",
                    "c) Companhia de Polícia Militar (Cia PM).",
                    "d) Pelotão de Polícia Militar (Pel PM)."
                ],
                answer: 2,
                explanation: "Fundamentação: Diretriz de C2 (PM3-001/02/23, item 4.3). As Salas de Operações para gestão descentralizada do policiamento são estruturadas a partir do nível mínimo de Companhia PM (Cia PM)."
            },
            {
                id: 10,
                subject: "OPERACIONAL",
                topic: "Câmeras Operacionais Portáteis (COP) - Temporalidade",
                text: "A temporalidade de armazenamento das evidências digitais geradas pelas Câmeras Operacionais Portáteis (COP / Motorola) varia conforme a natureza do registro. Pela norma vigente da PMESP, qual é o prazo mínimo de disponibilidade estabelecido para o 'Vídeo de Rotina' (Vídeo Recall)?",
                options: [
                    "a) 30 dias.",
                    "b) 60 dias.",
                    "c) 90 dias.",
                    "d) 180 dias."
                ],
                answer: 2,
                explanation: "Fundamentação: Diretriz das COP (PM3-001/02/25, item 6.9). O prazo de custódia mínimo no sistema para vídeos gravados sem vinculação inicial a procedimentos judiciais/especiais (Vídeo de Rotina) é de 90 dias."
            },
            {
                id: 11,
                subject: "OPERACIONAL",
                topic: "Câmeras Operacionais Portáteis (COP) - Procedimentos em MDIP",
                text: "Em caso de ocorrência de Morte Decorrente de Intervenção Policial (MDIP) envolvendo viaturas de sua área de atuação, quem possui a obrigatoriedade regulamentar de recolher as Câmeras Operacionais Portáteis (COP) dos policiais e providenciar pessoalmente o upload das mídias?",
                options: [
                    "a) O Encarregado da Viatura de Apoio do Pátio.",
                    "b) O Comando de Força de Patrulha (CFP) ou autoridade equivalente.",
                    "c) O Escrivão do Plantão da Polícia Civil.",
                    "d) O Oficial da Seção de Pessoal da OPM."
                ],
                answer: 1,
                explanation: "Fundamentação: Diretriz das COP (PM3-001/02/25, item 6.11). Compete ao CFP (ou Oficial equivalente no local) a recolha e upload imediato dos arquivos de COP em casos de MDIP e ocorrências graves."
            },
            {
                id: 12,
                subject: "OPERACIONAL",
                topic: "Câmeras Operacionais Portáteis (COP) - Apuração de Falhas",
                text: "Identificada a ausência do registro audiovisual na COP decorrente de falha no acionamento, descarregamento indevido de bateria ou descumprimento de norma, qual procedimento administrativo deve ser obrigatoriamente instaurado para apurar especificamente este fato?",
                options: [
                    "a) Instauração de Inquérito Policial Militar (IPM).",
                    "b) Instauração de Investigação Preliminar (IP).",
                    "c) Instauração de Processo Disciplinar de Rito Sumário.",
                    "d) Confecção simples de Parte de Serviço sem autuação."
                ],
                answer: 1,
                explanation: "Fundamentação: Diretriz das COP (PM3-001/02/25, item 6.12). A ausência injustificada ou falha no registro das COP impõe a abertura obrigatória de Investigação Preliminar (IP)."
            },
            {
                id: 13,
                subject: "OPERACIONAL",
                topic: "Drones / ARPAS - Regulamentação e Emprego",
                text: "O emprego de Sistemas de Aeronaves Não Tripuladas (ARPAS/Drones) na PMESP para apoio ao policiamento ostensivo e operações correcionais exige rigorosa observância legal. Nesse contexto, assinale a afirmativa correta:",
                options: [
                    "a) Drones policiais podem voar sobre aglomerações sem necessidade de cadastro no sistema SARPAS.",
                    "b) A operação de ARPAS exige piloto devidamente capacitado/credenciado, cadastramento do equipamento nos órgãos reguladores (ANAC/DECEA) e plano de voo aprovado.",
                    "c) É permitido o uso de drones particulares sem tombamento patrimonial durante a escala ordinária.",
                    "d) O uso de ARPAS é restrito exclusivamente às Unidades do Comando de Policiamento de Choque."
                ],
                answer: 1,
                explanation: "Fundamentação: Diretrizes de Emprego de ARPAS da PMESP. A operação subordina-se à regulação do DECEA/ANAC, exigindo operador credenciado, equipamento homologado e autorização de voo."
            },
            {
                id: 14,
                subject: "OPERACIONAL",
                topic: "Programas de Policiamento - Ronda Maria da Penha",
                text: "Durante o atendimento de ocorrência no âmbito do Programa de Policiamento de Proteção à Violência Doméstica (Ronda Maria da Penha), a equipe constata o descumprimento de Medida Protetiva de Urgência pelo agressor. Qual orientação deve ser emitida pelo Coordenador Operacional (COP)?",
                options: [
                    "a) Determinar a lavratura de Termo Circunstanciado no local.",
                    "b) Determinar a condução imediata do autor ao Distrito Policial para auto de prisão em flagrante delito (Art. 24-A da Lei nº 11.340/06).",
                    "c) Orientar a vítima a procurar o Ministério Público no dia útil seguinte.",
                    "d) Aplicar advertência verbal ao agressor e registrar apenas relatório interno."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 24-A da Lei nº 11.340/06 (Lei Maria da Penha). O descumprimento de Medida Protetiva de Urgência é crime inafiançável na esfera policial, impondo a prisão em flagrante delito."
            },
            {
                id: 15,
                subject: "OPERACIONAL",
                topic: "Força Tática - Doutrina de Emprego",
                text: "A Força Tática (FT) constitui o apoio tático do Comando de Batalhão para atuação em ocorrências de maior complexidade. Sobre as características de seu emprego, assinale a alternativa correta:",
                options: [
                    "a) Deve ser empregada rotineiramente em patrulhamento fixo em pontos de estacionamento de baixa criminalidade.",
                    "b) Atua prioritariamente no apoio a ocorrências graves, controle de distúrbios civis em primeiro nível e patrulhamento tático orientado por índices criminais.",
                    "c) Subordina-se operacionalmente e administrativamente ao Comando do Corpo de Bombeiros.",
                    "d) É vedado seu emprego na execução de mandados de busca e apreensão em apoio à Polícia Judiciária."
                ],
                answer: 1,
                explanation: "Fundamentação: Manual de Doutrina de Força Tática da PMESP. A FT é a tropa de apoio tático do Batalhão, com foco no combate ao crime organizado, patrulhamento tático e apoio ao Rádio Patrulhamento."
            },
            {
                id: 16,
                subject: "OPERACIONAL",
                topic: "Programas de Policiamento - Escolar",
                text: "No âmbito do Programa de Policiamento Escolar, ao deparar-se com ato infracional análogo a crime cometido por adolescente no interior de estabelecimento de ensino público, a equipe policial militar deve:",
                options: [
                    "a) Aplicar sanção disciplinar escolar conforme o regimento interno da instituição de ensino.",
                    "b) Apreender o adolescente em flagrante de ato infracional, garantindo os direitos previstos no ECA, e conduzi-lo à Polícia Judiciária com acompanhamento dos responsáveis/Conselho Tutelar.",
                    "c) Encaminhar o adolescente diretamente para internamento na Fundação CASA sem passar pela Delegacia.",
                    "d) Abster-se de intervir por se tratar de ambiente sob gestão exclusiva do Ministério da Educação."
                ],
                answer: 1,
                explanation: "Fundamentação: Lei nº 8.069/90 (ECA) e Diretriz do Policiamento Escolar PMESP. Ato infracional praticado por adolescente exige apreensão e condução à Polícia Judiciária acompanhado dos responsáveis ou Conselho Tutelar."
            },
            {
                id: 17,
                subject: "OPERACIONAL",
                topic: "Programas de Policiamento - Trânsito (CTB)",
                text: "Durante fiscalização de trânsito em via urbana, o condutor de um veículo automotor recusa-se a submeter-se ao teste de etilômetro oferecido pelos policiais militares. De acordo com o Código de Trânsito Brasileiro (CTB), qual deve ser o procedimento adotado pela equipe?",
                options: [
                    "a) Liberar o condutor sem autuação por ausência de prova pericial direta de embriaguez.",
                    "b) Lavrar o auto de infração pelo Art. 165-A do CTB (recusa), recolher o documento de habilitação e reter o veículo até a apresentação de condutor habilitado.",
                    "c) Dar voz de prisão em flagrante por crime de trânsito independentemente da constatação de sinais de alteração da capacidade psicomotora.",
                    "d) Apreender o veículo e encaminhá-lo obrigatoriamente ao pátio da Polícia Federal."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 165-A do Código de Trânsito Brasileiro (CTB). A recusa ao teste de etilômetro configura infração gravíssima administrativa específica, gerando multa, suspensão do direito de dirigir e retenção do veículo."
            },
            {
                id: 18,
                subject: "OPERACIONAL",
                topic: "Programas de Policiamento - Rural",
                text: "O Programa de Policiamento Rural visa a dar resposta às peculiaridades de segurança no campo. Dentre as suas ferramentas operacionais de destaque, inclui-se:",
                options: [
                    "a) O uso exclusivo de patrulhamento a pé nas sedes das propriedades.",
                    "b) O cadastramento georreferenciado das propriedades rurais integrado ao sistema de monitoramento do COPOM para agilizar o tempo-resposta.",
                    "c) A fiscalização de tributos estaduais agrícolas sem apoio da Secretaria da Fazenda.",
                    "d) A substituição da Polícia Civil na investigação de furtos de gado."
                ],
                answer: 1,
                explanation: "Fundamentação: Diretriz do Policiamento Rural da PMESP. A utilização do mapeamento georreferenciado de propriedades rurais é pilar para a localização rápida de emergências no campo."
            },
            {
                id: 19,
                subject: "OPERACIONAL",
                topic: "Programas de Policiamento - Comunitário",
                text: "A filosofia de Polícia Comunitária adotada pela PMESP assenta-se na parceria entre a população e as forças de segurança. O principal fórum comunitário de debate de segurança pública no nível local é denominado:",
                options: [
                    "a) Conselho Permanente de Justiça (CPJ).",
                    "b) Conselho Comunitário de Segurança (CONSEG).",
                    "c) Comissão Interna de Prevenção de Acidentes (CIPA).",
                    "d) Junta Regular de Saúde (JRS)."
                ],
                answer: 1,
                explanation: "Fundamentação: Diretrizes de Polícia Comunitária da PMESP. Os CONSEGs são entidades de apoio à Polícia Militar e Polícia Civil na discussão e solução dos problemas locais de segurança."
            },
            {
                id: 20,
                subject: "OPERACIONAL",
                topic: "Inteligência Operacional - Relatório de Inteligência (RELINT)",
                text: "Ao planejar uma operação contra o crime organizado focado no combate a roubos de carga em sua subárea, o Comandante de Cia deve utilizar o Relatório de Inteligência (RELINT). Sobre este documento, é correto afirmar:",
                options: [
                    "a) Possui natureza de prova processual penal direta sem necessidade de validação judiciária.",
                    "b) É um documento de assessoramento que reúne dados processados para subsidiar a tomada de decisão operacional e o planejamento tático do comando.",
                    "c) Substitui o Auto de Prisão em Flagrante Delito em operações noturnas.",
                    "d) É de acesso público e deve ser publicado no Diário Oficial do Estado."
                ],
                answer: 1,
                explanation: "Fundamentação: Doutrina de Inteligência da PMESP (DIP). O RELINT é documento sigiloso de assessoramento decisório que subsidia o planejamento de operações."
            },
            {
                id: 21,
                subject: "OPERACIONAL",
                topic: "Combate ao Crime Organizado - 'Novo Cangaço' / Domínio de Cidade",
                text: "Diante de um ataque efetuado por facção criminosa modalidade 'Domínio de Cidade' (Novo Cangaço) contra bases de valores, qual ação imediata é prioritária para o Coordenador Operacional (COP) no nível tático?",
                options: [
                    "a) Determinar que todas as viaturas avancem isoladamente ao epicentro do ataque.",
                    "b) Acionar o Plano de Contingência/Cerco Regional, centralizar as comunicações no canal do COP e estabelecer pontos de bloqueio em rotas de fuga com apoio de Tropas Especializadas.",
                    "c) Aguardar a chegada de autorização ministerial por escrito para emitir alertas.",
                    "d) Desativar o sistema de transmissão de rádio para evitar interceptação."
                ],
                answer: 1,
                explanation: "Fundamentação: Diretrizes de C2 e Planos de Contingência contra Roubo a Banco/Domínio de Cidade da PMESP. A prioridade do COP é fechar a malha de cerco e acionar forças táticas e especiais."
            },
            {
                id: 22,
                subject: "OPERACIONAL",
                topic: "NORSOP - Conceito de Módulo de Configuração Territorial",
                text: "Na estrutura organizacional da NORSOP, o Módulo de Configuração Territorial que representa a menor fração de divisão geográfica sob o comando direto de um Capitão PM é:",
                options: [
                    "a) A Subárea do Batalhão (correspondente à Companhia PM).",
                    "b) O Setor de Rádio Patrulha.",
                    "c) A Área do Comando de Policiamento de Área (CPA).",
                    "d) O Pátio de Apoio Operacional."
                ],
                answer: 0,
                explanation: "Fundamentação: NORSOP (PM3-001/02/20). A Subárea constitui a divisão territorial atribuída ao Comando de uma Companhia de Polícia Militar (Cia PM), chefiada por Capitão PM."
            },
            {
                id: 23,
                subject: "OPERACIONAL",
                topic: "SCIPM - Transferência de Comando no Incidente",
                text: "No SCIPM, quando uma autoridade de maior posto/graduação chega ao local de um incidente e decide assumir a função de Comandante do Incidente (Cmt Inc), o protocolo formal exige:",
                options: [
                    "a) Substituição imediata sem necessidade de comunicação formal entre os Oficiais.",
                    "b) Realização de briefing de passagem de comando entre o Cmt Inc substituído e o atual, com atualização do quadro de situação e notificação ao Posto de Comando e COPOM.",
                    "c) Anulação de todas as ordens emitidas anteriormente pelo primeiro interventor.",
                    "d) Envio prévio de mensagem via Diário Oficial."
                ],
                answer: 1,
                explanation: "Fundamentação: Diretriz SCIPM (PM3-003/02/23, item 5.8). A transferência de comando exige obrigatoriamente um briefing presencial ou via rádio detalhando a situação, recursos e riscos."
            },
            {
                id: 24,
                subject: "OPERACIONAL",
                topic: "Sistema de C2 - Níveis de Decisão",
                text: "No Sistema de C2 da PMESP, o nível de decisão responsável por transformar as diretrizes do nível estratégico em planos operacionais, articulando os Batalhões e Companhias, é denominado:",
                options: [
                    "a) Nível Político.",
                    "b) Nível Tático.",
                    "c) Nível de Execução da Ponta.",
                    "d) Nível Técnico Pericial."
                ],
                answer: 1,
                explanation: "Fundamentação: Diretriz de C2 (PM3-001/02/23). O nível tático atua na ponte entre o planejamento estratégico (Comando Geral/CPMs) e a execução das Unidades de Área."
            },
            {
                id: 25,
                subject: "OPERACIONAL",
                topic: "Câmeras Operacionais (COP) - Direito Sensível da Vítima",
                text: "Ao atender ocorrência que envolva criança ou adolescente na condição de vítima de abuso de vulnerável, qual conduta o policial militar equipado com COP deve adotar referente à gravação audiovisual?",
                options: [
                    "a) Desligar o equipamento e não realizar nenhum tipo de registro durante todo o atendimento.",
                    "b) Limitar o registro audiovisual à captação das evidências do local ou corpo de delito sem focar a imagem do rosto da vítima, preservando sua intimidade conforme o ECA.",
                    "c) Entregar a câmera para que o responsável legal da vítima efetue a gravação.",
                    "d) Transmitir o vídeo em tempo real para redes sociais da OPM para busca de denúncias."
                ],
                answer: 1,
                explanation: "Fundamentação: Diretriz das COP (PM3-001/02/25, item 6.7). Em ocorrências com vítimas menores, a captação deve proteger a intimidade do menor, focando na preservação das provas sem exposição indevida."
            },

            // =========================================================================
            // ASSUNTOS JURÍDICO-ADMINISTRATIVOS (~30%) - QUESTÕES 26 A 40
            // =========================================================================
            {
                id: 26,
                subject: "JURIDICO",
                topic: "Lei Complementar nº 18.442/26 - Estrutura dos Quadros",
                text: "A Lei Complementar nº 18.442, de 02ABR26, reestruturou a organização do pessoal da PMESP. Quanto ao preenchimento do cargo de Comandante-Geral e funções de cúpula, assinale a alternativa correta:",
                options: [
                    "a) O cargo de Comandante-Geral pode ser exercido por Oficial do Quadro Especialista (QOE).",
                    "b) As funções de Secretário-Chefe da Casa Militar, Comandante-Geral e Subcomandante-Geral são exclusivas de Oficial da ativa do último posto do Quadro de Oficiais Estado-Maior (QOEM).",
                    "c) Oficiais da reserva remunerada podem assumir o Comando Geral sem necessidade de reversão.",
                    "d) A LC 18.442/26 extinguiu a exigência de pós-graduação para promoção ao Oficialato Superior."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 10 da Lei Complementar nº 18.442/26. Os cargos de cúpula (Comandante-Geral, Subcomandante e Casa Militar) são privativos de Coronéis ativos do QOEM."
            },
            {
                id: 27,
                subject: "JURIDICO",
                topic: "Lei Complementar nº 18.442/26 - Teto do Efetivo e Exceções",
                text: "O Art. 3º da Lei Complementar nº 18.442/26 fixou o efetivo total da Polícia Militar em 93.802 cargos. De acordo com o texto legal, assinale quem NÃO é computado dentro deste teto máximo:",
                options: [
                    "a) Os Tenentes-Coronéis PM e Majores PM do QOEM.",
                    "b) O Aspirante a Oficial PM, o Cadete PM, o Aluno-Soldado PM e o militar revertido da reserva.",
                    "c) Os Capitães PM e Tenentes PM do QOE.",
                    "d) Os Subtenentes PM e Sargentos PM do QP."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 3º, parágrafo único da LC nº 18.442/26. Alunos em formação (Aspirantes, Cadetes e Alunos-Soldados) e militares revertidos não computam no teto de cargos."
            },
            {
                id: 28,
                subject: "JURIDICO",
                topic: "Lei Complementar nº 18.442/26 - Transição dos Quadros",
                text: "Com o advento da LC nº 18.442/26, os antigos Quadros da PMESP foram reestruturados. Assinale a correlação correta de enquadramento automático estabelecido na nova norma:",
                options: [
                    "a) Oficiais do QOPM passaram a integrar o QOE.",
                    "b) Oficiais do Quadro de Oficiais Policiais Militares (QOPM) passaram a integrar o Quadro de Oficiais Estado-Maior (QOEM).",
                    "c) Praças do QPPM passaram a integrar o Quadro de Oficiais de Saúde (QOS).",
                    "d) Oficiais do QAOPM foram transferidos compulsoriamente para a reserva remunerada."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 17 da LC nº 18.442/26. A reestruturação converteu os Oficiais do antigo QOPM diretamente para o novo Quadro de Oficiais Estado-Maior (QOEM)."
            },
            {
                id: 29,
                subject: "JURIDICO",
                topic: "RDPM (LC 893/01) - Conversão de Permanência Disciplinar",
                text: "Nos termos do Regulamento Disciplinar da PMESP (LC nº 893/01), a sanção de Permanência Disciplinar pode, a pedido do transgressor e a juízo da autoridade punidora, ser convertida em prestação de serviço extraordinário. Sobre o efeito deste pedido, assinale a opção correta:",
                options: [
                    "a) O pedido de conversão suspende o prazo do Inquérito Policial Militar em andamento.",
                    "b) O pedido de conversão elide (extingue/renuncia) a interposição de pedido de reconsideração de ato pelo punido.",
                    "c) A conversão garante a promoção automática do militar no quadrimestre seguinte.",
                    "d) O serviço extraordinário será prestado sem fardamento no período noturno."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 16, § 4º do RDPM (LC nº 893/01). A solicitação e deferimento da conversão da Permanência Disciplinar em serviço extraordinário elide o recurso administrativo de reconsideração de ato."
            },
            {
                id: 30,
                subject: "JURIDICO",
                topic: "RDPM (LC 893/01) - Responsabilidade Solidária do Superior",
                text: "O superior hierárquico responderá solidariamente na esfera administrativa disciplinar, incorrendo nas mesmas sanções da transgressão praticada por seu subordinado, quando:",
                options: [
                    "a) Presenciar a prática da falta disciplinar e deixar de atuar para fazê-la cessar imediatamente.",
                    "b) Tiver conhecimento do fato e instaurar Sindicância em até 5 dias.",
                    "c) Estiver de folga no momento em que o subordinado cometer crime comum.",
                    "d) Não elogiar o subordinado após a conclusão de operação policial."
                ],
                answer: 0,
                explanation: "Fundamentação: Art. 11, § 2º do RDPM (LC nº 893/01). A omissão imediata do superior presencial diante da transgressão do subordinado gera responsabilidade disciplinar solidária."
            },
            {
                id: 31,
                subject: "JURIDICO",
                topic: "RDPM (LC 893/01) - Isenção do Regulamento Disciplinar",
                text: "De acordo com as regras expressas da LC nº 893/01 (RDPM), NÃO estão sujeitos às disposições do Regulamento Disciplinar da PMESP:",
                options: [
                    "a) Os militares do Estado agregados.",
                    "b) Os militares do Estado na reserva remunerada.",
                    "c) Os militares do Estado no exercício de cargos públicos civis ou cargos eletivos.",
                    "d) Os Oficiais alunos do Curso Superior de Polícia."
                ],
                answer: 2,
                explanation: "Fundamentação: Art. 3º, § 2º do RDPM (LC nº 893/01). Policiais militares no exercício de cargos públicos civis ou eletivos não se submetem às sanções do RDPM durante o mandato/cargo."
            },
            {
                id: 32,
                subject: "JURIDICO",
                topic: "RDPM (LC 893/01) - Autoridade Suprema da PMESP",
                text: "Nos termos da Lei Complementar nº 893/01, a escala hierárquica e a ordenação da autoridade na Polícia Militar do Estado de São Paulo culminam no:",
                options: [
                    "a) Comandante-Geral, Chefe Supremo da Polícia Militar.",
                    "b) Secretário da Segurança Pública do Estado.",
                    "c) Governador do Estado, Chefe Supremo da Polícia Militar.",
                    "d) Presidente do Tribunal de Justiça Militar do Estado."
                ],
                answer: 2,
                explanation: "Fundamentação: Art. 4º do RDPM (LC nº 893/01). O Governador do Estado é a autoridade suprema na qual culmina a estrutura hierárquica da PMESP."
            },
            {
                id: 33,
                subject: "JURIDICO",
                topic: "RDPM (LC 893/01) - Recompensas Policiais",
                text: "De acordo com o Capítulo referente às Recompensas Policiais-Militares na LC nº 893/01 (RDPM), constituem modalidades formais de recompensa:",
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
                id: 34,
                subject: "JURIDICO",
                topic: "RDPM (LC 893/01) - Distinção entre Valores e Deveres",
                text: "Qual das alternativas abaixo apresenta um DEVER ÉTICO do policial militar (Art. 8º do RDPM) e NÃO um Valor Fundamental (Art. 7º do RDPM)?",
                options: [
                    "a) Patriotismo.",
                    "b) Cumprir os deveres de cidadão.",
                    "c) Civismo.",
                    "d) A fé na missão elevada da Polícia Militar."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 8º, I do RDPM. 'Cumprir os deveres de cidadão' é dever ético, enquanto patriotismo, civismo e fé na missão são valores fundamentais (Art. 7º)."
            },
            {
                id: 35,
                subject: "JURIDICO",
                topic: "Doutrina Correcional - Crime Doloso contra a Vida de Civil",
                text: "Durante Sindicância, constatam-se indícios de autoria de crime militar doloso contra a vida praticado por policial militar de serviço contra civil. De acordo com a legislação e normas correcionais da PMESP, a providência do encarregado/comando é:",
                options: [
                    "a) Arquivar o processo disciplinar e enviar a apuração para a Polícia Civil.",
                    "b) Instaurar ou dar prosseguimento ao Inquérito Policial Militar (IPM) e remeter os autos à Justiça Comum (Tribunal do Júri), mantendo a apuração disciplinar autônoma.",
                    "c) Enviar o IPM para julgamento no Tribunal de Justiça Militar.",
                    "d) Aplicar diretamente a demissão ao investigado sem remessa ao Judiciário."
                ],
                answer: 1,
                explanation: "Fundamentação: Lei nº 9.299/96 e Código de Processo Penal Militar. Os crimes dolosos contra a vida de civil praticados por militares são apurados em IPM e julgados pela Justiça Comum (Tribunal do Júri)."
            },
            {
                id: 36,
                subject: "JURIDICO",
                topic: "Processo Disciplinar - Conselho de Justificação",
                text: "O processo administrativo disciplinar destinado a julgar a incapacidade do Oficial PM para permanecer no serviço ativo da Polícia Militar é denominado:",
                options: [
                    "a) Conselho de Disciplina.",
                    "b) Processo Disciplinar de Rito Sumário (PDRS).",
                    "c) Conselho de Justificação.",
                    "d) Inquérito Policial Militar Especial."
                ],
                answer: 2,
                explanation: "Fundamentação: Lei Federal nº 5.836/72 e legislação estadual. O Conselho de Justificação é o processo adequado para julgar a conduta e moralidade de Oficiais PM."
            },
            {
                id: 37,
                subject: "JURIDICO",
                topic: "Processo Disciplinar - Conselho de Disciplina",
                text: "O Conselho de Disciplina é o processo administrativo instaurado para avaliar a incapacidade moral ou profissional de qual categoria de militares do Estado?",
                options: [
                    "a) Exclusivamente de Coronéis e Tenentes-Coronéis.",
                    "b) De Praças com estabilidade assegurada (Subtenentes e Sargentos, Cabos e Soldados com mais de 10 anos).",
                    "c) De alunos em formação de Soldados durante o estágio probatório.",
                    "d) De Oficiais do Quadro de Saúde."
                ],
                answer: 1,
                explanation: "Fundamentação: Decreto Estadual nº 15.848/76. O Conselho de Disciplina destina-se a julgar praças com estabilidade assegurada."
            },
            {
                id: 38,
                subject: "JURIDICO",
                topic: "Doutrina Correcional - Auto de Prisão em Flagrante Delito (APFD)",
                text: "A lavratura de Auto de Prisão em Flagrante Delito por crime militar cometido por policial militar é de competência de qual autoridade no âmbito da OPM?",
                options: [
                    "a) Do Delegado de Polícia Civil do Distrito policial mais próximo.",
                    "b) Da Autoridade de Polícia Judiciária Militar (Oficial da ativa da PMESP).",
                    "c) Do Juiz de Direito da Comarca local.",
                    "d) Do Promotor de Justiça Militar."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 7º do CPPM. A Polícia Judiciária Militar é exercida pelos Oficiais da Corporação no âmbito de suas atribuições e circunscrições."
            },
            {
                id: 39,
                subject: "JURIDICO",
                topic: "RDPM (LC 893/01) - Prazos de Recurso",
                text: "Nos termos do Regulamento Disciplinar da PMESP, qual é o prazo regulamentar para o militar do Estado interpor Pedido de Reconsideração de Ato contra punição disciplinar aplicada?",
                options: [
                    "a) 2 (dois) dias úteis.",
                    "b) 5 (cinco) dias úteis.",
                    "c) 8 (oito) dias úteis.",
                    "d) 10 (dez) dias úteis."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 58 da LC nº 893/01 (RDPM). O prazo para interposição de Pedido de Reconsideração de Ato é de 5 dias úteis a contar da citação/publicação do ato."
            },
            {
                id: 40,
                subject: "JURIDICO",
                topic: "RDPM (LC 893/01) - Mitigação/Atenuantes",
                text: "Qual das hipóteses abaixo constitui uma CAUSA DE JUSTIFICAÇÃO (que elimina a transgressão) e NÃO meramente uma circunstância atenuante no julgamento disciplinar?",
                options: [
                    "a) Estar no ótimo comportamento.",
                    "b) Ter prestado relevantes serviços à sociedade.",
                    "c) Ter praticado a ação para evitar mal maior ou no cumprimento de dever legal.",
                    "d) Ter confessado espontaneamente a autoria da falta."
                ],
                answer: 2,
                explanation: "Fundamentação: Art. 34 do RDPM (LC nº 893/01). Ter agido para evitar mal maior ou em legítima defesa/cumprimento de dever é Causa de Justificação, eliminando a infração."
            },

            // =========================================================================
            // ASSUNTOS ORGANIZACIONAIS (~20%) - QUESTÕES 41 A 50
            // =========================================================================
            {
                id: 41,
                subject: "ORGANIZACIONAL",
                topic: "Regime de Trabalho - Folga Mensal (Portaria PM1-7/02/23)",
                text: "Com base na Portaria do Cmt G nº PM1-7/02/23 (Regime de Trabalho na PMESP), o policial militar fixado na escala de turnos de 12 horas (12x36 ou 12x24/12x48) terá direito a 1 (uma) folga mensal obrigatória após cumprir ininterruptamente quantos serviços?",
                options: [
                    "a) 9 (nove) serviços.",
                    "b) 12 (doze) serviços.",
                    "c) 14 (quatorze) serviços.",
                    "d) 18 (dezoito) serviços."
                ],
                answer: 2,
                explanation: "Fundamentação: Art. 12 da Portaria do Cmt G nº PM1-7/02/23. Nas escalas operacionais de 12 horas, ganha-se direito a 1 folga mensal a cada 14 serviços cumpridos ininterruptamente."
            },
            {
                id: 42,
                subject: "ORGANIZACIONAL",
                topic: "Regime de Trabalho - Expediente Administrativo",
                text: "No regime de expediente administrativo das 08:00 às 18:00 horas, previsto na Portaria nº PM1-7/02/23, como funciona a conversão dos turnos semanais de trabalho?",
                options: [
                    "a) Cumprem-se 10 turnos semanais de 5 horas sem folga.",
                    "b) Cumprem-se obrigatoriamente 8 turnos de trabalho, sendo 2 turnos convertidos em folgas regulamentares.",
                    "c) Cumprem-se 5 turnos de 8 horas no sábado e domingo.",
                    "d) A jornada é reduzida para 20 horas semanais no período de férias."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 8º da Portaria nº PM1-7/02/23. No expediente administrativo padrão (10 turnos de 5h), 8 turnos são trabalhados e 2 são convertidos em folga."
            },
            {
                id: 43,
                subject: "ORGANIZACIONAL",
                topic: "Material Bélico - Extravio de CRAF (Portaria PM4-001/1.2/24)",
                text: "O policial militar que extraviar o seu Certificado de Registro de Arma de Fogo (CRAF) de armamento institucional ou particular deve adotar a seguinte providência imediata conforme a Portaria nº PM4-001/1.2/24:",
                options: [
                    "a) Continuar portando a arma normalmente sem registro físico.",
                    "b) Registrar Boletim de Ocorrência policial e comunicar imediatamente o fato por escrito ao seu Comandante de Unidade.",
                    "c) Adquirir outro armamento no comércio paralelo para substituição.",
                    "d) Aguardar o período de licenciamento anual do veículo para informar a OPM."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 21 da Portaria nº PM4-001/1.2/24. Em caso de perda/extravio de CRAF, é obrigatória a lavratura de BO e comunicação por escrito à OPM."
            },
            {
                id: 44,
                subject: "ORGANIZACIONAL",
                topic: "Material Bélico - Cassação da Carga Individual",
                text: "Nos termos da Portaria nº PM4-001/1.2/24, o Comandante de Unidade é OBRIGADO a revogar a autorização de Carga Individual de material bélico ao policial militar que:",
                options: [
                    "a) For transferido de Batalhão a pedido próprio.",
                    "b) Ingressar no comportamento disciplinar 'Mau' e enquanto nele permanecer.",
                    "c) Completar 10 anos de efetivo serviço.",
                    "d) For aprovado no Teste de Aptidão Física (SisTAF)."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 11 da Portaria nº PM4-001/1.2/24. O ingresso do policial militar no comportamento 'Mau' impõe a revogação OBRIGATÓRIA da carga individual de armas."
            },
            {
                id: 45,
                subject: "ORGANIZACIONAL",
                topic: "Afastamentos Regulamentares - Luto e Férias",
                text: "Se durante o gozo de férias regulamentares do policial militar ocorrer fato gerador de Afastamento por Luto (falecimento de cônjuge, pais ou filhos), qual é a orientação contida nas normas de pessoal da PMESP?",
                options: [
                    "a) O luto absorve as férias e o policial perde o saldo restante.",
                    "b) O gozo das férias é suspenso/interrompido, iniciando-se o afastamento por luto, devendo o saldo remanescente das férias ser gozado posteriormente.",
                    "c) O afastamento por luto deve ser usufruído somente após o término total das férias.",
                    "d) O policial é obrigado a retornar imediatamente ao trabalho sem direito ao luto."
                ],
                answer: 1,
                explanation: "Fundamentação: Normas para Concessão de Afastamentos da PMESP. Afastamentos compulsórios em razão de luto ou nupcial suspendem a contagem das férias regulamentares."
            },
            {
                id: 46,
                subject: "ORGANIZACIONAL",
                topic: "Sistema de Teste de Aptidão Física (SisTAF)",
                text: "No tocante ao Sistema de Teste de Aptidão Física (SisTAF) na PMESP, assinale a afirmativa correta referente às suas diretrizes e obrigatoriedades:",
                options: [
                    "a) A realização do TAF é facultativa para praças da ativa.",
                    "b) O SisTAF constitui ferramenta contínua de avaliação de higidez física e pronto emprego, sendo a aprovação nos níveis regulamentares requisito obrigatório para processos promocionais.",
                    "c) Policiais militares gestantes realizam o TAF de corrida de 12 minutos obrigatoriamente.",
                    "d) O TAF é aplicado exclusivamente aos alunos em formação da Academia do Barro Branco."
                ],
                answer: 1,
                explanation: "Fundamentação: Diretrizes do SisTAF da PMESP. A manutenção da aptidão física via SisTAF é requisito de prontidão e conditio sine qua non em processos de promoção."
            },
            {
                id: 47,
                subject: "ORGANIZACIONAL",
                topic: "Violência Doméstica Envolvendo Integrante da PMESP",
                text: "Quando um integrante da PMESP é envolvido em ocorrência de Violência Doméstica na condição de autor/agressor, qual medida cautelar administrativa/correcional deve ser analisada imediatamente pelo Comando?",
                options: [
                    "a) Transferência sumária do militar para a reserva remunerada ex officio.",
                    "b) Recolhimento cautelar do armamento (institucional e particular) e avaliação psicológica e correcional imediata do envolvido.",
                    "c) Concessão de elogio em boletim interno por preservar a intimidade do lar.",
                    "d) Suspensão imediata dos vencimentos do militar sem procedimento legal."
                ],
                answer: 1,
                explanation: "Fundamentação: Protocolo de Atendimento a Ocorrências de Violência Doméstica Envolvendo Militares do Estado. A preservação da vida e prevenção impronunciável impõe o recolhimento cautelar do armamento."
            },
            {
                id: 48,
                subject: "ORGANIZACIONAL",
                topic: "Treinamento Continuado - Programa Institucional",
                text: "O Programa de Treinamento Continuado (PTC) da PMESP visa ao aperfeiçoamento da tropa na ponta da linha. É diretriz do programa:",
                options: [
                    "a) Substituir a instrução prática pelo estudo autodidata em domicílio sem controle de presença.",
                    "b) Manter a atualização periódica em tiro defensivo (Método Giraldi), procedimentos operacionais padrão (POP) e direitos humanos para todo o efetivo operacional.",
                    "c) Restringir o treinamento de tiro apenas aos Oficiais do Quadro de Estado-Maior.",
                    "d) Aplicar treinamentos práticos apenas após a ocorrência de sinistros graves."
                ],
                answer: 1,
                explanation: "Fundamentação: Diretrizes do Programa de Treinamento Continuado (PTC/PMESP). O PTC garante o adestramento periódico e padronizado em tiro defensivo (Método Giraldi) e POP."
            },
            {
                id: 49,
                subject: "ORGANIZACIONAL",
                topic: "Processo Administrativo - Sindicância de Acidente em Viatura",
                text: "Diante de colisão envolvendo viatura policial militar da Cia PM com danos ao patrimônio público, qual procedimento administrativo deve ser instaurado para averiguar as causas, responsabilidades e eventual ressarcimento ao erário?",
                options: [
                    "a) Inquérito Policial Militar de Incompetência.",
                    "b) Sindicância (or Procedimento Deploratório equivalente) garantidos o contraditório e a ampla defesa.",
                    "c) Desconto direto no contracheque do motorista sem direito à defesa.",
                    "d) Processo de Exclusão por Inaptidão Veicular."
                ],
                answer: 1,
                explanation: "Fundamentação: Normas de Processo Administrativo da PMESP. A apuração de avarias em bens públicos e acidentes de viatura é efetuada mediante Sindicância."
            },
            {
                id: 50,
                subject: "ORGANIZACIONAL",
                topic: "Material Bélico - Porte de Arma em Eventos e Aglomerações",
                text: "O policial militar de folga que pretenda frequentar local com aglomeração de pessoas (shows, eventos esportivos) portando sua arma de fogo deve obrigatoriamente cumprir a seguinte condição prevista na Portaria nº PM4-001/1.2/24:",
                options: [
                    "a) Exibir o armamento ostensivamente na cintura para intimidar suspeitos.",
                    "b) Cientificar o policiamento do evento, portar a arma de forma velada e abster-se de consumir bebidas alcoólicas ou substâncias que alterem a capacidade psicomotora.",
                    "c) Entregar a arma ao organizador do evento civil na entrada do recinto.",
                    "d) Dispensar qualquer aviso ao policiamento local por possuir porte federal livre."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 7º, parágrafo único da Portaria nº PM4-001/1.2/24. O porte em aglomerações na folga exige porte velado, sobriedade total e dar ciência ao policiamento da área/evento."
            },
                        {
                id: 50,
                subject: "ORGANIZACIONAL",
                topic: "Material Bélico - Porte de Arma em Eventos e Aglomerações",
                text: "O policial militar de folga que pretenda frequentar local com aglomeração de pessoas (shows, eventos esportivos) portando sua arma de fogo deve obrigatoriamente cumprir a seguinte condição prevista na Portaria nº PM4-001/1.2/24:",
                options: [
                    "a) Exibir o armamento ostensivamente na cintura para intimidar suspeitos.",
                    "b) Cientificar o policiamento do evento, portar a arma de forma velada e abster-se de consumir bebidas alcoólicas ou substâncias que alterem a capacidade psicomotora.",
                    "c) Entregar a arma ao organizador do evento civil na entrada do recinto.",
                    "d) Dispensar qualquer aviso ao policiamento local por possuir porte federal livre."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 7º, parágrafo único da Portaria nº PM4-001/1.2/24. O porte em aglomerações na folga exige porte velado, sobriedade total e dar ciência ao policiamento da área/evento."
            }, // <--- INSERIR A PARTIR DAQUI (COM A VÍRGULA)
            
            // =========================================================================
            // NOVAS QUESTÕES ADICIONADAS (ID 51 A 100)
            // =========================================================================
            {
                id: 51,
                subject: "OPERACIONAL",
                topic: "NORSOP - Matrizes e Níveis de Resposta",
                text: "Durante patrulhamento em área comercial, a equipe de Rádio Patrulha avista um indivíduo em atitude suspeita que passa a efetuar disparos contra a viatura e homizia-se em um galpão abandonado. O Comando de Força de Patrulha (CFP) assume a cena e solicita ao COPOM o cerco da área por Força Tática e acionamento de apoio aéreo (Águia). Conforme a Diretriz nº PM3-001/02/20 (NORSOP), a elevação desse atendimento enquadra o incidente em qual Matriz Operacional e Nível de Resposta?",
                options: [
                    "a) Matriz Operacional I e Nível de Resposta 1.",
                    "b) Matriz Operacional II e Nível de Resposta 2.",
                    "c) Matriz Operacional II e Nível de Resposta 3.",
                    "d) Matriz Operacional III e Nível de Resposta 4."
                ],
                answer: 2,
                explanation: "Fundamentação: NORSOP (PM3-001/02/20). O emprego de recursos táticos adicionais suplementares da Unidade (Força Tática e Apoio Aéreo/Águia) enquadra o fato na Matriz Operacional II e Nível de Resposta 3."
            },
            {
                id: 52,
                subject: "OPERACIONAL",
                topic: "SCIPM - Unidade de Comando",
                text: "No contexto do Sistema de Comando de Incidentes da Polícia Militar (SCIPM), o princípio da Unidade de Comando estabelece categoricamente que:",
                options: [
                    "a) Todos os órgãos civis e militares presentes devem obedecer exclusivamente às ordens diretas do Comandante-Geral da Polícia Militar.",
                    "b) Cada indivíduo participante da operação responde e reporta-se a apenas 1 (um) único supervisor designado no incidente.",
                    "c) O Posto de Comando deve ser duplicado em áreas limítrofes entre dois Batalhões de Policiamento.",
                    "d) O Comandante do Incidente só pode emitir ordens mediante parecer prévio do Ministério Público."
                ],
                answer: 1,
                explanation: "Fundamentação: Diretriz SCIPM (PM3-003/02/23, item 5.3). O princípio da Unidade de Comando garante que cada recurso operacional tenha uma linha hierárquica clara, reportando-se a um único supervisor imediato."
            },
            {
                id: 53,
                subject: "OPERACIONAL",
                topic: "Sistema de C2 - Nível Estratégico de Decisão",
                text: "No âmbito da Diretriz nº PM3-001/02/23 (Sistema de Comando e Controle da PMESP), a competência para definir as políticas de segurança pública, alocar macro-recursos e estabelecer diretrizes institucionais de longo prazo recai sobre qual nível de decisão de C2?",
                options: [
                    "a) Nível Operacional / Executivo de Ponta.",
                    "b) Nível Tático de Subárea.",
                    "c) Nível Estratégico.",
                    "d) Nível de Apoio Logístico Local."
                ],
                answer: 2,
                explanation: "Fundamentação: Diretriz de C2 (PM3-001/02/23). O Nível Estratégico (Comando Geral e Grandes Comandos) é responsável pelo direcionamento político-institucional e definição de macro-objetivos."
            },
            {
                id: 54,
                subject: "OPERACIONAL",
                topic: "Câmeras Operacionais Portáteis (COP) - Custódia de Mídia",
                text: "Em caso de ocorrência envolvendo Lesão Corporal Decorrente de Intervenção Policial (LCDIP) com gravidade, qual é o prazo regulamentar mínimo de armazenamento/custódia do registro audiovisual na plataforma das COP?",
                options: [
                    "a) 30 dias.",
                    "b) 90 dias.",
                    "c) 180 dias.",
                    "d) 1 (um) ano."
                ],
                answer: 3,
                explanation: "Fundamentação: Diretriz das COP (PM3-001/02/25, item 6.9). Gravações vinculadas a procedimentos judiciais ou apurações correcionais de grave repercussão (MDIP, LCDIP, IPM) exigem prazo de custódia mínimo de 1 ano."
            },
            {
                id: 55,
                subject: "OPERACIONAL",
                topic: "NORSOP - Plano de Ação e Cartão de Prioridade",
                text: "Ao elaborar o planejamento operacional de sua Companhia, o Capitão Cmt de Cia utiliza os Cartões de Prioridade de Patrulhamento (CPP). De acordo com a NORSOP, o CPP é um instrumento derivado diretamente de qual documento de gestão?",
                options: [
                    "a) Do Relatório de Sindicância Correcional.",
                    "b) Do Plano de Policiamento Inteligente (PPI) fundamentado no diagnóstico criminal.",
                    "c) Do Auto de Prisão em Flagrante Delito.",
                    "d) Da Parte de Serviço do Coordenador Operacional."
                ],
                answer: 1,
                explanation: "Fundamentação: NORSOP (PM3-001/02/20, item 3.7.1). Os Cartões de Prioridade (CPP) são desdobramentos táticos e operacionais diretos do Plano de Policiamento Inteligente (PPI)."
            },
            {
                id: 56,
                subject: "OPERACIONAL",
                topic: "Programas de Policiamento - Força Tática (Ações de CDC)",
                text: "Quando empregada em ações de primeiro nível de Controle de Distúrbios Civis (CDC), a Força Tática do Batalhão deve pautar sua atuação no uso progressivo da força. Segundo os manuais doutrinários da PMESP, a utilização de munições de impacto controlado (menos letais) exige obrigatoriamente:",
                options: [
                    "a) Autorização verbal exclusiva do Delegado Titular da área.",
                    "b) Determinação do Comandante da Cena/Tropa, observados os princípios da legalidade, necessidade, proporcionalidade e moderação.",
                    "c) Confecção prévia de laudo pericial do local pelo Instituto de Criminalística.",
                    "d) Inexistência de manifestantes no raio de 500 metros."
                ],
                answer: 1,
                explanation: "Fundamentação: Manual de Doutrina de CDC e Força Tática da PMESP. O emprego de equipamentos de menor potencial ofensivo é ordenado pelo Comandante da Tropa sob os princípios do uso progressivo da força."
            },
            {
                id: 57,
                subject: "OPERACIONAL",
                topic: "SCIPM - Estado-Maior do Incidente",
                text: "Na estrutura organizacional do SCIPM, a Seção responsável pelo planejamento tático, coleta e avaliação de informações do incidente, acompanhamento de recursos e confecção do Plano de Ação do Incidente (PAI) é a:",
                options: [
                    "a) Seção de Operações.",
                    "b) Seção de Planejamento.",
                    "c) Seção de Logística.",
                    "d) Seção de Administração e Finanças."
                ],
                answer: 1,
                explanation: "Fundamentação: Diretriz SCIPM (PM3-003/02/23, item 5.4). A Seção de Planejamento é incumbida do levantamento de dados, controle de situação e elaboração do PAI."
            },
            {
                id: 58,
                subject: "OPERACIONAL",
                topic: "Programas de Policiamento - Rádio Patrulhamento",
                text: "A equipe de Rádio Patrulha, ao atender uma ocorrência de furto qualificado consumado em estabelecimento comercial sem presença de suspeitos no local, deve adotar qual conduta padronizada de atendimento?",
                options: [
                    "a) Recusar o atendimento por não se tratar de crime em andamento.",
                    "b) Preservar o local de crime se houver elementos para perícia, colher dados das testemunhas/vítima e confeccionar o Boletim de Ocorrência da Polícia Militar (BOPM).",
                    "c) Encaminhar a vítima presencialmente ao Comando de Policiamento de Área.",
                    "d) Solicitar o acionamento imediato do Grupo de Ações Táticas Especiais (GATE)."
                ],
                answer: 1,
                explanation: "Fundamentação: Procedimento Operacional Padrão (POP - PMESP). O atendimento ordinário exige preservação de vestígios para perícia e registro formal via BOPM."
            },
            {
                id: 59,
                subject: "OPERACIONAL",
                topic: "COP - Câmeras Operacionais (Acionamento Obrigatório)",
                text: "Assinale a alternativa que indica uma situação em que o acionamento e gravação da Câmera Operacional Portátil (COP) pelo policial militar é OBRIGATÓRIO, segundo as normas corporativas:",
                options: [
                    "a) Durante o intervalo regulamentar de refeição no Pátio da Unidade.",
                    "b) Durante o atendimento de qualquer ocorrência policial, abordagens, buscas pessoais e deslocamentos em emergência.",
                    "c) Durante reuniões administrativas internas de passagem de serviço.",
                    "d) Durante o uso de instalações sanitárias nas dependências do Batalhão."
                ],
                answer: 1,
                explanation: "Fundamentação: Diretriz das COP (PM3-001/02/25, item 6.2). O registro é obrigatório em interações operacionais, abordagens, fiscalizações e condutas de emergência."
            },
            {
                id: 60,
                subject: "OPERACIONAL",
                topic: "Programas de Policiamento - Ronda Maria da Penha",
                text: "O escopo de atuação das equipes do Programa Ronda Maria da Penha compreende precipuamente:",
                options: [
                    "a) A investigação criminal de homicídios tentados contra mulheres em geral.",
                    "b) O acompanhamento e fiscalização das Medidas Protetivas de Urgência deferidas pelo Poder Judiciário a mulheres em situação de violência doméstica e familiar.",
                    "c) A patrulha ostensiva exclusiva em portas de casas noturnas.",
                    "d) O julgamento de processos de família e concessão de alimentos provisórios."
                ],
                answer: 1,
                explanation: "Fundamentação: Diretriz do Programa Ronda Maria da Penha na PMESP. O pilar do programa é o cumprimento e monitoramento das Medidas Protetivas de Urgência deferidas às vítimas."
            },
            {
                id: 61,
                subject: "OPERACIONAL",
                topic: "Combate ao Crime Organizado - Plano de Cerco",
                text: "O Plano de Cerco acionado pelo COPOM/Sala de Operações em resposta a roubos a bancos e transporte de valores tem por objetivo primário:",
                options: [
                    "a) Cancelar a escala de serviço dos policiais da administração no mês seguinte.",
                    "b) Bloquear as rotas de fuga estratégicas e pontos de estrangulamento viário para isolar os infratores da lei e viabilizar a interceptação tática.",
                    "c) Substituir o trabalho pericial da Polícia Científica.",
                    "d) Transferir a responsabilidade do policiamento para os municípios vizinhos."
                ],
                answer: 1,
                explanation: "Fundamentação: Diretriz de C2 e Planos de Cerco da PMESP. O Plano de Cerco articula contenções viárias e patrulhas estratégicas nas rotas de escoamento criminal."
            },
            {
                id: 62,
                subject: "OPERACIONAL",
                topic: "Drones / ARPAS - Restrições Operacionais",
                text: "É vedado o emprego de Sistemas de Aeronaves Não Tripuladas (ARPAS/Drones) na PMESP na seguinte hipótese:",
                options: [
                    "a) Em operações de inteligência policial para mapeamento de pontos de tráfico.",
                    "b) Em sobrevoos sobre estabelecimentos prisionais durante rebeliões.",
                    "c) Operação por policial militar não credenciado ou sem a devida autorização de espaço aéreo emitida pelo DECEA/SARPAS.",
                    "d) Em missões de busca e salvamento em áreas de difícil acesso operadas pelo Corpo de Bombeiros."
                ],
                answer: 2,
                explanation: "Fundamentação: Regulamentação de ARPAS na PMESP / Normas do DECEA. A operação por pessoal não qualificado ou sem autorização do espaço aéreo é expressamente proibida."
            },
            {
                id: 63,
                subject: "OPERACIONAL",
                topic: "Inteligência Operacional - Cadastramento de Informações",
                text: "No âmbito do Sistema de Inteligência da Polícia Militar (SIPOM), a atividade de coleta de dados operacionais efetuada por policiais militares em patrulhamento ordinário alimenta o banco institucional por meio de qual relatório?",
                options: [
                    "a) Relatório de Informação de Pessoal (RIP).",
                    "b) Relatório de Encarregado de Viatura / Relatório de Inteligência Operacional.",
                    "c) Auto de Exibição e Apreensão.",
                    "d) Termo de Posse de Cargo."
                ],
                answer: 1,
                explanation: "Fundamentação: Doutrina SIPOM/PMESP. Os dados do patrulhamento alimentam o sistema de inteligência para mapeamento de manchas hiperlocais e redes criminosas."
            },
            {
                id: 64,
                subject: "OPERACIONAL",
                topic: "NORSOP - Conceito de Unidade de Serviço (US)",
                text: "Segundo a Diretriz nº PM3-001/02/20 (NORSOP), a menor célula operacional de execução da Polícia Militar, composta por recursos humanos e materiais devidamente lançados em cartão de prioridade, denomina-se:",
                options: [
                    "a) Posto de Comando Avançado.",
                    "b) Unidade de Serviço (US).",
                    "c) Fração de Exército.",
                    "d) Célula de Inteligência Regional."
                ],
                answer: 1,
                explanation: "Fundamentação: NORSOP (PM3-001/02/20, item 3.2). A Unidade de Serviço (US) representa a menor fração tática/operacional em patrulhamento (ex: viatura de Rádio Patrulha, dupla de ROCAM)."
            },
            {
                id: 65,
                subject: "OPERACIONAL",
                topic: "Programas de Policiamento - Trânsito (Embriaguez)",
                text: "O condutor que apresenta sinais claros de embriaguez ao volante (comprovado por teste de etilômetro indicando concentração igual ou superior a 0,34 mg de álcool por litro de ar alveolar) deve ser submetido às seguintes medidas:",
                options: [
                    "a) Apenas aplicação de multa administrativa e liberação do veículo.",
                    "b) Autuação pelo Art. 165 do CTB e condução à Polícia Judiciária pelo crime de trânsito do Art. 306 do CTB.",
                    "c) Recolhimento do veículo ao Pátio da Receita Federal sem autuação.",
                    "d) Perda imediata da propriedade do automóvel."
                ],
                answer: 1,
                explanation: "Fundamentação: Arts. 165 e 306 do Código de Trânsito Brasileiro. Valor igual ou superior a 0,34 mg/L no etilômetro ultrapassa a margem de erro e configura crime de trânsito."
            },
            {
                id: 66,
                subject: "OPERACIONAL",
                topic: "Programas de Policiamento - Escolar (Preventivo)",
                text: "No desenvolvimento do Policiamento Escolar, constituem ações prioritárias da equipe policial militar:",
                options: [
                    "a) O patrulhamento ostensivo no entorno das Unidades Escolares nos horários de entrada, saída e intervalos, articulando-se com a direção escolar.",
                    "b) A revista pessoal diária em todos os alunos antes da entrada nas salas de aula.",
                    "c) A substituição dos inspetores de alunos na disciplina interna escolar.",
                    "d) A interdição de vias públicas sem autorização do órgão de trânsito."
                ],
                answer: 0,
                explanation: "Fundamentação: Diretriz do Policiamento Escolar PMESP. A prioridade é a presença ostensiva nos horários críticos nos pontos de visibilidade do entorno escolar."
            },
            {
                id: 67,
                subject: "OPERACIONAL",
                topic: "SCIPM - Instalações do Incidente (Área de Espera)",
                text: "No SCIPM, o local demarcado taticamente onde os recursos operacionais adicionais solicitados ficam aguardando atribuição de missão antes de avançar para a cena de ação é denominado:",
                options: [
                    "a) Posto de Comando.",
                    "b) Área de Espera (Staging Area).",
                    "c) Base de Helicópteros.",
                    "d) Pátio de Apreensão."
                ],
                answer: 1,
                explanation: "Fundamentação: Diretriz SCIPM (PM3-003/02/23, item 5.1). A Área de Espera reserva viaturas e efetivo em prontidão para rápida alocação pelo Comandante do Incidente."
            },
            {
                id: 68,
                subject: "OPERACIONAL",
                topic: "Sistema de C2 - Interoperabilidade",
                text: "Em grandes eventos com atuação conjunta da PMESP com Forças Armadas e Guarda Civil Municipal, a capacidade dos sistemas de comunicação e comando de trocarem dados e informações de forma fluida é chamada de:",
                options: [
                    "a) Descentralização Isolada.",
                    "b) Interoperabilidade.",
                    "c) Segregação Criptográfica.",
                    "d) Centralização Monopolística."
                ],
                answer: 1,
                explanation: "Fundamentação: Diretriz de C2 (PM3-001/02/23). Interoperabilidade é a habilidade de sistemas e doutrinas operarem de maneira integrada entre diferentes agências."
            },
            {
                id: 69,
                subject: "OPERACIONAL",
                topic: "Programas de Policiamento - Comunitário (CFP)",
                text: "Compete ao Comando de Força de Patrulha (CFP), no âmbito da filosofia de Polícia Comunitária em sua subárea:",
                options: [
                    "a) Proibir o contato de praças com lideranças comunitárias.",
                    "b) Participar de reuniões de CONSEG, identificar anseios de segurança da comunidade e orientar o policiamento para a resolução colaborativa de problemas.",
                    "c) Fixar taxas de cobrança para policiamento privado em bairros nobres.",
                    "d) Delegar a confecção do BOPM aos presidentes de bairro."
                ],
                answer: 1,
                explanation: "Fundamentação: Diretrizes de Polícia Comunitária / NORSOP. O CFP atua como elo de ligação entre a gestão operacional da PMESP e as lideranças locais nos CONSEGs."
            },
            {
                id: 70,
                subject: "OPERACIONAL",
                topic: "COP - Solicitação de Mídia Externa",
                text: "Quando houver requisição formal de gravação de Câmera Operacional Corporal emitida pelo Ministério Público ou Poder Judiciário, a tramitação interna da mídia no Batalhão compete ao:",
                options: [
                    "a) Qualquer praça da Seção de Pessoal.",
                    "b) Comandante da Unidade ou autoridade delegada encarregada da custódia e envio oficial da evidência.",
                    "c) Técnico da empresa privada fornecedora sem ciência da PMESP.",
                    "d) Estagiário do arquivo geral."
                ],
                answer: 1,
                explanation: "Fundamentação: Diretriz das COP (PM3-001/02/25, item 6.10). A disponibilização de evidências para órgãos externos exige procedimento formal sob responsabilidade do Comandante de OPM."
            },
            {
                id: 71,
                subject: "OPERACIONAL",
                topic: "Programas de Policiamento - Rural (Abordagem)",
                text: "No patrulhamento rural, a abordagem a veículos suspeitos em estradas de terra não pavimentadas exige da equipe policial militar atentar-se especialmente para:",
                options: [
                    "a) Desligar os faróis da viatura durante a aproximação noturna sem sinalização.",
                    "b) Manter distância de segurança ampliada, observar pontos de abrigo e utilizar luzes de emergência/sinais sonoros com campo de visão desobstruído da poeira.",
                    "c) Realizar abordagem sempre a pé a mais de 1 km de distância da viatura.",
                    "d) Dispensar o uso de coletes balísticos devido ao calor no campo."
                ],
                answer: 1,
                explanation: "Fundamentação: Procedimento Operacional Padrão (POP - Policiamento Rural). A baixa visibilidade por poeira e falta de iluminação exigem ampliação do perímetro de segurança tática."
            },
            {
                id: 72,
                subject: "OPERACIONAL",
                topic: "SCIPM - Perímetro de Segurança em Crises",
                text: "Em um incidente crítico estático com reféns, o perímetro que isola o ponto crítico diretamente exposto ao risco de disparos ou explosões denomina-se:",
                options: [
                    "a) Perímetro Externo / Zona Verde.",
                    "b) Perímetro Interno / Zona Vermelha.",
                    "c) Perímetro de Apoio Logístico / Zona Amarela.",
                    "d) Perímetro de Imprensa."
                ],
                answer: 1,
                explanation: "Fundamentação: Doutrina de Gerenciamento de Crises e SCIPM. O Perímetro Interno isola o ponto crítico (Zona Vermelha), com acesso restrito a atiradores de elite e negociadores."
            },
            {
                id: 73,
                subject: "OPERACIONAL",
                topic: "NORSOP - Análise Crítica de Ocorrências (RAC)",
                text: "A Reunião de Análise Crítica (RAC) promovida no âmbito da NORSOP tem por finalidade:",
                options: [
                    "a) Punir disciplinarmente os envolvidos em sinistros de trânsito.",
                    "b) Avaliar os resultados do emprego operacional, identificar boas práticas e pontos de melhoria no planejamento e execução do policiamento.",
                    "c) Escolher os policiais que realizarão cursos no exterior.",
                    "d) Homologar os contratos de compra de combustível da OPM."
                ],
                answer: 1,
                explanation: "Fundamentação: NORSOP (PM3-001/02/20, item 3.8). A RAC é ferramenta pedagógica e gerencial de feedback para aprimoramento contínuo das operações."
            },
            {
                id: 74,
                subject: "OPERACIONAL",
                topic: "Força Tática - Apoio ao Rádio Patrulhamento",
                text: "Ao ser acionada em apoio a uma viatura de Rádio Patrulha envolvida em acompanhamento de veículo roubado em alta velocidade, a equipe de Força Tática deve:",
                options: [
                    "a) Ultrapassar a viatura de Rádio Patrulha sem avisar na rede de rádio.",
                    "b) Coordenar via COPOM o cerco nas vias adjacentes à rota de fuga, assumindo a liderança do acompanhamento quando em posição favorável e mediante comunicação na rede.",
                    "c) Determinar o cancelamento imediato de todas as abordagens na cidade.",
                    "d) Efetuar disparos de fuzil contra os pneus do veículo mesmo em via movimentada."
                ],
                answer: 1,
                explanation: "Fundamentação: Manual de Força Tática e POP de Acompanhamento de Veículos. O apoio prioriza o fechamento de cercos táticos e assumir a intervenção com segurança."
            },
            {
                id: 75,
                subject: "OPERACIONAL",
                topic: "NORSOP - Célula de Coordenação Operacional",
                text: "A estrutura responsável por monitorar em tempo real a execução do patrulhamento, redistribuir cartões de prioridade em caso de emergências e manter a ligação com o COPOM na Companhia PM é a:",
                options: [
                    "a) Seção de Justiça e Disciplina.",
                    "b) Sala de Operações da OPM.",
                    "c) Comissão de Licitações.",
                    "d) Seção de Tesouraria."
                ],
                answer: 1,
                explanation: "Fundamentação: NORSOP e Diretriz de C2. A Sala de Operações da OPM atua como centro tático de monitoramento do emprego do efetivo em tempo real."
            },

            // =========================================================================
            // ASSUNTOS JURÍDICO-ADMINISTRATIVOS (30% -> QUESTÕES 76 A 90)
            // =========================================================================
            {
                id: 76,
                subject: "JURIDICO",
                topic: "Lei Complementar nº 18.442/26 - Requisitos no QOE",
                text: "A Lei Complementar nº 18.442, de 02ABR26, estabelece os critérios para ingresso de Subtenentes PM no Quadro de Oficiais Especialistas (QOE). Além do aproveitamento no CHOE e posicionamento no almanaque, exige-se do candidato estar classificado, no mínimo, em qual comportamento disciplinar?",
                options: [
                    "a) Comportamento Bom.",
                    "b) Comportamento Ótimo.",
                    "c) Comportamento Excepcional.",
                    "d) Isenção total de punições em toda a carreira."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 12 da LC nº 18.442/26. O acesso ao QOE exige que o militar esteja classificado, no mínimo, no comportamento 'Ótimo'."
            },
            {
                id: 77,
                subject: "JURIDICO",
                topic: "RDPM (LC 893/01) - Teto da Permanência Disciplinar",
                text: "Nos termos da Lei Complementar nº 893/01 (RDPM), a sanção disciplinar de Permanência Disciplinar não poderá ultrapassar o prazo máximo continuado de:",
                options: [
                    "a) 5 (cinco) dias.",
                    "b) 10 (dez) dias.",
                    "c) 20 (vinte) dias.",
                    "d) 30 (trinta) dias."
                ],
                answer: 2,
                explanation: "Fundamentação: Art. 16 do RDPM (LC nº 893/01). A permanência disciplinar é limitada ao teto máximo de 20 dias consecutivos."
            },
            {
                id: 78,
                subject: "JURIDICO",
                topic: "RDPM (LC 893/01) - Competência de Coronel PM",
                text: "A sanção disciplinar de Detenção (Art. 17 do RDPM) é de competência de aplicação restrita a quais autoridades na escala hierárquica?",
                options: [
                    "a) Exclusivamente do Governador do Estado.",
                    "b) Do Comandante-Geral e demais Oficiais ocupantes de funções próprias do posto de Coronel PM.",
                    "c) De qualquer Capitão Cmt de Cia.",
                    "d) Do Chefe da Seção de Pessoal do Batalhão."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 31 do RDPM (LC nº 893/01). A aplicação da sanção de Detenção exige competência de Oficial no posto de Coronel PM (ou superiores)."
            },
            {
                id: 79,
                subject: "JURIDICO",
                topic: "Processo Disciplinar - PDRS",
                text: "O Processo Disciplinar de Rito Sumário (PDRS) é o instrumento correcional adequado para apurar infrações disciplinares praticadas por militares do Estado quando:",
                options: [
                    "a) A falta for de natureza grave passível de demissão de Oficial.",
                    "b) Tratar-se de falta disciplinar de menor complexidade cometida por praça sem estabilidade ou praça estabilizada em atos de menor gravidade.",
                    "c) O fato constituir crime doloso contra a vida de civil.",
                    "d) O investigado for Oficial Superior."
                ],
                answer: 1,
                explanation: "Fundamentação: Instruções do Processo Administrativo Disciplinar na PMESP. O PDRS visa à celeridade na apuração de faltas disciplinares de menor gravidade."
            },
            {
                id: 80,
                subject: "JURIDICO",
                topic: "RDPM (LC 893/01) - Legítima Defesa",
                text: "Quando a falta disciplinar for praticada em legítima defesa própria ou de terceiros, o julgamento da conduta resultará em:",
                options: [
                    "a) Aplicação de advertência verbal em boletim reservado.",
                    "b) Reconhecimento da Causa de Justificação, não havendo punição disciplinar a ser aplicada.",
                    "c) Conversão automática em prestação de serviço extraordinário.",
                    "d) Transferência compulsória de Unidade."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 34, I do RDPM (LC nº 893/01). As causas de justificação eliminam a ilicitude da falta, resultando na não aplicação de sanção."
            },
            {
                id: 81,
                subject: "JURIDICO",
                topic: "Doutrina Correcional - IPM com Indiciado Preso",
                text: "De acordo com o Código de Processo Penal Militar (CPPM), o prazo para conclusão do Inquérito Policial Militar (IPM), estando o indiciado PRESO em flagrante ou preventivamente, é de:",
                options: [
                    "a) 10 (dez) dias.",
                    "b) 20 (vinte) dias.",
                    "c) 40 (quarenta) dias.",
                    "d) 60 (sessenta) dias."
                ],
                answer: 0,
                explanation: "Fundamentação: Art. 20 do CPPM. O prazo de conclusão do IPM com indiciado preso é de 10 dias improrrogáveis."
            },
            {
                id: 82,
                subject: "JURIDICO",
                topic: "Doutrina Correcional - IPM com Indiciado Solto",
                text: "Estando o indiciado SOLTO, o prazo regulamentar para a conclusão do Inquérito Policial Militar (IPM) é de:",
                options: [
                    "a) 10 dias.",
                    "b) 20 dias.",
                    "c) 40 dias, prorrogáveis por mais 20 dias mediante solicitação fundamentada à autoridade judiciária.",
                    "d) 180 dias sem prorrogação."
                ],
                answer: 2,
                explanation: "Fundamentação: Art. 20 do CPPM. Para indiciado solto, o prazo inicial é de 40 dias, admitindo prorrogação justificável por mais 20 dias."
            },
            {
                id: 83,
                subject: "JURIDICO",
                topic: "RDPM (LC 893/01) - Prescrição Disciplinar",
                text: "A ação disciplinar da administração prescreve em quanto tempo para faltas disciplinares sujeitas às sanções de Advertência, Repreensão e Permanência Disciplinar?",
                options: [
                    "a) 1 (um) ano.",
                    "b) 2 (dois) anos.",
                    "c) 5 (cinco) anos.",
                    "d) 10 (dez) anos."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 85 do RDPM (LC nº 893/01). As faltas disciplinares sujeitas a sanções não demissórias prescrevem no prazo de 2 anos a contar da data do fato."
            },
            {
                id: 84,
                subject: "JURIDICO",
                topic: "Lei Complementar nº 18.442/26 - Subcomandante-Geral",
                text: "Nos termos da LC nº 18.442/26, o cargo de Subcomandante-Geral da Polícia Militar é exercido por Oficial do posto de Coronel PM do QOEM, indicado pelo Comandante-Geral e nomeado pelo:",
                options: [
                    "a) Presidente da Assembleia Legislativa.",
                    "b) Governador do Estado.",
                    "c) Secretário de Segurança Pública.",
                    "d) Tribunal de Justiça Militar."
                ],
                answer: 1,
                explanation: "Fundamentação: LC nº 18.442/26, Art. 10. A nomeação dos cargos de cúpula da PMESP é ato do Chefe do Poder Executivo (Governador do Estado)."
            },
            {
                id: 85,
                subject: "JURIDICO",
                topic: "RDPM (LC 893/01) - Efeito do Recurso",
                text: "A interposição de Pedido de Reconsideração de Ato contra punição disciplinar possui qual efeito quanto à execução da sanção aplicada?",
                options: [
                    "a) Efeito suspensivo automático obrigatoriamente.",
                    "b) Apenas efeito devolutivo, podendo a autoridade conceder efeito suspensivo de forma motivada.",
                    "c) Anulação automática da pena.",
                    "d) Perda dos proventos do militar."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 60 do RDPM (LC nº 893/01). O recurso possui efeito devolutivo, sendo o efeito suspensivo faculdade motivada da autoridade."
            },
            {
                id: 86,
                subject: "JURIDICO",
                topic: "Doutrina Correcional - Finalidade da Sindicância",
                text: "A Sindicância é o procedimento administrativo instaurado no âmbito da PMESP com a finalidade de:",
                options: [
                    "a) Demitir imediatamente Oficial acusado de crime comum.",
                    "b) Apurar fatos de autoria incerta, controvertida ou acidentes/danos ao patrimônio sem caráter acusatório inicial direto.",
                    "c) Julgar crimes militares de competência do Tribunal do Júri.",
                    "d) Substituir a fase de inquérito na Justiça Federal."
                ],
                answer: 1,
                explanation: "Fundamentação: Instruções de Sindicância da PMESP. A Sindicância possui caráter investigativo/preparatório para elucidar autoria e materialidade de irregularidades."
            },
            {
                id: 87,
                subject: "JURIDICO",
                topic: "RDPM (LC 893/01) - Cancelamento de Sanção",
                text: "O cancelamento de sanção disciplinar (Art. 68 do RDPM) é uma recompensa concedida ao militar do Estado que mantiver bom comportamento e cumprir o lapso temporal de:",
                options: [
                    "a) 1 ano para qualquer pena.",
                    "b) 5 anos de efetivo serviço sem qualquer nova punição disciplinar.",
                    "c) 10 anos apenas se for praça sem estabilidade.",
                    "d) 20 anos se for Oficial."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 68 do RDPM (LC nº 893/01). O direito ao cancelamento de registros de sanções exige o transcurso de 5 anos de efetivo serviço sem novas faltas."
            },
            {
                id: 88,
                subject: "JURIDICO",
                topic: "Processo Disciplinar - Conselho de Disciplina",
                text: "O Conselho de Disciplina instaurado para avaliar praça estabilizada é composto por:",
                options: [
                    "a) 3 (três) Oficiais da ativa da Polícia Militar.",
                    "b) 1 Juiz de Direito e 2 Promotores.",
                    "c) 3 Subtenentes com mais de 25 anos de serviço.",
                    "d) 5 civis escolhidos pela OAB."
                ],
                answer: 0,
                explanation: "Fundamentação: Decreto Estadual nº 15.848/76. O Conselho de Disciplina é constituído por um trio de Oficiais da ativa (Presidente, Interrogante e Relator)."
            },
            {
                id: 89,
                subject: "JURIDICO",
                topic: "Doutrina Correcional - Deserção de Praça",
                text: "O crime militar de Deserção praticado por Praça (Art. 187 do CPM) consuma-se quando o militar ausenta-se, sem licença, da unidade onde serve, por mais de:",
                options: [
                    "a) 24 horas.",
                    "b) 5 dias.",
                    "c) 8 (oito) dias consecutivos.",
                    "d) 30 dias."
                ],
                answer: 2,
                explanation: "Fundamentação: Art. 187 do Código Penal Militar. A consumação do crime de deserção exige a ausência injustificada por mais de 8 dias consecutivos."
            },
            {
                id: 90,
                subject: "JURIDICO",
                topic: "RDPM (LC 893/01) - Aggravantes Disciplinares",
                text: "Assinale a alternativa que apresenta uma CIRCUNSTÂNCIA AGRAVANTE no julgamento de transgressão disciplinar conforme o Art. 35 do RDPM:",
                options: [
                    "a) Ter o transgressor prestado serviços relevantes.",
                    "b) O cometimento da falta em concurso de dois ou mais militares do Estado ou em presença de subordinado/público.",
                    "c) Estar no comportamento Excepcional.",
                    "d) Ter agido sob coação irresistível."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 35, V e VIII do RDPM (LC nº 893/01). A prática da falta em conluio, diante do público ou de subordinados agrava a sanção disciplinar."
            },

            // =========================================================================
            // ASSUNTOS ORGANIZACIONAIS (20% -> QUESTÕES 91 A 100)
            // =========================================================================
            {
                id: 91,
                subject: "ORGANIZACIONAL",
                topic: "Regime de Trabalho - Escala 24x48",
                text: "Segundo a Portaria do Cmt G nº PM1-7/02/23, o policial militar fixado na escala de serviço de 24 horas de trabalho por 48 horas de descanso (24x48) fará jus a 1 (uma) folga mensal a cada quantos serviços cumpridos?",
                options: [
                    "a) 5 serviços.",
                    "b) 9 (nove) serviços ininterruptos.",
                    "c) 14 serviços.",
                    "d) 20 serviços."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 12 da Portaria nº PM1-7/02/23. Na escala de 24x48, a folga mensal regulamentar é adquirida a cada 9 serviços cumpridos."
            },
            {
                id: 92,
                subject: "ORGANIZACIONAL",
                topic: "Material Bélico - Colete Balístico",
                text: "De acordo com a Portaria nº PM4-001/1.2/24, a Carga Individual de material bélico concedida ao policial militar pode englobar:",
                options: [
                    "a) Uma arma de fogo de porte, cartuchos operacionais e um colete de proteção balística institucional.",
                    "b) Duas metralhadoras e granadas de bocal.",
                    "c) Apenas munição química para treino.",
                    "d) Exclusivamente espingarda calibre 12."
                ],
                answer: 0,
                explanation: "Fundamentação: Art. 11 da Portaria nº PM4-001/1.2/24. A carga individual abrange a arma de porte, munições e o colete de proteção balística."
            },
            {
                id: 93,
                subject: "ORGANIZACIONAL",
                topic: "Afastamentos Regulamentares - Núpcias",
                text: "O afastamento regulamentar em virtude de casamento (Licença Nupcial) concedido ao militar do Estado é de quantos dias consecutivos?",
                options: [
                    "a) 3 dias.",
                    "b) 5 dias.",
                    "c) 8 (oito) dias consecutivos.",
                    "d) 15 dias."
                ],
                answer: 2,
                explanation: "Fundamentação: Regulamento de Afastamentos da PMESP. O afastamento por núpcias garante 8 dias consecutivos a contar da data do casamento civil."
            },
            {
                id: 94,
                subject: "ORGANIZACIONAL",
                topic: "SisTAF - Avaliação e Pronto Emprego",
                text: "A avaliação do Teste de Aptidão Física (SisTAF) na Polícia Militar do Estado de São Paulo é aplicada com qual periodicidade regular para fins de acompanhamento da tropa?",
                options: [
                    "a) Mensal.",
                    "b) Semestral / Anual (conforme o plano de aplicação da Diretoria de Pessoal).",
                    "c) Apenas a cada 5 anos.",
                    "d) Somente no momento do ingresso na reserva."
                ],
                answer: 1,
                explanation: "Fundamentação: Diretrizes do SisTAF / Diretoria de Pessoal. A aplicação das etapas do SisTAF segue o calendário institucional de prontidão física."
            },
            {
                id: 95,
                subject: "ORGANIZACIONAL",
                topic: "Violência Doméstica - Prisão de Policial",
                text: "Ocorrendo prisão em flagrante de policial militar por crime relativo à Violência Doméstica contra a mulher no âmbito familiar, o recolhimento do militar preso deve ser efetuado em qual dependência?",
                options: [
                    "a) Em cela comum de Centro de Detenção Provisória civil.",
                    "b) No Presídio Militar Romão Gomes (PMRG) ou dependência de OPM designada para custódia militar.",
                    "c) Na própria residência da vítima sob vigilância privada.",
                    "d) Na Câmara Municipal local."
                ],
                answer: 1,
                explanation: "Fundamentação: Art. 242 do CPPM e Diretrizes Correcionais. O militar preso permanece sob custódia em estabelecimento militar (PMRG / OPM)."
            },
            {
                id: 96,
                subject: "ORGANIZACIONAL",
                topic: "Material Bélico - Armamento Particular",
                text: "Para que o policial militar possa portar arma de fogo de sua propriedade particular, é indispensável:",
                options: [
                    "a) Apenas a nota fiscal de compra emitida pela loja.",
                    "b) O devido registro do armamento no sistema institucional da PMESP e emissão do respectivo CRAF.",
                    "c) Autorização verbal do Prefeito do município.",
                    "d) Inexistência de multas de trânsito em seu nome."
                ],
                answer: 1,
                explanation: "Fundamentação: Portaria nº PM4-001/1.2/24. O porte de arma particular exige cadastro no sistema corporativo de material bélico e expedição do CRAF."
            },
            {
                id: 97,
                subject: "ORGANIZACIONAL",
                topic: "Regime de Trabalho - DEJEM",
                text: "A execução de serviço na Diária Especial por Jornada Extraordinária de Trabalho Policial-Militar (DEJEM) possui natureza de trabalho:",
                options: [
                    "a) Obrigatória e compulsória sem remuneração.",
                    "b) Voluntária e gratificada, realizada no período de folga do policial militar.",
                    "c) Substitutiva do expediente administrativo ordinário.",
                    "d) Exclusiva para praças punidas disciplinarmente."
                ],
                answer: 1,
                explanation: "Fundamentação: Legislação da DEJEM e Atividade Delegada. A adesão é voluntária, executada durante as folgas regulamentares com retribuição pecuniária."
            },
            {
                id: 98,
                subject: "ORGANIZACIONAL",
                topic: "Treinamento Continuado - Método Giraldi",
                text: "O Método Giraldi (Tiro Defensivo na Preservação da Vida) adotado obrigatoriamente na PMESP fundamenta-se precipuamente em:",
                options: [
                    "a) Disparos automáticos rápidos sem identificação de alvos.",
                    "b) Procedimentos reflexos pautados pelo respeito à lei, aos direitos humanos e pelo uso legítimo e progressivo da força com foco na preservação de vidas.",
                    "c) Competições esportivas de tiro de precisão a longa distância.",
                    "d) Uso de munição real em ambientes sem pista de tiro isolada."
                ],
                answer: 1,
                explanation: "Fundamentação: Doutrina do Método Giraldi (PMESP). A metodologia condiciona o disparo de arma de fogo ao rigoroso amparo legal e proteção à vida."
            },
            {
                id: 99,
                subject: "ORGANIZACIONAL",
                topic: "Afastamentos Regulamentares - Licença Paternidade",
                text: "O policial militar masculino faz jus à Licença Paternidade pelo nascimento de filho pelo período regulamentar de:",
                options: [
                    "a) 5 dias corridos.",
                    "b) 20 (vinte) dias consecutivos (considerando a prorrogação regulamentar).",
                    "c) 60 dias.",
                    "d) 180 dias."
                ],
                answer: 1,
                explanation: "Fundamentação: Legislação do Estado de SP para servidores/militares. A licença paternidade abrange o período base somado à prorrogação estadual, totalizando 20 dias."
            },
            {
                id: 100,
                subject: "ORGANIZACIONAL",
                topic: "Processo Administrativo - Apuração Preliminar",
                text: "A Apuração Preliminar é o procedimento simplificado instaurado quando a infração disciplinar ou irregularidade administrativa não estiver suficientemente caracterizada quanto à autoria ou existência. Seu prazo de conclusão é de:",
                options: [
                    "a) 10 dias.",
                    "b) 30 (trinta) dias.",
                    "c) 90 dias.",
                    "d) 1 ano."
                ],
                answer: 1,
                explanation: "Fundamentação: Instruções do Processo Administrativo na PMESP. O prazo para conclusão de Apuração Preliminar é de 30 dias, prorrogável motivadamente."
            }
        ]
    }
};
