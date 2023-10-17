//Espaço onde será realizado os calculos

const input = document.getElementById("calcSpace");

//Função nos Botões 

document.querySelectorAll('.calcButton').forEach(function(keyBtn){
    keyBtn.addEventListener('click', function(){
        const value = keyBtn.dataset.value;
        input.value += value;
        input.scrollLeft = input.scrollWidth; // Rola para a direita para acompanhar o texto
    });
});

//Limpar 

document.getElementById('clear').addEventListener('click', function(){
    input.value = '';
    input.scrollLeft = 0; // Rola de volta para a esquerda quando o campo é limpo
});

//Calcular

document.getElementById('equal').addEventListener('click', calculate);

function calculate() {
    try {
        const result = eval(input.value);
        if (result !== undefined && !isNaN(result)) {
            input.value = result;
        } else {
            input.value = 'ERROR';
        }
        input.scrollLeft = input.scrollWidth; // Rola para a direita para acompanhar o resultado
    } catch (error) {
        input.value = 'ERROR';
        input.scrollLeft = 0; // Rola de volta para a esquerda em caso de erro
    }
}