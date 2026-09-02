import socket
import threading
import sys

class SimpleSMTPServer:
    def __init__(self, host='127.0.0.1', port=1025):
        self.host = host
        self.port = port
        self.sock = None
        self.running = False

    def start(self):
        try:
            self.sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            self.sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            self.sock.bind((self.host, self.port))
            self.sock.listen(5)
            self.running = True
            print(f"[SMTP] Local SMTP Server listener running on {self.host}:{self.port}")
            
            while self.running:
                try:
                    conn, addr = self.sock.accept()
                    threading.Thread(target=self._handle_client, args=(conn,), daemon=True).start()
                except Exception:
                    if not self.running:
                        break
        except Exception as e:
            print(f"[SMTP] Could not start SMTP server on {self.host}:{self.port}: {e}")

    def _handle_client(self, conn):
        try:
            conn.settimeout(15)
            conn.sendall(b"220 sotss.gimpa.edu.gh ESMTP Service Ready\r\n")
            data_mode = False
            buffer = ""
            while True:
                data = conn.recv(2048)
                if not data:
                    break
                text = data.decode('utf-8', errors='ignore')
                buffer += text
                
                if data_mode:
                    if "\r\n.\r\n" in buffer or buffer.endswith("\r\n.") or buffer == ".\r\n" or "\n.\n" in buffer:
                        conn.sendall(b"250 2.0.0 Ok: queued\r\n")
                        data_mode = False
                        buffer = ""
                else:
                    while "\n" in buffer:
                        line, buffer = buffer.split("\n", 1)
                        cmd = line.strip().upper()
                        if not cmd:
                            continue
                        if cmd.startswith("HELO") or cmd.startswith("EHLO"):
                            conn.sendall(b"250-sotss.gimpa.edu.gh\r\n250-SIZE 10485760\r\n250 OK\r\n")
                        elif cmd.startswith("MAIL FROM"):
                            conn.sendall(b"250 2.1.0 Ok\r\n")
                        elif cmd.startswith("RCPT TO"):
                            conn.sendall(b"250 2.1.5 Ok\r\n")
                        elif cmd == "DATA":
                            data_mode = True
                            conn.sendall(b"354 End data with <CR><LF>.<CR><LF>\r\n")
                            break
                        elif cmd == "QUIT":
                            conn.sendall(b"221 2.0.0 Bye\r\n")
                            return
                        elif cmd.startswith("STARTTLS"):
                            conn.sendall(b"502 5.5.1 TLS not supported\r\n")
                        elif cmd == "RSET" or cmd == "NOOP":
                            conn.sendall(b"250 2.0.0 OK\r\n")
                        else:
                            conn.sendall(b"250 OK\r\n")
        except Exception:
            pass
        finally:
            try:
                conn.close()
            except Exception:
                pass

def start_smtp_server_background(host='127.0.0.1', port=1025):
    srv = SimpleSMTPServer(host, port)
    t = threading.Thread(target=srv.start, daemon=True)
    t.start()
    return srv

if __name__ == "__main__":
    srv = SimpleSMTPServer()
    srv.start()

