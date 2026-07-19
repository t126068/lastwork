const form = document.querySelector('#contact')
const notice = document.querySelector('#notice')

const validater = (event) => {
  const reqs = form.querySelectorAll('.must input, .must textarea')
  let hasEmpty = false

  reqs.forEach(req => {
    const message = req.closest('label').querySelector('p')
    if(req.value.trim() === '') {
      hasEmpty = true
      message.textContent = '入力してください'
    } else {
      message.textContent = ''
    }
  })

  if(hasEmpty) {
    event.preventDefault()
    notice.textContent = '入力内容に問題があります。確認して再度お試しください。'
    notice.className = 'm-2 p-1 border border-black'
  } else {
    notice.textContent = ''
    notice.className = ''
  }
}

form.addEventListener('submit', (e) => {validater(e)})