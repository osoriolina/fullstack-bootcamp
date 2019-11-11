(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n\n\n\n\n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-2 sideBar_properties\">\n        <div class=\"row\">\n            <div class=\"col-12 \">\n                <img routerLink=\"/home/\" style=\"outline: none;\" class=\"logo_properties\" src=\"../../assets/logo.png\">\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-12 sideBarDiv_properties\">\n                <i class=\"fas fa-home fa_properties\"></i>\n                <p class=\"sideBarText_properties\">Home</p>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-12 sideBarDiv_properties\">\n                <i class=\"fas fa-search fa_properties\"></i>\n                <p class=\"sideBarText_properties\">Search</p>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-12 sideBarDiv_properties\">\n                <i class=\"fas fa-book fa_properties\"></i>\n                <p class=\"sideBarText_properties\">Your Library</p>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-12 sideBarDiv_properties\">\n                <p class=\"sidebarPlaylistText_properties\">PLAYLISTS</p>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-12 sideBarDiv_properties\">\n                <i class=\"fas fa-plus-square fa_CreateList_properties\"></i>\n                <p class=\"createListProperties\">Create playlist</p>\n            </div>\n        </div>\n\n\n        <div class=\"overflow-auto sidebarPlaylistList_properties\">\n            <p>Rocksteady</p>\n            <p>Dany Records</p>\n            <p>Rock en Ñ</p>\n            <p>Discovered by Music</p>\n            <p>Liked from Radio</p>\n            <p>Estopa Melendi</p>\n            <p>Just Get Going</p>\n            <p>Frien de Semana</p>\n            <p>All Out 50s</p>\n            <p>Hey Big Spender</p>\n            <p>Boleros Romanticos</p>\n            <p>Discover Weekly</p>\n            <p>Positive Vibes</p>\n            <p>Wake Up and Smell the Coffee</p>\n            <p>Rocksteady</p>\n            <p>Dany Records</p>\n            <p>Rock en Ñ</p>\n            <p>Discovered by Music</p>\n            <p>Liked from Radio</p>\n            <p>Estopa Melendi</p>\n            <p>Just Get Going</p>\n            <p>Frien de Semana</p>\n            <p>All Out 50s</p>\n            <p>Hey Big Spender</p>\n            <p>Boleros Romanticos</p>\n            <p>Discover Weekly</p>\n            <p>Positive Vibes</p>\n            <p>Wake Up and Smell the Coffee</p>\n        </div>\n\n\n\n\n\n    </div>\n\n    <div class=\"col-10 bg_properties\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n\n\n                <div class=\"row\">\n                    <div class=\"col-2\">\n                        <div class=\"card card_properties\" style=\"width: 13rem;\">\n                            <img routerLink=\"/song/{{songPlaying.id}}\" src=\"../../assets/{{songPlaying.cover}}\"\n                                class=\"card-img-top img_properties\" alt=\"...\">\n                            <div class=\"card-body cardBody_properties\">\n                                <h5 routerLink=\"/song/{{songPlaying.id}}\" class=\"card-title\">{{songPlaying.album}}</h5>\n                                <p routerLink=\"/song/{{songPlaying.id}}\" class=\"card-text\">{{songPlaying.artist}}</p>\n                                <button class=\"play_btn\" onclick=\"document.getElementById('player').play()\">Play</button> \n                                <p style=\"font-size: 13px;\">{{songPlaying.year}} • {{songPlaying.numOfSongs}}</p>\n                            </div>\n                        </div>\n                    </div>\n\n\n\n                    <div class=\"col-lg-10 col-md-0 col-sm-0\">\n                        <table class=\"table table-borderless table_properties\">\n                            <tbody>\n                                <tr >\n                                    <th scope=\"row\"><i class=\"fas fa-music\"></i></th>\n                                    <td class=\"album_properties\">{{songPlaying.song}}</td>\n                                    <td>{{songPlaying.length}}</td>\n                                </tr>\n                                <tr>\n                          \n                            </tbody>\n                        </table>\n                    </div>\n\n                </div>\n\n\n\n            </div>\n        </div>\n\n    </div> <!-- cierre col 10-->\n\n</div> <!-- cierre row principal-->\n\n<div class=\"row player_properties\">\n    <div class=\"col-12\">\n\n        <div class=\"row\">\n            <div class=\"col-4\">\n                <div class=\"card mb-3 player_card\" style=\"max-width: 520px;\">\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-md-4\">\n                            <img src=\"../../assets/{{songPlaying.cover}}\" class=\"card-img player_img\" alt=\"...\">\n                        </div>\n                        <div class=\"col-md-8\">\n                            <div class=\"card-body\">\n                                <h5 class=\"card-title player_title\">{{songPlaying.album}}</h5>\n                                <p class=\"card-text player_subtitle\">{{songPlaying.artist}}</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"col-4\">\n                <audio id=\"player\" class=\"audio_properties\">\n                    <source src=\"../../assets/{{songPlaying.playSong}}\">\n                </audio>\n\n                <i class=\"far fa-play-circle player_elements\" onclick=\"document.getElementById('player').play()\"></i>\n                <i class=\"fas fa-pause player_elements\" onclick=\"document.getElementById('player').pause()\"></i>\n                <i class=\"fas fa-plus player_elements\" onclick=\"document.getElementById('player').volume += 0.1\"></i>\n                <i class=\"fas fa-minus player_elements\" onclick=\"document.getElementById('player').volume -= 0.1\"></i>\n            </div>\n\n\n            <div class=\"col-4\">\n\n                <img style=\"width: 250px;\" src=\"../../assets/img.png\">\n\n            </div>\n\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/song-list/song-list.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/song-list/song-list.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-2 sideBar_properties\">\n        <div class=\"row\">\n            <div class=\"col-12 \">\n                <img class=\"logo_properties\" src=\"../../assets/logo.png\">\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-12 sideBarDiv_properties\">\n                <i class=\"fas fa-home fa_properties\"></i>\n                <p class=\"sideBarText_properties\">Home</p>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-12 sideBarDiv_properties\">\n                <i class=\"fas fa-search fa_properties\"></i>\n                <p class=\"sideBarText_properties\">Search</p>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-12 sideBarDiv_properties\">\n                <i class=\"fas fa-book fa_properties\"></i>\n                <p class=\"sideBarText_properties\">Your Library</p>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-12 sideBarDiv_properties\">\n                <p class=\"sidebarPlaylistText_properties\">PLAYLISTS</p>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-12 sideBarDiv_properties\">\n                <i class=\"fas fa-plus-square fa_CreateList_properties\"></i>\n                <p class=\"createListProperties\">Create playlist</p>\n            </div>\n        </div>\n\n\n        <div class=\"overflow-auto sidebarPlaylistList_properties\">\n            <p>Rocksteady</p>\n            <p>Dany Records</p>\n            <p>Rock en Ñ</p>\n            <p>Discovered by Music</p>\n            <p>Liked from Radio</p>\n            <p>Estopa Melendi</p>\n            <p>Just Get Going</p>\n            <p>Frien de Semana</p>\n            <p>All Out 50s</p>\n            <p>Hey Big Spender</p>\n            <p>Boleros Romanticos</p>\n            <p>Discover Weekly</p>\n            <p>Positive Vibes</p>\n            <p>Wake Up and Smell the Coffee</p>\n            <p>Rocksteady</p>\n            <p>Dany Records</p>\n            <p>Rock en Ñ</p>\n            <p>Discovered by Music</p>\n            <p>Liked from Radio</p>\n            <p>Estopa Melendi</p>\n            <p>Just Get Going</p>\n            <p>Frien de Semana</p>\n            <p>All Out 50s</p>\n            <p>Hey Big Spender</p>\n            <p>Boleros Romanticos</p>\n            <p>Discover Weekly</p>\n            <p>Positive Vibes</p>\n            <p>Wake Up and Smell the Coffee</p>\n        </div>\n\n\n\n\n\n    </div>\n\n    <div class=\"col-10 bg_properties\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- navbar-->\n                <nav class=\"navbar navbar-expand-lg navbar-light navbar_properties\">\n                    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\n                        data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\"\n                        aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-icon\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n                        <div class=\"navbar-nav\">\n                            <a class=\"nav-item nav-link\" href=\"#\">FEATURED </a>\n                            <a class=\"nav-item nav-link\" href=\"#\">PODCASTS</a>\n                            <a class=\"nav-item nav-link\" href=\"#\">CHARTS</a>\n                            <a class=\"nav-item nav-link\" href=\"#\">GENRES & MOODS</a>\n                            <a class=\"nav-item nav-link\" href=\"#\">NEW RELEASES</a>\n                            <a class=\"nav-item nav-link\" href=\"#\">DISCOVER</a>\n                        </div>\n                    </div>\n                </nav>\n\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <h1 class=\"title_properties\">Recently played</h1>\n                        <p class=\"subtitle\">SEE ALL</p>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div *ngFor=\"let song of songs\" class=\"col-lg-2 col-md-3 col-sm-6\">\n                        <div class=\"card card_properties\" style=\"width: 13rem;\">\n                            <div class=\"container_prop\">\n                                <img routerLink=\"/song/{{song.id}}\" src=\"../../assets/{{song.cover}}\"\n                                    class=\"card-img-top img_properties\" alt=\"...\">\n                                <div class=\"middle\">\n                                    <div class=\"text\"><i class=\"far fa-play-circle\"></i></div>\n                                </div>\n                            </div>\n                            <div class=\"card-body cardBody_properties\">\n                                <h5 routerLink=\"/song/{{song.id}}\" class=\"card-title\">{{song.album}}</h5>\n                                <p routerLink=\"/song/{{song.id}}\" class=\"card-text\">{{song.artist}}</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <h1 class=\"title_properties\">Your heavy rotation</h1>\n                        <h6 class=\"subtitle_2\">The music you’ve had on repeat this month.</h6>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div *ngFor=\"let song of songs\" class=\"col-lg-2 col-md-3 col-sm-6\">\n                        <div class=\"card card_properties\" style=\"width: 13rem;\">\n                            <div class=\"container_prop\">\n                                <img routerLink=\"/song/{{song.id}}\" src=\"../../assets/{{song.cover}}\"\n                                    class=\"card-img-top img_properties\" alt=\"...\">\n                                <div class=\"middle\">\n                                    <div class=\"text\"><i class=\"far fa-play-circle\"></i></div>\n                                </div>\n                            </div>\n                            <div class=\"card-body cardBody_properties\">\n                                <h5 routerLink=\"/song/{{song.id}}\" class=\"card-title\">{{song.album}}</h5>\n                                <p routerLink=\"/song/{{song.id}}\" class=\"card-text\">{{song.artist}}</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <h1 class=\"title_properties\">Jump back in</h1>\n                        <h6 class=\"subtitle_2\">Your top listens from the past few months.</h6>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div *ngFor=\"let song of songs\" class=\"col-lg-2 col-md-3 col-sm-6\">\n                        <div class=\"card card_properties\" style=\"width: 13rem;\">\n                            <div class=\"container_prop\">\n                                <img routerLink=\"/song/{{song.id}}\" src=\"../../assets/{{song.cover}}\"\n                                    class=\"card-img-top img_properties\" alt=\"...\">\n                                <div class=\"middle\">\n                                    <div class=\"text\"><i class=\"far fa-play-circle\"></i></div>\n                                </div>\n                            </div>\n                            <div class=\"card-body cardBody_properties\">\n                                <h5 routerLink=\"/song/{{song.id}}\" class=\"card-title\">{{song.album}}</h5>\n                                <p routerLink=\"/song/{{song.id}}\" class=\"card-text\">{{song.artist}}</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <h1 class=\"title_properties\">Based on your recent listenings</h1>\n                        <h6 class=\"subtitle_2\">Inspired by your recent activity.</h6>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div *ngFor=\"let song of songs\" class=\"col-lg-2 col-md-3 col-sm-6\">\n                        <div class=\"card card_properties\" style=\"width: 13rem;\">\n\n                            <div class=\"container_prop\">\n                                <img routerLink=\"/song/{{song.id}}\" src=\"../../assets/{{song.cover}}\"\n                                    class=\"card-img-top img_properties\" alt=\"...\">\n                                <div class=\"middle\">\n                                    <div class=\"text\"><i class=\"far fa-play-circle\"></i></div>\n                                </div>\n                            </div>\n\n\n                            <div class=\"card-body cardBody_properties\">\n                                <h5 routerLink=\"/song/{{song.id}}\" class=\"card-title\">{{song.album}}</h5>\n                                <p routerLink=\"/song/{{song.id}}\" class=\"card-text\">{{song.artist}}</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n\n            </div>\n        </div>\n\n    </div> <!-- cierre col 10-->\n\n</div> <!-- cierre row principal-->\n\n<div class=\"row player_properties d-none\">\n    <div class=\"col-12\">\n\n        <div class=\"row\">\n            <div class=\"col-4\">\n                <div class=\"card mb-3\" style=\"max-width: 540px;\">\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-md-4\">\n                            <img src=\"../../assets/{{songPlaying.cover}}\" class=\"card-img\">\n                        </div>\n                        <div class=\"col-md-8\">\n                            <div class=\"card-body\">\n                                <h5 class=\"card-title\">Card title</h5>\n                                <p class=\"card-text\">This is a wider card with supporting text below as a natural\n                                    lead-in to additional content. This content is a little bit longer.</p>\n                                <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"col-4\">\n                <audio class=\"audio_properties\" controls>\n                    <source src=\"../../assets/Don't Stop Me Now.mp3\">\n                </audio>\n            </div>\n\n\n            <div class=\"col-4\">\n\n            </div>\n\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'spotify';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _song_list_song_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./song-list/song-list.component */ "./src/app/song-list/song-list.component.ts");
            /* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/-data.service */ "./src/app/service/-data.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routerConfig = [
                { 'path': '', 'component': _song_list_song_list_component__WEBPACK_IMPORTED_MODULE_4__["SongListComponent"] },
                { 'path': 'home', 'component': _song_list_song_list_component__WEBPACK_IMPORTED_MODULE_4__["SongListComponent"] },
                { 'path': 'song/:id', 'component': _player_player_component__WEBPACK_IMPORTED_MODULE_5__["PlayerComponent"] },
                { 'path': '**', 'component': _song_list_song_list_component__WEBPACK_IMPORTED_MODULE_4__["SongListComponent"] },
            ];
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                        _song_list_song_list_component__WEBPACK_IMPORTED_MODULE_4__["SongListComponent"],
                        _player_player_component__WEBPACK_IMPORTED_MODULE_5__["PlayerComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routerConfig),
                    ],
                    providers: [_service_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/player/player.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/player/player.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("body {\n    background-color: #181818;\n   \n}\n\n.bg_properties {\n   background: rgb(5,5,5);\nbackground: linear-gradient(0deg, rgba(5,5,5,1) 38%, rgba(44,44,45,1) 76%, rgba(58,59,59,1) 100%);\n   padding-right: 90px;\n   height: 800px;\n\n  \n}\n\n.sideBar_properties {\n    background-color: #050505;\n    color: white;\n   \n \n}\n\n.sideBarDiv_properties {\n    margin-bottom: 15px;\n}\n\n.sideBarText_properties {\n    float: right;\n    margin-right: 130px;\n    position: absolute;\n    top: 6px;\n    left: 90px;\n    font-size: 14px;\n    color: #A3A3A3;\n}\n\n.sidebarPlaylistText_properties {\n    float: right;\n    margin-right: 130px;\n    position: absolute;\n    top: 28px;\n    left: 45px;\n    font-size: 14px;\n    color: #A3A3A3;\n}\n\n.createListProperties {\n    float: right;\n    margin-right: 130px;\n    position: absolute;\n    top: 50px;\n    left: 90px;\n    font-size: 14px;\n    color: #A3A3A3;\n}\n\n.sidebarPlaylistList_properties {\n    font-size: 14px;\n    color: #A3A3A3;\n    padding: 0%;\n    margin: 2px;\n    position: absolute;\n    top: 380px;\n    left: 40px;\n    height: 300px;\n}\n\n.sidebarPlaylistList_properties p {\n    margin-bottom: 0;\n}\n\n.fa_properties {\n    margin-left: 30px;\n    font-size: 25px;\n    color: #A3A3A3;\n    \n}\n\n.fa_CreateList_properties {\n    margin-left: 30px;\n    font-size: 40px;\n    color: #A3A3A3;\n    position: absolute;\n    top: 50px;\n    left: 12px;\n}\n\n.logo_properties {\n    width: 155px;\n    padding-left: 30px;\n    padding-top: 30px;\n    margin-bottom: 30px;\n}\n\n.navbarText__properties{\n    padding-right: 40px ;\n}\n\n.navbar_properties {\n    background-color: #181818;\n    margin-right: 100px;\n    \n}\n\n.navbar_properties a {\n    color: #A3A3A3;\n    font-size: 12px;\n    margin-top: 25px;\n    padding-right: 40px;\n    \n}\n\n.navbar_properties a:hover{\n    color: white;\n}\n\n.navbar_properties a:active {\n    color: yellow;\n}\n\n.title_properties {\n    color: white;\n    margin-top: 40px;\n    margin-bottom: 600px;\n}\n\n.subtitle {\n    color: #A3A3A3;\n    float: right;\n    position: absolute;\n    top: 63px;\n    right: 25px;\n    font-size: 15px;\n}\n\n.subtitle_2 {\n    color: #A3A3A3;\n}\n\n.card_properties {\n    border: none;\n    border-radius: 0% !important;\n    margin-left: 80px;\n    margin-top: 50px;\n\n}\n\n.img_properties {\n    border-radius: 0% !important;\n    width: 320px;\n}\n\n.cardBody_properties {\n    color: white;\n    text-align: center;\n    padding-left: 65px;\n    border: none;\n    background: rgb(5,5,5);\n    background: linear-gradient(0deg, rgba(5,5,5,1) 71%, rgba(44,44,45,1) 95%, rgba(58,59,59,1) 100%);\n}\n\n.player_card {\n    background: none;\n    color: white;\n    border: none;\n}\n\n.player_title {\n    font-size: 15px;\n}\n\n.player_subtitle {\n    font-style: 8px;\n}\n\n.player_properties {\n    background-color: #282828;\n    height: 100px;\n    width: 120%;\n    position: fixed;\n    bottom: 0%;\n}\n\n.player_elements {\n    color:#B3B3B3;\n    font-size: 20px;\n    margin-top: 30px;\n    padding-left: 30px;\n   \n}\n\n.audio_player {\n   color: white ;\n   size: 30px;\n}\n\n.play_btn {\n    background-color: #57B560;\n    border: none;\n    color: white; \n    width: 100px;\n    height: 50px;\n    border-radius: 20px;\n    margin-bottom: 15px;\n}\n\n.player_img {\n    width: 120px;\n    padding-left: 50px;\n    padding-top: 17px;\n}\n\n.table_properties {\n    width: 750px;\n    text-align: right;\n    margin-left: 250px;\n    margin-top: 60px;\n    color: white;\n    border: none;\n\n}\n\n.album_properties {\n    text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWVyL3BsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCOztBQUU3Qjs7QUFFQTtHQUNHLHNCQUFzQjtBQUN6QixpR0FBaUc7R0FDOUYsbUJBQW1CO0dBQ25CLGFBQWE7OztBQUdoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZOzs7QUFHaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsY0FBYzs7QUFFbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixpR0FBaUc7QUFDckc7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsV0FBVztJQUNYLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7O0FBRXRCOztBQUVBO0dBQ0csYUFBYTtHQUNiLFVBQVU7QUFDYjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODE4MTg7XG4gICBcbn1cblxuLmJnX3Byb3BlcnRpZXMge1xuICAgYmFja2dyb3VuZDogcmdiKDUsNSw1KTtcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDUsNSw1LDEpIDM4JSwgcmdiYSg0NCw0NCw0NSwxKSA3NiUsIHJnYmEoNTgsNTksNTksMSkgMTAwJSk7XG4gICBwYWRkaW5nLXJpZ2h0OiA5MHB4O1xuICAgaGVpZ2h0OiA4MDBweDtcblxuICBcbn1cblxuLnNpZGVCYXJfcHJvcGVydGllcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MDUwNTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICBcbiBcbn1cblxuLnNpZGVCYXJEaXZfcHJvcGVydGllcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnNpZGVCYXJUZXh0X3Byb3BlcnRpZXMge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEzMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDZweDtcbiAgICBsZWZ0OiA5MHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogI0EzQTNBMztcbn1cblxuLnNpZGViYXJQbGF5bGlzdFRleHRfcHJvcGVydGllcyB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMTMwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjhweDtcbiAgICBsZWZ0OiA0NXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogI0EzQTNBMztcbn1cblxuLmNyZWF0ZUxpc3RQcm9wZXJ0aWVzIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMzBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MHB4O1xuICAgIGxlZnQ6IDkwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjQTNBM0EzO1xufVxuXG4uc2lkZWJhclBsYXlsaXN0TGlzdF9wcm9wZXJ0aWVzIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICNBM0EzQTM7XG4gICAgcGFkZGluZzogMCU7XG4gICAgbWFyZ2luOiAycHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzgwcHg7XG4gICAgbGVmdDogNDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4uc2lkZWJhclBsYXlsaXN0TGlzdF9wcm9wZXJ0aWVzIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5mYV9wcm9wZXJ0aWVzIHtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6ICNBM0EzQTM7XG4gICAgXG59XG5cbi5mYV9DcmVhdGVMaXN0X3Byb3BlcnRpZXMge1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBjb2xvcjogI0EzQTNBMztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MHB4O1xuICAgIGxlZnQ6IDEycHg7XG59XG5cbi5sb2dvX3Byb3BlcnRpZXMge1xuICAgIHdpZHRoOiAxNTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5uYXZiYXJUZXh0X19wcm9wZXJ0aWVze1xuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHggO1xufVxuXG4ubmF2YmFyX3Byb3BlcnRpZXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODE4MTg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcbiAgICBcbn1cblxuLm5hdmJhcl9wcm9wZXJ0aWVzIGEge1xuICAgIGNvbG9yOiAjQTNBM0EzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgXG59XG5cbi5uYXZiYXJfcHJvcGVydGllcyBhOmhvdmVye1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5uYXZiYXJfcHJvcGVydGllcyBhOmFjdGl2ZSB7XG4gICAgY29sb3I6IHllbGxvdztcbn1cblxuLnRpdGxlX3Byb3BlcnRpZXMge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDYwMHB4O1xufVxuXG4uc3VidGl0bGUge1xuICAgIGNvbG9yOiAjQTNBM0EzO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2M3B4O1xuICAgIHJpZ2h0OiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnN1YnRpdGxlXzIge1xuICAgIGNvbG9yOiAjQTNBM0EzO1xufVxuXG4uY2FyZF9wcm9wZXJ0aWVzIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogODBweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuXG59XG5cbi5pbWdfcHJvcGVydGllcyB7XG4gICAgYm9yZGVyLXJhZGl1czogMCUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMzIwcHg7XG59XG5cbi5jYXJkQm9keV9wcm9wZXJ0aWVzIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogNjVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogcmdiKDUsNSw1KTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg1LDUsNSwxKSA3MSUsIHJnYmEoNDQsNDQsNDUsMSkgOTUlLCByZ2JhKDU4LDU5LDU5LDEpIDEwMCUpO1xufVxuXG4ucGxheWVyX2NhcmQge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLnBsYXllcl90aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ucGxheWVyX3N1YnRpdGxlIHtcbiAgICBmb250LXN0eWxlOiA4cHg7XG59XG5cbi5wbGF5ZXJfcHJvcGVydGllcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMjAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDAlO1xufVxuXG4ucGxheWVyX2VsZW1lbnRzIHtcbiAgICBjb2xvcjojQjNCM0IzO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgIFxufVxuXG4uYXVkaW9fcGxheWVyIHtcbiAgIGNvbG9yOiB3aGl0ZSA7XG4gICBzaXplOiAzMHB4O1xufVxuXG4ucGxheV9idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1N0I1NjA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTsgXG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5wbGF5ZXJfaW1nIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctdG9wOiAxN3B4O1xufVxuXG4udGFibGVfcHJvcGVydGllcyB7XG4gICAgd2lkdGg6IDc1MHB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1sZWZ0OiAyNTBweDtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG5cbn1cblxuLmFsYnVtX3Byb3BlcnRpZXMge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/player/player.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/player/player.component.ts ***!
          \********************************************/
        /*! exports provided: PlayerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function () { return PlayerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/-data.service */ "./src/app/service/-data.service.ts");
            var PlayerComponent = /** @class */ (function () {
                function PlayerComponent(_path, _data) {
                    this._path = _path;
                    this._data = _data;
                    this.id = this._path.snapshot.params.id;
                    this.songPlaying = this._data.getSongById(this.id);
                    this.songs = this._data.songs;
                }
                return PlayerComponent;
            }());
            PlayerComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
            ]; };
            PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-player',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./player.component.css */ "./src/app/player/player.component.css")).default]
                })
            ], PlayerComponent);
            /***/ 
        }),
        /***/ "./src/app/service/-data.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/service/-data.service.ts ***!
          \******************************************/
        /*! exports provided: DataService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function () { return DataService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DataService = /** @class */ (function () {
                function DataService() {
                    this.songs = [
                        {
                            id: 0,
                            cover: "cover_01.jpg",
                            album: "Greatest Hits (Remastered)",
                            artist: "Queen",
                            song: "Don't Stop me Now",
                            year: "1981",
                            numOfSongs: "17",
                            length: "3:37",
                            playSong: "Don't_Stop_Me_Now.mp3"
                        }, {
                            id: 1,
                            cover: "cover_02.jpg",
                            album: "Blur: The Best Of",
                            artist: "Blur",
                            song: "Girls and Boys",
                            year: "2000",
                            numOfSongs: "18",
                            length: "4:19",
                            playSong: "Girls_and_Boys.mp3"
                        }, {
                            id: 2,
                            cover: "cover_03.jpg",
                            album: "Joao Gilberto",
                            artist: "Joao Gilberto",
                            song: "The Girl from Ipanema",
                            year: "1964",
                            numOfSongs: "14",
                            length: "5:25",
                            playSong: "The_Girl_from_Ipanema.mp3"
                        }, {
                            id: 3,
                            cover: "cover_04.jpg",
                            album: "Vinicius Ao Vivo",
                            artist: "Vinicius de Moraes",
                            song: "Onde Anda Você",
                            year: "1974",
                            numOfSongs: "10",
                            length: "3:02",
                            playSong: "Onde_Anda_Você.mp3"
                        }, {
                            id: 4,
                            cover: "cover_05.jpg",
                            album: "The Bends",
                            artist: "Radiohead",
                            song: "Creep",
                            year: "1993",
                            numOfSongs: "12",
                            length: "3:32",
                            playSong: "Creep.mp3"
                        }, {
                            id: 5,
                            cover: "cover_06.jpg",
                            album: "Should be Higher",
                            artist: "Depeche Mode",
                            song: "I Just Can't Get Enough",
                            year: "1981",
                            numOfSongs: "12",
                            length: "3:38",
                            playSong: "Just_Can't_Get_Enough.mp3"
                        },
                        {
                            id: 6,
                            cover: "cover_07.jpg",
                            album: "Me Veras Volver",
                            artist: "Sodastereo",
                            song: "Cuando Pase el Temblor",
                            year: "1985",
                            numOfSongs: "15",
                            length: "3:40",
                            playSong: "Cuando_pase_el_temblor.mp3"
                        },
                        {
                            id: 7,
                            cover: "cover_08.jpg",
                            album: "En Blanco y Negro",
                            artist: "Bebo y Cigala",
                            song: "Lagrimas Negras",
                            year: "2003",
                            numOfSongs: "10",
                            length: "5:31",
                            playSong: "Lagrimas_Negras.mp3"
                        }, {
                            id: 8,
                            cover: "cover_09.jpg",
                            album: "The cure",
                            artist: "The Cure",
                            song: "Friday I'm in Love",
                            year: "1992",
                            numOfSongs: "16",
                            length: "3:42",
                            playSong: "Friday_I'm_In_Love.mp3"
                        }, {
                            id: 9,
                            cover: "cover_10.jpg",
                            album: "The Beatles",
                            artist: "The Beatles",
                            song: "I Want to Hold your Hand",
                            year: "1964",
                            numOfSongs: "11",
                            length: "3:42",
                            playSong: "I_Want_To_Hold_Your_Hand.mp3"
                        }
                    ];
                    this.songPlaying = {};
                }
                DataService.prototype.getSongPlaying = function () {
                    return this.songPlaying;
                };
                DataService.prototype.getSongById = function (id) {
                    for (var _i = 0, _a = this.songs; _i < _a.length; _i++) {
                        var song = _a[_i];
                        if (song['id'] == id) {
                            this.songPlaying = song;
                        }
                    }
                    console.log(this.songPlaying);
                    return this.songPlaying;
                };
                return DataService;
            }());
            DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DataService);
            /***/ 
        }),
        /***/ "./src/app/song-list/song-list.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/song-list/song-list.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("body {\n    background-color: #181818;\n}\n\n.bg_properties {\n    background-color: #181818;\n   padding-right: 90px;\n  \n}\n\n.sideBar_properties {\n    background-color: #050505;\n    color: white;\n   \n \n}\n\n.sideBarDiv_properties {\n    margin-bottom: 15px;\n}\n\n.sideBarText_properties {\n    float: right;\n    margin-right: 130px;\n    position: absolute;\n    top: 6px;\n    left: 90px;\n    font-size: 14px;\n    color: #A3A3A3;\n}\n\n.sidebarPlaylistText_properties {\n    float: right;\n    margin-right: 130px;\n    position: absolute;\n    top: 28px;\n    left: 45px;\n    font-size: 14px;\n    color: #A3A3A3;\n}\n\n.createListProperties {\n    float: right;\n    margin-right: 130px;\n    position: absolute;\n    top: 50px;\n    left: 90px;\n    font-size: 14px;\n    color: #A3A3A3;\n}\n\n.sidebarPlaylistList_properties {\n    font-size: 14px;\n    color: #A3A3A3;\n    padding: 0%;\n    margin: 2px;\n    position: absolute;\n    top: 380px;\n    left: 40px;\n    height: 300px;\n}\n\n.sidebarPlaylistList_properties p {\n    margin-bottom: 0;\n}\n\n.fa_properties {\n    margin-left: 30px;\n    font-size: 25px;\n    color: #A3A3A3;\n    \n}\n\n.fa_CreateList_properties {\n    margin-left: 30px;\n    font-size: 40px;\n    color: #A3A3A3;\n    position: absolute;\n    top: 50px;\n    left: 12px;\n}\n\n.logo_properties {\n    width: 155px;\n    padding-left: 30px;\n    padding-top: 30px;\n    margin-bottom: 30px;\n    cursor: pointer;\n}\n\n.navbarText__properties{\n    padding-right: 40px ;\n}\n\n.navbar_properties {\n    background-color: #181818;\n    margin-right: 100px;\n    \n}\n\n.navbar_properties a {\n    color: #A3A3A3;\n    font-size: 12px;\n    margin-top: 25px;\n    padding-right: 40px;\n    \n}\n\n.navbar_properties a:hover{\n    color: white;\n}\n\n.navbar_properties a:active {\n    color: yellow;\n}\n\n.title_properties {\n    color: white;\n    margin-top: 40px;\n    margin-bottom: 60\n0px;\n}\n\n.subtitle {\n    color: #A3A3A3;\n    float: right;\n    position: absolute;\n    top: 63px;\n    right: 25px;\n    font-size: 15px;\n}\n\n.subtitle_2 {\n    color: #A3A3A3;\n}\n\n.card_properties {\n    border: none;\n    border-radius: 0% !important;\n\n}\n\n.img_properties {\n    border-radius: 0% !important;\n    opacity: 1;\n    transition: .5s ease;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    cursor: pointer;\n   \n}\n\n.middle {\n    transition: .5s ease;\n    opacity: 0;\n    position: absolute;\n    top: 26%;\n    left: 36%;\n    transform: translate(-3%, -30%);\n    -ms-transform: translate(-5%, -10%);\n    text-align: center;\n  }\n\n.container_prop:hover .img_properties {\n    opacity: 0.8;\n  }\n\n.container_prop:hover .middle {\n    opacity: 1;\n  }\n\n.text{\ncolor: white;\nfont-size: 60px;\n    }\n\n.cardBody_properties {\n    background-color: #181818;\n    color: white;\n    text-align: center;\n}\n\n.player_properties {\n    background-color: #282828;\n    height: 100px;\n    width: 120%;\n    position: fixed;\n    bottom: 0%;\n}\n\n.audio_player {\n   color: white ;\n   size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29uZy1saXN0L3NvbmctbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0dBQzFCLG1CQUFtQjs7QUFFdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTs7O0FBR2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGNBQWM7O0FBRWxCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQjtHQUNEO0FBQ0g7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDRCQUE0Qjs7QUFFaEM7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCwrQkFBK0I7SUFDL0IsbUNBQW1DO0lBQ25DLGtCQUFrQjtFQUNwQjs7QUFFRjtJQUNJLFlBQVk7RUFDZDs7QUFFRjtJQUNJLFVBQVU7RUFDWjs7QUFFRjtBQUNBLFlBQVk7QUFDWixlQUFlO0lBQ1g7O0FBRUo7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsV0FBVztJQUNYLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7R0FDRyxhQUFhO0dBQ2IsVUFBVTtBQUNiIiwiZmlsZSI6InNyYy9hcHAvc29uZy1saXN0L3NvbmctbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTgxODtcbn1cblxuLmJnX3Byb3BlcnRpZXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODE4MTg7XG4gICBwYWRkaW5nLXJpZ2h0OiA5MHB4O1xuICBcbn1cblxuLnNpZGVCYXJfcHJvcGVydGllcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MDUwNTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICBcbiBcbn1cblxuLnNpZGVCYXJEaXZfcHJvcGVydGllcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnNpZGVCYXJUZXh0X3Byb3BlcnRpZXMge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEzMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDZweDtcbiAgICBsZWZ0OiA5MHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogI0EzQTNBMztcbn1cblxuLnNpZGViYXJQbGF5bGlzdFRleHRfcHJvcGVydGllcyB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMTMwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjhweDtcbiAgICBsZWZ0OiA0NXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogI0EzQTNBMztcbn1cblxuLmNyZWF0ZUxpc3RQcm9wZXJ0aWVzIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMzBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MHB4O1xuICAgIGxlZnQ6IDkwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjQTNBM0EzO1xufVxuXG4uc2lkZWJhclBsYXlsaXN0TGlzdF9wcm9wZXJ0aWVzIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICNBM0EzQTM7XG4gICAgcGFkZGluZzogMCU7XG4gICAgbWFyZ2luOiAycHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzgwcHg7XG4gICAgbGVmdDogNDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4uc2lkZWJhclBsYXlsaXN0TGlzdF9wcm9wZXJ0aWVzIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5mYV9wcm9wZXJ0aWVzIHtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6ICNBM0EzQTM7XG4gICAgXG59XG5cbi5mYV9DcmVhdGVMaXN0X3Byb3BlcnRpZXMge1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBjb2xvcjogI0EzQTNBMztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MHB4O1xuICAgIGxlZnQ6IDEycHg7XG59XG5cbi5sb2dvX3Byb3BlcnRpZXMge1xuICAgIHdpZHRoOiAxNTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmF2YmFyVGV4dF9fcHJvcGVydGllc3tcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4IDtcbn1cblxuLm5hdmJhcl9wcm9wZXJ0aWVzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XG4gICAgXG59XG5cbi5uYXZiYXJfcHJvcGVydGllcyBhIHtcbiAgICBjb2xvcjogI0EzQTNBMztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgIFxufVxuXG4ubmF2YmFyX3Byb3BlcnRpZXMgYTpob3ZlcntcbiAgICBjb2xvcjogd2hpdGU7XG59XG4ubmF2YmFyX3Byb3BlcnRpZXMgYTphY3RpdmUge1xuICAgIGNvbG9yOiB5ZWxsb3c7XG59XG5cbi50aXRsZV9wcm9wZXJ0aWVzIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2MFxuMHB4O1xufVxuXG4uc3VidGl0bGUge1xuICAgIGNvbG9yOiAjQTNBM0EzO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2M3B4O1xuICAgIHJpZ2h0OiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnN1YnRpdGxlXzIge1xuICAgIGNvbG9yOiAjQTNBM0EzO1xufVxuXG4uY2FyZF9wcm9wZXJ0aWVzIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMCUgIWltcG9ydGFudDtcblxufVxuXG4uaW1nX3Byb3BlcnRpZXMge1xuICAgIGJvcmRlci1yYWRpdXM6IDAlICFpbXBvcnRhbnQ7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgXG59XG5cbi5taWRkbGUge1xuICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjYlO1xuICAgIGxlZnQ6IDM2JTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMyUsIC0zMCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNSUsIC0xMCUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbi5jb250YWluZXJfcHJvcDpob3ZlciAuaW1nX3Byb3BlcnRpZXMge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuICBcbi5jb250YWluZXJfcHJvcDpob3ZlciAubWlkZGxlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIFxuLnRleHR7XG5jb2xvcjogd2hpdGU7XG5mb250LXNpemU6IDYwcHg7XG4gICAgfVxuXG4uY2FyZEJvZHlfcHJvcGVydGllcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTgxODtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGxheWVyX3Byb3BlcnRpZXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTIwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwJTtcbn1cblxuLmF1ZGlvX3BsYXllciB7XG4gICBjb2xvcjogd2hpdGUgO1xuICAgc2l6ZTogMzBweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/song-list/song-list.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/song-list/song-list.component.ts ***!
          \**************************************************/
        /*! exports provided: SongListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongListComponent", function () { return SongListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/-data.service */ "./src/app/service/-data.service.ts");
            var SongListComponent = /** @class */ (function () {
                function SongListComponent(_path, _data) {
                    this._path = _path;
                    this._data = _data;
                    this.songs = this._data.songs;
                    this.songPlaying = {};
                    this.songPlaying = this._data.getSongPlaying();
                }
                return SongListComponent;
            }());
            SongListComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
            ]; };
            SongListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-song-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./song-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/song-list/song-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./song-list.component.css */ "./src/app/song-list/song-list.component.css")).default]
                })
            ], SongListComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/friday/Desktop/Neoland/fullstack-bootcamp/Contents/01-Front-end/05-Angular/05-Routing/spotify/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map