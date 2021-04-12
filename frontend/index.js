let textarea = document.querySelector("#textarea")
let form = document.querySelector("#form")
let list = document.querySelector("#list")

form.addEventListener("submit", async (event) => {
    event.preventDefault()
    
    await sendComment(textarea.value)
    await getComment()
})

async function sendComment(comment){
    try {
        const body = {
            comment: comment
        }
        const response = await fetch('http://localhost:3000/comments', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }) 
    } catch (error) {
        console.error(error)
    }
}

async function getComment(){
    try {
        const response = await fetch('http://localhost:3000/comments')
        const data = await response.json()
        show(data)
    } catch (error) {
        console.error(error)
    }
}

function show(items) {
    let list_itens = ''
    for(item of items) {
        list_itens += `<div class="listItem"><p>${item.comment}</p><button id="${item.id}" onclick="playAudio()">Ouvir</button></div> `
    }
    list.innerHTML = list_itens
}

async function playAudio(){
    const id = event.srcElement.id
    try {
        const body = {
            id: id
        }
        const readableStream = await fetch('http://localhost:3000/play', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        const response = await readableStream.json()
        const audio =  new Audio(response.audiopath)
        await audio.play()

    } catch (error) {
        alert('Audio ainda não criado')
        console.error(error)
    }
}