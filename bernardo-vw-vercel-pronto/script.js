/* ==========================================================
   LÓGICA DO SITE
   Código comentado e com nomes em português.
   ========================================================== */

const configuracao = window.CONFIGURACAO_SITE;

const listaModelos = document.querySelector("#lista-modelos");
const estadoInicial = document.querySelector("#estado-inicial");
const cartaoVeiculo = document.querySelector("#cartao-veiculo");
const nomeVeiculo = document.querySelector("#nome-veiculo");
const categoriaVeiculo = document.querySelector("#categoria-veiculo");
const imagemVeiculo = document.querySelector("#imagem-veiculo");
const motorVeiculo = document.querySelector("#motor-veiculo");
const cambioVeiculo = document.querySelector("#cambio-veiculo");
const destaqueVeiculo = document.querySelector("#destaque-veiculo");
const botaoInteresse = document.querySelector("#botao-interesse");
const poeira = document.querySelector("#poeira");
const fotoBernardo = document.querySelector("#foto-bernardo");
const fraseVendedor = document.querySelector("#frase-vendedor");

let veiculoSelecionado = null;

/* Aplica informações básicas do vendedor. */
function configurarVendedor() {
  fotoBernardo.src = configuracao.vendedor.foto;
  fraseVendedor.textContent = configuracao.vendedor.frase;
  document.querySelector("#ano-atual").textContent = new Date().getFullYear();
}

/* Cria os botões dos carros automaticamente a partir do config.js. */
function criarBotoesDosVeiculos() {
  configuracao.veiculos.forEach((veiculo) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "modelo-botao";
    botao.textContent = veiculo.nome;
    botao.dataset.veiculo = veiculo.id;
    botao.setAttribute("aria-pressed", "false");

    botao.addEventListener("click", () => selecionarVeiculo(veiculo, botao));
    listaModelos.appendChild(botao);
  });
}

/* Seleciona um carro e dispara a animação de entrada. */
function selecionarVeiculo(veiculo, botaoClicado) {
  veiculoSelecionado = veiculo;

  document.querySelectorAll(".modelo-botao").forEach((botao) => {
    const ativo = botao === botaoClicado;
    botao.classList.toggle("ativo", ativo);
    botao.setAttribute("aria-pressed", String(ativo));
  });

  estadoInicial.hidden = true;
  cartaoVeiculo.hidden = false;

  nomeVeiculo.textContent = veiculo.nome;
  categoriaVeiculo.textContent = veiculo.categoria;
  motorVeiculo.textContent = veiculo.motor;
  cambioVeiculo.textContent = veiculo.cambio;
  destaqueVeiculo.textContent = veiculo.destaque;
  botaoInteresse.textContent = `Quero meu ${veiculo.nome}`;

  /* Remove animação antiga para permitir repetir ao clicar novamente. */
  imagemVeiculo.classList.remove("carro-entrando");
  void imagemVeiculo.offsetWidth;

  imagemVeiculo.src = veiculo.imagem;
  imagemVeiculo.alt = `Volkswagen ${veiculo.nome}`;
  imagemVeiculo.classList.add("carro-entrando");

  criarPoeira();
}

/* Cria pequenas partículas atrás do carro para dar efeito de movimento. */
function criarPoeira() {
  poeira.innerHTML = "";

  const quantidade = 18;

  for (let indice = 0; indice < quantidade; indice += 1) {
    const particula = document.createElement("span");
    particula.className = "particula-poeira";
    particula.style.setProperty("--x", `${Math.random() * 170}px`);
    particula.style.setProperty("--y", `${Math.random() * 55 - 15}px`);
    particula.style.setProperty("--tamanho", `${8 + Math.random() * 24}px`);
    particula.style.setProperty("--atraso", `${Math.random() * 0.32}s`);
    poeira.appendChild(particula);
  }

  poeira.classList.remove("poeira-ativa");
  void poeira.offsetWidth;
  poeira.classList.add("poeira-ativa");
}

/* Confere se o número real já foi colocado antes de abrir o WhatsApp. */
function whatsappEstaConfigurado() {
  const numero = configuracao.vendedor.whatsapp.replace(/\D/g, "");

  if (configuracao.vendedor.whatsappEhExemplo || numero.length < 12) {
    window.alert(
      "Falta colocar o WhatsApp real do Bernardo. Abra o arquivo config.js, troque o número e altere whatsappEhExemplo para false."
    );
    return false;
  }

  return true;
}

/* Abre o WhatsApp com a mensagem já preenchida. */
function abrirWhatsapp(mensagem) {
  if (!whatsappEstaConfigurado()) return;

  const numero = configuracao.vendedor.whatsapp.replace(/\D/g, "");
  const endereco = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(endereco, "_blank", "noopener,noreferrer");
}

/* CTA geral do site. */
document.querySelectorAll('[data-acao="whatsapp-geral"]').forEach((botao) => {
  botao.addEventListener("click", () => {
    abrirWhatsapp(
      "Olá Bernardo, vi seu site e gostaria de conhecer as opções de Volkswagen disponíveis."
    );
  });
});

/* CTA específico do carro selecionado. */
botaoInteresse.addEventListener("click", () => {
  if (!veiculoSelecionado) return;

  /* Texto exatamente no estilo pedido pelo usuário. */
  abrirWhatsapp(
    `Olá Bernardo, estou interessado em um ${veiculoSelecionado.nome}. Gostaria de saber valores e condições.`
  );
});

/* Mostra/esconde o botão flutuante conforme a rolagem. */
const botaoFlutuante = document.querySelector(".whatsapp-flutuante");

window.addEventListener(
  "scroll",
  () => {
    botaoFlutuante.classList.toggle("visivel", window.scrollY > 420);
  },
  { passive: true }
);

/* Dados estruturados ajudam os buscadores a entenderem a página. */
function adicionarDadosEstruturados() {
  const dados = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: configuracao.vendedor.nome,
    jobTitle: "Atendimento de veículos Volkswagen",
    description: "Atendimento para clientes interessados em veículos Volkswagen."
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(dados);
  document.head.appendChild(script);
}

configurarVendedor();
criarBotoesDosVeiculos();
adicionarDadosEstruturados();
