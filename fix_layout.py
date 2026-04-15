import os

directory = './'
files = [f for f in os.listdir(directory) if f.endswith('.html')]

for f in files:
    filepath = os.path.join(directory, f)
    with open(filepath, 'r', encoding='utf-8') as file:
        content = file.read()

    # Add flex layout to body for sticky footer if not present
    if 'flex flex-col min-h-screen' not in content and 'flex flex-col min-h-[100dvh]' not in content:
        content = content.replace('<body class="bg-background text-on-surface">', '<body class="bg-background text-on-surface flex flex-col min-h-[100dvh]">')
        content = content.replace('<body class="bg-surface text-on-surface">', '<body class="bg-surface text-on-surface flex flex-col min-h-[100dvh]">')

    # Add mt-auto to footer to push it to bottom
    if '<footer class="w-full py-12 px-6 md:px-12 border-t border-stone-200 dark:border-zinc-800 bg-stone-50 dark:bg-zinc-950">' in content:
        content = content.replace(
            '<footer class="w-full py-12 px-6 md:px-12 border-t border-stone-200 dark:border-zinc-800 bg-stone-50 dark:bg-zinc-950">',
            '<footer class="w-full py-12 px-6 md:px-12 border-t border-stone-200 dark:border-zinc-800 bg-stone-50 dark:bg-zinc-950 mt-auto">'
        )
    
    with open(filepath, 'w', encoding='utf-8') as file:
        file.write(content)
    print(f"Fixed sticky footer for {f}")
