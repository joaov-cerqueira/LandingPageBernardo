/* ==========================================================
   ARQUIVO PRINCIPAL PARA EDITAR O SITE
   Você quase sempre só precisará mexer aqui.
   ========================================================== */

window.CONFIGURACAO_SITE = {
  vendedor: {
    nome: "Bernardo Oliveira",
    frase: "Seu próximo Volkswagen começa com uma boa conversa.",

    /* TROQUE pelo número real com DDI + DDD + número, somente números.
       Exemplo fictício: 5521999999999
    */
    whatsapp: "5521999999999",

    /* Segurança para não enviar mensagens ao número de exemplo.
       Depois de trocar o número acima, altere para false.
    */
    whatsappEhExemplo: true,

    foto: "imagens/bernardo.svg"
  },

  veiculos: [
    {
      id: "polo",
      nome: "Polo",
      categoria: "Hatch",
      motor: "MPI e TSI",
      cambio: "Automático de 6 marchas*",
      destaque: "Ágil e urbano",
      imagem: "imagens/polo.svg"
    },
    {
      id: "tera",
      nome: "Tera",
      categoria: "SUV",
      motor: "1.0 MPI ou 170 TSI",
      cambio: "Manual ou automático*",
      destaque: "Tecnologia e versatilidade",
      imagem: "imagens/tera.svg"
    },
    {
      id: "virtus",
      nome: "Virtus",
      categoria: "Sedã",
      motor: "TSI, 200 TSI ou 250 TSI",
      cambio: "Manual de 5 ou automático de 6*",
      destaque: "Espaço e conforto",
      imagem: "imagens/virtus.svg"
    },
    {
      id: "saveiro",
      nome: "Saveiro",
      categoria: "Picape",
      motor: "1.6",
      cambio: "Manual de 5 marchas",
      destaque: "Robustez para o dia a dia",
      imagem: "imagens/saveiro.svg"
    },
    {
      id: "tcross",
      nome: "T-Cross",
      categoria: "SUV",
      motor: "200 TSI ou 250 TSI",
      cambio: "Automático de 6 ou 8*",
      destaque: "SUV conectado e versátil",
      imagem: "imagens/tcross.svg"
    },
    {
      id: "nivus",
      nome: "Nivus",
      categoria: "SUV Coupé",
      motor: "200 TSI ou 250 TSI",
      cambio: "Automático de 6 marchas",
      destaque: "Design e conectividade",
      imagem: "imagens/nivus.svg"
    },
    {
      id: "taos",
      nome: "Taos",
      categoria: "SUV",
      motor: "250 TSI • 150 cv",
      cambio: "Automático de 8 marchas",
      destaque: "Espaço e tecnologia",
      imagem: "imagens/taos.svg"
    },
    {
      id: "tiguan",
      nome: "Tiguan",
      categoria: "SUV",
      motor: "350 TSI • 272 cv",
      cambio: "Automático de 8 marchas",
      destaque: "4Motion e alta performance",
      imagem: "imagens/tiguan.svg"
    }
  ]
};

/*
  * Alguns modelos possuem mais de uma versão; por isso o câmbio/motor
    pode variar. Dados usados como referência: páginas oficiais VW Brasil,
    consultadas em setembro de 2026.

  Páginas de referência:
  https://www.vw.com.br/pt/carros/polo.html
  https://www.vw.com.br/pt/carros/tera.html
  https://www.vw.com.br/pt/carros/virtus.html
  https://www.vw.com.br/pt/carros/Saveiro.html
  https://www.vw.com.br/pt/carros/t-cross.html
  https://www.vw.com.br/pt/carros/nivus.html
  https://www.vw.com.br/pt/carros/taos.html
  https://www.vw.com.br/pt/carros/tiguan.html
*/
