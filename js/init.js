// ローディングアニメーション
const dots = document.getElementById('dots')
const patterns = ['', '.', '..', '...']
let i = 0

const animation = () => {
  if (dots) {
    dots.textContent = patterns[i]
    i = (i + 1) % patterns.length
  }
}

const interval = setInterval(animation, 250)

// ローディング画面操作
const screen = document.getElementById('loading')

const timeout = setTimeout(() => {
  if (screen) screen.style.visibility = "visible"
}, 75)

const loaded = async () => {
  clearTimeout(timeout)
  await screen.animate(
    {
      opacity: [1, 0],
      visibility: 'hidden',
    },
    {
      duration: 1000,
      delay: 500,
      easing: 'ease',
      fill: 'forwards',
    }
  ).finished
  clearInterval(interval)
}

window.addEventListener('load', loaded)