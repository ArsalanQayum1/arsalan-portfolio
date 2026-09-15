import './globals.css';

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
