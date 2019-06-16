const { Subject, Observer } = require("./observable");

describe("Observable", () => {
  test("can create subject", () => {
    const subject = new Subject("testSubject");
    expect(subject.name).toBe("testSubject");
  });

  test("can create observer", () => {
    const observer = new Observer("observer");
    expect(observer.name).toBe("observer");
  });

  test("subject can add observer", () => {
    const subject = new Subject("testSubject");
    const observer = new Observer("observer");

    subject.addObserver(observer);
    expect(subject.observers.includes(observer)).toBeTruthy();
  });

  test("observer can subscribe to subject", () => {
    const subject = new Subject("testSubject");
    const observer = new Observer("observer");

    observer.subscribe(subject);
    expect(subject.observers.includes(observer)).toBeTruthy();
  });

  test("observer's notify() will run callback with correct param", () => {
    const mockFn = jest.fn();
    const observer = new Observer("observer", mockFn);

    observer.notify("message");
    expect(mockFn.mock.calls.length).toBe(1);
    expect(mockFn.mock.calls[0][0]).toBe("message");
  });

  test("observer run notify() when subject emit a message", () => {
    const subject = new Subject("subject");

    const callback1 = jest.fn();
    const observer1 = new Observer("1stObserver", callback1);

    const callback2 = jest.fn();
    const observer2 = new Observer("2ndObserver", callback2);

    subject.addObserver(observer1);
    subject.addObserver(observer2);

    subject.emit("message");

    expect(callback1.mock.calls.length).toBe(1);
    expect(callback1.mock.calls[0][0]).toBe("message");
    expect(callback2.mock.calls.length).toBe(1);
    expect(callback2.mock.calls[0][0]).toBe("message");
  });
});
