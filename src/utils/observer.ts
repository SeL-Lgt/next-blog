type MyFunctionType<T = unknown, R = unknown> = (...args: T[]) => R;
type SubscriberEventType<T = unknown, R = unknown> = Map<
  string,
  Array<MyFunctionType<T, R>>
>;
type MessageType = {
  events: Map<string, SubscriberEventType>;
  on: <T = unknown, R = unknown>(
    eventName: string,
    subscriber: string,
    callback: MyFunctionType<T, R>
  ) => void;
  emit: <T extends unknown[]>(eventName: string, ...args: T) => void;
  off: (eventName: string, subscriber?: string) => void;
};
const Observer: MessageType = {
  events: new Map(),
  // 注册信息
  on<T = unknown, R = unknown>(
    eventName: string,
    subscriber: string,
    callback: MyFunctionType<T, R>
  ) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, new Map());
    }

    const subscribers = this.events.get(eventName) as SubscriberEventType<T, R>;
    if (!subscribers.has(subscriber)) {
      subscribers.set(subscriber, []);
    }

    subscribers.get(subscriber)?.push(callback);
  },
  // 发布消息
  async emit(eventName, ...args) {
    const subscribers = this.events.get(eventName) as SubscriberEventType;
    if (!this.events.has(eventName)) {
      return;
    }
    const promises: Promise<unknown>[] = [];
    subscribers.forEach(callbacks => {
      callbacks.forEach(callback => {
        promises.push(Promise.resolve(callback(...args)));
      });
    });

    await Promise.all<unknown>(promises);
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
