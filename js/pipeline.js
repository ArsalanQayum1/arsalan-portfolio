/**
 * pipeline.js
 * Interactive logic for:
 * 1. "How I Work" DevOps Infrastructure Architecture Stepper
 * 2. Real-time CI/CD Pipeline Simulator with terminal output
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. "How I Work" Architecture Pipeline Controller
     ========================================================================== */
  const archStepsData = [
    {
      id: 1,
      title: "1. Developer Workstation",
      summary: "Local development workflow adhering to Git best practices, linting, and automated pre-commit validation.",
      details: "Developers write features and fixes locally in feature branches. Code formatting, environment variable segregation, and local unit validations ensure zero contaminated commits before pushing upstream.",
      tools: ["Git", "VS Code", "Linux", "Pre-commit hooks"],
      terminalOutput: "$ git status\nOn branch feature/optimize-ingress\nChanges to be committed:\n  modified:   docker-compose.prod.yml\n  modified:   nginx/conf.d/api.conf\n$ git commit -m 'feat: optimize reverse proxy caching & timeouts'\n$ git push origin feature/optimize-ingress"
    },
    {
      id: 2,
      title: "2. Git Repository & Triggers",
      summary: "Centralized version control integrating protected main branches, pull request reviews, and webhook triggers.",
      details: "Repositories hosted on GitHub/GitLab maintain strict branch protection rules. Merges or push events automatically emit authenticated webhooks to the CI/CD server to initiate build runs.",
      tools: ["Git", "GitHub", "Webhooks", "SSH Keys"],
      terminalOutput: "[webhook-dispatch] Received push event: commit 8f921a4\n[webhook-dispatch] Triggering Jenkins downstream job: 'prod-deploy-pipeline'\n[security-check] Signed commit verified: Arsalan Qayum <arsalanqayum09@gmail.com>"
    },
    {
      id: 3,
      title: "3. Jenkins CI/CD Automation",
      summary: "Automated pipeline coordinator orchestrating checkout, dependency resolution, testing, and container builds.",
      details: "Jenkins agents execute multi-stage declarative pipelines defined in Jenkinsfiles. Environment variables, credential bindings, and role-based access control isolate pipeline secrets from the codebase.",
      tools: ["Jenkins", "Declarative Pipeline", "Linux Nodes", "Groovy"],
      terminalOutput: "[Pipeline] Start of Pipeline\n[Pipeline] node { Running on Linux-Node-01 }\n[Pipeline] stage ('SCM Checkout')\n > git checkout -f 8f921a4\n[Pipeline] stage ('Dependency Cache & Lint') -> SUCCESS"
    },
    {
      id: 4,
      title: "4. Automated Build & Test",
      summary: "Linting, static code analysis, unit tests, and integration assertions executed in isolated ephemeral workers.",
      details: "Automated test suites run against PRs and staging builds. If any unit, integration, or lint test fails, the build halts immediately and alerts the team, preventing broken code from reaching packaging.",
      tools: ["PyTest", "Jest", "FastAPI / Node.js", "Docker Engine"],
      terminalOutput: "[Pipeline] stage ('Run Test Suite')\nRunning tests: 42 passed, 0 failed, 0 errors\nCoverage report: 94.2% statements covered\n[Pipeline] Tests passed successfully in 18.4s"
    },
    {
      id: 5,
      title: "5. Docker Containerization",
      summary: "Multi-stage Docker builds producing slim, secure, reproducible production container images.",
      details: "Applications are packaged with multi-stage Dockerfiles to strip compile-time dependencies, minimize attack surface, and ensure identical runtime behavior between staging and production environments.",
      tools: ["Docker", "Docker Compose", "Multi-stage builds", "Docker CLI"],
      terminalOutput: "[Pipeline] stage ('Docker Build & Tag')\n$ docker build --target production -t app-service:v2.4.1 .\nStep 7/12 : RUN npm prune --production\n---> Image size optimized: 142MB (reduced from 780MB)\nSuccessfully tagged app-service:v2.4.1"
    },
    {
      id: 6,
      title: "6. Deployment Automation",
      summary: "Remote server deployment, blue/green or rolling container updates with automated zero-downtime execution.",
      details: "Deployment scripts connect securely over SSH using private keys. Containers are updated using Docker Compose or PM2 reload with rolling zero-downtime restarts and automated rollback fallback on failure.",
      tools: ["Docker Compose", "PM2", "SSH", "Bash", "AWS / Azure"],
      terminalOutput: "[Pipeline] stage ('Remote Host Deployment')\n$ ssh -i ~/.ssh/id_deploy deploy@prod-node-01 'cd /opt/app && docker-compose pull && docker-compose up -d --remove-orphans'\nContainer app-backend-01  Started (healthy)"
    },
    {
      id: 7,
      title: "7. Nginx / Apache Reverse Proxy",
      summary: "High-performance edge ingress managing SSL/TLS termination, HTTP/2, caching, and rate limiting.",
      details: "Nginx or Apache handles incoming traffic, enforces HTTPS with automated Certbot SSL renewals, terminates TLS, and securely proxies requests to internal application containers and PM2 ports.",
      tools: ["Nginx", "Apache", "Certbot SSL", "Reverse Proxy", "UFW"],
      terminalOutput: "[ingress-check] Testing Nginx configuration syntax:\nnginx: the configuration file /etc/nginx/nginx.conf syntax is ok\nnginx: configuration file /etc/nginx/nginx.conf test is successful\n[certbot] SSL certificate valid: Let's Encrypt Authority (90 days remaining)"
    },
    {
      id: 8,
      title: "8. Application Services & Databases",
      summary: "FastAPI, Node.js, and multi-service APIs paired with secure, backed-up MySQL, PostgreSQL, Redis, and MinIO.",
      details: "Applications run isolated with PM2 process clusters or Docker networks. Database connectivity uses pooled connections, persistent Docker volumes, automated cron backups, and Redis caching.",
      tools: ["Node.js (PM2)", "FastAPI", "PostgreSQL", "Redis", "Elasticsearch"],
      terminalOutput: "$ pm2 list\n┌─────┬────────────────┬─────────┬─────────┬────────┬────────┬──────────┐\n│ id  │ name           │ mode    │ status  │ cpu    │ mem    │ uptime   │\n├─────┼────────────────┼─────────┼─────────┼────────┼────────┼──────────┤\n│ 0   │ api-service    │ cluster │ online  │ 0.2%   │ 74 MB  │ 42d 18h  │\n│ 1   │ api-service    │ cluster │ online  │ 0.1%   │ 76 MB  │ 42d 18h  │\n└─────┴────────────────┴─────────┴─────────┴────────┴────────┴──────────┘"
    },
    {
      id: 9,
      title: "9. Prometheus, Grafana & Loki",
      summary: "Comprehensive observability stack monitoring system metrics, container health, and centralized log streams.",
      details: "Node Exporter and container endpoints feed CPU, memory, latency, and error rate metrics to Prometheus, visualized on Grafana dashboards. Application and proxy logs stream directly to Loki for fast querying.",
      tools: ["Prometheus", "Grafana", "Loki", "Node Exporter", "Alertmanager"],
      terminalOutput: "[prometheus-scrape] Target: 10.0.1.15:9100/metrics -> HTTP 200 OK (8ms)\n[loki-ingest] Processed 14,200 log entries/min from Nginx & Docker syslog\n[system-health] CPU: 18% | Memory: 4.2GB/16GB | Error Rate: 0.002% (Nominal)"
    }
  ];

  function initArchStepper() {
    const stepNodes = document.querySelectorAll('.step-node');
    const detailBox = document.getElementById('arch-detail-content');
    if (!stepNodes.length || !detailBox) return;

    function renderStep(id) {
      const step = archStepsData.find(s => s.id === id);
      if (!step) return;

      stepNodes.forEach(node => {
        if (parseInt(node.getAttribute('data-step')) === id) {
          node.classList.add('active');
        } else {
          node.classList.remove('active');
        }
      });

      detailBox.innerHTML = `
        <div class="detail-info">
          <h4>${step.title}</h4>
          <p class="detail-summary" style="color: #38bdf8; font-weight: 500; margin-bottom: 8px;">${step.summary}</p>
          <p>${step.details}</p>
          <div class="detail-tools">
            <span class="detail-tools-label">Key Stack:</span>
            ${step.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
          </div>
        </div>
        <div class="detail-terminal-preview">
          <div class="terminal-header-line">devops-pipeline-inspector // STAGE_${step.id}_STREAM</div>
          <pre><code>${step.terminalOutput}</code></pre>
        </div>
      `;
    }

    stepNodes.forEach(node => {
      node.addEventListener('click', function () {
        const stepId = parseInt(this.getAttribute('data-step'));
        renderStep(stepId);
      });
    });

    // Default to step 3 (Jenkins CI/CD) or 1
    renderStep(3);
  }

  /* ==========================================================================
     2. CI/CD Pipeline Simulator
     ========================================================================== */
  const cicdStages = [
    { id: 'git', name: 'Git Push', log: '[git] Incoming commit 8f921a4 on main branch. Webhook sent to Jenkins.' },
    { id: 'jenkins', name: 'Jenkins Trigger', log: '[jenkins] Polling triggered. Agent Linux-Worker-01 assigned to job #142.' },
    { id: 'checkout', name: 'Checkout', log: '[checkout] Cloned repository arsalan/cloud-platform at commit 8f921a4 in 1.4s.' },
    { id: 'build', name: 'Build Code', log: '[build] Resolved dependencies. Compiling production bundle (Vite/Node)... Done.' },
    { id: 'test', name: 'Unit & Lint Tests', log: '[test] Ran 68 unit & integration test suites. 0 failures. Coverage 94.8%.' },
    { id: 'docker', name: 'Docker Build', log: '[docker] Built multi-stage Docker image app-service:v2.4.1 (138MB). Layer cached.' },
    { id: 'deploy', name: 'Deploy to Cloud', log: '[deploy] SSH to remote host. Executed docker-compose up -d. Container healthy.' },
    { id: 'health', name: 'Health Check', log: '[health] GET /api/v1/health -> HTTP 200 OK (4ms). Nginx proxy traffic routing.' },
    { id: 'monitor', name: 'Prometheus & Loki', log: '[monitor] Prometheus scraped metrics. Loki registered container logs. NOMINAL.' }
  ];

  let isSimulating = false;

  function initCicdSimulator() {
    const runBtn = document.getElementById('btn-run-simulation');
    const logBox = document.getElementById('cicd-log-output');
    const statusText = document.getElementById('cicd-status-text');
    const stageCards = document.querySelectorAll('.cicd-stage-card');

    if (!runBtn || !logBox || !statusText) return;

    function appendLog(msg, type = 'info') {
      const now = new Date().toTimeString().split(' ')[0];
      const div = document.createElement('div');
      div.className = 'log-line';
      div.innerHTML = `<span class="log-timestamp">[${now}]</span> <span class="log-msg-${type}">${msg}</span>`;
      logBox.appendChild(div);
      logBox.scrollTop = logBox.scrollHeight;
    }

    function resetPipeline() {
      stageCards.forEach(c => {
        c.classList.remove('status-running', 'status-success');
      });
      logBox.innerHTML = '';
      statusText.innerHTML = '<span class="status-dot"></span> Pipeline Ready';
      statusText.style.color = '#38bdf8';
    }

    async function runPipeline() {
      if (isSimulating) return;
      isSimulating = true;
      runBtn.setAttribute('disabled', 'true');
      runBtn.innerText = 'Pipeline Running...';

      resetPipeline();
      appendLog('=== INITIATING AUTOMATED DEVOPS CI/CD PIPELINE ===', 'info');
      statusText.innerHTML = '<span class="status-dot" style="background: #06b6d4;"></span> Executing Pipeline...';
      statusText.style.color = '#06b6d4';

      for (let i = 0; i < stageCards.length; i++) {
        const card = stageCards[i];
        const stageData = cicdStages[i];

        card.classList.add('status-running');
        appendLog(`[Stage ${i + 1}/${stageCards.length}] Processing: ${stageData.name}...`, 'info');

        await new Promise(res => setTimeout(res, 650));

        appendLog(stageData.log, 'success');
        card.classList.remove('status-running');
        card.classList.add('status-success');

        await new Promise(res => setTimeout(res, 200));
      }

      appendLog('✓ ALL CI/CD STAGES PASSED. PRODUCTION DEPLOYMENT ACTIVE & OBSERVABLE.', 'success');
      statusText.innerHTML = '<span class="status-dot"></span> Deployment Succeeded (100% Nominal)';
      statusText.style.color = '#34d399';

      runBtn.removeAttribute('disabled');
      runBtn.innerText = 'Re-Run Pipeline Simulation';
      isSimulating = false;
    }

    runBtn.addEventListener('click', runPipeline);

    // Clicking individual stage cards shows its log
    stageCards.forEach((card, idx) => {
      card.addEventListener('click', () => {
        if (isSimulating) return;
        const stageData = cicdStages[idx];
        appendLog(`[Manual Inspection - Stage ${idx + 1}] ${stageData.name}: ${stageData.log}`, 'info');
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initArchStepper();
    initCicdSimulator();
  });
})();
