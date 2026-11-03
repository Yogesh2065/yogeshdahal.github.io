"""
server.py — Quick local server for the portfolio.

Usage:
    python server.py

Then open:  http://localhost:8000

NOTE: Python's built-in server cannot run PHP.
      The form will fall back to mailto: in local testing.
      For PHP testing, use:  php -S localhost:8000
"""

import http.server
import socketserver
import webbrowser
import os

PORT = 8000

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Prevent browser caching so edits show up immediately
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

def main():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        url = f"http://localhost:{PORT}"
        print(f"✅  Portfolio running at {url}")
        print("    Press Ctrl+C to stop.\n")
        try:
            webbrowser.open(url)
        except Exception:
            pass
        httpd.serve_forever()

if __name__ == "__main__":
    main()