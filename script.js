// Accordéon vulnérabilités
document.querySelectorAll('.accordion-title').forEach(btn => {
  btn.onclick = function() {
    let item = this.parentElement;
    document.querySelectorAll('.accordion-item').forEach(e => e.classList.remove('open'));
    item.classList.toggle('open');
  };
});

// Tabs outils
document.querySelectorAll('.tab').forEach(tab => {
  tab.onclick = function() {
    document.querySelectorAll('.tab').forEach(e => e.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tc => tc.style.display = 'none');
    let tabId = this.getAttribute('data-tab');
    document.getElementById(tabId).style.display = '';
    this.classList.add('active');
  };
});

// Analyse de code (simulation sans backend)
document.getElementById('scan-form').onsubmit = function(e){
  e.preventDefault();
  let result = document.getElementById('scan-result');
  result.innerHTML = `
    <div class="score-circle"><span>74</span><span class="score-grade" style="color:#FFD600;">B</span></div>
    <h3>4 vulnérabilités détectées</h3>
    <ul class="vuln-list">
      <li><b>💉 SQLi</b> <code>api/users.js:47</code> – Injection via paramètre <button>Voir</button></li>
      <li><b>🔓 XSS</b> <code>views/profile.php:89</code> – Reflected XSS <button>Voir</button></li>
      <li><b>🔑 Secret</b> <code>config/database.py:12</code> – Clé API exposée <button>Voir</button></li>
      <li><b>📦 Dép. obsolète</b> <code>package.json:24</code> – lodash < 4.17.21 <button>Voir</button></li>
    </ul>
    <a class="btn btn-outline" href="data:application/json,{&quot;sample&quot;:true}" download="scan-result.sarif">Exporter SARIF</a>
  `;
  result.style.display = "block";
};
