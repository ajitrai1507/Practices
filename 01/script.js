const btn = document.querySelector(".btn");

btn.addEventListener('click', ()=>{
    
    const quates = fetch('https://dummyjson.com/quotes/random');

    quates.then((responce)=>{
        return responce.json()
    })
    .then((data)=>{
        function showQuate(data){

            const quates = document.getElementById("quates");
            quates.style.display = "block"
            const author = document.getElementById("author");
            author.style.display = "block"
            author.innerHTML = `By:- ${data.author}`
            quates.innerHTML = data.quote;
        }
        showQuate(data);
    })
})