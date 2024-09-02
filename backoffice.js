
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
} 

const crea=  document.getElementById('crea')

crea.addEventListener('click', e => {
    e.preventDefault()

    const name = document.getElementById('name')
    const description = document.getElementById('description')
    const image = document.getElementById('image')
    const brand = document.getElementById('brand')
    const price = document.getElementById('price')

    fetch('https://striveschool-api.herokuapp.com/api/product/', {
        method: 'POST',
        headers:{
            "content-type": "application/json",
            authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmQ1ZGI4Njc3NmUzYjAwMTViZDI5MTgiLCJpYXQiOjE3MjUyOTEzOTksImV4cCI6MTcyNjUwMDk5OX0.T7hxNfL-PYiZ3qpCzTGsD6QQF7f77Q7bAnd4PUsBLBU",
        
    },
    body: JSON.stringify(product),
  })
  if (res.ok) {
    alert("Product created")}
    })



const canc=  document.getElementById('canc')

canc.addEventListener('click', e => {
    e.preventDefault()

    const name = document.getElementById('name')
    const description = document.getElementById('description')
    const image = document.getElementById('image')
    const brand = document.getElementById('brand')
    const price = document.getElementById('price')

    fetch('https://striveschool-api.herokuapp.com/api/product/', {
        method: 'DELETE',
        headers:{
            "content-type": "application/json",
            authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmQ1ZGI4Njc3NmUzYjAwMTViZDI5MTgiLCJpYXQiOjE3MjUyOTEzOTksImV4cCI6MTcyNjUwMDk5OX0.T7hxNfL-PYiZ3qpCzTGsD6QQF7f77Q7bAnd4PUsBLBU",
        
    },
    body: JSON.stringify(product),
  })
  if (res.ok) {
    alert("Product deleted")}
    })


