#!/bin/python3

import http.server
import socketserver

PORT = 5500
HOST = "127.0.0.1"
Handler = http.server.SimpleHTTPRequestHandler

try:
    with socketserver.TCPServer((HOST, PORT), Handler) as httpd:
        try:
            print(f"serving at {HOST}:{PORT}")
            httpd.serve_forever()
        except KeyboardInterrupt:
            httpd.shutdown()
            exit("\nclosing dev server...")
        except Exception as e:
            httpd.shutdown()
            exit("e")

    httpd.shutdown()
except Exception as e:
    print(e)

