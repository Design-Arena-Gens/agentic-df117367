export const metadata = {
  title: "Scalable Business Plan Generator",
  description: "Generate a high-value, scalable, low-competition business model plan",
};

import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="header">
            <h1>Scalable Business Plan Generator</h1>
            <p>Create a beginner-friendly, high-leverage plan in minutes.</p>
          </header>
          <main>{children}</main>
          <footer className="footer">Built for fast execution and scale.</footer>
        </div>
      </body>
    </html>
  );
}
