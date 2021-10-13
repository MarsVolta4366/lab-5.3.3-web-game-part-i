function newImage(srcValue, leftPos, bottomPos) {
    let image = document.createElement('img')
    image.src = srcValue
    image.style.position = 'fixed'
    image.style.left = leftPos
    image.style.bottom = bottomPos
    document.body.append(image)
}

function newItem(srcValue, leftPos, bottomPos) {
    let image = document.createElement('img')
    image.src = srcValue
    image.style.position = 'fixed'
    image.style.left = leftPos
    image.style.bottom = bottomPos
    document.body.append(image)

    image.addEventListener('dblclick', () => {
        image.remove()
    })
}


//Images
newImage('assets/green-character.gif', '100px', '100px')
newImage('assets/pine-tree.png', '450px', '200px')
newImage('assets/tree.png', '200px', '300px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/crate.png', '150px', '200px')
newImage('assets/well.png', '500px', '425px')

//Items
newItem('assets/sword.png', '500px', '405px')
newItem('assets/sheild.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')