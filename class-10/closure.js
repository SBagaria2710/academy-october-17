// function parent() {
//   var a = 10;

//   function child() {
//     console.log(a);
//   }

//   return child;
// }

// let functionReceived = parent();
// functionReceived(); // 10

// ------
function parent() {
  var a = 10;

  function child() {
    var b = 20;
    console.log(a);

    function child2() {
      var c = 30;
      console.log(a + b);

      function child3() {
        console.log(a + b + c);
      }

      return child3;
    }

    return child2;
  }

  return child;
}

let functionRecevied = parent();
let child2Received = functionRecevied();
let child3Received = child2Received();
child3Received();
