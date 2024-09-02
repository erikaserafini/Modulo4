

window.onload = () => { 
    fetch('https://striveschool-api.herokuapp.com/api/product/',
        { 
        headers: { 
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmQ1ZGI4Njc3NmUzYjAwMTViZDI5MTgiLCJpYXQiOjE3MjUyOTEzOTksImV4cCI6MTcyNjUwMDk5OX0.T7hxNfL-PYiZ3qpCzTGsD6QQF7f77Q7bAnd4PUsBLBU" 
        } 
        })
    .then(response => response.json())
    .then(response => {
    
    })

      Loader.hideLoader()

        const target = document.querySelector('#target')
        risultato.data.forEach(el=>{

            let temp = document.getElementsByTagName("template")[0];
            let clone = temp.content.cloneNode(true);
            const div = document.createElement("div");
            div.append(clone);
            clone = div.firstElementChild// 
            

            const name = clone.querySelector('.name')
            const image = clone.querySelector('.image')
            const description = clone.querySelector('.description')
            const brand = clone.querySelector('.brande')
            const price = clone.querySelector('.price')


            
            name.textContent = el.name
            image.src = el.imageUrl
            description.textContent = el.description
            brand.textContent = el.brand
            price.textContent = el.price
        

            target.appendChild(clone)

        })

    }


    call()

