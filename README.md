# desafio-Cordeiroz-2024

RecintosZoo
A classe RecintosZoo foi criada para analisar os recintos de um zoológico e verificar se eles possuem as condições adequadas para acomodar uma quantidade específica de animais, levando em consideração fatores como:

Compatibilidade de bioma: Cada animal só pode ser acomodado em recintos que possuam biomas compatíveis com sua natureza.
Espaço disponível: O método calcula o espaço total disponível no recinto e verifica se ele é suficiente para acomodar o animal solicitado com base no seu tamanho.
Carnívoros e herbívoros: Animais carnívoros só podem ser colocados com outros carnívoros da mesma espécie. Herbívoros podem compartilhar o recinto, desde que haja espaço disponível.
Lógica de Funcionamento
O método analisaRecintos(animal, quantidade) verifica cada recinto disponível, validando o espaço necessário, bioma compatível e se os animais podem coexistir no mesmo ambiente.
Retorna um erro caso o animal ou a quantidade seja inválida ou caso não haja recintos disponíveis.
Correção Aplicada
Havia um erro na análise de espaço disponível no Recinto 3. Inicialmente, o cálculo considerava incorretamente o espaço total e o espaço ocupado pelos animais.

Correção: O recinto 3 tem um tamanho total de 7, com uma gazela ocupando 2 espaços. Após adicionar 2 macacos (1 espaço cada), o total ocupado será 4, restando 3 espaços livres. A lógica foi ajustada para refletir esse cálculo correto no retorno do método.
