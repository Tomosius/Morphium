import os
import webview

def main():
    index_path = os.path.join(
        os.path.dirname(__file__),
        'frontend', 'out', 'index.html'
    )
    url = f'file://{index_path}'
    webview.create_window('My App', url)
    webview.start()

if __name__ == '__main__':
    main()