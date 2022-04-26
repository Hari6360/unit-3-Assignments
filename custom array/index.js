function myarray() {
  Object.defineProperty(this, "length", {
    value: 0,
    writable: true,
    enumerable: false,
  });

  this.length = arguments.length;

  for (let i = 0; i < this.length; i++) {
    this[i] = arguments[i];
  }
}

let arr = new myarray(1, 2, 3, 4, 5, 6);

console.log(Object.values(arr));

myarray.prototype.push = function (data) {
  let index = this.length;
  this[index] = data;
  this.length++;
};
arr.push("Telugu");
arr.push("Kannada");
arr.push("English");

console.log(Object.values(arr));

myarray.prototype.pop = function () {
  let index = this.length - 1;
  delete this[index];
  this.length--;
};

arr.pop();
console.log(Object.values(arr));

myarray.prototype.top = function () {
  let index = this.length - 1;
  return this[index];
};
console.log(arr.top());

myarray.prototype.print = function () {
  let bag = "";

  for (let i = 0; i < this.length; i++) {
    bag += this[i] + " ";
  }
  console.log(bag);
};
arr.print();

myarray.prototype.reverse = function () {
  let bag = "";

  for (let i = this.length - 1; i >= 0; i--) {
    bag += this[i] + " ";
  }
  console.log(bag);
};
arr.reverse();

myarray.prototype.reversearray = function () {
  let new_bag = [];
  for (let i = this.length - 1; i >= 0; i--) {
    new_bag[this.length - 1 - i] == this[i];
  }
  console.log(new_bag);
};
arr.reversearray();
