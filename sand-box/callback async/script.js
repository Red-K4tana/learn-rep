const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
let strInput = ''

input.addEventListener('input', (e) => {
	strInput = e.target.value
})
btn.addEventListener('click', () => {
	fetchData(strInput, cb)
})

const cb = (name, id) => {
	alert('Hi ' + name + ' your id - ' + id + '!')
}
const fetchData = (userID, callback) => {
	const user = {
		name: 'Ivan',
		userID: userID,
	}
	setTimeout(() => {
		callback(user.name, user.userID)
	}, 3000)
}

/*-------------------------------------------------------------------------*/