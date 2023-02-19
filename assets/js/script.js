let row1 = document.getElementById('row1');
let row2 = document.getElementById('row2');
let row3 = document.getElementById('row3');
const spin = document.getElementById('spin');
let click = '';

for (var a=[],i=0;i<100;++i) 
a[i]=Math.floor(Math.random()*7+1);
console.log(a);

document.addEventListener('DOMContentLoaded', function (){
        for ( let i=0;i<43;i++){
            let img = document.createElement('img');
            img.src=`assets/images/picture${a[i]}.jpg`;
            row1.appendChild(img);    
        }
        for ( let i=0;i<43;i++){
            let img = document.createElement('img');
            img.src=`assets/images/picture${a[i+15]}.jpg`;
            row2.appendChild(img);    
        }
        for ( let i=0;i<43;i++){
            let img = document.createElement('img');
            img.src=`assets/images/picture${a[i+30]}.jpg`;
            row3.appendChild(img);    
        }
    })




function spinWheel() {    
spin.addEventListener('click', function() {
    click++;
    let px = click*7400
    row1.style.transform = `translateY(-8000px)`;
    row2.style.transform = `translateY(-8000px)`;
    row3.style.transform = `translateY(-8000px)`;
    row1.style.transition = 'all 1s ease';
    row2.style.transition = 'all 1.2s ease';
    row3.style.transition = 'all 1.5s ease';
    setTimeout(function() {
        for ( let i=0;i<40;i++){
            let chil = document.getElementById('row1').children;
            let chil2 = document.getElementById('row2').children;
            let chil3 = document.getElementById('row3').children;
            chil[0].remove(); 
            chil2[0].remove(); 
            chil3[0].remove();           
        }
        row1.style.transform = `translateY(0)`;
        row2.style.transform = `translateY(0)`;
        row3.style.transform = `translateY(0)`;
        row1.style.transition = 'all 0s linear';
        row2.style.transition = 'all 0s linear';
        row3.style.transition = 'all 0s linear';
        for ( let i=0;i<40;i++){
            let img = document.createElement('img');
            let img2 = document.createElement('img');
            let img3 = document.createElement('img');
            img.src=`assets/images/picture${a[i]}.jpg`;
            img2.src=`assets/images/picture${a[i+15]}.jpg`;
            img3.src=`assets/images/picture${a[i+15]}.jpg`;
            row1.appendChild(img);
            row2.appendChild(img2);
            row3.appendChild(img3);
        }
        console.log(a);
    }, 2000)
    
});



}
spinWheel()



