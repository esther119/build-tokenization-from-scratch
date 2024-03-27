text = 'reduces the length of the text, we can apply it on our sequence of tokens too. The context length defines how much information the model can consider at any one time. For the same context length, if one contain little information, LLM has less "content" fits into a given context length. So of course, an effective tokenization method is to efficiently pack more meaningful information into the same number of t'
org_tokens = text.encode("utf-8") # raw bytes
org_tokens = list(map(int, org_tokens)) 


def get_stats(ids):
    counts = {}
    for pair in zip(ids, ids[1:]):
        counts[pair] = counts.get(pair, 0) + 1
    return counts

pairs = get_stats(org_tokens)
max_pair = max(pairs, key=pairs.get)
print(pairs)
pairs[max_pair]