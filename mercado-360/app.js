(() => {
  "use strict";

  const formatMoney = (value) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);

  const navGroups = [
    {
      label: "Visão geral",
      items: [{ id: "dashboard", label: "Dashboard", icon: "⌂" }],
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
        ["Mercadinho Central — Matriz", "São Paulo / SP", "Mariana Costa", "326", "R$ 18.742,60", "28,4%", "<span class=\"badge badge--success\">Aberta</span>"],
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

  const primaryNav = document.querySelector("#primary-nav");
  const pageContent = document.querySelector("#page-content");
  const menuToggle = document.querySelector("#menu-toggle");
  const saleModal = document.querySelector("#sale-modal");
  const saleSearch = document.querySelector("#sale-search");
  const saleProductsEl = document.querySelector("#sale-products");
  const searchInput = document.querySelector("#global-search");
  const searchResults = document.querySelector("#search-results");

  function renderNavigation() {
    primaryNav.innerHTML = navGroups
      .map(
        (group) => `
          <span class="nav-section-label">${group.label}</span>
          ${group.items
            .map(
              (item) => `
                <button class="nav-item" type="button" data-page="${item.id}" ${item.id === activePage ? 'aria-current="page"' : ""}>
                  <span class="nav-item__icon" aria-hidden="true">${item.icon}</span>
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
      <span>Mercadinho Central • Dados fictícios</span>
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

  function renderDashboard() {
    pageContent.innerHTML = `
      <section class="page-enter" aria-labelledby="dashboard-title">
        <header class="page-header">
          <div>
            <span class="eyebrow">Visão consolidada</span>
            <h1 id="dashboard-title">Boa tarde, Mariana</h1>
            <p>Acompanhe a operação do Mercadinho Central em tempo real demonstrativo.</p>
          </div>
          <div class="page-header__actions">
            <select class="date-filter demo-filter" aria-label="Período do painel">
              <option>Hoje, 23 de outubro</option>
              <option>Últimos 7 dias</option>
              <option>Este mês</option>
            </select>
            <button class="secondary-button" type="button" data-demo-action="Exportar resumo do dashboard">⇩ Exportar resumo</button>
            <button class="primary-button" type="button" data-open-sale>＋ Nova venda</button>
          </div>
        </header>

        <div class="kpi-grid" aria-label="Indicadores principais">
          ${metricCard("Faturamento hoje", "R$ 18.742,60", '<span class="trend-up">↗ 8,7%</span><span>sobre ontem</span>', "R$", true)}
          ${metricCard("Vendas", "326", '<span class="trend-up">↗ 5,2%</span><span>sobre ontem</span>', "#")}
          ${metricCard("Ticket médio", "R$ 57,49", '<span class="trend-up">↗ 3,1%</span><span>no período</span>', "TM")}
          ${metricCard("Margem bruta", "28,4%", '<span class="trend-up">↗ 1,2 p.p.</span><span>sobre a meta</span>', "%")}
          ${metricCard("Estoque crítico", "14 itens", '<span class="trend-down">4 urgentes</span><span>para hoje</span>', "!")}
          ${metricCard("Caixas", "3 abertos", '<span class="trend-neutral">1 fechado</span><span>no momento</span>', "CX")}
        </div>

        <div class="dashboard-alerts" aria-label="Alertas da operação">
          <article class="inline-alert inline-alert--red">
            <span class="inline-alert__icon" aria-hidden="true">!</span>
            <div><strong>14 produtos abaixo do estoque mínimo</strong><small>4 itens podem romper ainda hoje.</small></div>
            <button type="button" data-go-page="estoque">Ver estoque →</button>
          </article>
          <article class="inline-alert">
            <span class="inline-alert__icon" aria-hidden="true">R$</span>
            <div><strong>2 contas vencidas no financeiro</strong><small>Total fictício de R$ 1.842,90.</small></div>
            <button type="button" data-go-page="financeiro">Analisar →</button>
          </article>
          <article class="inline-alert inline-alert--blue">
            <span class="inline-alert__icon" aria-hidden="true">↙</span>
            <div><strong>4 recebimentos programados hoje</strong><small>Próxima entrega demonstrativa às 16:30.</small></div>
            <button type="button" data-go-page="compras">Ver agenda →</button>
          </article>
        </div>

        <div class="dashboard-grid">
          <article class="card card--span-8">
            <header class="card__header">
              <div><h2>Desempenho de vendas</h2><p>Faturamento diário • valores fictícios</p></div>
              <div class="segmented-control" aria-label="Período do gráfico">
                <button class="is-active" type="button">7 dias</button>
                <button type="button">30 dias</button>
                <button type="button">12 meses</button>
              </div>
            </header>
            <div class="card__body">
              <div class="revenue-summary">
                <div><strong>R$ 116.480,20</strong><small><span class="trend-up">↗ 6,8%</span> comparado aos 7 dias anteriores</small></div>
                <div class="legend"><span><i></i>Período atual</span><span><i></i>Anterior</span></div>
              </div>
              <div class="line-chart" aria-label="Gráfico de faturamento dos últimos sete dias">
                <svg viewBox="0 0 720 190" role="img" aria-label="Linha de vendas de sexta a quinta-feira">
                  <defs>
                    <linearGradient id="revenue-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stop-color="#176050" stop-opacity="0.22"></stop>
                      <stop offset="100%" stop-color="#176050" stop-opacity="0"></stop>
                    </linearGradient>
                  </defs>
                  <line class="chart-grid-line" x1="18" y1="24" x2="704" y2="24"></line>
                  <line class="chart-grid-line" x1="18" y1="70" x2="704" y2="70"></line>
                  <line class="chart-grid-line" x1="18" y1="116" x2="704" y2="116"></line>
                  <line class="chart-grid-line" x1="18" y1="162" x2="704" y2="162"></line>
                  <path class="chart-comparison" d="M18,130 C75,112 90,119 124,104 S203,89 228,95 S312,112 332,98 S415,74 438,83 S520,97 544,79 S625,72 704,68"></path>
                  <path class="chart-area" d="M18,144 C62,133 86,121 124,126 S190,110 228,101 S292,106 332,84 S400,65 438,72 S501,53 544,59 S624,35 704,43 L704,170 L18,170 Z"></path>
                  <path class="chart-line" d="M18,144 C62,133 86,121 124,126 S190,110 228,101 S292,106 332,84 S400,65 438,72 S501,53 544,59 S624,35 704,43"></path>
                  <circle class="chart-point" cx="18" cy="144" r="4"></circle>
                  <circle class="chart-point" cx="124" cy="126" r="4"></circle>
                  <circle class="chart-point" cx="228" cy="101" r="4"></circle>
                  <circle class="chart-point" cx="332" cy="84" r="4"></circle>
                  <circle class="chart-point" cx="438" cy="72" r="4"></circle>
                  <circle class="chart-point" cx="544" cy="59" r="4"></circle>
                  <circle class="chart-point" cx="704" cy="43" r="5"></circle>
                </svg>
                <div class="chart-labels"><span>Sex, 17</span><span>Sáb, 18</span><span>Dom, 19</span><span>Seg, 20</span><span>Ter, 21</span><span>Qua, 22</span><span>Hoje</span></div>
              </div>
            </div>
          </article>

          <article class="card card--span-4">
            <header class="card__header">
              <div><h2>Vendas por canal</h2><p>Participação no faturamento de hoje</p></div>
              <button class="outline-button outline-button--compact" type="button" data-demo-action="Detalhes dos canais">Detalhes</button>
            </header>
            <div class="card__body channel-layout">
              <div class="donut" aria-label="69 por cento frente de caixa, 18 por cento delivery, 13 por cento encomendas">
                <div class="donut__copy"><strong>326</strong><small>vendas</small></div>
              </div>
              <div class="channel-list">
                <div class="channel-item"><span>Frente de caixa</span><strong>69%</strong><div class="channel-item__bar"><i style="width:69%"></i></div></div>
                <div class="channel-item"><span>Delivery</span><strong>18%</strong><div class="channel-item__bar"><i style="width:18%"></i></div></div>
                <div class="channel-item"><span>Encomendas</span><strong>13%</strong><div class="channel-item__bar"><i style="width:13%"></i></div></div>
              </div>
            </div>
          </article>
        </div>

        <div class="dashboard-grid">
          <article class="card card--span-7">
            <header class="card__header">
              <div><h2>Produtos com maior saída</h2><p>Quantidade vendida hoje</p></div>
              <button class="outline-button outline-button--compact" type="button" data-go-page="produtos">Ver produtos</button>
            </header>
            <div class="card__body card__body--flush data-table-wrap">
              <table class="data-table">
                <thead><tr><th>Produto</th><th>Categoria</th><th>Qtd.</th><th>Faturamento</th><th>Estoque</th></tr></thead>
                <tbody>
                  <tr><td><div class="table-primary"><span class="product-thumb">AR</span><div><strong>Arroz Boa Mesa 5kg</strong><small>SKU 001284</small></div></div></td><td>Mercearia</td><td><strong>48 un.</strong></td><td>R$ 1.339,20</td><td><div class="stock-level"><div class="stock-level__copy"><span>184 un.</span><span>76%</span></div><div class="stock-level__bar"><i style="width:76%"></i></div></div></td></tr>
                  <tr><td><div class="table-primary"><span class="product-thumb product-thumb--amber">CA</span><div><strong>Café Serra 500g</strong><small>SKU 001892</small></div></div></td><td>Mercearia</td><td><strong>41 un.</strong></td><td>R$ 758,09</td><td><div class="stock-level stock-level--low"><div class="stock-level__copy"><span>12 un.</span><span>18%</span></div><div class="stock-level__bar"><i style="width:18%"></i></div></div></td></tr>
                  <tr><td><div class="table-primary"><span class="product-thumb product-thumb--blue">LE</span><div><strong>Leite Integral Vale 1L</strong><small>SKU 000441</small></div></div></td><td>Laticínios</td><td><strong>39 un.</strong></td><td>R$ 225,81</td><td><div class="stock-level stock-level--medium"><div class="stock-level__copy"><span>96 un.</span><span>48%</span></div><div class="stock-level__bar"><i style="width:48%"></i></div></div></td></tr>
                  <tr><td><div class="table-primary"><span class="product-thumb product-thumb--violet">SB</span><div><strong>Sabão em Pó Limpex 1,6kg</strong><small>SKU 002103</small></div></div></td><td>Limpeza</td><td><strong>27 un.</strong></td><td>R$ 591,30</td><td><div class="stock-level"><div class="stock-level__copy"><span>44 un.</span><span>62%</span></div><div class="stock-level__bar"><i style="width:62%"></i></div></div></td></tr>
                </tbody>
              </table>
            </div>
          </article>

          <article class="card card--span-5">
            <header class="card__header">
              <div><h2>Atividade recente</h2><p>Movimentações da operação</p></div>
              <button class="outline-button outline-button--compact" type="button" data-demo-action="Histórico de atividades">Histórico</button>
            </header>
            <div class="card__body activity-list">
              <div class="activity-item"><span class="activity-item__icon">R$</span><div><strong>Venda #008741 concluída</strong><small>Ana Souza • Pix • R$ 84,70</small></div><time>14:31</time></div>
              <div class="activity-item"><span class="activity-item__icon">↙</span><div><strong>Recebimento parcialmente conferido</strong><small>Pedido PC-2026-0380 • 16 de 18 itens</small></div><time>14:18</time></div>
              <div class="activity-item"><span class="activity-item__icon">!</span><div><strong>Estoque mínimo atingido</strong><small>Café Tradicional Serra 500g • 12 unidades</small></div><time>13:56</time></div>
              <div class="activity-item"><span class="activity-item__icon">CX</span><div><strong>Caixa CX-04 fechado</strong><small>Rafael Nunes • saldo R$ 1.550,80</small></div><time>13:10</time></div>
              <div class="activity-item"><span class="activity-item__icon">↔</span><div><strong>Transferência separada</strong><small>Matriz → Unidade Norte • 6 itens</small></div><time>12:44</time></div>
            </div>
          </article>
        </div>
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
    const valid = page === "dashboard" || page === "relatorios" || page === "configuracoes" || Boolean(modules[page]);
    activePage = valid ? page : "dashboard";
    renderNavigation();

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
    const normalized = query.trim().toLocaleLowerCase("pt-BR");
    const filtered = saleProducts.filter((product) => {
      const matchesQuery = !normalized || `${product.name} ${product.code}`.toLocaleLowerCase("pt-BR").includes(normalized);
      const matchesCategory = category === "Todos" || product.category === category;
      return matchesQuery && matchesCategory;
    });
    saleProductsEl.innerHTML = filtered.length
      ? filtered
          .map(
            (product) => `
              <button class="sale-product" type="button" data-add-product="${product.id}">
                <span class="sale-product__icon" aria-hidden="true">${product.icon}</span>
                <strong>${product.name}</strong>
                <small>${product.code}</small>
                <b>${formatMoney(product.price)}</b>
              </button>`,
          )
          .join("")
      : '<div class="search-empty">Nenhum produto fictício encontrado.</div>';
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
    const total = entries.reduce((sum, [id, quantity]) => sum + saleProducts.find((product) => product.id === id).price * quantity, 0);

    itemsEl.innerHTML = entries
      .map(([id, quantity]) => {
        const product = saleProducts.find((item) => item.id === id);
        return `
          <div class="cart-item">
            <div>
              <strong>${product.name}</strong>
              <small>${formatMoney(product.price)} cada</small>
              <div class="quantity-control" aria-label="Quantidade de ${product.name}">
                <button type="button" data-cart-change="-1" data-product-id="${id}" aria-label="Diminuir quantidade">−</button>
                <span>${quantity}</span>
                <button type="button" data-cart-change="1" data-product-id="${id}" aria-label="Aumentar quantidade">＋</button>
              </div>
            </div>
            <span class="cart-item__price">${formatMoney(product.price * quantity)}</span>
          </div>`;
      })
      .join("");
    emptyEl.style.display = entries.length ? "none" : "grid";
    itemsEl.style.display = entries.length ? "block" : "none";
    countEl.textContent = `${itemCount} ${itemCount === 1 ? "item" : "itens"}`;
    subtotalEl.textContent = formatMoney(total);
    totalEl.textContent = formatMoney(total);
    finishButton.disabled = itemCount === 0;
  }

  function openSale(trigger) {
    returnFocus = trigger || document.activeElement;
    saleModal.hidden = false;
    document.body.classList.add("modal-open");
    renderSaleProducts();
    renderCart();
    window.setTimeout(() => saleSearch.focus(), 0);
  }

  function closeSale() {
    saleModal.hidden = true;
    document.body.classList.remove("modal-open");
    saleSearch.value = "";
    if (returnFocus && typeof returnFocus.focus === "function") returnFocus.focus();
  }

  function renderGlobalSearch(query) {
    const normalized = query.trim().toLocaleLowerCase("pt-BR");
    if (!normalized) {
      closeGlobalSearch();
      return;
    }
    const navItems = navGroups.flatMap((group) => group.items.map((item) => ({ ...item, group: group.label })));
    const moduleMatches = navItems
      .filter((item) => `${item.label} ${item.group}`.toLocaleLowerCase("pt-BR").includes(normalized))
      .map((item) => ({ type: "module", id: item.id, title: item.label, detail: `Módulo • ${item.group}`, icon: item.icon }));
    const productMatches = saleProducts
      .filter((product) => `${product.name} ${product.code}`.toLocaleLowerCase("pt-BR").includes(normalized))
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
      const id = addProduct.dataset.addProduct;
      cart.set(id, (cart.get(id) || 0) + 1);
      renderCart();
      return;
    }

    const cartChange = event.target.closest("[data-cart-change]");
    if (cartChange) {
      const id = cartChange.dataset.productId;
      const next = (cart.get(id) || 0) + Number(cartChange.dataset.cartChange);
      if (next <= 0) cart.delete(id);
      else cart.set(id, next);
      renderCart();
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
    if (event.target.matches(".module-search")) {
      const query = event.target.value.trim().toLocaleLowerCase("pt-BR");
      document.querySelectorAll(".module-table tbody tr").forEach((row) => {
        row.hidden = Boolean(query) && !row.textContent.toLocaleLowerCase("pt-BR").includes(query);
      });
    }
  });

  document.addEventListener("change", (event) => {
    if (event.target.matches(".demo-filter")) {
      showToast(`Filtro: ${event.target.value}`, "A seleção foi aplicada somente à visualização demonstrativa.");
    }
  });

  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLocaleLowerCase() === "k") {
      event.preventDefault();
      searchInput.focus();
    }
    if (!saleModal.hidden && event.key === "Tab") {
      const focusable = [...saleModal.querySelectorAll('button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex="0"]')].filter(
        (element) => element.offsetParent !== null,
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    if (event.key === "Escape") {
      if (!saleModal.hidden) closeSale();
      else closeGlobalSearch();
    }
    if (event.key === "Enter" && event.target.matches(".report-card")) event.target.click();
  });

  menuToggle.addEventListener("click", () => {
    const next = !document.body.classList.contains("menu-open");
    document.body.classList.toggle("menu-open", next);
    menuToggle.setAttribute("aria-expanded", String(next));
  });

  document.querySelector("#finish-sale").addEventListener("click", () => {
    if (!cart.size) return;
    cart.clear();
    renderCart();
    closeSale();
    showToast("Venda simulada concluída", "Nenhum pagamento foi processado e nenhum registro foi criado.");
  });

  const initialHash = window.location.hash.replace("#", "");
  renderSaleProducts();
  renderCart();
  navigate(initialHash || "dashboard", { skipHistory: !initialHash, preserveScroll: true });
})();
