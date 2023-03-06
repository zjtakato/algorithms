const data = [
  { id: '02', name: '小亮', pid: '01', job: '产品leader' },
  { id: '01', name: '张大大', pid: '', job: '项目经理' },
  { id: '03', name: '小美', pid: '01', job: 'UIleader' },
  { id: '05', name: '老王', pid: '01', job: '测试leader' },
  { id: '04', name: '老马', pid: '01', job: '技术leader' },
  { id: '06', name: '老李', pid: '01', job: '运维leader' },
  { id: '08', name: '大光', pid: '02', job: '产品经理' },
  { id: '07', name: '小丽', pid: '02', job: '产品经理' },
  { id: '15', name: '小涛', pid: '06', job: '运维工程师' },
  { id: '09', name: '小高', pid: '03', job: 'UI设计师' },
  { id: '10', name: '小刘', pid: '04', job: '前端工程师' },
  { id: '12', name: '小李', pid: '04', job: '后端工程师' },
  { id: '11', name: '小华', pid: '04', job: '后端工程师' },
  { id: '14', name: '小强', pid: '05', job: '测试工程师' },
  { id: '13', name: '小赵', pid: '05', job: '测试工程师' },
]

/**
 * - 实现O(n)的思路：在同一个循环里，同时处理id和pid
 * - map最坏情况是数组的length， 最好的情况是tree的深度
 * 
 * 数组转树状结构
 * @param {Array} array
 */
function flatToNest(array) {
  const map = {};
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const { id, pid } = item;
    map[id] = {
      ...item,
      children: map.hasOwnProperty(id) ? map[id].children : [],
    };
    if (!pid) {
      result.push(map[id]);
      continue;
    }
    if (!map.hasOwnProperty(pid)) {
      map[pid] = {
        children: [],
      };
    }
    map[pid].children.push(map[id]);
  }
  return result;
}
const result = flatToNest(data);
console.dir(result, { depth: 999 });
