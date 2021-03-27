#!/bin/python3

import http.server
import socketserver

PORT = 8080
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("127.0.0.1", PORT), Handler) as httpd:
    try:
        print("serving at port", PORT)
        httpd.serve_forever()
    except KeyboardInterrupt:
        httpd.socketserver()
        exit("stopping..")
    except:
        httpd.socketserver()
