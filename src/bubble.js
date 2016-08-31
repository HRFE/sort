import Sort from './sort.js';

/**
 * 冒泡排序
 */
class Bubble extends Sort{
    constructor(arr) {
        console.log('This is Bubble sort:');
        super(arr);
    }

    sort() {
        /**
         * O(n*2)
         * 
         * 思路：
         * 两层循环，第一次循环将最大的数通过冒泡（交换）的方式放置在数组的最后一个位置，
         * 然后对前n-1个数进行循环冒泡，将次大的数放在倒数第二个位置，以此类推直到数组有序
         */
        for (var i = this.arr.length - 1; i > 0; i--) {
            for (var j = 0; j < i; j++) {
                if (this.arr[j] > this.arr[j + 1]) {
                    // 解构赋值，交换元素
                    [this.arr[j], this.arr[j + 1]] = [this.arr[j + 1], this.arr[j]]
                }
            }
        }
    }
}

export default Bubble;
