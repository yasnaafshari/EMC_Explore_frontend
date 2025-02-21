(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/6613d_@mui_material_2dd6bd._.js", {

"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/shouldSkipGeneratingVar.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>shouldSkipGeneratingVar)
});
function shouldSkipGeneratingVar(keys) {
    return !!keys[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!keys[0].match(/sxConfig$/) || // ends with sxConfig
    keys[0] === 'palette' && !!keys[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/excludeVariablesFromRoot.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * @internal These variables should not appear in the :root stylesheet when the `defaultColorScheme="dark"`
 */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const excludeVariablesFromRoot = (cssVarPrefix)=>[
        ...[
            ...Array(25)
        ].map((_, index)=>`--${cssVarPrefix ? `${cssVarPrefix}-` : ''}overlays-${index}`),
        `--${cssVarPrefix ? `${cssVarPrefix}-` : ''}palette-AppBar-darkBg`,
        `--${cssVarPrefix ? `${cssVarPrefix}-` : ''}palette-AppBar-darkColor`
    ];
const __TURBOPACK__default__export__ = excludeVariablesFromRoot;
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/createGetSelector.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$excludeVariablesFromRoot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/excludeVariablesFromRoot.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = (theme)=>(colorScheme, css)=>{
        const root = theme.rootSelector || ':root';
        const selector = theme.colorSchemeSelector;
        let rule = selector;
        if (selector === 'class') {
            rule = '.%s';
        }
        if (selector === 'data') {
            rule = '[data-%s]';
        }
        if (selector?.startsWith('data-') && !selector.includes('%s')) {
            // 'data-mui-color-scheme' -> '[data-mui-color-scheme="%s"]'
            rule = `[${selector}="%s"]`;
        }
        if (theme.defaultColorScheme === colorScheme) {
            if (colorScheme === 'dark') {
                const excludedVariables = {};
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$excludeVariablesFromRoot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(theme.cssVarPrefix).forEach((cssVar)=>{
                    excludedVariables[cssVar] = css[cssVar];
                    delete css[cssVar];
                });
                if (rule === 'media') {
                    return {
                        [root]: css,
                        [`@media (prefers-color-scheme: dark)`]: {
                            [root]: excludedVariables
                        }
                    };
                }
                if (rule) {
                    return {
                        [rule.replace('%s', colorScheme)]: excludedVariables,
                        [`${root}, ${rule.replace('%s', colorScheme)}`]: css
                    };
                }
                return {
                    [root]: {
                        ...css,
                        ...excludedVariables
                    }
                };
            }
            if (rule && rule !== 'media') {
                return `${root}, ${rule.replace('%s', String(colorScheme))}`;
            }
        } else if (colorScheme) {
            if (rule === 'media') {
                return {
                    [`@media (prefers-color-scheme: ${String(colorScheme)})`]: {
                        [root]: css
                    }
                };
            }
            if (rule) {
                return rule.replace('%s', String(colorScheme));
            }
        }
        return root;
    };
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/stringifyTheme.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* eslint-disable import/prefer-default-export */ __turbopack_esm__({
    "stringifyTheme": (()=>stringifyTheme)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/deepmerge/deepmerge.js [app-client] (ecmascript)");
;
function isSerializable(val) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(val) || typeof val === 'undefined' || typeof val === 'string' || typeof val === 'boolean' || typeof val === 'number' || Array.isArray(val);
}
function stringifyTheme(baseTheme = {}) {
    const serializableTheme = {
        ...baseTheme
    };
    function serializeTheme(object) {
        const array = Object.entries(object);
        // eslint-disable-next-line no-plusplus
        for(let index = 0; index < array.length; index++){
            const [key, value] = array[index];
            if (!isSerializable(value) || key.startsWith('unstable_')) {
                delete object[key];
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(value)) {
                object[key] = {
                    ...value
                };
                serializeTheme(object[key]);
            }
        }
    }
    serializeTheme(serializableTheme);
    return `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(serializableTheme, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/colors/common.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const common = {
    black: '#000',
    white: '#fff'
};
const __TURBOPACK__default__export__ = common;
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/colors/grey.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const grey = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161'
};
const __TURBOPACK__default__export__ = grey;
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/colors/blue.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const blue = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff'
};
const __TURBOPACK__default__export__ = blue;
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/colors/purple.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const purple = {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff'
};
const __TURBOPACK__default__export__ = purple;
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/colors/red.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const red = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000'
};
const __TURBOPACK__default__export__ = red;
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/colors/lightBlue.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const lightBlue = {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea'
};
const __TURBOPACK__default__export__ = lightBlue;
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/colors/green.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const green = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853'
};
const __TURBOPACK__default__export__ = green;
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/colors/orange.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const orange = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00'
};
const __TURBOPACK__default__export__ = orange;
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/createPalette.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "dark": (()=>dark),
    "default": (()=>createPalette),
    "light": (()=>light)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/deepmerge/deepmerge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/colors/common.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$grey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/colors/grey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+st_5f10f346196051285cfc2e46c43ad4ff/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$blue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/colors/blue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$purple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/colors/purple.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$red$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/colors/red.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$lightBlue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/colors/lightBlue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$green$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/colors/green.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$orange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/colors/orange.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
function getLight() {
    return {
        // The colors used to style the text.
        text: {
            // The most important text.
            primary: 'rgba(0, 0, 0, 0.87)',
            // Secondary text.
            secondary: 'rgba(0, 0, 0, 0.6)',
            // Disabled text have even lower visual prominence.
            disabled: 'rgba(0, 0, 0, 0.38)'
        },
        // The color used to divide different elements.
        divider: 'rgba(0, 0, 0, 0.12)',
        // The background colors used to style the surfaces.
        // Consistency between these values is important.
        background: {
            paper: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].white,
            default: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].white
        },
        // The colors used to style the action elements.
        action: {
            // The color of an active action like an icon button.
            active: 'rgba(0, 0, 0, 0.54)',
            // The color of an hovered action.
            hover: 'rgba(0, 0, 0, 0.04)',
            hoverOpacity: 0.04,
            // The color of a selected action.
            selected: 'rgba(0, 0, 0, 0.08)',
            selectedOpacity: 0.08,
            // The color of a disabled action.
            disabled: 'rgba(0, 0, 0, 0.26)',
            // The background color of a disabled action.
            disabledBackground: 'rgba(0, 0, 0, 0.12)',
            disabledOpacity: 0.38,
            focus: 'rgba(0, 0, 0, 0.12)',
            focusOpacity: 0.12,
            activatedOpacity: 0.12
        }
    };
}
const light = getLight();
function getDark() {
    return {
        text: {
            primary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].white,
            secondary: 'rgba(255, 255, 255, 0.7)',
            disabled: 'rgba(255, 255, 255, 0.5)',
            icon: 'rgba(255, 255, 255, 0.5)'
        },
        divider: 'rgba(255, 255, 255, 0.12)',
        background: {
            paper: '#121212',
            default: '#121212'
        },
        action: {
            active: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].white,
            hover: 'rgba(255, 255, 255, 0.08)',
            hoverOpacity: 0.08,
            selected: 'rgba(255, 255, 255, 0.16)',
            selectedOpacity: 0.16,
            disabled: 'rgba(255, 255, 255, 0.3)',
            disabledBackground: 'rgba(255, 255, 255, 0.12)',
            disabledOpacity: 0.38,
            focus: 'rgba(255, 255, 255, 0.12)',
            focusOpacity: 0.12,
            activatedOpacity: 0.24
        }
    };
}
const dark = getDark();
function addLightOrDark(intent, direction, shade, tonalOffset) {
    const tonalOffsetLight = tonalOffset.light || tonalOffset;
    const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
    if (!intent[direction]) {
        if (intent.hasOwnProperty(shade)) {
            intent[direction] = intent[shade];
        } else if (direction === 'light') {
            intent.light = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lighten"])(intent.main, tonalOffsetLight);
        } else if (direction === 'dark') {
            intent.dark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["darken"])(intent.main, tonalOffsetDark);
        }
    }
}
function getDefaultPrimary(mode = 'light') {
    if (mode === 'dark') {
        return {
            main: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$blue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][200],
            light: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$blue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][50],
            dark: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$blue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][400]
        };
    }
    return {
        main: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$blue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][700],
        light: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$blue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][400],
        dark: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$blue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][800]
    };
}
function getDefaultSecondary(mode = 'light') {
    if (mode === 'dark') {
        return {
            main: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$purple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][200],
            light: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$purple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][50],
            dark: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$purple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][400]
        };
    }
    return {
        main: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$purple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][500],
        light: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$purple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][300],
        dark: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$purple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][700]
    };
}
function getDefaultError(mode = 'light') {
    if (mode === 'dark') {
        return {
            main: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$red$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][500],
            light: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$red$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][300],
            dark: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$red$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][700]
        };
    }
    return {
        main: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$red$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][700],
        light: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$red$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][400],
        dark: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$red$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][800]
    };
}
function getDefaultInfo(mode = 'light') {
    if (mode === 'dark') {
        return {
            main: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$lightBlue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][400],
            light: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$lightBlue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][300],
            dark: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$lightBlue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][700]
        };
    }
    return {
        main: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$lightBlue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][700],
        light: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$lightBlue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][500],
        dark: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$lightBlue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][900]
    };
}
function getDefaultSuccess(mode = 'light') {
    if (mode === 'dark') {
        return {
            main: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$green$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][400],
            light: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$green$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][300],
            dark: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$green$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][700]
        };
    }
    return {
        main: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$green$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][800],
        light: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$green$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][500],
        dark: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$green$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][900]
    };
}
function getDefaultWarning(mode = 'light') {
    if (mode === 'dark') {
        return {
            main: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$orange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][400],
            light: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$orange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][300],
            dark: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$orange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][700]
        };
    }
    return {
        main: '#ed6c02',
        // closest to orange[800] that pass 3:1.
        light: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$orange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][500],
        dark: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$orange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][900]
    };
}
function createPalette(palette) {
    const { mode = 'light', contrastThreshold = 3, tonalOffset = 0.2, ...other } = palette;
    const primary = palette.primary || getDefaultPrimary(mode);
    const secondary = palette.secondary || getDefaultSecondary(mode);
    const error = palette.error || getDefaultError(mode);
    const info = palette.info || getDefaultInfo(mode);
    const success = palette.success || getDefaultSuccess(mode);
    const warning = palette.warning || getDefaultWarning(mode);
    // Use the same logic as
    // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
    // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54
    function getContrastText(background) {
        const contrastText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContrastRatio"])(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
        if ("TURBOPACK compile-time truthy", 1) {
            const contrast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContrastRatio"])(background, contrastText);
            if (contrast < 3) {
                console.error([
                    `MUI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`,
                    'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.',
                    'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'
                ].join('\n'));
            }
        }
        return contrastText;
    }
    const augmentColor = ({ color, name, mainShade = 500, lightShade = 300, darkShade = 700 })=>{
        color = {
            ...color
        };
        if (!color.main && color[mainShade]) {
            color.main = color[mainShade];
        }
        if (!color.hasOwnProperty('main')) {
            throw new Error(("TURBOPACK compile-time truthy", 1) ? `MUI: The color${name ? ` (${name})` : ''} provided to augmentColor(color) is invalid.\n` + `The color object needs to have a \`main\` property or a \`${mainShade}\` property.` : ("TURBOPACK unreachable", undefined));
        }
        if (typeof color.main !== 'string') {
            throw new Error(("TURBOPACK compile-time truthy", 1) ? `MUI: The color${name ? ` (${name})` : ''} provided to augmentColor(color) is invalid.\n` + `\`color.main\` should be a string, but \`${JSON.stringify(color.main)}\` was provided instead.\n` + '\n' + 'Did you intend to use one of the following approaches?\n' + '\n' + 'import { green } from "@mui/material/colors";\n' + '\n' + 'const theme1 = createTheme({ palette: {\n' + '  primary: green,\n' + '} });\n' + '\n' + 'const theme2 = createTheme({ palette: {\n' + '  primary: { main: green[500] },\n' + '} });' : ("TURBOPACK unreachable", undefined));
        }
        addLightOrDark(color, 'light', lightShade, tonalOffset);
        addLightOrDark(color, 'dark', darkShade, tonalOffset);
        if (!color.contrastText) {
            color.contrastText = getContrastText(color.main);
        }
        return color;
    };
    let modeHydrated;
    if (mode === 'light') {
        modeHydrated = getLight();
    } else if (mode === 'dark') {
        modeHydrated = getDark();
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (!modeHydrated) {
            console.error(`MUI: The palette mode \`${mode}\` is not supported.`);
        }
    }
    const paletteOutput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        // A collection of common colors.
        common: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        },
        // prevent mutable object.
        // The palette mode, can be light or dark.
        mode,
        // The colors used to represent primary interface elements for a user.
        primary: augmentColor({
            color: primary,
            name: 'primary'
        }),
        // The colors used to represent secondary interface elements for a user.
        secondary: augmentColor({
            color: secondary,
            name: 'secondary',
            mainShade: 'A400',
            lightShade: 'A200',
            darkShade: 'A700'
        }),
        // The colors used to represent interface elements that the user should be made aware of.
        error: augmentColor({
            color: error,
            name: 'error'
        }),
        // The colors used to represent potentially dangerous actions or important messages.
        warning: augmentColor({
            color: warning,
            name: 'warning'
        }),
        // The colors used to present information to the user that is neutral and not necessarily important.
        info: augmentColor({
            color: info,
            name: 'info'
        }),
        // The colors used to indicate the successful completion of an action that user triggered.
        success: augmentColor({
            color: success,
            name: 'success'
        }),
        // The grey colors.
        grey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$colors$2f$grey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold,
        // Takes a background color and returns the text color that maximizes the contrast.
        getContrastText,
        // Generate a rich color object.
        augmentColor,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset,
        // The light and dark mode object.
        ...modeHydrated
    }, other);
    return paletteOutput;
}
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/createMixins.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>createMixins)
});
function createMixins(breakpoints, mixins) {
    return {
        toolbar: {
            minHeight: 56,
            [breakpoints.up('xs')]: {
                '@media (orientation: landscape)': {
                    minHeight: 48
                }
            },
            [breakpoints.up('sm')]: {
                minHeight: 64
            }
        },
        ...mixins
    };
}
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/shadows.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;
function createShadow(...px) {
    return [
        `${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`,
        `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`,
        `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`
    ].join(',');
}
// Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss
const shadows = [
    'none',
    createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
];
const __TURBOPACK__default__export__ = shadows;
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/createTypography.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>createTypography)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/deepmerge/deepmerge.js [app-client] (ecmascript)");
;
function round(value) {
    return Math.round(value * 1e5) / 1e5;
}
const caseAllCaps = {
    textTransform: 'uppercase'
};
const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
function createTypography(palette, typography) {
    const { fontFamily = defaultFontFamily, // The default font size of the Material Specification.
    fontSize = 14, // px
    fontWeightLight = 300, fontWeightRegular = 400, fontWeightMedium = 500, fontWeightBold = 700, // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize = 16, // Apply the CSS properties to all the variants.
    allVariants, pxToRem: pxToRem2, ...other } = typeof typography === 'function' ? typography(palette) : typography;
    if ("TURBOPACK compile-time truthy", 1) {
        if (typeof fontSize !== 'number') {
            console.error('MUI: `fontSize` is required to be a number.');
        }
        if (typeof htmlFontSize !== 'number') {
            console.error('MUI: `htmlFontSize` is required to be a number.');
        }
    }
    const coef = fontSize / 14;
    const pxToRem = pxToRem2 || ((size)=>`${size / htmlFontSize * coef}rem`);
    const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing)=>({
            fontFamily,
            fontWeight,
            fontSize: pxToRem(size),
            // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
            lineHeight,
            // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
            // across font-families can cause issues with the kerning.
            ...fontFamily === defaultFontFamily ? {
                letterSpacing: `${round(letterSpacing / size)}em`
            } : {},
            ...casing,
            ...allVariants
        });
    const variants = {
        h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
        h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
        h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
        h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
        h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
        h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
        subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
        subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
        body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
        body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
        button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
        caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
        overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
        // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
        inherit: {
            fontFamily: 'inherit',
            fontWeight: 'inherit',
            fontSize: 'inherit',
            lineHeight: 'inherit',
            letterSpacing: 'inherit'
        }
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        htmlFontSize,
        pxToRem,
        fontFamily,
        fontSize,
        fontWeightLight,
        fontWeightRegular,
        fontWeightMedium,
        fontWeightBold,
        ...variants
    }, other, {
        clone: false // No need to clone deep
    });
}
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/createTransitions.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
__turbopack_esm__({
    "default": (()=>createTransitions),
    "duration": (()=>duration),
    "easing": (()=>easing)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const easing = {
    // This is the most common easing curve.
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Objects enter the screen at full velocity from off-screen and
    // slowly decelerate to a resting point.
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    // The sharp curve is used by objects that may return to the screen at any time.
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
};
const duration = {
    shortest: 150,
    shorter: 200,
    short: 250,
    // most basic recommended timing
    standard: 300,
    // this is to be used in complex animations
    complex: 375,
    // recommended when something is entering screen
    enteringScreen: 225,
    // recommended when something is leaving screen
    leavingScreen: 195
};
function formatMs(milliseconds) {
    return `${Math.round(milliseconds)}ms`;
}
function getAutoHeightDuration(height) {
    if (!height) {
        return 0;
    }
    const constant = height / 36;
    // https://www.desmos.com/calculator/vbrp3ggqet
    return Math.min(Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10), 3000);
}
function createTransitions(inputTransitions) {
    const mergedEasing = {
        ...easing,
        ...inputTransitions.easing
    };
    const mergedDuration = {
        ...duration,
        ...inputTransitions.duration
    };
    const create = (props = [
        'all'
    ], options = {})=>{
        const { duration: durationOption = mergedDuration.standard, easing: easingOption = mergedEasing.easeInOut, delay = 0, ...other } = options;
        if ("TURBOPACK compile-time truthy", 1) {
            const isString = (value)=>typeof value === 'string';
            const isNumber = (value)=>!Number.isNaN(parseFloat(value));
            if (!isString(props) && !Array.isArray(props)) {
                console.error('MUI: Argument "props" must be a string or Array.');
            }
            if (!isNumber(durationOption) && !isString(durationOption)) {
                console.error(`MUI: Argument "duration" must be a number or a string but found ${durationOption}.`);
            }
            if (!isString(easingOption)) {
                console.error('MUI: Argument "easing" must be a string.');
            }
            if (!isNumber(delay) && !isString(delay)) {
                console.error('MUI: Argument "delay" must be a number or a string.');
            }
            if (typeof options !== 'object') {
                console.error([
                    'MUI: Secong argument of transition.create must be an object.',
                    "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"
                ].join('\n'));
            }
            if (Object.keys(other).length !== 0) {
                console.error(`MUI: Unrecognized argument(s) [${Object.keys(other).join(',')}].`);
            }
        }
        return (Array.isArray(props) ? props : [
            props
        ]).map((animatedProp)=>`${animatedProp} ${typeof durationOption === 'string' ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === 'string' ? delay : formatMs(delay)}`).join(',');
    };
    return {
        getAutoHeightDuration,
        create,
        ...inputTransitions,
        easing: mergedEasing,
        duration: mergedDuration
    };
}
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/zIndex.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// We need to centralize the zIndex definitions as they work
// like global values in the browser.
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const zIndex = {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
};
const __TURBOPACK__default__export__ = zIndex;
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/createThemeNoVars.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createMuiTheme": (()=>createMuiTheme),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createPalette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/createPalette.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+st_5f10f346196051285cfc2e46c43ad4ff/node_modules/@mui/system/esm/createTheme/createTheme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/deepmerge/deepmerge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createMixins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/createMixins.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$shadows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/shadows.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTypography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/createTypography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTransitions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/createTransitions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$zIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/zIndex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$defaultSxConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_defaultSxConfig$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+st_5f10f346196051285cfc2e46c43ad4ff/node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js [app-client] (ecmascript) <export default as unstable_defaultSxConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+st_5f10f346196051285cfc2e46c43ad4ff/node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$stringifyTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/stringifyTheme.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
function createThemeNoVars(options = {}, ...args) {
    const { breakpoints: breakpointsInput, mixins: mixinsInput = {}, spacing: spacingInput, palette: paletteInput = {}, transitions: transitionsInput = {}, typography: typographyInput = {}, shape: shapeInput, ...other } = options;
    if (options.vars) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'MUI: `vars` is a private field used for CSS variables support.\n' + 'Please use another name.' : ("TURBOPACK unreachable", undefined));
    }
    const palette = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createPalette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(paletteInput);
    const systemTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(options);
    let muiTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(systemTheme, {
        mixins: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createMixins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(systemTheme.breakpoints, mixinsInput),
        palette,
        // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
        shadows: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$shadows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].slice(),
        typography: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTypography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(palette, typographyInput),
        transitions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTransitions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(transitionsInput),
        zIndex: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$zIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        }
    });
    muiTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(muiTheme, other);
    muiTheme = args.reduce((acc, argument)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(acc, argument), muiTheme);
    if ("TURBOPACK compile-time truthy", 1) {
        // TODO v6: Refactor to use globalStateClassesMapping from @mui/utils once `readOnly` state class is used in Rating component.
        const stateClasses = [
            'active',
            'checked',
            'completed',
            'disabled',
            'error',
            'expanded',
            'focused',
            'focusVisible',
            'required',
            'selected'
        ];
        const traverse = (node, component)=>{
            let key;
            // eslint-disable-next-line guard-for-in
            for(key in node){
                const child = node[key];
                if (stateClasses.includes(key) && Object.keys(child).length > 0) {
                    if ("TURBOPACK compile-time truthy", 1) {
                        const stateClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('', key);
                        console.error([
                            `MUI: The \`${component}\` component increases ` + `the CSS specificity of the \`${key}\` internal state.`,
                            'You can not override it like this: ',
                            JSON.stringify(node, null, 2),
                            '',
                            `Instead, you need to use the '&.${stateClass}' syntax:`,
                            JSON.stringify({
                                root: {
                                    [`&.${stateClass}`]: child
                                }
                            }, null, 2),
                            '',
                            'https://mui.com/r/state-classes-guide'
                        ].join('\n'));
                    }
                    // Remove the style to prevent global conflicts.
                    node[key] = {};
                }
            }
        };
        Object.keys(muiTheme.components).forEach((component)=>{
            const styleOverrides = muiTheme.components[component].styleOverrides;
            if (styleOverrides && component.startsWith('Mui')) {
                traverse(styleOverrides, component);
            }
        });
    }
    muiTheme.unstable_sxConfig = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$defaultSxConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_defaultSxConfig$3e$__["unstable_defaultSxConfig"],
        ...other?.unstable_sxConfig
    };
    muiTheme.unstable_sx = function sx(props) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            sx: props,
            theme: this
        });
    };
    muiTheme.toRuntimeSource = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$stringifyTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyTheme"]; // for Pigment CSS integration
    return muiTheme;
}
let warnedOnce = false;
function createMuiTheme(...args) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (!warnedOnce) {
            warnedOnce = true;
            console.error([
                'MUI: the createMuiTheme function was renamed to createTheme.',
                '',
                "You should use `import { createTheme } from '@mui/material/styles'`"
            ].join('\n'));
        }
    }
    return createThemeNoVars(...args);
}
const __TURBOPACK__default__export__ = createThemeNoVars;
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/getOverlayAlpha.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Inspired by https://github.com/material-components/material-components-ios/blob/bca36107405594d5b7b16265a5b0ed698f85a5ee/components/Elevation/src/UIColor%2BMaterialElevation.m#L61
__turbopack_esm__({
    "default": (()=>getOverlayAlpha)
});
function getOverlayAlpha(elevation) {
    let alphaValue;
    if (elevation < 1) {
        alphaValue = 5.11916 * elevation ** 2;
    } else {
        alphaValue = 4.5 * Math.log(elevation + 1) + 2;
    }
    return Math.round(alphaValue * 10) / 1000;
}
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/createColorScheme.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>createColorScheme),
    "getOpacity": (()=>getOpacity),
    "getOverlays": (()=>getOverlays)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createPalette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/createPalette.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$getOverlayAlpha$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/getOverlayAlpha.js [app-client] (ecmascript)");
;
;
const defaultDarkOverlays = [
    ...Array(25)
].map((_, index)=>{
    if (index === 0) {
        return 'none';
    }
    const overlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$getOverlayAlpha$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(index);
    return `linear-gradient(rgba(255 255 255 / ${overlay}), rgba(255 255 255 / ${overlay}))`;
});
function getOpacity(mode) {
    return {
        inputPlaceholder: mode === 'dark' ? 0.5 : 0.42,
        inputUnderline: mode === 'dark' ? 0.7 : 0.42,
        switchTrackDisabled: mode === 'dark' ? 0.2 : 0.12,
        switchTrack: mode === 'dark' ? 0.3 : 0.38
    };
}
function getOverlays(mode) {
    return mode === 'dark' ? defaultDarkOverlays : [];
}
function createColorScheme(options) {
    const { palette: paletteInput = {
        mode: 'light'
    }, // need to cast to avoid module augmentation test
    opacity, overlays, ...rest } = options;
    const palette = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createPalette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(paletteInput);
    return {
        palette,
        opacity: {
            ...getOpacity(palette.mode),
            ...opacity
        },
        overlays: overlays || getOverlays(palette.mode),
        ...rest
    };
}
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/createThemeWithVars.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createGetCssVar": (()=>createGetCssVar),
    "default": (()=>createThemeWithVars)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$shouldSkipGeneratingVar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/shouldSkipGeneratingVar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$cssVars$2f$prepareTypographyVars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__prepareTypographyVars$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+st_5f10f346196051285cfc2e46c43ad4ff/node_modules/@mui/system/esm/cssVars/prepareTypographyVars.js [app-client] (ecmascript) <export default as prepareTypographyVars>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+st_5f10f346196051285cfc2e46c43ad4ff/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/deepmerge/deepmerge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createGetSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/createGetSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$cssVars$2f$prepareCssVars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__prepareCssVars$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+st_5f10f346196051285cfc2e46c43ad4ff/node_modules/@mui/system/esm/cssVars/prepareCssVars.js [app-client] (ecmascript) <export default as prepareCssVars>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createSpacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createSpacing$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+st_5f10f346196051285cfc2e46c43ad4ff/node_modules/@mui/system/esm/createTheme/createSpacing.js [app-client] (ecmascript) <export default as createSpacing>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+st_5f10f346196051285cfc2e46c43ad4ff/node_modules/@mui/system/esm/spacing/spacing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$cssVars$2f$getColorSchemeSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+st_5f10f346196051285cfc2e46c43ad4ff/node_modules/@mui/system/esm/cssVars/getColorSchemeSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$defaultSxConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_defaultSxConfig$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+st_5f10f346196051285cfc2e46c43ad4ff/node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js [app-client] (ecmascript) <export default as unstable_defaultSxConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+st_5f10f346196051285cfc2e46c43ad4ff/node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$stringifyTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/stringifyTheme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$cssVars$2f$createGetCssVar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_createGetCssVar$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+st_5f10f346196051285cfc2e46c43ad4ff/node_modules/@mui/system/esm/cssVars/createGetCssVar.js [app-client] (ecmascript) <export default as unstable_createGetCssVar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createThemeNoVars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/createThemeNoVars.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createColorScheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/createColorScheme.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
function assignNode(obj, keys) {
    keys.forEach((k)=>{
        if (!obj[k]) {
            obj[k] = {};
        }
    });
}
function setColor(obj, key, defaultValue) {
    if (!obj[key] && defaultValue) {
        obj[key] = defaultValue;
    }
}
function toRgb(color) {
    if (typeof color !== 'string' || !color.startsWith('hsl')) {
        return color;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hslToRgb"])(color);
}
function setColorChannel(obj, key) {
    if (!(`${key}Channel` in obj)) {
        // custom channel token is not provided, generate one.
        // if channel token can't be generated, show a warning.
        obj[`${key}Channel`] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeColorChannel"])(toRgb(obj[key]), `MUI: Can't create \`palette.${key}Channel\` because \`palette.${key}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` + '\n' + `To suppress this warning, you need to explicitly provide the \`palette.${key}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`);
    }
}
function getSpacingVal(spacingInput) {
    if (typeof spacingInput === 'number') {
        return `${spacingInput}px`;
    }
    if (typeof spacingInput === 'string' || typeof spacingInput === 'function' || Array.isArray(spacingInput)) {
        return spacingInput;
    }
    return '8px';
}
const silent = (fn)=>{
    try {
        return fn();
    } catch (error) {
    // ignore error
    }
    return undefined;
};
const createGetCssVar = (cssVarPrefix = 'mui')=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$cssVars$2f$createGetCssVar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_createGetCssVar$3e$__["unstable_createGetCssVar"])(cssVarPrefix);
function attachColorScheme(colorSchemes, scheme, restTheme, colorScheme) {
    if (!scheme) {
        return undefined;
    }
    scheme = scheme === true ? {} : scheme;
    const mode = colorScheme === 'dark' ? 'dark' : 'light';
    if (!restTheme) {
        colorSchemes[colorScheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createColorScheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            ...scheme,
            palette: {
                mode,
                ...scheme?.palette
            }
        });
        return undefined;
    }
    const { palette, ...muiTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createThemeNoVars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ...restTheme,
        palette: {
            mode,
            ...scheme?.palette
        }
    });
    colorSchemes[colorScheme] = {
        ...scheme,
        palette,
        opacity: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createColorScheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOpacity"])(mode),
            ...scheme?.opacity
        },
        overlays: scheme?.overlays || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createColorScheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverlays"])(mode)
    };
    return muiTheme;
}
function createThemeWithVars(options = {}, ...args) {
    const { colorSchemes: colorSchemesInput = {
        light: true
    }, defaultColorScheme: defaultColorSchemeInput, disableCssColorScheme = false, cssVarPrefix = 'mui', shouldSkipGeneratingVar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$shouldSkipGeneratingVar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], colorSchemeSelector: selector = colorSchemesInput.light && colorSchemesInput.dark ? 'media' : undefined, rootSelector = ':root', ...input } = options;
    const firstColorScheme = Object.keys(colorSchemesInput)[0];
    const defaultColorScheme = defaultColorSchemeInput || (colorSchemesInput.light && firstColorScheme !== 'light' ? 'light' : firstColorScheme);
    const getCssVar = createGetCssVar(cssVarPrefix);
    const { [defaultColorScheme]: defaultSchemeInput, light: builtInLight, dark: builtInDark, ...customColorSchemes } = colorSchemesInput;
    const colorSchemes = {
        ...customColorSchemes
    };
    let defaultScheme = defaultSchemeInput;
    // For built-in light and dark color schemes, ensure that the value is valid if they are the default color scheme.
    if (defaultColorScheme === 'dark' && !('dark' in colorSchemesInput) || defaultColorScheme === 'light' && !('light' in colorSchemesInput)) {
        defaultScheme = true;
    }
    if (!defaultScheme) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? `MUI: The \`colorSchemes.${defaultColorScheme}\` option is either missing or invalid.` : ("TURBOPACK unreachable", undefined));
    }
    // Create the palette for the default color scheme, either `light`, `dark`, or custom color scheme.
    const muiTheme = attachColorScheme(colorSchemes, defaultScheme, input, defaultColorScheme);
    if (builtInLight && !colorSchemes.light) {
        attachColorScheme(colorSchemes, builtInLight, undefined, 'light');
    }
    if (builtInDark && !colorSchemes.dark) {
        attachColorScheme(colorSchemes, builtInDark, undefined, 'dark');
    }
    let theme = {
        defaultColorScheme,
        ...muiTheme,
        cssVarPrefix,
        colorSchemeSelector: selector,
        rootSelector,
        getCssVar,
        colorSchemes,
        font: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$cssVars$2f$prepareTypographyVars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__prepareTypographyVars$3e$__["prepareTypographyVars"])(muiTheme.typography),
            ...muiTheme.font
        },
        spacing: getSpacingVal(input.spacing)
    };
    Object.keys(theme.colorSchemes).forEach((key)=>{
        const palette = theme.colorSchemes[key].palette;
        const setCssVarColor = (cssVar)=>{
            const tokens = cssVar.split('-');
            const color = tokens[1];
            const colorToken = tokens[2];
            return getCssVar(cssVar, palette[color][colorToken]);
        };
        // attach black & white channels to common node
        if (palette.mode === 'light') {
            setColor(palette.common, 'background', '#fff');
            setColor(palette.common, 'onBackground', '#000');
        }
        if (palette.mode === 'dark') {
            setColor(palette.common, 'background', '#000');
            setColor(palette.common, 'onBackground', '#fff');
        }
        // assign component variables
        assignNode(palette, [
            'Alert',
            'AppBar',
            'Avatar',
            'Button',
            'Chip',
            'FilledInput',
            'LinearProgress',
            'Skeleton',
            'Slider',
            'SnackbarContent',
            'SpeedDialAction',
            'StepConnector',
            'StepContent',
            'Switch',
            'TableCell',
            'Tooltip'
        ]);
        if (palette.mode === 'light') {
            setColor(palette.Alert, 'errorColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.error.light, 0.6));
            setColor(palette.Alert, 'infoColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.info.light, 0.6));
            setColor(palette.Alert, 'successColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.success.light, 0.6));
            setColor(palette.Alert, 'warningColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.warning.light, 0.6));
            setColor(palette.Alert, 'errorFilledBg', setCssVarColor('palette-error-main'));
            setColor(palette.Alert, 'infoFilledBg', setCssVarColor('palette-info-main'));
            setColor(palette.Alert, 'successFilledBg', setCssVarColor('palette-success-main'));
            setColor(palette.Alert, 'warningFilledBg', setCssVarColor('palette-warning-main'));
            setColor(palette.Alert, 'errorFilledColor', silent(()=>palette.getContrastText(palette.error.main)));
            setColor(palette.Alert, 'infoFilledColor', silent(()=>palette.getContrastText(palette.info.main)));
            setColor(palette.Alert, 'successFilledColor', silent(()=>palette.getContrastText(palette.success.main)));
            setColor(palette.Alert, 'warningFilledColor', silent(()=>palette.getContrastText(palette.warning.main)));
            setColor(palette.Alert, 'errorStandardBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.error.light, 0.9));
            setColor(palette.Alert, 'infoStandardBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.info.light, 0.9));
            setColor(palette.Alert, 'successStandardBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.success.light, 0.9));
            setColor(palette.Alert, 'warningStandardBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.warning.light, 0.9));
            setColor(palette.Alert, 'errorIconColor', setCssVarColor('palette-error-main'));
            setColor(palette.Alert, 'infoIconColor', setCssVarColor('palette-info-main'));
            setColor(palette.Alert, 'successIconColor', setCssVarColor('palette-success-main'));
            setColor(palette.Alert, 'warningIconColor', setCssVarColor('palette-warning-main'));
            setColor(palette.AppBar, 'defaultBg', setCssVarColor('palette-grey-100'));
            setColor(palette.Avatar, 'defaultBg', setCssVarColor('palette-grey-400'));
            setColor(palette.Button, 'inheritContainedBg', setCssVarColor('palette-grey-300'));
            setColor(palette.Button, 'inheritContainedHoverBg', setCssVarColor('palette-grey-A100'));
            setColor(palette.Chip, 'defaultBorder', setCssVarColor('palette-grey-400'));
            setColor(palette.Chip, 'defaultAvatarColor', setCssVarColor('palette-grey-700'));
            setColor(palette.Chip, 'defaultIconColor', setCssVarColor('palette-grey-700'));
            setColor(palette.FilledInput, 'bg', 'rgba(0, 0, 0, 0.06)');
            setColor(palette.FilledInput, 'hoverBg', 'rgba(0, 0, 0, 0.09)');
            setColor(palette.FilledInput, 'disabledBg', 'rgba(0, 0, 0, 0.12)');
            setColor(palette.LinearProgress, 'primaryBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.primary.main, 0.62));
            setColor(palette.LinearProgress, 'secondaryBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.secondary.main, 0.62));
            setColor(palette.LinearProgress, 'errorBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.error.main, 0.62));
            setColor(palette.LinearProgress, 'infoBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.info.main, 0.62));
            setColor(palette.LinearProgress, 'successBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.success.main, 0.62));
            setColor(palette.LinearProgress, 'warningBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.warning.main, 0.62));
            setColor(palette.Skeleton, 'bg', `rgba(${setCssVarColor('palette-text-primaryChannel')} / 0.11)`);
            setColor(palette.Slider, 'primaryTrack', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.primary.main, 0.62));
            setColor(palette.Slider, 'secondaryTrack', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.secondary.main, 0.62));
            setColor(palette.Slider, 'errorTrack', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.error.main, 0.62));
            setColor(palette.Slider, 'infoTrack', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.info.main, 0.62));
            setColor(palette.Slider, 'successTrack', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.success.main, 0.62));
            setColor(palette.Slider, 'warningTrack', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.warning.main, 0.62));
            const snackbarContentBackground = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeEmphasize"])(palette.background.default, 0.8);
            setColor(palette.SnackbarContent, 'bg', snackbarContentBackground);
            setColor(palette.SnackbarContent, 'color', silent(()=>palette.getContrastText(snackbarContentBackground)));
            setColor(palette.SpeedDialAction, 'fabHoverBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeEmphasize"])(palette.background.paper, 0.15));
            setColor(palette.StepConnector, 'border', setCssVarColor('palette-grey-400'));
            setColor(palette.StepContent, 'border', setCssVarColor('palette-grey-400'));
            setColor(palette.Switch, 'defaultColor', setCssVarColor('palette-common-white'));
            setColor(palette.Switch, 'defaultDisabledColor', setCssVarColor('palette-grey-100'));
            setColor(palette.Switch, 'primaryDisabledColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.primary.main, 0.62));
            setColor(palette.Switch, 'secondaryDisabledColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.secondary.main, 0.62));
            setColor(palette.Switch, 'errorDisabledColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.error.main, 0.62));
            setColor(palette.Switch, 'infoDisabledColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.info.main, 0.62));
            setColor(palette.Switch, 'successDisabledColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.success.main, 0.62));
            setColor(palette.Switch, 'warningDisabledColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.warning.main, 0.62));
            setColor(palette.TableCell, 'border', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeLighten"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeAlpha"])(palette.divider, 1), 0.88));
            setColor(palette.Tooltip, 'bg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeAlpha"])(palette.grey[700], 0.92));
        }
        if (palette.mode === 'dark') {
            setColor(palette.Alert, 'errorColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.error.light, 0.6));
            setColor(palette.Alert, 'infoColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.info.light, 0.6));
            setColor(palette.Alert, 'successColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.success.light, 0.6));
            setColor(palette.Alert, 'warningColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeLighten"])(palette.warning.light, 0.6));
            setColor(palette.Alert, 'errorFilledBg', setCssVarColor('palette-error-dark'));
            setColor(palette.Alert, 'infoFilledBg', setCssVarColor('palette-info-dark'));
            setColor(palette.Alert, 'successFilledBg', setCssVarColor('palette-success-dark'));
            setColor(palette.Alert, 'warningFilledBg', setCssVarColor('palette-warning-dark'));
            setColor(palette.Alert, 'errorFilledColor', silent(()=>palette.getContrastText(palette.error.dark)));
            setColor(palette.Alert, 'infoFilledColor', silent(()=>palette.getContrastText(palette.info.dark)));
            setColor(palette.Alert, 'successFilledColor', silent(()=>palette.getContrastText(palette.success.dark)));
            setColor(palette.Alert, 'warningFilledColor', silent(()=>palette.getContrastText(palette.warning.dark)));
            setColor(palette.Alert, 'errorStandardBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.error.light, 0.9));
            setColor(palette.Alert, 'infoStandardBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.info.light, 0.9));
            setColor(palette.Alert, 'successStandardBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.success.light, 0.9));
            setColor(palette.Alert, 'warningStandardBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.warning.light, 0.9));
            setColor(palette.Alert, 'errorIconColor', setCssVarColor('palette-error-main'));
            setColor(palette.Alert, 'infoIconColor', setCssVarColor('palette-info-main'));
            setColor(palette.Alert, 'successIconColor', setCssVarColor('palette-success-main'));
            setColor(palette.Alert, 'warningIconColor', setCssVarColor('palette-warning-main'));
            setColor(palette.AppBar, 'defaultBg', setCssVarColor('palette-grey-900'));
            setColor(palette.AppBar, 'darkBg', setCssVarColor('palette-background-paper')); // specific for dark mode
            setColor(palette.AppBar, 'darkColor', setCssVarColor('palette-text-primary')); // specific for dark mode
            setColor(palette.Avatar, 'defaultBg', setCssVarColor('palette-grey-600'));
            setColor(palette.Button, 'inheritContainedBg', setCssVarColor('palette-grey-800'));
            setColor(palette.Button, 'inheritContainedHoverBg', setCssVarColor('palette-grey-700'));
            setColor(palette.Chip, 'defaultBorder', setCssVarColor('palette-grey-700'));
            setColor(palette.Chip, 'defaultAvatarColor', setCssVarColor('palette-grey-300'));
            setColor(palette.Chip, 'defaultIconColor', setCssVarColor('palette-grey-300'));
            setColor(palette.FilledInput, 'bg', 'rgba(255, 255, 255, 0.09)');
            setColor(palette.FilledInput, 'hoverBg', 'rgba(255, 255, 255, 0.13)');
            setColor(palette.FilledInput, 'disabledBg', 'rgba(255, 255, 255, 0.12)');
            setColor(palette.LinearProgress, 'primaryBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.primary.main, 0.5));
            setColor(palette.LinearProgress, 'secondaryBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.secondary.main, 0.5));
            setColor(palette.LinearProgress, 'errorBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.error.main, 0.5));
            setColor(palette.LinearProgress, 'infoBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.info.main, 0.5));
            setColor(palette.LinearProgress, 'successBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.success.main, 0.5));
            setColor(palette.LinearProgress, 'warningBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.warning.main, 0.5));
            setColor(palette.Skeleton, 'bg', `rgba(${setCssVarColor('palette-text-primaryChannel')} / 0.13)`);
            setColor(palette.Slider, 'primaryTrack', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.primary.main, 0.5));
            setColor(palette.Slider, 'secondaryTrack', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.secondary.main, 0.5));
            setColor(palette.Slider, 'errorTrack', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.error.main, 0.5));
            setColor(palette.Slider, 'infoTrack', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.info.main, 0.5));
            setColor(palette.Slider, 'successTrack', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.success.main, 0.5));
            setColor(palette.Slider, 'warningTrack', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.warning.main, 0.5));
            const snackbarContentBackground = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeEmphasize"])(palette.background.default, 0.98);
            setColor(palette.SnackbarContent, 'bg', snackbarContentBackground);
            setColor(palette.SnackbarContent, 'color', silent(()=>palette.getContrastText(snackbarContentBackground)));
            setColor(palette.SpeedDialAction, 'fabHoverBg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeEmphasize"])(palette.background.paper, 0.15));
            setColor(palette.StepConnector, 'border', setCssVarColor('palette-grey-600'));
            setColor(palette.StepContent, 'border', setCssVarColor('palette-grey-600'));
            setColor(palette.Switch, 'defaultColor', setCssVarColor('palette-grey-300'));
            setColor(palette.Switch, 'defaultDisabledColor', setCssVarColor('palette-grey-600'));
            setColor(palette.Switch, 'primaryDisabledColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.primary.main, 0.55));
            setColor(palette.Switch, 'secondaryDisabledColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.secondary.main, 0.55));
            setColor(palette.Switch, 'errorDisabledColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.error.main, 0.55));
            setColor(palette.Switch, 'infoDisabledColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.info.main, 0.55));
            setColor(palette.Switch, 'successDisabledColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.success.main, 0.55));
            setColor(palette.Switch, 'warningDisabledColor', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeDarken"])(palette.warning.main, 0.55));
            setColor(palette.TableCell, 'border', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeDarken"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeAlpha"])(palette.divider, 1), 0.68));
            setColor(palette.Tooltip, 'bg', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeAlpha"])(palette.grey[700], 0.92));
        }
        // MUI X - DataGrid needs this token.
        setColorChannel(palette.background, 'default');
        // added for consistency with the `background.default` token
        setColorChannel(palette.background, 'paper');
        setColorChannel(palette.common, 'background');
        setColorChannel(palette.common, 'onBackground');
        setColorChannel(palette, 'divider');
        Object.keys(palette).forEach((color)=>{
            const colors = palette[color];
            // The default palettes (primary, secondary, error, info, success, and warning) errors are handled by the above `createTheme(...)`.
            if (color !== 'tonalOffset' && colors && typeof colors === 'object') {
                // Silent the error for custom palettes.
                if (colors.main) {
                    setColor(palette[color], 'mainChannel', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeColorChannel"])(toRgb(colors.main)));
                }
                if (colors.light) {
                    setColor(palette[color], 'lightChannel', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeColorChannel"])(toRgb(colors.light)));
                }
                if (colors.dark) {
                    setColor(palette[color], 'darkChannel', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeColorChannel"])(toRgb(colors.dark)));
                }
                if (colors.contrastText) {
                    setColor(palette[color], 'contrastTextChannel', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["private_safeColorChannel"])(toRgb(colors.contrastText)));
                }
                if (color === 'text') {
                    // Text colors: text.primary, text.secondary
                    setColorChannel(palette[color], 'primary');
                    setColorChannel(palette[color], 'secondary');
                }
                if (color === 'action') {
                    // Action colors: action.active, action.selected
                    if (colors.active) {
                        setColorChannel(palette[color], 'active');
                    }
                    if (colors.selected) {
                        setColorChannel(palette[color], 'selected');
                    }
                }
            }
        });
    });
    theme = args.reduce((acc, argument)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(acc, argument), theme);
    const parserConfig = {
        prefix: cssVarPrefix,
        disableCssColorScheme,
        shouldSkipGeneratingVar,
        getSelector: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createGetSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(theme)
    };
    const { vars, generateThemeVars, generateStyleSheets } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$cssVars$2f$prepareCssVars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__prepareCssVars$3e$__["prepareCssVars"])(theme, parserConfig);
    theme.vars = vars;
    Object.entries(theme.colorSchemes[theme.defaultColorScheme]).forEach(([key, value])=>{
        theme[key] = value;
    });
    theme.generateThemeVars = generateThemeVars;
    theme.generateStyleSheets = generateStyleSheets;
    theme.generateSpacing = function generateSpacing() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createSpacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createSpacing$3e$__["createSpacing"])(input.spacing, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUnarySpacing"])(this));
    };
    theme.getColorSchemeSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$cssVars$2f$getColorSchemeSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGetColorSchemeSelector"])(selector);
    theme.spacing = theme.generateSpacing();
    theme.shouldSkipGeneratingVar = shouldSkipGeneratingVar;
    theme.unstable_sxConfig = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$defaultSxConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_defaultSxConfig$3e$__["unstable_defaultSxConfig"],
        ...input?.unstable_sxConfig
    };
    theme.unstable_sx = function sx(props) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            sx: props,
            theme: this
        });
    };
    theme.toRuntimeSource = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$stringifyTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyTheme"]; // for Pigment CSS integration
    return theme;
}
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/createTheme.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>createTheme)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createThemeWithVars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/createThemeWithVars.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createThemeNoVars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/createThemeNoVars.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createPalette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/createPalette.js [app-client] (ecmascript)");
;
;
;
;
// eslint-disable-next-line consistent-return
function attachColorScheme(theme, scheme, colorScheme) {
    if (!theme.colorSchemes) {
        return undefined;
    }
    if (colorScheme) {
        theme.colorSchemes[scheme] = {
            ...colorScheme !== true && colorScheme,
            palette: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createPalette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                ...colorScheme === true ? {} : colorScheme.palette,
                mode: scheme
            }) // cast type to skip module augmentation test
        };
    }
}
function createTheme(options = {}, // cast type to skip module augmentation test
...args) {
    const { palette, cssVariables = false, colorSchemes: initialColorSchemes = !palette ? {
        light: true
    } : undefined, defaultColorScheme: initialDefaultColorScheme = palette?.mode, ...rest } = options;
    const defaultColorSchemeInput = initialDefaultColorScheme || 'light';
    const defaultScheme = initialColorSchemes?.[defaultColorSchemeInput];
    const colorSchemesInput = {
        ...initialColorSchemes,
        ...palette ? {
            [defaultColorSchemeInput]: {
                ...typeof defaultScheme !== 'boolean' && defaultScheme,
                palette
            }
        } : undefined
    };
    if (cssVariables === false) {
        if (!('colorSchemes' in options)) {
            // Behaves exactly as v5
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createThemeNoVars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(options, ...args);
        }
        let paletteOptions = palette;
        if (!('palette' in options)) {
            if (colorSchemesInput[defaultColorSchemeInput]) {
                if (colorSchemesInput[defaultColorSchemeInput] !== true) {
                    paletteOptions = colorSchemesInput[defaultColorSchemeInput].palette;
                } else if (defaultColorSchemeInput === 'dark') {
                    // @ts-ignore to prevent the module augmentation test from failing
                    paletteOptions = {
                        mode: 'dark'
                    };
                }
            }
        }
        const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createThemeNoVars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            ...options,
            palette: paletteOptions
        }, ...args);
        theme.defaultColorScheme = defaultColorSchemeInput;
        theme.colorSchemes = colorSchemesInput;
        if (theme.palette.mode === 'light') {
            theme.colorSchemes.light = {
                ...colorSchemesInput.light !== true && colorSchemesInput.light,
                palette: theme.palette
            };
            attachColorScheme(theme, 'dark', colorSchemesInput.dark);
        }
        if (theme.palette.mode === 'dark') {
            theme.colorSchemes.dark = {
                ...colorSchemesInput.dark !== true && colorSchemesInput.dark,
                palette: theme.palette
            };
            attachColorScheme(theme, 'light', colorSchemesInput.light);
        }
        return theme;
    }
    if (!palette && !('light' in colorSchemesInput) && defaultColorSchemeInput === 'light') {
        colorSchemesInput.light = true;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createThemeWithVars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ...rest,
        colorSchemes: colorSchemesInput,
        defaultColorScheme: defaultColorSchemeInput,
        ...typeof cssVariables !== 'boolean' && cssVariables
    }, ...args);
}
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/createTheme.js [app-client] (ecmascript) <locals> <export default as createTheme>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createTheme": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/createTheme.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/identifier.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = '$$material';
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/Box/boxClasses.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-client] (ecmascript)");
;
const boxClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiBox', [
    'root'
]);
const __TURBOPACK__default__export__ = boxClasses;
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/Box/Box.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__createTheme$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/createTheme.js [app-client] (ecmascript) <locals> <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createBox$2f$createBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createBox$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+st_5f10f346196051285cfc2e46c43ad4ff/node_modules/@mui/system/esm/createBox/createBox.js [app-client] (ecmascript) <export default as createBox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/identifier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$boxClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/Box/boxClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ClassNameGenerator$2f$ClassNameGenerator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_ClassNameGenerator$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js [app-client] (ecmascript) <export default as unstable_ClassNameGenerator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const defaultTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__createTheme$3e$__["createTheme"])();
const Box = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createBox$2f$createBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createBox$3e$__["createBox"])({
    themeId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    defaultTheme,
    defaultClassName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$boxClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].root,
    generateClassName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ClassNameGenerator$2f$ClassNameGenerator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_ClassNameGenerator$3e$__["unstable_ClassNameGenerator"].generate
});
("TURBOPACK compile-time truthy", 1) ? Box.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * @ignore
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */ component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    ])
} : ("TURBOPACK unreachable", undefined);
const __TURBOPACK__default__export__ = Box;
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/Box/Box.js [app-client] (ecmascript) <export default as Box>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Box": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/Box/Box.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/defaultTheme.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/createTheme.js [app-client] (ecmascript) <locals>");
'use client';
;
const defaultTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])();
const __TURBOPACK__default__export__ = defaultTheme;
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/GlobalStyles/GlobalStyles.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$GlobalStyles$2f$GlobalStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GlobalStyles$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+st_5f10f346196051285cfc2e46c43ad4ff/node_modules/@mui/system/esm/GlobalStyles/GlobalStyles.js [app-client] (ecmascript) <export default as GlobalStyles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$defaultTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/defaultTheme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/identifier.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function GlobalStyles(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$GlobalStyles$2f$GlobalStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GlobalStyles$3e$__["GlobalStyles"], {
        ...props,
        defaultTheme: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$defaultTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        themeId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    });
}
("TURBOPACK compile-time truthy", 1) ? GlobalStyles.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * The styles you want to apply globally.
   */ styles: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ /* @typescript-to-proptypes-ignore */ ["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].array,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
    ])
} : ("TURBOPACK unreachable", undefined);
const __TURBOPACK__default__export__ = GlobalStyles;
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/zero-styled/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "globalCss": (()=>globalCss),
    "internal_createExtendSxProp": (()=>internal_createExtendSxProp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$GlobalStyles$2f$GlobalStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/GlobalStyles/GlobalStyles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$extendSxProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__extendSxProp$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+st_5f10f346196051285cfc2e46c43ad4ff/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js [app-client] (ecmascript) <export default as extendSxProp>");
;
;
;
;
;
;
;
function globalCss(styles) {
    return function GlobalStylesWrapper(props) {
        return(/*#__PURE__*/ // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$GlobalStyles$2f$GlobalStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            styles: typeof styles === 'function' ? (theme)=>styles({
                    theme,
                    ...props
                }) : styles
        }));
    };
}
function internal_createExtendSxProp() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$extendSxProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__extendSxProp$3e$__["extendSxProp"];
}
;
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/utils/capitalize.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/capitalize/capitalize.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/Typography/typographyClasses.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "getTypographyUtilityClass": (()=>getTypographyUtilityClass)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-client] (ecmascript)");
;
;
function getTypographyUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiTypography', slot);
}
const typographyClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiTypography', [
    'root',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'inherit',
    'button',
    'caption',
    'overline',
    'alignLeft',
    'alignRight',
    'alignCenter',
    'alignJustify',
    'noWrap',
    'gutterBottom',
    'paragraph'
]);
const __TURBOPACK__default__export__ = typographyClasses;
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/slotShouldForwardProp.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// copied from @mui/system/createStyled
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
function slotShouldForwardProp(prop) {
    return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}
const __TURBOPACK__default__export__ = slotShouldForwardProp;
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/rootShouldForwardProp.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$slotShouldForwardProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/slotShouldForwardProp.js [app-client] (ecmascript)");
;
const rootShouldForwardProp = (prop)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$slotShouldForwardProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prop) && prop !== 'classes';
const __TURBOPACK__default__export__ = rootShouldForwardProp;
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/styled.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createStyled$2f$createStyled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+st_5f10f346196051285cfc2e46c43ad4ff/node_modules/@mui/system/esm/createStyled/createStyled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/identifier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$defaultTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/defaultTheme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$rootShouldForwardProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/rootShouldForwardProp.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const styled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createStyled$2f$createStyled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
    themeId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    defaultTheme: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$defaultTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    rootShouldForwardProp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$rootShouldForwardProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
const __TURBOPACK__default__export__ = styled;
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "styled": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/styled.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/utils/memoTheme.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$memoTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_memoTheme$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+st_5f10f346196051285cfc2e46c43ad4ff/node_modules/@mui/system/esm/memoTheme.js [app-client] (ecmascript) <export default as unstable_memoTheme>");
;
const memoTheme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$memoTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_memoTheme$3e$__["unstable_memoTheme"];
const __TURBOPACK__default__export__ = memoTheme;
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/utils/createSimplePaletteValueFilter.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Type guard to check if the object has a "main" property of type string.
 *
 * @param obj - the object to check
 * @returns boolean
 */ __turbopack_esm__({
    "default": (()=>createSimplePaletteValueFilter)
});
function hasCorrectMainProperty(obj) {
    return typeof obj.main === 'string';
}
/**
 * Checks if the object conforms to the SimplePaletteColorOptions type.
 * The minimum requirement is that the object has a "main" property of type string, this is always checked.
 * Optionally, you can pass additional properties to check.
 *
 * @param obj - The object to check
 * @param additionalPropertiesToCheck - Array containing "light", "dark", and/or "contrastText"
 * @returns boolean
 */ function checkSimplePaletteColorValues(obj, additionalPropertiesToCheck = []) {
    if (!hasCorrectMainProperty(obj)) {
        return false;
    }
    for (const value of additionalPropertiesToCheck){
        if (!obj.hasOwnProperty(value) || typeof obj[value] !== 'string') {
            return false;
        }
    }
    return true;
}
function createSimplePaletteValueFilter(additionalPropertiesToCheck = []) {
    return ([, value])=>value && checkSimplePaletteColorValues(value, additionalPropertiesToCheck);
}
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "useDefaultProps": (()=>useDefaultProps)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+st_5f10f346196051285cfc2e46c43ad4ff/node_modules/@mui/system/esm/DefaultPropsProvider/DefaultPropsProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function DefaultPropsProvider(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...props
    });
}
("TURBOPACK compile-time truthy", 1) ? DefaultPropsProvider.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * @ignore
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * @ignore
   */ value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object.isRequired
} : ("TURBOPACK unreachable", undefined);
const __TURBOPACK__default__export__ = DefaultPropsProvider;
function useDefaultProps(params) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDefaultProps"])(params);
}
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/Typography/Typography.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "TypographyRoot": (()=>TypographyRoot),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$zero$2d$styled$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/zero-styled/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/utils/capitalize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$typographyClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/Typography/typographyClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$memoTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/utils/memoTheme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$createSimplePaletteValueFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/utils/createSimplePaletteValueFilter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
const v6Colors = {
    primary: true,
    secondary: true,
    error: true,
    info: true,
    success: true,
    warning: true,
    textPrimary: true,
    textSecondary: true,
    textDisabled: true
};
const extendSxProp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$zero$2d$styled$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_createExtendSxProp"])();
const useUtilityClasses = (ownerState)=>{
    const { align, gutterBottom, noWrap, paragraph, variant, classes } = ownerState;
    const slots = {
        root: [
            'root',
            variant,
            ownerState.align !== 'inherit' && `align${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(align)}`,
            gutterBottom && 'gutterBottom',
            noWrap && 'noWrap',
            paragraph && 'paragraph'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$typographyClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTypographyUtilityClass"], classes);
};
const TypographyRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            ownerState.variant && styles[ownerState.variant],
            ownerState.align !== 'inherit' && styles[`align${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ownerState.align)}`],
            ownerState.noWrap && styles.noWrap,
            ownerState.gutterBottom && styles.gutterBottom,
            ownerState.paragraph && styles.paragraph
        ];
    }
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$memoTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(({ theme })=>({
        margin: 0,
        variants: [
            {
                props: {
                    variant: 'inherit'
                },
                style: {
                    // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
                    font: 'inherit',
                    lineHeight: 'inherit',
                    letterSpacing: 'inherit'
                }
            },
            ...Object.entries(theme.typography).filter(([variant, value])=>variant !== 'inherit' && value && typeof value === 'object').map(([variant, value])=>({
                    props: {
                        variant
                    },
                    style: value
                })),
            ...Object.entries(theme.palette).filter((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$createSimplePaletteValueFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])()).map(([color])=>({
                    props: {
                        color
                    },
                    style: {
                        color: (theme.vars || theme).palette[color].main
                    }
                })),
            ...Object.entries(theme.palette?.text || {}).filter(([, value])=>typeof value === 'string').map(([color])=>({
                    props: {
                        color: `text${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(color)}`
                    },
                    style: {
                        color: (theme.vars || theme).palette.text[color]
                    }
                })),
            {
                props: ({ ownerState })=>ownerState.align !== 'inherit',
                style: {
                    textAlign: 'var(--Typography-textAlign)'
                }
            },
            {
                props: ({ ownerState })=>ownerState.noWrap,
                style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                }
            },
            {
                props: ({ ownerState })=>ownerState.gutterBottom,
                style: {
                    marginBottom: '0.35em'
                }
            },
            {
                props: ({ ownerState })=>ownerState.paragraph,
                style: {
                    marginBottom: 16
                }
            }
        ]
    })));
const defaultVariantMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    inherit: 'p'
};
const Typography = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function Typography(inProps, ref) {
    const { color, ...themeProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDefaultProps"])({
        props: inProps,
        name: 'MuiTypography'
    });
    const isSxColor = !v6Colors[color];
    // TODO: Remove `extendSxProp` in v7
    const props = extendSxProp({
        ...themeProps,
        ...isSxColor && {
            color
        }
    });
    const { align = 'inherit', className, component, gutterBottom = false, noWrap = false, paragraph = false, variant = 'body1', variantMapping = defaultVariantMapping, ...other } = props;
    const ownerState = {
        ...props,
        align,
        color,
        className,
        component,
        gutterBottom,
        noWrap,
        paragraph,
        variant,
        variantMapping
    };
    const Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TypographyRoot, {
        as: Component,
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        ...other,
        ownerState: ownerState,
        style: {
            ...align !== 'inherit' && {
                '--Typography-textAlign': align
            },
            ...other.style
        }
    });
});
("TURBOPACK compile-time truthy", 1) ? Typography.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * Set the text-align on the component.
   * @default 'inherit'
   */ align: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
        'center',
        'inherit',
        'justify',
        'left',
        'right'
    ]),
    /**
   * The content of the component.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */ color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ /* @typescript-to-proptypes-ignore */ ["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'primary',
            'secondary',
            'success',
            'error',
            'info',
            'warning',
            'textPrimary',
            'textSecondary',
            'textDisabled'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */ component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
    /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */ gutterBottom: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */ noWrap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the element will be a paragraph element.
   * @default false
   * @deprecated Use the `component` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */ paragraph: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * @ignore
   */ style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    ]),
    /**
   * Applies the theme typography styles.
   * @default 'body1'
   */ variant: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ /* @typescript-to-proptypes-ignore */ ["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'body1',
            'body2',
            'button',
            'caption',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'inherit',
            'overline',
            'subtitle1',
            'subtitle2'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */ variantMapping: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ /* @typescript-to-proptypes-ignore */ ["default"].object
} : ("TURBOPACK unreachable", undefined);
const __TURBOPACK__default__export__ = Typography;
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Typography": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/Typography/Typography.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/Card/cardClasses.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "getCardUtilityClass": (()=>getCardUtilityClass)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-client] (ecmascript)");
;
;
function getCardUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiCard', slot);
}
const cardClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiCard', [
    'root'
]);
const __TURBOPACK__default__export__ = cardClasses;
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/Paper/paperClasses.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "getPaperUtilityClass": (()=>getPaperUtilityClass)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-client] (ecmascript)");
;
;
function getPaperUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiPaper', slot);
}
const paperClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiPaper', [
    'root',
    'rounded',
    'outlined',
    'elevation',
    'elevation0',
    'elevation1',
    'elevation2',
    'elevation3',
    'elevation4',
    'elevation5',
    'elevation6',
    'elevation7',
    'elevation8',
    'elevation9',
    'elevation10',
    'elevation11',
    'elevation12',
    'elevation13',
    'elevation14',
    'elevation15',
    'elevation16',
    'elevation17',
    'elevation18',
    'elevation19',
    'elevation20',
    'elevation21',
    'elevation22',
    'elevation23',
    'elevation24'
]);
const __TURBOPACK__default__export__ = paperClasses;
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/useTheme.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>useTheme)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useTheme$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+st_5f10f346196051285cfc2e46c43ad4ff/node_modules/@mui/system/esm/useTheme/useTheme.js [app-client] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$defaultTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/defaultTheme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/identifier.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function useTheme() {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useTheme$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$defaultTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    if ("TURBOPACK compile-time truthy", 1) {
        // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler
        // eslint-disable-next-line react-hooks/rules-of-hooks
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useDebugValue(theme);
    }
    return theme[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]] || theme;
}
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/useTheme.js [app-client] (ecmascript) <export default as useTheme>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useTheme": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/useTheme.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/Paper/Paper.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$Paper$2f$paperClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/Paper/paperClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$memoTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/utils/memoTheme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/useTheme.js [app-client] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+st_5f10f346196051285cfc2e46c43ad4ff/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$getOverlayAlpha$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/getOverlayAlpha.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$integerPropType$2f$integerPropType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/integerPropType/integerPropType.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
const useUtilityClasses = (ownerState)=>{
    const { square, elevation, variant, classes } = ownerState;
    const slots = {
        root: [
            'root',
            variant,
            !square && 'rounded',
            variant === 'elevation' && `elevation${elevation}`
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$Paper$2f$paperClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaperUtilityClass"], classes);
};
const PaperRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: 'MuiPaper',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            styles[ownerState.variant],
            !ownerState.square && styles.rounded,
            ownerState.variant === 'elevation' && styles[`elevation${ownerState.elevation}`]
        ];
    }
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$memoTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(({ theme })=>({
        backgroundColor: (theme.vars || theme).palette.background.paper,
        color: (theme.vars || theme).palette.text.primary,
        transition: theme.transitions.create('box-shadow'),
        variants: [
            {
                props: ({ ownerState })=>!ownerState.square,
                style: {
                    borderRadius: theme.shape.borderRadius
                }
            },
            {
                props: {
                    variant: 'outlined'
                },
                style: {
                    border: `1px solid ${(theme.vars || theme).palette.divider}`
                }
            },
            {
                props: {
                    variant: 'elevation'
                },
                style: {
                    boxShadow: 'var(--Paper-shadow)',
                    backgroundImage: 'var(--Paper-overlay)'
                }
            }
        ]
    })));
const Paper = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function Paper(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDefaultProps"])({
        props: inProps,
        name: 'MuiPaper'
    });
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const { className, component = 'div', elevation = 1, square = false, variant = 'elevation', ...other } = props;
    const ownerState = {
        ...props,
        component,
        elevation,
        square,
        variant
    };
    const classes = useUtilityClasses(ownerState);
    if ("TURBOPACK compile-time truthy", 1) {
        if (theme.shadows[elevation] === undefined) {
            console.error([
                `MUI: The elevation provided <Paper elevation={${elevation}}> is not available in the theme.`,
                `Please make sure that \`theme.shadows[${elevation}]\` is defined.`
            ].join('\n'));
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PaperRoot, {
        as: component,
        ownerState: ownerState,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        ref: ref,
        ...other,
        style: {
            ...variant === 'elevation' && {
                '--Paper-shadow': (theme.vars || theme).shadows[elevation],
                ...theme.vars && {
                    '--Paper-overlay': theme.vars.overlays?.[elevation]
                },
                ...!theme.vars && theme.palette.mode === 'dark' && {
                    '--Paper-overlay': `linear-gradient(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])('#fff', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$getOverlayAlpha$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(elevation))}, ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])('#fff', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$getOverlayAlpha$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(elevation))})`
                }
            },
            ...other.style
        }
    });
});
("TURBOPACK compile-time truthy", 1) ? Paper.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * The content of the component.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */ component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
    /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */ elevation: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$integerPropType$2f$integerPropType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (props)=>{
        const { elevation, variant } = props;
        if (elevation > 0 && variant === 'outlined') {
            return new Error(`MUI: Combining \`elevation={${elevation}}\` with \`variant="${variant}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`);
        }
        return null;
    }),
    /**
   * If `true`, rounded corners are disabled.
   * @default false
   */ square: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * @ignore
   */ style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    ]),
    /**
   * The variant to use.
   * @default 'elevation'
   */ variant: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ /* @typescript-to-proptypes-ignore */ ["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'elevation',
            'outlined'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ])
} : ("TURBOPACK unreachable", undefined);
const __TURBOPACK__default__export__ = Paper;
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/Card/Card.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$cardClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/Card/cardClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/Paper/Paper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
const useUtilityClasses = (ownerState)=>{
    const { classes } = ownerState;
    const slots = {
        root: [
            'root'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$cardClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCardUtilityClass"], classes);
};
const CardRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    name: 'MuiCard',
    slot: 'Root',
    overridesResolver: (props, styles)=>styles.root
})({
    overflow: 'hidden'
});
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function Card(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDefaultProps"])({
        props: inProps,
        name: 'MuiCard'
    });
    const { className, raised = false, ...other } = props;
    const ownerState = {
        ...props,
        raised
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CardRoot, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        elevation: raised ? 8 : undefined,
        ref: ref,
        ownerState: ownerState,
        ...other
    });
});
("TURBOPACK compile-time truthy", 1) ? Card.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * The content of the component.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * If `true`, the card will use raised styling.
   * @default false
   */ raised: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool, (props)=>{
        if (props.raised && props.variant === 'outlined') {
            return new Error('MUI: Combining `raised={true}` with `variant="outlined"` has no effect.');
        }
        return null;
    }),
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    ])
} : ("TURBOPACK unreachable", undefined);
const __TURBOPACK__default__export__ = Card;
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/Card/Card.js [app-client] (ecmascript) <export default as Card>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Card": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/Card/Card.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/CardContent/cardContentClasses.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "getCardContentUtilityClass": (()=>getCardContentUtilityClass)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-client] (ecmascript)");
;
;
function getCardContentUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiCardContent', slot);
}
const cardContentClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiCardContent', [
    'root'
]);
const __TURBOPACK__default__export__ = cardContentClasses;
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/CardContent/CardContent.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$CardContent$2f$cardContentClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/CardContent/cardContentClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const useUtilityClasses = (ownerState)=>{
    const { classes } = ownerState;
    const slots = {
        root: [
            'root'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$CardContent$2f$cardContentClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCardContentUtilityClass"], classes);
};
const CardContentRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: 'MuiCardContent',
    slot: 'Root',
    overridesResolver: (props, styles)=>styles.root
})({
    padding: 16,
    '&:last-child': {
        paddingBottom: 24
    }
});
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function CardContent(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDefaultProps"])({
        props: inProps,
        name: 'MuiCardContent'
    });
    const { className, component = 'div', ...other } = props;
    const ownerState = {
        ...props,
        component
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CardContentRoot, {
        as: component,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        ownerState: ownerState,
        ref: ref,
        ...other
    });
});
("TURBOPACK compile-time truthy", 1) ? CardContent.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * The content of the component.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */ component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    ])
} : ("TURBOPACK unreachable", undefined);
const __TURBOPACK__default__export__ = CardContent;
}}),
"[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/CardContent/CardContent.js [app-client] (ecmascript) <export default as CardContent>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CardContent": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$4$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$_861faf9ddc4761e7658ec96cff5e306a$2f$node_modules$2f40$mui$2f$material$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.4.5_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+_861faf9ddc4761e7658ec96cff5e306a/node_modules/@mui/material/CardContent/CardContent.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=6613d_%40mui_material_2dd6bd._.js.map