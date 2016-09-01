import Sort from './sort.js';

/**
 * 快速排序
 */
class Quick extends Sort{
    constructor(arr) {
        console.log('This is Quick sort:');
        super(arr);
    }

    /**
     * O(nlgn)
     * 
     * 思路：
     * 分治法，取数组中第一个数为基准，经过切分算法后，所有小于基准的数都在基准的左边，所有大于基准的数都在右边。
     * 然后以相同的方式处理左右子数组，即可数组有序。
     */
    /**
     * 排序入口
     */
    sort() {
        this.quickSort(this.arr, 0, this.arr.length - 1);
    }

    /**
     * 排序主算法
     */
    quickSort(arr, i, j) {
        if (i >= j) {
            return;
        }

        var k = this.partition(arr, i, j);
        this.quickSort(arr, i, k - 1);
        this.quickSort(arr, k + 1, j);
    }

    /**
     * 切分算法
     * 排序后，将切分点返回
     */
    partition(arr, i, j) {
        var base = arr[i];
        var lo = i, hi = j;
        while (i < j) {
            while (arr[i] <= base) {
                i++;
                if (i == hi) {
                    break;
                }
            }
            while (arr[j] >= base) {
                j--;
                if (j == lo) {
                    break;
                }
            }

            if (i >= j) {
                break;
            }

            [arr[i], arr[j]] = [arr[j], arr[i]]
        }

        [arr[lo], arr[j]] = [arr[j], arr[lo]]
        return j;
    }

    /**
     * 切分算法二
     */
    // partition(arr, i, j) {
    //     var base = arr[i];
    //     var flag = true;
    //     while (i < j) {
    //         if (flag) {
    //             while (arr[j] >= base && j > i) {
    //                 j--;
    //             }
    //             if (j > i) {
    //                 arr[i] = arr[j];
    //                 flag = false;
    //             }
    //         } else {
    //             while (arr[i] <= base && i < j) {
    //                 i++;
    //             }
    //             if (i < j) {
    //                 arr[j] = arr[i];
    //                 flag = true;
    //             }
    //         }
    //     }
    //     arr[i] = base;
    //     return i;
    // }
}

export default Quick;