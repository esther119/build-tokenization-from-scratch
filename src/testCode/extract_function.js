const codeBlock = `text = "Ｕｎｉｃｏｄｅ! 🅤🅝🅘🅒🅞🅓🅔‽ 🇺‌🇳‌🇮‌🇨‌🇴‌🇩‌🇪! 😄 The very name strikes fear and awe into the hearts of programmers worldwide. We all know we ought to “support Unicode” in our software (whatever that means—like using wchar_t for all the strings, right?). But Unicode can be abstruse, and diving into the thousand-page Unicode Standard plus its dozens of supplementary annexes, reports, and notes can be more than a little intimidating. I don’t blame programmers for still finding the whole thing mysterious, even 30 years after Unicode’s inception."
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

stats = pair_frequency([1,2,3])
print(stats)`;

const functionRegex = /def\s+pair_frequency\([^)]*\)\s*{[\s\S]*?^\}/m;
const functionMatch = codeBlock.match(functionRegex);

if (functionMatch) {
  console.log("Function Extracted:\n", functionMatch[0]);
} else {
  console.log("Function not found.");
}
