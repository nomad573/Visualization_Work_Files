# D3.js Function Documentation for covid_timeseries_chart.html

Below is a description of each D3 function used in the chart, including its purpose and parameters:

---

### d3.select(selector)
- **Purpose:** Selects the first element in the document that matches the specified selector string.
- **Parameters:**
  - `selector` (string): CSS selector for the element to select (e.g., 'svg').

### .attr(name, value)
- **Purpose:** Sets an attribute for the selected element(s).
- **Parameters:**
  - `name` (string): The attribute name.
  - `value` (string/number/function): The value to set for the attribute.

### .append(type)
- **Purpose:** Appends a new element of the specified type as the last child of each selected element.
- **Parameters:**
  - `type` (string): The type of element to append (e.g., 'g', 'path', 'rect').

### d3.timeParse(format)
- **Purpose:** Returns a function to parse a date string into a JavaScript Date object using the given format.
- **Parameters:**
  - `format` (string): The date format (e.g., '%Y-%m-%d').

### d3.scaleOrdinal()
- **Purpose:** Creates an ordinal scale for mapping a discrete domain to a discrete range of colors or values.
- **Parameters:**
  - `.domain(array)`: Sets the input domain.
  - `.range(array)`: Sets the output range.

### d3.schemeCategory10
- **Purpose:** A built-in array of 10 categorical colors for use with ordinal scales.

### d3.csv(url, callback)
- **Purpose:** Loads and parses a CSV file from the given URL, then calls the callback with the data.
- **Parameters:**
  - `url` (string): Path to the CSV file.
  - `callback` (function): Function called with (error, data).

### d3.scaleTime()
- **Purpose:** Constructs a continuous time scale for mapping dates to pixel values.
- **Parameters:**
  - `.domain(array)`: Sets the input domain (e.g., [minDate, maxDate]).
  - `.range(array)`: Sets the output range (e.g., [0, width]).

### d3.scaleLinear()
- **Purpose:** Constructs a linear scale for mapping continuous input to continuous output.
- **Parameters:**
  - `.domain(array)`: Sets the input domain (e.g., [0, maxValue]).
  - `.range(array)`: Sets the output range (e.g., [height, 0]).
  - `.nice()`: Extends the domain to nice round values.

### d3.extent(array, accessor)
- **Purpose:** Returns the minimum and maximum value in the array, as computed by the accessor function.
- **Parameters:**
  - `array` (Array): The data array.
  - `accessor` (function): Function to extract the value from each element.

### d3.max(array, accessor)
- **Purpose:** Returns the maximum value in the array, as computed by the accessor function.
- **Parameters:**
  - `array` (Array): The data array.
  - `accessor` (function): Function to extract the value from each element.

### d3.axisBottom(scale)
- **Purpose:** Creates a bottom-oriented axis generator for the given scale.
- **Parameters:**
  - `scale` (function): The scale to use for the axis.

### d3.axisLeft(scale)
- **Purpose:** Creates a left-oriented axis generator for the given scale.
- **Parameters:**
  - `scale` (function): The scale to use for the axis.

### d3.line()
- **Purpose:** Creates a line generator for drawing lines based on data.
- **Parameters:**
  - `.x(function)`: Sets the x accessor function.
  - `.y(function)`: Sets the y accessor function.

### .datum(data)
- **Purpose:** Binds data to an element without creating new elements (used for path generation).
- **Parameters:**
  - `data` (Array): The data array to bind.

### .call(function)
- **Purpose:** Invokes the specified function (often an axis generator) with the current selection.
- **Parameters:**
  - `function` (function): The function to call.

### .text(string)
- **Purpose:** Sets the text content of the selected element(s).
- **Parameters:**
  - `string` (string): The text to set.

---

This documentation covers the main D3.js functions and methods used in the COVID-19 time series chart.
