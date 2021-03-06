import { TickInputHandler } from './model/TickInputHandler';
var possibleEvents = new Set(["input", "onpropertychange", "keyup", "change", "paste"]);

window.onload = () => {
    var ticksInput = document.getElementById("ticks") as HTMLInputElement;
    possibleEvents.forEach((eventName: string) => {
        ticksInput.addEventListener(eventName, (ev: Event) => {
            var inputElement = ev.target as HTMLInputElement;
            var handler = new TickInputHandler();
            handler.showResult(inputElement);
        })
    });
};