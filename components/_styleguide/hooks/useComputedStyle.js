import React from "react";

/**
 * Hook to get computed styles of an element
 * @param {string} tagName - The element to create.
 * @param {Array} properties - Array of CSS properties to get
 * @returns {Object} - Object containing the computed styles
 */
export default function useComputedStyle(tagName, properties) {
  const [style, setStyle] = React.useState({});
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) {
      const computedStyle = window.getComputedStyle(ref.current);
      let computed = {};
      properties.forEach((prop) => {
        try {
          const value = computedStyle.getPropertyValue(prop);
          if (value.startsWith("rgba")) {
            const rgba = value.match(/rgba\((\d+), (\d+), (\d+), ([\d.]+)\)/);
            if (rgba) {
              const hex = `#${((1 << 24) + (parseInt(rgba[1]) << 16) + (parseInt(rgba[2]) << 8) + parseInt(rgba[3])).toString(16).slice(1)}`;
              computed[prop] = hex;
            }
          } else if (value.startsWith("rgb")) {
            const rgb = value.match(/rgb\((\d+), (\d+), (\d+)\)/);
            if (rgb) {
              const hex = `#${((1 << 24) + (parseInt(rgb[1]) << 16) + (parseInt(rgb[2]) << 8) + parseInt(rgb[3])).toString(16).slice(1)}`;
              computed[prop] = hex;
            }
          } else {
            computed[prop] = value;
          }
        } catch (error) {
          console.error(`Error getting property ${prop}:`, error);
        }
      });
      setStyle(computed);
    }
  }, [ref]);

  return {
    rules: style,
    ComputedStyleEl: ({ children, className }) =>
      React.createElement(
        tagName,
        {
          ref,
          className: className || "",
        },
        children,
      ),
  };
}
