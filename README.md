# Rede neural

Redes neurais artificiais são modelos computacionais inspirados na estrutura e funcionamento do cérebro humano, que podem ser utilizados para realizar tarefas de classificação, regressão, reconhecimento de padrões, entre outras.

Uma rede neural feedforward é um tipo de rede neural onde as informações fluem apenas em uma direção, da camada de entrada para a camada de saída, sem formar ciclos.

## Implementação de uma rede neural feedforward simples com uma camada oculta

A implementação de uma rede neural feedforward simples com uma camada oculta pode ser realizada utilizando a classe Matrix para manipulação de matrizes. A classe RedeNeural recebe como argumentos o número de nós na camada de entrada, na camada oculta e na camada de saída, que correspondem ao número de neurônios em cada uma das camadas.

Ao instanciar um objeto RedeNeural, os pesos e os vieses são inicializados aleatoriamente, o que permite que a rede neural comece a aprender a partir de um estado inicial sem vieses. Os pesos representam as conexões entre os neurônios de diferentes camadas, enquanto os vieses representam a tendência de um neurônio em produzir um sinal de ativação.

## Cálculo de feedforward

O método feedforward da rede neural recebe uma matriz de entrada, que pode ser vista como um vetor de características, e realiza o cálculo de feedforward da rede neural. Esse cálculo envolve:

- A multiplicação das entradas pelos pesos da camada de entrada para a camada oculta
- A aplicação da função de ativação sigmoide na camada oculta
- A multiplicação da saída da camada oculta pelos pesos da camada oculta para a camada de saída
- A aplicação novamente da função de ativação sigmoide na camada de saída.

A função de ativação sigmoide é uma função não linear que mapeia qualquer valor real para um valor no intervalo entre 0 e 1. Essa função é utilizada para introduzir não linearidades no modelo e permitir que a rede neural seja capaz de aprender relações complexas entre as características de entrada e a variável alvo.
