import Sort from './sort.js';

/**
 * 堆排序
 */
class Heap extends Sort{
    constructor(arr) {
        console.log('This is Heap sort:');
        super(arr);
    }

    /**
     * O(nlgn)
     * 
     * 思路：
     * 基于堆。
     */
    sort() {
        // 构造堆
        this.arr.unshift(null);
        var n = this.arr.length - 1;
        var index = Math.floor(n / 2);
        for (var k = index; k >= 1; k--) {
            this.sink(this.arr, k, n);
        }

        // 下沉排序
        while (n > 1) {
            [this.arr[1], this.arr[n]] = [this.arr[n], this.arr[1]];
            n--;
            this.sink(this.arr, 1, n);
        }
        this.arr.shift();
    }

    /**
     * 下沉操作
     */
    sink(arr, k, n) {
        while (2 * k <= n) {
            var j = 2 * k;
            if (j < n && arr[j + 1] > arr[j]) {
                j++;
            }
            if (arr[k] > arr[j]) {
                break;
            }
            [arr[k], arr[j]] = [arr[j], arr[k]]
            k = j;
        }
    }
}

export default Heap;
