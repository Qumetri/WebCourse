let closures = [];

for (var i = 0; i < 3; i++) {
    closures.push(() => i);
}
closures.forEach((element) =>{
    console.log(element());
});