import os

directory = "/Users/atharvalepse/Documents/Luxora"
html_files = [f for f in os.listdir(directory) if f.endswith(".html")]

replacements = {
    "+1 (800) LUXORA": "+1 (919) 949-0131",
    "+1(800)LUXORA": "+1(919)9490131",
    "tel:+1800LUXORA": "tel:+19199490131",
    "tel:1800LUXORA": "tel:19199490131",
    "+1 (984) 374-9646": "+1 (919) 949-0131",
    "+1(984)3749646": "+1(919)9490131",
    "tel:+19843749646": "tel:+19199490131",
}

for file in html_files:
    filepath = os.path.join(directory, file)
    with open(filepath, "r") as f:
        content = f.read()

    original_content = content
    for old_str, new_str in replacements.items():
        content = content.replace(old_str, new_str)

    if content != original_content:
        with open(filepath, "w") as f:
            f.write(content)
        print(f"Updated phone number in {file}")

print("Done updating phone numbers.")
