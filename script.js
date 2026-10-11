// =========================================================================
// SCRIPT.JS - LÓGICA DO SIMULADO E PERSISTÊNCIA DO CRONÔMETRO
// =========================================================================

const STORAGE_KEY_TEMPO = "simulado_tempo_segundos";

// Recupera o tempo salvo ou inicia em 0
let tempoEmSegundos = parseInt(localStorage.getItem(STORAGE_KEY_TEMPO)) || 0;

function formatarTempo(segundos) {
    const hrs = Math.floor(segundos / 3600);
    const mins = Math.floor((segundos % 3600) / 60);
    const segs = segundos % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${segs.toString().padStart(2, '0')}`;
}

function atualizarDisplayCronometro() {
    const elCronometro = document.getElementById("cronometro");
    if (elCronometro) {
        elCronometro.innerText = formatarTempo(tempoEmSegundos);
    }
}

// Inicia a contagem e salva o tempo continuamente
const timerInterval = setInterval(() => {
    tempoEmSegundos++;
    atualizarDisplayCronometro();
    localStorage.setItem(STORAGE_KEY_TEMPO, tempoEmSegundos);
}, 1000);

// Função para ser chamada nos botões de navegação ("Próximo" / "Anterior")
function salvarTempoNavegacao() {
    localStorage.setItem(STORAGE_KEY_TEMPO, tempoEmSegundos);
}

// Função para ser chamada ao "Finalizar" ou "Reiniciar" o simulado
function zerarCronometro() {
    clearInterval(timerInterval);
    localStorage.removeItem(STORAGE_KEY_TEMPO);
    tempoEmSegundos = 0;
    atualizarDisplayCronometro();
}

// Inicialização ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    atualizarDisplayCronometro();
});
