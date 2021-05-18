//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
  let rna = [];
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === 'T') {
      rna.push('U');
    } else {
      rna.push(dna[i]);
    }
  }
  return rna.join('');
}
