let m = [
    { 
        mood:"Веселий",
        url:"https://w7.pngwing.com/pngs/180/962/png-transparent-smiley-emoticon-smiley-miscellaneous-smiley-desktop-wallpaper-thumbnail.png "
    },
    {
       mood:"Сумний",
       url:"https://w7.pngwing.com/pngs/222/140/png-transparent-sad-emoticon-iphone-emoji-sadness-smiley-emoticon-emoji-face-electronics-face-emoji-face-thumbnail.png "
    },
    {
        mood:"Любов",
        url:"https://emojio.ru/images/apple-b/11.0/1f970.png"
    }
]
let output = "Які існують настрої : ";
for(let i = 0; i < m.length; i++) {
    output += m[i].mood + " ";
}
alert(`${output}`);
let n = (parseInt(prompt("Введіть номер пункту")) - 1);
let img = document.getElementById("img1");
if(n >= 0 && n <= m.length) {
    img.src = m[n].url;
    img.height = 1000;
    img.width = 1000; 
}
else { alert("Нема такого настрою"); }