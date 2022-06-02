import quickLap from '../../assets/quickLap.png';

import carroVermelho from '../../assets/personagens/carroVermelho.png';
import carroAmarelo from '../../assets/personagens/carroAmarelo.png';
import interlagos from '../../assets/personagens/interlagos.png';
import goianiaExterno from '../../assets/personagens/goianiaExterno.png';

const cesta = {
    detalhes: {
      nome: "Conheça nossos jogos",
      logoJogo: quickLap,
      nomeJogo: "QuickLap",
      descricao: "Fizemos a nossa versão do famoso jogo da Google do T-Rex, já imaginou criar o seu também? Pule e sobreviva o quanto puder!.",
      botao: "JOGAR AGORA",
    },
    itens: {
      titulo: "Personagens do jogo",
      lista: [
        {
          nome: "Carro Vermelho",
          imagem: carroVermelho,
          descricao: "O carro mais potente do jogo, mas quando as curvas são apertadas, não é tão bom assim. E aí, vai escolher?"
        },
        {
          nome: "Carro Amarelo",
          imagem: carroAmarelo,
          descricao: "Não é tão rápido como o Vermelho, mas é mais ágil nas curvas. E agora, vamos de Amarelo?"
        },
        {
          nome: "Interlagos",
          imagem: interlagos,
          descricao: "A pista mais famosa do Brasil, a primeira sequência de curvas, carrega o nome do maior ídolo deste esporte, o S do Senna."
        },
        {
          nome: "Goiania Externo",
          imagem: goianiaExterno,
          descricao: "A emoção de um circuito oval de alta velocidade, aqui aconteceram grandes corridas na história do automobilismo nacional."
        }
      ]
    }
  }

export default cesta;