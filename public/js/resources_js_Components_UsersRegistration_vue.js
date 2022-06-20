"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Components_UsersRegistration_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/UsersRegistration.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/UsersRegistration.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "UsersRegistration",
  data: function data() {
    return {
      response: '',
      file: '',
      user: {
        name: '',
        email: '',
        phone: '',
        position_id: ''
      }
    };
  },
  mounted: function mounted() {
    this.$store.dispatch('GET_POSITIONS');
  },
  methods: {
    sendForm: function sendForm() {
      var _this = this;

      axios.post('/users', new FormData(this.$refs.user_form), {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Token': this.token
        }
      }).then(function (response) {
        alert('Success!');
        _this.response = response.data;
      })["catch"](function (error) {
        console.log(error);
        _this.response = error;
      });
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(['token', 'positions']))
});

/***/ }),

/***/ "./resources/js/Components/UsersRegistration.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Components/UsersRegistration.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UsersRegistration_vue_vue_type_template_id_6a0177a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsersRegistration.vue?vue&type=template&id=6a0177a6& */ "./resources/js/Components/UsersRegistration.vue?vue&type=template&id=6a0177a6&");
/* harmony import */ var _UsersRegistration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsersRegistration.vue?vue&type=script&lang=js& */ "./resources/js/Components/UsersRegistration.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UsersRegistration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UsersRegistration_vue_vue_type_template_id_6a0177a6___WEBPACK_IMPORTED_MODULE_0__.render,
  _UsersRegistration_vue_vue_type_template_id_6a0177a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/UsersRegistration.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/UsersRegistration.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Components/UsersRegistration.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersRegistration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UsersRegistration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/UsersRegistration.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersRegistration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/UsersRegistration.vue?vue&type=template&id=6a0177a6&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Components/UsersRegistration.vue?vue&type=template&id=6a0177a6& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersRegistration_vue_vue_type_template_id_6a0177a6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersRegistration_vue_vue_type_template_id_6a0177a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersRegistration_vue_vue_type_template_id_6a0177a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UsersRegistration.vue?vue&type=template&id=6a0177a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/UsersRegistration.vue?vue&type=template&id=6a0177a6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/UsersRegistration.vue?vue&type=template&id=6a0177a6&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/UsersRegistration.vue?vue&type=template&id=6a0177a6& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
      attrs: { id: "register" },
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
              _c("p", [_vm._v("Fill in all fields with the appropriate data")]),
              _vm._v(" "),
              _c("div", { staticClass: "flex justify-center" }, [
                _c(
                  "form",
                  {
                    ref: "user_form",
                    staticClass: "w-full md:w-1/2",
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                        return _vm.sendForm.apply(null, arguments)
                      },
                    },
                  },
                  [
                    _c("div", { staticClass: "row space-y-4" }, [
                      _c("div", { staticClass: "w-full" }, [
                        _c("div", { staticClass: "mx-3" }, [
                          _c("div", { staticClass: "single_form" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.user.name,
                                  expression: "user.name",
                                },
                              ],
                              staticClass:
                                "w-full rounded-md py-4 px-6 border border-solid border-body-color",
                              attrs: {
                                name: "name",
                                placeholder: "Name",
                                type: "text",
                                required: "",
                              },
                              domProps: { value: _vm.user.name },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.user,
                                    "name",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-full" }, [
                        _c("div", { staticClass: "mx-3" }, [
                          _c("div", { staticClass: "single_form" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.user.email,
                                  expression: "user.email",
                                },
                              ],
                              staticClass:
                                "w-full rounded-md py-4 px-6 border border-solid border-body-color",
                              attrs: {
                                name: "email",
                                placeholder: "Email",
                                type: "email",
                                required: "",
                              },
                              domProps: { value: _vm.user.email },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.user,
                                    "email",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-full" }, [
                        _c("div", { staticClass: "mx-3" }, [
                          _c("div", { staticClass: "single_form" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.user.phone,
                                  expression: "user.phone",
                                },
                              ],
                              staticClass:
                                "w-full rounded-md py-4 px-6 border border-solid border-body-color",
                              attrs: {
                                name: "phone",
                                placeholder: "Phone number",
                                type: "tel",
                                required: "",
                              },
                              domProps: { value: _vm.user.phone },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.user,
                                    "phone",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-full" }, [
                        _c("div", { staticClass: "mx-3" }, [
                          _c("div", { staticClass: "single_form" }, [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.position_id,
                                    expression: "user.position_id",
                                  },
                                ],
                                staticClass:
                                  "w-full rounded-md py-4 px-6 border border-solid border-body-color",
                                attrs: {
                                  id: "position_id",
                                  name: "position_id",
                                  required: "",
                                },
                                on: {
                                  change: function ($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call(
                                        $event.target.options,
                                        function (o) {
                                          return o.selected
                                        }
                                      )
                                      .map(function (o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.user,
                                      "position_id",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                },
                              },
                              [
                                _c(
                                  "option",
                                  { attrs: { disabled: "", value: "" } },
                                  [_vm._v("Please select position")]
                                ),
                                _vm._v(" "),
                                _vm._l(_vm.positions, function (position) {
                                  return _c(
                                    "option",
                                    {
                                      key: position.id,
                                      domProps: { value: position.id },
                                    },
                                    [_vm._v(_vm._s(position.name))]
                                  )
                                }),
                              ],
                              2
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _vm._m(1),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "main-btn w-full",
                          attrs: { type: "submit" },
                        },
                        [_vm._v("Register")]
                      ),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("XHighlight", {
                staticClass: "x-highlight",
                attrs: {
                  title: "Result for /token",
                  lang: "json",
                  show: ["title", "num"],
                  tool: ["full-screen", "select-all", "copy"],
                  maxHeight: 300,
                  minHeight: 100,
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
        _vm._v("Register "),
        _c("span", { staticClass: "text-theme-color" }, [_vm._v("User")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-full" }, [
      _c("div", { staticClass: "mx-3" }, [
        _c("div", { staticClass: "single_form" }, [
          _c("input", {
            staticClass:
              "w-full rounded-md py-4 px-6 border border-solid border-body-color",
            attrs: { name: "photo", id: "photo", type: "file" },
          }),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);