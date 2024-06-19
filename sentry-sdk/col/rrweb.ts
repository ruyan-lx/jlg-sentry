import { record } from 'rrweb';
// events存储录屏信息
export const events = [];
// record 用于记录DOM中的所有变更
record({
	emit(event, isCheckout) {
		// isCheckout 是一个标识，告诉你重新制作了快照
		if (isCheckout) {
			events.push([]);
		}
		events.push(event);
	},
	recordCanvas: true, // 记录 canvas 内容
	checkoutEveryNms: 10 * 1000, // 每10s重新制作快照
	checkoutEveryNth: 200, // 每 200 个 event 重新制作快照
});
