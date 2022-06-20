"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Components_UsersComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/UsersComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/UsersComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "UsersComponent",
  data: function data() {
    return {
      response: '',
      next_url: '',
      prev_url: ''
    };
  },
  mounted: function mounted() {
    this.getUsers();
  },
  methods: {
    getUsers: function getUsers(url) {
      var _this = this;

      this.$store.dispatch('GET_USERS', url).then(function (response) {
        _this.response = response;
        _this.prev_url = response.links.prev;
        _this.next_url = response.links.next;
      });
    },
    getUser: function getUser(id) {
      var _this2 = this;

      axios.get('/users/' + id).then(function (response) {
        alert('Success!');
        _this2.response = response.data;
      })["catch"](function (error) {
        _this2.response = error;
      });
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(['users']))
});

/***/ }),

/***/ "./resources/js/Components/UsersComponent.vue":
/*!****************************************************!*\
  !*** ./resources/js/Components/UsersComponent.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UsersComponent_vue_vue_type_template_id_1dd7e060___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsersComponent.vue?vue&type=template&id=1dd7e060& */ "./resources/js/Components/UsersComponent.vue?vue&type=template&id=1dd7e060&");
/* harmony import */ var _UsersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsersComponent.vue?vue&type=script&lang=js& */ "./resources/js/Components/UsersComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UsersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UsersComponent_vue_vue_type_template_id_1dd7e060___WEBPACK_IMPORTED_MODULE_0__.render,
  _UsersComponent_vue_vue_type_template_id_1dd7e060___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/UsersComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/UsersComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Components/UsersComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UsersComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/UsersComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/UsersComponent.vue?vue&type=template&id=1dd7e060&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Components/UsersComponent.vue?vue&type=template&id=1dd7e060& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersComponent_vue_vue_type_template_id_1dd7e060___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersComponent_vue_vue_type_template_id_1dd7e060___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersComponent_vue_vue_type_template_id_1dd7e060___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UsersComponent.vue?vue&type=template&id=1dd7e060& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/UsersComponent.vue?vue&type=template&id=1dd7e060&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/UsersComponent.vue?vue&type=template&id=1dd7e060&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/UsersComponent.vue?vue&type=template&id=1dd7e060& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "container w-full mx-auto pt-32 sm:pt-20",
      attrs: { id: "users" },
    },
    [
      _c(
        "div",
        {
          staticClass:
            "w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal",
        },
        [
          _c(
            "div",
            {
              staticClass:
                "flex flex-col justify-center text-center my-10 space-y-4",
            },
            [
              _vm._m(0),
              _vm._v(" "),
              _c("p", [_vm._v("List of registered users")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "p-8 mt-6 lg:mt-0 rounded shadow bg-white" },
                [
                  _c("div", { staticClass: "flex flex-col" }, [
                    _c(
                      "div",
                      { staticClass: "overflow-x-auto sm:-mx-6 lg:-mx-8" },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "py-4 inline-block min-w-full sm:px-6 lg:px-8",
                          },
                          [
                            _c("div", { staticClass: "overflow-hidden" }, [
                              _c(
                                "table",
                                { staticClass: "min-w-full text-center" },
                                [
                                  _vm._m(1),
                                  _vm._v(" "),
                                  _c(
                                    "tbody",
                                    _vm._l(_vm.users, function (user) {
                                      return _c(
                                        "tr",
                                        { staticClass: "bg-white border-b" },
                                        [
                                          _c(
                                            "td",
                                            {
                                              staticClass:
                                                "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",
                                            },
                                            [
                                              _vm._v(
                                                "\n                                            " +
                                                  _vm._s(user.id) +
                                                  "\n                                        "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            {
                                              staticClass:
                                                "text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap",
                                            },
                                            [
                                              _c("img", {
                                                staticClass: "rounded-full",
                                                attrs: {
                                                  src: user.photo,
                                                  width: "30px",
                                                  height: "30px",
                                                },
                                              }),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            {
                                              staticClass:
                                                "text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap",
                                            },
                                            [
                                              _vm._v(
                                                "\n                                            " +
                                                  _vm._s(user.name) +
                                                  "\n                                        "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            {
                                              staticClass:
                                                "text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap",
                                            },
                                            [
                                              _vm._v(
                                                "\n                                            " +
                                                  _vm._s(user.position) +
                                                  "\n                                        "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            {
                                              staticClass:
                                                "text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap",
                                            },
                                            [
                                              _vm._v(
                                                "\n                                            " +
                                                  _vm._s(user.phone) +
                                                  "\n                                        "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            {
                                              staticClass:
                                                "text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap",
                                            },
                                            [
                                              _vm._v(
                                                "\n                                            " +
                                                  _vm._s(user.email) +
                                                  "\n                                        "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            {
                                              staticClass:
                                                "text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap",
                                            },
                                            [
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "p-2 bg-theme-color text-white rounded-sm",
                                                  on: {
                                                    click: function ($event) {
                                                      return _vm.getUser(
                                                        user.id
                                                      )
                                                    },
                                                  },
                                                },
                                                [_vm._v("Get user")]
                                              ),
                                            ]
                                          ),
                                        ]
                                      )
                                    }),
                                    0
                                  ),
                                ]
                              ),
                            ]),
                          ]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-full justify-between" }, [
                      _vm.prev_url
                        ? _c(
                            "button",
                            {
                              staticClass: "main-btn pricing_btn",
                              on: {
                                click: function ($event) {
                                  return _vm.getUsers(_vm.prev_url)
                                },
                              },
                            },
                            [_vm._v("Previous page")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.next_url
                        ? _c(
                            "button",
                            {
                              staticClass: "main-btn pricing_btn",
                              on: {
                                click: function ($event) {
                                  return _vm.getUsers(_vm.next_url)
                                },
                              },
                            },
                            [_vm._v("Next page")]
                          )
                        : _vm._e(),
                    ]),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c("XHighlight", {
                staticClass: "x-highlight",
                attrs: {
                  title: "Result for /users /users/{id}",
                  lang: "json",
                  show: ["title", "num"],
                  tool: ["full-screen", "select-all", "copy"],
                  maxHeight: 300,
                  locale: "en",
                  data: _vm.response,
                },
              }),
            ],
            1
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h2",
      {
        staticClass:
          "hero_title text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold",
      },
      [
        _c("span", { staticClass: "text-theme-color" }, [_vm._v("Users ")]),
        _vm._v("list"),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "thead",
      { staticClass: "border-b bg-theme-color rounded-t-md" },
      [
        _c("tr", [
          _c(
            "th",
            {
              staticClass: "text-sm font-medium text-white px-6 py-4",
              attrs: { scope: "col" },
            },
            [
              _vm._v(
                "\n                                            ID\n                                        "
              ),
            ]
          ),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }),
          _vm._v(" "),
          _c(
            "th",
            {
              staticClass: "text-sm font-medium text-white px-6 py-4",
              attrs: { scope: "col" },
            },
            [
              _vm._v(
                "\n                                            Name\n                                        "
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "th",
            {
              staticClass: "text-sm font-medium text-white px-6 py-4",
              attrs: { scope: "col" },
            },
            [
              _vm._v(
                "\n                                            Position\n                                        "
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "th",
            {
              staticClass: "text-sm font-medium text-white px-6 py-4",
              attrs: { scope: "col" },
            },
            [
              _vm._v(
                "\n                                            Phone\n                                        "
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "th",
            {
              staticClass: "text-sm font-medium text-white px-6 py-4",
              attrs: { scope: "col" },
            },
            [
              _vm._v(
                "\n                                            Email\n                                        "
              ),
            ]
          ),
          _vm._v(" "),
          _c("th"),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ })

}]);