declare module collections {
    interface ICompareFunction<T> {
        (a: T, b: T): number;
    }
    interface IEqualsFunction<T> {
        (a: T, b: T): boolean;
    }
    interface ILoopFunction<T> {
        (a: T): boolean;
    }
    function defaultCompare<T>(a: T, b: T): number;
    function defaultEquals<T>(a: T, b: T): boolean;
    function defaultToString(item: any): string;
    function makeString<T>(item: T, join?: string): string;
    function isFunction(func: any): boolean;
    function isUndefined(obj: any): boolean;
    function isString(obj: any): boolean;
    function reverseCompareFunction<T>(compareFunction: ICompareFunction<T>): ICompareFunction<T>;
    function compareToEquals<T>(compareFunction: ICompareFunction<T>): IEqualsFunction<T>;
    module arrays {
        function indexOf<T>(array: T[], item: T, equalsFunction?: IEqualsFunction<T>): number;
        function lastIndexOf<T>(array: T[], item: T, equalsFunction?: IEqualsFunction<T>): number;
        function contains<T>(array: T[], item: T, equalsFunction?: IEqualsFunction<T>): boolean;
        function remove<T>(array: T[], item: T, equalsFunction?: IEqualsFunction<T>): boolean;
        function frequency<T>(array: T[], item: T, equalsFunction?: IEqualsFunction<T>): number;
        function equals<T>(array1: T[], array2: T[], equalsFunction?: IEqualsFunction<T>): boolean;
        function copy<T>(array: T[]): T[];
        function swap<T>(array: T[], i: number, j: number): boolean;
        function toString<T>(array: T[]): string;
        function forEach<T>(array: T[], callback: (item: T) => boolean): void;
    }
    interface ILinkedListNode<T> {
        element: T;
        next: ILinkedListNode<T>;
    }
    class LinkedList<T> {
        public firstNode: ILinkedListNode<T>;
        private lastNode;
        private nElements;
        constructor();
        public add(item: T, index?: number): boolean;
        public first(): T;
        public last(): T;
        public elementAtIndex(index: number): T;
        public indexOf(item: T, equalsFunction?: IEqualsFunction<T>): number;
        public contains(item: T, equalsFunction?: IEqualsFunction<T>): boolean;
        public remove(item: T, equalsFunction?: IEqualsFunction<T>): boolean;
        public clear(): void;
        public equals(other: LinkedList<T>, equalsFunction?: IEqualsFunction<T>): boolean;
        private equalsAux(n1, n2, eqF);
        public removeElementAtIndex(index: number): T;
        public forEach(callback: (item: T) => boolean): void;
        public reverse(): void;
        public toArray(): T[];
        public size(): number;
        public isEmpty(): boolean;
        public toString(): string;
        private nodeAtIndex(index);
        private createNode(item);
    }
    class Dictionary<K, V> {
        private table;
        private nElements;
        private toStr;
        constructor(toStrFunction?: (key: K) => string);
        public getValue(key: K): V;
        public setValue(key: K, value: V): V;
        public remove(key: K): V;
        public keys(): K[];
        public values(): V[];
        public forEach(callback: (key: K, value: V) => any): void;
        public containsKey(key: K): boolean;
        public clear(): void;
        public size(): number;
        public isEmpty(): boolean;
        public toString(): string;
    }
    class MultiDictionary<K, V> {
        private dict;
        private equalsF;
        private allowDuplicate;
        constructor(toStrFunction?: (key: K) => string, valuesEqualsFunction?: IEqualsFunction<V>, allowDuplicateValues?: boolean);
        public getValue(key: K): V[];
        public setValue(key: K, value: V): boolean;
        public remove(key: K, value?: V): boolean;
        public keys(): K[];
        public values(): V[];
        public containsKey(key: K): boolean;
        public clear(): void;
        public size(): number;
        public isEmpty(): boolean;
    }
    class Heap<T> {
        private data;
        private compare;
        constructor(compareFunction?: ICompareFunction<T>);
        private leftChildIndex(nodeIndex);
        private rightChildIndex(nodeIndex);
        private parentIndex(nodeIndex);
        private minIndex(leftChild, rightChild);
        private siftUp(index);
        private siftDown(nodeIndex);
        public peek(): T;
        public add(element: T): boolean;
        public removeRoot(): T;
        public contains(element: T): boolean;
        public size(): number;
        public isEmpty(): boolean;
        public clear(): void;
        public forEach(callback: (item: T) => boolean): void;
    }
    class Stack<T> {
        private list;
        constructor();
        public push(elem: T): boolean;
        public add(elem: T): boolean;
        public pop(): T;
        public peek(): T;
        public size(): number;
        public contains(elem: T, equalsFunction?: IEqualsFunction<T>): boolean;
        public isEmpty(): boolean;
        public clear(): void;
        public forEach(callback: ILoopFunction<T>): void;
    }
    class Queue<T> {
        private list;
        constructor();
        public enqueue(elem: T): boolean;
        public add(elem: T): boolean;
        public dequeue(): T;
        public peek(): T;
        public size(): number;
        public contains(elem: T, equalsFunction?: IEqualsFunction<T>): boolean;
        public isEmpty(): boolean;
        public clear(): void;
        public forEach(callback: ILoopFunction<T>): void;
    }
    class PriorityQueue<T> {
        private heap;
        constructor(compareFunction?: ICompareFunction<T>);
        public enqueue(element: T): boolean;
        public add(element: T): boolean;
        public dequeue(): T;
        public peek(): T;
        public contains(element: T): boolean;
        public isEmpty(): boolean;
        public size(): number;
        public clear(): void;
        public forEach(callback: ILoopFunction<T>): void;
    }
    class Set<T> {
        private dictionary;
        constructor(toStringFunction?: (item: T) => string);
        public contains(element: T): boolean;
        public add(element: T): boolean;
        public intersection(otherSet: Set<T>): void;
        public union(otherSet: Set<T>): void;
        public difference(otherSet: Set<T>): void;
        public isSubsetOf(otherSet: Set<T>): boolean;
        public remove(element: T): boolean;
        public forEach(callback: ILoopFunction<T>): void;
        public toArray(): T[];
        public isEmpty(): boolean;
        public size(): number;
        public clear(): void;
        public toString(): string;
    }
    class Bag<T> {
        private toStrF;
        private dictionary;
        private nElements;
        constructor(toStrFunction?: (item: T) => string);
        public add(element: T, nCopies?: number): boolean;
        public count(element: T): number;
        public contains(element: T): boolean;
        public remove(element: T, nCopies?: number): boolean;
        public toArray(): T[];
        public toSet(): Set<T>;
        public forEach(callback: ILoopFunction<T>): void;
        public size(): number;
        public isEmpty(): boolean;
        public clear(): void;
    }
    class BSTree<T> {
        private root;
        private compare;
        private nElements;
        constructor(compareFunction?: ICompareFunction<T>);
        public add(element: T): boolean;
        public clear(): void;
        public isEmpty(): boolean;
        public size(): number;
        public contains(element: T): boolean;
        public remove(element: T): boolean;
        public inorderTraversal(callback: ILoopFunction<T>): void;
        public preorderTraversal(callback: ILoopFunction<T>): void;
        public postorderTraversal(callback: ILoopFunction<T>): void;
        public levelTraversal(callback: ILoopFunction<T>): void;
        public minimum(): T;
        public maximum(): T;
        public forEach(callback: ILoopFunction<T>): void;
        public toArray(): T[];
        public height(): number;
        private searchNode(node, element);
        private transplant(n1, n2);
        private removeNode(node);
        private inorderTraversalAux(node, callback, signal);
        private levelTraversalAux(node, callback);
        private preorderTraversalAux(node, callback, signal);
        private postorderTraversalAux(node, callback, signal);
        private minimumAux(node);
        private maximumAux(node);
        private heightAux(node);
        private insertNode(node);
        private createNode(element);
    }
}
