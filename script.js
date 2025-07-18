document.addEventListener('DOMContentLoaded', () => {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', img: null },
    { id: 'manage', label: 'Manage', img: null },
    { id: 'assizt', label: 'Assizt', img: null },
    { id: 'challenge', label: 'Challenge', img: null }
  ];
  const tabBar = document.getElementById('tabBar');
  const tabContent = document.getElementById('tabContent');
  tabBar.className = 'tab-bar';
  tabContent.className = 'tab-content';

  // Render tab bar
  tabBar.innerHTML = '';
  tabs.forEach(tab => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn';
    btn.textContent = tab.label;
    btn.onclick = () => selectTab(tab.id);
    btn.id = 'tabBtn_' + tab.id;
    tabBar.appendChild(btn);
  });

  // Tab switching logic
  function selectTab(tabId) {
    tabs.forEach(tab => {
      document.getElementById('tabBtn_' + tab.id).classList.toggle('active', tab.id === tabId);
    });
    tabContent.classList.remove('fade-in');
    setTimeout(() => {
      tabContent.innerHTML = '';
      if (tabId === 'dashboard') {
        renderDashboard();
      } else if (tabId === 'manage') {
        renderManage();
      } else if (tabId === 'assizt') {
        renderAssizt();
      } else if (tabId === 'challenge') {
        renderChallenge();
      }
      tabContent.classList.add('fade-in');
    }, 120);
  }

  // Select default tab
  selectTab('dashboard');
});

