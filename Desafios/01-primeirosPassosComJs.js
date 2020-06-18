const name = "Carlos"
const wight = 84
const height = 1.88

imc = (wight, height)  => Math.round((wight / Math.sqrt(height)))


if (imc(wight,height) > 30) {
    console.log(`${name} você está acima do peso`)
}else console.log(`${name} você não está está acima do peso`)


const name2 = 'Silvana'
const gender = 'F'
const age = 48
const timeContribution = 23

if(gender == 'F' && ((timeContribution+age) > 85) && (timeContribution > 30)) {
      console.log(`${name} você pode se aposentar`)  
    } else console.log(`${name2} você não pode se aposentar`)
if(gender == 'M' && ((timeContribution+age) > 95) && (timeContribution > 35)) {
    console.log(`${name2} você pode se aposentar`)
} else console.log(`${name2} você não pode se aposentar`)