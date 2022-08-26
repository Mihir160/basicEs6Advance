const students = [
    {name: 'mehedy', email:'mehedy@gmail.com', avg: 56, fiftyPercent:true},
    {name: 'rokib', email:'rokib@gmail.com', avg: 57, fiftyPercent:false},
    {name: 'sakib', email:'sakib@gmail.com', avg: 42, fiftyPercent:false},
    {name: 'sojib', email:'sojib@gmail.com', avg: 52, fiftyPercent:true},
    {name: 'sunny', email:'sunny@gmail.com', avg: 32, fiftyPercent:false},
    {name: 'saki', email:'saki@gmail.com', avg: 50, fiftyPercent:true},
    {name: 'jackia', email:'jakia@gmail.com', avg: 58, fiftyPercent:true}
]

const result = students.filter(student => student.avg >=50 && student.fiftyPercent === true);
// console.log(result);

result.map(odhom =>{
    const {name, email} = odhom;
    console.log(`name ${name}. email ${email}`);
})