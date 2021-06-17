((typeof self !== 'undefined' ? self : this)["webpackChunk_polkadot_apps"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_polkadot_apps"] || []).push([[8636],{

/***/ 61679:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// Copyright 2017-2021 @polkadot/x-rxjs authors & contributors
// SPDX-License-Identifier: Apache-2.0

// This is not great, but while having esm files, rxjs doesn't quite play nicely with
// Node.js esm files. (Hopefully this improves in 7.0, although no exports map as of yet)

const rxjs = __webpack_require__(24496);

exports.y$ = rxjs.Observable;
exports.cN = rxjs.ConnectableObservable;
exports.T0 = rxjs.GroupedObservable;
exports.LO = rxjs.observable;
exports.xQ = rxjs.Subject;
exports.Xe = rxjs.BehaviorSubject;
exports.tq = rxjs.ReplaySubject;
exports.cK = rxjs.AsyncSubject;
exports.eM = rxjs.asap;
exports.Ef = rxjs.asapScheduler;
exports.PF = rxjs.async;
exports.z5 = rxjs.asyncScheduler;
exports.c8 = rxjs.queue;
exports.NN = rxjs.queueScheduler;
exports.rs = rxjs.animationFrame;
exports.Zt = rxjs.animationFrameScheduler;
exports.ys = rxjs.VirtualTimeScheduler;
exports.ht = rxjs.VirtualAction;
exports.b2 = rxjs.Scheduler;
exports.w0 = rxjs.Subscription;
exports.Lv = rxjs.Subscriber;
exports.P_ = rxjs.Notification;
exports.W7 = rxjs.NotificationKind;
exports.zG = rxjs.pipe;
exports.ZT = rxjs.noop;
exports.yR = rxjs.identity;
exports.bi = rxjs.isObservable;
exports.We = rxjs.ArgumentOutOfRangeError;
exports.Kw = rxjs.EmptyError;
exports.Nk = rxjs.ObjectUnsubscribedError;
exports.Bp = rxjs.UnsubscriptionError;
exports.W5 = rxjs.TimeoutError;
exports.bR = rxjs.bindCallback;
exports.$W = rxjs.bindNodeCallback;
exports.aj = rxjs.combineLatest;
exports.zo = rxjs.concat;
exports.PQ = rxjs.defer;
exports.cS = rxjs.empty;
exports.DO = rxjs.forkJoin;
exports.Dp = rxjs.from;
exports.RB = rxjs.fromEvent;
exports.R2 = rxjs.fromEventPattern;
exports.R_ = rxjs.generate;
exports.sx = rxjs.iif;
exports.FG = rxjs.interval;
exports.TS = rxjs.merge;
exports.Fi = rxjs.never;
exports.of = rxjs.of;
exports.hy = rxjs.onErrorResumeNext;
exports.X = rxjs.pairs;
exports.uK = rxjs.partition;
exports.S3 = rxjs.race;
exports.w6 = rxjs.range;
exports._y = rxjs.throwError;
exports.HT = rxjs.timer;
exports.gW = rxjs.using;
exports.$R = rxjs.zip;
exports.x8 = rxjs.scheduled;
exports.E_ = rxjs.EMPTY;
exports.C4 = rxjs.NEVER;
exports.vc = rxjs.config;


/***/ }),

/***/ 75633:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArgumentOutOfRangeError": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.We),
/* harmony export */   "AsyncSubject": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.cK),
/* harmony export */   "BehaviorSubject": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.Xe),
/* harmony export */   "ConnectableObservable": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.cN),
/* harmony export */   "EMPTY": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.E_),
/* harmony export */   "EmptyError": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.Kw),
/* harmony export */   "GroupedObservable": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.T0),
/* harmony export */   "NEVER": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.C4),
/* harmony export */   "Notification": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.P_),
/* harmony export */   "NotificationKind": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.W7),
/* harmony export */   "ObjectUnsubscribedError": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.Nk),
/* harmony export */   "Observable": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.y$),
/* harmony export */   "ReplaySubject": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.tq),
/* harmony export */   "Scheduler": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.b2),
/* harmony export */   "Subject": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.xQ),
/* harmony export */   "Subscriber": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.Lv),
/* harmony export */   "Subscription": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.w0),
/* harmony export */   "TimeoutError": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.W5),
/* harmony export */   "UnsubscriptionError": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.Bp),
/* harmony export */   "VirtualAction": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.ht),
/* harmony export */   "VirtualTimeScheduler": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.ys),
/* harmony export */   "animationFrame": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.rs),
/* harmony export */   "animationFrameScheduler": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.Zt),
/* harmony export */   "asap": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.eM),
/* harmony export */   "asapScheduler": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.Ef),
/* harmony export */   "async": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.PF),
/* harmony export */   "asyncScheduler": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.z5),
/* harmony export */   "bindCallback": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.bR),
/* harmony export */   "bindNodeCallback": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.$W),
/* harmony export */   "combineLatest": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.aj),
/* harmony export */   "concat": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.zo),
/* harmony export */   "config": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.vc),
/* harmony export */   "defer": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.PQ),
/* harmony export */   "empty": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.cS),
/* harmony export */   "forkJoin": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.DO),
/* harmony export */   "from": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.Dp),
/* harmony export */   "fromEvent": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.RB),
/* harmony export */   "fromEventPattern": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.R2),
/* harmony export */   "generate": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.R_),
/* harmony export */   "identity": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.yR),
/* harmony export */   "iif": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.sx),
/* harmony export */   "interval": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.FG),
/* harmony export */   "isObservable": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.bi),
/* harmony export */   "merge": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.TS),
/* harmony export */   "never": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.Fi),
/* harmony export */   "noop": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.ZT),
/* harmony export */   "observable": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.LO),
/* harmony export */   "of": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.of),
/* harmony export */   "onErrorResumeNext": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.hy),
/* harmony export */   "pairs": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.X),
/* harmony export */   "partition": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.uK),
/* harmony export */   "pipe": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.zG),
/* harmony export */   "queue": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.c8),
/* harmony export */   "queueScheduler": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.NN),
/* harmony export */   "race": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.S3),
/* harmony export */   "range": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.w6),
/* harmony export */   "scheduled": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.x8),
/* harmony export */   "throwError": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__._y),
/* harmony export */   "timer": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.HT),
/* harmony export */   "using": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.gW),
/* harmony export */   "zip": () => (/* reexport safe */ _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__.$R)
/* harmony export */ });
/* harmony import */ var _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61679);
// Copyright 2017-2021 @polkadot/x-rxjs authors & contributors
// SPDX-License-Identifier: Apache-2.0


/***/ }),

/***/ 24496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ArgumentOutOfRangeError": () => (/* reexport */ ArgumentOutOfRangeError/* ArgumentOutOfRangeError */.W),
  "AsyncSubject": () => (/* reexport */ AsyncSubject/* AsyncSubject */.c),
  "BehaviorSubject": () => (/* reexport */ BehaviorSubject/* BehaviorSubject */.X),
  "ConnectableObservable": () => (/* reexport */ ConnectableObservable/* ConnectableObservable */.c),
  "EMPTY": () => (/* reexport */ empty/* EMPTY */.E),
  "EmptyError": () => (/* reexport */ EmptyError/* EmptyError */.K),
  "GroupedObservable": () => (/* reexport */ groupBy/* GroupedObservable */.T),
  "NEVER": () => (/* reexport */ NEVER),
  "Notification": () => (/* reexport */ Notification/* Notification */.P),
  "NotificationKind": () => (/* reexport */ Notification/* NotificationKind */.W),
  "ObjectUnsubscribedError": () => (/* reexport */ ObjectUnsubscribedError/* ObjectUnsubscribedError */.N),
  "Observable": () => (/* reexport */ Observable/* Observable */.y),
  "ReplaySubject": () => (/* reexport */ ReplaySubject/* ReplaySubject */.t),
  "Scheduler": () => (/* reexport */ Scheduler/* Scheduler */.b),
  "Subject": () => (/* reexport */ Subject/* Subject */.xQ),
  "Subscriber": () => (/* reexport */ Subscriber/* Subscriber */.L),
  "Subscription": () => (/* reexport */ Subscription/* Subscription */.w),
  "TimeoutError": () => (/* reexport */ TimeoutError/* TimeoutError */.W),
  "UnsubscriptionError": () => (/* reexport */ UnsubscriptionError/* UnsubscriptionError */.B),
  "VirtualAction": () => (/* reexport */ VirtualAction),
  "VirtualTimeScheduler": () => (/* reexport */ VirtualTimeScheduler),
  "animationFrame": () => (/* reexport */ animationFrame),
  "animationFrameScheduler": () => (/* reexport */ animationFrameScheduler),
  "asap": () => (/* reexport */ asap/* asap */.e),
  "asapScheduler": () => (/* reexport */ asap/* asapScheduler */.E),
  "async": () => (/* reexport */ scheduler_async/* async */.P),
  "asyncScheduler": () => (/* reexport */ scheduler_async/* asyncScheduler */.z),
  "bindCallback": () => (/* reexport */ bindCallback),
  "bindNodeCallback": () => (/* reexport */ bindNodeCallback),
  "combineLatest": () => (/* reexport */ combineLatest/* combineLatest */.aj),
  "concat": () => (/* reexport */ concat/* concat */.z),
  "config": () => (/* reexport */ config/* config */.v),
  "defer": () => (/* reexport */ defer/* defer */.P),
  "empty": () => (/* reexport */ empty/* empty */.c),
  "forkJoin": () => (/* reexport */ forkJoin),
  "from": () => (/* reexport */ from/* from */.D),
  "fromEvent": () => (/* reexport */ fromEvent),
  "fromEventPattern": () => (/* reexport */ fromEventPattern),
  "generate": () => (/* reexport */ generate),
  "identity": () => (/* reexport */ identity/* identity */.y),
  "iif": () => (/* reexport */ iif),
  "interval": () => (/* reexport */ interval),
  "isObservable": () => (/* reexport */ isObservable),
  "merge": () => (/* reexport */ merge/* merge */.T),
  "never": () => (/* reexport */ never),
  "noop": () => (/* reexport */ noop/* noop */.Z),
  "observable": () => (/* reexport */ observable/* observable */.L),
  "of": () => (/* reexport */ of.of),
  "onErrorResumeNext": () => (/* reexport */ onErrorResumeNext),
  "pairs": () => (/* reexport */ pairs),
  "partition": () => (/* reexport */ partition),
  "pipe": () => (/* reexport */ pipe/* pipe */.z),
  "queue": () => (/* reexport */ queue/* queue */.c),
  "queueScheduler": () => (/* reexport */ queue/* queueScheduler */.N),
  "race": () => (/* reexport */ race/* race */.S3),
  "range": () => (/* reexport */ range),
  "scheduled": () => (/* reexport */ scheduled/* scheduled */.x),
  "throwError": () => (/* reexport */ throwError/* throwError */._),
  "timer": () => (/* reexport */ timer/* timer */.H),
  "using": () => (/* reexport */ using),
  "zip": () => (/* reexport */ zip/* zip */.$R)
});

// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/Observable.js + 1 modules
var Observable = __webpack_require__(19939);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js
var ConnectableObservable = __webpack_require__(89386);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/operators/groupBy.js
var groupBy = __webpack_require__(60453);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/symbol/observable.js
var observable = __webpack_require__(68859);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/Subject.js
var Subject = __webpack_require__(61194);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/BehaviorSubject.js
var BehaviorSubject = __webpack_require__(64580);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/ReplaySubject.js
var ReplaySubject = __webpack_require__(61048);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/AsyncSubject.js
var AsyncSubject = __webpack_require__(93866);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/scheduler/asap.js + 3 modules
var asap = __webpack_require__(74858);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/scheduler/async.js
var scheduler_async = __webpack_require__(20646);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/scheduler/queue.js + 2 modules
var queue = __webpack_require__(87410);
// EXTERNAL MODULE: ../../node_modules/rxjs/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2995);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js + 1 modules
var AsyncAction = __webpack_require__(9795);
;// CONCATENATED MODULE: ../../node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameAction.js
/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */


var AnimationFrameAction = /*@__PURE__*/ (function (_super) {
    tslib_es6/* __extends */.ZT(AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function () { return scheduler.flush(null); }));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            cancelAnimationFrame(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    };
    return AnimationFrameAction;
}(AsyncAction/* AsyncAction */.o));

//# sourceMappingURL=AnimationFrameAction.js.map

// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js
var AsyncScheduler = __webpack_require__(52966);
;// CONCATENATED MODULE: ../../node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameScheduler.js
/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */


var AnimationFrameScheduler = /*@__PURE__*/ (function (_super) {
    tslib_es6/* __extends */.ZT(AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationFrameScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AnimationFrameScheduler;
}(AsyncScheduler/* AsyncScheduler */.v));

//# sourceMappingURL=AnimationFrameScheduler.js.map

;// CONCATENATED MODULE: ../../node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js
/** PURE_IMPORTS_START _AnimationFrameAction,_AnimationFrameScheduler PURE_IMPORTS_END */


var animationFrameScheduler = /*@__PURE__*/ new AnimationFrameScheduler(AnimationFrameAction);
var animationFrame = animationFrameScheduler;
//# sourceMappingURL=animationFrame.js.map

;// CONCATENATED MODULE: ../../node_modules/rxjs/_esm5/internal/scheduler/VirtualTimeScheduler.js
/** PURE_IMPORTS_START tslib,_AsyncAction,_AsyncScheduler PURE_IMPORTS_END */



var VirtualTimeScheduler = /*@__PURE__*/ (function (_super) {
    tslib_es6/* __extends */.ZT(VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(SchedulerAction, maxFrames) {
        if (SchedulerAction === void 0) {
            SchedulerAction = VirtualAction;
        }
        if (maxFrames === void 0) {
            maxFrames = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this, SchedulerAction, function () { return _this.frame; }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
    }
    VirtualTimeScheduler.prototype.flush = function () {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error, action;
        while ((action = actions[0]) && action.delay <= maxFrames) {
            actions.shift();
            this.frame = action.delay;
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
}(AsyncScheduler/* AsyncScheduler */.v));

var VirtualAction = /*@__PURE__*/ (function (_super) {
    tslib_es6/* __extends */.ZT(VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
        if (index === void 0) {
            index = scheduler.index += 1;
        }
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
    }
    VirtualAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (!this.id) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.active = false;
        var action = new VirtualAction(this.scheduler, this.work);
        this.add(action);
        return action.schedule(state, delay);
    };
    VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return true;
    };
    VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return undefined;
    };
    VirtualAction.prototype._execute = function (state, delay) {
        if (this.active === true) {
            return _super.prototype._execute.call(this, state, delay);
        }
    };
    VirtualAction.sortActions = function (a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            }
            else if (a.index > b.index) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (a.delay > b.delay) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return VirtualAction;
}(AsyncAction/* AsyncAction */.o));

//# sourceMappingURL=VirtualTimeScheduler.js.map

// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/Scheduler.js
var Scheduler = __webpack_require__(77035);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/Subscription.js
var Subscription = __webpack_require__(51586);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/Subscriber.js
var Subscriber = __webpack_require__(91881);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/Notification.js
var Notification = __webpack_require__(38781);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/util/pipe.js
var pipe = __webpack_require__(1199);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/util/noop.js
var noop = __webpack_require__(54582);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/util/identity.js
var identity = __webpack_require__(36930);
;// CONCATENATED MODULE: ../../node_modules/rxjs/_esm5/internal/util/isObservable.js
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

function isObservable(obj) {
    return !!obj && (obj instanceof Observable/* Observable */.y || (typeof obj.lift === 'function' && typeof obj.subscribe === 'function'));
}
//# sourceMappingURL=isObservable.js.map

// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js
var ArgumentOutOfRangeError = __webpack_require__(9120);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/util/EmptyError.js
var EmptyError = __webpack_require__(44397);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js
var ObjectUnsubscribedError = __webpack_require__(90906);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js
var UnsubscriptionError = __webpack_require__(22674);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/util/TimeoutError.js
var TimeoutError = __webpack_require__(35915);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/operators/map.js
var map = __webpack_require__(92188);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/util/canReportError.js
var canReportError = __webpack_require__(84658);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/util/isArray.js
var isArray = __webpack_require__(93073);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/util/isScheduler.js
var isScheduler = __webpack_require__(14070);
;// CONCATENATED MODULE: ../../node_modules/rxjs/_esm5/internal/observable/bindCallback.js
/** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isArray,_util_isScheduler PURE_IMPORTS_END */






function bindCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if ((0,isScheduler/* isScheduler */.K)(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindCallback(callbackFunc, scheduler).apply(void 0, args).pipe((0,map/* map */.U)(function (args) { return (0,isArray/* isArray */.k)(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
            };
        }
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var context = this;
        var subject;
        var params = {
            context: context,
            subject: subject,
            callbackFunc: callbackFunc,
            scheduler: scheduler,
        };
        return new Observable/* Observable */.y(function (subscriber) {
            if (!scheduler) {
                if (!subject) {
                    subject = new AsyncSubject/* AsyncSubject */.c();
                    var handler = function () {
                        var innerArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            innerArgs[_i] = arguments[_i];
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([handler]));
                    }
                    catch (err) {
                        if ((0,canReportError/* canReportError */._)(subject)) {
                            subject.error(err);
                        }
                        else {
                            console.warn(err);
                        }
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                var state = {
                    args: args, subscriber: subscriber, params: params,
                };
                return scheduler.schedule(dispatch, 0, state);
            }
        });
    };
}
function dispatch(state) {
    var _this = this;
    var self = this;
    var args = state.args, subscriber = state.subscriber, params = state.params;
    var callbackFunc = params.callbackFunc, context = params.context, scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new AsyncSubject/* AsyncSubject */.c();
        var handler = function () {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i] = arguments[_i];
            }
            var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
            _this.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
        };
        try {
            callbackFunc.apply(context, args.concat([handler]));
        }
        catch (err) {
            subject.error(err);
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(state) {
    var value = state.value, subject = state.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(state) {
    var err = state.err, subject = state.subject;
    subject.error(err);
}
//# sourceMappingURL=bindCallback.js.map

;// CONCATENATED MODULE: ../../node_modules/rxjs/_esm5/internal/observable/bindNodeCallback.js
/** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isScheduler,_util_isArray PURE_IMPORTS_END */






function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if ((0,isScheduler/* isScheduler */.K)(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindNodeCallback(callbackFunc, scheduler).apply(void 0, args).pipe((0,map/* map */.U)(function (args) { return (0,isArray/* isArray */.k)(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
            };
        }
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var params = {
            subject: undefined,
            args: args,
            callbackFunc: callbackFunc,
            scheduler: scheduler,
            context: this,
        };
        return new Observable/* Observable */.y(function (subscriber) {
            var context = params.context;
            var subject = params.subject;
            if (!scheduler) {
                if (!subject) {
                    subject = params.subject = new AsyncSubject/* AsyncSubject */.c();
                    var handler = function () {
                        var innerArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            innerArgs[_i] = arguments[_i];
                        }
                        var err = innerArgs.shift();
                        if (err) {
                            subject.error(err);
                            return;
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([handler]));
                    }
                    catch (err) {
                        if ((0,canReportError/* canReportError */._)(subject)) {
                            subject.error(err);
                        }
                        else {
                            console.warn(err);
                        }
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                return scheduler.schedule(bindNodeCallback_dispatch, 0, { params: params, subscriber: subscriber, context: context });
            }
        });
    };
}
function bindNodeCallback_dispatch(state) {
    var _this = this;
    var params = state.params, subscriber = state.subscriber, context = state.context;
    var callbackFunc = params.callbackFunc, args = params.args, scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new AsyncSubject/* AsyncSubject */.c();
        var handler = function () {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i] = arguments[_i];
            }
            var err = innerArgs.shift();
            if (err) {
                _this.add(scheduler.schedule(bindNodeCallback_dispatchError, 0, { err: err, subject: subject }));
            }
            else {
                var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                _this.add(scheduler.schedule(bindNodeCallback_dispatchNext, 0, { value: value, subject: subject }));
            }
        };
        try {
            callbackFunc.apply(context, args.concat([handler]));
        }
        catch (err) {
            this.add(scheduler.schedule(bindNodeCallback_dispatchError, 0, { err: err, subject: subject }));
        }
    }
    this.add(subject.subscribe(subscriber));
}
function bindNodeCallback_dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function bindNodeCallback_dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}
//# sourceMappingURL=bindNodeCallback.js.map

// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/observable/combineLatest.js
var combineLatest = __webpack_require__(20097);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/observable/concat.js
var concat = __webpack_require__(24245);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/observable/defer.js
var defer = __webpack_require__(86542);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/observable/empty.js
var empty = __webpack_require__(84773);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/util/isObject.js
var isObject = __webpack_require__(50757);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/observable/from.js
var from = __webpack_require__(97238);
;// CONCATENATED MODULE: ../../node_modules/rxjs/_esm5/internal/observable/forkJoin.js
/** PURE_IMPORTS_START _Observable,_util_isArray,_operators_map,_util_isObject,_from PURE_IMPORTS_END */





function forkJoin() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    if (sources.length === 1) {
        var first_1 = sources[0];
        if ((0,isArray/* isArray */.k)(first_1)) {
            return forkJoinInternal(first_1, null);
        }
        if ((0,isObject/* isObject */.K)(first_1) && Object.getPrototypeOf(first_1) === Object.prototype) {
            var keys = Object.keys(first_1);
            return forkJoinInternal(keys.map(function (key) { return first_1[key]; }), keys);
        }
    }
    if (typeof sources[sources.length - 1] === 'function') {
        var resultSelector_1 = sources.pop();
        sources = (sources.length === 1 && (0,isArray/* isArray */.k)(sources[0])) ? sources[0] : sources;
        return forkJoinInternal(sources, null).pipe((0,map/* map */.U)(function (args) { return resultSelector_1.apply(void 0, args); }));
    }
    return forkJoinInternal(sources, null);
}
function forkJoinInternal(sources, keys) {
    return new Observable/* Observable */.y(function (subscriber) {
        var len = sources.length;
        if (len === 0) {
            subscriber.complete();
            return;
        }
        var values = new Array(len);
        var completed = 0;
        var emitted = 0;
        var _loop_1 = function (i) {
            var source = (0,from/* from */.D)(sources[i]);
            var hasValue = false;
            subscriber.add(source.subscribe({
                next: function (value) {
                    if (!hasValue) {
                        hasValue = true;
                        emitted++;
                    }
                    values[i] = value;
                },
                error: function (err) { return subscriber.error(err); },
                complete: function () {
                    completed++;
                    if (completed === len || !hasValue) {
                        if (emitted === len) {
                            subscriber.next(keys ?
                                keys.reduce(function (result, key, i) { return (result[key] = values[i], result); }, {}) :
                                values);
                        }
                        subscriber.complete();
                    }
                }
            }));
        };
        for (var i = 0; i < len; i++) {
            _loop_1(i);
        }
    });
}
//# sourceMappingURL=forkJoin.js.map

// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/util/isFunction.js
var isFunction = __webpack_require__(77371);
;// CONCATENATED MODULE: ../../node_modules/rxjs/_esm5/internal/observable/fromEvent.js
/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */




var fromEvent_toString = /*@__PURE__*/ (/* unused pure expression or super */ null && ((function () { return Object.prototype.toString; })()));
function fromEvent(target, eventName, options, resultSelector) {
    if ((0,isFunction/* isFunction */.m)(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe((0,map/* map */.U)(function (args) { return (0,isArray/* isArray */.k)(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
    }
    return new Observable/* Observable */.y(function (subscriber) {
        function handler(e) {
            if (arguments.length > 1) {
                subscriber.next(Array.prototype.slice.call(arguments));
            }
            else {
                subscriber.next(e);
            }
        }
        setupSubscription(target, eventName, handler, subscriber, options);
    });
}
function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
    var unsubscribe;
    if (isEventTarget(sourceObj)) {
        var source_1 = sourceObj;
        sourceObj.addEventListener(eventName, handler, options);
        unsubscribe = function () { return source_1.removeEventListener(eventName, handler, options); };
    }
    else if (isJQueryStyleEventEmitter(sourceObj)) {
        var source_2 = sourceObj;
        sourceObj.on(eventName, handler);
        unsubscribe = function () { return source_2.off(eventName, handler); };
    }
    else if (isNodeStyleEventEmitter(sourceObj)) {
        var source_3 = sourceObj;
        sourceObj.addListener(eventName, handler);
        unsubscribe = function () { return source_3.removeListener(eventName, handler); };
    }
    else if (sourceObj && sourceObj.length) {
        for (var i = 0, len = sourceObj.length; i < len; i++) {
            setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
        }
    }
    else {
        throw new TypeError('Invalid event target');
    }
    subscriber.add(unsubscribe);
}
function isNodeStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isEventTarget(sourceObj) {
    return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
//# sourceMappingURL=fromEvent.js.map

;// CONCATENATED MODULE: ../../node_modules/rxjs/_esm5/internal/observable/fromEventPattern.js
/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */




function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) {
        return fromEventPattern(addHandler, removeHandler).pipe((0,map/* map */.U)(function (args) { return (0,isArray/* isArray */.k)(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
    }
    return new Observable/* Observable */.y(function (subscriber) {
        var handler = function () {
            var e = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                e[_i] = arguments[_i];
            }
            return subscriber.next(e.length === 1 ? e[0] : e);
        };
        var retValue;
        try {
            retValue = addHandler(handler);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!(0,isFunction/* isFunction */.m)(removeHandler)) {
            return undefined;
        }
        return function () { return removeHandler(handler, retValue); };
    });
}
//# sourceMappingURL=fromEventPattern.js.map

;// CONCATENATED MODULE: ../../node_modules/rxjs/_esm5/internal/observable/generate.js
/** PURE_IMPORTS_START _Observable,_util_identity,_util_isScheduler PURE_IMPORTS_END */



function generate(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
    var resultSelector;
    var initialState;
    if (arguments.length == 1) {
        var options = initialStateOrOptions;
        initialState = options.initialState;
        condition = options.condition;
        iterate = options.iterate;
        resultSelector = options.resultSelector || identity/* identity */.y;
        scheduler = options.scheduler;
    }
    else if (resultSelectorOrObservable === undefined || (0,isScheduler/* isScheduler */.K)(resultSelectorOrObservable)) {
        initialState = initialStateOrOptions;
        resultSelector = identity/* identity */.y;
        scheduler = resultSelectorOrObservable;
    }
    else {
        initialState = initialStateOrOptions;
        resultSelector = resultSelectorOrObservable;
    }
    return new Observable/* Observable */.y(function (subscriber) {
        var state = initialState;
        if (scheduler) {
            return scheduler.schedule(generate_dispatch, 0, {
                subscriber: subscriber,
                iterate: iterate,
                condition: condition,
                resultSelector: resultSelector,
                state: state
            });
        }
        do {
            if (condition) {
                var conditionResult = void 0;
                try {
                    conditionResult = condition(state);
                }
                catch (err) {
                    subscriber.error(err);
                    return undefined;
                }
                if (!conditionResult) {
                    subscriber.complete();
                    break;
                }
            }
            var value = void 0;
            try {
                value = resultSelector(state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
            subscriber.next(value);
            if (subscriber.closed) {
                break;
            }
            try {
                state = iterate(state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
        } while (true);
        return undefined;
    });
}
function generate_dispatch(state) {
    var subscriber = state.subscriber, condition = state.condition;
    if (subscriber.closed) {
        return undefined;
    }
    if (state.needIterate) {
        try {
            state.state = state.iterate(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
    }
    else {
        state.needIterate = true;
    }
    if (condition) {
        var conditionResult = void 0;
        try {
            conditionResult = condition(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!conditionResult) {
            subscriber.complete();
            return undefined;
        }
        if (subscriber.closed) {
            return undefined;
        }
    }
    var value;
    try {
        value = state.resultSelector(state.state);
    }
    catch (err) {
        subscriber.error(err);
        return undefined;
    }
    if (subscriber.closed) {
        return undefined;
    }
    subscriber.next(value);
    if (subscriber.closed) {
        return undefined;
    }
    return this.schedule(state);
}
//# sourceMappingURL=generate.js.map

;// CONCATENATED MODULE: ../../node_modules/rxjs/_esm5/internal/observable/iif.js
/** PURE_IMPORTS_START _defer,_empty PURE_IMPORTS_END */


function iif(condition, trueResult, falseResult) {
    if (trueResult === void 0) {
        trueResult = empty/* EMPTY */.E;
    }
    if (falseResult === void 0) {
        falseResult = empty/* EMPTY */.E;
    }
    return (0,defer/* defer */.P)(function () { return condition() ? trueResult : falseResult; });
}
//# sourceMappingURL=iif.js.map

// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/util/isNumeric.js
var isNumeric = __webpack_require__(76712);
;// CONCATENATED MODULE: ../../node_modules/rxjs/_esm5/internal/observable/interval.js
/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric PURE_IMPORTS_END */



function interval(period, scheduler) {
    if (period === void 0) {
        period = 0;
    }
    if (scheduler === void 0) {
        scheduler = scheduler_async/* async */.P;
    }
    if (!(0,isNumeric/* isNumeric */.k)(period) || period < 0) {
        period = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== 'function') {
        scheduler = scheduler_async/* async */.P;
    }
    return new Observable/* Observable */.y(function (subscriber) {
        subscriber.add(scheduler.schedule(interval_dispatch, period, { subscriber: subscriber, counter: 0, period: period }));
        return subscriber;
    });
}
function interval_dispatch(state) {
    var subscriber = state.subscriber, counter = state.counter, period = state.period;
    subscriber.next(counter);
    this.schedule({ subscriber: subscriber, counter: counter + 1, period: period }, period);
}
//# sourceMappingURL=interval.js.map

// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/observable/merge.js
var merge = __webpack_require__(97686);
;// CONCATENATED MODULE: ../../node_modules/rxjs/_esm5/internal/observable/never.js
/** PURE_IMPORTS_START _Observable,_util_noop PURE_IMPORTS_END */


var NEVER = /*@__PURE__*/ new Observable/* Observable */.y(noop/* noop */.Z);
function never() {
    return NEVER;
}
//# sourceMappingURL=never.js.map

// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/observable/of.js
var of = __webpack_require__(16612);
;// CONCATENATED MODULE: ../../node_modules/rxjs/_esm5/internal/observable/onErrorResumeNext.js
/** PURE_IMPORTS_START _Observable,_from,_util_isArray,_empty PURE_IMPORTS_END */




function onErrorResumeNext() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    if (sources.length === 0) {
        return empty/* EMPTY */.E;
    }
    var first = sources[0], remainder = sources.slice(1);
    if (sources.length === 1 && (0,isArray/* isArray */.k)(first)) {
        return onErrorResumeNext.apply(void 0, first);
    }
    return new Observable/* Observable */.y(function (subscriber) {
        var subNext = function () { return subscriber.add(onErrorResumeNext.apply(void 0, remainder).subscribe(subscriber)); };
        return (0,from/* from */.D)(first).subscribe({
            next: function (value) { subscriber.next(value); },
            error: subNext,
            complete: subNext,
        });
    });
}
//# sourceMappingURL=onErrorResumeNext.js.map

;// CONCATENATED MODULE: ../../node_modules/rxjs/_esm5/internal/observable/pairs.js
/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */


function pairs(obj, scheduler) {
    if (!scheduler) {
        return new Observable/* Observable */.y(function (subscriber) {
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length && !subscriber.closed; i++) {
                var key = keys[i];
                if (obj.hasOwnProperty(key)) {
                    subscriber.next([key, obj[key]]);
                }
            }
            subscriber.complete();
        });
    }
    else {
        return new Observable/* Observable */.y(function (subscriber) {
            var keys = Object.keys(obj);
            var subscription = new Subscription/* Subscription */.w();
            subscription.add(scheduler.schedule(pairs_dispatch, 0, { keys: keys, index: 0, subscriber: subscriber, subscription: subscription, obj: obj }));
            return subscription;
        });
    }
}
function pairs_dispatch(state) {
    var keys = state.keys, index = state.index, subscriber = state.subscriber, subscription = state.subscription, obj = state.obj;
    if (!subscriber.closed) {
        if (index < keys.length) {
            var key = keys[index];
            subscriber.next([key, obj[key]]);
            subscription.add(this.schedule({ keys: keys, index: index + 1, subscriber: subscriber, subscription: subscription, obj: obj }));
        }
        else {
            subscriber.complete();
        }
    }
}
//# sourceMappingURL=pairs.js.map

// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/util/not.js
var not = __webpack_require__(65683);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/util/subscribeTo.js + 3 modules
var subscribeTo = __webpack_require__(21400);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/operators/filter.js
var filter = __webpack_require__(72730);
;// CONCATENATED MODULE: ../../node_modules/rxjs/_esm5/internal/observable/partition.js
/** PURE_IMPORTS_START _util_not,_util_subscribeTo,_operators_filter,_Observable PURE_IMPORTS_END */




function partition(source, predicate, thisArg) {
    return [
        (0,filter/* filter */.h)(predicate, thisArg)(new Observable/* Observable */.y((0,subscribeTo/* subscribeTo */.s)(source))),
        (0,filter/* filter */.h)((0,not/* not */.f)(predicate, thisArg))(new Observable/* Observable */.y((0,subscribeTo/* subscribeTo */.s)(source)))
    ];
}
//# sourceMappingURL=partition.js.map

// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/observable/race.js
var race = __webpack_require__(32219);
;// CONCATENATED MODULE: ../../node_modules/rxjs/_esm5/internal/observable/range.js
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

function range(start, count, scheduler) {
    if (start === void 0) {
        start = 0;
    }
    return new Observable/* Observable */.y(function (subscriber) {
        if (count === undefined) {
            count = start;
            start = 0;
        }
        var index = 0;
        var current = start;
        if (scheduler) {
            return scheduler.schedule(range_dispatch, 0, {
                index: index, count: count, start: start, subscriber: subscriber
            });
        }
        else {
            do {
                if (index++ >= count) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(current++);
                if (subscriber.closed) {
                    break;
                }
            } while (true);
        }
        return undefined;
    });
}
function range_dispatch(state) {
    var start = state.start, index = state.index, count = state.count, subscriber = state.subscriber;
    if (index >= count) {
        subscriber.complete();
        return;
    }
    subscriber.next(start);
    if (subscriber.closed) {
        return;
    }
    state.index = index + 1;
    state.start = start + 1;
    this.schedule(state);
}
//# sourceMappingURL=range.js.map

// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/observable/throwError.js
var throwError = __webpack_require__(34236);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/observable/timer.js
var timer = __webpack_require__(13254);
;// CONCATENATED MODULE: ../../node_modules/rxjs/_esm5/internal/observable/using.js
/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */



function using(resourceFactory, observableFactory) {
    return new Observable/* Observable */.y(function (subscriber) {
        var resource;
        try {
            resource = resourceFactory();
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var result;
        try {
            result = observableFactory(resource);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var source = result ? (0,from/* from */.D)(result) : empty/* EMPTY */.E;
        var subscription = source.subscribe(subscriber);
        return function () {
            subscription.unsubscribe();
            if (resource) {
                resource.unsubscribe();
            }
        };
    });
}
//# sourceMappingURL=using.js.map

// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/observable/zip.js
var zip = __webpack_require__(71131);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/scheduled/scheduled.js + 5 modules
var scheduled = __webpack_require__(12540);
// EXTERNAL MODULE: ../../node_modules/rxjs/_esm5/internal/config.js
var config = __webpack_require__(20604);
;// CONCATENATED MODULE: ../../node_modules/rxjs/_esm5/index.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */























































//# sourceMappingURL=index.js.map


/***/ })

}]);