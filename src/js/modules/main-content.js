var MainContent = (function(){

// ************** Generate the tree diagram	 *****************
var height_size = window.innerHeight;
var width_size = window.innerWidth,
    margin = {top: 20, right: 20, bottom: 20, left: 20},
    width = width_size - margin.right - margin.left,
    height = height_size - margin.top - margin.bottom;

var links= json.start()
var jsond3 = json.start() 


var nodes = {};

// Compute the distinct nodes from the links.
links.forEach(function(link) {
    link.source = nodes[link.source] || (nodes[link.source] = {name: link.source, image : link.image, type : link.type, parent : link.parent})
    link.target = nodes[link.target] || (nodes[link.target] = {name: link.target, image : link.image, type : link.type, parent : link.parent})
});

console.log(links)

var force = d3.layout.force()
    .nodes(d3.values(nodes))
    .links(links)
    .size([width/2, height/2])
    .linkDistance(width/4)
    .linkStrength(0.1)
    .charge(-60)
    .gravity(0.02)
    .on("tick", tick)
    .start();

var svg = d3.select("#area2").append("svg")
    .attr("width", width)
    .attr("height", height)

var tip = d3.select("#area2")
        .append("div")
        .attr("class", "tip");
    
        tip.show = function(d) {
          var posX = d3.event.pageX,
              posY = d3.event.pageY - 20; // right: -10

          for (var i = 0; i < jsond3.length; i++) {
            if(d.index == i){

          var html = d.name+ ":<br>" +jsond3[i].type

          tip.html(html);
    
          // Tooltip to the left if it gets out of the window
          var tipBox = tip.node().getBoundingClientRect();
          if(posX + tipBox.width > window.innerWidth) {
            posX -= tipBox.width + 10;
          } else {
            posX += 10;
          }
          tip.attr('style', `visibility: visible; left: ${posX}px; top: ${posY}px`);
        };
      }
      force.stop()         
    }

    tip.hide = function(){
        tip.style("visibility", "hidden");
        force.start()  
    }

// build the arrow.
// svg.append("svg:defs").selectAll("marker")
//     .data(["end"])      // Different link/path types can be defined here
//   .enter().append("svg:marker")    // This section adds in the arrows
//     .attr("id", String)
//     .attr("viewBox", "0 -5 10 10")
//     .attr("refX", 15)
//     .attr("refY", -1.5)
//     .attr("markerWidth", 6)
//     .attr("markerHeight", 6)
//     .attr("orient", "auto")
//     .append("svg:path")
//     .attr("d", "M0,-5L10,0L0,5")
    

// add the links and the arrows
var path = svg.append("svg:g").selectAll("path")
    .data(force.links())
    .enter().append("svg:path")
    .attr("class", function(d) { return "link " + d.source.parent})

    console.log(force.links())
    
// define the nodes
var node = svg.selectAll(".node")
    .data(force.nodes())
    .enter()
    .append("g")
    .attr("class", "node")    
    .call(force.drag)

node.append("image")
        //   .attr("xlink:href", function(d){              
        //       console.log(d)
        //         for (var i = 0; i < jsond3.length; i++) {
        //           if(d.index == i){
        //               // console.log(jsond3[i])
        //               return jsond3[i].image
        //           }
        //           else if(d.index == 0){
        //               return jsond3[0].image
        //           }    
        //         }
        //   })
          .attr("xlink:href", function(d){return d.image}) 
          .attr("x", -10)
          .attr("y", -10)
          .attr("class", "image")
          .attr("width", 16)
          .attr("height", 16)
          .on("mouseover", tip.show)
          .on("mouseout", tip.hide)
          .on("click", click)

// add the text 
node.append("text")
    .attr("x", 12)
    .attr("dy", ".35em")
    .text(function(d) { return d.name; })


// add the curvy lines
function tick() {
    path.attr("d", function(d) {
        var dx =  d.source.x - d.target.x,
            dy = d.source.y - d.target.y,
            dr = Math.sqrt(dx * dx + dy * dy);
        return "M" + 
            d.source.x + "," + 
            d.source.y + "A" + 
            dr + "," + dr + " 0 0,1 " + 
            d.target.x + "," + 
            d.target.y;
    })

    node
        .attr("transform", function(d) { 
          return "translate(" + d.x + "," + d.y + ")"; })        
}

function click(d) {
    // while (d.parent) {
    //     d3.selectAll(".link").classed("link-click", false);
    //     d3.selectAll(".link"+ "."+d.parent).classed("link-click", true);        
    //     d = d.parent;
    // }
    console.log($(this).prev())

}

})();
