#!/usr/bin/env python3
"""Junta index.html + style.css + los .js en UN solo archivo (dist/SM_GORE_SUPER_ARSENAL.html) listo para itch.io."""
import re, os
base = os.path.dirname(os.path.abspath(__file__))
html = open(os.path.join(base, 'index.html'), encoding='utf-8').read()
rd = lambda p: open(os.path.join(base, p), encoding='utf-8').read().rstrip('\n')
html = re.sub(r'<link rel="stylesheet" href="([\w.\-]+\.css)">', lambda m: '<style>\n' + rd(m.group(1)) + '\n</style>', html)
html = re.sub(r'<script src="([\w.\-]+\.js)"></script>', lambda m: '<script>\n' + rd(m.group(1)) + '\n</script>', html)
os.makedirs(os.path.join(base, 'dist'), exist_ok=True)
open(os.path.join(base, 'dist', 'SM_GORE_SUPER_ARSENAL.html'), 'w', encoding='utf-8', newline='').write(html)
print('OK -> dist/SM_GORE_SUPER_ARSENAL.html')
