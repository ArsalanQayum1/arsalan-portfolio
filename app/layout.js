import './globals.css';
import '../css/components.css';
import '../css/responsive.css';

export const metadata = {
  title: 'Arsalan Qayum | DevOps & Cloud Architect',
  description: 'Production portfolio of Arsalan Qayum - DevOps & Cloud Engineer specializing in AWS, Azure, Linux, Docker, Jenkins CI/CD, Prometheus, Grafana, Loki, and production infrastructure.',
  keywords: 'Arsalan Qayum, DevOps Engineer, Cloud Architect, AWS, Azure, Docker, Linux, Jenkins, Prometheus, Grafana, Loki, Proxmox',
  openGraph: {
    title: 'Arsalan Qayum | DevOps & Cloud Architect',
    description: 'Automating Infrastructure. Accelerating Deployments. Building Reliable Systems.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <canvas id="network-canvas" aria-hidden="true"></canvas>
        <div className="bg-grid-pattern" aria-hidden="true"></div>
        <div className="app-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
