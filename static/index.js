/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/helpers/attach-view-to-client.js":
/*!*************************************************!*\
  !*** ./client/helpers/attach-view-to-client.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function attachViewToClient(name, layout, client) {\n  client[name] = function renderView(view) {\n    const renderedView =\n      `<div class=\"${view.view}\">\\n  ${\n        layout(view, function renderChildren() {\n          const children = view.visibleChildren && view.visibleChildren();\n\n          if (children) {\n            return children.map(child => client[child.view](child))\n          }\n        }).split('\\n').join('\\n  ')\n      }\\n</div>`;\n    console.log(renderedView);\n    return renderedView;\n  }\n}\n\n//# sourceURL=webpack:///./client/helpers/attach-view-to-client.js?");

/***/ }),

/***/ "./client/helpers/create-event-handler.js":
/*!************************************************!*\
  !*** ./client/helpers/create-event-handler.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("handlers = [];\n\nmodule.exports = function (fn) {\n  const i = handlers.length;\n  handlers[i] = fn;\n  return `handlers[${i}]`;\n};\n\n\n//# sourceURL=webpack:///./client/helpers/create-event-handler.js?");

/***/ }),

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const makeClient = __webpack_require__(/*! ./root */ \"./client/root.js\");\nconst makeViewDomain = __webpack_require__(/*! ../view-domain/root */ \"./view-domain/root.js\");\nconst makeDomain = __webpack_require__(/*! ../domain/root */ \"./domain/root.js\");\n\nconst client = makeClient(makeViewDomain(makeDomain()));\n\nclient.onUpdate = rerender;\n\nfunction rerender() {\n  rootNode.innerHTML = client.render('/');\n}\n\nconst rootNode = document.createElement('div');\n\ndocument.body.append(rootNode);\n\nrerender();\n\n//# sourceURL=webpack:///./client/index.js?");

/***/ }),

/***/ "./client/layouts/add-grandkid-form.js":
/*!*********************************************!*\
  !*** ./client/layouts/add-grandkid-form.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const createEventHandler = __webpack_require__(/*! ../helpers/create-event-handler */ \"./client/helpers/create-event-handler.js\");\n\nmodule.exports = function RenderAddGrandkidForm(view, children) {\n  const renderedView = \n`\n<form class=\"list\" onsubmit=\"${createEventHandler(function (e) {\n  e.preventDefault();\n})}\">\n  <label>\n    Add Grandkid:\n    <input type=\"text\" onchange=\"${createEventHandler(function (e) {\n      const change = e.target.value;\n    })}\" />\n  </label>\n</form>\n`.trim();\n  return renderedView;\n}\n\n//# sourceURL=webpack:///./client/layouts/add-grandkid-form.js?");

/***/ }),

/***/ "./client/layouts/default-view.js":
/*!****************************************!*\
  !*** ./client/layouts/default-view.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (view, children) {\n  const renderedView = \n`\n<h1 class=\"HomepageHeading\">Multi-Domain Driven Design App for Grandparents</h1>\n<div class=\"body\">${children()[0]}</div>\n<div class=\"footer\">${children()[1]}</div>\n`.trim();\n  return renderedView;\n}\n\n//# sourceURL=webpack:///./client/layouts/default-view.js?");

/***/ }),

/***/ "./client/layouts/list-of-grandkids.js":
/*!*********************************************!*\
  !*** ./client/layouts/list-of-grandkids.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function RenderListOfGrandkids(view, children) {\n  const renderedView = \n`\n<div class=\"list\">\n  ${children().join('  \\n')}\n</div>\n`.trim();\n  return renderedView;\n}\n\n//# sourceURL=webpack:///./client/layouts/list-of-grandkids.js?");

/***/ }),

/***/ "./client/root.js":
/*!************************!*\
  !*** ./client/root.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const attachViewToClient = __webpack_require__(/*! ./helpers/attach-view-to-client */ \"./client/helpers/attach-view-to-client.js\");\n\nconst renderDefaultView = __webpack_require__(/*! ./layouts/default-view */ \"./client/layouts/default-view.js\");\nconst renderListOfGrandkids = __webpack_require__(/*! ./layouts/list-of-grandkids */ \"./client/layouts/list-of-grandkids.js\");\nconst renderAddGrandkidForm = __webpack_require__(/*! ./layouts/add-grandkid-form */ \"./client/layouts/add-grandkid-form.js\");\n\nmodule.exports = function render(viewDomain) {\n  const client = {\n    render(path) {\n      if (path === '/') {\n        return this.DefaultView(viewDomain.DefaultView());\n      }\n      if (path === '/add') {\n        return this.AddGrandkidForm(viewDomain.AddGrandkidForm());\n      }\n      throw new Error(`The requested path ${path} was not found.`);\n    },\n    execute(fn) {\n      fn();\n      if (this.onUpdate) this.onUpdate();\n    },\n  };\n\n  attachViewToClient('DefaultView', renderDefaultView, client);\n  attachViewToClient('ListOfGrandkids', renderListOfGrandkids, client);\n  attachViewToClient('AddGrandkidForm', renderAddGrandkidForm, client);\n\n  return client;\n}\n\n\n//# sourceURL=webpack:///./client/root.js?");

/***/ }),

/***/ "./domain/aggregates/generic-property-aggregate.js":
/*!*********************************************************!*\
  !*** ./domain/aggregates/generic-property-aggregate.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function makeGenericPropertyQuery(name) {\n  return function getProperty(aggregate, event, domain) {\n    if (event.action === 'add') {\n      return event.details[name];\n    }\n    return aggregate;\n    // if (event.action === 'update')\n  }\n}\n\n//# sourceURL=webpack:///./domain/aggregates/generic-property-aggregate.js?");

/***/ }),

/***/ "./domain/aggregates/grandkids.js":
/*!****************************************!*\
  !*** ./domain/aggregates/grandkids.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function Grandkids(aggregate, event, domain) {\n  aggregate = aggregate || [];\n  if (event.domain === 'grandkid') {\n    let subdomain = aggregate.find(kid => kid.id === event.id);\n    if (! subdomain) {\n      subdomain = domain.Grandkid();\n      subdomain.id = aggregate.length;\n      aggregate.push(subdomain);\n    }\n    subdomain.events.push(event);\n  }\n  return aggregate;\n}\n\n//# sourceURL=webpack:///./domain/aggregates/grandkids.js?");

/***/ }),

/***/ "./domain/commands/add-grandkid.js":
/*!*****************************************!*\
  !*** ./domain/commands/add-grandkid.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function AddGrandkid(grandkid) {\n  return [{\n    domain: 'grandkid',\n    action: 'add',\n    details: grandkid,\n  }];\n}\n\n//# sourceURL=webpack:///./domain/commands/add-grandkid.js?");

/***/ }),

/***/ "./domain/domains/grandkid.js":
/*!************************************!*\
  !*** ./domain/domains/grandkid.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const attachAggregate = __webpack_require__(/*! ../helpers/attach-aggregate-to-domain */ \"./domain/helpers/attach-aggregate-to-domain.js\");\nconst genericPropertyQuery = __webpack_require__(/*! ../aggregates/generic-property-aggregate */ \"./domain/aggregates/generic-property-aggregate.js\");\n\nmodule.exports = function makeGrandkid() {\n  const domain = { events: [] };\n\n  attachAggregate(domain, 'Name', genericPropertyQuery('name'));\n\n  return domain;\n}\n\n//# sourceURL=webpack:///./domain/domains/grandkid.js?");

/***/ }),

/***/ "./domain/helpers/attach-aggregate-to-domain.js":
/*!******************************************************!*\
  !*** ./domain/helpers/attach-aggregate-to-domain.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function attachAggregateToDomain (domain, name, query) {\n  domain[name] = function (...args) {\n    let aggregate;\n\n    domain.events.forEach(function (event) {\n      aggregate = query(aggregate, event, domain);\n    });\n\n    return aggregate;\n  }\n}\n\n//# sourceURL=webpack:///./domain/helpers/attach-aggregate-to-domain.js?");

/***/ }),

/***/ "./domain/helpers/attach-command-to-domain.js":
/*!****************************************************!*\
  !*** ./domain/helpers/attach-command-to-domain.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function attachCommandToDomain (domain, name, command) {\n  domain[name] = function (...args) {\n    const events = command(...args);\n\n    domain.events.push(...events);\n\n    return events;\n  }\n}\n\n//# sourceURL=webpack:///./domain/helpers/attach-command-to-domain.js?");

/***/ }),

/***/ "./domain/helpers/attach-query-to-domain.js":
/*!**************************************************!*\
  !*** ./domain/helpers/attach-query-to-domain.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function attachQueryToDomain (domain, name, query) {\n  domain[name] = function (...args) {\n    return query(args, domain);\n  }\n}\n\n//# sourceURL=webpack:///./domain/helpers/attach-query-to-domain.js?");

/***/ }),

/***/ "./domain/helpers/attach-subdomain-to-domain.js":
/*!******************************************************!*\
  !*** ./domain/helpers/attach-subdomain-to-domain.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function attachSubdomainToDomain(domain, name, subdomain) {\n  domain[name] = function (...args) {\n    return subdomain(args);\n  }\n};\n\n\n//# sourceURL=webpack:///./domain/helpers/attach-subdomain-to-domain.js?");

/***/ }),

/***/ "./domain/queries/view-all-grandkids.js":
/*!**********************************************!*\
  !*** ./domain/queries/view-all-grandkids.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function viewAllGrandkids(args, domain) {\n  return {\n    grandkids: domain.Grandkids(),\n  };\n}\n\n\n//# sourceURL=webpack:///./domain/queries/view-all-grandkids.js?");

/***/ }),

/***/ "./domain/root.js":
/*!************************!*\
  !*** ./domain/root.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const attachQuery = __webpack_require__(/*! ./helpers/attach-query-to-domain */ \"./domain/helpers/attach-query-to-domain.js\");\nconst attachCommand = __webpack_require__(/*! ./helpers/attach-command-to-domain */ \"./domain/helpers/attach-command-to-domain.js\");\nconst attachSubdomain = __webpack_require__(/*! ./helpers/attach-subdomain-to-domain */ \"./domain/helpers/attach-subdomain-to-domain.js\");\nconst attachAggregate = __webpack_require__(/*! ./helpers/attach-aggregate-to-domain */ \"./domain/helpers/attach-aggregate-to-domain.js\");\n\nmodule.exports = function makeDomain() {\n  const domain = { events: [] };\n\n  attachQuery(domain, 'ViewAllGrandkids', __webpack_require__(/*! ./queries/view-all-grandkids */ \"./domain/queries/view-all-grandkids.js\"));\n  attachCommand(domain, 'AddGrandkid', __webpack_require__(/*! ./commands/add-grandkid */ \"./domain/commands/add-grandkid.js\"));\n  attachSubdomain(domain, 'Grandkid', __webpack_require__(/*! ./domains/grandkid */ \"./domain/domains/grandkid.js\"));\n  attachAggregate(domain, 'Grandkids', __webpack_require__(/*! ./aggregates/grandkids */ \"./domain/aggregates/grandkids.js\"));\n\n  return domain;\n}\n\n\n//# sourceURL=webpack:///./domain/root.js?");

/***/ }),

/***/ "./view-domain/helpers/attach-view-to-domain.js":
/*!******************************************************!*\
  !*** ./view-domain/helpers/attach-view-to-domain.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function attachViewToDomain(domain, name, view) {\n  domain[name] = function domainView(...args) {\n    return view(args, domain);\n  }\n}\n\n//# sourceURL=webpack:///./view-domain/helpers/attach-view-to-domain.js?");

/***/ }),

/***/ "./view-domain/root.js":
/*!*****************************!*\
  !*** ./view-domain/root.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const attachViewToDomain = __webpack_require__(/*! ./helpers/attach-view-to-domain */ \"./view-domain/helpers/attach-view-to-domain.js\");\n\nconst defaultView = __webpack_require__(/*! ./views/default-view */ \"./view-domain/views/default-view.js\");\nconst listOfGrandkids = __webpack_require__(/*! ./views/list-of-grandkids */ \"./view-domain/views/list-of-grandkids.js\");\nconst grandkidListItem = __webpack_require__(/*! ./views/grandkid-list-item */ \"./view-domain/views/grandkid-list-item.js\");\nconst addGrandkidForm = __webpack_require__(/*! ./views/add-grandkid-form */ \"./view-domain/views/add-grandkid-form.js\");\n\nmodule.exports = function makeDomain(coreDomain) {\n  const storage = {};\n  const domain = {\n    core: coreDomain,\n    store: function (namespace, key, value) {\n      storage[`${namespace}::${key}`] = value;\n    },\n    get: function (namespace, key) {\n      return storage[`${namespace}::${key}`];\n    },\n  };\n\n  attachViewToDomain(domain, 'DefaultView', defaultView);\n  attachViewToDomain(domain, 'ListOfGrandkids', listOfGrandkids);\n  attachViewToDomain(domain, 'GrandkidListItem', grandkidListItem);\n  attachViewToDomain(domain, 'AddGrandkidForm', addGrandkidForm);\n\n  return domain;\n}\n\n//# sourceURL=webpack:///./view-domain/root.js?");

/***/ }),

/***/ "./view-domain/views/add-grandkid-form.js":
/*!************************************************!*\
  !*** ./view-domain/views/add-grandkid-form.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function addGrandkidForm(args, domain) {\n  const grandkid = args[0];\n  return {\n    view: 'AddGrandkidForm',\n    inputName(name) {\n      domain.store('AddGrandkidForm', 'nameInput', name);\n    },\n    submitForm() {\n      const name = domain.get('AddGrandkidForm', 'nameInput');\n\n      domain.core.AddGrandkid({ name });\n    }\n  };\n}\n\n//# sourceURL=webpack:///./view-domain/views/add-grandkid-form.js?");

/***/ }),

/***/ "./view-domain/views/default-view.js":
/*!*******************************************!*\
  !*** ./view-domain/views/default-view.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function defaultView(args, domain) {\n  return {\n    view: 'DefaultView',\n    visibleChildren() {\n      return [\n        domain.ListOfGrandkids(),\n        domain.AddGrandkidForm(),\n      ]\n    },\n  }\n}\n\n//# sourceURL=webpack:///./view-domain/views/default-view.js?");

/***/ }),

/***/ "./view-domain/views/grandkid-list-item.js":
/*!*************************************************!*\
  !*** ./view-domain/views/grandkid-list-item.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function grandkidListItem(args, domain) {\n  const grandkid = args[0];\n  return {\n    view: 'GrandkidListItem',\n  };\n}\n\n//# sourceURL=webpack:///./view-domain/views/grandkid-list-item.js?");

/***/ }),

/***/ "./view-domain/views/list-of-grandkids.js":
/*!************************************************!*\
  !*** ./view-domain/views/list-of-grandkids.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function listOfGrandkids(args, domain) {\n  return {\n    view: 'ListOfGrandkids',\n    visibleChildren() {\n      const grandkids = domain.core.ViewAllGrandkids().grandkids || [];\n\n      return grandkids.map(grandkid => domain.GrandkidListItem(grandkid));\n    }\n  }\n}\n\n//# sourceURL=webpack:///./view-domain/views/list-of-grandkids.js?");

/***/ })

/******/ });