
// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі



function wokeUp(alarmclock){
    return new Promise((resolve, reject) => {
        console.log('Новий день!');
        setTimeout(()=>{
            if(alarmclock===false){
                reject('Error!!')
            }
            else {
                resolve(null);
            }
        },1000)
    })


}

function breakfast(food){
    return new Promise((resolve, reject) => {
        console.log('Відкриваємо холодильник');
        setTimeout(()=>{
            if(food===false){
                reject('Error!!!')
            }else{
               resolve(null);
            }
        },500)
    })

}

function brushTeeth(water){
    return new Promise((resolve, reject) => {
        console.log('Відкриваємо кран');
        setTimeout(()=>{
            if(water===false){
                reject('Error!!!')
            }
            else{
                resolve(null);
            }
        },2000)
    })
}

function goWork(bus){
    return new Promise((resolve, reject) => {
        console.log('Йду на зупинку');
        setTimeout(()=>{
            if(bus===false){
                reject('Error!!!')
            }
            else {
                resolve(null);
            }
        },1000);
    })
}

function work(mask){
    return new Promise((resolve, reject) => {
        console.log('Заходжу на роботу');
        setTimeout(()=>{
            if(mask===false){
                reject('Error!')
            }
            else{
                resolve(null);
            }
        },1500);
    })
}

function supper(money){
    return new Promise((resolve, reject) => {
        console.log('Йду в магазин');
        setTimeout(()=>{
            if(money<100){
                reject('Error!');
            }
            else{
                resolve(null);
            }
        },3000);
    })
}

function study(internet){
    return new Promise((resolve, reject) => {
        console.log('Перевіряю інтернет');
        setTimeout(()=>{
            if(internet===false){
                reject('Error!!!');
            }
            else{
                resolve(null);
            }
        },2000);
    })
}
function sleep(exhaustion){
    return new Promise((resolve, reject) => {
        console.log('Лягаю в ліжко');
        setTimeout(()=>{
            if(exhaustion===false){
                reject('Error!');
            }
            else{
                resolve(null);
            }
        },1500);
    })
}

//promise


// wokeUp(true).then(wokeUp=>{
//     console.log('Проснулася!');
//     return breakfast(true);
// })
// .then(value=>{
//     console.log('Поснідала!');
//     return brushTeeth(true);
// })
// .then(value => {
//     console.log('Почистила зуби!');
//     return goWork(true);
// })
// .then(value => {
//     console.log('Їду на роботу!');
//     return work(true);
// })
// .then(value => {
//     console.log('Працюю!');
//     return supper(200);
// })
// .then(value => {
//     console.log('Вечеряю!');
//     return study(true);
// })
// .then(value => {
//     console.log('Вчуся');
//     return sleep(true);
// })
//     .then(value => {
//         console.log('Заснула!');
//     })
// .catch(reason => {
//     console.log(reason);
// })
// .finally(()=>{
//     console.log('Кінець дня!');
// })



//asynk await



// async function xxx(){
//
//     const action1 = await wokeUp(true);
//     const action2 = await breakfast(true);
//     const action3 = await brushTeeth(true);
//     const action4 = await goWork(true);
//     const action5 = await work(true);
//     const action6 = await supper(200);
//     const action7 = await study(true);
//     const action8 = await sleep(true);
//
// }
// xxx();
