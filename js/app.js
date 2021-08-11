let jogador1 = '';
let jogador2 = '';
let vencedor = [0, 0];
partida = 0;

while(partida < 3){
    do{
        jogador1 = prompt('Vez do jogador 1. \nDigite pedra, papel ou tesoura').toLowerCase();
        if(jogador1 != 'pedra' && jogador1 != 'papel' && jogador1 != 'tesoura'){
            alert('Opção inválida. Insira apenas um dos valores: pedra, papel, tesoura.');
        }
    } while(jogador1 != 'pedra' && jogador1 != 'papel' && jogador1 != 'tesoura');

    do{
        jogador2 = prompt('Vez do jogador 2. \nDigite pedra, papel ou tesoura').toLowerCase();
        if(jogador2 != 'pedra' && jogador2 != 'papel' && jogador2 != 'tesoura'){
            alert('Opção inválida. Insira apenas um dos valores: pedra, papel, tesoura.');
        }
    } while(jogador2 != 'pedra' && jogador2 != 'papel' && jogador2 != 'tesoura');

    switch(jogador1){
        case jogador2:
            alert('Empate!')
            vencedor.push('Empate');
            break;
        case 'pedra':
            if(jogador2 == 'tesoura'){
                alert(`Jogador 1 venceu! ${jogador1} vence ${jogador2}.`);
                vencedor[0]++;
            } else{
                alert(`Jogador 2 venceu! ${jogador2} vence ${jogador1}.`);
                vencedor[1]++;
            }
            break;
        case 'papel':
            if(jogador2 == 'tesoura'){
                alert(`Jogador 2 venceu! ${jogador2} vence ${jogador1}.`);
                vencedor[1]++;
            } else{
                alert(`Jogador 1 venceu! ${jogador1} vence ${jogador2}.`);
                vencedor[0]++;
            }
            break;
        case 'tesoura':
            if(jogador2 == 'pedra'){
                alert(`Jogador 2 venceu! ${jogador2} vence ${jogador1}.`);
                vencedor[1]++;
            } else{
                alert(`Jogador 1 venceu! ${jogador1} vence ${jogador2}.`)
                vencedor[0]++;
            }
            break;
    }
    partida++;
}

if(vencedor[0] == vencedor[1]){
    alert(`Empate! \n ----Placar:---- \n Jogador 1: ${vencedor[0]} \n Jogador 2: ${vencedor[1]}`);
} else if(vencedor[0] > vencedor[1]){
    alert(`Jogador 1 venceu! \n ----Placar:---- \n Jogador 1: ${vencedor[0]} \n Jogador 2: ${vencedor[1]}`);
} else{
    alert(`Jogador 2 venceu! \n ----Placar:---- \n Jogador 1: ${vencedor[0]} \n Jogador 2: ${vencedor[1]}`);
}