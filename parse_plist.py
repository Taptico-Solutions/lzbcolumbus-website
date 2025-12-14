import plistlib
import sys

def parse_plist(path):
    try:
        with open(path, 'rb') as f:
            pl = plistlib.load(f)
            print(f"--- Content of {path} ---")
            # Print keys to understand structure
            print(f"Keys: {list(pl.keys())}")
            # Try to find text content
            if 'public.utf8-plain-text' in pl:
                print(f"Text content: {pl['public.utf8-plain-text']}")
            elif 'string' in pl:
                 print(f"String content: {pl['string']}")
            else:
                print("No obvious text content found. Structure:")
                print(pl)
    except Exception as e:
        print(f"Error parsing {path}: {e}")

if __name__ == "__main__":
    for arg in sys.argv[1:]:
        parse_plist(arg)
