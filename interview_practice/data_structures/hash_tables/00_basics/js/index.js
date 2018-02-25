
class Hash {
  constructor(base = {}, props, vals) {
    this.head = base;
    if (props && vals) { this.head === this.insertHashWithArrs(props, vals); }
    this.hashSection = this.head;
    this.lvl = 0;
  }

  fill(props, vals) {
    console.log(props, vals);
    if (!Array.isArray(props) || !Array.isArray(vals) || props.length !== vals.length) {
      return this.head;
    }
    props.forEach((prop, idx) => {
      if (Array.isArray(vals[idx]) && vals[idx].length === 2 && vals[idx].every(arr => Array.isArray(arr))) {
        this.head[prop] = new Hash({}, vals[idx][0], vals[idx][1]);
      } else { this.head[prop] = vals[idx]; }
    });

    return this.head;
  }

  insertHashWithArrs(props, vals) {
    if (!Array.isArray(props) || !Array.isArray(vals) || props.length !== vals.length) {
      return {};
    }
    let obj = {};
    console.log('post first IF');
    props.forEach((prop, idx) => {
      if (Array.isArray(vals[idx]) && vals[idx].length === 2 && vals[idx].every(arr => Array.isArray(arr))) {
        this.head[prop] = new Hash({}, vals[idx][0], vals[idx][1]).head;
      } else { this.head[prop] = vals[idx]; }
    });
    return obj;
  }

  map(fn) {
    this.head.keys().forEach((prop, idx) => {
      const val = this.head[prop];
      this.head[prop] = fn(val);
    })
    return this;
  }
  //filter() {}
  //
}

module.exports = { Hash };
