// 获得输入的内容
const redPacket = document.querySelector('.main')
const moneyPackage = document.querySelector('.money-package')
const box = document.querySelector('.box')
const name = document.querySelector('#name')
const friNumber = document.querySelector('#fri-number')
const account = document.querySelector('#account')
const fri1 = document.querySelector('#fri1')
const fri2 = document.querySelector('#fri2')
const fri3 = document.querySelector('#fri3')

// 获得输出的位置
const prepare = document.querySelector('.prepare-red-pocket')
const showName = document.querySelector('.show-myname')
const pocketNo = document.querySelector('.pocket-no')
const showAccount = document.querySelector('.all-account')
const pocketList = document.querySelector('.pocket-list')
const mine = document.querySelector('.mine')
const myMoney = document.querySelector('.mymoney')
const moneyMine = document.querySelector('.money-mine')
const time = document.querySelector('.time')

const nameList = [
    "AO",
    "托马斯",
    "纸绘",
    "顾殣",
    "阿七",
    "黎明",
    "大美",
    "粽子",
    "柠檬",
    "悦悦",
    "佐耳",
    "夜影",
    "星辰",
    "夜影",
    "土豆",
    "查尔斯",
    "兮听",
    "郁林州",
]

function changeName() {
    showName.innerText = name.value
    mine.innerText = name.value
    pocketNo.innerText = parseInt(friNumber.value) + 1
    showAccount.innerText = account.value

    prepare.style.display = "none"
}

function showMoney() {
    let currenthHour = new Date().getHours()
    let currentMinutes = new Date().getMinutes()
    time.innerText = currenthHour + ":" + currentMinutes
    moneyPackage.style.animationPlayState = "running"
    redPacket.style.animationPlayState = "running"
    box.style.animationPlayState = "running"
    moneyPackage.style.display = "block"
    console.log(nameList)

    // 获得参与红包的人物列表
    const redNo = parseInt(pocketNo.innerText)
    const attendFriList = []
    attendFriList.push(showName.innerText)
    const newFris = [fri1.value, fri2.value, fri3.value]
    for (let i of newFris) {
        if (attendFriList.indexOf(i) === -1) {
            attendFriList.push(i)
        }
    }
    let i = attendFriList.length
    console.log(attendFriList,redNo)
    while (attendFriList.length < redNo) {
        // const random = Math.floor((Math.random()*17)*100)/100
        const random = Math.floor(Math.random() * 17)
        console.log(random)
        if (attendFriList.indexOf(nameList[random]) === -1) {
            attendFriList.push(nameList[random])
        }
    }

    // 获得红包随机钱数列表
    const showAccount = document.querySelector('.all-account')
    let totalAccount = parseInt(showAccount.innerText)
    const moneyList = []
    while (moneyList.length < redNo - 1) {
        const randomMoney = Math.floor((Math.random() * totalAccount) * 100) / 100
        console.log(randomMoney, Math.floor((totalAccount - randomMoney) * 100) / 100)
        if ((Math.floor((totalAccount - randomMoney) * 100) / 100) !== 0) {
            moneyList.push(randomMoney)
        }
        totalAccount = Math.floor((totalAccount - randomMoney) * 100) / 100
    }
    moneyList.push(totalAccount)
    moneyList.sort((a, b) => b - a)

    myMoney.getElementsByTagName('span')[0].innerText = moneyList[0]
    moneyMine.getElementsByTagName('span')[0].innerText = moneyList[0]
    attendFriList.shift()

    // fragment 动态添加li
    const frag = document.createDocumentFragment()
    for (let i = 1; i < moneyList.length; i++) {
        const li = document.createElement('li')
        const randomName = Math.floor(Math.random()*(attendFriList.length-1))
        console.log(randomName)
        li.innerHTML = li.innerHTML + ` <div class="name-wrap">
            <span class="attend-name">${attendFriList.splice(randomName,1)}</span>
            <span class="time">${time.innerText}</span>
            </div>
            <div class="get-money">
            <span>${moneyList[i]}</span>元
             </div>`
        frag.appendChild(li)
    }
    pocketList.appendChild(frag)

}

