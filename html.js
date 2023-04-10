function HTMLElements(str) {
    const stack = [];
    const regex = /<\/?[a-z]+>/g; // regular expression to match HTML tags
    let match;
    
    while ((match = regex.exec(str)) !== null) {
      const tag = match[0];
      if (tag.startsWith("</")) {
        if (stack.length === 0) {
          return tag.substring(2, tag.length - 1); // unmatched closing tag
        }
        const lastTag = stack.pop();
        if (lastTag !== tag.substring(1)) {
          return lastTag.substring(1, lastTag.length - 1); // mismatched opening and closing tags
        }
      } else {
        stack.push(tag);
      }
    }
    
    return stack.length === 0 ? "true" : stack.pop().substring(1, stack.pop().length - 1); // unmatched opening tag
  }
  