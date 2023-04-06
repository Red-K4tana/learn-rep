const form = document.querySelector('form')
const div = document.querySelector('div')

/*const p1 = document.querySelector('p1')
const p2 = document.querySelector('p2')
const p3 = document.querySelector('p3')*/

const bubbling = (event) => {
    console.log('target - ', event.target.id)
    /*console.log('currentTarget - ', event.currentTarget.id)*/

}

form.addEventListener('click', bubbling, false)
/*div.addEventListener('click', bubbling, false)*/

/*p1.addEventListener('click', bubbling, false)
p2.addEventListener('click', bubbling, false)
p3.addEventListener('click', bubbling, false)*/
