let words = "beever";

// Buatlah skema logika untuk memuat kata diatas menjadi berbentuk seperti berikut : 
// b
// be
// bee
// beev
// beeve
// beever

for (let i = 0; i < words.length; i++) {
  let temp = "";
  for (let j = 0; j <= i; j++) {
    temp += words[j];
  }
  console.log(temp);
}