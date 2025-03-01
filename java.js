const buttons = document.getElementsByClassName('completed');
const completedContainer= document.getElementById("task-completed")
const taskRemaining = document.getElementById("task-rem")
const totalTask = document.getElementById("total-task")
const themeBtn = document.getElementById("theme")

document.getElementById("date").innerHTML = `<h2 class="text-2xl">${new Date().toLocaleDateString('en-US', { weekday: 'short' })},</h2><p class="text-lg font-bold">${new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).replace(',', '')}</p>`

for(const btn of buttons){
    btn.addEventListener("click",function(event){
        const title = event.target.parentNode.parentNode.parentNode.children[1].innerText
        const p = document.createElement("p")
        p.innerText = `You have complete the task ${title} at ${new Date().toLocaleTimeString()}`
        p.style.backgroundColor = "#F4F7FF"
        p.style.margin = "10px"
        event.target.disabled = true

        completedContainer.appendChild(p)
       
    
            taskRemaining.innerText =`0${parseInt(taskRemaining.innerText)-1+''}`
            totalTask.innerText = parseInt(totalTask.innerText)+1
            alert("Task completed successfully")

            if(parseInt(taskRemaining.innerText)===0){
                alert("All task completed successfully")
                return
            }
    })
}

document.getElementById("clear").addEventListener("click",function(){
    completedContainer.innerHTML = ""
})


themeBtn.addEventListener("click",function(){
    const num1 = Math.floor(Math.random()*256)
    const num2 = Math.floor(Math.random()*256)
    const num3 = Math.floor(Math.random()*256)
    document.body.style.backgroundColor = `rgb(${num1},${num2},${num3})`
})

document.getElementById("discover").addEventListener("click",function(){
    window.location.href = "./blog.html"
})