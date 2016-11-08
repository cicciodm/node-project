import * as React from "react";
import * as MainContentActionCreators from "./../ActionCreators/MainContentActionCreators";
import CommonContentStore from "./../Stores/CommonContentStore";

interface IMainContentPageState {
    clickCount: number;
}

export default class MainContentPage extends React.Component<{}, IMainContentPageState> {
    constructor() {
        super(CommonContentStore);
        this.state = {clickCount: 0};
    }
    
    render(): React.ReactElement<{}> {
        return(
            <div>
                <div>{"This is the main component of the App. Welcome."}</div>
                <div>{`Click number is ${this.state.clickCount}`}</div>
                <button onClick={() => this.onAddButtonClick()}>{"Add clicks!"}</button>
                <button onClick={() => this.onRemoveButtonClick()}>{"Remove Clicks!"}</button>
            </div>
        );
    }

    getState(): IMainContentPageState {
        console.log("getting state");
        return {
            clickCount: CommonContentStore.clickCount
        };
    }

    private onAddButtonClick(): void {
        MainContentActionCreators.mainContentPageAddButtonClick();
    }

    private onRemoveButtonClick(): void {
        MainContentActionCreators.mainContentPageRemoveButtonClick();
    }
}