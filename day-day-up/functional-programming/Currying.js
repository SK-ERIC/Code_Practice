/**
 * 柯里化（Currying）是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数， 并且返回接受余下的参数且返回结果的新函数的技术。
 */

// 取出对象里面的属性, 简单起见，省略了校验逻辑
const get = (key) => (obj) => obj[key];
// const getId = get("id");
// const getName = get("name");




// 非柯里化版本
const getByKey = (key, obj) => obj[key]
// 繁琐
const getId = data => getByKey("id", data);
const getName = data => getByKey("name", data);



const data = {
  id: 1,
  name: "lucifer",
};
const a = getId(data); // 1
const b = getName(data); // lucifer

console.log("a, b :>> ", a, b);