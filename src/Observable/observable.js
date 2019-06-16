function Subject(name) {
  this.name = name;
  this.observers = [];

  this.addObserver = function(observer) {
    this.observers.push(observer);
  };

  this.emit = function(message) {
    for (let i = 0; i < this.observers.length; i++) {
      this.observers[i].notify(message);
    }
  };
}

function Observer(name, notify) {
  this.name = name;
  this.notify = notify;

  this.subscribe = function(subject) {
    subject.addObserver(this);
  };
}

module.exports = {
  Subject,
  Observer
};
