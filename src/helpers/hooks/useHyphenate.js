export default function useHyphenate(vowels, consonants) {
  const any = '[\\w]';
  const shy = '\xAD';
  const vowel = `[${vowels}]`;
  const consonant = `[${consonants}]`;

  const rules = [
    new RegExp(`(${any}${vowel})(${any}${any})`, 'ig'),
    new RegExp(`(${any}${vowel})(${consonant}${vowel}${any})`, 'ig'),
    new RegExp(`(${any}${vowel}${consonant})(${vowel}${any})`, 'ig'),
    new RegExp(`(${vowel}${consonant})(${consonant}${vowel})`, 'ig'),
  ];

  return (text) => {
    let newText = text;
    rules.forEach((rule) => (newText = newText.replace(rule, `$1${shy}$2`)));
    return newText;
  };
}
