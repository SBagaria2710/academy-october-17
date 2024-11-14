// function parent() {
//   function child() {
//     console.log(a); // ??

//     function child2() {
//       var a = 30;
//       console.log(a); // ??
//     }

//     child2();
//   }

//   child();
// }

// parent();

// -----------
function grandparent() {
  let a = 20;

  function parent() {
    console.log("Parent: ", a); // 20

    function child() {
      console.log("Child: ", a); // 20
    }

    child();
    console.log(a); // 20
  }

  parent();
}

grandparent();
