function sound() {
    var container = document.querySelector('.container');
    var text = document.createElement('h1');
    text.innerHTML = 'Chúc Mừng Sinh Nhật!';

    var img = document.createElement('img');
    img.className = 'img';
    img.src = 'ddawd.png';
    img.alt = 'Chúc Mừng Sinh Nhật!';
    img.style.width = 'auto';
    img.style.borderRadius = '10px';
    container.appendChild(img);
    container.appendChild(text);
    var p = document.createElement('p');
    p.innerHTML = 'Chúc em Dương xuống Hà Lội làm nô lệ cho bọn anh!';
    container.appendChild(p);

    var audio = new Audio('Helpy.wav');
    audio.play();



    var img2 = document.createElement('img');
    img2.className = 'img2';
    img2.src = 'fire.png';
    img2.alt = 'Chúc Mừng Sinh Nhật!';
    img2.style.width = 'auto';
    container.appendChild(img2);
    


    var button = document.querySelector('.btn');
    button.remove();
}