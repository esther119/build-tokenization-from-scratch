const nonEnglish = `#Play(a)
text = 'HA 我是可憐的失業仔 👋 (nice meeting you!)' 
for char in text:
  unicode_encoded =  str(char.encode('utf-8'))
  print(f" {char} \u2192 {unicode_encoded}")

#Play(b)
unicode_encoded_list = text.encode('utf-8')
#TODO: convert to byte sequences
`;

const unicodeConversion = `# Unicode Conversion (UTF-8 encoding)
# TODO: add your encoding code

# Decode the Unicode (UTF-8) back to string
unicode_decoded = unicode_encoded.decode('utf-8')
print("Decoded Unicode:", unicode_decoded)

# ASCII Conversion
# ASCII is valid from 0 - 255
ascii_values = [ord(char) for char in text if ord(char)<256]
print("ASCII Values:", ascii_values)

# To demonstrate the conversion back from ASCII values to characters
ascii_chars = [chr(value) for value in ascii_values]
print("Decoded ASCII:", ''.join(ascii_chars))
`;

const getPair = `text = "Ｕｎｉｃｏｄｅ! 🅤🅝🅘🅒🅞🅓🅔‽ 🇺‌🇳‌🇮‌🇨‌🇴‌🇩‌🇪! 😄 The very name strikes fear and awe into the hearts of programmers worldwide. We all know we ought to “support Unicode” in our software (whatever that means—like using wchar_t for all the strings, right?). But Unicode can be abstruse, and diving into the thousand-page Unicode Standard plus its dozens of supplementary annexes, reports, and notes can be more than a little intimidating. I don’t blame programmers for still finding the whole thing mysterious, even 30 years after Unicode’s inception."
tokens = text.encode("utf-8") # raw bytes
tokens = list(map(int, tokens)) # convert to a list of integers in range 0..255 for convenience

def pair_frequency(ids):
  """
  Parameters:
  - ids (list): A list of identifiers (can be any hashable type) from which to calculate 
                consecutive pair frequencies.

  Returns:
  - dict: A dictionary with tuples of consecutive elements as keys and their frequencies as values.

  Example:
  >>> pair_frequency(['a', 'b', 'c', 'a', 'b'])
  {('a', 'b'): 2, ('b', 'c'): 1, ('c', 'a'): 1}
  """
  counts = {}
  #TODO
  return counts

stats = pair_frequency(tokens)
print(stats)  

`;

const getPairAns = `text = "Ｕｎｉｃｏｄｅ! 🅤🅝🅘🅒🅞🅓🅔‽ 🇺‌🇳‌🇮‌🇨‌🇴‌🇩‌🇪! 😄 The very name strikes fear and awe into the hearts of programmers worldwide. We all know we ought to “support Unicode” in our software (whatever that means—like using wchar_t for all the strings, right?). But Unicode can be abstruse, and diving into the thousand-page Unicode Standard plus its dozens of supplementary annexes, reports, and notes can be more than a little intimidating. I don’t blame programmers for still finding the whole thing mysterious, even 30 years after Unicode’s inception."
tokens = text.encode("utf-8") # raw bytes
tokens = list(map(int, tokens)) # convert to a list of integers in range 0..255 for convenience

def pair_frequency(ids):
  """
  Parameters:
  - ids (list): A list of identifiers (can be any hashable type) from which to calculate 
                consecutive pair frequencies.

  Returns:
  - dict: A dictionary with tuples of consecutive elements as keys and their frequencies as values.

  Example:
  >>> pair_frequency(['a', 'b', 'c', 'a', 'b'])
  {('a', 'b'): 2, ('b', 'c'): 1, ('c', 'a'): 1}
  """
  #TODO
  counts = {}
  for pair in zip(ids, ids[1:]): # Pythonic way to iterate consecutive elements
    counts[pair] = counts.get(pair, 0) + 1
  return counts

stats = pair_frequency(tokens)
print(stats)  

`;

const download = `import requests

# Replace this URL with the URL of the raw Gist content you want to fetch
gist_url = 'https://gist.githubusercontent.com/esther119/1b180174e81269475cece6ad05ade8df/raw/e43fdcc09ecc6b490b7f06667ad2bd677a28490a/unicodetext.txt'

# Use requests to get the content of the Gist
response = requests.get(gist_url)

# Check if the request was successful
if response.status_code == 200:
    # Print the content of the Gist
    print(response.text)
else:
    print("Failed to fetch the Gist content.")`;

const UTF = `# text from https://www.reedbeta.com/blog/programmers-intro-to-unicode/
text = "Ｕｎｉｃｏｄｅ! 🅤🅝🅘🅒🅞🅓🅔‽ 🇺‌🇳‌🇮‌🇨‌🇴‌🇩‌🇪! 😄 The very name strikes fear and awe into the hearts of programmers worldwide. We all know we ought to “support Unicode” in our software (whatever that means—like using wchar_t for all the strings, right?). But Unicode can be abstruse, and diving into the thousand-page Unicode Standard plus its dozens of supplementary annexes, reports, and notes can be more than a little intimidating. I don’t blame programmers for still finding the whole thing mysterious, even 30 years after Unicode’s inception."
print('---')
print(text)
print("length:", len(text))
tokens = text.encode("utf-8") # raw bytes
tokens = list(map(int, tokens)) # convert to a list of integers in range 0..255 for convenience
print('---')
print(tokens)
print("length:", len(tokens))
`;
export { nonEnglish, unicodeConversion, getPair, download, UTF, getPairAns };
