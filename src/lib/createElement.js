export default function createElement(type, props, ...children) {
  // children is a rest parameter
  const el = document.createElement(type)
  Object.assign(el, props)
  children && el.append(...children.map(child => child.el ?? child)) // spread operator
  return el
}

/* function createElementWithClass(type, className) {
  const element = document.createElement(type);
  element.className = className
  return element;
}
 */
