import * as React from "react";
import { storiesOf } from "@storybook/react";
import { FormattedMessage } from "react-intl";

storiesOf("Landing", module).add("default", () => (
	<div>
		Hello storybook! <FormattedMessage id="hello" />
	</div>
));
