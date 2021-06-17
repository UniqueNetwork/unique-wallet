((typeof self !== 'undefined' ? self : this)["webpackChunk_polkadot_apps"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_polkadot_apps"] || []).push([[9608,1126],{

/***/ 91126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "asEffect": () => (/* reexport */ asEffect),
  "asLayoutEffect": () => (/* reexport */ asLayoutEffect),
  "useActor": () => (/* reexport */ useActor),
  "useInterpret": () => (/* reexport */ useInterpret),
  "useMachine": () => (/* reexport */ useMachine),
  "useSelector": () => (/* reexport */ useSelector),
  "useService": () => (/* reexport */ useService)
});

// EXTERNAL MODULE: consume shared module (default) react@^17.0.2 (singleton) (fallback: ../../node_modules/react/index.js) (eager)
var index_js_eager_ = __webpack_require__(13691);
// EXTERNAL MODULE: consume shared module (default) xstate@^4.15.0 (strict) (fallback: ../../node_modules/xstate/es/index.js)
var index_js_ = __webpack_require__(20183);
;// CONCATENATED MODULE: ../../node_modules/@xstate/react/es/types.js
var ReactEffectType;
(function (ReactEffectType) {
    ReactEffectType[ReactEffectType["Effect"] = 1] = "Effect";
    ReactEffectType[ReactEffectType["LayoutEffect"] = 2] = "LayoutEffect";
})(ReactEffectType || (ReactEffectType = {}));

;// CONCATENATED MODULE: ../../node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js


var index =  index_js_eager_.useLayoutEffect ;

/* harmony default export */ const use_isomorphic_layout_effect_browser_esm = (index);

;// CONCATENATED MODULE: ../../node_modules/@xstate/react/es/useConstant.js

function useConstant(fn) {
    var ref = index_js_eager_.useRef();
    if (!ref.current) {
        ref.current = { v: fn() };
    }
    return ref.current.v;
}

;// CONCATENATED MODULE: ../../node_modules/@xstate/react/es/utils.js
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
function partition(items, predicate) {
    var e_1, _a;
    var _b = __read([[], []], 2), truthy = _b[0], falsy = _b[1];
    try {
        for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
            var item = items_1_1.value;
            if (predicate(item)) {
                truthy.push(item);
            }
            else {
                falsy.push(item);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return [truthy, falsy];
}

;// CONCATENATED MODULE: ../../node_modules/@xstate/react/es/useReactEffectActions.js
var useReactEffectActions_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};




function executeEffect(action, state) {
    var exec = action.exec;
    var originalExec = exec(state.context, state._event.data, {
        action: action,
        state: state,
        _event: state._event
    });
    originalExec();
}
function useReactEffectActions(service) {
    var effectActionsRef = (0,index_js_eager_.useRef)([]);
    var layoutEffectActionsRef = (0,index_js_eager_.useRef)([]);
    use_isomorphic_layout_effect_browser_esm(function () {
        var sub = service.subscribe(function (currentState) {
            var _a, _b;
            if (currentState.actions.length) {
                var reactEffectActions = currentState.actions.filter(function (action) {
                    return (typeof action.exec === 'function' &&
                        '__effect' in action.exec);
                });
                var _c = useReactEffectActions_read(partition(reactEffectActions, function (action) {
                    return action.exec.__effect === ReactEffectType.Effect;
                }), 2), effectActions = _c[0], layoutEffectActions = _c[1];
                (_a = effectActionsRef.current).push.apply(_a, __spreadArray([], useReactEffectActions_read(effectActions.map(function (effectAction) { return [effectAction, currentState]; }))));
                (_b = layoutEffectActionsRef.current).push.apply(_b, __spreadArray([], useReactEffectActions_read(layoutEffectActions.map(function (layoutEffectAction) { return [layoutEffectAction, currentState]; }))));
            }
        });
        return function () {
            sub.unsubscribe();
        };
    }, []);
    // this is somewhat weird - this should always be flushed within useLayoutEffect
    // but we don't want to receive warnings about useLayoutEffect being used on the server
    // so we have to use `useIsomorphicLayoutEffect` to silence those warnings
    use_isomorphic_layout_effect_browser_esm(function () {
        while (layoutEffectActionsRef.current.length) {
            var _a = useReactEffectActions_read(layoutEffectActionsRef.current.shift(), 2), layoutEffectAction = _a[0], effectState = _a[1];
            executeEffect(layoutEffectAction, effectState);
        }
    }); // https://github.com/davidkpiano/xstate/pull/1202#discussion_r429677773
    (0,index_js_eager_.useEffect)(function () {
        while (effectActionsRef.current.length) {
            var _a = useReactEffectActions_read(effectActionsRef.current.shift(), 2), effectAction = _a[0], effectState = _a[1];
            executeEffect(effectAction, effectState);
        }
    });
}

;// CONCATENATED MODULE: ../../node_modules/@xstate/react/es/useInterpret.js
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var useInterpret_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};





// copied from core/src/utils.ts
// it avoids a breaking change between this package and XState which is its peer dep
function toObserver(nextHandler, errorHandler, completionHandler) {
    if (typeof nextHandler === 'object') {
        return nextHandler;
    }
    var noop = function () { return void 0; };
    return {
        next: nextHandler,
        error: errorHandler || noop,
        complete: completionHandler || noop
    };
}
function useInterpret(getMachine, options, observerOrListener) {
    if (options === void 0) { options = {}; }
    var machine = useConstant(function () {
        return typeof getMachine === 'function' ? getMachine() : getMachine;
    });
    if (false) { var _a, initialMachine; }
    var context = options.context, guards = options.guards, actions = options.actions, activities = options.activities, services = options.services, delays = options.delays, rehydratedState = options.state, interpreterOptions = __rest(options, ["context", "guards", "actions", "activities", "services", "delays", "state"]);
    var service = useConstant(function () {
        var machineConfig = {
            context: context,
            guards: guards,
            actions: actions,
            activities: activities,
            services: services,
            delays: delays
        };
        var machineWithConfig = machine.withConfig(machineConfig, __assign(__assign({}, machine.context), context));
        return (0,index_js_.interpret)(machineWithConfig, __assign({ deferEvents: true }, interpreterOptions));
    });
    use_isomorphic_layout_effect_browser_esm(function () {
        var sub;
        if (observerOrListener) {
            sub = service.subscribe(toObserver(observerOrListener));
        }
        return function () {
            sub === null || sub === void 0 ? void 0 : sub.unsubscribe();
        };
    }, [observerOrListener]);
    use_isomorphic_layout_effect_browser_esm(function () {
        service.start(rehydratedState ? index_js_.State.create(rehydratedState) : undefined);
        return function () {
            service.stop();
        };
    }, []);
    // Make sure actions and services are kept updated when they change.
    // This mutation assignment is safe because the service instance is only used
    // in one place -- this hook's caller.
    use_isomorphic_layout_effect_browser_esm(function () {
        Object.assign(service.machine.options.actions, actions);
    }, [actions]);
    use_isomorphic_layout_effect_browser_esm(function () {
        Object.assign(service.machine.options.services, services);
    }, [services]);
    useReactEffectActions(service);
    return service;
}

;// CONCATENATED MODULE: ../../node_modules/@xstate/react/es/useMachine.js
var useMachine_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var useMachine_spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};




function createReactActionFunction(exec, tag) {
    var effectExec = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // don't execute; just return
        return function () {
            return exec.apply(void 0, useMachine_spreadArray([], useMachine_read(args)));
        };
    };
    Object.defineProperties(effectExec, {
        name: { value: "effect:" + exec.name },
        __effect: { value: tag }
    });
    return effectExec;
}
function asEffect(exec) {
    return createReactActionFunction(exec, ReactEffectType.Effect);
}
function asLayoutEffect(exec) {
    return createReactActionFunction(exec, ReactEffectType.LayoutEffect);
}
function useMachine(getMachine, options) {
    if (options === void 0) { options = {}; }
    var listener = (0,index_js_eager_.useCallback)(function (nextState) {
        // Only change the current state if:
        // - the incoming state is the "live" initial state (since it might have new actors)
        // - OR the incoming state actually changed.
        //
        // The "live" initial state will have .changed === undefined.
        var initialStateChanged = nextState.changed === undefined &&
            Object.keys(nextState.children).length;
        if (nextState.changed || initialStateChanged) {
            setState(nextState);
        }
    }, []);
    var service = useInterpret(getMachine, options, listener);
    var _a = useMachine_read((0,index_js_eager_.useState)(function () {
        var initialState = service.machine.initialState;
        return (options.state
            ? index_js_.State.create(options.state)
            : initialState);
    }), 2), state = _a[0], setState = _a[1];
    return [state, service.send, service];
}

;// CONCATENATED MODULE: ../../node_modules/@xstate/react/es/useActor.js
var useActor_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};



function isActorWithState(actorRef) {
    return 'state' in actorRef;
}
function isDeferredActor(actorRef) {
    return 'deferred' in actorRef;
}
var noop = function () {
    /* ... */
};
function defaultGetSnapshot(actorRef) {
    return isActorWithState(actorRef)
        ? actorRef.state
        : 'getSnapshot' in actorRef
            ? actorRef.getSnapshot()
            : undefined;
}
function useActor(actorRef, getSnapshot) {
    if (getSnapshot === void 0) { getSnapshot = defaultGetSnapshot; }
    var actorRefRef = (0,index_js_eager_.useRef)(actorRef);
    var deferredEventsRef = (0,index_js_eager_.useRef)([]);
    var _a = useActor_read((0,index_js_eager_.useState)(function () { return getSnapshot(actorRef); }), 2), current = _a[0], setCurrent = _a[1];
    var send = useConstant(function () { return function (event) {
        var currentActorRef = actorRefRef.current;
        // If the previous actor is a deferred actor,
        // queue the events so that they can be replayed
        // on the non-deferred actor.
        if (isDeferredActor(currentActorRef) && currentActorRef.deferred) {
            deferredEventsRef.current.push(event);
        }
        else {
            currentActorRef.send(event);
        }
    }; });
    use_isomorphic_layout_effect_browser_esm(function () {
        actorRefRef.current = actorRef;
        setCurrent(getSnapshot(actorRef));
        var subscription = actorRef.subscribe({
            next: function (emitted) { return setCurrent(emitted); },
            error: noop,
            complete: noop
        });
        // Dequeue deferred events from the previous deferred actorRef
        while (deferredEventsRef.current.length > 0) {
            var deferredEvent = deferredEventsRef.current.shift();
            actorRef.send(deferredEvent);
        }
        return function () {
            subscription.unsubscribe();
        };
    }, [actorRef]);
    return [current, send];
}

;// CONCATENATED MODULE: ../../node_modules/@xstate/react/es/useService.js
var useService_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

function getServiceSnapshot(service) {
    // TODO: remove compat lines in a new major, replace literal number with InterpreterStatus then as well
    return ('status' in service ? service.status : service._status) !== 0
        ? service.state
        : service.machine.initialState;
}
function useService(service) {
    if (false) {}
    var _a = useService_read(useActor(service, getServiceSnapshot), 1), state = _a[0];
    return [state, service.send];
}

;// CONCATENATED MODULE: ../../node_modules/@xstate/react/es/useSelector.js
var useSelector_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};



function isService(actor) {
    return 'state' in actor && 'machine' in actor;
}
var defaultCompare = function (a, b) { return a === b; };
var useSelector_defaultGetSnapshot = function (a) {
    return isService(a)
        ? getServiceSnapshot(a)
        : isActorWithState(a)
            ? a.state
            : undefined;
};
function useSelector(actor, selector, compare, getSnapshot) {
    if (compare === void 0) { compare = defaultCompare; }
    if (getSnapshot === void 0) { getSnapshot = useSelector_defaultGetSnapshot; }
    var _a = useSelector_read((0,index_js_eager_.useState)(function () { return selector(getSnapshot(actor)); }), 2), selected = _a[0], setSelected = _a[1];
    var selectedRef = (0,index_js_eager_.useRef)(selected);
    (0,index_js_eager_.useEffect)(function () {
        var updateSelectedIfChanged = function (nextSelected) {
            if (!compare(selectedRef.current, nextSelected)) {
                setSelected(nextSelected);
                selectedRef.current = nextSelected;
            }
        };
        var initialSelected = selector(getSnapshot(actor));
        updateSelectedIfChanged(initialSelected);
        var sub = actor.subscribe(function (emitted) {
            var nextSelected = selector(emitted);
            updateSelectedIfChanged(nextSelected);
        });
        return function () { return sub.unsubscribe(); };
    }, [selector, compare]);
    return selected;
}

;// CONCATENATED MODULE: ../../node_modules/@xstate/react/es/index.js







/***/ })

}]);