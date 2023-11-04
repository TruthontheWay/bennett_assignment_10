let image1 = document.querySelector('#spinosaurus')
    image1.onclick = () => {
        if (image1.getAttribute('src') === 'images/Spinosaurus_life.png')
        {
            image1.setAttribute('src','images/799px-Spinosaurus_size_comparison.png');}
            else {image1.setAttribute('src','images/Spinosaurus_life.png');
        }
    };

    let image2 = document.querySelector('#argentinosaurus')
     image2.onmouseenter = (e) => {image2.setAttribute('src','images/aregentinosaurrus_scale.png');};
     image2.onmouseleave = (e) => {image2.setAttribute('src','images/argentinosaurus_bw.jpg');};

     //code structure credit to Mindy McAdams//