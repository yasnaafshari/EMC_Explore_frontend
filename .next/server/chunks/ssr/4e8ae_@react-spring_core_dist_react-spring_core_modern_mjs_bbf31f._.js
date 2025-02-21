module.exports = {

"[project]/node_modules/.pnpm/@react-spring+core@9.7.5_react@19.0.0/node_modules/@react-spring/core/dist/react-spring_core.modern.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/hooks/useChain.ts
__turbopack_esm__({
    "BailSignal": (()=>BailSignal),
    "Controller": (()=>Controller),
    "FrameValue": (()=>FrameValue),
    "Interpolation": (()=>Interpolation),
    "Spring": (()=>Spring),
    "SpringContext": (()=>SpringContext),
    "SpringRef": (()=>SpringRef),
    "SpringValue": (()=>SpringValue),
    "Trail": (()=>Trail),
    "Transition": (()=>Transition),
    "config": (()=>config),
    "inferTo": (()=>inferTo),
    "interpolate": (()=>interpolate),
    "to": (()=>to),
    "update": (()=>update),
    "useChain": (()=>useChain),
    "useInView": (()=>useInView),
    "useResize": (()=>useResize),
    "useScroll": (()=>useScroll),
    "useSpring": (()=>useSpring),
    "useSpringRef": (()=>useSpringRef),
    "useSpringValue": (()=>useSpringValue),
    "useSprings": (()=>useSprings),
    "useTrail": (()=>useTrail),
    "useTransition": (()=>useTransition)
});
// src/interpolate.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-spring+shared@9.7.5_react@19.0.0/node_modules/@react-spring/shared/dist/react-spring_shared.modern.mjs [app-ssr] (ecmascript) <locals>");
// src/scheduleProps.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$rafz$40$9$2e$7$2e$5$2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring_rafz$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-spring+rafz@9.7.5/node_modules/@react-spring/rafz/dist/react-spring_rafz.modern.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$animated$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring_animated$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-spring+animated@9.7.5_react@19.0.0/node_modules/@react-spring/animated/dist/react-spring_animated.modern.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function callProp(value, ...args) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(value) ? value(...args) : value;
}
var matchProp = (value, key)=>value === true || !!(key && value && (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(value) ? value(key) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toArray"])(value).includes(key)));
var resolveProp = (prop, key)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].obj(prop) ? key && prop[key] : prop;
var getDefaultProp = (props, key)=>props.default === true ? props[key] : props.default ? props.default[key] : void 0;
var noopTransform = (value)=>value;
var getDefaultProps = (props, transform = noopTransform)=>{
    let keys = DEFAULT_PROPS;
    if (props.default && props.default !== true) {
        props = props.default;
        keys = Object.keys(props);
    }
    const defaults2 = {};
    for (const key of keys){
        const value = transform(props[key], key);
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(value)) {
            defaults2[key] = value;
        }
    }
    return defaults2;
};
var DEFAULT_PROPS = [
    "config",
    "onProps",
    "onStart",
    "onChange",
    "onPause",
    "onResume",
    "onRest"
];
var RESERVED_PROPS = {
    config: 1,
    from: 1,
    to: 1,
    ref: 1,
    loop: 1,
    reset: 1,
    pause: 1,
    cancel: 1,
    reverse: 1,
    immediate: 1,
    default: 1,
    delay: 1,
    onProps: 1,
    onStart: 1,
    onChange: 1,
    onPause: 1,
    onResume: 1,
    onRest: 1,
    onResolve: 1,
    // Transition props
    items: 1,
    trail: 1,
    sort: 1,
    expires: 1,
    initial: 1,
    enter: 1,
    update: 1,
    leave: 1,
    children: 1,
    onDestroyed: 1,
    // Internal props
    keys: 1,
    callId: 1,
    parentId: 1
};
function getForwardProps(props) {
    const forward = {};
    let count = 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["eachProp"])(props, (value, prop)=>{
        if (!RESERVED_PROPS[prop]) {
            forward[prop] = value;
            count++;
        }
    });
    if (count) {
        return forward;
    }
}
function inferTo(props) {
    const to2 = getForwardProps(props);
    if (to2) {
        const out = {
            to: to2
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["eachProp"])(props, (val, key)=>key in to2 || (out[key] = val));
        return out;
    }
    return {
        ...props
    };
}
function computeGoal(value) {
    value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFluidValue"])(value);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].arr(value) ? value.map(computeGoal) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAnimatedString"])(value) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Globals"].createStringInterpolator({
        range: [
            0,
            1
        ],
        output: [
            value,
            value
        ]
    })(1) : value;
}
function hasProps(props) {
    for(const _ in props)return true;
    return false;
}
function isAsyncTo(to2) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(to2) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].arr(to2) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].obj(to2[0]);
}
function detachRefs(ctrl, ref) {
    ctrl.ref?.delete(ctrl);
    ref?.delete(ctrl);
}
function replaceRef(ctrl, ref) {
    if (ref && ctrl.ref !== ref) {
        ctrl.ref?.delete(ctrl);
        ref.add(ctrl);
        ctrl.ref = ref;
    }
}
// src/hooks/useChain.ts
function useChain(refs, timeSteps, timeFrame = 1e3) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useIsomorphicLayoutEffect"])(()=>{
        if (timeSteps) {
            let prevDelay = 0;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(refs, (ref, i)=>{
                const controllers = ref.current;
                if (controllers.length) {
                    let delay = timeFrame * timeSteps[i];
                    if (isNaN(delay)) delay = prevDelay;
                    else prevDelay = delay;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(controllers, (ctrl)=>{
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(ctrl.queue, (props)=>{
                            const memoizedDelayProp = props.delay;
                            props.delay = (key)=>delay + callProp(memoizedDelayProp || 0, key);
                        });
                    });
                    ref.start();
                }
            });
        } else {
            let p = Promise.resolve();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(refs, (ref)=>{
                const controllers = ref.current;
                if (controllers.length) {
                    const queues = controllers.map((ctrl)=>{
                        const q = ctrl.queue;
                        ctrl.queue = [];
                        return q;
                    });
                    p = p.then(()=>{
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(controllers, (ctrl, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(queues[i] || [], (update2)=>ctrl.queue.push(update2)));
                        return Promise.all(ref.start());
                    });
                }
            });
        }
    });
}
;
;
;
;
;
;
// src/constants.ts
var config = {
    default: {
        tension: 170,
        friction: 26
    },
    gentle: {
        tension: 120,
        friction: 14
    },
    wobbly: {
        tension: 180,
        friction: 12
    },
    stiff: {
        tension: 210,
        friction: 20
    },
    slow: {
        tension: 280,
        friction: 60
    },
    molasses: {
        tension: 280,
        friction: 120
    }
};
// src/AnimationConfig.ts
var defaults = {
    ...config.default,
    mass: 1,
    damping: 1,
    easing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["easings"].linear,
    clamp: false
};
var AnimationConfig = class {
    constructor(){
        /**
     * The initial velocity of one or more values.
     *
     * @default 0
     */ this.velocity = 0;
        Object.assign(this, defaults);
    }
};
function mergeConfig(config2, newConfig, defaultConfig) {
    if (defaultConfig) {
        defaultConfig = {
            ...defaultConfig
        };
        sanitizeConfig(defaultConfig, newConfig);
        newConfig = {
            ...defaultConfig,
            ...newConfig
        };
    }
    sanitizeConfig(config2, newConfig);
    Object.assign(config2, newConfig);
    for(const key in defaults){
        if (config2[key] == null) {
            config2[key] = defaults[key];
        }
    }
    let { frequency, damping } = config2;
    const { mass } = config2;
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(frequency)) {
        if (frequency < 0.01) frequency = 0.01;
        if (damping < 0) damping = 0;
        config2.tension = Math.pow(2 * Math.PI / frequency, 2) * mass;
        config2.friction = 4 * Math.PI * damping * mass / frequency;
    }
    return config2;
}
function sanitizeConfig(config2, props) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(props.decay)) {
        config2.duration = void 0;
    } else {
        const isTensionConfig = !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(props.tension) || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(props.friction);
        if (isTensionConfig || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(props.frequency) || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(props.damping) || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(props.mass)) {
            config2.duration = void 0;
            config2.decay = void 0;
        }
        if (isTensionConfig) {
            config2.frequency = void 0;
        }
    }
}
// src/Animation.ts
var emptyArray = [];
var Animation = class {
    constructor(){
        this.changed = false;
        this.values = emptyArray;
        this.toValues = null;
        this.fromValues = emptyArray;
        this.config = new AnimationConfig();
        this.immediate = false;
    }
};
;
function scheduleProps(callId, { key, props, defaultProps, state, actions }) {
    return new Promise((resolve, reject)=>{
        let delay;
        let timeout;
        let cancel = matchProp(props.cancel ?? defaultProps?.cancel, key);
        if (cancel) {
            onStart();
        } else {
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(props.pause)) {
                state.paused = matchProp(props.pause, key);
            }
            let pause = defaultProps?.pause;
            if (pause !== true) {
                pause = state.paused || matchProp(pause, key);
            }
            delay = callProp(props.delay || 0, key);
            if (pause) {
                state.resumeQueue.add(onResume);
                actions.pause();
            } else {
                actions.resume();
                onResume();
            }
        }
        function onPause() {
            state.resumeQueue.add(onResume);
            state.timeouts.delete(timeout);
            timeout.cancel();
            delay = timeout.time - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$rafz$40$9$2e$7$2e$5$2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring_rafz$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["raf"].now();
        }
        function onResume() {
            if (delay > 0 && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Globals"].skipAnimation) {
                state.delayed = true;
                timeout = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$rafz$40$9$2e$7$2e$5$2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring_rafz$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["raf"].setTimeout(onStart, delay);
                state.pauseQueue.add(onPause);
                state.timeouts.add(timeout);
            } else {
                onStart();
            }
        }
        function onStart() {
            if (state.delayed) {
                state.delayed = false;
            }
            state.pauseQueue.delete(onPause);
            state.timeouts.delete(timeout);
            if (callId <= (state.cancelId || 0)) {
                cancel = true;
            }
            try {
                actions.start({
                    ...props,
                    callId,
                    cancel
                }, resolve);
            } catch (err) {
                reject(err);
            }
        }
    });
}
;
// src/AnimationResult.ts
var getCombinedResult = (target, results)=>results.length == 1 ? results[0] : results.some((result)=>result.cancelled) ? getCancelledResult(target.get()) : results.every((result)=>result.noop) ? getNoopResult(target.get()) : getFinishedResult(target.get(), results.every((result)=>result.finished));
var getNoopResult = (value)=>({
        value,
        noop: true,
        finished: true,
        cancelled: false
    });
var getFinishedResult = (value, finished, cancelled = false)=>({
        value,
        finished,
        cancelled
    });
var getCancelledResult = (value)=>({
        value,
        cancelled: true,
        finished: false
    });
// src/runAsync.ts
function runAsync(to2, props, state, target) {
    const { callId, parentId, onRest } = props;
    const { asyncTo: prevTo, promise: prevPromise } = state;
    if (!parentId && to2 === prevTo && !props.reset) {
        return prevPromise;
    }
    return state.promise = (async ()=>{
        state.asyncId = callId;
        state.asyncTo = to2;
        const defaultProps = getDefaultProps(props, (value, key)=>// The `onRest` prop is only called when the `runAsync` promise is resolved.
            key === "onRest" ? void 0 : value);
        let preventBail;
        let bail;
        const bailPromise = new Promise((resolve, reject)=>(preventBail = resolve, bail = reject));
        const bailIfEnded = (bailSignal)=>{
            const bailResult = // The `cancel` prop or `stop` method was used.
            callId <= (state.cancelId || 0) && getCancelledResult(target) || // The async `to` prop was replaced.
            callId !== state.asyncId && getFinishedResult(target, false);
            if (bailResult) {
                bailSignal.result = bailResult;
                bail(bailSignal);
                throw bailSignal;
            }
        };
        const animate = (arg1, arg2)=>{
            const bailSignal = new BailSignal();
            const skipAnimationSignal = new SkipAnimationSignal();
            return (async ()=>{
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Globals"].skipAnimation) {
                    stopAsync(state);
                    skipAnimationSignal.result = getFinishedResult(target, false);
                    bail(skipAnimationSignal);
                    throw skipAnimationSignal;
                }
                bailIfEnded(bailSignal);
                const props2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].obj(arg1) ? {
                    ...arg1
                } : {
                    ...arg2,
                    to: arg1
                };
                props2.parentId = callId;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["eachProp"])(defaultProps, (value, key)=>{
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(props2[key])) {
                        props2[key] = value;
                    }
                });
                const result2 = await target.start(props2);
                bailIfEnded(bailSignal);
                if (state.paused) {
                    await new Promise((resume)=>{
                        state.resumeQueue.add(resume);
                    });
                }
                return result2;
            })();
        };
        let result;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Globals"].skipAnimation) {
            stopAsync(state);
            return getFinishedResult(target, false);
        }
        try {
            let animating;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].arr(to2)) {
                animating = (async (queue)=>{
                    for (const props2 of queue){
                        await animate(props2);
                    }
                })(to2);
            } else {
                animating = Promise.resolve(to2(animate, target.stop.bind(target)));
            }
            await Promise.all([
                animating.then(preventBail),
                bailPromise
            ]);
            result = getFinishedResult(target.get(), true, false);
        } catch (err) {
            if (err instanceof BailSignal) {
                result = err.result;
            } else if (err instanceof SkipAnimationSignal) {
                result = err.result;
            } else {
                throw err;
            }
        } finally{
            if (callId == state.asyncId) {
                state.asyncId = parentId;
                state.asyncTo = parentId ? prevTo : void 0;
                state.promise = parentId ? prevPromise : void 0;
            }
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(onRest)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$rafz$40$9$2e$7$2e$5$2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring_rafz$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["raf"].batchedUpdates(()=>{
                onRest(result, target, target.item);
            });
        }
        return result;
    })();
}
function stopAsync(state, cancelId) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flush"])(state.timeouts, (t)=>t.cancel());
    state.pauseQueue.clear();
    state.resumeQueue.clear();
    state.asyncId = state.asyncTo = state.promise = void 0;
    if (cancelId) state.cancelId = cancelId;
}
var BailSignal = class extends Error {
    constructor(){
        super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");
    }
};
var SkipAnimationSignal = class extends Error {
    constructor(){
        super("SkipAnimationSignal");
    }
};
;
;
var isFrameValue = (value)=>value instanceof FrameValue;
var nextId = 1;
var FrameValue = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["FluidValue"] {
    constructor(){
        super(...arguments);
        this.id = nextId++;
        this._priority = 0;
    }
    get priority() {
        return this._priority;
    }
    set priority(priority) {
        if (this._priority != priority) {
            this._priority = priority;
            this._onPriorityChange(priority);
        }
    }
    /** Get the current value */ get() {
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$animated$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring_animated$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAnimated"])(this);
        return node && node.getValue();
    }
    /** Create a spring that maps our value to another value */ to(...args) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Globals"].to(this, args);
    }
    /** @deprecated Use the `to` method instead. */ interpolate(...args) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["deprecateInterpolate"])();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Globals"].to(this, args);
    }
    toJSON() {
        return this.get();
    }
    observerAdded(count) {
        if (count == 1) this._attach();
    }
    observerRemoved(count) {
        if (count == 0) this._detach();
    }
    /** Called when the first child is added. */ _attach() {}
    /** Called when the last child is removed. */ _detach() {}
    /** Tell our children about our new value */ _onChange(value, idle = false) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["callFluidObservers"])(this, {
            type: "change",
            parent: this,
            value,
            idle
        });
    }
    /** Tell our children about our new priority */ _onPriorityChange(priority) {
        if (!this.idle) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["frameLoop"].sort(this);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["callFluidObservers"])(this, {
            type: "priority",
            parent: this,
            priority
        });
    }
};
// src/SpringPhase.ts
var $P = Symbol.for("SpringPhase");
var HAS_ANIMATED = 1;
var IS_ANIMATING = 2;
var IS_PAUSED = 4;
var hasAnimated = (target)=>(target[$P] & HAS_ANIMATED) > 0;
var isAnimating = (target)=>(target[$P] & IS_ANIMATING) > 0;
var isPaused = (target)=>(target[$P] & IS_PAUSED) > 0;
var setActiveBit = (target, active)=>active ? target[$P] |= IS_ANIMATING | HAS_ANIMATED : target[$P] &= ~IS_ANIMATING;
var setPausedBit = (target, paused)=>paused ? target[$P] |= IS_PAUSED : target[$P] &= ~IS_PAUSED;
// src/SpringValue.ts
var SpringValue = class extends FrameValue {
    constructor(arg1, arg2){
        super();
        /** The animation state */ this.animation = new Animation();
        /** Some props have customizable default values */ this.defaultProps = {};
        /** The state for `runAsync` calls */ this._state = {
            paused: false,
            delayed: false,
            pauseQueue: /* @__PURE__ */ new Set(),
            resumeQueue: /* @__PURE__ */ new Set(),
            timeouts: /* @__PURE__ */ new Set()
        };
        /** The promise resolvers of pending `start` calls */ this._pendingCalls = /* @__PURE__ */ new Set();
        /** The counter for tracking `scheduleProps` calls */ this._lastCallId = 0;
        /** The last `scheduleProps` call that changed the `to` prop */ this._lastToId = 0;
        this._memoizedDuration = 0;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(arg1) || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(arg2)) {
            const props = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].obj(arg1) ? {
                ...arg1
            } : {
                ...arg2,
                from: arg1
            };
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(props.default)) {
                props.default = true;
            }
            this.start(props);
        }
    }
    /** Equals true when not advancing on each frame. */ get idle() {
        return !(isAnimating(this) || this._state.asyncTo) || isPaused(this);
    }
    get goal() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFluidValue"])(this.animation.to);
    }
    get velocity() {
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$animated$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring_animated$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAnimated"])(this);
        return node instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$animated$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring_animated$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedValue"] ? node.lastVelocity || 0 : node.getPayload().map((node2)=>node2.lastVelocity || 0);
    }
    /**
   * When true, this value has been animated at least once.
   */ get hasAnimated() {
        return hasAnimated(this);
    }
    /**
   * When true, this value has an unfinished animation,
   * which is either active or paused.
   */ get isAnimating() {
        return isAnimating(this);
    }
    /**
   * When true, all current and future animations are paused.
   */ get isPaused() {
        return isPaused(this);
    }
    /**
   *
   *
   */ get isDelayed() {
        return this._state.delayed;
    }
    /** Advance the current animation by a number of milliseconds */ advance(dt) {
        let idle = true;
        let changed = false;
        const anim = this.animation;
        let { toValues } = anim;
        const { config: config2 } = anim;
        const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$animated$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring_animated$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPayload"])(anim.to);
        if (!payload && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasFluidValue"])(anim.to)) {
            toValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toArray"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFluidValue"])(anim.to));
        }
        anim.values.forEach((node2, i)=>{
            if (node2.done) return;
            const to2 = // Animated strings always go from 0 to 1.
            node2.constructor == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$animated$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring_animated$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedString"] ? 1 : payload ? payload[i].lastPosition : toValues[i];
            let finished = anim.immediate;
            let position = to2;
            if (!finished) {
                position = node2.lastPosition;
                if (config2.tension <= 0) {
                    node2.done = true;
                    return;
                }
                let elapsed = node2.elapsedTime += dt;
                const from = anim.fromValues[i];
                const v0 = node2.v0 != null ? node2.v0 : node2.v0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].arr(config2.velocity) ? config2.velocity[i] : config2.velocity;
                let velocity;
                const precision = config2.precision || (from == to2 ? 5e-3 : Math.min(1, Math.abs(to2 - from) * 1e-3));
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(config2.duration)) {
                    let p = 1;
                    if (config2.duration > 0) {
                        if (this._memoizedDuration !== config2.duration) {
                            this._memoizedDuration = config2.duration;
                            if (node2.durationProgress > 0) {
                                node2.elapsedTime = config2.duration * node2.durationProgress;
                                elapsed = node2.elapsedTime += dt;
                            }
                        }
                        p = (config2.progress || 0) + elapsed / this._memoizedDuration;
                        p = p > 1 ? 1 : p < 0 ? 0 : p;
                        node2.durationProgress = p;
                    }
                    position = from + config2.easing(p) * (to2 - from);
                    velocity = (position - node2.lastPosition) / dt;
                    finished = p == 1;
                } else if (config2.decay) {
                    const decay = config2.decay === true ? 0.998 : config2.decay;
                    const e = Math.exp(-(1 - decay) * elapsed);
                    position = from + v0 / (1 - decay) * (1 - e);
                    finished = Math.abs(node2.lastPosition - position) <= precision;
                    velocity = v0 * e;
                } else {
                    velocity = node2.lastVelocity == null ? v0 : node2.lastVelocity;
                    const restVelocity = config2.restVelocity || precision / 10;
                    const bounceFactor = config2.clamp ? 0 : config2.bounce;
                    const canBounce = !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(bounceFactor);
                    const isGrowing = from == to2 ? node2.v0 > 0 : from < to2;
                    let isMoving;
                    let isBouncing = false;
                    const step = 1;
                    const numSteps = Math.ceil(dt / step);
                    for(let n = 0; n < numSteps; ++n){
                        isMoving = Math.abs(velocity) > restVelocity;
                        if (!isMoving) {
                            finished = Math.abs(to2 - position) <= precision;
                            if (finished) {
                                break;
                            }
                        }
                        if (canBounce) {
                            isBouncing = position == to2 || position > to2 == isGrowing;
                            if (isBouncing) {
                                velocity = -velocity * bounceFactor;
                                position = to2;
                            }
                        }
                        const springForce = -config2.tension * 1e-6 * (position - to2);
                        const dampingForce = -config2.friction * 1e-3 * velocity;
                        const acceleration = (springForce + dampingForce) / config2.mass;
                        velocity = velocity + acceleration * step;
                        position = position + velocity * step;
                    }
                }
                node2.lastVelocity = velocity;
                if (Number.isNaN(position)) {
                    console.warn(`Got NaN while animating:`, this);
                    finished = true;
                }
            }
            if (payload && !payload[i].done) {
                finished = false;
            }
            if (finished) {
                node2.done = true;
            } else {
                idle = false;
            }
            if (node2.setValue(position, config2.round)) {
                changed = true;
            }
        });
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$animated$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring_animated$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAnimated"])(this);
        const currVal = node.getValue();
        if (idle) {
            const finalVal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFluidValue"])(anim.to);
            if ((currVal !== finalVal || changed) && !config2.decay) {
                node.setValue(finalVal);
                this._onChange(finalVal);
            } else if (changed && config2.decay) {
                this._onChange(currVal);
            }
            this._stop();
        } else if (changed) {
            this._onChange(currVal);
        }
    }
    /** Set the current value, while stopping the current animation */ set(value) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$rafz$40$9$2e$7$2e$5$2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring_rafz$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["raf"].batchedUpdates(()=>{
            this._stop();
            this._focus(value);
            this._set(value);
        });
        return this;
    }
    /**
   * Freeze the active animation in time, as well as any updates merged
   * before `resume` is called.
   */ pause() {
        this._update({
            pause: true
        });
    }
    /** Resume the animation if paused. */ resume() {
        this._update({
            pause: false
        });
    }
    /** Skip to the end of the current animation. */ finish() {
        if (isAnimating(this)) {
            const { to: to2, config: config2 } = this.animation;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$rafz$40$9$2e$7$2e$5$2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring_rafz$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["raf"].batchedUpdates(()=>{
                this._onStart();
                if (!config2.decay) {
                    this._set(to2, false);
                }
                this._stop();
            });
        }
        return this;
    }
    /** Push props into the pending queue. */ update(props) {
        const queue = this.queue || (this.queue = []);
        queue.push(props);
        return this;
    }
    start(to2, arg2) {
        let queue;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(to2)) {
            queue = [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].obj(to2) ? to2 : {
                    ...arg2,
                    to: to2
                }
            ];
        } else {
            queue = this.queue || [];
            this.queue = [];
        }
        return Promise.all(queue.map((props)=>{
            const up = this._update(props);
            return up;
        })).then((results)=>getCombinedResult(this, results));
    }
    /**
   * Stop the current animation, and cancel any delayed updates.
   *
   * Pass `true` to call `onRest` with `cancelled: true`.
   */ stop(cancel) {
        const { to: to2 } = this.animation;
        this._focus(this.get());
        stopAsync(this._state, cancel && this._lastCallId);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$rafz$40$9$2e$7$2e$5$2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring_rafz$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["raf"].batchedUpdates(()=>this._stop(to2, cancel));
        return this;
    }
    /** Restart the animation. */ reset() {
        this._update({
            reset: true
        });
    }
    /** @internal */ eventObserved(event) {
        if (event.type == "change") {
            this._start();
        } else if (event.type == "priority") {
            this.priority = event.priority + 1;
        }
    }
    /**
   * Parse the `to` and `from` range from the given `props` object.
   *
   * This also ensures the initial value is available to animated components
   * during the render phase.
   */ _prepareNode(props) {
        const key = this.key || "";
        let { to: to2, from } = props;
        to2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].obj(to2) ? to2[key] : to2;
        if (to2 == null || isAsyncTo(to2)) {
            to2 = void 0;
        }
        from = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].obj(from) ? from[key] : from;
        if (from == null) {
            from = void 0;
        }
        const range = {
            to: to2,
            from
        };
        if (!hasAnimated(this)) {
            if (props.reverse) [to2, from] = [
                from,
                to2
            ];
            from = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFluidValue"])(from);
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(from)) {
                this._set(from);
            } else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$animated$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring_animated$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAnimated"])(this)) {
                this._set(to2);
            }
        }
        return range;
    }
    /** Every update is processed by this method before merging. */ _update({ ...props }, isLoop) {
        const { key, defaultProps } = this;
        if (props.default) Object.assign(defaultProps, getDefaultProps(props, (value, prop)=>/^on/.test(prop) ? resolveProp(value, key) : value));
        mergeActiveFn(this, props, "onProps");
        sendEvent(this, "onProps", props, this);
        const range = this._prepareNode(props);
        if (Object.isFrozen(this)) {
            throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
        }
        const state = this._state;
        return scheduleProps(++this._lastCallId, {
            key,
            props,
            defaultProps,
            state,
            actions: {
                pause: ()=>{
                    if (!isPaused(this)) {
                        setPausedBit(this, true);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flushCalls"])(state.pauseQueue);
                        sendEvent(this, "onPause", getFinishedResult(this, checkFinished(this, this.animation.to)), this);
                    }
                },
                resume: ()=>{
                    if (isPaused(this)) {
                        setPausedBit(this, false);
                        if (isAnimating(this)) {
                            this._resume();
                        }
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flushCalls"])(state.resumeQueue);
                        sendEvent(this, "onResume", getFinishedResult(this, checkFinished(this, this.animation.to)), this);
                    }
                },
                start: this._merge.bind(this, range)
            }
        }).then((result)=>{
            if (props.loop && result.finished && !(isLoop && result.noop)) {
                const nextProps = createLoopUpdate(props);
                if (nextProps) {
                    return this._update(nextProps, true);
                }
            }
            return result;
        });
    }
    /** Merge props into the current animation */ _merge(range, props, resolve) {
        if (props.cancel) {
            this.stop(true);
            return resolve(getCancelledResult(this));
        }
        const hasToProp = !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(range.to);
        const hasFromProp = !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(range.from);
        if (hasToProp || hasFromProp) {
            if (props.callId > this._lastToId) {
                this._lastToId = props.callId;
            } else {
                return resolve(getCancelledResult(this));
            }
        }
        const { key, defaultProps, animation: anim } = this;
        const { to: prevTo, from: prevFrom } = anim;
        let { to: to2 = prevTo, from = prevFrom } = range;
        if (hasFromProp && !hasToProp && (!props.default || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(to2))) {
            to2 = from;
        }
        if (props.reverse) [to2, from] = [
            from,
            to2
        ];
        const hasFromChanged = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isEqual"])(from, prevFrom);
        if (hasFromChanged) {
            anim.from = from;
        }
        from = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFluidValue"])(from);
        const hasToChanged = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isEqual"])(to2, prevTo);
        if (hasToChanged) {
            this._focus(to2);
        }
        const hasAsyncTo = isAsyncTo(props.to);
        const { config: config2 } = anim;
        const { decay, velocity } = config2;
        if (hasToProp || hasFromProp) {
            config2.velocity = 0;
        }
        if (props.config && !hasAsyncTo) {
            mergeConfig(config2, callProp(props.config, key), // Avoid calling the same "config" prop twice.
            props.config !== defaultProps.config ? callProp(defaultProps.config, key) : void 0);
        }
        let node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$animated$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring_animated$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAnimated"])(this);
        if (!node || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(to2)) {
            return resolve(getFinishedResult(this, true));
        }
        const reset = // When `reset` is undefined, the `from` prop implies `reset: true`,
        // except for declarative updates. When `reset` is defined, there
        // must exist a value to animate from.
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(props.reset) ? hasFromProp && !props.default : !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(from) && matchProp(props.reset, key);
        const value = reset ? from : this.get();
        const goal = computeGoal(to2);
        const isAnimatable = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].num(goal) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].arr(goal) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAnimatedString"])(goal);
        const immediate = !hasAsyncTo && (!isAnimatable || matchProp(defaultProps.immediate || props.immediate, key));
        if (hasToChanged) {
            const nodeType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$animated$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring_animated$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAnimatedType"])(to2);
            if (nodeType !== node.constructor) {
                if (immediate) {
                    node = this._set(goal);
                } else throw Error(`Cannot animate between ${node.constructor.name} and ${nodeType.name}, as the "to" prop suggests`);
            }
        }
        const goalType = node.constructor;
        let started = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasFluidValue"])(to2);
        let finished = false;
        if (!started) {
            const hasValueChanged = reset || !hasAnimated(this) && hasFromChanged;
            if (hasToChanged || hasValueChanged) {
                finished = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isEqual"])(computeGoal(value), goal);
                started = !finished;
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isEqual"])(anim.immediate, immediate) && !immediate || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isEqual"])(config2.decay, decay) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isEqual"])(config2.velocity, velocity)) {
                started = true;
            }
        }
        if (finished && isAnimating(this)) {
            if (anim.changed && !reset) {
                started = true;
            } else if (!started) {
                this._stop(prevTo);
            }
        }
        if (!hasAsyncTo) {
            if (started || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasFluidValue"])(prevTo)) {
                anim.values = node.getPayload();
                anim.toValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasFluidValue"])(to2) ? null : goalType == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$animated$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring_animated$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedString"] ? [
                    1
                ] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toArray"])(goal);
            }
            if (anim.immediate != immediate) {
                anim.immediate = immediate;
                if (!immediate && !reset) {
                    this._set(prevTo);
                }
            }
            if (started) {
                const { onRest } = anim;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(ACTIVE_EVENTS, (type)=>mergeActiveFn(this, props, type));
                const result = getFinishedResult(this, checkFinished(this, prevTo));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flushCalls"])(this._pendingCalls, result);
                this._pendingCalls.add(resolve);
                if (anim.changed) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$rafz$40$9$2e$7$2e$5$2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring_rafz$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["raf"].batchedUpdates(()=>{
                    anim.changed = !reset;
                    onRest?.(result, this);
                    if (reset) {
                        callProp(defaultProps.onRest, result);
                    } else {
                        anim.onStart?.(result, this);
                    }
                });
            }
        }
        if (reset) {
            this._set(value);
        }
        if (hasAsyncTo) {
            resolve(runAsync(props.to, props, this._state, this));
        } else if (started) {
            this._start();
        } else if (isAnimating(this) && !hasToChanged) {
            this._pendingCalls.add(resolve);
        } else {
            resolve(getNoopResult(value));
        }
    }
    /** Update the `animation.to` value, which might be a `FluidValue` */ _focus(value) {
        const anim = this.animation;
        if (value !== anim.to) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFluidObservers"])(this)) {
                this._detach();
            }
            anim.to = value;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFluidObservers"])(this)) {
                this._attach();
            }
        }
    }
    _attach() {
        let priority = 0;
        const { to: to2 } = this.animation;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasFluidValue"])(to2)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addFluidObserver"])(to2, this);
            if (isFrameValue(to2)) {
                priority = to2.priority + 1;
            }
        }
        this.priority = priority;
    }
    _detach() {
        const { to: to2 } = this.animation;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasFluidValue"])(to2)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["removeFluidObserver"])(to2, this);
        }
    }
    /**
   * Update the current value from outside the frameloop,
   * and return the `Animated` node.
   */ _set(arg, idle = true) {
        const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFluidValue"])(arg);
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(value)) {
            const oldNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$animated$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring_animated$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAnimated"])(this);
            if (!oldNode || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isEqual"])(value, oldNode.getValue())) {
                const nodeType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$animated$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring_animated$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAnimatedType"])(value);
                if (!oldNode || oldNode.constructor != nodeType) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$animated$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring_animated$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAnimated"])(this, nodeType.create(value));
                } else {
                    oldNode.setValue(value);
                }
                if (oldNode) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$rafz$40$9$2e$7$2e$5$2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring_rafz$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["raf"].batchedUpdates(()=>{
                        this._onChange(value, idle);
                    });
                }
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$animated$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring_animated$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAnimated"])(this);
    }
    _onStart() {
        const anim = this.animation;
        if (!anim.changed) {
            anim.changed = true;
            sendEvent(this, "onStart", getFinishedResult(this, checkFinished(this, anim.to)), this);
        }
    }
    _onChange(value, idle) {
        if (!idle) {
            this._onStart();
            callProp(this.animation.onChange, value, this);
        }
        callProp(this.defaultProps.onChange, value, this);
        super._onChange(value, idle);
    }
    // This method resets the animation state (even if already animating) to
    // ensure the latest from/to range is used, and it also ensures this spring
    // is added to the frameloop.
    _start() {
        const anim = this.animation;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$animated$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring_animated$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAnimated"])(this).reset((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFluidValue"])(anim.to));
        if (!anim.immediate) {
            anim.fromValues = anim.values.map((node)=>node.lastPosition);
        }
        if (!isAnimating(this)) {
            setActiveBit(this, true);
            if (!isPaused(this)) {
                this._resume();
            }
        }
    }
    _resume() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Globals"].skipAnimation) {
            this.finish();
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["frameLoop"].start(this);
        }
    }
    /**
   * Exit the frameloop and notify `onRest` listeners.
   *
   * Always wrap `_stop` calls with `batchedUpdates`.
   */ _stop(goal, cancel) {
        if (isAnimating(this)) {
            setActiveBit(this, false);
            const anim = this.animation;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(anim.values, (node)=>{
                node.done = true;
            });
            if (anim.toValues) {
                anim.onChange = anim.onPause = anim.onResume = void 0;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["callFluidObservers"])(this, {
                type: "idle",
                parent: this
            });
            const result = cancel ? getCancelledResult(this.get()) : getFinishedResult(this.get(), checkFinished(this, goal ?? anim.to));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flushCalls"])(this._pendingCalls, result);
            if (anim.changed) {
                anim.changed = false;
                sendEvent(this, "onRest", result, this);
            }
        }
    }
};
function checkFinished(target, to2) {
    const goal = computeGoal(to2);
    const value = computeGoal(target.get());
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isEqual"])(value, goal);
}
function createLoopUpdate(props, loop = props.loop, to2 = props.to) {
    const loopRet = callProp(loop);
    if (loopRet) {
        const overrides = loopRet !== true && inferTo(loopRet);
        const reverse = (overrides || props).reverse;
        const reset = !overrides || overrides.reset;
        return createUpdate({
            ...props,
            loop,
            // Avoid updating default props when looping.
            default: false,
            // Never loop the `pause` prop.
            pause: void 0,
            // For the "reverse" prop to loop as expected, the "to" prop
            // must be undefined. The "reverse" prop is ignored when the
            // "to" prop is an array or function.
            to: !reverse || isAsyncTo(to2) ? to2 : void 0,
            // Ignore the "from" prop except on reset.
            from: reset ? props.from : void 0,
            reset,
            // The "loop" prop can return a "useSpring" props object to
            // override any of the original props.
            ...overrides
        });
    }
}
function createUpdate(props) {
    const { to: to2, from } = props = inferTo(props);
    const keys = /* @__PURE__ */ new Set();
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].obj(to2)) findDefined(to2, keys);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].obj(from)) findDefined(from, keys);
    props.keys = keys.size ? Array.from(keys) : null;
    return props;
}
function declareUpdate(props) {
    const update2 = createUpdate(props);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(update2.default)) {
        update2.default = getDefaultProps(update2);
    }
    return update2;
}
function findDefined(values, keys) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["eachProp"])(values, (value, key)=>value != null && keys.add(key));
}
var ACTIVE_EVENTS = [
    "onStart",
    "onRest",
    "onChange",
    "onPause",
    "onResume"
];
function mergeActiveFn(target, props, type) {
    target.animation[type] = props[type] !== getDefaultProp(props, type) ? resolveProp(props[type], target.key) : void 0;
}
function sendEvent(target, type, ...args) {
    target.animation[type]?.(...args);
    target.defaultProps[type]?.(...args);
}
;
var BATCHED_EVENTS = [
    "onStart",
    "onChange",
    "onRest"
];
var nextId2 = 1;
var Controller = class {
    constructor(props, flush3){
        this.id = nextId2++;
        /** The animated values */ this.springs = {};
        /** The queue of props passed to the `update` method. */ this.queue = [];
        /** The counter for tracking `scheduleProps` calls */ this._lastAsyncId = 0;
        /** The values currently being animated */ this._active = /* @__PURE__ */ new Set();
        /** The values that changed recently */ this._changed = /* @__PURE__ */ new Set();
        /** Equals false when `onStart` listeners can be called */ this._started = false;
        /** State used by the `runAsync` function */ this._state = {
            paused: false,
            pauseQueue: /* @__PURE__ */ new Set(),
            resumeQueue: /* @__PURE__ */ new Set(),
            timeouts: /* @__PURE__ */ new Set()
        };
        /** The event queues that are flushed once per frame maximum */ this._events = {
            onStart: /* @__PURE__ */ new Map(),
            onChange: /* @__PURE__ */ new Map(),
            onRest: /* @__PURE__ */ new Map()
        };
        this._onFrame = this._onFrame.bind(this);
        if (flush3) {
            this._flush = flush3;
        }
        if (props) {
            this.start({
                default: true,
                ...props
            });
        }
    }
    /**
   * Equals `true` when no spring values are in the frameloop, and
   * no async animation is currently active.
   */ get idle() {
        return !this._state.asyncTo && Object.values(this.springs).every((spring)=>{
            return spring.idle && !spring.isDelayed && !spring.isPaused;
        });
    }
    get item() {
        return this._item;
    }
    set item(item) {
        this._item = item;
    }
    /** Get the current values of our springs */ get() {
        const values = {};
        this.each((spring, key)=>values[key] = spring.get());
        return values;
    }
    /** Set the current values without animating. */ set(values) {
        for(const key in values){
            const value = values[key];
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(value)) {
                this.springs[key].set(value);
            }
        }
    }
    /** Push an update onto the queue of each value. */ update(props) {
        if (props) {
            this.queue.push(createUpdate(props));
        }
        return this;
    }
    /**
   * Start the queued animations for every spring, and resolve the returned
   * promise once all queued animations have finished or been cancelled.
   *
   * When you pass a queue (instead of nothing), that queue is used instead of
   * the queued animations added with the `update` method, which are left alone.
   */ start(props) {
        let { queue } = this;
        if (props) {
            queue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toArray"])(props).map(createUpdate);
        } else {
            this.queue = [];
        }
        if (this._flush) {
            return this._flush(this, queue);
        }
        prepareKeys(this, queue);
        return flushUpdateQueue(this, queue);
    }
    /** @internal */ stop(arg, keys) {
        if (arg !== !!arg) {
            keys = arg;
        }
        if (keys) {
            const springs = this.springs;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toArray"])(keys), (key)=>springs[key].stop(!!arg));
        } else {
            stopAsync(this._state, this._lastAsyncId);
            this.each((spring)=>spring.stop(!!arg));
        }
        return this;
    }
    /** Freeze the active animation in time */ pause(keys) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(keys)) {
            this.start({
                pause: true
            });
        } else {
            const springs = this.springs;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toArray"])(keys), (key)=>springs[key].pause());
        }
        return this;
    }
    /** Resume the animation if paused. */ resume(keys) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(keys)) {
            this.start({
                pause: false
            });
        } else {
            const springs = this.springs;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toArray"])(keys), (key)=>springs[key].resume());
        }
        return this;
    }
    /** Call a function once per spring value */ each(iterator) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["eachProp"])(this.springs, iterator);
    }
    /** @internal Called at the end of every animation frame */ _onFrame() {
        const { onStart, onChange, onRest } = this._events;
        const active = this._active.size > 0;
        const changed = this._changed.size > 0;
        if (active && !this._started || changed && !this._started) {
            this._started = true;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flush"])(onStart, ([onStart2, result])=>{
                result.value = this.get();
                onStart2(result, this, this._item);
            });
        }
        const idle = !active && this._started;
        const values = changed || idle && onRest.size ? this.get() : null;
        if (changed && onChange.size) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flush"])(onChange, ([onChange2, result])=>{
                result.value = values;
                onChange2(result, this, this._item);
            });
        }
        if (idle) {
            this._started = false;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flush"])(onRest, ([onRest2, result])=>{
                result.value = values;
                onRest2(result, this, this._item);
            });
        }
    }
    /** @internal */ eventObserved(event) {
        if (event.type == "change") {
            this._changed.add(event.parent);
            if (!event.idle) {
                this._active.add(event.parent);
            }
        } else if (event.type == "idle") {
            this._active.delete(event.parent);
        } else return;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$rafz$40$9$2e$7$2e$5$2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring_rafz$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["raf"].onFrame(this._onFrame);
    }
};
function flushUpdateQueue(ctrl, queue) {
    return Promise.all(queue.map((props)=>flushUpdate(ctrl, props))).then((results)=>getCombinedResult(ctrl, results));
}
async function flushUpdate(ctrl, props, isLoop) {
    const { keys, to: to2, from, loop, onRest, onResolve } = props;
    const defaults2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].obj(props.default) && props.default;
    if (loop) {
        props.loop = false;
    }
    if (to2 === false) props.to = null;
    if (from === false) props.from = null;
    const asyncTo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].arr(to2) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(to2) ? to2 : void 0;
    if (asyncTo) {
        props.to = void 0;
        props.onRest = void 0;
        if (defaults2) {
            defaults2.onRest = void 0;
        }
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(BATCHED_EVENTS, (key)=>{
            const handler = props[key];
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(handler)) {
                const queue = ctrl["_events"][key];
                props[key] = ({ finished, cancelled })=>{
                    const result2 = queue.get(handler);
                    if (result2) {
                        if (!finished) result2.finished = false;
                        if (cancelled) result2.cancelled = true;
                    } else {
                        queue.set(handler, {
                            value: null,
                            finished: finished || false,
                            cancelled: cancelled || false
                        });
                    }
                };
                if (defaults2) {
                    defaults2[key] = props[key];
                }
            }
        });
    }
    const state = ctrl["_state"];
    if (props.pause === !state.paused) {
        state.paused = props.pause;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flushCalls"])(props.pause ? state.pauseQueue : state.resumeQueue);
    } else if (state.paused) {
        props.pause = true;
    }
    const promises = (keys || Object.keys(ctrl.springs)).map((key)=>ctrl.springs[key].start(props));
    const cancel = props.cancel === true || getDefaultProp(props, "cancel") === true;
    if (asyncTo || cancel && state.asyncId) {
        promises.push(scheduleProps(++ctrl["_lastAsyncId"], {
            props,
            state,
            actions: {
                pause: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["noop"],
                resume: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["noop"],
                start (props2, resolve) {
                    if (cancel) {
                        stopAsync(state, ctrl["_lastAsyncId"]);
                        resolve(getCancelledResult(ctrl));
                    } else {
                        props2.onRest = onRest;
                        resolve(runAsync(asyncTo, props2, state, ctrl));
                    }
                }
            }
        }));
    }
    if (state.paused) {
        await new Promise((resume)=>{
            state.resumeQueue.add(resume);
        });
    }
    const result = getCombinedResult(ctrl, await Promise.all(promises));
    if (loop && result.finished && !(isLoop && result.noop)) {
        const nextProps = createLoopUpdate(props, loop, to2);
        if (nextProps) {
            prepareKeys(ctrl, [
                nextProps
            ]);
            return flushUpdate(ctrl, nextProps, true);
        }
    }
    if (onResolve) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$rafz$40$9$2e$7$2e$5$2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring_rafz$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["raf"].batchedUpdates(()=>onResolve(result, ctrl, ctrl.item));
    }
    return result;
}
function getSprings(ctrl, props) {
    const springs = {
        ...ctrl.springs
    };
    if (props) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toArray"])(props), (props2)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(props2.keys)) {
                props2 = createUpdate(props2);
            }
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].obj(props2.to)) {
                props2 = {
                    ...props2,
                    to: void 0
                };
            }
            prepareSprings(springs, props2, (key)=>{
                return createSpring(key);
            });
        });
    }
    setSprings(ctrl, springs);
    return springs;
}
function setSprings(ctrl, springs) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["eachProp"])(springs, (spring, key)=>{
        if (!ctrl.springs[key]) {
            ctrl.springs[key] = spring;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addFluidObserver"])(spring, ctrl);
        }
    });
}
function createSpring(key, observer) {
    const spring = new SpringValue();
    spring.key = key;
    if (observer) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addFluidObserver"])(spring, observer);
    }
    return spring;
}
function prepareSprings(springs, props, create) {
    if (props.keys) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(props.keys, (key)=>{
            const spring = springs[key] || (springs[key] = create(key));
            spring["_prepareNode"](props);
        });
    }
}
function prepareKeys(ctrl, queue) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(queue, (props)=>{
        prepareSprings(ctrl.springs, props, (key)=>{
            return createSpring(key, ctrl);
        });
    });
}
;
;
;
var SpringContext = ({ children, ...props })=>{
    const inherited = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ctx);
    const pause = props.pause || !!inherited.pause, immediate = props.immediate || !!inherited.immediate;
    props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useMemoOne"])(()=>({
            pause,
            immediate
        }), [
        pause,
        immediate
    ]);
    const { Provider } = ctx;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(Provider, {
        value: props
    }, children);
};
var ctx = makeContext(SpringContext, {});
SpringContext.Provider = ctx.Provider;
SpringContext.Consumer = ctx.Consumer;
function makeContext(target, init) {
    Object.assign(target, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createContext(init));
    target.Provider._context = target;
    target.Consumer._context = target;
    return target;
}
;
var SpringRef = ()=>{
    const current = [];
    const SpringRef2 = function(props) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["deprecateDirectCall"])();
        const results = [];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(current, (ctrl, i)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(props)) {
                results.push(ctrl.start());
            } else {
                const update2 = _getProps(props, ctrl, i);
                if (update2) {
                    results.push(ctrl.start(update2));
                }
            }
        });
        return results;
    };
    SpringRef2.current = current;
    SpringRef2.add = function(ctrl) {
        if (!current.includes(ctrl)) {
            current.push(ctrl);
        }
    };
    SpringRef2.delete = function(ctrl) {
        const i = current.indexOf(ctrl);
        if (~i) current.splice(i, 1);
    };
    SpringRef2.pause = function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(current, (ctrl)=>ctrl.pause(...arguments));
        return this;
    };
    SpringRef2.resume = function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(current, (ctrl)=>ctrl.resume(...arguments));
        return this;
    };
    SpringRef2.set = function(values) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(current, (ctrl, i)=>{
            const update2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(values) ? values(i, ctrl) : values;
            if (update2) {
                ctrl.set(update2);
            }
        });
    };
    SpringRef2.start = function(props) {
        const results = [];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(current, (ctrl, i)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(props)) {
                results.push(ctrl.start());
            } else {
                const update2 = this._getProps(props, ctrl, i);
                if (update2) {
                    results.push(ctrl.start(update2));
                }
            }
        });
        return results;
    };
    SpringRef2.stop = function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(current, (ctrl)=>ctrl.stop(...arguments));
        return this;
    };
    SpringRef2.update = function(props) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(current, (ctrl, i)=>ctrl.update(this._getProps(props, ctrl, i)));
        return this;
    };
    const _getProps = function(arg, ctrl, index) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(arg) ? arg(index, ctrl) : arg;
    };
    SpringRef2._getProps = _getProps;
    return SpringRef2;
};
// src/hooks/useSprings.ts
function useSprings(length, props, deps) {
    const propsFn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(props) && props;
    if (propsFn && !deps) deps = [];
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>propsFn || arguments.length == 3 ? SpringRef() : void 0, []);
    const layoutId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const forceUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useForceUpdate"])();
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            ctrls: [],
            queue: [],
            flush (ctrl, updates2) {
                const springs2 = getSprings(ctrl, updates2);
                const canFlushSync = layoutId.current > 0 && !state.queue.length && !Object.keys(springs2).some((key)=>!ctrl.springs[key]);
                return canFlushSync ? flushUpdateQueue(ctrl, updates2) : new Promise((resolve)=>{
                    setSprings(ctrl, springs2);
                    state.queue.push(()=>{
                        resolve(flushUpdateQueue(ctrl, updates2));
                    });
                    forceUpdate();
                });
            }
        }), []);
    const ctrls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([
        ...state.ctrls
    ]);
    const updates = [];
    const prevLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["usePrev"])(length) || 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(ctrls.current.slice(length, prevLength), (ctrl)=>{
            detachRefs(ctrl, ref);
            ctrl.stop(true);
        });
        ctrls.current.length = length;
        declareUpdates(prevLength, length);
    }, [
        length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        declareUpdates(0, Math.min(prevLength, length));
    }, deps);
    function declareUpdates(startIndex, endIndex) {
        for(let i = startIndex; i < endIndex; i++){
            const ctrl = ctrls.current[i] || (ctrls.current[i] = new Controller(null, state.flush));
            const update2 = propsFn ? propsFn(i, ctrl) : props[i];
            if (update2) {
                updates[i] = declareUpdate(update2);
            }
        }
    }
    const springs = ctrls.current.map((ctrl, i)=>getSprings(ctrl, updates[i]));
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(SpringContext);
    const prevContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["usePrev"])(context);
    const hasContext = context !== prevContext && hasProps(context);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useIsomorphicLayoutEffect"])(()=>{
        layoutId.current++;
        state.ctrls = ctrls.current;
        const { queue } = state;
        if (queue.length) {
            state.queue = [];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(queue, (cb)=>cb());
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(ctrls.current, (ctrl, i)=>{
            ref?.add(ctrl);
            if (hasContext) {
                ctrl.start({
                    default: context
                });
            }
            const update2 = updates[i];
            if (update2) {
                replaceRef(ctrl, update2.ref);
                if (ctrl.ref) {
                    ctrl.queue.push(update2);
                } else {
                    ctrl.start(update2);
                }
            }
        });
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useOnce"])(()=>()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(state.ctrls, (ctrl)=>ctrl.stop(true));
        });
    const values = springs.map((x)=>({
            ...x
        }));
    return ref ? [
        values,
        ref
    ] : values;
}
// src/hooks/useSpring.ts
function useSpring(props, deps) {
    const isFn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(props);
    const [[values], ref] = useSprings(1, isFn ? props : [
        props
    ], isFn ? deps || [] : deps);
    return isFn || arguments.length == 2 ? [
        values,
        ref
    ] : values;
}
;
var initSpringRef = ()=>SpringRef();
var useSpringRef = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initSpringRef)[0];
;
var useSpringValue = (initial, props)=>{
    const springValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useConstant"])(()=>new SpringValue(initial, props));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useOnce"])(()=>()=>{
            springValue.stop();
        });
    return springValue;
};
;
function useTrail(length, propsArg, deps) {
    const propsFn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(propsArg) && propsArg;
    if (propsFn && !deps) deps = [];
    let reverse = true;
    let passedRef = void 0;
    const result = useSprings(length, (i, ctrl)=>{
        const props = propsFn ? propsFn(i, ctrl) : propsArg;
        passedRef = props.ref;
        reverse = reverse && props.reverse;
        return props;
    }, // Ensure the props function is called when no deps exist.
    // This works around the 3 argument rule.
    deps || [
        {}
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useIsomorphicLayoutEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(result[1].current, (ctrl, i)=>{
            const parent = result[1].current[i + (reverse ? 1 : -1)];
            replaceRef(ctrl, passedRef);
            if (ctrl.ref) {
                if (parent) {
                    ctrl.update({
                        to: parent.springs
                    });
                }
                return;
            }
            if (parent) {
                ctrl.start({
                    to: parent.springs
                });
            } else {
                ctrl.start();
            }
        });
    }, deps);
    if (propsFn || arguments.length == 3) {
        const ref = passedRef ?? result[1];
        ref["_getProps"] = (propsArg2, ctrl, i)=>{
            const props = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(propsArg2) ? propsArg2(i, ctrl) : propsArg2;
            if (props) {
                const parent = ref.current[i + (props.reverse ? 1 : -1)];
                if (parent) props.to = parent.springs;
                return props;
            }
        };
        return result;
    }
    return result[0];
}
;
;
;
function useTransition(data, props, deps) {
    const propsFn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(props) && props;
    const { reset, sort, trail = 0, expires = true, exitBeforeEnter = false, onDestroyed, ref: propsRef, config: propsConfig } = propsFn ? propsFn() : props;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>propsFn || arguments.length == 3 ? SpringRef() : void 0, []);
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toArray"])(data);
    const transitions = [];
    const usedTransitions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prevTransitions = reset ? null : usedTransitions.current;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useIsomorphicLayoutEffect"])(()=>{
        usedTransitions.current = transitions;
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useOnce"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(transitions, (t)=>{
            ref?.add(t.ctrl);
            t.ctrl.ref = ref;
        });
        return ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(usedTransitions.current, (t)=>{
                if (t.expired) {
                    clearTimeout(t.expirationId);
                }
                detachRefs(t.ctrl, ref);
                t.ctrl.stop(true);
            });
        };
    });
    const keys = getKeys(items, propsFn ? propsFn() : props, prevTransitions);
    const expired = reset && usedTransitions.current || [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useIsomorphicLayoutEffect"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(expired, ({ ctrl, item, key })=>{
            detachRefs(ctrl, ref);
            callProp(onDestroyed, item, key);
        }));
    const reused = [];
    if (prevTransitions) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(prevTransitions, (t, i)=>{
        if (t.expired) {
            clearTimeout(t.expirationId);
            expired.push(t);
        } else {
            i = reused[i] = keys.indexOf(t.key);
            if (~i) transitions[i] = t;
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(items, (item, i)=>{
        if (!transitions[i]) {
            transitions[i] = {
                key: keys[i],
                item,
                phase: "mount" /* MOUNT */ ,
                ctrl: new Controller()
            };
            transitions[i].ctrl.item = item;
        }
    });
    if (reused.length) {
        let i = -1;
        const { leave } = propsFn ? propsFn() : props;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(reused, (keyIndex, prevIndex)=>{
            const t = prevTransitions[prevIndex];
            if (~keyIndex) {
                i = transitions.indexOf(t);
                transitions[i] = {
                    ...t,
                    item: items[keyIndex]
                };
            } else if (leave) {
                transitions.splice(++i, 0, t);
            }
        });
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(sort)) {
        transitions.sort((a, b)=>sort(a.item, b.item));
    }
    let delay = -trail;
    const forceUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useForceUpdate"])();
    const defaultProps = getDefaultProps(props);
    const changes = /* @__PURE__ */ new Map();
    const exitingTransitions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(/* @__PURE__ */ new Map());
    const forceChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(transitions, (t, i)=>{
        const key = t.key;
        const prevPhase = t.phase;
        const p = propsFn ? propsFn() : props;
        let to2;
        let phase;
        const propsDelay = callProp(p.delay || 0, key);
        if (prevPhase == "mount" /* MOUNT */ ) {
            to2 = p.enter;
            phase = "enter" /* ENTER */ ;
        } else {
            const isLeave = keys.indexOf(key) < 0;
            if (prevPhase != "leave" /* LEAVE */ ) {
                if (isLeave) {
                    to2 = p.leave;
                    phase = "leave" /* LEAVE */ ;
                } else if (to2 = p.update) {
                    phase = "update" /* UPDATE */ ;
                } else return;
            } else if (!isLeave) {
                to2 = p.enter;
                phase = "enter" /* ENTER */ ;
            } else return;
        }
        to2 = callProp(to2, t.item, i);
        to2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].obj(to2) ? inferTo(to2) : {
            to: to2
        };
        if (!to2.config) {
            const config2 = propsConfig || defaultProps.config;
            to2.config = callProp(config2, t.item, i, phase);
        }
        delay += trail;
        const payload = {
            ...defaultProps,
            // we need to add our props.delay value you here.
            delay: propsDelay + delay,
            ref: propsRef,
            immediate: p.immediate,
            // This prevents implied resets.
            reset: false,
            // Merge any phase-specific props.
            ...to2
        };
        if (phase == "enter" /* ENTER */  && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(payload.from)) {
            const p2 = propsFn ? propsFn() : props;
            const from = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(p2.initial) || prevTransitions ? p2.from : p2.initial;
            payload.from = callProp(from, t.item, i);
        }
        const { onResolve } = payload;
        payload.onResolve = (result)=>{
            callProp(onResolve, result);
            const transitions2 = usedTransitions.current;
            const t2 = transitions2.find((t3)=>t3.key === key);
            if (!t2) return;
            if (result.cancelled && t2.phase != "update" /* UPDATE */ ) {
                return;
            }
            if (t2.ctrl.idle) {
                const idle = transitions2.every((t3)=>t3.ctrl.idle);
                if (t2.phase == "leave" /* LEAVE */ ) {
                    const expiry = callProp(expires, t2.item);
                    if (expiry !== false) {
                        const expiryMs = expiry === true ? 0 : expiry;
                        t2.expired = true;
                        if (!idle && expiryMs > 0) {
                            if (expiryMs <= 2147483647) t2.expirationId = setTimeout(forceUpdate, expiryMs);
                            return;
                        }
                    }
                }
                if (idle && transitions2.some((t3)=>t3.expired)) {
                    exitingTransitions.current.delete(t2);
                    if (exitBeforeEnter) {
                        forceChange.current = true;
                    }
                    forceUpdate();
                }
            }
        };
        const springs = getSprings(t.ctrl, payload);
        if (phase === "leave" /* LEAVE */  && exitBeforeEnter) {
            exitingTransitions.current.set(t, {
                phase,
                springs,
                payload
            });
        } else {
            changes.set(t, {
                phase,
                springs,
                payload
            });
        }
    });
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(SpringContext);
    const prevContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["usePrev"])(context);
    const hasContext = context !== prevContext && hasProps(context);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useIsomorphicLayoutEffect"])(()=>{
        if (hasContext) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(transitions, (t)=>{
                t.ctrl.start({
                    default: context
                });
            });
        }
    }, [
        context
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(changes, (_, t)=>{
        if (exitingTransitions.current.size) {
            const ind = transitions.findIndex((state)=>state.key === t.key);
            transitions.splice(ind, 1);
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useIsomorphicLayoutEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(exitingTransitions.current.size ? exitingTransitions.current : changes, ({ phase, payload }, t)=>{
            const { ctrl } = t;
            t.phase = phase;
            ref?.add(ctrl);
            if (hasContext && phase == "enter" /* ENTER */ ) {
                ctrl.start({
                    default: context
                });
            }
            if (payload) {
                replaceRef(ctrl, payload.ref);
                if ((ctrl.ref || ref) && !forceChange.current) {
                    ctrl.update(payload);
                } else {
                    ctrl.start(payload);
                    if (forceChange.current) {
                        forceChange.current = false;
                    }
                }
            }
        });
    }, reset ? void 0 : deps);
    const renderTransitions = (render)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Fragment, null, transitions.map((t, i)=>{
            const { springs } = changes.get(t) || t.ctrl;
            const elem = render({
                ...springs
            }, t.item, t, i);
            return elem && elem.type ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(elem.type, {
                ...elem.props,
                key: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].str(t.key) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].num(t.key) ? t.key : t.ctrl.id,
                ref: elem.ref
            }) : elem;
        }));
    return ref ? [
        renderTransitions,
        ref
    ] : renderTransitions;
}
var nextKey = 1;
function getKeys(items, { key, keys = key }, prevTransitions) {
    if (keys === null) {
        const reused = /* @__PURE__ */ new Set();
        return items.map((item)=>{
            const t = prevTransitions && prevTransitions.find((t2)=>t2.item === item && t2.phase !== "leave" /* LEAVE */  && !reused.has(t2));
            if (t) {
                reused.add(t);
                return t.key;
            }
            return nextKey++;
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(keys) ? items : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(keys) ? items.map(keys) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toArray"])(keys);
}
;
var useScroll = ({ container, ...springOptions } = {})=>{
    const [scrollValues, api] = useSpring(()=>({
            scrollX: 0,
            scrollY: 0,
            scrollXProgress: 0,
            scrollYProgress: 0,
            ...springOptions
        }), []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useIsomorphicLayoutEffect"])(()=>{
        const cleanupScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["onScroll"])(({ x, y })=>{
            api.start({
                scrollX: x.current,
                scrollXProgress: x.progress,
                scrollY: y.current,
                scrollYProgress: y.progress
            });
        }, {
            container: container?.current || void 0
        });
        return ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(Object.values(scrollValues), (value)=>value.stop());
            cleanupScroll();
        };
    }, []);
    return scrollValues;
};
;
var useResize = ({ container, ...springOptions })=>{
    const [sizeValues, api] = useSpring(()=>({
            width: 0,
            height: 0,
            ...springOptions
        }), []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useIsomorphicLayoutEffect"])(()=>{
        const cleanupScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["onResize"])(({ width, height })=>{
            api.start({
                width,
                height,
                immediate: sizeValues.width.get() === 0 || sizeValues.height.get() === 0
            });
        }, {
            container: container?.current || void 0
        });
        return ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(Object.values(sizeValues), (value)=>value.stop());
            cleanupScroll();
        };
    }, []);
    return sizeValues;
};
;
;
var defaultThresholdOptions = {
    any: 0,
    all: 1
};
function useInView(props, args) {
    const [isInView, setIsInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const propsFn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(props) && props;
    const springsProps = propsFn ? propsFn() : {};
    const { to: to2 = {}, from = {}, ...restSpringProps } = springsProps;
    const intersectionArguments = propsFn ? args : props;
    const [springs, api] = useSpring(()=>({
            from,
            ...restSpringProps
        }), []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useIsomorphicLayoutEffect"])(()=>{
        const element = ref.current;
        const { root, once, amount = "any", ...restArgs } = intersectionArguments ?? {};
        if (!element || once && isInView || typeof IntersectionObserver === "undefined") return;
        const activeIntersections = /* @__PURE__ */ new WeakMap();
        const onEnter = ()=>{
            if (to2) {
                api.start(to2);
            }
            setIsInView(true);
            const cleanup = ()=>{
                if (from) {
                    api.start(from);
                }
                setIsInView(false);
            };
            return once ? void 0 : cleanup;
        };
        const handleIntersection = (entries)=>{
            entries.forEach((entry)=>{
                const onLeave = activeIntersections.get(entry.target);
                if (entry.isIntersecting === Boolean(onLeave)) {
                    return;
                }
                if (entry.isIntersecting) {
                    const newOnLeave = onEnter();
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(newOnLeave)) {
                        activeIntersections.set(entry.target, newOnLeave);
                    } else {
                        observer.unobserve(entry.target);
                    }
                } else if (onLeave) {
                    onLeave();
                    activeIntersections.delete(entry.target);
                }
            });
        };
        const observer = new IntersectionObserver(handleIntersection, {
            root: root && root.current || void 0,
            threshold: typeof amount === "number" || Array.isArray(amount) ? amount : defaultThresholdOptions[amount],
            ...restArgs
        });
        observer.observe(element);
        return ()=>observer.unobserve(element);
    }, [
        intersectionArguments
    ]);
    if (propsFn) {
        return [
            ref,
            springs
        ];
    }
    return [
        ref,
        isInView
    ];
}
// src/components/Spring.tsx
function Spring({ children, ...props }) {
    return children(useSpring(props));
}
;
function Trail({ items, children, ...props }) {
    const trails = useTrail(items.length, props);
    return items.map((item, index)=>{
        const result = children(item, index);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(result) ? result(trails[index]) : result;
    });
}
// src/components/Transition.tsx
function Transition({ items, children, ...props }) {
    return useTransition(items, props)(children);
}
;
;
;
var Interpolation = class extends FrameValue {
    constructor(source, args){
        super();
        this.source = source;
        /** Equals false when in the frameloop */ this.idle = true;
        /** The inputs which are currently animating */ this._active = /* @__PURE__ */ new Set();
        this.calc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createInterpolator"])(...args);
        const value = this._get();
        const nodeType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$animated$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring_animated$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAnimatedType"])(value);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$animated$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring_animated$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAnimated"])(this, nodeType.create(value));
    }
    advance(_dt) {
        const value = this._get();
        const oldValue = this.get();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isEqual"])(value, oldValue)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$animated$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring_animated$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAnimated"])(this).setValue(value);
            this._onChange(value, this.idle);
        }
        if (!this.idle && checkIdle(this._active)) {
            becomeIdle(this);
        }
    }
    _get() {
        const inputs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].arr(this.source) ? this.source.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFluidValue"]) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toArray"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFluidValue"])(this.source));
        return this.calc(...inputs);
    }
    _start() {
        if (this.idle && !checkIdle(this._active)) {
            this.idle = false;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$animated$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring_animated$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPayload"])(this), (node)=>{
                node.done = false;
            });
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Globals"].skipAnimation) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$rafz$40$9$2e$7$2e$5$2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring_rafz$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["raf"].batchedUpdates(()=>this.advance());
                becomeIdle(this);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["frameLoop"].start(this);
            }
        }
    }
    // Observe our sources only when we're observed.
    _attach() {
        let priority = 1;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toArray"])(this.source), (source)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasFluidValue"])(source)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addFluidObserver"])(source, this);
            }
            if (isFrameValue(source)) {
                if (!source.idle) {
                    this._active.add(source);
                }
                priority = Math.max(priority, source.priority + 1);
            }
        });
        this.priority = priority;
        this._start();
    }
    // Stop observing our sources once we have no observers.
    _detach() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toArray"])(this.source), (source)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasFluidValue"])(source)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["removeFluidObserver"])(source, this);
            }
        });
        this._active.clear();
        becomeIdle(this);
    }
    /** @internal */ eventObserved(event) {
        if (event.type == "change") {
            if (event.idle) {
                this.advance();
            } else {
                this._active.add(event.parent);
                this._start();
            }
        } else if (event.type == "idle") {
            this._active.delete(event.parent);
        } else if (event.type == "priority") {
            this.priority = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toArray"])(this.source).reduce((highest, parent)=>Math.max(highest, (isFrameValue(parent) ? parent.priority : 0) + 1), 0);
        }
    }
};
function isIdle(source) {
    return source.idle !== false;
}
function checkIdle(active) {
    return !active.size || Array.from(active).every(isIdle);
}
function becomeIdle(self) {
    if (!self.idle) {
        self.idle = true;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$animated$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring_animated$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPayload"])(self), (node)=>{
            node.done = true;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["callFluidObservers"])(self, {
            type: "idle",
            parent: self
        });
    }
}
// src/interpolate.ts
var to = (source, ...args)=>new Interpolation(source, args);
var interpolate = (source, ...args)=>((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["deprecateInterpolate"])(), new Interpolation(source, args));
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Globals"].assign({
    createStringInterpolator: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createStringInterpolator"],
    to: (source, args)=>new Interpolation(source, args)
});
var update = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["frameLoop"].advance;
;
;
;
 //# sourceMappingURL=react-spring_core.modern.mjs.map
}}),
"[project]/node_modules/.pnpm/@react-spring+core@9.7.5_react@19.0.0/node_modules/@react-spring/core/dist/react-spring_core.modern.mjs [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$shared$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-spring+shared@9.7.5_react@19.0.0/node_modules/@react-spring/shared/dist/react-spring_shared.modern.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$animated$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring_animated$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-spring+animated@9.7.5_react@19.0.0/node_modules/@react-spring/animated/dist/react-spring_animated.modern.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$types$40$9$2e$7$2e$5$2f$node_modules$2f40$react$2d$spring$2f$types$2f$dist$2f$react$2d$spring_types$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-spring+types@9.7.5/node_modules/@react-spring/types/dist/react-spring_types.modern.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$spring$2b$core$40$9$2e$7$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-spring+core@9.7.5_react@19.0.0/node_modules/@react-spring/core/dist/react-spring_core.modern.mjs [app-ssr] (ecmascript) <locals>");
}}),

};

//# sourceMappingURL=4e8ae_%40react-spring_core_dist_react-spring_core_modern_mjs_bbf31f._.js.map