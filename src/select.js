import Sort from './sort.js';

/**
 * 选择排序
 */
class Select extends Sort{
    constructor(arr) {
        console.log('This is Select sort:');
        super(arr);
    }

    sort() {
        /**
         * O(n*2)
         * 
         * 思路：
         * 两层循环，第一次循环将0~n-1中最小的元素放到第一个位置，接着第二次循环将1~n-1中最小的元素放到第二个位置
         * 以此类推，直到数组有序
         */
        for (var i = 0; i < this.arr.length; i++){
            var min_index = i;
            for (var j = i; j < this.arr.length; j++) {
                // 寻找本次遍历最小的元素
                min_index = this.arr[j] < this.arr[min_index] ? j : min_index;
            }
            [this.arr[i], this.arr[min_index]] = [this.arr[min_index], this.arr[i]]
        }
    }
}

export default Select;
