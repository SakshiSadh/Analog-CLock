setInterval(() => {
   d = new Date();
   minhand = d.getMinutes();
   sechand = d.getSeconds();
   hourhand = d.getHours();
  hrotation = 30 * hourhand + minhand / 2;
  mrotation = 6 * minhand;
  srotation = 6 * sechand;
    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    sec.style.transform=`rotate(${srotation}deg)`;
}, 1000);
