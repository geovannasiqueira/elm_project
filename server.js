const server = Bun.serve({
  port: 3002,
  async fetch(req) {
    const url = new URL(req.url);
    
    if (url.pathname === "/") {
      return new Response(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Elm Counter</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap">
            <style>
              :root {
                --primary: #6366f1;
                --primary-hover: #4f46e5;
                --text: #1f2937;
                --text-light: #6b7280;
                --background: #f3f4f6;
                --card: #ffffff;
                --shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
                --shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
              }
              
              * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
              }
              
              body {
                font-family: 'Inter', system-ui, -apple-system, sans-serif;
                background: linear-gradient(135deg, #f9fafb 0%, #e5e7eb 100%);
                color: var(--text);
                min-height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all 0.3s ease;
              }
              
              #elm {
                width: 100%;
                max-width: 400px;
              }
              
              .counter-app {
                background: var(--card);
                padding: 2.5rem;
                border-radius: 1.5rem;
                box-shadow: var(--shadow);
                text-align: center;
                display: flex;
                flex-direction: column;
                gap: 2rem;
              }
              
              .title {
                font-size: 2rem;
                font-weight: 700;
                color: var(--text);
                margin-bottom: 0.5rem;
                letter-spacing: -0.025em;
              }
              
              .counter-controls {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1.5rem;
              }
              
              .counter-value {
                font-size: 4.5rem;
                font-weight: 700;
                color: var(--primary);
                min-width: 6rem;
                text-shadow: 2px 2px 4px rgba(99, 102, 241, 0.2);
              }
              
              .btn {
                background: var(--primary);
                color: white;
                border: none;
                border-radius: 1rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s ease;
                box-shadow: var(--shadow-sm);
              }
              
              .btn:hover {
                background: var(--primary-hover);
                transform: translateY(-3px);
                box-shadow: 0 6px 15px rgba(99, 102, 241, 0.4);
              }
              
              .btn:active {
                transform: translateY(-1px);
              }
              
              .decrement, .increment {
                width: 4rem;
                height: 4rem;
                font-size: 2rem;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 1rem;
              }
              
              .reset {
                background: #f8fafc;
                color: var(--text);
                padding: 1rem 2rem;
                font-size: 1.125rem;
                border: 1px solid #e2e8f0;
                margin-top: 0.5rem;
                width: 100%;
              }
              
              .reset:hover {
                background: #f1f5f9;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
              }
              
              @media (max-width: 640px) {
                .counter-app {
                  padding: 2rem 1.5rem;
                }
                
                .title {
                  font-size: 1.75rem;
                }
                
                .counter-value {
                  font-size: 3.5rem;
                }
              }
            </style>
          </head>
          <body>
            <div id="elm"></div>
            <script src="/index.js"></script>
            <script>
              var app = Elm.Main.init({
                node: document.getElementById('elm')
              });
            </script>
          </body>
        </html>
      `, {
        headers: {
          "Content-Type": "text/html",
        },
      });
    }

    if (url.pathname === "/index.js") {
      const file = Bun.file("dist/index.js");
      return new Response(file);
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Server running at http://localhost:${server.port}`); 