function commonPrefix(sent) {
  let prefix = "";
  if (sent.length === 0) return prefix;
  for (let i = 0; i < sent[0].length; i++) {
    let character = sent[0][i];
    for (let j = 0; j < sent.length; j++) {
      if (sent[j][i] !== character) return prefix;
    }
    prefix = prefix + character;
  }
  return prefix;
}

console.log(commonPrefix(["flower", "flour", "flat", "floor"]));

module.exports = commonPrefix;
