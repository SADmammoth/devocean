function Duration(input) {
  if (!input) {
    this.value = NaN;
    return;
  }

  if (typeof input === 'number') {
    this.value = input;
    return;
  }
  if (input.endsWith('ms')) {
    this.value = parseInt(input);
  }

  if (input.endsWith('s')) {
    this.value = parseInt(input) * 100;
  }

  if (input.endsWith('m')) {
    this.value = parseInt(input) * 6000;
  }
  if (input.endsWith('h')) {
    this.value = parseInt(input) * 360000;
  }
}

Duration.prototype.valueOf = function () {
  return this.value;
};

Duration.prototype.getHours = function () {
  return truncate(this.value, 100) / 360000;
};
Duration.prototype.getTime = function () {
  return this.valueOf();
};

Duration.prototype.toString = function () {
  return truncate(this.getHours().toString(), 100) + 'h';
};

function truncate(value, precision) {
  return parseInt(value * precision) / precision;
}

export default Duration;
