class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.nums = new Array(capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.nums[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.nums[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        // If array is full, double the capacity
        if (this.size === this.capacity) {
            this.resize();
        }

        this.nums[this.size] = n;
        this.size++;
    }

    /**
     * @returns {number}
     */
    popback() {
        this.size--;
        return this.nums[this.size];
    }

    /**
     * @returns {void}
     */
    resize() {
        const newCapacity = this.capacity * 2;
        const newNums = new Array(newCapacity);

        // Copy existing elements
        for (let i = 0; i < this.size; i++) {
            newNums[i] = this.nums[i];
        }

        this.nums = newNums;
        this.capacity = newCapacity;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}