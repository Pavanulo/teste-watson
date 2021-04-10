let textarea = document.querySelector("#textarea")
let form = document.querySelector("#form")

form.addEventListener("submit", async (event) => {
    event.preventDefault()

    await sendComment(textarea.value)
})

async function sendComment(comment){
    try {
        const body = {
            comment: comment
        }
        const response = await fetch('http://localhost:3000/comments', {
            method: "POST",
            body: body
        }) 
        console.log(response.status)
    } catch (error) {
        console.error(error)
    }
}