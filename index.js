// BT1
// myColor = ["red", "green", "blue"]
// myColor.push("black")
// console.log(myColor)

// BT2
// var num=window.prompt();
// var str = num.toString();
// var result = [str[0]];
//
// for(var x=1; x<str.length; x++)
//   {
//     if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
//      {
//       result.push('-', str[x]);
//      }
//     else
//      {
//       result.push(str[x]);
//      }
//   }
// console.log(result.join(''));

// BT3
// str = prompt("Nhap vao day 1 dong chu bat ki:");
// var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var LOWER = 'abcdefghijklmnopqrstuvwxyz';
// var result = [];
//
// for(var x=0; x<str.length; x++)
// {
//     if(UPPER.indexOf(str[x]) !== -1)
//     {
//         result.push(str[x].toLowerCase());
//     }
//     else if(LOWER.indexOf(str[x]) !== -1)
//     {
//         result.push(str[x].toUpperCase());
//     }
//     else
//     {
//         result.push(str[x]);
//     }
// }
// document.write(result.join(''));