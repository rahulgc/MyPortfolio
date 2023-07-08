// const sleep = async (i) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("success");
//       }, i * 1000);
//     });
//   };
  
//   const display = async (skill, id) => {
//     let loopvalue = "";
//     for (let i of skill) {
//       await sleep(0.05);
//       document.getElementById("skill").innerHTML += `${i}`;
//       loopvalue += i;
//     }
//     await sleep(1);
  
//     if (skill === loopvalue) {
//       skill = loopvalue.split("");
//       let skill2 = loopvalue.split("");
//       for (let i of skill2) {
//         await sleep(0.05);
//         skill.pop();
//         let modifiedValue = skill.join("");
//         document.getElementById("skill").innerHTML = `${modifiedValue}`;
//       }
//     }
//   };
  
//   const main = async () => {
//     const skills = [
//       "FrontEnd Developer",
//       "Backend Developer",
//     ];
  
//     for (let i = 0; i <= skills.length - 1; i++) {
//       await display(skills[i], i);
//     }
//   };
//   main();
//   setInterval(() => {
//     main();
//   }, 5000);

var typed = new Typed('#element', {
    strings: ['Frontend developer','Backend developer'],
    typeSpeed: 50,
    loop: true
  });

  var typed2 = new Typed('#element2', {
    strings: ['FullStack developer'],
    typeSpeed: 50,

    loop: true
  });
  window.scroll(()=>{
    if(this.scrollY>20){
      document.getElementById("navbar").classList.add("sticky")
    }
    else{
      document.getElementById("navbar").classList.remove("sticky")
    }
  })