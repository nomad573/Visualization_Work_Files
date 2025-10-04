In your scatterplot.js code, the svg object is created by D3.js when you select a container and append an SVG element to it.

Specifically, this line creates the svg object:


const svg = d3.select(".chart-container")    
	.append("svg")    
	.attr("width", width + margin.left + margin.right)    
	.attr("height", height + margin.top + margin.bottom)    
	.append("g")    
	.attr("transform", `translate(${margin.left},${margin.top})`);


Explanation:

d3.select(".chart-container") selects the HTML element with class chart-container.
	.append("svg") creates a new SVG element inside that container.
	.attr("width", ...) and .attr("height", ...) set the SVG's size.
	.append("g") adds a group (<g>) element inside the SVG for easier transformations and layout.
The final result is that svg refers to the <g> group inside your SVG, and all subsequent drawing
 (axes, circles, etc.) is done within this group.
 
Origin:	The svg object is not a built-in JavaScript object; it is a D3.js selection representin
  g the <g> group inside the SVG element you created and configured.