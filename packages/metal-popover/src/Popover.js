'use strict';

import core from 'metal';
import Soy from 'metal-soy';
import { TooltipBase } from 'metal-tooltip';
import templates from './Popover.soy';

/**
 * Popover component. Extends the behavior from `TooltipBase`, adding
 * just some UI to it.
 */
class Popover extends TooltipBase {
	/**
	 * State synchronization logic for `alignElement`. Overrides the original
	 * method from `TooltipBase` so the `content` state can be retrived from
	 * the new aligned element.
	 * @param {Element} alignElement
	 * @param {Element} prevAlignElement
	 * @override
	 */
	syncAlignElement(alignElement) {
		super.syncAlignElement(alignElement);

		if (alignElement) {
			var dataContent = alignElement.getAttribute('data-content');
			if (dataContent) {
				this.content = dataContent;
			}
		}
	}

	/**
	 * State synchronization logic for `visible`. Updates the element's display,
	 * since bootstrap makes it 'none' by default, so we need to change it to
	 * 'block' when the popover becomes visible.
	 * @param {boolean} visible
	 * @override
	 */
	syncVisible(visible) {
		this.element.style.display = visible ? 'block' : '';
		super.syncVisible(visible);
	}
}
Soy.register(Popover, templates);

/**
 * State definition.
 * @type {!Object}
 * @static
 */
Popover.STATE = {
	/**
	 * The popover's content.
	 * @type {string}
	 */
	content: {
		validator: core.isString
	},

	/**
	 * Trigger events used to bind handlers to show and hide popover.
	 * @type {!Array<string>}
	 * @default ['click', 'click']
	 */
	triggerEvents: {
		validator: Array.isArray,
		value: ['click', 'click']
	}
};

/**
 * @inheritDoc
 * @see `Align` class.
 * @static
 */
Popover.Align = TooltipBase.Align;

export default Popover;
