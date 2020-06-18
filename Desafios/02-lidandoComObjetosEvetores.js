const Rocketseat = {
    collor: 'purple',
    focus: 'Programming',
    adderes: {
        street: 'Rua Guilherme Gembala',
        number: 260
    } 
}

const usuario = {
    name: 'Diego',
    company: {
        nname: 'Rocketseat'
    }
}

console.log(`The company ${usuario.company.name} is located at ${Rocketseat.adderes.street}, ${Rocketseat.adderes.number}`)

const Professionals = {
    Name: 'Carlos',
    age: 32,
    Tech: [
    { name: 'C++', specialty: 'Desktop'},
    ]
}

nameTech = (Tech) => Tech.name
specialtyTech = (Tech) => Tech.specialty

const NameOfTech = Professionals.Tech.map(nameTech)
const specialtyofTech = Professionals.Tech.map(specialtyTech)
console.log(`The user ${Professionals.Name} have ${Professionals.age} years old and use the Tech ${NameOfTech} specialty ${specialtyofTech}`)