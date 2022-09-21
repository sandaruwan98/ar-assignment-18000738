window.onload = function () {
        
    const shpcontainer = document.getElementById("shape-container");
    const objArray = shpcontainer.querySelectorAll(".shape");

    const txtelement = document.querySelector(".text");
    const txtArray = ['Cube','Sphere','Cylinder','Cone','Tetrahedron']

    var i=1;
    const no_of_shapes = objArray.length;
    document
      .querySelector(".change-button")
      .addEventListener("click", function () {

          objArray[(i-1)%no_of_shapes].setAttribute("visible",false);
          objArray[i%no_of_shapes].setAttribute("visible",true);
          objArray[(i+1)%no_of_shapes].setAttribute("visible",false);

          txtelement.innerHTML = txtArray[i%no_of_shapes]
          i++;
          console.log(i);

      });
  };