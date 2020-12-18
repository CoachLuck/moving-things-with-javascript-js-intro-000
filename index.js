const app = "I don't do much."
var dodger = document.getElementById('dodger')
dodger.style.backgroundColor = '#FF69B4'


document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    var leftNumbers = dodger.style.left.replace('px', '')
    var left = parseInt(leftNumbers, 10)
 
    dodger.style.left = `${left - 1}px`
  }

  if (e.which === 36) {
    var rightNumbers = dodger.style.right.replace('px', '')
    var right = parseInt(rightNumbers, 10)

    dodger.style.right = `${right - 1}px`
  }
})

