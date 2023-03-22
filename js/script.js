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
