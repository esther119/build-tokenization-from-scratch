const initialCode = `
text = 'HA 我是可憐的失業仔 👋 (nice meeting you!)' #"Ha 我是可憐的失業仔 👋 (nice meeting you!)"
for substring in text:
  print(f'{substring}' + '  ️->  ' + str(substring.encode('utf-8') ))

# Unicode Conversion (UTF-8 encoding)
# In Python 3, strings are Unicode, but you can encode to UTF-8 or other encodings
# unicode_encoded = text.encode('utf-8')
# print("Unicode (UTF-8) Encoded:", unicode_encoded)
# print("Unicode (UTF-8) Byte values:", list(unicode_encoded))

# Decode the Unicode (UTF-8) back to string
# unicode_decoded = unicode_encoded.decode('utf-8')
# print("Decoded Unicode String:", unicode_decoded)

# ASCII Conversion
# Not all characters may be representable in ASCII, this will only show those that are
# ascii_values = [ord(char) for char in text if ord(char) < 128]
# print("ASCII Values:", ascii_values)

# To demonstrate the conversion back from ASCII values to characters
# ascii_chars = [chr(value) for value in ascii_values]
# print("ASCII Characters:", ''.join(ascii_chars))

`;
const initialCode2 = `
#text = "Ha 我是可憐的失業仔 👋 (nice meeting you!)"

# Unicode Conversion (UTF-8 encoding)
# In Python 3, strings are Unicode, but you can encode to UTF-8 or other encodings
unicode_encoded = text.encode('utf-8')
print("Unicode (UTF-8) Encoded:", unicode_encoded)
print("Unicode (UTF-8) Byte values:", list(unicode_encoded))

# Decode the Unicode (UTF-8) back to string
unicode_decoded = unicode_encoded.decode('utf-8')
print("Decoded Unicode String:", unicode_decoded)

# ASCII Conversion
# Not all characters may be representable in ASCII, this will only show those that are
ascii_values = [ord(char) for char in text if ord(char) < 128]
print("ASCII Values:", ascii_values)

# To demonstrate the conversion back from ASCII values to characters
ascii_chars = [chr(value) for value in ascii_values]
print("ASCII Characters:", ''.join(ascii_chars))
`;

export default initialCode;
