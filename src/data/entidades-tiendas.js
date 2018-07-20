var json = (function () {
  var init = function () {
    var links = [
      { source: "Walter Ríos", 
        target: "Nelson Aparicio", 
        type: "Hola Walter", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ" },
      { source: "Nelson Aparicio", 
        target: "Walter Ríos", 
        type: "Hola Nelson", 
        image: "https://image.flaticon.com/icons/svg/34/34353.svg" },
      { source: "Samsung", 
        target: "Apple", 
        type: "Samsung" },
      { source: "Motorola", 
        target: "Apple", 
        type: "Motorola" },
      { source: "Nokia", 
        target: "Apple", 
        type: "resolved" },
      { source: "HTC", 
        target: "Apple", 
        type: "HTC" },
      { source: "Kodak", 
        target: "Apple", 
        type: "Kodak" },
      { source: "Microsoft", 
        target: "Barnes & Noble", 
        type: "Microsoft" },
      { source: "Microsoft", 
        target: "Foxconn", 
        type: "suit" }
    ];
    return links;
  }

  return {
    start: init
  };
})();

$(function () {
  console.log(json.start());
});