import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import * as React from "react";
const { setIntlConfig, withIntl } = require("storybook-addon-intl");

import * as koMessages from "app/common/intl/assets/ko.json";
import * as enMessages from "app/common/intl/assets/en.json";
const stories = require.context("../app", true, /stories\.tsx$/);

const messagePack: Record<string, any> = {
	ko: koMessages,
	en: enMessages,
};

const getMessages = (locale: string) => messagePack[locale];

// Set intl configuration
setIntlConfig({
	locales: ["en", "ko"],
	defaultLocale: "en",
	getMessages,
});

addDecorator(withKnobs);
addDecorator(withIntl);

function loadStories() {
	stories.keys().forEach(filename => stories(filename));
}
configure(loadStories, module);
