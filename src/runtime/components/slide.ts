import { slideNext, slidePrev } from "../utils/navigation";
import { debounce } from "../utils/commons";
import { move, clientX, diff, initPosition } from "./ZliderWrapper.vue";

export const slide = debounce((event) => {
if (!move.value) return;

//  console.log('slide', event);
clientX.value = event.clientX;

// find % on drag/move
const currPosition = (event.clientX * 100) / window.innerWidth;
diff.value = currPosition - initPosition.value;

const isSlidingRight = Math.sign(diff.value);

Math.abs(diff.value) > 15 && isSlidingRight ? slideNext() : slidePrev();
}, 15);
