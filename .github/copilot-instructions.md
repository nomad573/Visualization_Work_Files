# D3.js Visualization Project - AI Assistant Guidelines

This repository contains examples and code samples for data visualization using D3.js, following the book "Interactive Data Visualization for the Web" by Scott Murray.

## Project Structure

- Each chapter directory (`chapter_XX/`) contains progressively complex examples
- HTML files are numbered sequentially within chapters showing step-by-step development
- Common D3.js library file (`d3.js`) is located in the root directory
- Data files (`.csv`, `.json`) are placed alongside their corresponding visualizations

## Key Development Patterns

### Data Loading and Processing
```javascript
// Load CSV data
d3.csv("filename.csv", function(data) {
  // Work with data here
});

// Load JSON data (e.g., for maps or network graphs)
d3.json("filename.json", function(json) {
  // Work with JSON here
});
```

### Force-Directed Graph Setup
```javascript
// Create force simulation
var simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id))
    .force("charge", d3.forceManyBody().strength(-300))
    .force("center", d3.forceCenter(width/2, height/2));

// Link distance is determined by the 'value' property
// Higher values create stronger forces (shorter links)
links.forEach(link => {
    link.distance = 100 / (link.value || 1);
});
```

### Visualization Setup
1. Define dimensions and margins
2. Create SVG container
3. Set up scales and axes
4. Load data
5. Create and bind visual elements

Example from `chapter_06/22_scatterplot.html`:
```javascript
var w = 500;  // Width
var h = 300;  // Height

var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
```

### Common File Types
- `.html` - Main visualization files
- `.csv` - Data files (population, time series)
- `.json` - Graph and map data structures
- `.md` - Documentation and chapter readmes

## Key Files & Examples

- `chapter_06/DocumentationOnScatterplots.md` - Comprehensive D3.js function reference
- `chapter_13/state_migration.html` - Force-directed graph example
- `chapter_14/` - Advanced geographic visualization examples
- `chapter_07/` - Scaling and axis examples
- `chapter_08/` - Advanced axis formatting and time scales

## Project Conventions

1. Each visualization is self-contained in a single HTML file
2. D3.js version compatibility: Use v4+ syntax
3. CSS styles are typically defined in `<style>` tags within HTML files
4. Data files use consistent formats within chapters
5. Force-directed graphs use standard node-link structure
6. Color scales are consistently applied using `d3.scaleOrdinal(d3.schemeCategory10)`

## Common Patterns

### Network Visualization
- Node colors determined by group property
- Link strength/distance controlled by value property
- Force simulation parameters tuned per visualization
- Draggable nodes implemented with d3.drag()

### Data Flow
1. Data loading → Processing → Visual mapping → DOM manipulation
2. Use `.enter()` for adding new elements
3. Use scales to map data domains to visual ranges
4. Chain D3 methods for clean, readable code

### Common Gotchas
- Path to D3.js library must be relative to HTML file location
- Geographic JSON data requires proper projection setup
- Time-series data needs appropriate time parsing and scaling 
- CSV data types need explicit conversion from strings
- Force simulations need proper force strength configuration
- Node-link data must have correct source/target references

Remember to check chapter-specific README files for additional context and data source citations.