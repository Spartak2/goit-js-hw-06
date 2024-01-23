"use strict";

class StringBuilder {
    constructor(initialValue = '') {
      this.value = initialValue;
    }
    getValue(str) {
      return this.value;
    }

    padEnd(str) {
      this.value =+ str;
    }

    padStart(str) {
      this.value = str + this.value;
    }

    padBoth(str) {
      this.value = str + this.value + str;
    }
}


// Використання класу зазначене в завданні:
  const builder = new StringBuilder(".");
  console.log(builder.getValue()); // "."
  builder.padStart("^");
  console.log(builder.getValue()); // "^."
  builder.padEnd("^");
  console.log(builder.getValue()); // "^.^"
