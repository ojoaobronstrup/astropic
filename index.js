fetch('https://api.nasa.gov/planetary/apod?api_key=Shkrf4GWfgLRgXnkgStM65xRXdmkKhH6uhyzMfVc')
    .then(res => res.json())
    .then(data => {
        console.log(data)

        var content = document.querySelector('.content')

        var datas = document.createElement('div')
        datas.classList.add('datas')
        content.appendChild(datas)

        var title = document.createElement('h1')
        title.classList.add('title')
        datas.appendChild(title)
        title.innerText = data.title

        var text = document.createElement('h3')
        text.classList.add('text')
        datas.appendChild(text)
        text.innerText = data.explanation

        var imgContainer = document.createElement('image')
        content.appendChild(imgContainer)

        if(data.media_type = 'image') {
            let img = document.createElement('img')
            img.classList.add('image')
            imgContainer.appendChild(img)
            document.querySelector('.image').src = data.url
        }

        document.querySelector('.image').addEventListener('click', () => {
            window.open('https://apod.nasa.gov/apod/')
        })
    })
