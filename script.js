function showHome() {
    document.getElementById('home-view').classList.remove('hidden');
    document.getElementById('details-view').classList.add('hidden');
}

function openModule(type) {
    document.getElementById('home-view').classList.add('hidden');
    document.getElementById('details-view').classList.remove('hidden');
    
    const container = document.getElementById('module-content');
    
    if(type === 'programacao') {
        container.innerHTML = `
            <h2 class="category-title">CRONOGRAMA: PROGRAMAÇÃO</h2>
            <table class="timeline-table">
                <thead>
                    <tr>
                        <th>Semana</th>
                        <th>Conteúdo</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>01</td><td>Introdução à Lógica e VS Code</td><td class="status-done">CONCLUÍDO</td></tr>
                    <tr><td>02</td><td>Estruturas de Controle e Funções</td><td class="status-done">CONCLUÍDO</td></tr>
                    <tr><td>03</td><td>WPILib e Comandos do Robô</td><td class="status-waiting">EM ANDAMENTO</td></tr>
                    <tr><td>04</td><td>Bulls AI e Visão Computacional</td><td class="status-waiting">BLOQUEADO</td></tr>
                </tbody>
            </table>
        `;
    } else if(type === 'desempenho') {
        container.innerHTML = `
            <h2 class="category-title">SEU DESEMPENHO TÉCNICO</h2>
            <div class="chart-container">
                <canvas id="performanceChart"></canvas>
            </div>
            <p style="margin-top:20px; text-align:center;">Você evoluiu <b>15%</b> em relação à última semana! Continue assim, Touro!</p>
        `;
        renderChart();
    }
}

function renderChart() {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
            datasets: [{
                label: 'Pontuação de Treinamento',
                data: [30, 45, 62, 85],
                borderColor: '#ff4500',
                backgroundColor: 'rgba(255, 69, 0, 0.2)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { labels: { color: 'white' } } },
            scales: {
                y: { ticks: { color: 'white' }, grid: { color: 'rgba(255,255,255,0.1)' } },
                x: { ticks: { color: 'white' }, grid: { color: 'rgba(255,255,255,0.1)' } }
            }
        }
    });
}