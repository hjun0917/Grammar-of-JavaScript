// setTimeout(
//   function (name) {
//     var coffeeList = name;
//     console.log(coffeeList);

//     setTimeout(
//       function (name) {
//         coffeeList += ", " + name;
//         console.log(coffeeList);

//         setTimeout(
//           function (name) {
//             coffeeList += ", " + name;
//             console.log(coffeeList);

//             setTimeout(
//               function (name) {
//                 coffeeList += ", " + name;
//                 console.log(coffeeList);
//               },
//               500,
//               "카페라떼"
//             );
//           },
//           500,
//           "카페모카"
//         );
//       },
//       500,
//       "아메리카노"
//     );
//   },
//   500,
//   "에스프레소"
// );

// promise
// new Promise(function (resolve) {
//   setTimeout(function () {
//   var name = '에스프레소';
//     console.log(name);
//     resolve(name);
//   }, 500);
// }).then(function (prevName) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       var name = prevName + ', 아메리카노';
//       console.log(name);
//       resolve(name);
//     }, 500);
//   });
// }).then(function (prevName) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       var name = prevName + ', 카페모카';
//       console.log(name);
//       resolve(name);
//     }, 500);
//   });
// }).then(function (prevName) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       var name = prevName + ', 카페라떼';
//       console.log(name);
//       resolve(name);
//     }, 500);
//   });
// });

// promise refactoring 
 var addCoffee = function(name) {
  return function(prevName) {
    return new Promise(function(resolve) {
      setTimeout(() => {
        var newName = prevName ? `${prevName}, ${name}` : name;
        console.log(newName);
        resolve(newName);
      }, 500);
    })
  }
 };

 addCoffee("에스프레소")()
 .then(addCoffee("아메리카노"))
 .then(addCoffee("카페라떼"))
 .then(addCoffee("돌체라떼"))

