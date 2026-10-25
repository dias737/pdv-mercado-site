(() => {
  "use strict";

  const formatMoney = (value) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);

  const normalizeSearch = (value) =>
    value.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR");

  const navGroups = [
    {
      label: "Visão geral",
      items: [{ id: "dashboard", label: "Central de operações", icon: "⌂" }],
    },
    {
      label: "Operação",
      items: [
        { id: "vendas", label: "Vendas / PDV", icon: "▤" },
        { id: "produtos", label: "Produtos", icon: "◇" },
        { id: "estoque", label: "Estoque", icon: "▦", badge: "14" },
        { id: "compras", label: "Compras", icon: "↙" },
      ],
    },
    {
      label: "Relacionamento",
      items: [
        { id: "fornecedores", label: "Fornecedores", icon: "◎" },
        { id: "financeiro", label: "Financeiro", icon: "$", badge: "2" },
        { id: "clientes", label: "Clientes / Fidelidade", icon: "♡" },
      ],
    },
    {
      label: "Gestão",
      items: [
        { id: "fiscal", label: "Fiscal", icon: "§" },
        { id: "equipe", label: "Equipe", icon: "♙" },
        { id: "relatorios", label: "Relatórios", icon: "⌁" },
        { id: "filiais", label: "Filiais", icon: "⌘" },
      ],
    },
    {
      label: "Sistema",
      items: [{ id: "configuracoes", label: "Configurações", icon: "⚙" }],
    },
  ];

  const modules = {
    vendas: {
      eyebrow: "Operação comercial",
      title: "Vendas e frente de caixa",
      description: "Acompanhe vendas, caixas, formas de pagamento e ocorrências da operação em um só lugar.",
      primary: "Nova venda",
      primarySale: true,
      search: "Buscar venda ou operador…",
      filter: "Todos os caixas",
      summary: [
        ["Faturamento hoje", "R$ 18.742,60", "+8,7% sobre ontem", "R$"],
        ["Vendas realizadas", "326", "38 vendas na última hora", "#"],
        ["Vendas canceladas", "3", "0,9% do total", "×"],
        ["Caixas em operação", "3 abertos", "1 caixa fechado", "CX"],
      ],
      columns: ["Venda", "Horário", "Operador", "Caixa", "Pagamento", "Total", "Situação"],
      rows: [
        ["#008741", "14:31", "Ana Souza", "CX-02", "Pix", "R$ 84,70", "<span class=\"badge badge--success\">Concluída</span>"],
        ["#008740", "14:27", "Paulo Lima", "CX-01", "Crédito", "R$ 126,35", "<span class=\"badge badge--success\">Concluída</span>"],
        ["#008739", "14:22", "Ana Souza", "CX-02", "Débito", "R$ 47,90", "<span class=\"badge badge--success\">Concluída</span>"],
        ["#008738", "14:18", "Luciana Alves", "CX-03", "Dinheiro", "R$ 212,18", "<span class=\"badge badge--success\">Concluída</span>"],
        ["#008737", "14:13", "Paulo Lima", "CX-01", "Crédito", "R$ 32,50", "<span class=\"badge badge--warning\">Estornada</span>"],
        ["#008736", "14:09", "Luciana Alves", "CX-03", "Pix", "R$ 68,14", "<span class=\"badge badge--success\">Concluída</span>"],
      ],
      sideTitle: "Status dos caixas",
      sideItems: [
        ["CX-01", "Paulo Lima • aberto há 5h12", "R$ 6.450,20", "01"],
        ["CX-02", "Ana Souza • aberto há 4h48", "R$ 5.928,70", "02"],
        ["CX-03", "Luciana Alves • aberto há 3h31", "R$ 4.812,90", "03"],
        ["CX-04", "Rafael Nunes • fechado 13:10", "R$ 1.550,80", "04"],
      ],
      insight: ["Ritmo de vendas", "Pico previsto entre 17h e 19h", "Com base no movimento fictício exibido, organize os intervalos da equipe antes do horário de maior fluxo."],
    },
    produtos: {
      eyebrow: "Catálogo central",
      title: "Produtos",
      description: "Gerencie cadastro, preços, códigos de barras, tributação e sortimento de todas as lojas.",
      primary: "Novo produto",
      search: "Buscar por produto, SKU ou EAN…",
      filter: "Todas as categorias",
      summary: [
        ["Produtos cadastrados", "4.862", "4.731 ativos", "SKU"],
        ["Novos neste mês", "28", "+12 vs. mês anterior", "+"],
        ["Preço atualizado", "96,8%", "157 aguardam revisão", "%"],
        ["Produtos sem giro", "41", "Há mais de 45 dias", "!"],
      ],
      columns: ["Produto", "SKU / EAN", "Categoria", "Preço", "Estoque", "Margem", "Situação"],
      rows: [
        ["<div class=\"table-primary\"><span class=\"product-thumb\">AR</span><div><strong>Arroz Tipo 1 Boa Mesa 5kg</strong><small>Unidade</small></div></div>", "001284 / 7891035…", "Mercearia", "R$ 27,90", "184 un.", "24,6%", "<span class=\"badge badge--success\">Ativo</span>"],
        ["<div class=\"table-primary\"><span class=\"product-thumb product-thumb--amber\">CA</span><div><strong>Café Tradicional Serra 500g</strong><small>Pacote</small></div></div>", "001892 / 7896654…", "Mercearia", "R$ 18,49", "12 un.", "31,2%", "<span class=\"badge badge--warning\">Estoque baixo</span>"],
        ["<div class=\"table-primary\"><span class=\"product-thumb product-thumb--blue\">LE</span><div><strong>Leite Integral Vale 1L</strong><small>Caixa</small></div></div>", "000441 / 7891120…", "Laticínios", "R$ 5,79", "96 un.", "19,8%", "<span class=\"badge badge--success\">Ativo</span>"],
        ["<div class=\"table-primary\"><span class=\"product-thumb product-thumb--violet\">SB</span><div><strong>Sabão em Pó Limpex 1,6kg</strong><small>Pacote</small></div></div>", "002103 / 7895518…", "Limpeza", "R$ 21,90", "44 un.", "27,5%", "<span class=\"badge badge--success\">Ativo</span>"],
        ["<div class=\"table-primary\"><span class=\"product-thumb\">BA</span><div><strong>Banana Prata</strong><small>Quilograma</small></div></div>", "000073 / balança", "Hortifruti", "R$ 7,99", "38,6 kg", "35,7%", "<span class=\"badge badge--success\">Ativo</span>"],
      ],
      sideTitle: "Categorias em destaque",
      sideItems: [
        ["Mercearia", "1.248 produtos ativos", "26%", "ME"],
        ["Bebidas", "684 produtos ativos", "14%", "BE"],
        ["Higiene e limpeza", "527 produtos ativos", "11%", "HL"],
        ["Hortifruti", "346 produtos ativos", "7%", "HF"],
      ],
      insight: ["Oportunidade de margem", "157 preços pedem revisão", "Uma conferência de custos e margens pode priorizar itens com reajuste de compra recente."],
    },
    estoque: {
      eyebrow: "Controle de inventário",
      title: "Estoque",
      description: "Visão de saldo, cobertura, validade, perdas e necessidade de reposição por loja e depósito.",
      primary: "Nova movimentação",
      search: "Buscar item no estoque…",
      filter: "Todos os depósitos",
      summary: [
        ["Valor em estoque", "R$ 286.410", "+2,4% neste mês", "R$"],
        ["Abaixo do mínimo", "14 itens", "4 exigem ação hoje", "!"],
        ["Em reposição", "38 itens", "7 pedidos vinculados", "↻"],
        ["Índice de perdas", "1,18%", "Meta simulada: 1,30%", "%"],
      ],
      columns: ["Produto", "Local", "Disponível", "Mínimo", "Cobertura", "Última entrada", "Situação"],
      rows: [
        ["Café Tradicional Serra 500g", "Loja / Gôndola 04", "12 un.", "24 un.", "2 dias", "20/10/2026", "<span class=\"badge badge--danger\">Crítico</span>"],
        ["Óleo de Soja Dourado 900ml", "Depósito A", "18 un.", "30 un.", "3 dias", "21/10/2026", "<span class=\"badge badge--warning\">Baixo</span>"],
        ["Papel Higiênico Macio 12un", "Loja / Gôndola 11", "9 pct.", "15 pct.", "4 dias", "18/10/2026", "<span class=\"badge badge--warning\">Baixo</span>"],
        ["Refrigerante Cola 2L", "Depósito B", "142 un.", "48 un.", "12 dias", "22/10/2026", "<span class=\"badge badge--success\">Normal</span>"],
        ["Leite Integral Vale 1L", "Câmara 02", "96 un.", "60 un.", "8 dias", "23/10/2026", "<span class=\"badge badge--success\">Normal</span>"],
      ],
      sideTitle: "Ações prioritárias",
      sideItems: [
        ["Contagem cíclica", "Setor de bebidas • hoje", "12 itens", "CC"],
        ["Validade próxima", "Vencimento em até 7 dias", "9 lotes", "VA"],
        ["Transferência sugerida", "Matriz → Unidade Norte", "6 itens", "TR"],
        ["Divergências", "Aguardando conferência", "3 itens", "DV"],
      ],
      insight: ["Reposição sugerida", "Café, óleo e papel pedem atenção", "O painel demonstra como uma lista de compra poderia ser priorizada com base no estoque mínimo e no giro."],
    },
    compras: {
      eyebrow: "Abastecimento",
      title: "Compras",
      description: "Planeje pedidos, acompanhe cotações, aprovações, recebimentos e custos de aquisição.",
      primary: "Novo pedido",
      search: "Buscar pedido ou fornecedor…",
      filter: "Todos os pedidos",
      summary: [
        ["Compras no mês", "R$ 164.820", "38 pedidos emitidos", "R$"],
        ["Pedidos em aberto", "9", "R$ 42.680 comprometidos", "PE"],
        ["Entregas hoje", "4", "2 já recebidas", "→"],
        ["Aprovações pendentes", "3", "Maior: R$ 8.420", "AP"],
      ],
      columns: ["Pedido", "Fornecedor", "Emissão", "Entrega", "Itens", "Total", "Situação"],
      rows: [
        ["PC-2026-0381", "Distribuidora Bom Preço", "22/10/2026", "23/10/2026", "42", "R$ 12.480,60", "<span class=\"badge badge--blue\">Em trânsito</span>"],
        ["PC-2026-0380", "Laticínios Vale Sul", "22/10/2026", "23/10/2026", "18", "R$ 6.214,00", "<span class=\"badge badge--warning\">Conferência</span>"],
        ["PC-2026-0379", "Atacado Primavera", "21/10/2026", "24/10/2026", "64", "R$ 18.790,45", "<span class=\"badge badge--blue\">Confirmado</span>"],
        ["PC-2026-0378", "Hortifruti Campo Verde", "21/10/2026", "22/10/2026", "25", "R$ 4.118,30", "<span class=\"badge badge--success\">Recebido</span>"],
        ["PC-2026-0377", "Higiene Total Ltda.", "20/10/2026", "27/10/2026", "31", "R$ 8.420,00", "<span class=\"badge badge--violet\">Aprovação</span>"],
      ],
      sideTitle: "Agenda de recebimento",
      sideItems: [
        ["08:30", "Laticínios Vale Sul", "Doca 01", "08"],
        ["10:15", "Distribuidora Bom Preço", "Doca 02", "10"],
        ["14:00", "Bebidas Nacional", "Doca 01", "14"],
        ["16:30", "Padaria Tradição", "Doca 02", "16"],
      ],
      insight: ["Economia potencial", "Compare três cotações em aberto", "A melhor combinação fictícia de preços representa uma economia estimada de R$ 1.284 neste demonstrativo."],
    },
    fornecedores: {
      eyebrow: "Parceiros comerciais",
      title: "Fornecedores",
      description: "Centralize contatos, condições comerciais, prazos, histórico de compra e avaliação de entrega.",
      primary: "Novo fornecedor",
      search: "Buscar fornecedor ou CNPJ…",
      filter: "Todos os segmentos",
      summary: [
        ["Fornecedores ativos", "86", "12 preferenciais", "FN"],
        ["Prazo médio", "21 dias", "+2 dias negociados", "D"],
        ["Entregas no prazo", "93,6%", "Meta simulada: 95%", "%"],
        ["Contratos a vencer", "4", "Nos próximos 30 dias", "!"],
      ],
      columns: ["Fornecedor", "Segmento", "Contato", "Prazo", "Última compra", "Avaliação", "Situação"],
      rows: [
        ["Distribuidora Bom Preço", "Mercearia", "Carla Mendes", "28 dias", "R$ 12.480,60", "4,8 / 5", "<span class=\"badge badge--success\">Preferencial</span>"],
        ["Laticínios Vale Sul", "Laticínios", "Rogério Mota", "21 dias", "R$ 6.214,00", "4,6 / 5", "<span class=\"badge badge--success\">Ativo</span>"],
        ["Hortifruti Campo Verde", "Hortifruti", "Nádia Reis", "7 dias", "R$ 4.118,30", "4,9 / 5", "<span class=\"badge badge--success\">Preferencial</span>"],
        ["Higiene Total Ltda.", "Higiene", "Tiago Lopes", "30 dias", "R$ 8.420,00", "4,1 / 5", "<span class=\"badge badge--warning\">Revisão</span>"],
        ["Bebidas Nacional", "Bebidas", "Sérgio Araujo", "21 dias", "R$ 15.920,80", "4,5 / 5", "<span class=\"badge badge--success\">Ativo</span>"],
      ],
      sideTitle: "Pendências comerciais",
      sideItems: [
        ["Tabela de preços", "2 fornecedores sem atualização", "Hoje", "TP"],
        ["Documentação", "1 cadastro incompleto", "2 dias", "DC"],
        ["Renegociação", "4 contratos próximos do fim", "30 dias", "RN"],
      ],
      insight: ["Performance de entrega", "Campo Verde lidera a avaliação", "O fornecedor fictício apresenta 98% de pontualidade e baixo índice de divergência nos recebimentos."],
    },
    financeiro: {
      eyebrow: "Controle financeiro",
      title: "Financeiro",
      description: "Acompanhe contas, conciliação, fluxo de caixa e resultados gerenciais por unidade.",
      primary: "Novo lançamento",
      search: "Buscar lançamento ou documento…",
      filter: "Competência: outubro",
      summary: [
        ["Saldo projetado", "R$ 94.680", "+R$ 12.340 em 7 dias", "R$"],
        ["Contas a receber", "R$ 38.420", "18 lançamentos", "+"],
        ["Contas a pagar", "R$ 52.760", "26 lançamentos", "−"],
        ["Vencidas", "2 contas", "R$ 1.842,90", "!"],
      ],
      columns: ["Lançamento", "Descrição", "Categoria", "Vencimento", "Conta", "Valor", "Situação"],
      rows: [
        ["FIN-29418", "Distribuidora Bom Preço", "Fornecedores", "24/10/2026", "Banco Principal", "R$ 12.480,60", "<span class=\"badge badge--warning\">A vencer</span>"],
        ["FIN-29417", "Energia elétrica — Matriz", "Utilidades", "25/10/2026", "Banco Principal", "R$ 3.842,15", "<span class=\"badge badge--blue\">Agendada</span>"],
        ["FIN-29416", "Recebíveis de cartões", "Vendas", "23/10/2026", "Adquirente A", "R$ 8.718,40", "<span class=\"badge badge--success\">Recebida</span>"],
        ["FIN-29415", "Aluguel — Unidade Norte", "Ocupação", "20/10/2026", "Banco Principal", "R$ 6.200,00", "<span class=\"badge badge--danger\">Vencida</span>"],
        ["FIN-29414", "Laticínios Vale Sul", "Fornecedores", "28/10/2026", "Banco Principal", "R$ 6.214,00", "<span class=\"badge badge--warning\">A vencer</span>"],
      ],
      sideTitle: "Resumo de caixa",
      sideItems: [
        ["Banco Principal", "Saldo demonstrativo", "R$ 78.420", "BP"],
        ["Carteira digital", "Recebíveis a liquidar", "R$ 12.840", "CD"],
        ["Caixas das lojas", "Disponível em espécie", "R$ 3.420", "CX"],
      ],
      insight: ["Atenção financeira", "Duas contas aparecem vencidas", "Este demonstrativo destaca pendências para ilustrar um fluxo de cobrança e regularização."],
    },
    clientes: {
      eyebrow: "Relacionamento e fidelidade",
      title: "Clientes",
      description: "Conheça o perfil de compra, segmente públicos e acompanhe o programa de fidelidade.",
      primary: "Novo cliente",
      search: "Buscar cliente, CPF ou telefone…",
      filter: "Todos os segmentos",
      summary: [
        ["Clientes cadastrados", "3.284", "1.908 ativos em 90 dias", "CL"],
        ["Novos no mês", "146", "+18,7% sobre setembro", "+"],
        ["No clube fidelidade", "2.416", "73,6% da base", "♡"],
        ["Ticket de fidelizados", "R$ 72,80", "+26,6% sobre a média", "R$"],
      ],
      columns: ["Cliente", "Segmento", "Última compra", "Compras", "Total no mês", "Pontos", "Situação"],
      rows: [
        ["Marcos Oliveira", "Frequente", "Hoje, 13:48", "12", "R$ 684,90", "1.840", "<span class=\"badge badge--success\">Ativo</span>"],
        ["Juliana Barros", "Alto valor", "Ontem, 18:22", "8", "R$ 912,44", "2.615", "<span class=\"badge badge--violet\">VIP</span>"],
        ["Sandra Ribeiro", "Frequente", "21/10/2026", "9", "R$ 428,70", "980", "<span class=\"badge badge--success\">Ativo</span>"],
        ["Rafael Torres", "Novo", "20/10/2026", "2", "R$ 96,80", "124", "<span class=\"badge badge--blue\">Novo</span>"],
        ["Patrícia Almeida", "Em risco", "12/09/2026", "1", "R$ 74,20", "310", "<span class=\"badge badge--warning\">Reengajar</span>"],
      ],
      sideTitle: "Segmentos da base",
      sideItems: [
        ["Frequentes", "Compraram 4+ vezes em 60 dias", "824", "FR"],
        ["Alto valor", "Ticket acima de R$ 120", "318", "AV"],
        ["Novos", "Cadastro nos últimos 30 dias", "146", "NV"],
        ["Em risco", "Sem compra há mais de 45 dias", "227", "ER"],
      ],
      insight: ["Campanha sugerida", "227 clientes estão em risco", "Uma comunicação segmentada pode apresentar ofertas relevantes. O envio não é realizado neste protótipo."],
    },
    fiscal: {
      eyebrow: "Gestão fiscal demonstrativa",
      title: "Fiscal",
      description: "Visualize documentos, apurações e regras fiscais em uma interface de demonstração, sem emissão real.",
      primary: "Consultar documentos",
      search: "Buscar documento, chave ou cliente…",
      filter: "Outubro de 2026",
      summary: [
        ["Documentos listados", "324", "Exibição fictícia", "NF"],
        ["Valor demonstrado", "R$ 18.742", "Movimento ilustrativo de hoje", "R$"],
        ["Pendências simuladas", "2", "Aguardando conferência", "!"],
        ["Rejeições", "0", "No conjunto fictício", "✓"],
      ],
      columns: ["Documento", "Série", "Data / hora", "Destinatário", "Valor", "Ambiente", "Situação"],
      rows: [
        ["NFC-e 008741", "001", "23/10/2026 14:31", "Consumidor final", "R$ 84,70", "Demonstração", "<span class=\"badge badge--success\">Representada</span>"],
        ["NFC-e 008740", "001", "23/10/2026 14:27", "Consumidor final", "R$ 126,35", "Demonstração", "<span class=\"badge badge--success\">Representada</span>"],
        ["Entrada 003881", "003", "23/10/2026 10:42", "Laticínios Vale Sul", "R$ 6.214,00", "Demonstração", "<span class=\"badge badge--warning\">Conferência</span>"],
        ["NFC-e 008739", "001", "23/10/2026 14:22", "Consumidor final", "R$ 47,90", "Demonstração", "<span class=\"badge badge--success\">Representada</span>"],
        ["Entrada 003880", "003", "22/10/2026 16:12", "Campo Verde", "R$ 4.118,30", "Demonstração", "<span class=\"badge badge--success\">Conferida</span>"],
      ],
      sideTitle: "Conferências simuladas",
      sideItems: [
        ["Classificação fiscal", "Produtos a revisar", "12 itens", "CF"],
        ["Entradas", "Documentos sem vínculo", "2 docs", "EN"],
        ["Fechamento", "Competência outubro", "Em aberto", "FE"],
      ],
      insight: ["Importante", "Módulo apenas ilustrativo", "Nenhum documento fiscal é transmitido, autorizado ou cancelado por esta demonstração."],
    },
    equipe: {
      eyebrow: "Pessoas e acessos",
      title: "Equipe",
      description: "Organize escalas, funções, permissões e indicadores operacionais dos colaboradores.",
      primary: "Novo colaborador",
      search: "Buscar colaborador ou função…",
      filter: "Todas as unidades",
      summary: [
        ["Colaboradores", "26", "23 ativos na matriz", "EQ"],
        ["Presentes agora", "19", "3 em intervalo", "✓"],
        ["Folgas hoje", "3", "Escala planejada", "F"],
        ["Horas extras no mês", "42h", "−8h vs. setembro", "H"],
      ],
      columns: ["Colaborador", "Função", "Unidade", "Entrada", "Escala", "Acesso", "Situação"],
      rows: [
        ["Mariana Costa", "Administradora", "Matriz", "08:02", "08:00–17:00", "Gestão", "<span class=\"badge badge--success\">Presente</span>"],
        ["Ana Souza", "Operadora de caixa", "Matriz", "09:01", "09:00–18:00", "PDV", "<span class=\"badge badge--success\">Em operação</span>"],
        ["Paulo Lima", "Operador de caixa", "Matriz", "09:04", "09:00–18:00", "PDV", "<span class=\"badge badge--success\">Em operação</span>"],
        ["Luciana Alves", "Operadora de caixa", "Matriz", "11:02", "11:00–20:00", "PDV", "<span class=\"badge badge--success\">Em operação</span>"],
        ["Rafael Nunes", "Fiscal de caixa", "Matriz", "07:56", "08:00–17:00", "Fiscal", "<span class=\"badge badge--blue\">Intervalo</span>"],
      ],
      sideTitle: "Escala de hoje",
      sideItems: [
        ["Caixas", "4 escalados • 3 em operação", "75%", "CX"],
        ["Reposição", "5 escalados • 4 presentes", "80%", "RP"],
        ["Açougue e padaria", "6 escalados • 6 presentes", "100%", "AP"],
        ["Gestão", "3 escalados • 3 presentes", "100%", "GT"],
      ],
      insight: ["Cobertura da operação", "Reforço sugerido para 17h", "O movimento fictício aponta maior fluxo no fim da tarde. Este alerta é apenas demonstrativo."],
    },
    filiais: {
      eyebrow: "Gestão multiunidade",
      title: "Filiais",
      description: "Compare desempenho, operação e disponibilidade de estoque entre as unidades da rede.",
      primary: "Nova unidade",
      search: "Buscar unidade ou cidade…",
      filter: "Todas as regiões",
      summary: [
        ["Unidades da rede", "4", "3 abertas agora", "LJ"],
        ["Faturamento consolidado", "R$ 52.840", "+6,4% sobre ontem", "R$"],
        ["Vendas consolidadas", "892", "Ticket médio R$ 59,24", "#"],
        ["Transferências abertas", "6", "2 para receber hoje", "↔"],
      ],
      columns: ["Unidade", "Cidade", "Responsável", "Vendas hoje", "Faturamento", "Margem", "Operação"],
      rows: [
        ["Rede Central — Matriz", "São Paulo / SP", "Mariana Costa", "326", "R$ 18.742,60", "28,4%", "<span class=\"badge badge--success\">Aberta</span>"],
        ["Unidade Norte", "São Paulo / SP", "Eduardo Ramos", "248", "R$ 14.180,40", "27,9%", "<span class=\"badge badge--success\">Aberta</span>"],
        ["Unidade Leste", "São Paulo / SP", "Camila Ferreira", "221", "R$ 13.204,80", "29,1%", "<span class=\"badge badge--success\">Aberta</span>"],
        ["Unidade Bairro Novo", "Guarulhos / SP", "Renata Dias", "97", "R$ 6.712,20", "26,8%", "<span class=\"badge\">Fechada</span>"],
      ],
      sideTitle: "Comparativo da rede",
      sideItems: [
        ["Maior faturamento", "Matriz • R$ 18.742,60", "+8,7%", "01"],
        ["Maior margem", "Unidade Leste • 29,1%", "+0,7 p.p.", "02"],
        ["Melhor ticket", "Unidade Norte • R$ 61,84", "+4,2%", "03"],
      ],
      insight: ["Equilíbrio de estoque", "Seis transferências aparecem abertas", "A tela ilustra como saldos entre lojas poderiam gerar sugestões de transferência interna."],
    },
  };

  const saleProducts = [
    { id: "p1", name: "Arroz Boa Mesa 5kg", code: "7891035001284", price: 27.9, category: "Mercearia", icon: "AR" },
    { id: "p2", name: "Café Serra 500g", code: "7896654001892", price: 18.49, category: "Mercearia", icon: "CA" },
    { id: "p3", name: "Leite Vale 1L", code: "7891120000441", price: 5.79, category: "Mercearia", icon: "LE" },
    { id: "p4", name: "Banana Prata kg", code: "0000000000073", price: 7.99, category: "Hortifruti", icon: "BA" },
    { id: "p5", name: "Refrigerante Cola 2L", code: "7891000010185", price: 9.89, category: "Bebidas", icon: "RC" },
    { id: "p6", name: "Óleo Dourado 900ml", code: "7897712000418", price: 7.49, category: "Mercearia", icon: "OL" },
  ];

  const cart = new Map();
  let activePage = "dashboard";
  let returnFocus = null;
  let selectedProductIndex = 0;
  let selectedCartId = null;
  let discountCents = 0;
  let cashierAction = null;
  let actionReturnFocus = null;

  const primaryNav = document.querySelector("#primary-nav");
  const pageContent = document.querySelector("#page-content");
  const menuToggle = document.querySelector("#menu-toggle");
  const saleModal = document.querySelector("#sale-modal");
  const saleSearch = document.querySelector("#sale-search");
  const saleProductsEl = document.querySelector("#sale-products");
  const searchInput = document.querySelector("#global-search");
  const searchResults = document.querySelector("#search-results");
  const cashierOverlay = document.querySelector("#cashier-overlay");
  const cashierForm = document.querySelector("#cashier-form");
  const cashierFields = document.querySelector("#cashier-action-fields");
  const cashierError = document.querySelector("#cashier-action-error");

  function navIcon(id) {
    const paths = {
      dashboard: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
      vendas: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8m-4-4v4M7 8h10m-10 4h4"/>',
      produtos: '<path d="m12 3 9 5v9l-9 5-9-5V8l9-5Zm0 10 9-5M12 13 3 8m9 5v9M7 5l10 6"/>',
      estoque: '<path d="m3 9 9-6 9 6v12H3V9Zm4 4h10v8M7 17h10"/>',
      compras: '<path d="M3 3h2l3 12h10l3-9H6"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/>',
      fornecedores: '<path d="M3 4h12v13H3V4Zm12 5h4l3 4v4h-7"/><circle cx="7" cy="19" r="2"/><circle cx="18" cy="19" r="2"/>',
      financeiro: '<rect x="3" y="5" width="18" height="15" rx="2"/><path d="M3 9h18m-5 5h5M7 5V3h11"/>',
      clientes: '<circle cx="9" cy="8" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 5a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 6"/>',
      fiscal: '<path d="M5 3h10l4 4v14H5V3Zm10 0v5h4M8 12h8m-8 4h6"/>',
      equipe: '<circle cx="12" cy="7" r="3"/><path d="M6 21v-3a6 6 0 0 1 12 0v3M3 11v5m18-5v5"/>',
      relatorios: '<path d="M4 3v18h17M8 17v-5m5 5V7m5 10V4"/>',
      filiais: '<path d="M4 21V9h7v12M11 21V3h9v18M2 21h20M7 13v1m0 3v1m8-11h2m-2 4h2m-2 4h2"/>',
      configuracoes: '<path d="M4 6h16M4 12h16M4 18h16"/><rect x="7" y="4" width="3" height="4" rx="1"/><rect x="14" y="10" width="3" height="4" rx="1"/><rect x="8" y="16" width="3" height="4" rx="1"/>',
    };
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[id] || paths.dashboard}</svg>`;
  }

  function renderNavigation() {
    primaryNav.innerHTML = navGroups
      .map(
        (group) => `
          <span class="nav-section-label">${group.label}</span>
          ${group.items
            .map(
              (item) => `
                <button class="nav-item" type="button" data-page="${item.id}" ${item.id === activePage ? 'aria-current="page"' : ""}>
                  <span class="nav-item__icon" aria-hidden="true">${navIcon(item.id)}</span>
                  <span class="nav-item__label">${item.label}</span>
                  ${item.badge ? `<span class="nav-item__badge">${item.badge}</span>` : ""}
                </button>`,
            )
            .join("")}
        `,
      )
      .join("");
  }

  const prototypeFooter = () => `
    <footer class="prototype-footer">
      <span><strong>Mercado 360</strong> • Protótipo para apresentação. Nenhuma venda, pagamento ou emissão fiscal é realizada.</span>
      <span>Rede Central • Dados fictícios</span>
    </footer>
  `;

  function metricCard(label, value, footer, icon, primary = false) {
    return `
      <article class="metric-card${primary ? " metric-card--primary" : ""}">
        <div class="metric-card__top">
          <span class="metric-card__label">${label}</span>
          <span class="metric-card__icon" aria-hidden="true">${icon}</span>
        </div>
        <strong class="metric-card__value">${value}</strong>
        <div class="metric-card__footer">${footer}</div>
      </article>`;
  }

  const networkUnits = [
    { id: "matriz", code: "001", name: "Matriz", city: "São Paulo · Centro", manager: "Mariana Costa", revenue: 18742.60, sales: 326, margin: 28.4, goal: 23000, open: true, registers: 3 },
    { id: "norte", code: "002", name: "Unidade Norte", city: "São Paulo · Zona Norte", manager: "Eduardo Ramos", revenue: 14180.40, sales: 248, margin: 27.9, goal: 17500, open: true, registers: 3 },
    { id: "leste", code: "003", name: "Unidade Leste", city: "São Paulo · Zona Leste", manager: "Camila Ferreira", revenue: 13204.80, sales: 221, margin: 29.1, goal: 16000, open: true, registers: 3 },
    { id: "bairro", code: "004", name: "Bairro Novo", city: "Guarulhos · Bairro Novo", manager: "Renata Dias", revenue: 6712.20, sales: 97, margin: 26.8, goal: 8500, open: false, registers: 0 },
  ];
  let networkScope = "all";
  let networkView = "overview";

  function renderDashboard() {
    const units = networkScope === "all" ? networkUnits : networkUnits.filter((unit) => unit.id === networkScope);
    const revenue = units.reduce((sum, unit) => sum + unit.revenue, 0);
    const sales = units.reduce((sum, unit) => sum + unit.sales, 0);
    const goal = units.reduce((sum, unit) => sum + unit.goal, 0);
    const margin = units.reduce((sum, unit) => sum + unit.revenue * unit.margin, 0) / revenue;
    const attainment = revenue / goal * 100;
    const number = (value, digits = 1) => value.toLocaleString("pt-BR", {minimumFractionDigits: digits, maximumFractionDigits: digits});
    const kpi = (label, value, change, note) => `<article class="network-kpi"><span>${label}</span><strong>${value}</strong><small><b>${change}</b> ${note}</small></article>`;
    const unitRows = units.map((unit) => `<tr>
      <td><div class="network-unit"><b>${unit.code}</b><div><strong>${unit.name}</strong><small>${unit.city}</small></div></div></td>
      <td><span class="badge ${unit.open ? "badge--success" : ""}">${unit.open ? "Em operação" : "Encerrada"}</span></td>
      <td class="network-money">${formatMoney(unit.revenue)}</td><td>${unit.sales}</td>
      <td><div class="network-goal"><i><b style="width:${Math.min(100, unit.revenue / unit.goal * 100)}%"></b></i><span>${number(unit.revenue / unit.goal * 100)}%</span></div></td>
      <td>${number(unit.margin)}%</td><td>${unit.registers} / 4</td>
    </tr>`).join("");
    pageContent.innerHTML = `
      <section class="page-enter" aria-labelledby="dashboard-title">
        <header class="page-header">
          <div><span class="eyebrow">GESTÃO DA REDE / VISÃO CONSOLIDADA</span><h1 id="dashboard-title">Central de operações</h1><p>Resultado comercial, desempenho das lojas e prioridades da operação.</p></div>
          <div class="page-header__actions"><button class="secondary-button" type="button" data-go-page="relatorios">Relatórios gerenciais</button><button class="primary-button" type="button" data-open-sale>Abrir frente de caixa <kbd>F2</kbd></button></div>
        </header>
        <div class="network-filterbar">
          <div class="network-tabs" role="tablist" aria-label="Visões da central">
            <button type="button" role="tab" aria-selected="${networkView === "overview"}" class="${networkView === "overview" ? "is-active" : ""}" data-network-view="overview">Visão executiva</button>
            <button type="button" role="tab" aria-selected="${networkView === "operations"}" class="${networkView === "operations" ? "is-active" : ""}" data-network-view="operations">Operação de lojas</button>
          </div>
          <div class="network-filters"><select class="select-control" id="network-scope" aria-label="Unidade do painel"><option value="all"${networkScope === "all" ? " selected" : ""}>Todas as unidades</option>${networkUnits.map((unit) => `<option value="${unit.id}"${networkScope === unit.id ? " selected" : ""}>${unit.code} · ${unit.name}</option>`).join("")}</select><span class="date-filter">23 out. 2026 · 14:32</span></div>
        </div>
        <div class="network-kpis">
          ${kpi("Faturamento do dia", formatMoney(revenue), "↗ 6,4%", "vs. dia anterior")}
          ${kpi("Vendas realizadas", sales.toLocaleString("pt-BR"), "↗ 5,2%", "vs. dia anterior")}
          ${kpi("Ticket médio", formatMoney(revenue / sales), "↗ 1,1%", "vs. dia anterior")}
          ${kpi("Margem bruta", number(margin) + "%", "Meta: 28,0%", "sobre as vendas")}
        </div>
        ${networkView === "operations" ? `
          <div class="register-grid">${units.map((unit) => `<article class="register-tile"><header><h3>${unit.code} · ${unit.name}</h3><span class="badge ${unit.open ? "badge--success" : ""}">${unit.open ? "Aberta" : "Fechada"}</span></header><p>${unit.manager}</p><strong>${unit.registers} <small>caixas ativos</small></strong><footer><span>${unit.sales} vendas</span><span>${formatMoney(unit.revenue)}</span></footer></article>`).join("")}</div>` : `
          <div class="network-main">
            <article class="card"><header class="card__header"><div><h2>Evolução do faturamento</h2><p>Distribuição por hora · unidades selecionadas</p></div><span class="badge badge--blue">${number(attainment)}% da meta</span></header>
              <div class="network-chart"><div class="network-chart__summary"><div><strong>${formatMoney(revenue)}</strong><small>Meta diária: ${formatMoney(goal)}</small></div><div class="network-legend"><span>Dia selecionado</span><span>Dia anterior</span></div></div>
                <div class="retail-chart" role="img" aria-label="Faturamento por hora, de 08h a 14h. Maior movimento às 13h. Total de ${formatMoney(revenue)}."><div class="retail-chart__axis"><span>15 mil</span><span>10 mil</span><span>5 mil</span><span>0</span></div><div class="retail-chart__bars">${[2150,4800,6340,8120,10540,12050,8840].map((amount,index) => `<div class="retail-bar" title="${index+8}h: ${formatMoney(amount * revenue / 52840)}"><i style="height:${amount / 15000 * 87 * revenue / 52840}%"></i><i style="height:${amount / 15000 * 100 * revenue / 52840}%"></i><span>${String(index+8).padStart(2,"0")}h</span></div>`).join("")}</div></div>
              </div>
            </article>
            <article class="card"><header class="card__header"><div><h2>Prioridades da operação</h2><p>Pendências da rede · cenário demonstrativo</p></div><span class="badge badge--warning">23</span></header><div class="network-tasks">
              <button class="network-task" type="button" data-go-page="estoque"><i>14</i><span><strong>Risco de ruptura</strong><small>4 itens exigem reposição prioritária</small></span><span>›</span></button>
              <button class="network-task" type="button" data-go-page="compras"><i>7</i><span><strong>Pedidos de compra pendentes</strong><small>3 aprovações e 4 recebimentos</small></span><span>›</span></button>
              <button class="network-task" type="button" data-go-page="financeiro"><i>2</i><span><strong>Títulos financeiros vencidos</strong><small>Saldo pendente: R$ 1.842,90</small></span><span>›</span></button>
            </div></article>
          </div>`}
        <article class="card">
          <header class="card__header"><div><h2>Desempenho por unidade</h2><p>Faturamento, margem e capacidade de atendimento</p></div><button class="outline-button outline-button--compact" type="button" data-go-page="filiais">Gestão de filiais →</button></header>
          <div class="data-table-wrap"><table class="data-table"><thead><tr><th>UNIDADE</th><th>STATUS</th><th>FATURAMENTO</th><th>VENDAS</th><th>ATINGIMENTO</th><th>MARGEM</th><th>CAIXAS</th></tr></thead><tbody>${unitRows}</tbody></table></div>
          <footer class="network-foot"><span><b>${units.length}</b> unidades selecionadas</span><span><b>${units.filter((unit) => unit.open).length}</b> em operação</span><span><b>${units.reduce((sum,unit) => sum + unit.registers,0)}</b> caixas ativos</span><span>Última posição: 14:32 · Dados ilustrativos</span></footer>
        </article>
        ${prototypeFooter()}
      </section>`;
  }

  function summaryTiles(items) {
    return items
      .map(
        ([label, value, detail, icon]) => `
          <article class="summary-tile">
            <div class="summary-tile__head"><span>${label}</span><i aria-hidden="true">${icon}</i></div>
            <strong>${value}</strong>
            <small>${detail}</small>
          </article>`,
      )
      .join("");
  }

  function renderTable(config) {
    return `
      <div class="data-table-wrap">
        <table class="data-table module-table">
          <thead><tr>${config.columns.map((column) => `<th>${column}</th>`).join("")}</tr></thead>
          <tbody>
            ${config.rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}
          </tbody>
        </table>
      </div>`;
  }

  function renderModule(id) {
    const config = modules[id];
    pageContent.innerHTML = `
      <section class="page-enter" aria-labelledby="${id}-title">
        <header class="page-header">
          <div>
            <span class="eyebrow">${config.eyebrow}</span>
            <h1 id="${id}-title">${config.title}</h1>
            <p>${config.description}</p>
          </div>
          <div class="page-header__actions">
            <button class="secondary-button" type="button" data-demo-action="Exportar dados de ${config.title}">⇩ Exportar</button>
            <button class="primary-button" type="button" ${config.primarySale ? "data-open-sale" : `data-demo-action="${config.primary}"`}>＋ ${config.primary}</button>
          </div>
        </header>

        <div class="module-toolbar">
          <div class="module-toolbar__filters">
            <input class="search-control module-search" type="search" placeholder="${config.search}" aria-label="${config.search}" />
            <select class="select-control demo-filter" aria-label="Filtro principal">
              <option>${config.filter}</option>
              <option>Aguardando ação</option>
              <option>Concluídos</option>
            </select>
          </div>
          <div class="module-toolbar__actions">
            <button class="outline-button outline-button--compact" type="button" data-demo-action="Filtros avançados">☷ Filtros</button>
            <button class="outline-button outline-button--compact" type="button" data-demo-action="Personalizar colunas">☰ Colunas</button>
          </div>
        </div>

        <div class="module-summary">${summaryTiles(config.summary)}</div>

        <div class="module-layout">
          <article class="card">
            <header class="card__header">
              <div><h2>${config.title === "Vendas e frente de caixa" ? "Vendas recentes" : `Visão de ${config.title.toLowerCase()}`}</h2><p>Dados demonstrativos atualizados às 14:32</p></div>
              <span class="badge badge--blue">${config.rows.length} exibidos</span>
            </header>
            <div class="card__body card__body--flush">${renderTable(config)}</div>
          </article>
          <aside>
            <article class="card">
              <header class="card__header"><div><h2>${config.sideTitle}</h2><p>Resumo da operação</p></div></header>
              <div class="card__body module-side-list">
                ${config.sideItems
                  .map(
                    ([title, description, value, icon]) => `
                      <div class="module-side-item">
                        <span class="module-side-item__icon" aria-hidden="true">${icon}</span>
                        <div><strong>${title}</strong><small>${description}</small></div>
                        <span>${value}</span>
                      </div>`,
                  )
                  .join("")}
              </div>
            </article>
            <article class="insight-card">
              <span class="insight-card__label">${config.insight[0]}</span>
              <h3>${config.insight[1]}</h3>
              <p>${config.insight[2]}</p>
              <button type="button" data-demo-action="Abrir análise de ${config.title}">Explorar análise →</button>
            </article>
          </aside>
        </div>
        ${prototypeFooter()}
      </section>`;
  }

  function renderReports() {
    const reports = [
      ["VE", "Vendas e margem", "Faturamento, ticket médio, descontos e margem por período, loja ou operador."],
      ["ES", "Estoque e cobertura", "Saldos, giro, ruptura, curva ABC, perdas e necessidade de reposição."],
      ["CM", "Compras e fornecedores", "Pedidos, evolução de custos, prazo médio e desempenho de fornecedores."],
      ["FI", "Financeiro gerencial", "Fluxo de caixa, contas, categorias, centros de custo e resultado por unidade."],
      ["CL", "Clientes e fidelidade", "Recorrência, segmentação, ticket, retenção e participação no programa."],
      ["OP", "Operação de lojas", "Comparativo entre unidades, caixas, produtividade e ocorrências operacionais."],
    ];
    pageContent.innerHTML = `
      <section class="page-enter" aria-labelledby="reports-title">
        <header class="page-header">
          <div><span class="eyebrow">Inteligência do negócio</span><h1 id="reports-title">Relatórios</h1><p>Explore visões gerenciais e modelos de análise com dados inteiramente fictícios.</p></div>
          <div class="page-header__actions"><button class="secondary-button" type="button" data-demo-action="Histórico de exportações">Histórico</button><button class="primary-button" type="button" data-demo-action="Criar relatório personalizado">＋ Novo relatório</button></div>
        </header>
        <div class="module-toolbar">
          <div class="module-toolbar__filters"><input class="search-control" type="search" placeholder="Buscar relatório…" aria-label="Buscar relatório" /><select class="select-control demo-filter"><option>Todas as áreas</option><option>Comercial</option><option>Operacional</option><option>Financeira</option></select></div>
          <span class="badge badge--success">6 modelos disponíveis</span>
        </div>
        <div class="reports-grid">
          ${reports.map(([icon, title, description]) => `<article class="report-card" tabindex="0" data-demo-action="Abrir relatório ${title}"><span class="report-card__icon">${icon}</span><div><h3>${title}</h3><p>${description}</p></div><small>Abrir modelo →</small></article>`).join("")}
        </div>
        <div class="dashboard-grid" style="margin-top:15px">
          <article class="card card--span-7"><header class="card__header"><div><h2>Relatórios recentes</h2><p>Histórico fictício de consultas</p></div></header><div class="card__body card__body--flush"><div class="data-table-wrap"><table class="data-table"><thead><tr><th>Relatório</th><th>Período</th><th>Criado por</th><th>Atualização</th><th>Situação</th></tr></thead><tbody><tr><td><strong>Resultado gerencial — Matriz</strong></td><td>Outubro / 2026</td><td>Mariana Costa</td><td>Hoje, 13:40</td><td><span class="badge badge--success">Disponível</span></td></tr><tr><td><strong>Curva ABC de produtos</strong></td><td>Últimos 90 dias</td><td>Eduardo Ramos</td><td>Ontem, 17:12</td><td><span class="badge badge--success">Disponível</span></td></tr><tr><td><strong>Comparativo entre filiais</strong></td><td>3º trimestre</td><td>Mariana Costa</td><td>20/10, 10:18</td><td><span class="badge badge--success">Disponível</span></td></tr></tbody></table></div></div></article>
          <article class="card card--span-5"><header class="card__header"><div><h2>Agendamentos ilustrativos</h2><p>Nenhum envio automático está ativo</p></div></header><div class="card__body module-side-list"><div class="module-side-item"><span class="module-side-item__icon">SE</span><div><strong>Resumo executivo</strong><small>Segundas • 08:00</small></div><span class="badge">Inativo</span></div><div class="module-side-item"><span class="module-side-item__icon">EP</span><div><strong>Estoque e perdas</strong><small>Todo dia 1 • 09:00</small></div><span class="badge">Inativo</span></div><div class="module-side-item"><span class="module-side-item__icon">FC</span><div><strong>Fluxo de caixa</strong><small>Sextas • 17:00</small></div><span class="badge">Inativo</span></div></div></article>
        </div>
        ${prototypeFooter()}
      </section>`;
  }

  function renderSettings() {
    const settings = [
      ["EM", "Empresa e lojas", "Dados cadastrais, unidades, horários e parâmetros gerais da operação."],
      ["US", "Usuários e permissões", "Perfis de acesso, funções e níveis de autorização por módulo."],
      ["PV", "Vendas e PDV", "Regras comerciais, formas de pagamento e preferências do caixa."],
      ["ES", "Estoque", "Depósitos, estoque mínimo, inventários, perdas e transferências."],
      ["FI", "Financeiro", "Categorias, contas, centros de custo e regras de conciliação."],
      ["FX", "Fiscal", "Parâmetros e cadastros fiscais exibidos somente para demonstração."],
      ["FD", "Fidelidade", "Pontos, benefícios, segmentos e regras ilustrativas do clube."],
      ["NT", "Notificações", "Preferências de alertas internos e avisos da operação."],
      ["LG", "Auditoria", "Histórico demonstrativo de acessos e alterações sensíveis."],
    ];
    pageContent.innerHTML = `
      <section class="page-enter" aria-labelledby="settings-title">
        <header class="page-header"><div><span class="eyebrow">Administração</span><h1 id="settings-title">Configurações</h1><p>Visão ilustrativa dos parâmetros que organizam a operação e os acessos do sistema.</p></div><div class="page-header__actions"><button class="secondary-button" type="button" data-demo-action="Consultar auditoria">Ver auditoria</button></div></header>
        <div class="module-toolbar"><div class="module-toolbar__filters"><input class="search-control" type="search" placeholder="Buscar configuração…" aria-label="Buscar configuração" /></div><span class="badge badge--warning">Modo demonstração</span></div>
        <div class="settings-grid">
          ${settings.map(([icon, title, description]) => `<article class="setting-card"><span class="setting-card__icon">${icon}</span><h3>${title}</h3><p>${description}</p><button type="button" data-demo-action="Configurar ${title}">Configurar →</button></article>`).join("")}
        </div>
        ${prototypeFooter()}
      </section>`;
  }

  function navigate(page, options = {}) {
    const valid = page === "dashboard" || page === "relatorios" || page === "configuracoes" || Object.hasOwn(modules, page);
    activePage = valid ? page : "dashboard";
    renderNavigation();
    document.querySelector(".enterprise-breadcrumb span").textContent = navGroups
      .flatMap((group) => group.items).find((item) => item.id === activePage).label;

    if (activePage === "dashboard") renderDashboard();
    else if (activePage === "relatorios") renderReports();
    else if (activePage === "configuracoes") renderSettings();
    else renderModule(activePage);

    if (!options.preserveScroll) window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    closeGlobalSearch();
    if (!options.skipHistory) history.replaceState(null, "", `#${activePage}`);
  }

  function showToast(title, detail = "Interação ilustrativa: nenhum dado foi alterado.") {
    const toastRegion = document.querySelector("#toast-region");
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span class="toast__icon" aria-hidden="true">✓</span><div><strong>${title}</strong><small>${detail}</small></div><button type="button" aria-label="Fechar aviso">×</button>`;
    toastRegion.append(toast);
    const remove = () => {
      if (!toast.isConnected) return;
      toast.classList.add("is-leaving");
      window.setTimeout(() => toast.remove(), 190);
    };
    toast.querySelector("button").addEventListener("click", remove);
    window.setTimeout(remove, 4200);
  }

  function renderSaleProducts(query = "", category = "Todos") {
    const normalized = normalizeSearch(query);
    const filtered = saleProducts.filter((product) => {
      const matchesQuery = !normalized || normalizeSearch(`${product.name} ${product.code}`).includes(normalized);
      const matchesCategory = category === "Todos" || product.category === category || product.code === normalized;
      return matchesQuery && matchesCategory;
    });
    selectedProductIndex = 0;
    saleProductsEl.innerHTML = filtered.length
      ? filtered
          .map(
            (product) => `
              <button class="sale-product" type="button" id="sale-option-${product.id}" data-add-product="${product.id}" role="option" aria-selected="false" tabindex="-1">
                <span class="sale-product__icon" aria-hidden="true">${product.icon}</span>
                <strong>${product.name}</strong>
                <small>${product.code}</small>
                <b>${formatMoney(product.price)}</b>
              </button>`,
          )
          .join("")
      : '<div class="search-empty">Nenhum produto fictício encontrado.</div>';
    selectProduct(0);
    saleProductsEl.hidden = !query.trim();
    saleSearch.setAttribute("aria-expanded", String(!saleProductsEl.hidden));
  }

  function selectProduct(index, moveFocus = false) {
    const buttons = [...saleProductsEl.querySelectorAll("[data-add-product]")];
    selectedProductIndex = Math.max(0, Math.min(index, buttons.length - 1));
    buttons.forEach((button, position) => {
      const selected = position === selectedProductIndex;
      button.classList.toggle("is-selected", selected);
      button.setAttribute("aria-selected", String(selected));
      button.tabIndex = selected ? 0 : -1;
    });
    const selected = buttons[selectedProductIndex];
    if (selected) {
      saleSearch.setAttribute("aria-activedescendant", selected.id);
      if (moveFocus) selected.focus();
    } else {
      saleSearch.removeAttribute("aria-activedescendant");
    }
  }

  function announceSale(message) {
    document.querySelector("#sale-status").textContent = message;
  }

  function focusSaleSearch() {
    saleSearch.focus();
    saleSearch.select();
  }

  function resetProductSearch() {
    saleSearch.value = "";
    document.querySelectorAll(".sale-categories .chip").forEach((chip, index) => chip.classList.toggle("is-active", index === 0));
    renderSaleProducts();
    focusSaleSearch();
  }

  function totals() {
    const subtotal = [...cart.entries()].reduce((sum, [id, quantity]) => {
      const product = saleProducts.find((item) => item.id === id);
      return sum + Math.round(Math.round(product.price * 100) * quantity);
    }, 0);
    return { subtotal, discount: Math.min(discountCents, subtotal), total: subtotal - Math.min(discountCents, subtotal) };
  }

  function selectCart(id, moveFocus = false) {
    selectedCartId = cart.has(id) ? id : [...cart.keys()].at(-1) || null;
    document.querySelectorAll("[data-cart-id]").forEach((row) => {
      const selected = row.dataset.cartId === selectedCartId;
      row.classList.toggle("is-selected", selected);
      const button = row.querySelector("[data-select-cart]");
      button.setAttribute("aria-pressed", String(selected));
      button.tabIndex = selected ? 0 : -1;
      if (selected && moveFocus) button.focus();
    });
    const currentProduct = saleProducts.find((product) => product.id === selectedCartId);
    document.querySelector("#pos-product-name").textContent = currentProduct?.name || "Caixa disponível";
    document.querySelector("#pos-product-code").textContent = currentProduct ? `EAN ${currentProduct.code} · ${currentProduct.category}` : "Aguardando leitura de produto";
    document.querySelector("#pos-product-quantity").textContent = currentProduct ? `${cart.get(selectedCartId).toLocaleString("pt-BR", {maximumFractionDigits: 3})} ${selectedCartId === "p4" ? "kg" : "UN"}` : "—";
    document.querySelector("#pos-product-unit").textContent = formatMoney(currentProduct?.price || 0);
  }

  function addSaleProduct(id) {
    const product = saleProducts.find((item) => item.id === id);
    if (!product) return;
    const next = Math.round(((cart.get(id) || 0) + 1) * 1000) / 1000;
    if (next > 9999) {
      announceSale("Quantidade máxima por item: 9.999. Use F3 para ajustar.");
      return;
    }
    cart.set(id, next);
    selectedCartId = id;
    renderCart();
    resetProductSearch();
    announceSale(`${product.name} adicionado. Total do cupom: ${formatMoney(totals().total / 100)}.`);
  }

  function renderCart() {
    const itemsEl = document.querySelector("#cart-items");
    const emptyEl = document.querySelector("#cart-empty");
    const countEl = document.querySelector("#cart-count");
    const subtotalEl = document.querySelector("#cart-subtotal");
    const totalEl = document.querySelector("#cart-total");
    const finishButton = document.querySelector("#finish-sale");
    const entries = [...cart.entries()];
    const itemCount = entries.reduce((sum, [, quantity]) => sum + quantity, 0);
    const amounts = totals();
    discountCents = amounts.discount;

    itemsEl.innerHTML = entries
      .map(([id, quantity], index) => {
        const product = saleProducts.find((item) => item.id === id);
        return `
          <div class="cart-item" data-cart-id="${id}" role="listitem">
            <span class="pos-item-number">${String(index + 1).padStart(3, "0")}</span>
              <button type="button" class="cart-item__select" data-select-cart="${id}" aria-pressed="false">
                <strong>${product.name}</strong>
                <small>${product.code} · ${id === "p4" ? "KG" : "UN"}</small>
              </button>
              <div class="quantity-control" aria-label="Quantidade de ${product.name}">
                <button type="button" data-cart-change="-1" data-product-id="${id}" aria-label="Diminuir quantidade de ${product.name}">−</button>
                <span>${quantity.toLocaleString("pt-BR", { maximumFractionDigits: 3 })}</span>
                <button type="button" data-cart-change="1" data-product-id="${id}" aria-label="Aumentar quantidade de ${product.name}">＋</button>
              </div>
            <span class="pos-item-unit">${formatMoney(product.price)}</span>
            <span class="cart-item__price">${formatMoney(product.price * quantity)}</span>
          </div>`;
      })
      .join("");
    emptyEl.style.display = entries.length ? "none" : "grid";
    itemsEl.style.display = entries.length ? "block" : "none";
    countEl.textContent = `${entries.length} ${entries.length === 1 ? "produto" : "produtos"}`;
    document.querySelector("#pos-line-count").textContent = entries.length;
    document.querySelector("#pos-sale-stage").textContent = entries.length ? "VENDA EM ANDAMENTO" : "CAIXA LIVRE";
    subtotalEl.textContent = formatMoney(amounts.subtotal / 100);
    document.querySelector("#cart-discount").textContent = formatMoney(amounts.discount / 100);
    totalEl.textContent = formatMoney(amounts.total / 100);
    finishButton.disabled = itemCount === 0;
    selectCart(selectedCartId);
  }

  function openSale(trigger) {
    if (!saleModal.hidden) {
      focusSaleSearch();
      return;
    }
    returnFocus = trigger || document.activeElement;
    closeGlobalSearch();
    saleModal.hidden = false;
    document.body.classList.add("modal-open");
    document.querySelector(".app-shell").inert = true;
    resetProductSearch();
    renderCart();
  }

  function closeSale() {
    closeCashierAction(false);
    saleModal.hidden = true;
    document.body.classList.remove("modal-open");
    document.querySelector(".app-shell").inert = false;
    saleSearch.value = "";
    if (returnFocus && typeof returnFocus.focus === "function") returnFocus.focus();
  }

  function closeCashierAction(restoreFocus = true) {
    cashierOverlay.hidden = true;
    document.querySelector(".sale-panel").inert = false;
    cashierAction = null;
    if (restoreFocus) {
      if (actionReturnFocus?.isConnected && actionReturnFocus.offsetParent !== null) actionReturnFocus.focus();
      else focusSaleSearch();
    }
  }

  function requireCart() {
    if (cart.size) return true;
    announceSale("Adicione um produto antes de continuar. F2 busca; Enter adiciona.");
    focusSaleSearch();
    return false;
  }

  function openCashierAction(kind) {
    if (cashierAction) return;
    if (kind !== "help" && !requireCart()) return;
    selectCart(selectedCartId);
    const product = saleProducts.find((item) => item.id === selectedCartId);
    const amounts = totals();
    const definitions = {
      quantity: {
        title: "Alterar quantidade",
        description: product ? `${product.name} · ${product.id === "p4" ? "Peso em kg, com até 3 casas decimais." : "Informe a quantidade de unidades."}` : "",
        fields: `<label for="cashier-value">Quantidade</label><input id="cashier-value" inputmode="decimal" autocomplete="off" value="${String(cart.get(selectedCartId) || 1).replace(".", ",")}" />`,
      },
      discount: {
        title: "Desconto no cupom",
        description: `Informe o valor em reais. Subtotal: ${formatMoney(amounts.subtotal / 100)}.`,
        fields: `<label for="cashier-value">Desconto (R$)</label><input id="cashier-value" inputmode="decimal" autocomplete="off" value="${(discountCents / 100).toFixed(2).replace(".", ",")}" />`,
      },
      remove: { title: "Remover item?", description: product ? `${product.name} será retirado deste cupom. Enter confirma; Esc mantém o item.` : "", fields: "" },
      cancel: { title: "Cancelar esta venda?", description: "Todos os itens e o desconto deste cupom serão removidos. Enter confirma; Esc mantém a venda.", fields: "" },
      payment: {
        title: "Pagamento",
        description: "Escolha a forma com ↑ ↓. Tab avança; Enter ou F9 conclui a simulação.",
        fields: `<div class="cashier-payment-total"><span>Total a pagar</span><strong>${formatMoney(amounts.total / 100)}</strong></div>
          <label for="payment-method">Forma de pagamento</label>
          <select id="payment-method"><option value="cash">Dinheiro</option><option value="pix">Pix</option><option value="debit">Cartão de débito</option><option value="credit">Cartão de crédito</option></select>
          <div id="payment-cash-fields"><label for="payment-received">Valor recebido (R$)</label><input id="payment-received" inputmode="decimal" autocomplete="off" placeholder="0,00" /><output class="cashier-change" id="payment-change" aria-live="polite">Informe o valor recebido.</output></div>`,
      },
      help: {
        title: "Caixa pelo teclado",
        description: "Os atalhos abaixo funcionam com o caixa aberto. F2 também abre o caixa em qualquer tela.",
        fields: `<ul class="cashier-help">${[
          ["F2", "Buscar produto / ler código"], ["↑ ↓ / Enter", "Escolher / adicionar produto"],
          ["F3", "Quantidade do item selecionado"], ["F4", "Desconto em reais"],
          ["F6 e ↑ ↓", "Selecionar item do cupom"], ["F7", "Cancelar venda, com confirmação"],
          ["F8", "Remover item, com confirmação"], ["F9", "Pagamento / concluir simulação"],
          ["Tab / Shift + Tab", "Próximo / campo anterior"], ["Esc", "Voltar; ao sair, mantém o cupom"],
        ].map(([key, text]) => `<li><kbd>${key}</kbd><span>${text}</span></li>`).join("")}</ul><p>Em alguns notebooks, use Fn junto das teclas F.</p>`,
      },
    };
    const definition = definitions[kind];
    if (!definition) return;
    actionReturnFocus = document.activeElement;
    cashierAction = kind;
    document.querySelector("#cashier-action-title").textContent = definition.title;
    document.querySelector("#cashier-action-description").textContent = definition.description;
    cashierFields.innerHTML = definition.fields;
    cashierError.hidden = true;
    const confirmButton = document.querySelector("#cashier-confirm");
    confirmButton.innerHTML = kind === "payment" ? "Concluir simulação <kbd>F9</kbd>" : kind === "help" ? "Entendi <kbd>Enter</kbd>" : "Confirmar <kbd>Enter</kbd>";
    document.querySelector(".sale-panel").inert = true;
    cashierOverlay.hidden = false;
    const field = cashierFields.querySelector("input, select") || confirmButton;
    field.focus();
    if (field.tagName === "INPUT") field.select();
  }

  function parseDecimal(value, decimals = 2) {
    const normalized = value.trim().replace(",", ".");
    const pattern = decimals === 0 ? /^\d+$/ : new RegExp("^\\d+(?:\\.\\d{1," + decimals + "})?$");
    return pattern.test(normalized) ? Number(normalized) : NaN;
  }

  function actionError(message, fieldId) {
    cashierError.textContent = message;
    cashierError.hidden = false;
    const field = document.getElementById(fieldId);
    if (field) { field.focus(); field.select?.(); }
  }

  function updatePayment() {
    if (cashierAction !== "payment") return;
    const cash = document.querySelector("#payment-method").value === "cash";
    document.querySelector("#payment-cash-fields").hidden = !cash;
    const received = Math.round(parseDecimal(document.querySelector("#payment-received").value) * 100);
    const change = received - totals().total;
    document.querySelector("#payment-change").textContent = !Number.isFinite(received) ? "Informe o valor recebido." : change < 0 ? `Faltam ${formatMoney(-change / 100)}` : `Troco: ${formatMoney(change / 100)}`;
  }

  function submitCashierAction(event) {
    event.preventDefault();
    if (!cashierAction) return;
    const kind = cashierAction;
    if (kind === "help") { closeCashierAction(); return; }
    const value = document.querySelector("#cashier-value")?.value || "";
    if (kind === "quantity") {
      const quantity = parseDecimal(value, selectedCartId === "p4" ? 3 : 0);
      if (!Number.isFinite(quantity) || quantity <= 0 || quantity > 9999) {
        actionError(selectedCartId === "p4" ? "Informe um peso de 0,001 a 9.999 kg, com até 3 casas decimais." : "Informe uma quantidade inteira de 1 a 9.999.", "cashier-value");
        return;
      }
      cart.set(selectedCartId, quantity);
    } else if (kind === "discount") {
      const amount = parseDecimal(value);
      if (!Number.isFinite(amount) || Math.round(amount * 100) > totals().subtotal) {
        actionError("Informe um desconto de zero até o subtotal, com no máximo 2 casas decimais.", "cashier-value");
        return;
      }
      discountCents = Math.round(amount * 100);
    } else if (kind === "remove") {
      cart.delete(selectedCartId);
    } else if (kind === "cancel") {
      cart.clear();
      discountCents = 0;
    } else if (kind === "payment") {
      const paymentMethod = document.querySelector("#payment-method");
      const received = Math.round(parseDecimal(document.querySelector("#payment-received").value) * 100);
      const total = totals().total;
      if (paymentMethod.value === "cash" && (!Number.isSafeInteger(received) || received < total || received > 100000000)) {
        actionError("Informe um valor recebido suficiente para pagar o total, até R$ 1.000.000,00.", "payment-received");
        return;
      }
      const change = paymentMethod.value === "cash" ? ` · Troco ${formatMoney((received - total) / 100)}` : "";
      const message = `Venda simulada: ${formatMoney(total / 100)} · ${paymentMethod.selectedOptions[0].text}${change}. Caixa pronto para a próxima venda.`;
      cart.clear();
      discountCents = 0;
      closeCashierAction(false);
      renderCart();
      resetProductSearch();
      announceSale(message);
      showToast("Venda simulada concluída", message);
      return;
    }
    closeCashierAction(false);
    renderCart();
    resetProductSearch();
    announceSale(kind === "cancel" ? "Venda cancelada. Caixa pronto para um novo atendimento." : `Cupom atualizado. Total: ${formatMoney(totals().total / 100)}.`);
  }

  function cashierShortcut(key) {
    if (key === "F2") { focusSaleSearch(); return; }
    saleProductsEl.hidden = true;
    saleSearch.setAttribute("aria-expanded", "false");
    if (key === "F6") {
      if (requireCart()) selectCart(selectedCartId, true);
      return;
    }
    const actions = { F3: "quantity", F4: "discount", F7: "cancel", F8: "remove", F9: "payment", F10: "help" };
    if (actions[key]) openCashierAction(actions[key]);
  }

  function loadSampleSale() {
    if (cart.size) {
      announceSale("Conclua a venda atual ou use F7 para cancelar antes de carregar o exemplo.");
      return;
    }
    [["p1", 2], ["p2", 1], ["p3", 6], ["p4", 1.25], ["p5", 2]].forEach(([id, quantity]) => cart.set(id, quantity));
    discountCents = 380;
    selectedCartId = "p5";
    renderCart();
    resetProductSearch();
    announceSale("Venda de exemplo carregada. Use F6 para selecionar um item ou F9 para finalizar.");
  }

  function renderGlobalSearch(query) {
    const normalized = normalizeSearch(query);
    if (!normalized) {
      closeGlobalSearch();
      return;
    }
    const navItems = navGroups.flatMap((group) => group.items.map((item) => ({ ...item, group: group.label })));
    const moduleMatches = navItems
      .filter((item) => normalizeSearch(`${item.label} ${item.group}`).includes(normalized))
      .map((item) => ({ type: "module", id: item.id, title: item.label, detail: `Módulo • ${item.group}`, icon: item.icon }));
    const productMatches = saleProducts
      .filter((product) => normalizeSearch(`${product.name} ${product.code}`).includes(normalized))
      .map((product) => ({ type: "product", id: product.id, title: product.name, detail: `Produto fictício • ${product.code}`, icon: product.icon }));
    const matches = [...moduleMatches, ...productMatches].slice(0, 7);
    searchResults.innerHTML = matches.length
      ? matches
          .map(
            (item) => `
              <button class="search-result" type="button" role="option" data-search-type="${item.type}" data-search-id="${item.id}">
                <span class="search-result__icon" aria-hidden="true">${item.icon}</span>
                <span><strong>${item.title}</strong><small>${item.detail}</small></span>
                <span aria-hidden="true">→</span>
              </button>`,
          )
          .join("")
      : '<div class="search-empty">Nenhum resultado encontrado neste demonstrativo.</div>';
    searchResults.classList.add("is-open");
    searchInput.setAttribute("aria-expanded", "true");
  }

  function closeGlobalSearch() {
    searchResults.classList.remove("is-open");
    searchInput.setAttribute("aria-expanded", "false");
  }

  document.addEventListener("click", (event) => {
    const networkTab = event.target.closest("[data-network-view]");
    if (networkTab) {
      networkView = networkTab.dataset.networkView;
      renderDashboard();
      document.querySelector(`[data-network-view="${networkView}"]`).focus();
      return;
    }
    const pageButton = event.target.closest("[data-page], [data-go-page]");
    if (pageButton) {
      navigate(pageButton.dataset.page || pageButton.dataset.goPage);
      return;
    }

    const openSaleButton = event.target.closest("[data-open-sale]");
    if (openSaleButton) {
      openSale(openSaleButton);
      return;
    }

    if (event.target.closest("[data-close-sale]")) {
      closeSale();
      return;
    }

    if (event.target.closest("[data-close-menu]")) {
      document.body.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
      return;
    }

    const demoAction = event.target.closest("[data-demo-action]");
    if (demoAction) {
      showToast(demoAction.dataset.demoAction, "Esta ação faz parte da apresentação e não altera dados reais.");
      return;
    }

    const segment = event.target.closest(".segmented-control button");
    if (segment) {
      segment.parentElement.querySelectorAll("button").forEach((button) => button.classList.toggle("is-active", button === segment));
      showToast(`Período alterado para ${segment.textContent}`, "O gráfico permanece com os dados fictícios da apresentação.");
      return;
    }

    const addProduct = event.target.closest("[data-add-product]");
    if (addProduct) {
      addSaleProduct(addProduct.dataset.addProduct);
      return;
    }

    const shortcut = event.target.closest("[data-cashier-shortcut]");
    if (shortcut) {
      cashierShortcut(shortcut.dataset.cashierShortcut);
      return;
    }

    const selectItem = event.target.closest("[data-select-cart]");
    if (selectItem) {
      selectCart(selectItem.dataset.selectCart);
      return;
    }

    const cartChange = event.target.closest("[data-cart-change]");
    if (cartChange) {
      const id = cartChange.dataset.productId;
      const change = Number(cartChange.dataset.cartChange);
      const next = Math.round(((cart.get(id) || 0) + change) * 1000) / 1000;
      selectCart(id);
      if (next <= 0) { openCashierAction("remove"); return; }
      if (next > 9999) { announceSale("Quantidade máxima por item: 9.999."); return; }
      cart.set(id, next);
      renderCart();
      document.querySelector(`[data-product-id="${id}"][data-cart-change="${change}"]`)?.focus();
      return;
    }

    const categoryButton = event.target.closest(".sale-categories .chip");
    if (categoryButton) {
      categoryButton.parentElement.querySelectorAll(".chip").forEach((chip) => chip.classList.toggle("is-active", chip === categoryButton));
      renderSaleProducts(saleSearch.value, categoryButton.textContent.trim());
      return;
    }

    const searchResult = event.target.closest("[data-search-type]");
    if (searchResult) {
      if (searchResult.dataset.searchType === "module") {
        navigate(searchResult.dataset.searchId);
      } else {
        navigate("produtos");
        showToast("Produto localizado", "O item foi aberto na listagem fictícia de produtos.");
      }
      searchInput.value = "";
      closeGlobalSearch();
      return;
    }

    if (!event.target.closest("#global-search-wrap")) closeGlobalSearch();
  });

  document.addEventListener("input", (event) => {
    if (event.target === searchInput) renderGlobalSearch(searchInput.value);
    if (event.target === saleSearch) {
      const category = document.querySelector(".sale-categories .chip.is-active")?.textContent.trim() || "Todos";
      renderSaleProducts(saleSearch.value, category);
    }
    if (event.target.id === "payment-received") updatePayment();
    if (cashierOverlay.contains(event.target)) cashierError.hidden = true;
    if (event.target.matches(".module-search")) {
      const query = normalizeSearch(event.target.value);
      document.querySelectorAll(".module-table tbody tr").forEach((row) => {
        row.hidden = Boolean(query) && !normalizeSearch(row.textContent).includes(query);
      });
    }
  });

  document.addEventListener("change", (event) => {
    if (event.target.id === "network-scope") {
      networkScope = event.target.value;
      renderDashboard();
      document.querySelector("#network-scope").focus();
    }
    if (event.target.id === "payment-method") {
      cashierError.hidden = true;
      updatePayment();
    }
    if (event.target.matches(".demo-filter")) {
      showToast(`Filtro: ${event.target.value}`, "A seleção foi aplicada somente à visualização demonstrativa.");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.isComposing) return;
    const plainFunctionKey = !event.ctrlKey && !event.metaKey && !event.altKey && !event.shiftKey;
    if (saleModal.hidden && event.key === "F2" && plainFunctionKey) {
      event.preventDefault();
      if (!event.repeat) openSale(document.activeElement);
      return;
    }
    if ((event.metaKey || event.ctrlKey) && event.key.toLocaleLowerCase() === "k") {
      event.preventDefault();
      if (saleModal.hidden) searchInput.focus();
      else if (!cashierAction) focusSaleSearch();
      return;
    }
    if (!saleModal.hidden) {
      if (event.key === "Escape") {
        event.preventDefault();
        if (cashierAction) closeCashierAction();
        else if (!saleProductsEl.hidden) {
          saleProductsEl.hidden = true;
          saleSearch.setAttribute("aria-expanded", "false");
          focusSaleSearch();
        }
        else closeSale();
        return;
      }
      const functionKeys = ["F2", "F3", "F4", "F6", "F7", "F8", "F9", "F10"];
      if (plainFunctionKey && functionKeys.includes(event.key)) {
        event.preventDefault();
        if (event.repeat) return;
        if (cashierAction) {
          if (event.key === "F9" && cashierAction === "payment") cashierForm.requestSubmit();
        } else cashierShortcut(event.key);
        return;
      }
      if (event.key === "Enter" && event.repeat) {
        event.preventDefault();
        return;
      }
      if (!cashierAction) {
        const fromProduct = event.target.closest("[data-add-product]");
        const fromCart = event.target.closest("[data-select-cart]");
        if ((event.target === saleSearch || fromProduct) && ["ArrowDown", "ArrowUp"].includes(event.key)) {
          event.preventDefault();
          const wasHidden = saleProductsEl.hidden;
          saleProductsEl.hidden = false;
          saleSearch.setAttribute("aria-expanded", "true");
          if (fromProduct) selectedProductIndex = [...saleProductsEl.querySelectorAll("[data-add-product]")].indexOf(fromProduct);
          selectProduct(wasHidden ? 0 : selectedProductIndex + (event.key === "ArrowDown" ? 1 : -1), Boolean(fromProduct));
          return;
        }
        if (event.target === saleSearch && event.key === "Enter") {
          event.preventDefault();
          const product = saleProductsEl.querySelectorAll("[data-add-product]")[selectedProductIndex];
          if (product && (!saleProductsEl.hidden || saleSearch.value.trim())) addSaleProduct(product.dataset.addProduct);
          else if (!saleSearch.value.trim()) announceSale("Digite uma descrição ou um código de barras. Use ↓ para consultar os produtos.");
          else announceSale("Produto não encontrado. Confira o código ou digite outra descrição.");
          return;
        }
        if (fromCart && ["ArrowDown", "ArrowUp"].includes(event.key)) {
          event.preventDefault();
          const ids = [...cart.keys()];
          const next = Math.max(0, Math.min(ids.length - 1, ids.indexOf(fromCart.dataset.selectCart) + (event.key === "ArrowDown" ? 1 : -1)));
          selectCart(ids[next], true);
          return;
        }
      }
      if (event.key === "Tab") {
        const scope = cashierAction ? cashierOverlay : saleModal;
        const focusable = [...scope.querySelectorAll('button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex="0"]')].filter(
          (element) => element.tabIndex >= 0 && element.offsetParent !== null && !element.closest("[inert]"),
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && (document.activeElement === first || !scope.contains(document.activeElement))) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && (document.activeElement === last || !scope.contains(document.activeElement))) {
          event.preventDefault();
          first?.focus();
        }
      }
      return;
    }
    if (event.key === "Escape") {
      closeGlobalSearch();
    }
    if (event.key === "Enter" && event.target.matches(".report-card")) event.target.click();
  });

  menuToggle.addEventListener("click", () => {
    const next = !document.body.classList.contains("menu-open");
    document.body.classList.toggle("menu-open", next);
    menuToggle.setAttribute("aria-expanded", String(next));
  });

  document.querySelector("#finish-sale").addEventListener("click", () => openCashierAction("payment"));
  document.querySelector("#load-sample-sale").addEventListener("click", loadSampleSale);
  document.querySelector("#cashier-back").addEventListener("click", () => closeCashierAction());
  cashierForm.addEventListener("submit", submitCashierAction);
  document.querySelector("#cart-items").addEventListener("focusin", (event) => {
    const row = event.target.closest("[data-cart-id]");
    if (row) selectCart(row.dataset.cartId);
  });

  const initialHash = window.location.hash.replace("#", "");
  renderSaleProducts();
  renderCart();
  navigate(initialHash === "caixa" ? "vendas" : initialHash || "dashboard", { skipHistory: !initialHash || initialHash === "caixa", preserveScroll: true });
  if (initialHash === "caixa") openSale();
  if (initialHash === "caixa" && new URLSearchParams(location.search).get("demo") === "1") loadSampleSale();
})();
