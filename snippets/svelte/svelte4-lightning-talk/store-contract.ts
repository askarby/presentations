type Subscription = (value: any) => void;
type UnSubscribe = () => void;

interface Store {
    subscribe: (sub: Subscription) => UnSubscribe;
    set?: (value: any) => void 
}