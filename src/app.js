/**
 * 排序算法测试
 */
import Bubble from './bubble.js';
import Select from './select.js';
import Insert from './insert.js';


var arr = [8, 1, 4, 3, 9, 6, 7, 0, 5, 2];
//var arr = ['C', 'E', 'A', 'G', 'B', 'D', 'H', 'F'];

var mySort = new Insert(arr);

console.log('Before sort:');
mySort.show();

mySort.sort();

console.log('After sort:');
mySort.show();

console.log('Now arr is sorted? ' + mySort.isSorted());