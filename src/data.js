const nonEnglish = `#Play(a)
text = 'HA 我是可憐的失業仔 👋 (nice meeting you!)' 
for char in text:
  unicode_encoded =  str(char.encode('utf-8'))
  print(f" {char} \u2192 {unicode_encoded}")
`;

const unicodeConversion = `# Unicode Conversion (UTF-8 encoding)
# TODO: add your encoding code

# Decode the Unicode (UTF-8) back to string
unicode_decoded = unicode_encoded.decode('utf-8')
print("Decoded Unicode String:", unicode_decoded)

# ASCII Conversion
# ASCII is valid from 0 - 255
ascii_values = [ord(char) for char in text if ord(char)<256]
print("ASCII Values:", ascii_values)

# To demonstrate the conversion back from ASCII values to characters
ascii_chars = [chr(value) for value in ascii_values]
print("ASCII Characters:", ''.join(ascii_chars))
`;

export { nonEnglish, unicodeConversion };
