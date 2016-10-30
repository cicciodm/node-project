import BaseStore from "./BaseStore";
import MainContentButtonClickedAction from "./../Actions/MainContentActions/MainContentButtonClickedAction";

class CommonContentStore extends BaseStore {

    private _clickCount: number = 0;

    constructor() {
        super();

        this.addActionCallback(MainContentButtonClickedAction, this.onMainButtonClicked);
    }

    public get clickCount(): number {
        return this._clickCount;
    }

    private onMainButtonClicked(action: MainContentButtonClickedAction): void {
        console.log("Store has received action");
        this._clickCount++;
    }
}

export default new CommonContentStore();