import Dispatcher from "./../Dispatcher/Dispatcher";
import MainContentButtonClickedAction from "./../Actions/MainContentActions/MainContentButtonClickedAction";

export function mainContentPageButtonClick(): void {
    Dispatcher.dispatch(new MainContentButtonClickedAction());
}