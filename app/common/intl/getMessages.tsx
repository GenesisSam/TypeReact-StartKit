import * as en from "./assets/en.json";
import * as ko from "./assets/ko.json";

export const SUPPORT_LOCALES = ["ko", "en"];

export default function getMessages(locale: string) {
	switch (locale) {
		case "en":
			return en;

		default:
		case "ko":
			return ko;
	}
}
