

const toggleLinkButton =  (e) => {
    const id = e.target.dataset.selector
    const selector = `[data-id=${id}]`
    console.log(selector)
    const linksContainer = document.querySelector(selector)
    console.log(linksContainer)
    linksContainer.classList.toggle('links-active')
}