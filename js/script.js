let doc = document;
let form = doc.querySelector('form');
let input = doc.querySelectorAll('input');
let all = doc.querySelector('.all');
let need = doc.querySelector('.need');
let success = doc.querySelector('.success');
let error = doc.querySelector('.error');
let importman = doc.querySelectorAll('.importman');
let btn = doc.querySelector('.btn_save_blue');
let cls_blue = doc.querySelectorAll('.outline_blue');
let cls_red = doc.querySelectorAll('.outline_red');
let photo = doc.querySelectorAll('.pos_none');
let img = doc.querySelectorAll('img')
let inputss = doc.querySelectorAll('.inputss')


all.textContent = 'All: ' + input.length
need.textContent = 'Need: ' + importman.length





let po_kayfu = () => {
    for (let item of cls_blue) {
        if (!item.value) {
            item.classList.remove('outline_blue');
            item.classList.add('outline_red')
        }
    }
}







let succe = ()=>{
    let errorr = 0
    for(let i of importman){
        if(!i.value){
            errorr++
        }
    }
    return errorr // 7  
}


// console.log(7)


// form__registration.addEventListener('submit', (event) => {
//     event.preventDefault()

//     event.preventDefault()
//     return__to__previous__value()
//     for (let item of need__inputs) {
//         item.style.boxShadow = '0px 0px 0px 0px'
//     }

//     let sending__data = filled__counter(inputs)
//     all.textContent = 'All: ' + count__all
//     need.textContent = 'Need: ' + count__need
//     success.textContent = 'Success: ' + sending__data.count__success
//     error.textContent = 'Error: ' + sending__data.error
// })













btn.addEventListener('click', (event) => {
    event.preventDefault()
    po_kayfu(form)
    error.textContent = 'Error: ' + succe()
    success.textContent = 'Success: ' + (importman.length - succe())
})



// let doc = document
// let form = doc.querySelector('form')
// let input = doc.querySelectorAll('input')
// let all = doc.querySelector('.all')
// let need = doc.querySelector('.need')
// let success = doc.querySelector('.success')
// let error = doc.querySelector('.error')
// let importman = doc.querySelectorAll('.importman')
// let btn = doc.querySelector('#btn')
// let cls = doc.querySelectorAll('.outline_blue')
// let photo = doc.querySelectorAll('.pos_none')

// all.textContent = 'All: ' + input.length
// need.textContent = 'Need: ' + importman.length


// let po_kayfu = (input) => {
//     for (let item of cls) {
//         if (item.value === "") {
//             item.classList.remove('outline_blue')
//             item.classList.add('outline_red')
//             // item.className('outline_red')

//         }
//     }
// }


// let po_kayfu2 = (input) => {
//     form.addEventListener('submit', (event) => {
//         event.preventDefault()
//         po_kayfu(input)
//     })
// }























// let inputs = doc.querySelectorAll('input')
// let need__inputs = doc.querySelectorAll('.need__inputs')
// let all = doc.querySelector('.all')
// let need = doc.querySelector('.need')
// let success = doc.querySelector('.success')
// let error = doc.querySelector('.error')
// let span__need = doc.querySelectorAll('.span__need')
// let button__submit = doc.querySelector('.button__submit')
// let count__all = inputs.length
// let count__need = need__inputs.length

// let filled__counter = (inputs) => {
//     let count__success = 0;
//     let error = 0;
//     let span = span__need
//     for (let item of need__inputs) {
//         if (item.value) {
//             count__success++
//         }
//         else {
//             item.style.border = '2px solid red'
//             item.style.boxShadow = '0px 0px 10px 2px rgba(255, 0, 0, 0.2) inset'
//             error++
//         }
//         mandatory__inputs(error)
//         return {
//             count__success: count__success,
//             error: error,
//         }
//     }
// }

// let mandatory__inputs = (item__error) => {
//     if (item__error == 0) {
//         for (let item of inputs) {
//             item.value = ''
//         }
//     }
// }

// let return__to__previous__value = () => {
//     for (let item of inputs) {
//         item.style.border = '1px solid #949494'
//     }
// }

// // button__submit.addEventListener('click', (event) => {
// //     event.preventDefault()
// //     return__to__previous__value()
// //     for (let item of need__inputs) {
// //         item.style.boxShadow = '0px 0px 0px 0px'
// //     }

// //     let sending__data = filled__counter(inputs)
// //     all.textContent = 'All: ' + count__all
// //     need.textContent = 'Need: ' + count__need
// //     success.textContent = 'Success: ' + sending__data.count__success
// //     error.textContent = 'Error: ' + sending__data.error
// // })

// // main__form.addEventListener('submit', (event) => {
// //     event.preventDefault()

// //     success.textContent = 'Success: ' + massiv__1.success
// // })