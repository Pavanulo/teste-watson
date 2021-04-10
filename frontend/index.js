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
        console.log(body)
        const response = await fetch('http://localhost:3000/comments', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }) 
        console.log(response.status)
    } catch (error) {
        console.error(error)
    }
}

async function getComment(){
    try {
        const response = await fetch('http://localhost:3000/comments')
        const data = await response.json()
        show(data)
        console.log(response.status)
    } catch (error) {
        console.error(error)
    }
}

function show(items) {
    let list_itens = ''
    for(item of items) {
        list_itens += `<li>${item.comment}</li> <button id="${item.id}">Ouvir</button>`
    }
    list.innerHTML = list_itens
}