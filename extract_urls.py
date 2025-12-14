import re
import sys

def extract_urls(text):
    # Regex to find URLs starting with http/https
    url_pattern = r'https?://[^\s\'"<>]+'
    urls = re.findall(url_pattern, text)
    return urls

if __name__ == "__main__":
    # Read from stdin
    content = sys.stdin.read()
    urls = extract_urls(content)
    
    print("Found URLs:")
    for url in urls:
        # Clean up trailing characters that might be part of the plist format
        clean_url = url.split("'")[0].split('"')[0].split('}')[0]
        print(clean_url)
