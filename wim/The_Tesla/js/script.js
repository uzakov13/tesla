// axios url i td
let url = 'http://localhost:3001/tesla'
function restart() {
    axios.get(url)
    .then(result => {
        res = result.data
        reload(res)
    })
    .catch(err => console.log(err))
}
restart()

    
function reload(arr) {
        for(let item of arr){
        let kond = document.querySelector('.kond')
        let version = document.querySelector('.version')
        let zapas = document.querySelector('.zapas')
        let speed = document.querySelector('.speed')
        let price = document.querySelector('.price')
        let temp = document.querySelector('.temp')
        let disk = document.querySelector('.disk')
        
        zapas.innerHTML = item.zapas
        price.innerHTML = '$' + item.price + ' 990'
        speed.innerHTML = item.speed + ' км/ч'
        temp.innerHTML = item.temp + '°'
        disk.innerHTML = item.wheel
        
        // Кондиционер
        kond.onclick = () => {
            if(zapas.innerHTML == '750км'){
                setTimeout(() => {
                    zapas.innerHTML = '745км'
                }, 200);
            }else if(zapas.innerHTML == '745км'){
                setTimeout(() => {
                    zapas.innerHTML = '750км'
                }, 200);
            }
        }
        // Версия Long Range
        version.onclick = () => {
            if(price.innerHTML == '$89 990'){
                price.innerHTML = '$99 000'
            }else {
                price.innerHTML = '$' + item.price + ' 990'
            }
            if(speed.innerHTML == '60 км/ч'){
                speed.innerHTML = '80 км/ч'
                temp.innerHTML = '22°'
                disk.innerHTML = '21'
            }else {
                speed.innerHTML = '60 км/ч'
                temp.innerHTML = item.temp + '°'
                disk.innerHTML = item.wheel
            }
        }
        // Вид автомобиля
        let view = document.querySelector('.view')
        let bottom = document.querySelector('.bottom')
        let tesla = document.querySelector('.tesla')
        let disk1 = document.querySelector('.wheel')
        let disk2 = document.querySelector('.wheel2')
        
        view.onclick = () => {
            let flx = document.createElement('div')
            let div = document.createElement('div')
            let div2 = document.createElement('div')
            let inp = document.createElement('input')
            let p = document.createElement('p')
            let p2 = document.createElement('p')
            let black = document.createElement('div')
            let white = document.createElement('div')
            let gold = document.createElement('div')

            flx.style.display = 'flex'
            flx.style.gap = '10px'
            black.classList.add('black')
            white.classList.add('white')
            gold.classList.add('gold')
            p.innerHTML = 'Вид автомобиля'
            p2.innerHTML = 'Цвет салона'
            inp.classList.add('kond')
            inp.type = 'checkbox'
            black.onclick = () => {
                tesla.src = './img/salon.png'
            }
            white.onclick = () => {
                tesla.classList.add('size')
                tesla.src = './img/w.png'
            }
            gold.onclick = () => {
                tesla.classList.add('size')

                tesla.src = './img/y.png'
            }
            setTimeout(() => {
                bottom.innerHTML = ""
                disk1.src = ''
                disk2.src = ''
                tesla.src = './img/salon.png'
                flx.append(black,white,gold)
                div2.append(p2,flx)
                div.append(p,inp)
                bottom.append(div2,div)
            }, 300);
            inp.onclick = () => {
                location.reload()
            }
        }
        //skorost 
        let speedtop = document.querySelector('.speedtop')
        let speedbot = document.querySelector('.speedbot')

        speedtop.onclick = () => {
            speed.innerHTML = item.speed++ + ' км/ч'
        }
        speedbot.onclick = () => {
            speed.innerHTML = item.speed-- + ' км/ч'
        }
        // temperatura
        let temptop = document.querySelector('.temptop')
        let tempbot = document.querySelector('.tempbot')

        temptop.onclick = () => {
            temp.innerHTML = item.temp++ + '°'
        }
        tempbot.onclick = () => {
            temp.innerHTML = item.temp-- + '°'
        }
        // disk
        let disktop = document.querySelector('.disktop')
        let diskbot = document.querySelector('.diskbot')

        disktop.onclick = () => {
            disk.innerHTML = item.wheel++
        }
        diskbot.onclick = () => {
            disk.innerHTML = item.wheel--
        }
    }
}


