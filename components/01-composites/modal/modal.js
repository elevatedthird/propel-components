/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/bootstrap/js/dist/modal.js":
/*!*************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/modal.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap modal.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./base-component.js */ "./node_modules/bootstrap/js/dist/base-component.js"), __webpack_require__(/*! ./dom/event-handler.js */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ./dom/selector-engine.js */ "./node_modules/bootstrap/js/dist/dom/selector-engine.js"), __webpack_require__(/*! ./util/backdrop.js */ "./node_modules/bootstrap/js/dist/util/backdrop.js"), __webpack_require__(/*! ./util/component-functions.js */ "./node_modules/bootstrap/js/dist/util/component-functions.js"), __webpack_require__(/*! ./util/focustrap.js */ "./node_modules/bootstrap/js/dist/util/focustrap.js"), __webpack_require__(/*! ./util/index.js */ "./node_modules/bootstrap/js/dist/util/index.js"), __webpack_require__(/*! ./util/scrollbar.js */ "./node_modules/bootstrap/js/dist/util/scrollbar.js")) : 0;
})(this, function (BaseComponent, EventHandler, SelectorEngine, Backdrop, componentFunctions_js, FocusTrap, index_js, ScrollBarHelper) {
  'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */
  const NAME = 'modal';
  const DATA_KEY = 'bs.modal';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const ESCAPE_KEY = 'Escape';
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const EVENT_RESIZE = `resize${EVENT_KEY}`;
  const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY}`;
  const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY}`;
  const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  const CLASS_NAME_OPEN = 'modal-open';
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_SHOW = 'show';
  const CLASS_NAME_STATIC = 'modal-static';
  const OPEN_SELECTOR = '.modal.show';
  const SELECTOR_DIALOG = '.modal-dialog';
  const SELECTOR_MODAL_BODY = '.modal-body';
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="modal"]';
  const Default = {
    backdrop: true,
    focus: true,
    keyboard: true
  };
  const DefaultType = {
    backdrop: '(boolean|string)',
    focus: 'boolean',
    keyboard: 'boolean'
  };

  /**
   * Class definition
   */

  class Modal extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._isShown = false;
      this._isTransitioning = false;
      this._scrollBar = new ScrollBarHelper();
      this._addEventListeners();
    }

    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }

    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown || this._isTransitioning) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW, {
        relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._isTransitioning = true;
      this._scrollBar.hide();
      document.body.classList.add(CLASS_NAME_OPEN);
      this._adjustDialog();
      this._backdrop.show(() => this._showElement(relatedTarget));
    }
    hide() {
      if (!this._isShown || this._isTransitioning) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._isShown = false;
      this._isTransitioning = true;
      this._focustrap.deactivate();
      this._element.classList.remove(CLASS_NAME_SHOW);
      this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
    }
    dispose() {
      EventHandler.off(window, EVENT_KEY);
      EventHandler.off(this._dialog, EVENT_KEY);
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }

    // Private
    _initializeBackDrop() {
      return new Backdrop({
        isVisible: Boolean(this._config.backdrop),
        // 'static' option will be translated to true, and booleans will keep their value,
        isAnimated: this._isAnimated()
      });
    }
    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
    _showElement(relatedTarget) {
      // try to append dynamic modal
      if (!document.body.contains(this._element)) {
        document.body.append(this._element);
      }
      this._element.style.display = 'block';
      this._element.removeAttribute('aria-hidden');
      this._element.setAttribute('aria-modal', true);
      this._element.setAttribute('role', 'dialog');
      this._element.scrollTop = 0;
      const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
      if (modalBody) {
        modalBody.scrollTop = 0;
      }
      index_js.reflow(this._element);
      this._element.classList.add(CLASS_NAME_SHOW);
      const transitionComplete = () => {
        if (this._config.focus) {
          this._focustrap.activate();
        }
        this._isTransitioning = false;
        EventHandler.trigger(this._element, EVENT_SHOWN, {
          relatedTarget
        });
      };
      this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
        if (event.key !== ESCAPE_KEY) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      });
      EventHandler.on(window, EVENT_RESIZE, () => {
        if (this._isShown && !this._isTransitioning) {
          this._adjustDialog();
        }
      });
      EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, event => {
        // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
        EventHandler.one(this._element, EVENT_CLICK_DISMISS, event2 => {
          if (this._element !== event.target || this._element !== event2.target) {
            return;
          }
          if (this._config.backdrop === 'static') {
            this._triggerBackdropTransition();
            return;
          }
          if (this._config.backdrop) {
            this.hide();
          }
        });
      });
    }
    _hideModal() {
      this._element.style.display = 'none';
      this._element.setAttribute('aria-hidden', true);
      this._element.removeAttribute('aria-modal');
      this._element.removeAttribute('role');
      this._isTransitioning = false;
      this._backdrop.hide(() => {
        document.body.classList.remove(CLASS_NAME_OPEN);
        this._resetAdjustments();
        this._scrollBar.reset();
        EventHandler.trigger(this._element, EVENT_HIDDEN);
      });
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_FADE);
    }
    _triggerBackdropTransition() {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
      if (hideEvent.defaultPrevented) {
        return;
      }
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const initialOverflowY = this._element.style.overflowY;
      // return if the following background transition hasn't yet completed
      if (initialOverflowY === 'hidden' || this._element.classList.contains(CLASS_NAME_STATIC)) {
        return;
      }
      if (!isModalOverflowing) {
        this._element.style.overflowY = 'hidden';
      }
      this._element.classList.add(CLASS_NAME_STATIC);
      this._queueCallback(() => {
        this._element.classList.remove(CLASS_NAME_STATIC);
        this._queueCallback(() => {
          this._element.style.overflowY = initialOverflowY;
        }, this._dialog);
      }, this._dialog);
      this._element.focus();
    }

    /**
     * The following methods are used to handle overflowing modals
     */

    _adjustDialog() {
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const scrollbarWidth = this._scrollBar.getWidth();
      const isBodyOverflowing = scrollbarWidth > 0;
      if (isBodyOverflowing && !isModalOverflowing) {
        const property = index_js.isRTL() ? 'paddingLeft' : 'paddingRight';
        this._element.style[property] = `${scrollbarWidth}px`;
      }
      if (!isBodyOverflowing && isModalOverflowing) {
        const property = index_js.isRTL() ? 'paddingRight' : 'paddingLeft';
        this._element.style[property] = `${scrollbarWidth}px`;
      }
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    }

    // Static
    static jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        const data = Modal.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](relatedTarget);
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (['A', 'AREA'].indexOf(this.tagName) !== -1) {
      event.preventDefault();
    }
    EventHandler.one(target, EVENT_SHOW, showEvent => {
      if (showEvent.defaultPrevented) {
        // only register focus restorer if modal will actually get shown
        return;
      }
      EventHandler.one(target, EVENT_HIDDEN, () => {
        if (index_js.isVisible(this)) {
          this.focus();
        }
      });
    });

    // avoid conflict when clicking modal toggler while another one is open
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
    if (alreadyOpen) {
      Modal.getInstance(alreadyOpen).hide();
    }
    const data = Modal.getOrCreateInstance(target);
    data.toggle(this);
  });
  componentFunctions_js.enableDismissTrigger(Modal);

  /**
   * jQuery
   */

  index_js.defineJQueryPlugin(Modal);
  return Modal;
});

/***/ }),

/***/ "./node_modules/bootstrap/js/dist/util/backdrop.js":
/*!*********************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util/backdrop.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap backdrop.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ../dom/event-handler.js */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ./config.js */ "./node_modules/bootstrap/js/dist/util/config.js"), __webpack_require__(/*! ./index.js */ "./node_modules/bootstrap/js/dist/util/index.js")) : 0;
})(this, function (EventHandler, Config, index_js) {
  'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/backdrop.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */
  const NAME = 'backdrop';
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_SHOW = 'show';
  const EVENT_MOUSEDOWN = `mousedown.bs.${NAME}`;
  const Default = {
    className: 'modal-backdrop',
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: 'body' // give the choice to place backdrop under different elements
  };
  const DefaultType = {
    className: 'string',
    clickCallback: '(function|null)',
    isAnimated: 'boolean',
    isVisible: 'boolean',
    rootElement: '(element|string)'
  };

  /**
   * Class definition
   */

  class Backdrop extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    }

    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }

    // Public
    show(callback) {
      if (!this._config.isVisible) {
        index_js.execute(callback);
        return;
      }
      this._append();
      const element = this._getElement();
      if (this._config.isAnimated) {
        index_js.reflow(element);
      }
      element.classList.add(CLASS_NAME_SHOW);
      this._emulateAnimation(() => {
        index_js.execute(callback);
      });
    }
    hide(callback) {
      if (!this._config.isVisible) {
        index_js.execute(callback);
        return;
      }
      this._getElement().classList.remove(CLASS_NAME_SHOW);
      this._emulateAnimation(() => {
        this.dispose();
        index_js.execute(callback);
      });
    }
    dispose() {
      if (!this._isAppended) {
        return;
      }
      EventHandler.off(this._element, EVENT_MOUSEDOWN);
      this._element.remove();
      this._isAppended = false;
    }

    // Private
    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement('div');
        backdrop.className = this._config.className;
        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE);
        }
        this._element = backdrop;
      }
      return this._element;
    }
    _configAfterMerge(config) {
      // use getElement() with the default "body" to get a fresh Element on each instantiation
      config.rootElement = index_js.getElement(config.rootElement);
      return config;
    }
    _append() {
      if (this._isAppended) {
        return;
      }
      const element = this._getElement();
      this._config.rootElement.append(element);
      EventHandler.on(element, EVENT_MOUSEDOWN, () => {
        index_js.execute(this._config.clickCallback);
      });
      this._isAppended = true;
    }
    _emulateAnimation(callback) {
      index_js.executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
  }
  return Backdrop;
});

/***/ }),

/***/ "./node_modules/bootstrap/js/dist/util/component-functions.js":
/*!********************************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util/component-functions.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/*!
  * Bootstrap component-functions.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! ../dom/event-handler.js */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ../dom/selector-engine.js */ "./node_modules/bootstrap/js/dist/dom/selector-engine.js"), __webpack_require__(/*! ./index.js */ "./node_modules/bootstrap/js/dist/util/index.js")) : 0;
})(this, function (exports, EventHandler, SelectorEngine, index_js) {
  'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/component-functions.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const enableDismissTrigger = (component, method = 'hide') => {
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function (event) {
      if (['A', 'AREA'].indexOf(this.tagName) !== -1) {
        event.preventDefault();
      }
      if (index_js.isDisabled(this)) {
        return;
      }
      const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
      const instance = component.getOrCreateInstance(target);

      // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
      instance[method]();
    });
  };
  exports.enableDismissTrigger = enableDismissTrigger;
  Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
  });
});

/***/ }),

/***/ "./node_modules/bootstrap/js/dist/util/focustrap.js":
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util/focustrap.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap focustrap.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ../dom/event-handler.js */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ../dom/selector-engine.js */ "./node_modules/bootstrap/js/dist/dom/selector-engine.js"), __webpack_require__(/*! ./config.js */ "./node_modules/bootstrap/js/dist/util/config.js")) : 0;
})(this, function (EventHandler, SelectorEngine, Config) {
  'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/focustrap.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */
  const NAME = 'focustrap';
  const DATA_KEY = 'bs.focustrap';
  const EVENT_KEY = `.${DATA_KEY}`;
  const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
  const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY}`;
  const TAB_KEY = 'Tab';
  const TAB_NAV_FORWARD = 'forward';
  const TAB_NAV_BACKWARD = 'backward';
  const Default = {
    autofocus: true,
    trapElement: null // The element to trap focus inside of
  };
  const DefaultType = {
    autofocus: 'boolean',
    trapElement: 'element'
  };

  /**
   * Class definition
   */

  class FocusTrap extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
    }

    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }

    // Public
    activate() {
      if (this._isActive) {
        return;
      }
      if (this._config.autofocus) {
        this._config.trapElement.focus();
      }
      EventHandler.off(document, EVENT_KEY); // guard against infinite focus loop
      EventHandler.on(document, EVENT_FOCUSIN, event => this._handleFocusin(event));
      EventHandler.on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));
      this._isActive = true;
    }
    deactivate() {
      if (!this._isActive) {
        return;
      }
      this._isActive = false;
      EventHandler.off(document, EVENT_KEY);
    }

    // Private
    _handleFocusin(event) {
      const {
        trapElement
      } = this._config;
      if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
        return;
      }
      const elements = SelectorEngine.focusableChildren(trapElement);
      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }
    _handleKeydown(event) {
      if (event.key !== TAB_KEY) {
        return;
      }
      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
  }
  return FocusTrap;
});

/***/ }),

/***/ "./node_modules/bootstrap/js/dist/util/scrollbar.js":
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util/scrollbar.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap scrollbar.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ../dom/manipulator.js */ "./node_modules/bootstrap/js/dist/dom/manipulator.js"), __webpack_require__(/*! ../dom/selector-engine.js */ "./node_modules/bootstrap/js/dist/dom/selector-engine.js"), __webpack_require__(/*! ./index.js */ "./node_modules/bootstrap/js/dist/util/index.js")) : 0;
})(this, function (Manipulator, SelectorEngine, index_js) {
  'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/scrollBar.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */
  const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  const SELECTOR_STICKY_CONTENT = '.sticky-top';
  const PROPERTY_PADDING = 'padding-right';
  const PROPERTY_MARGIN = 'margin-right';

  /**
   * Class definition
   */

  class ScrollBarHelper {
    constructor() {
      this._element = document.body;
    }

    // Public
    getWidth() {
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }
    hide() {
      const width = this.getWidth();
      this._disableOverFlow();
      // give padding to element to balance the hidden scrollbar width
      this._setElementAttributes(this._element, PROPERTY_PADDING, calculatedValue => calculatedValue + width);
      // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
      this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, calculatedValue => calculatedValue + width);
      this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, calculatedValue => calculatedValue - width);
    }
    reset() {
      this._resetElementAttributes(this._element, 'overflow');
      this._resetElementAttributes(this._element, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }

    // Private
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, 'overflow');
      this._element.style.overflow = 'hidden';
    }
    _setElementAttributes(selector, styleProperty, callback) {
      const scrollbarWidth = this.getWidth();
      const manipulationCallBack = element => {
        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }
        this._saveInitialAttribute(element, styleProperty);
        const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
        element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _saveInitialAttribute(element, styleProperty) {
      const actualValue = element.style.getPropertyValue(styleProperty);
      if (actualValue) {
        Manipulator.setDataAttribute(element, styleProperty, actualValue);
      }
    }
    _resetElementAttributes(selector, styleProperty) {
      const manipulationCallBack = element => {
        const value = Manipulator.getDataAttribute(element, styleProperty);
        // We only want to remove the property if the value is `null`; the value can also be zero
        if (value === null) {
          element.style.removeProperty(styleProperty);
          return;
        }
        Manipulator.removeDataAttribute(element, styleProperty);
        element.style.setProperty(styleProperty, value);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _applyManipulationCallback(selector, callBack) {
      if (index_js.isElement(selector)) {
        callBack(selector);
        return;
      }
      for (const sel of SelectorEngine.find(selector, this._element)) {
        callBack(sel);
      }
    }
  }
  return ScrollBarHelper;
});

/***/ }),

/***/ "./source/02-components/01-composites/modal/modal.es6.js":
/*!***************************************************************!*\
  !*** ./source/02-components/01-composites/modal/modal.es6.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/js/dist/modal */ "./node_modules/bootstrap/js/dist/modal.js");
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_0__);

(Drupal => {
  // eslint-disable-next-line
  Drupal.behaviors.kinecticModal = {
    attach: function attach(context) {
      const modals = once('kinetic-modal', '[data-component-id="kinetic:modal"]', context);
      modals.forEach(el => {
        // assign to var if you need to call methods
        // const modal = new Modal(el);
        new (bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_0___default())(el);
      });
    }
  };
})(Drupal);

/***/ }),

/***/ "./source/02-components/01-composites/modal/modal.scss":
/*!*************************************************************!*\
  !*** ./source/02-components/01-composites/modal/modal.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"source/02-components/01-composites/modal/modal": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["kineticChunks"] = self["kineticChunks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_bootstrap_js_dist_base-component_js-node_modules_bootstrap_js_dist_dom_s-25bb7c"], function() { return __webpack_require__("./source/02-components/01-composites/modal/modal.es6.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_bootstrap_js_dist_base-component_js-node_modules_bootstrap_js_dist_dom_s-25bb7c"], function() { return __webpack_require__("./source/02-components/01-composites/modal/modal.scss"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLzAyLWNvbXBvbmVudHMvMDEtY29tcG9zaXRlcy9tb2RhbC9tb2RhbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUE7Ozs7Ozs7RUFrQkE7OztFQUlBLE1BQU1BLElBQUksR0FBRyxPQUFPO0VBQ3BCLE1BQU1DLFFBQVEsR0FBRyxVQUFVO0VBQzNCLE1BQU1DLFNBQVMsR0FBTyxJQUFBRCxRQUFVO0VBQ2hDLE1BQU1FLFlBQVksR0FBRyxXQUFXO0VBQ2hDLE1BQU1DLFVBQVUsR0FBRyxRQUFRO0VBRTNCLE1BQU1DLFVBQVUsR0FBVSxPQUFBSCxTQUFXO0VBQ3JDLE1BQU1JLG9CQUFvQixHQUFtQixnQkFBQUosU0FBVztFQUN4RCxNQUFNSyxZQUFZLEdBQVksU0FBQUwsU0FBVztFQUN6QyxNQUFNTSxVQUFVLEdBQVUsT0FBQU4sU0FBVztFQUNyQyxNQUFNTyxXQUFXLEdBQVcsUUFBQVAsU0FBVztFQUN2QyxNQUFNUSxZQUFZLEdBQVksU0FBQVIsU0FBVztFQUN6QyxNQUFNUyxtQkFBbUIsR0FBbUIsZ0JBQUFULFNBQVc7RUFDdkQsTUFBTVUsdUJBQXVCLEdBQXVCLG9CQUFBVixTQUFXO0VBQy9ELE1BQU1XLHFCQUFxQixHQUFxQixrQkFBQVgsU0FBVztFQUMzRCxNQUFNWSxvQkFBb0IsR0FBSSxRQUFPWixTQUFVLEdBQUVDLFlBQWM7RUFFL0QsTUFBTVksZUFBZSxHQUFHLFlBQVk7RUFDcEMsTUFBTUMsZUFBZSxHQUFHLE1BQU07RUFDOUIsTUFBTUMsZUFBZSxHQUFHLE1BQU07RUFDOUIsTUFBTUMsaUJBQWlCLEdBQUcsY0FBYztFQUV4QyxNQUFNQyxhQUFhLEdBQUcsYUFBYTtFQUNuQyxNQUFNQyxlQUFlLEdBQUcsZUFBZTtFQUN2QyxNQUFNQyxtQkFBbUIsR0FBRyxhQUFhO0VBQ3pDLE1BQU1DLG9CQUFvQixHQUFHLDBCQUEwQjtFQUV2RCxNQUFNQyxPQUFPLEdBQUc7SUFDZEMsUUFBUSxFQUFFLElBQUk7SUFDZEMsS0FBSyxF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QUNBOzs7OztXQzdCQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQyxlQUFlO1dBQ2YsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQSw4Q0FBOEM7O1dBRTlDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsbUNBQW1DO1dBQ3BFO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVsREE7VUFDQTtVQUNBO1VBQ0Esd0pBQXdKLHdGQUF3RjtVQUNoUCxrTEFBa0wsc0ZBQXNGO1VBQ3hRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2luZXRpYy8uLi9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8va2luZXRpYy8uLi8uLi9zcmMvdXRpbC9iYWNrZHJvcC5qcyIsIndlYnBhY2s6Ly9raW5ldGljLy4uLy4uL3NyYy91dGlsL2NvbXBvbmVudC1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8va2luZXRpYy8uLi8uLi9zcmMvdXRpbC9mb2N1c3RyYXAuanMiLCJ3ZWJwYWNrOi8va2luZXRpYy8uLi8uLi9zcmMvdXRpbC9zY3JvbGxiYXIuanMiLCJ3ZWJwYWNrOi8va2luZXRpYy8uL3NvdXJjZS8wMi1jb21wb25lbnRzLzAxLWNvbXBvc2l0ZXMvbW9kYWwvbW9kYWwuZXM2LmpzIiwid2VicGFjazovL2tpbmV0aWMvLi9zb3VyY2UvMDItY29tcG9uZW50cy8wMS1jb21wb3NpdGVzL21vZGFsL21vZGFsLnNjc3M/OGQ1ZiIsIndlYnBhY2s6Ly9raW5ldGljL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tpbmV0aWMvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9raW5ldGljL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2tpbmV0aWMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2tpbmV0aWMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9raW5ldGljL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va2luZXRpYy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9raW5ldGljL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8va2luZXRpYy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8va2luZXRpYy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIG1vZGFsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnLi91dGlsL2JhY2tkcm9wLmpzJ1xuaW1wb3J0IHsgZW5hYmxlRGlzbWlzc1RyaWdnZXIgfSBmcm9tICcuL3V0aWwvY29tcG9uZW50LWZ1bmN0aW9ucy5qcydcbmltcG9ydCBGb2N1c1RyYXAgZnJvbSAnLi91dGlsL2ZvY3VzdHJhcC5qcydcbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbiwgaXNSVEwsIGlzVmlzaWJsZSwgcmVmbG93XG59IGZyb20gJy4vdXRpbC9pbmRleC5qcydcbmltcG9ydCBTY3JvbGxCYXJIZWxwZXIgZnJvbSAnLi91dGlsL3Njcm9sbGJhci5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ21vZGFsJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMubW9kYWwnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcbmNvbnN0IEVTQ0FQRV9LRVkgPSAnRXNjYXBlJ1xuXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFX1BSRVZFTlRFRCA9IGBoaWRlUHJldmVudGVkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUkVTSVpFID0gYHJlc2l6ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RJU01JU1MgPSBgY2xpY2suZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTID0gYG1vdXNlZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTl9ESVNNSVNTID0gYGtleWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX09QRU4gPSAnbW9kYWwtb3BlbidcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX1NUQVRJQyA9ICdtb2RhbC1zdGF0aWMnXG5cbmNvbnN0IE9QRU5fU0VMRUNUT1IgPSAnLm1vZGFsLnNob3cnXG5jb25zdCBTRUxFQ1RPUl9ESUFMT0cgPSAnLm1vZGFsLWRpYWxvZydcbmNvbnN0IFNFTEVDVE9SX01PREFMX0JPRFkgPSAnLm1vZGFsLWJvZHknXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiXSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGZvY3VzOiB0cnVlLFxuICBrZXlib2FyZDogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYmFja2Ryb3A6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgZm9jdXM6ICdib29sZWFuJyxcbiAga2V5Ym9hcmQ6ICdib29sZWFuJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBNb2RhbCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjb25maWcpXG5cbiAgICB0aGlzLl9kaWFsb2cgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RJQUxPRywgdGhpcy5fZWxlbWVudClcbiAgICB0aGlzLl9iYWNrZHJvcCA9IHRoaXMuX2luaXRpYWxpemVCYWNrRHJvcCgpXG4gICAgdGhpcy5fZm9jdXN0cmFwID0gdGhpcy5faW5pdGlhbGl6ZUZvY3VzVHJhcCgpXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICB0aGlzLl9zY3JvbGxCYXIgPSBuZXcgU2Nyb2xsQmFySGVscGVyKClcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgdG9nZ2xlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5faXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBzaG93KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBpZiAodGhpcy5faXNTaG93biB8fCB0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1csIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICB9KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZVxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcblxuICAgIHRoaXMuX3Njcm9sbEJhci5oaWRlKClcblxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX09QRU4pXG5cbiAgICB0aGlzLl9hZGp1c3REaWFsb2coKVxuXG4gICAgdGhpcy5fYmFja2Ryb3Auc2hvdygoKSA9PiB0aGlzLl9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcblxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZVxuICAgIHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKClcblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKCgpID0+IHRoaXMuX2hpZGVNb2RhbCgpLCB0aGlzLl9lbGVtZW50LCB0aGlzLl9pc0FuaW1hdGVkKCkpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIEV2ZW50SGFuZGxlci5vZmYod2luZG93LCBFVkVOVF9LRVkpXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9kaWFsb2csIEVWRU5UX0tFWSlcblxuICAgIHRoaXMuX2JhY2tkcm9wLmRpc3Bvc2UoKVxuICAgIHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKClcblxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgaGFuZGxlVXBkYXRlKCkge1xuICAgIHRoaXMuX2FkanVzdERpYWxvZygpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9pbml0aWFsaXplQmFja0Ryb3AoKSB7XG4gICAgcmV0dXJuIG5ldyBCYWNrZHJvcCh7XG4gICAgICBpc1Zpc2libGU6IEJvb2xlYW4odGhpcy5fY29uZmlnLmJhY2tkcm9wKSwgLy8gJ3N0YXRpYycgb3B0aW9uIHdpbGwgYmUgdHJhbnNsYXRlZCB0byB0cnVlLCBhbmQgYm9vbGVhbnMgd2lsbCBrZWVwIHRoZWlyIHZhbHVlLFxuICAgICAgaXNBbmltYXRlZDogdGhpcy5faXNBbmltYXRlZCgpXG4gICAgfSlcbiAgfVxuXG4gIF9pbml0aWFsaXplRm9jdXNUcmFwKCkge1xuICAgIHJldHVybiBuZXcgRm9jdXNUcmFwKHtcbiAgICAgIHRyYXBFbGVtZW50OiB0aGlzLl9lbGVtZW50XG4gICAgfSlcbiAgfVxuXG4gIF9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSB7XG4gICAgLy8gdHJ5IHRvIGFwcGVuZCBkeW5hbWljIG1vZGFsXG4gICAgaWYgKCFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKVxuICAgIHRoaXMuX2VsZW1lbnQuc2Nyb2xsVG9wID0gMFxuXG4gICAgY29uc3QgbW9kYWxCb2R5ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9NT0RBTF9CT0RZLCB0aGlzLl9kaWFsb2cpXG4gICAgaWYgKG1vZGFsQm9keSkge1xuICAgICAgbW9kYWxCb2R5LnNjcm9sbFRvcCA9IDBcbiAgICB9XG5cbiAgICByZWZsb3codGhpcy5fZWxlbWVudClcblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBjb25zdCB0cmFuc2l0aW9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICAgIHRoaXMuX2ZvY3VzdHJhcC5hY3RpdmF0ZSgpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0XG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2sodHJhbnNpdGlvbkNvbXBsZXRlLCB0aGlzLl9kaWFsb2csIHRoaXMuX2lzQW5pbWF0ZWQoKSlcbiAgfVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTl9ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ICE9PSBFU0NBUEVfS0VZKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKClcbiAgICB9KVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfUkVTSVpFLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5faXNTaG93biAmJiAhdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgIHRoaXMuX2FkanVzdERpYWxvZygpXG4gICAgICB9XG4gICAgfSlcblxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRURPV05fRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgLy8gYSBiYWQgdHJpY2sgdG8gc2VncmVnYXRlIGNsaWNrcyB0aGF0IG1heSBzdGFydCBpbnNpZGUgZGlhbG9nIGJ1dCBlbmQgb3V0c2lkZSwgYW5kIGF2b2lkIGxpc3RlbiB0byBzY3JvbGxiYXIgY2xpY2tzXG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLX0RJU01JU1MsIGV2ZW50MiA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9lbGVtZW50ICE9PSBldmVudC50YXJnZXQgfHwgdGhpcy5fZWxlbWVudCAhPT0gZXZlbnQyLnRhcmdldCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICB0aGlzLl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3ApIHtcbiAgICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBfaGlkZU1vZGFsKCkge1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnKVxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyb2xlJylcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuXG4gICAgdGhpcy5fYmFja2Ryb3AuaGlkZSgoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9PUEVOKVxuICAgICAgdGhpcy5fcmVzZXRBZGp1c3RtZW50cygpXG4gICAgICB0aGlzLl9zY3JvbGxCYXIucmVzZXQoKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKVxuICAgIH0pXG4gIH1cblxuICBfaXNBbmltYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKVxuICB9XG5cbiAgX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKSB7XG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERV9QUkVWRU5URUQpXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc01vZGFsT3ZlcmZsb3dpbmcgPSB0aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICBjb25zdCBpbml0aWFsT3ZlcmZsb3dZID0gdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvd1lcbiAgICAvLyByZXR1cm4gaWYgdGhlIGZvbGxvd2luZyBiYWNrZ3JvdW5kIHRyYW5zaXRpb24gaGFzbid0IHlldCBjb21wbGV0ZWRcbiAgICBpZiAoaW5pdGlhbE92ZXJmbG93WSA9PT0gJ2hpZGRlbicgfHwgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TVEFUSUMpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJ1xuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NUQVRJQylcbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NUQVRJQylcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9IGluaXRpYWxPdmVyZmxvd1lcbiAgICAgIH0sIHRoaXMuX2RpYWxvZylcbiAgICB9LCB0aGlzLl9kaWFsb2cpXG5cbiAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZm9sbG93aW5nIG1ldGhvZHMgYXJlIHVzZWQgdG8gaGFuZGxlIG92ZXJmbG93aW5nIG1vZGFsc1xuICAgKi9cblxuICBfYWRqdXN0RGlhbG9nKCkge1xuICAgIGNvbnN0IGlzTW9kYWxPdmVyZmxvd2luZyA9IHRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gdGhpcy5fc2Nyb2xsQmFyLmdldFdpZHRoKClcbiAgICBjb25zdCBpc0JvZHlPdmVyZmxvd2luZyA9IHNjcm9sbGJhcldpZHRoID4gMFxuXG4gICAgaWYgKGlzQm9keU92ZXJmbG93aW5nICYmICFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gaXNSVEwoKSA/ICdwYWRkaW5nTGVmdCcgOiAncGFkZGluZ1JpZ2h0J1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtwcm9wZXJ0eV0gPSBgJHtzY3JvbGxiYXJXaWR0aH1weGBcbiAgICB9XG5cbiAgICBpZiAoIWlzQm9keU92ZXJmbG93aW5nICYmIGlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSBpc1JUTCgpID8gJ3BhZGRpbmdSaWdodCcgOiAncGFkZGluZ0xlZnQnXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IGAke3Njcm9sbGJhcldpZHRofXB4YFxuICAgIH1cbiAgfVxuXG4gIF9yZXNldEFkanVzdG1lbnRzKCkge1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSAnJ1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJydcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZywgcmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IE1vZGFsLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXShyZWxhdGVkVGFyZ2V0KVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKVxuXG4gIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBFdmVudEhhbmRsZXIub25lKHRhcmdldCwgRVZFTlRfU0hPVywgc2hvd0V2ZW50ID0+IHtcbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIC8vIG9ubHkgcmVnaXN0ZXIgZm9jdXMgcmVzdG9yZXIgaWYgbW9kYWwgd2lsbCBhY3R1YWxseSBnZXQgc2hvd25cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9ISURERU4sICgpID0+IHtcbiAgICAgIGlmIChpc1Zpc2libGUodGhpcykpIHtcbiAgICAgICAgdGhpcy5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICAvLyBhdm9pZCBjb25mbGljdCB3aGVuIGNsaWNraW5nIG1vZGFsIHRvZ2dsZXIgd2hpbGUgYW5vdGhlciBvbmUgaXMgb3BlblxuICBjb25zdCBhbHJlYWR5T3BlbiA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoT1BFTl9TRUxFQ1RPUilcbiAgaWYgKGFscmVhZHlPcGVuKSB7XG4gICAgTW9kYWwuZ2V0SW5zdGFuY2UoYWxyZWFkeU9wZW4pLmhpZGUoKVxuICB9XG5cbiAgY29uc3QgZGF0YSA9IE1vZGFsLmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KVxuXG4gIGRhdGEudG9nZ2xlKHRoaXMpXG59KVxuXG5lbmFibGVEaXNtaXNzVHJpZ2dlcihNb2RhbClcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oTW9kYWwpXG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9iYWNrZHJvcC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4vY29uZmlnLmpzJ1xuaW1wb3J0IHtcbiAgZXhlY3V0ZSwgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbiwgZ2V0RWxlbWVudCwgcmVmbG93XG59IGZyb20gJy4vaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdiYWNrZHJvcCdcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBFVkVOVF9NT1VTRURPV04gPSBgbW91c2Vkb3duLmJzLiR7TkFNRX1gXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGNsYXNzTmFtZTogJ21vZGFsLWJhY2tkcm9wJyxcbiAgY2xpY2tDYWxsYmFjazogbnVsbCxcbiAgaXNBbmltYXRlZDogZmFsc2UsXG4gIGlzVmlzaWJsZTogdHJ1ZSwgLy8gaWYgZmFsc2UsIHdlIHVzZSB0aGUgYmFja2Ryb3AgaGVscGVyIHdpdGhvdXQgYWRkaW5nIGFueSBlbGVtZW50IHRvIHRoZSBkb21cbiAgcm9vdEVsZW1lbnQ6ICdib2R5JyAvLyBnaXZlIHRoZSBjaG9pY2UgdG8gcGxhY2UgYmFja2Ryb3AgdW5kZXIgZGlmZmVyZW50IGVsZW1lbnRzXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICBjbGlja0NhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJyxcbiAgaXNBbmltYXRlZDogJ2Jvb2xlYW4nLFxuICBpc1Zpc2libGU6ICdib29sZWFuJyxcbiAgcm9vdEVsZW1lbnQ6ICcoZWxlbWVudHxzdHJpbmcpJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBCYWNrZHJvcCBleHRlbmRzIENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2lzQXBwZW5kZWQgPSBmYWxzZVxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHNob3coY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5pc1Zpc2libGUpIHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9hcHBlbmQoKVxuXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2dldEVsZW1lbnQoKVxuICAgIGlmICh0aGlzLl9jb25maWcuaXNBbmltYXRlZCkge1xuICAgICAgcmVmbG93KGVsZW1lbnQpXG4gICAgfVxuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcblxuICAgIHRoaXMuX2VtdWxhdGVBbmltYXRpb24oKCkgPT4ge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICB9KVxuICB9XG5cbiAgaGlkZShjYWxsYmFjaykge1xuICAgIGlmICghdGhpcy5fY29uZmlnLmlzVmlzaWJsZSkge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2dldEVsZW1lbnQoKS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIHRoaXMuX2VtdWxhdGVBbmltYXRpb24oKCkgPT4ge1xuICAgICAgdGhpcy5kaXNwb3NlKClcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgfSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0FwcGVuZGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFRE9XTilcblxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKClcbiAgICB0aGlzLl9pc0FwcGVuZGVkID0gZmFsc2VcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2dldEVsZW1lbnQoKSB7XG4gICAgaWYgKCF0aGlzLl9lbGVtZW50KSB7XG4gICAgICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBiYWNrZHJvcC5jbGFzc05hbWUgPSB0aGlzLl9jb25maWcuY2xhc3NOYW1lXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpIHtcbiAgICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBiYWNrZHJvcFxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50XG4gIH1cblxuICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICAvLyB1c2UgZ2V0RWxlbWVudCgpIHdpdGggdGhlIGRlZmF1bHQgXCJib2R5XCIgdG8gZ2V0IGEgZnJlc2ggRWxlbWVudCBvbiBlYWNoIGluc3RhbnRpYXRpb25cbiAgICBjb25maWcucm9vdEVsZW1lbnQgPSBnZXRFbGVtZW50KGNvbmZpZy5yb290RWxlbWVudClcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfYXBwZW5kKCkge1xuICAgIGlmICh0aGlzLl9pc0FwcGVuZGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fZ2V0RWxlbWVudCgpXG4gICAgdGhpcy5fY29uZmlnLnJvb3RFbGVtZW50LmFwcGVuZChlbGVtZW50KVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKGVsZW1lbnQsIEVWRU5UX01PVVNFRE9XTiwgKCkgPT4ge1xuICAgICAgZXhlY3V0ZSh0aGlzLl9jb25maWcuY2xpY2tDYWxsYmFjaylcbiAgICB9KVxuXG4gICAgdGhpcy5faXNBcHBlbmRlZCA9IHRydWVcbiAgfVxuXG4gIF9lbXVsYXRlQW5pbWF0aW9uKGNhbGxiYWNrKSB7XG4gICAgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbihjYWxsYmFjaywgdGhpcy5fZ2V0RWxlbWVudCgpLCB0aGlzLl9jb25maWcuaXNBbmltYXRlZClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZHJvcFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvY29tcG9uZW50LWZ1bmN0aW9ucy5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCB7IGlzRGlzYWJsZWQgfSBmcm9tICcuL2luZGV4LmpzJ1xuXG5jb25zdCBlbmFibGVEaXNtaXNzVHJpZ2dlciA9IChjb21wb25lbnQsIG1ldGhvZCA9ICdoaWRlJykgPT4ge1xuICBjb25zdCBjbGlja0V2ZW50ID0gYGNsaWNrLmRpc21pc3Mke2NvbXBvbmVudC5FVkVOVF9LRVl9YFxuICBjb25zdCBuYW1lID0gY29tcG9uZW50Lk5BTUVcblxuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIGNsaWNrRXZlbnQsIGBbZGF0YS1icy1kaXNtaXNzPVwiJHtuYW1lfVwiXWAsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKSB8fCB0aGlzLmNsb3Nlc3QoYC4ke25hbWV9YClcbiAgICBjb25zdCBpbnN0YW5jZSA9IGNvbXBvbmVudC5nZXRPckNyZWF0ZUluc3RhbmNlKHRhcmdldClcblxuICAgIC8vIE1ldGhvZCBhcmd1bWVudCBpcyBsZWZ0LCBmb3IgQWxlcnQgYW5kIG9ubHksIGFzIGl0IGRvZXNuJ3QgaW1wbGVtZW50IHRoZSAnaGlkZScgbWV0aG9kXG4gICAgaW5zdGFuY2VbbWV0aG9kXSgpXG4gIH0pXG59XG5cbmV4cG9ydCB7XG4gIGVuYWJsZURpc21pc3NUcmlnZ2VyXG59XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9mb2N1c3RyYXAuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4uL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4uL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4vY29uZmlnLmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnZm9jdXN0cmFwJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuZm9jdXN0cmFwJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTSU4gPSBgZm9jdXNpbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fVEFCID0gYGtleWRvd24udGFiJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBUQUJfS0VZID0gJ1RhYidcbmNvbnN0IFRBQl9OQVZfRk9SV0FSRCA9ICdmb3J3YXJkJ1xuY29uc3QgVEFCX05BVl9CQUNLV0FSRCA9ICdiYWNrd2FyZCdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYXV0b2ZvY3VzOiB0cnVlLFxuICB0cmFwRWxlbWVudDogbnVsbCAvLyBUaGUgZWxlbWVudCB0byB0cmFwIGZvY3VzIGluc2lkZSBvZlxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYXV0b2ZvY3VzOiAnYm9vbGVhbicsXG4gIHRyYXBFbGVtZW50OiAnZWxlbWVudCdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgRm9jdXNUcmFwIGV4dGVuZHMgQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZVxuICAgIHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb24gPSBudWxsXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGFjdGl2YXRlKCkge1xuICAgIGlmICh0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hdXRvZm9jdXMpIHtcbiAgICAgIHRoaXMuX2NvbmZpZy50cmFwRWxlbWVudC5mb2N1cygpXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfS0VZKSAvLyBndWFyZCBhZ2FpbnN0IGluZmluaXRlIGZvY3VzIGxvb3BcbiAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4sIGV2ZW50ID0+IHRoaXMuX2hhbmRsZUZvY3VzaW4oZXZlbnQpKVxuICAgIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9UQUIsIGV2ZW50ID0+IHRoaXMuX2hhbmRsZUtleWRvd24oZXZlbnQpKVxuXG4gICAgdGhpcy5faXNBY3RpdmUgPSB0cnVlXG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIGlmICghdGhpcy5faXNBY3RpdmUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2VcbiAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9LRVkpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9oYW5kbGVGb2N1c2luKGV2ZW50KSB7XG4gICAgY29uc3QgeyB0cmFwRWxlbWVudCB9ID0gdGhpcy5fY29uZmlnXG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBkb2N1bWVudCB8fCBldmVudC50YXJnZXQgPT09IHRyYXBFbGVtZW50IHx8IHRyYXBFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnRzID0gU2VsZWN0b3JFbmdpbmUuZm9jdXNhYmxlQ2hpbGRyZW4odHJhcEVsZW1lbnQpXG5cbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0cmFwRWxlbWVudC5mb2N1cygpXG4gICAgfSBlbHNlIGlmICh0aGlzLl9sYXN0VGFiTmF2RGlyZWN0aW9uID09PSBUQUJfTkFWX0JBQ0tXQVJEKSB7XG4gICAgICBlbGVtZW50c1tlbGVtZW50cy5sZW5ndGggLSAxXS5mb2N1cygpXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnRzWzBdLmZvY3VzKClcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlS2V5ZG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgIT09IFRBQl9LRVkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb24gPSBldmVudC5zaGlmdEtleSA/IFRBQl9OQVZfQkFDS1dBUkQgOiBUQUJfTkFWX0ZPUldBUkRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb2N1c1RyYXBcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL3Njcm9sbEJhci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuLi9kb20vbWFuaXB1bGF0b3IuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gJy4vaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgU0VMRUNUT1JfRklYRURfQ09OVEVOVCA9ICcuZml4ZWQtdG9wLCAuZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQsIC5zdGlja3ktdG9wJ1xuY29uc3QgU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQgPSAnLnN0aWNreS10b3AnXG5jb25zdCBQUk9QRVJUWV9QQURESU5HID0gJ3BhZGRpbmctcmlnaHQnXG5jb25zdCBQUk9QRVJUWV9NQVJHSU4gPSAnbWFyZ2luLXJpZ2h0J1xuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBTY3JvbGxCYXJIZWxwZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gZG9jdW1lbnQuYm9keVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGdldFdpZHRoKCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cvaW5uZXJXaWR0aCN1c2FnZV9ub3Rlc1xuICAgIGNvbnN0IGRvY3VtZW50V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICByZXR1cm4gTWF0aC5hYnMod2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudFdpZHRoKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKVxuICAgIHRoaXMuX2Rpc2FibGVPdmVyRmxvdygpXG4gICAgLy8gZ2l2ZSBwYWRkaW5nIHRvIGVsZW1lbnQgdG8gYmFsYW5jZSB0aGUgaGlkZGVuIHNjcm9sbGJhciB3aWR0aFxuICAgIHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsIFBST1BFUlRZX1BBRERJTkcsIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgKyB3aWR0aClcbiAgICAvLyB0cmljazogV2UgYWRqdXN0IHBvc2l0aXZlIHBhZGRpbmdSaWdodCBhbmQgbmVnYXRpdmUgbWFyZ2luUmlnaHQgdG8gc3RpY2t5LXRvcCBlbGVtZW50cyB0byBrZWVwIHNob3dpbmcgZnVsbHdpZHRoXG4gICAgdGhpcy5fc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfRklYRURfQ09OVEVOVCwgUFJPUEVSVFlfUEFERElORywgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSArIHdpZHRoKVxuICAgIHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX1NUSUNLWV9DT05URU5ULCBQUk9QRVJUWV9NQVJHSU4sIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgLSB3aWR0aClcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCwgJ292ZXJmbG93JylcbiAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsIFBST1BFUlRZX1BBRERJTkcpXG4gICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9GSVhFRF9DT05URU5ULCBQUk9QRVJUWV9QQURESU5HKVxuICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQsIFBST1BFUlRZX01BUkdJTilcbiAgfVxuXG4gIGlzT3ZlcmZsb3dpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0V2lkdGgoKSA+IDBcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2Rpc2FibGVPdmVyRmxvdygpIHtcbiAgICB0aGlzLl9zYXZlSW5pdGlhbEF0dHJpYnV0ZSh0aGlzLl9lbGVtZW50LCAnb3ZlcmZsb3cnKVxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICB9XG5cbiAgX3NldEVsZW1lbnRBdHRyaWJ1dGVzKHNlbGVjdG9yLCBzdHlsZVByb3BlcnR5LCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gdGhpcy5nZXRXaWR0aCgpXG4gICAgY29uc3QgbWFuaXB1bGF0aW9uQ2FsbEJhY2sgPSBlbGVtZW50ID0+IHtcbiAgICAgIGlmIChlbGVtZW50ICE9PSB0aGlzLl9lbGVtZW50ICYmIHdpbmRvdy5pbm5lcldpZHRoID4gZWxlbWVudC5jbGllbnRXaWR0aCArIHNjcm9sbGJhcldpZHRoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLl9zYXZlSW5pdGlhbEF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5KVxuICAgICAgY29uc3QgY2FsY3VsYXRlZFZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShzdHlsZVByb3BlcnR5KVxuICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShzdHlsZVByb3BlcnR5LCBgJHtjYWxsYmFjayhOdW1iZXIucGFyc2VGbG9hdChjYWxjdWxhdGVkVmFsdWUpKX1weGApXG4gICAgfVxuXG4gICAgdGhpcy5fYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayhzZWxlY3RvciwgbWFuaXB1bGF0aW9uQ2FsbEJhY2spXG4gIH1cblxuICBfc2F2ZUluaXRpYWxBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSkge1xuICAgIGNvbnN0IGFjdHVhbFZhbHVlID0gZWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHN0eWxlUHJvcGVydHkpXG4gICAgaWYgKGFjdHVhbFZhbHVlKSB7XG4gICAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHksIGFjdHVhbFZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIF9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHNlbGVjdG9yLCBzdHlsZVByb3BlcnR5KSB7XG4gICAgY29uc3QgbWFuaXB1bGF0aW9uQ2FsbEJhY2sgPSBlbGVtZW50ID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5KVxuICAgICAgLy8gV2Ugb25seSB3YW50IHRvIHJlbW92ZSB0aGUgcHJvcGVydHkgaWYgdGhlIHZhbHVlIGlzIGBudWxsYDsgdGhlIHZhbHVlIGNhbiBhbHNvIGJlIHplcm9cbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KHN0eWxlUHJvcGVydHkpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBNYW5pcHVsYXRvci5yZW1vdmVEYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHkpXG4gICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHN0eWxlUHJvcGVydHksIHZhbHVlKVxuICAgIH1cblxuICAgIHRoaXMuX2FwcGx5TWFuaXB1bGF0aW9uQ2FsbGJhY2soc2VsZWN0b3IsIG1hbmlwdWxhdGlvbkNhbGxCYWNrKVxuICB9XG5cbiAgX2FwcGx5TWFuaXB1bGF0aW9uQ2FsbGJhY2soc2VsZWN0b3IsIGNhbGxCYWNrKSB7XG4gICAgaWYgKGlzRWxlbWVudChzZWxlY3RvcikpIHtcbiAgICAgIGNhbGxCYWNrKHNlbGVjdG9yKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBzZWwgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvciwgdGhpcy5fZWxlbWVudCkpIHtcbiAgICAgIGNhbGxCYWNrKHNlbClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsQmFySGVscGVyXG4iLCJpbXBvcnQgTW9kYWwgZnJvbSAnYm9vdHN0cmFwL2pzL2Rpc3QvbW9kYWwnO1xuXG4oKERydXBhbCkgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgRHJ1cGFsLmJlaGF2aW9ycy5raW5lY3RpY01vZGFsID0ge1xuICAgIGF0dGFjaDogZnVuY3Rpb24gYXR0YWNoKGNvbnRleHQpIHtcbiAgICAgIGNvbnN0IG1vZGFscyA9IG9uY2UoJ2tpbmV0aWMtbW9kYWwnLCAnW2RhdGEtY29tcG9uZW50LWlkPVwia2luZXRpYzptb2RhbFwiXScsIGNvbnRleHQpO1xuICAgICAgbW9kYWxzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIC8vIGFzc2lnbiB0byB2YXIgaWYgeW91IG5lZWQgdG8gY2FsbCBtZXRob2RzXG4gICAgICAgIC8vIGNvbnN0IG1vZGFsID0gbmV3IE1vZGFsKGVsKTtcbiAgICAgICAgbmV3IE1vZGFsKGVsKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gIH07XG59KShEcnVwYWwpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IGZ1bmN0aW9uKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoZnVuY3Rpb24oa2V5KSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSk7IH0pKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwic291cmNlLzAyLWNvbXBvbmVudHMvMDEtY29tcG9zaXRlcy9tb2RhbC9tb2RhbFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IGZ1bmN0aW9uKGNodW5rSWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMDsgfTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSBmdW5jdGlvbihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZShmdW5jdGlvbihpZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMDsgfSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wia2luZXRpY0NodW5rc1wiXSA9IHNlbGZbXCJraW5ldGljQ2h1bmtzXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfYm9vdHN0cmFwX2pzX2Rpc3RfYmFzZS1jb21wb25lbnRfanMtbm9kZV9tb2R1bGVzX2Jvb3RzdHJhcF9qc19kaXN0X2RvbV9zLTI1YmI3Y1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zb3VyY2UvMDItY29tcG9uZW50cy8wMS1jb21wb3NpdGVzL21vZGFsL21vZGFsLmVzNi5qc1wiKTsgfSlcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfYm9vdHN0cmFwX2pzX2Rpc3RfYmFzZS1jb21wb25lbnRfanMtbm9kZV9tb2R1bGVzX2Jvb3RzdHJhcF9qc19kaXN0X2RvbV9zLTI1YmI3Y1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zb3VyY2UvMDItY29tcG9uZW50cy8wMS1jb21wb3NpdGVzL21vZGFsL21vZGFsLnNjc3NcIik7IH0pXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIk5BTUUiLCJEQVRBX0tFWSIsIkVWRU5UX0tFWSIsIkRBVEFfQVBJX0tFWSIsIkVTQ0FQRV9LRVkiLCJFVkVOVF9ISURFIiwiRVZFTlRfSElERV9QUkVWRU5URUQiLCJFVkVOVF9ISURERU4iLCJFVkVOVF9TSE9XIiwiRVZFTlRfU0hPV04iLCJFVkVOVF9SRVNJWkUiLCJFVkVOVF9DTElDS19ESVNNSVNTIiwiRVZFTlRfTU9VU0VET1dOX0RJU01JU1MiLCJFVkVOVF9LRVlET1dOX0RJU01JU1MiLCJFVkVOVF9DTElDS19EQVRBX0FQSSIsIkNMQVNTX05BTUVfT1BFTiIsIkNMQVNTX05BTUVfRkFERSIsIkNMQVNTX05BTUVfU0hPVyIsIkNMQVNTX05BTUVfU1RBVElDIiwiT1BFTl9TRUxFQ1RPUiIsIlNFTEVDVE9SX0RJQUxPRyIsIlNFTEVDVE9SX01PREFMX0JPRFkiLCJTRUxFQ1RPUl9EQVRBX1RPR0dMRSIsIkRlZmF1bHQiLCJiYWNrZHJvcCIsImZvY3VzIiwia2V5Ym9hcmQiLCJEZWZhdWx0VHlwZSIsIk1vZGFsIiwiQmFzZUNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImNvbmZpZyIsIl9kaWFsb2ciLCJTZWxlY3RvckVuZ2luZSIsImZpbmRPbmUiLCJfZWxlbWVudCIsIl9iYWNrZHJvcCIsIl9pbml0aWFsaXplQmFja0Ryb3AiLCJfZm9jdXN0cmFwIiwiX2luaXRpYWxpemVGb2N1c1RyYXAiLCJfaXNTaG93biIsIl9pc1RyYW5zaXRpb25pbmciLCJfc2Nyb2xsQmFyIiwiU2Nyb2xsQmFySGVscGVyIiwiX2FkZEV2ZW50TGlzdGVuZXJzIiwidG9nZ2xlIiwicmVsYXRlZFRhcmdldCIsImhpZGUiLCJzaG93Iiwic2hvd0V2ZW50IiwiRXZlbnRIYW5kbGVyIiwidHJpZ2dlciIsImRlZmF1bHRQcmV2ZW50ZWQiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJfYWRqdXN0RGlhbG9nIiwiX3Nob3dFbGVtZW50IiwiaGlkZUV2ZW50IiwiZGVhY3RpdmF0ZSIsInJlbW92ZSIsIl9xdWV1ZUNhbGxiYWNrIiwiX2hpZGVNb2RhbCIsIl9pc0FuaW1hdGVkIiwiZGlzcG9zZSIsIm9mZiIsIndpbmRvdyIsImhhbmRsZVVwZGF0ZSIsIkJhY2tkcm9wIiwiaXNWaXNpYmxlIiwiQm9vbGVhbiIsIl9jb25maWciLCJpc0FuaW1hdGVkIiwiRm9jdXNUcmFwIiwidHJhcEVsZW1lbnQiLCJjb250YWlucyIsImFwcGVuZCIsInN0eWxlIiwiZGlzcGxheSIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInNjcm9sbFRvcCIsIm1vZGFsQm9keSIsImluZGV4X2pzIiwicmVmbG93IiwidHJhbnNpdGlvbkNvbXBsZXRlIiwiYWN0aXZhdGUiLCJvbiIsImV2ZW50Iiwia2V5IiwiX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24iLCJvbmUiLCJldmVudDIiLCJ0YXJnZXQiLCJfcmVzZXRBZGp1c3RtZW50cyIsInJlc2V0IiwiaXNNb2RhbE92ZXJmbG93aW5nIiwic2Nyb2xsSGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0IiwiaW5pdGlhbE92ZXJmbG93WSIsIm92ZXJmbG93WSIsInNjcm9sbGJhcldpZHRoIiwiZ2V0V2lkdGgiLCJpc0JvZHlPdmVyZmxvd2luZyIsInByb3BlcnR5IiwiaXNSVEwiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImpRdWVyeUludGVyZmFjZSIsImVhY2giLCJkYXRhIiwiZ2V0T3JDcmVhdGVJbnN0YW5jZSIsIlR5cGVFcnJvciIsImdldEVsZW1lbnRGcm9tU2VsZWN0b3IiLCJpbmNsdWRlcyIsInRhZ05hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImFscmVhZHlPcGVuIiwiZ2V0SW5zdGFuY2UiLCJjb21wb25lbnRGdW5jdGlvbnNfanMiLCJlbmFibGVEaXNtaXNzVHJpZ2dlciIsImRlZmluZUpRdWVyeVBsdWdpbiIsIkVWRU5UX01PVVNFRE9XTiIsImNsYXNzTmFtZSIsImNsaWNrQ2FsbGJhY2siLCJyb290RWxlbWVudCIsIkNvbmZpZyIsIl9nZXRDb25maWciLCJfaXNBcHBlbmRlZCIsImNhbGxiYWNrIiwiZXhlY3V0ZSIsIl9hcHBlbmQiLCJfZ2V0RWxlbWVudCIsIl9lbXVsYXRlQW5pbWF0aW9uIiwiY3JlYXRlRWxlbWVudCIsIl9jb25maWdBZnRlck1lcmdlIiwiZ2V0RWxlbWVudCIsImV4ZWN1dGVBZnRlclRyYW5zaXRpb24iLCJjb21wb25lbnQiLCJtZXRob2QiLCJjbGlja0V2ZW50IiwibmFtZSIsImlzRGlzYWJsZWQiLCJjbG9zZXN0IiwiaW5zdGFuY2UiLCJFVkVOVF9GT0NVU0lOIiwiRVZFTlRfS0VZRE9XTl9UQUIiLCJUQUJfS0VZIiwiVEFCX05BVl9GT1JXQVJEIiwiVEFCX05BVl9CQUNLV0FSRCIsImF1dG9mb2N1cyIsIl9pc0FjdGl2ZSIsIl9sYXN0VGFiTmF2RGlyZWN0aW9uIiwiX2hhbmRsZUZvY3VzaW4iLCJfaGFuZGxlS2V5ZG93biIsImVsZW1lbnRzIiwiZm9jdXNhYmxlQ2hpbGRyZW4iLCJsZW5ndGgiLCJzaGlmdEtleSIsIlNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQiLCJTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCIsIlBST1BFUlRZX1BBRERJTkciLCJQUk9QRVJUWV9NQVJHSU4iLCJkb2N1bWVudFdpZHRoIiwiY2xpZW50V2lkdGgiLCJNYXRoIiwiYWJzIiwiaW5uZXJXaWR0aCIsIndpZHRoIiwiX2Rpc2FibGVPdmVyRmxvdyIsIl9zZXRFbGVtZW50QXR0cmlidXRlcyIsImNhbGN1bGF0ZWRWYWx1ZSIsIl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzIiwiaXNPdmVyZmxvd2luZyIsIl9zYXZlSW5pdGlhbEF0dHJpYnV0ZSIsIm92ZXJmbG93Iiwic2VsZWN0b3IiLCJzdHlsZVByb3BlcnR5IiwibWFuaXB1bGF0aW9uQ2FsbEJhY2siLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInNldFByb3BlcnR5IiwiTnVtYmVyIiwicGFyc2VGbG9hdCIsIl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrIiwiYWN0dWFsVmFsdWUiLCJNYW5pcHVsYXRvciIsInNldERhdGFBdHRyaWJ1dGUiLCJ2YWx1ZSIsImdldERhdGFBdHRyaWJ1dGUiLCJyZW1vdmVQcm9wZXJ0eSIsInJlbW92ZURhdGFBdHRyaWJ1dGUiLCJjYWxsQmFjayIsImlzRWxlbWVudCIsInNlbCIsImZpbmQiLCJEcnVwYWwiLCJiZWhhdmlvcnMiLCJraW5lY3RpY01vZGFsIiwiYXR0YWNoIiwiY29udGV4dCIsIm1vZGFscyIsIm9uY2UiLCJmb3JFYWNoIiwiZWwiXSwic291cmNlUm9vdCI6IiJ9