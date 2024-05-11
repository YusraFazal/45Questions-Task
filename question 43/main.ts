function make_great(magicians: string[]): {original: string, great: string}[] {
  let greatMagicians = [];
  magicians.forEach(magician => {
    greatMagicians.push( {original: magician, great: `${magician} the great`} );
  });
  return greatMagicians;
}

let greatMagicians = make_great(magicians.slice());
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
greatMagicians.forEach(magician => {
  console.log(magician.great);
});