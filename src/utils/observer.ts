type MyFunctionType<T = unknown, R = unknown> = (...args: T[]) => R;
type SubscriberEventType = Map<string, Array<MyFunctionType>>;
type MessageType = {
  events: Map<string, SubscriberEventType>;
  on: (eventName: string, subscriber: string, callback: MyFunctionType) => void;
  emit: <T extends unknown[]>(eventName: string, ...args: T) => void;
  off: (eventName: string, subscriber?: string) => void;
};
const Observer: MessageType = {
  events: new Map(),
  // 注册信息
  on(eventName, subscriber, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, new Map());
    }

    const subscribers = this.events.get(eventName) as SubscriberEventType;
    if (!subscribers.has(subscriber)) {
      subscribers.set(subscriber, []);
    }

    subscribers.get(subscriber)?.push(callback);
  },
  // 发布消息
  emit(eventName, ...args) {
    if (!this.events.has(eventName)) {
      return;
    }

    const subscribers = this.events.get(eventName) as SubscriberEventType;
    subscribers.forEach(subscriber => {
      subscriber.forEach(callback => callback(...args));
    });
  },
  // 移除消息
  off(eventName, subscriber) {
    if (!this.events.has(eventName)) {
      return;
    }

    const subscribers = this.events.get(eventName) as SubscriberEventType;
    if (subscriber) {
      subscribers.delete(subscriber);
    } else {
      this.events.delete(eventName);
    }
  },
};

export default Observer;
