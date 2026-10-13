# IMMUNOVERSE Clinical 5.6 — Consolidação acadêmica

Base: ZIP final **IMMUNOVERSE-CLINICAL-v5-5-MICHELLE-main.zip**, sem substituir o arquivo de referência.

## Acessos principais

1. **Minha Trilha** — 21 encontros e Conectar → Desenvolver → Praticar, plantões clínicos e competências.
2. **Exploração** — painel **DESTINOS DISPONÍVEIS**, oito cenários e 24 pontos de investigação (preservados).
3. **ImunoLab** — nove estações avançadas e acesso a experiências causais e laboratórios adicionais.
4. **Atlas** — uma porta de entrada com três perspectivas: células/mecanismos, conceitos contextualizados (82 termos) e morfologia em estilo científico.
5. **Desempenho** — progresso pessoal, conquistas e exportação; XP não representa nota oficial.

O menu clínico reduz os atalhos principais; ferramentas históricas estão em **Mais atividades de prática**, sem exclusão de exercícios.

## Atualização dos feedbacks

- **Nove ImunoLabs:** cada alternativa tem sua explicação própria; por exemplo, no complemento distingue C3a, C3b e C5a; em ABO/Rh distingue antígenos e padrão de aglutinação.
- **Oficinas CDP:** o bloco "Por que não" comenta individualmente as duas alternativas distratoras, com regras explicativas vinculadas aos conceitos (e revisão possível pelo docente). O raciocínio mecanístico oficial da questão permanece explícito.
- **Plantões:** o bloco de justificativa compara cada alternativa com o dado-chave, destacando generalizações, troca de moléculas/receptores ou inferências diagnósticas indevidas. Parte das explicações é gerada por regras de domínio; ainda requer revisão didática, não é laudo clínico.

## Preservações

- Exploração Interativa; oito destinos e seus 24 pontos.
- Trilha de 21 encontros e oficinas com 63 decisões.
- 42 missões, 11 plantões e nove estações avançadas, incluindo animações.
- Consultoria Imunológica, XP sem duplicação e identificação "Doutor + nome".
- Créditos: Vanessa Bertolucci, Estágio Docente, Profa. Dra. Michelle Darrieux Bertoncini, Universidade São Francisco.

## Manutenção

- O bloco CSS de sinalização de etapas v5.5 foi centralizado no `src/style.css`. A página de morfologia da versão anterior continua disponível somente como **atividade prática**, enquanto sua função de consulta está incorporada ao Atlas unificado.
- O service worker utiliza cache v5.6 para impedir reutilização de recursos antigos.
- Histórico de versões permanece em `docs/` por rastreabilidade. Não é conteúdo duplicado na navegação do estudante.

## Publicação

Descompacte o **ZIP completo diretamente na raiz do repositório**, verificando `package.json`, `src/`, `tests/`, `tools/` e `vercel.json` no mesmo nível. Em Vercel: Framework **Other**, Build `npm run build`, Output `dist`, Root `./`.

## Verificação necessária após deploy

Executar o primeiro acesso, confirmar "Doutor + nome", navegar nos cinco destinos, abrir três abas do Atlas, trocar célula/term/morfologia, abrir prática de identificação e voltar, completar ao menos uma oficina CDP, responder incorretamente um item de cada tipo (CDP, ImunoLab, plantão), checar Destinos Disponíveis e dispositivos móveis. A revisão automática de código não substitui QA gráfica e científica docente.
