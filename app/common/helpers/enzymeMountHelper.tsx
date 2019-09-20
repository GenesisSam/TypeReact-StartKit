import * as React from "react";
import { IntlProvider, createIntl } from "react-intl";
import { mount, shallow } from "enzyme";
import getMessages from "common/intl/getMessages";

export function mountWithIntl(node: React.ReactElement, { locale = "en" }) {
	return mount(node, {
		wrappingComponent: IntlProvider,
		wrappingComponentProps: {
			locale: locale,
			defaultLocale: locale,
			messages: getMessages(locale),
		},
	});
}

export function shallowWithIntl(node: React.ReactElement, { locale = "en" }) {
	return shallow(node, {
		wrappingComponent: IntlProvider,
		wrappingComponentProps: {
			locale: locale,
			defaultLocale: locale,
			messages: getMessages(locale),
		},
	});
}
