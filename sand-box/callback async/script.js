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
const inputProm = document.querySelector('#input-prom')
const btnProm = document.querySelector('#btn-prom')
let strInputProm = ''

inputProm.addEventListener('input', (e) => {
	strInputProm = e.target.value
})
btnProm.addEventListener('click', () => {
	promFetchData(strInputProm)
})

const promFetchData = (userID) => {
	const user = {
		name: 'Ivan',
		userID: 'user=',
	}
	//Promise вернет либо resolve - и тогда user.userID пойдет в .then и там склеится с alert,
	// либо reject - и тогда ошибка попадет в catch, и там склеится с alert
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			user.userID = user.userID + userID
			if (Math.random() < 0.5) {
				reject('да вашу мать!') // отрицательный результат
			}
			resolve(user.userID) // положительный результат
		}, 300)
	})
		// работа с положительным результатом
		.then(res => {
			alert('Hi ' + user.name + ' your id - ' + res + '!' + ' вотакенный айдишник теперь')
		})
		// работа с отрицательным результатом
		.catch(err => {
			alert('error ' + err)
		})
}
/*-------------------------------------------------------------------------*/

const inputAsync = document.querySelector('#input-async')
const btnAsync = document.querySelector('#btn-async')
let strInputAsync = ''

inputAsync.addEventListener('input', (e) => {
	strInputAsync = e.target.value
})
btnAsync.addEventListener('click', () => {
	asyncFetchData(strInputAsync)
})

const asyncFetchData = async (userID) => {
	const user = {
		name: 'Ivan',
		userID: 'user=',
	}
	const activeFunc = ()=> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				user.userID = user.userID + userID
				if (Math.random() < 0.5) {
					reject('да вашу мать!') // отрицательный результат
				}
				resolve(user.userID) // положительный результат
			}, 300)
		})
	}
	// обработка ответов промиса
	// сюда resolve
	try {
		let result = await activeFunc()
		alert('Вот вам айдишник ' + result)
	}
	// сюда reject
	catch (err) {
		alert ('error ' + err)
	}
}