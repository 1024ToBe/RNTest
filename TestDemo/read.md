一.箭头函数
语法
1.() => 表达式
2.param => 表达式
3.(param) => 表达式
4.(param1, paramN) => 表达式
5.无参
() => {
    //组成函数体的声明语句
   statements
}
6.单个参数，省去代表参数的括号
param =>{
   statements
}
7.多个参数
(param1, paramN) =>{
   statements
}

匿名函数转箭头举例
参数周围的括号可移除：只有单个参数时可删除，无参/多参/默认参数/重组参数/其他参数必须带括号
代表函数体的大括号可移除：只有函数直接返回表达式时可移除。函数内有额外操作，必须带大括号和return关键字
传统匿名函数
(function (a) {
    return a+100;
}) 
//箭头函数
1.移除function，并将箭头至于 参数和函数体起始大括号之间
(a)=>{
    return a+100;
}
2.移除代表函数体的大括号和“return”-返回值时隐含的！！！！
(a)=>a+100;
3.移除参数周围的括号
a=>a+100;

state
当你使用state，需要import React, { useState } from "react";
当你使用state，你是在告诉React 让这个控件记住一些东西
命名格式： const[index,setIndex]=useState(0);
useSate函数的入参是index默认值0，返回值是更新后的index，和更新index的方法
每次组件渲染时，会返回包含两个值的数组
1.state变量（index）保存上次渲染的变量
2.state setter(setIndex)会更新index变量 并触发React重新触发组件

调用useState(0)实际发生的事情
1.组件 进行第一次渲染，因为你将0最为默认初始值，所以useState函数返回 [0,setIndex],React记住0是最新的state值
2.你更新的state，比如当用户点击按钮是调用setIndex(Index+1),index=0，所以它是setIndex(1),React记住1是最新的state值
3.组件 进行第二次渲染 React看到是初始状态仍是调用useState(0),但React记住了你上次设置Index=1，所以返回[1,setIndex]

//快捷键
1.文档注释 /** +回车
2/代码对齐 shift+alt+F