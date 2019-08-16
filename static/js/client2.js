

var random_images_array = ["pool.png", "pool1.png", "pool2.png", "pool3.png", "pool4.png", "pool5.png", "pool7.png", "pool8.png" ];



function getRandomImage(imgAr, path) {
    var path = path || '/images/';
    var num = Math.floor(Math.random() * imgAr.length);
    var img = imgAr[num];
    var imgStr = '<img class="rounded mx-auto d-block" style="max-width:200px;" src="' + path + img + '"alt = "">';
    document.write(imgStr)
    document.close()

} 