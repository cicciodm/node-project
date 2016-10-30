import * as React from "react";
import MainContentPage from "./Components/MainContentPage";

/* tslint:disable */
const styles: any = require("./App.module.less");
/* tslint:enable */

export default class App extends React.Component<{}, {}> {
    render(): React.ReactElement<{}> {
        return(
            <div>
                <MainContentPage />
            </div>
        );
    }
}