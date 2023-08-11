import { adjustTemplateHeight, element, query, getRandomImage, setElementDisplay, setElementInnerHTML, createAndDownloadImage } from "./helper.js"

const randomizeButton = element("randomize")
const backgroundImage = element("background-image")

randomizeButton.onclick = () => {
    const randomImage = getRandomImage()
    setElementDisplay(backgroundImage, "block")
    backgroundImage.src = randomImage
}

element("save").onclick = () => {
    const template = element("template")
    
    html2canvas(template).then(function (canvas) {
        const image = new Image()
        image.src = canvas.toDataURL("image/png")
        createAndDownloadImage(image.src, "template.png")
    })
}

const textBox = element("text-box")
const mainInput = query("input[name='main']")
const descriptionInput = query("input[name='description']")
const mainInputColor = query("input[name='main-color']")
const descriptionInputColor = query("input[name='description-color']")

function updateText(elementId, inputElement) {
    !element(elementId) ?
        setElementInnerHTML(textBox, `<p id="${elementId}">${inputElement.value}</p>`)
    :
        element(elementId).innerHTML = inputElement.value

}

mainInput.onclick = () => { updateText("main-text", mainInput) }

mainInput.oninput = () => { updateText("main-text", mainInput) }

mainInputColor.oninput = () => {
    element("main-text").style.textShadow = `5px 5px ${mainInputColor.value}`
}

descriptionInputColor.oninput = () => {
    element("description-text").style.textShadow = `3px 3px ${descriptionInputColor.value}`
}

descriptionInput.onclick = () => { updateText("description-text", descriptionInput) }

descriptionInput.oninput = () => { updateText("description-text", descriptionInput) }

const rangeInput = query('input[name="brightness"]')
const grayOverlay = element('gray-overlay')

rangeInput.oninput = () => {
    const alpha = rangeInput.value / 100
    grayOverlay.style.backgroundColor = `rgba(0, 0, 0, ${alpha})`
}

window.onload = adjustTemplateHeight;
window.addEventListener("orientationchange", adjustTemplateHeight)

element("reset").onclick = () => {
    const confirmed = confirm("Are you sure? All your edit will be removed")

    if (confirmed) {
        backgroundImage.src = ""
        textBox.innerHTML = ""
        mainInput.value = ""
        descriptionInput.value = ""
    }
    
}

element("button-redirect").onclick = event => {

    event.preventDefault()
    
    const confirmed = confirm("Are you sure? All your edit will be removed")

    if (confirmed) {
        window.location.href = "./thanks.html"
    }
}