import * as React from "react";

export default class MainContentPage extends React.Component<{}, {}> {
    render(): React.ReactElement<{}> {
        return(
            <div>
                <div>{"This is the main component of the App. Welcome."}</div>
                <button onClick={() => this.onButtonClick()}>{"Click!"}</button>
            </div>
        );
    }

    private onButtonClick(): void {
        console.log("Will click");
    }
}