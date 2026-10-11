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
                    "b) Sindicância (ou Procedimento Deploratório equivalente) garantidos o contraditório e a ampla defesa.",
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
            }
        ]
    }
};
