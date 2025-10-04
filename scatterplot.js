// Function to create the visualization (remains largely the same in v4 vs v7 for basic plots)
function drawScatterplot(data) {
    // Set the dimensions and margins of the graph
    const margin = {top: 20, right: 30, bottom: 40, left: 50},
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    // Append the svg object
    const svg = d3.select(".chart-container")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
    
    // Convert string data to numbers (essential in all D3 versions for quantitative data)
    data.forEach(d => {
        d.X_Axis = +d.X_Axis;
        d.Y_Axis = +d.Y_Axis;
        d.Size_Value = +d.Size_Value;
    });

    // Add X axis (d3.scaleLinear and d3.axisBottom are consistent across v4 and v7)
    const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.X_Axis)])
        .range([0, width]);

    svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(xScale));

    // Add Y axis
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.Y_Axis)])
        .range([height, 0]);

    svg.append("g")
        .call(d3.axisLeft(yScale));

    // Color Scale (d3.scaleSequential and d3.interpolateViridis are available in v4 and v7)
    const colorScale = d3.scaleSequential()
        .domain([d3.min(data, d => d.Size_Value), d3.max(data, d => d.Size_Value)])
        .interpolator(d3.interpolateViridis); 

    // Add dots (selection.join is available from v5, so we use the v4 pattern)
    svg.selectAll(".dot")
        .data(data)
        .enter() // Use .enter() for V4, as .join() was introduced in V5
        .append("circle")
        .attr("class", "dot")
        .attr("cx", d => xScale(d.X_Axis))
        .attr("cy", d => yScale(d.Y_Axis))
        .attr("r", 5)
        .style("fill", d => colorScale(d.Size_Value));
}

d3.csv("data.csv", function(error, data) {
    if (error) throw error;
    drawScatterplot(data);
});