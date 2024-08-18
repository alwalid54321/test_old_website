window.onload = function () {
  const favicon = document.getElementById('favicon')
  const pageTitle = document.title
const attentionMessage = " Attention here!"

  const isPageActive = !document.hidden
  toggle(isPageActive)
  favicon.classList.add(isPageActive? 'favicon-active' : 'favicon')
    .removeClass('favicon')
  document.addEventListener('visibilitychange', function (e) {
    const isPageActive = !document.hidden
    toggle(isPageActive)
  })

  function toggle(isPageActive) {
    if (isPageActive) {
      document.title = pageTitle
      favicon.href = 'https://i.postimg.cc/8cL43d37/T-L-logo.png' 
    } else {
      document.title = attentionMessage
      favicon.href = 'https://i.postimg.cc/8cL43d37/T-L-logo.png'}
  }
}
