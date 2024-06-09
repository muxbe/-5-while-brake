let i = 10;
while (i <= 20) {
  if (i == 18) break;

  console.log(`${i} " naklebia 20ze"`);
  i++;
}
const autos = ["mersedec", "bmw", "audi", "shkoda"];
for (let auto of autos) {
  if (auto == "bmw") continue;
  if (auto == "audi") continue;
  console.log(auto);
}
for (let auto of autos) {
  if (auto == "bmw") break;
  console.log(auto);
}
autos.forEach((car, index, arrey) => {
  console.log(`marka is: ${car} index is:${index},from:${arrey}`);
});
autos.forEach((car) => console.log(car));
autos.forEach(function (car, index, arrey) {
  console.log(car, index);
});
