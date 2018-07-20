var MainContent = (function(){

// ************** Generate the tree diagram	 *****************
var height_size = window.innerHeight;
var width_size = window.innerWidth,
    margin = {top: 20, right: 20, bottom: 20, left: 20},
    width = width_size - margin.right - margin.left,
    height = height_size - margin.top - margin.bottom;

    var nodes = {};
    var types = {};
    var links = json.start()

    
    links.forEach(function(link) {
      link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
      link.target = nodes[link.target] || (nodes[link.target] = {name: link.target});
      link.type = types[link.type] || (types[link.type] = link.type);       
      console.log(links)
    }); 
    console.log(links)
    // Compute the distinct nodes from the links.
    var force = d3.layout.force()
              .nodes(d3.values(nodes))
              .links(links)
              .size([width, height])
              .linkDistance(500)
              .linkStrength(0.1)
              .charge(-300)
              .gravity(0.2)
              .on("tick", tick)
              .start();
    
    var svg = d3.select("#area2").append("svg")
        .attr("width", width)
        .attr("height", height);
    
   var link = svg.selectAll(".link")
        .data(force.links())
        .enter().append("line")
        .attr("class", "link");
    
     console.log(force.links())

   var node = svg.selectAll(".node")
        .data(force.nodes())
        .enter().append("g")
        .attr("class", "node")
        .call(force.drag);
    // console.log(force.nodes())
    // update()

    // function update(){      

      var tip = d3.select("#area2")
                .data(link)
                .enter()
                .append("div")
                .attr("class", "tip");     

      tip.show = function(link){
        
        var posX = d3.event.pageX,
            posY = d3.event.pageY; // right: -10

        var html = "";
        //     type = d;
  
        // html += type;
        console.log(link)
        // if(type) {
        //   html += ": <p>" + type[0].toUpperCase() + type.substr(1).replace(/_/g, ' ') + "</p>";
        // }
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

      
      tip.hide = function(){
        tip.style("visibility", "hidden");
      }     

      node.append("image")
        .attr("xlink:href", function(d){
          return d.image
        })
        .attr("x", -8)
        .attr("y", -8)
        .attr("width", 16)
        .attr("height", 16)
        .on("mouseover", tip.show)
        .on("mouseout", tip.hide)        // .on("click", click)
        
        

        node.append("text")
            .attr("x", 12)
            .attr("dy", ".35em")
            .text(function(d) { return d.name; });
    
// } 

    function tick() {
      link
          .attr("x1", function(d) { return d.source.x; })
          .attr("y1", function(d) { return d.source.y; })
          .attr("x2", function(d) { return d.target.x; })
          .attr("y2", function(d) { return d.target.y; });
    
      node
          .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
    }

    // function click(d) {
    //   if (!d3.event.defaultPrevented) {
    //     if (d.target) {
    //       d._children = d.target;
    //       d.target = null;
    //     } else {
    //       d.target = d._children;
    //       d._children = null;      
    //     }
    //     update();
    //   }
    // }
 
})();
