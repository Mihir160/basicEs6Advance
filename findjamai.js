const polpain =[
    {name: 'abul', job: 'sorkari', salary: 17000},
    {name: 'bbul', job: 'besorkari', salary: 25000},
    {name: 'kabul', job: 'sorkari', salary: 21000},
    {name: 'habul', job: 'besorkari', salary: 47000},
    {name: 'jabul', job: 'sorkari', salary: 23000},
    {name: 'mabul', job: 'besorkari', salary: 55000},
]

const selected = polpain.filter(pola => pola.job === 'sorkari' && pola.salary >=20000 || pola.job === 'besorkari' && pola.salary >= 40000);
console.log(selected);

selected.map(vaggoban => {
    console.log(vaggoban.name);
})