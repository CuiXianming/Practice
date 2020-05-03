 /**
  * 判断一个数是不是奇数
  * @param {number} n 要判断的数字
  * @returns {boolean}
  */
 function isOdd(n) {
     return n % 2 !== 0;
 }

 /**
  * 判断一个数是不是素数
  * @param {*} n 
  */
 function isPrime(n) {
     if (n < 2) {
         return false;
     }
     for (var i = 2; i < n; i++) {
         if (n % i === 0) {
             return false;
         }
     }
     return true;
 }

 /**
  * 对数组求和
  * @param {*} arr 
  */
 function sumOfArray(arr) {
     var sum = 0;
     for (var i = 0; i < arr.length; i++) {
         sum += arr[i];
     }
     return sum;
 }

 /**
  * 得到数组中的最大值，如果数组长度为0，则返回undefined
  * @param {*} arr 
  */
 function maxOfArray(arr) {
     if (arr.length === 0) {
         return;
     }
     var max = arr[0];
     for (var i = 1; i < arr.length; i++) {
         if (arr[i] > max) {
             max = arr[i];
         }
     }
     return max;
 }

 /**
  * 得到数组中的最小值，如果数组长度为0，则返回undefined
  * @param {*} arr 
  */
 function minOfArray(arr) {
     if (arr.length === 0) {
         return;
     }
     var min = arr[0];
     for (var i = 1; i < arr.length; i++) {
         if (arr[i] < min) {
             min = arr[i];
         }
     }
     return min;
 }

 /**
  * 判断一个数组是不是稀松数组
  * @param {*} arr 
  */
 function hasEmptyInArray(arr) {
     // 稀松数组的特点：下标连续
     for (var i = 0; i < arr.length; i++) {
         if (!(i in arr)) {
             return true;
         }
     }
     return false;
 }

 /**
  * 判断某年是不是闰年
  * @param {*} year 
  */
 function isLeap(year) {
     // 4年一闰，百年不闰；400年一闰
     return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
 }

 /**
  * 得到某年某月的天数
  * @param {*} year 
  * @param {*} month 
  */
 function getDays(year, month) {
     if (month === 2) {
         return isLeap(year) ? 29 : 28;
     } else if (month < 8 && isOdd(month) || month >= 8 && !isOdd(month)) {
         return 31;
     } else {
         return 30;
     }
 }

 /**
  * 得到数组中出现频率最高的数字和频率
  * 返回一个对象
  * @param {*} arr 
  */
 function getTopFreqInArray(arr) {
     var records = {}; //记录出现频率
     for (var i = 0; i < arr.length; i++) {
         var n = arr[i];
         if (records[n]) {
             records[n]++;
         } else {
             records[n] = 1;
         }
     }
     var result; //记录最终结果的对象
     for (var prop in records) {
         if (!result || records[prop] > result.frequency) {
             result = {
                 number: +prop,
                 frequency: records[prop]
             };
         }
     }
     return result;
 }

 /**
  * 实现哥德巴赫猜想
  * 任一大于2的偶数都可写成两个质数之和，比如：8 = 3 + 5
  * 让用户输入一个大于2的整数，输出其等于哪两个素数相加
  */
 function begin() {
     var num = +prompt("请输入一个大于2的偶数");
     if (isNaN(num) || num <= 2 || isOdd(num)) {
         console.log("输入有误");
         return;
     }
     //输入正确
     for (var i = 2; i <= num - 2; i++) {
         var j = num - i;
         //判断两个数字是否都是素数
         if (isPrime(i) && isPrime(j)) {
             console.log(`${num} = ${i} + ${j}`);
         }
     }
 }
 begin();

 /**
  * 让用户输入一个年份，输出该年每个月的天数
  */
 function begin() {
     var year = +prompt("请输入一个年份（1990~2100）");
     if (isNaN(year) || year < 1990 || year > 2100) {
         console.log("输入有误");
         return;
     }
     //输入正确
     for (var m = 1; m <= 12; m++) {
         console.log(`${year}年${m}月：${getDays(year, m)}`);
     }
 }
 begin();