// Function to generate and append buttons
function generateButtons(containerId, folderPrefix) {
    const container = document.getElementById(containerId);
    if (!container) return;

    for (let i = 1; i <= 500; i++) {
        const button = document.createElement('a');
        button.className = 'interactive-button';
        button.textContent = i;
        button.dataset.number = i;

        // Determine the sub-folder based on the page number
        let folderNumber = Math.floor((i - 1) / 20) * 20 + 1;
        let folderEnd = folderNumber + 19;
        let folderPath = `${String(folderNumber).padStart(3, '0')}-${String(folderEnd).padStart(3, '0')}`;
        
        // Construct the final link
        button.href = `${folderPrefix}/${folderPath}/${String(i).padStart(3, '0')}.html`;

        container.appendChild(button);
    }
}

// Function to generate and append buttons
function generateButtons2(containerId, folderPrefix) {
    const container = document.getElementById(containerId);
    if (!container) return;

    for (let i = 1; i <= 500; i++) {
        const button = document.createElement('a');
        button.className = 'interactive-button';
        button.textContent = i;
        button.dataset.number = i;

        // Determine the sub-folder based on the page number
        let folderNumber = Math.floor((i - 1) / 20) * 20 + 1;
        let folderEnd = folderNumber + 19;
        let folderPath = `${String(folderNumber).padStart(3, '0')}-${String(folderEnd).padStart(3, '0')}`;
        
        // Construct the final link
        button.href = `${folderPrefix}/${folderPath}/${String(i).padStart(3, '0')}/`;

        container.appendChild(button);
    }
}

// Function to generate filter buttons
function generateFilters(containerId, buttonContainerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    for (let i = 1; i <= 500; i += 50) {
        const filterBtn = document.createElement('button');
        const start = i;
        const end = i + 49;
        filterBtn.textContent = `${start}-${end}`;
        filterBtn.className = 'filter-button';
        filterBtn.dataset.start = start;
        filterBtn.dataset.end = end;
        
        filterBtn.addEventListener('click', () => {
            filterButtons(buttonContainerId, start, end, containerId);
        });

        container.appendChild(filterBtn);
    }
}

// Function to filter buttons
function filterButtons(buttonContainerId, start, end, filterContainerId) {
    const buttons = document.getElementById(buttonContainerId).children;
    
    // Deactivate all filter buttons
    document.querySelectorAll(`#${filterContainerId} .filter-button`).forEach(btn => {
        btn.classList.remove('active');
    });

    // Activate the clicked filter button
    event.target.classList.add('active');

    for (let button of buttons) {
        const number = parseInt(button.dataset.number, 10);
        if (number >= start && number <= end) {
            button.classList.remove('hidden');
        } else {
            button.classList.add('hidden');
        }
    }
}

// Generate buttons for Learn section
generateButtons('learn-buttons', 'learn');
generateFilters('learn-filters', 'learn-buttons');

// Generate buttons for Project section
generateButtons2('project-buttons', 'projects');
generateFilters('project-filters', 'project-buttons');

// Initial filtering to show the first 50 buttons
window.onload = () => {
    document.getElementById('learn-filters').children[0].click();
    document.getElementById('project-filters').children[0].click();
}
