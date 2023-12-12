// Get the .attendance element
var attendanceElement = document.querySelector('.attendance');

// Apply styles using JavaScript
attendanceElement.style.width = '160px';
attendanceElement.style.height = '160px';
attendanceElement.style.position = 'relative';

var outerElement = attendanceElement.querySelector('.outer');
outerElement.style.height = '160px';
outerElement.style.width = '160px';
outerElement.style.borderRadius = '50%';
outerElement.style.padding = '20px';
outerElement.style.boxShadow = '6px 6px 10px -1px rgba(0, 0, 0, 0.15), -6px -6px 10px -1px rgba(255, 255, 255, 0.7)';

var innerElement = outerElement.querySelector('.inner');
innerElement.style.height = '120px';
innerElement.style.width = '120px';
innerElement.style.borderRadius = '50%';
innerElement.style.display = 'flex';
innerElement.style.alignItems = 'center';
innerElement.style.justifyContent = 'center';
innerElement.style.boxShadow = 'inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2), inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7), -0.5px -0.5px 0px rgba(255, 255, 255, 1), 0.5px 0.5px 0px rgba(0, 0, 0, 0.15), 0px 12px 10px -10px rgba(0, 0, 0, 0.05)';

var nammaIdElement = innerElement.querySelector('#namma_id');
nammaIdElement.style.fontWeight = '600';
nammaIdElement.style.color = '#555';

var circleElement = attendanceElement.querySelector('circle');
circleElement.style.fill = 'none';
circleElement.style.stroke = 'url(#GradientColor)';
circleElement.style.strokeWidth = '20px';
circleElement.style.strokeDasharray = '472';
circleElement.style.strokeDashoffset = '472';

var svgElement = attendanceElement.querySelector('svg');
svgElement.style.position = 'absolute';
svgElement.style.top = '0';
svgElement.style.left = '0';

// Apply animation using JavaScript
var keyframes = `@keyframes anim {
  100% {
    stroke-dashoffset: 165;
  }
}`;

var styleSheet = document.styleSheets[0];
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

// Append the attendance element to the document body or another parent element
// document.body.appendChild(attendanceElement);
