const prime = (num) => {
  for (let i = 0; i <= num; i++) {
    let flag = 0;
  
    // 从 2 开始循环到用户输入的数字
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
  
    // 如果 number 大于 1 且不能被其他数字整除
    if (i > 1 && flag == 0) {
        console.log(i);
    }
  }
};

const Run_Calculation = () => {
  const num = 50000;
  console.log(prime(num));
  return prime(num);
};

const Start_Animation = () => {
  for (let i = 0; i < 3; i++) {
    const bikeID = `bike${i + 1}`;
    let bike = document.getElementById(bikeID);

    let position = 0;
    timer = setInterval(() => {
      if (position > window.innerWidth / 1.2) {
        position = 0;
      } else {
        position++;
        bike.style.left = position + "px";
      }
    }, 5);
  }
};

