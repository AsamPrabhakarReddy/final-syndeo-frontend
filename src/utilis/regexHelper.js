// Custom function to replace lookbehind
function matchPattern(str) {
    const regex = /a(b)/; // Simple regex without lookbehind
    const match = regex.exec(str);
    return match ? match[1] : null;
  }
  
  // Usage
  const result = matchPattern(str);
  