(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/95a37_@mui_x-data-grid_hooks_features_virtualization_10c970._.js", {

"[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/virtualization/gridVirtualizationSelectors.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "gridRenderContextColumnsSelector": (()=>gridRenderContextColumnsSelector),
    "gridRenderContextSelector": (()=>gridRenderContextSelector),
    "gridVirtualizationColumnEnabledSelector": (()=>gridVirtualizationColumnEnabledSelector),
    "gridVirtualizationEnabledSelector": (()=>gridVirtualizationEnabledSelector),
    "gridVirtualizationRowEnabledSelector": (()=>gridVirtualizationRowEnabledSelector),
    "gridVirtualizationSelector": (()=>gridVirtualizationSelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/utils/createSelector.js [app-client] (ecmascript)");
;
const gridVirtualizationSelector = (state)=>state.virtualization;
const gridVirtualizationEnabledSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])(gridVirtualizationSelector, (state)=>state.enabled);
const gridVirtualizationColumnEnabledSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])(gridVirtualizationSelector, (state)=>state.enabledForColumns);
const gridVirtualizationRowEnabledSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])(gridVirtualizationSelector, (state)=>state.enabledForRows);
const gridRenderContextSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])(gridVirtualizationSelector, (state)=>state.renderContext);
const gridRenderContextColumnsSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelectorMemoized"])((state)=>state.virtualization.renderContext.firstColumnIndex, (state)=>state.virtualization.renderContext.lastColumnIndex, (firstColumnIndex, lastColumnIndex)=>({
        firstColumnIndex,
        lastColumnIndex
    }));
}}),
"[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/virtualization/useGridVirtualization.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "EMPTY_RENDER_CONTEXT": (()=>EMPTY_RENDER_CONTEXT),
    "useGridVirtualization": (()=>useGridVirtualization),
    "virtualizationStateInitializer": (()=>virtualizationStateInitializer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridApiMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/utils/useGridApiMethod.js [app-client] (ecmascript)");
;
;
;
const EMPTY_RENDER_CONTEXT = {
    firstRowIndex: 0,
    lastRowIndex: 0,
    firstColumnIndex: 0,
    lastColumnIndex: 0
};
const virtualizationStateInitializer = (state, props)=>{
    const { disableVirtualization, autoHeight } = props;
    const virtualization = {
        enabled: !disableVirtualization,
        enabledForColumns: !disableVirtualization,
        enabledForRows: !disableVirtualization && !autoHeight,
        renderContext: EMPTY_RENDER_CONTEXT
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state, {
        virtualization
    });
};
function useGridVirtualization(apiRef, props) {
    /*
   * API METHODS
   */ const setVirtualization = (enabled)=>{
        apiRef.current.setState((state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state, {
                virtualization: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state.virtualization, {
                    enabled,
                    enabledForColumns: enabled,
                    enabledForRows: enabled && !props.autoHeight
                })
            }));
    };
    const setColumnVirtualization = (enabled)=>{
        apiRef.current.setState((state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state, {
                virtualization: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state.virtualization, {
                    enabledForColumns: enabled
                })
            }));
    };
    const api = {
        unstable_setVirtualization: setVirtualization,
        unstable_setColumnVirtualization: setColumnVirtualization
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridApiMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridApiMethod"])(apiRef, api, 'public');
    /*
   * EFFECTS
   */ /* eslint-disable react-hooks/exhaustive-deps */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useGridVirtualization.useEffect": ()=>{
            setVirtualization(!props.disableVirtualization);
        }
    }["useGridVirtualization.useEffect"], [
        props.disableVirtualization,
        props.autoHeight
    ]);
/* eslint-enable react-hooks/exhaustive-deps */ }
}}),
"[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/virtualization/gridFocusedVirtualCellSelector.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "gridFocusedVirtualCellSelector": (()=>gridFocusedVirtualCellSelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$reselect$40$5$2e$1$2e$1$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/reselect@5.1.1/node_modules/reselect/dist/reselect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$focus$2f$gridFocusStateSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/focus/gridFocusStateSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$virtualization$2f$gridVirtualizationSelectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/virtualization/gridVirtualizationSelectors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$pagination$2f$gridPaginationSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/pagination/gridPaginationSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$columns$2f$gridColumnsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/columns/gridColumnsSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/rows/gridRowsSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/utils/createSelector.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const gridIsFocusedCellOutOfContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$reselect$40$5$2e$1$2e$1$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$focus$2f$gridFocusStateSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridFocusCellSelector"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$virtualization$2f$gridVirtualizationSelectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridRenderContextSelector"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$pagination$2f$gridPaginationSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridVisibleRowsSelector"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$columns$2f$gridColumnsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridVisibleColumnDefinitionsSelector"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridRowsLookupSelector"], (focusedCell, renderContext, currentPage, visibleColumns, rows)=>{
    if (!focusedCell) {
        return false;
    }
    const row = rows[focusedCell.id];
    if (!row) {
        return false;
    }
    const rowIndex = currentPage.rowToIndexMap.get(row);
    const columnIndex = visibleColumns.slice(renderContext.firstColumnIndex, renderContext.lastColumnIndex).findIndex((column)=>column.field === focusedCell.field);
    const isInRenderContext = rowIndex !== undefined && columnIndex !== -1 && rowIndex >= renderContext.firstRowIndex && rowIndex <= renderContext.lastRowIndex;
    return !isInRenderContext;
});
const gridFocusedVirtualCellSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelectorMemoized"])(gridIsFocusedCellOutOfContext, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$columns$2f$gridColumnsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridVisibleColumnDefinitionsSelector"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$pagination$2f$gridPaginationSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridVisibleRowsSelector"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridRowsLookupSelector"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$focus$2f$gridFocusStateSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridFocusCellSelector"], (isFocusedCellOutOfRenderContext, visibleColumns, currentPage, rows, focusedCell)=>{
    if (!isFocusedCellOutOfRenderContext) {
        return null;
    }
    const row = rows[focusedCell.id];
    if (!row) {
        return null;
    }
    const rowIndex = currentPage.rowToIndexMap.get(row);
    if (rowIndex === undefined) {
        return null;
    }
    const columnIndex = visibleColumns.findIndex((column)=>column.field === focusedCell.field);
    if (columnIndex === -1) {
        return null;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, focusedCell, {
        rowIndex,
        columnIndex
    });
});
}}),
"[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/virtualization/useGridVirtualScroller.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "EMPTY_DETAIL_PANELS": (()=>EMPTY_DETAIL_PANELS),
    "areRenderContextsEqual": (()=>areRenderContextsEqual),
    "computeOffsetLeft": (()=>computeOffsetLeft),
    "useGridVirtualScroller": (()=>useGridVirtualScroller)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridPrivateApiContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/utils/useGridPrivateApiContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridRootProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/utils/useGridRootProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/utils/useGridSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$columns$2f$gridColumnsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/columns/gridColumnsSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$listView$2f$gridListViewSelectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/listView/gridListViewSelectors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$virtualization$2f$gridVirtualizationSelectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/virtualization/gridVirtualizationSelectors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$isJSDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/utils/isJSDOM.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/rows/gridRowsSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$columns$2f$gridColumnsInterfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/columns/gridColumnsInterfaces.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$RtlProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emotion+st_5f10f346196051285cfc2e46c43ad4ff/node_modules/@mui/system/esm/RtlProvider/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rowSelection$2f$gridRowSelectionSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/rowSelection/gridRowSelectionSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridVisibleRows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/utils/useGridVisibleRows.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$dimensions$2f$gridDimensionsSelectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/dimensions/gridDimensionsSelectors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$roundToDecimalPlaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/utils/roundToDecimalPlaces.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$internals$40$7$2e$26$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$x$2d$internals$2f$reactMajor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-internals@7.26.0_@types+react@19.0.10_react@19.0.0/node_modules/@mui/x-internals/reactMajor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$virtualization$2f$useGridVirtualization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/virtualization/useGridVirtualization.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$virtualization$2f$gridFocusedVirtualCellSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/virtualization/gridFocusedVirtualCellSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useTimeout$2f$useTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/useTimeout/useTimeout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useLazyRef$2f$useLazyRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/useLazyRef/useLazyRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_useEventCallback$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js [app-client] (ecmascript) <export default as unstable_useEventCallback>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/utils/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/rows/gridRowsUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_useEnhancedEffect$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js [app-client] (ecmascript) <export default as unstable_useEnhancedEffect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useRunOnce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/utils/useRunOnce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridApiEventHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/utils/useGridApiEventHandler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/utils/platform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowSpanningSelectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/rows/gridRowSpanningSelectors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsMetaSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/rows/gridRowsMetaSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$columns$2f$gridColumnsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/columns/gridColumnsUtils.js [app-client] (ecmascript)");
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
;
;
;
;
;
;
const MINIMUM_COLUMN_WIDTH = 50;
var ScrollDirection = /*#__PURE__*/ function(ScrollDirection) {
    ScrollDirection[ScrollDirection["NONE"] = 0] = "NONE";
    ScrollDirection[ScrollDirection["UP"] = 1] = "UP";
    ScrollDirection[ScrollDirection["DOWN"] = 2] = "DOWN";
    ScrollDirection[ScrollDirection["LEFT"] = 3] = "LEFT";
    ScrollDirection[ScrollDirection["RIGHT"] = 4] = "RIGHT";
    return ScrollDirection;
}(ScrollDirection || {});
const EMPTY_SCROLL_POSITION = {
    top: 0,
    left: 0
};
const EMPTY_DETAIL_PANELS = Object.freeze(new Map());
const createScrollCache = (isRtl, rowBufferPx, columnBufferPx, verticalBuffer, horizontalBuffer)=>({
        direction: ScrollDirection.NONE,
        buffer: bufferForDirection(isRtl, ScrollDirection.NONE, rowBufferPx, columnBufferPx, verticalBuffer, horizontalBuffer)
    });
const useGridVirtualScroller = ()=>{
    const apiRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridPrivateApiContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridPrivateApiContext"])();
    const rootProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridRootProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridRootProps"])();
    const { unstable_listView: listView } = rootProps;
    const visibleColumns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridSelector"])(apiRef, {
        "useGridVirtualScroller.useGridSelector[visibleColumns]": ()=>listView ? [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$listView$2f$gridListViewSelectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridListColumnSelector"])(apiRef.current.state)
            ] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$columns$2f$gridColumnsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridVisibleColumnDefinitionsSelector"])(apiRef)
    }["useGridVirtualScroller.useGridSelector[visibleColumns]"]);
    const enabledForRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridSelector"])(apiRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$virtualization$2f$gridVirtualizationSelectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridVirtualizationRowEnabledSelector"]) && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$isJSDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJSDOM"];
    const enabledForColumns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridSelector"])(apiRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$virtualization$2f$gridVirtualizationSelectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridVirtualizationColumnEnabledSelector"]) && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$isJSDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJSDOM"];
    const pinnedRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridSelector"])(apiRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridPinnedRowsSelector"]);
    const pinnedColumnDefinitions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$columns$2f$gridColumnsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridVisiblePinnedColumnDefinitionsSelector"])(apiRef);
    const pinnedColumns = listView ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$columns$2f$gridColumnsInterfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_PINNED_COLUMN_FIELDS"] : pinnedColumnDefinitions;
    const hasBottomPinnedRows = pinnedRows.bottom.length > 0;
    const [panels, setPanels] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(EMPTY_DETAIL_PANELS);
    const isRtl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$6$2e$4$2e$3_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emotion$2b$st_5f10f346196051285cfc2e46c43ad4ff$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$RtlProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRtl"])();
    const selectedRowsLookup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridSelector"])(apiRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rowSelection$2f$gridRowSelectionSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedIdsLookupSelector"]);
    const currentPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridVisibleRows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridVisibleRows"])(apiRef);
    const mainRef = apiRef.current.mainElementRef;
    const scrollerRef = apiRef.current.virtualScrollerRef;
    const scrollbarVerticalRef = apiRef.current.virtualScrollbarVerticalRef;
    const scrollbarHorizontalRef = apiRef.current.virtualScrollbarHorizontalRef;
    const hasColSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridSelector"])(apiRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$columns$2f$gridColumnsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridHasColSpanSelector"]);
    const isRenderContextReady = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(false);
    const rowHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridSelector"])(apiRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$dimensions$2f$gridDimensionsSelectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridRowHeightSelector"]);
    const contentHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridSelector"])(apiRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$dimensions$2f$gridDimensionsSelectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridContentHeightSelector"]);
    const columnsTotalWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridSelector"])(apiRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$dimensions$2f$gridDimensionsSelectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridColumnsTotalWidthSelector"]);
    const needsHorizontalScrollbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridSelector"])(apiRef, needsHorizontalScrollbarSelector);
    const verticalScrollbarWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridSelector"])(apiRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$dimensions$2f$gridDimensionsSelectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridVerticalScrollbarWidthSelector"]);
    const gridHasFiller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridSelector"])(apiRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$dimensions$2f$gridDimensionsSelectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridHasFillerSelector"]);
    const previousSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    const mainRefCallback = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridVirtualScroller.useCallback[mainRefCallback]": (node)=>{
            mainRef.current = node;
            if (!node) {
                return undefined;
            }
            const initialRect = node.getBoundingClientRect();
            let lastSize = {
                width: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$roundToDecimalPlaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundToDecimalPlaces"])(initialRect.width, 1),
                height: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$roundToDecimalPlaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundToDecimalPlaces"])(initialRect.height, 1)
            };
            if (!previousSize.current || lastSize.width !== previousSize.current.width && lastSize.height !== previousSize.current.height) {
                previousSize.current = lastSize;
                apiRef.current.publishEvent('resize', lastSize);
            }
            if (typeof ResizeObserver === 'undefined') {
                return undefined;
            }
            const observer = new ResizeObserver({
                "useGridVirtualScroller.useCallback[mainRefCallback]": (entries)=>{
                    const entry = entries[0];
                    if (!entry) {
                        return;
                    }
                    const newSize = {
                        width: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$roundToDecimalPlaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundToDecimalPlaces"])(entry.contentRect.width, 1),
                        height: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$roundToDecimalPlaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundToDecimalPlaces"])(entry.contentRect.height, 1)
                    };
                    if (newSize.width === lastSize.width && newSize.height === lastSize.height) {
                        return;
                    }
                    apiRef.current.publishEvent('resize', newSize);
                    lastSize = newSize;
                }
            }["useGridVirtualScroller.useCallback[mainRefCallback]"]);
            observer.observe(node);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$internals$40$7$2e$26$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$x$2d$internals$2f$reactMajor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] >= 19) {
                return ({
                    "useGridVirtualScroller.useCallback[mainRefCallback]": ()=>{
                        mainRef.current = null;
                        observer.disconnect();
                    }
                })["useGridVirtualScroller.useCallback[mainRefCallback]"];
            }
            return undefined;
        }
    }["useGridVirtualScroller.useCallback[mainRefCallback]"], [
        apiRef,
        mainRef
    ]);
    /*
   * Scroll context logic
   * ====================
   * We only render the cells contained in the `renderContext`. However, when the user starts scrolling the grid
   * in a direction, we want to render as many cells as possible in that direction, as to avoid presenting white
   * areas if the user scrolls too fast/far and the viewport ends up in a region we haven't rendered yet. To render
   * more cells, we store some offsets to add to the viewport in `scrollCache.buffer`. Those offsets make the render
   * context wider in the direction the user is going, but also makes the buffer around the viewport `0` for the
   * dimension (horizontal or vertical) in which the user is not scrolling. So if the normal viewport is 8 columns
   * wide, with a 1 column buffer (10 columns total), then we want it to be exactly 8 columns wide during vertical
   * scroll.
   * However, we don't want the rows in the old context to re-render from e.g. 10 columns to 8 columns, because that's
   * work that's not necessary. Thus we store the context at the start of the scroll in `frozenContext`, and the rows
   * that are part of this old context will keep their same render context as to avoid re-rendering.
   */ const scrollPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(rootProps.initialState?.scroll ?? EMPTY_SCROLL_POSITION);
    const ignoreNextScrollEvent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(false);
    const previousContextScrollPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(EMPTY_SCROLL_POSITION);
    const previousRowContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$virtualization$2f$useGridVirtualization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_RENDER_CONTEXT"]);
    const renderContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridSelector"])(apiRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$virtualization$2f$gridVirtualizationSelectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridRenderContextSelector"]);
    const focusedVirtualCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridSelector"])(apiRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$virtualization$2f$gridFocusedVirtualCellSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridFocusedVirtualCellSelector"]);
    const scrollTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useTimeout$2f$useTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const frozenContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(undefined);
    const scrollCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useLazyRef$2f$useLazyRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "useGridVirtualScroller.useLazyRef": ()=>createScrollCache(isRtl, rootProps.rowBufferPx, rootProps.columnBufferPx, rowHeight * 15, MINIMUM_COLUMN_WIDTH * 6)
    }["useGridVirtualScroller.useLazyRef"]).current;
    const updateRenderContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridVirtualScroller.useCallback[updateRenderContext]": (nextRenderContext)=>{
            if (areRenderContextsEqual(nextRenderContext, apiRef.current.state.virtualization.renderContext)) {
                return;
            }
            const didRowsIntervalChange = nextRenderContext.firstRowIndex !== previousRowContext.current.firstRowIndex || nextRenderContext.lastRowIndex !== previousRowContext.current.lastRowIndex;
            apiRef.current.setState({
                "useGridVirtualScroller.useCallback[updateRenderContext]": (state)=>{
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state, {
                        virtualization: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state.virtualization, {
                            renderContext: nextRenderContext
                        })
                    });
                }
            }["useGridVirtualScroller.useCallback[updateRenderContext]"]);
            // The lazy-loading hook is listening to `renderedRowsIntervalChange`,
            // but only does something if we already have a render context, because
            // otherwise we would call an update directly on mount
            const isReady = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$dimensions$2f$gridDimensionsSelectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridDimensionsSelector"])(apiRef.current.state).isReady;
            if (isReady && didRowsIntervalChange) {
                previousRowContext.current = nextRenderContext;
                apiRef.current.publishEvent('renderedRowsIntervalChange', nextRenderContext);
            }
            previousContextScrollPosition.current = scrollPosition.current;
        }
    }["useGridVirtualScroller.useCallback[updateRenderContext]"], [
        apiRef
    ]);
    const triggerUpdateRenderContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_useEventCallback$3e$__["unstable_useEventCallback"])({
        "useGridVirtualScroller.useEventCallback[triggerUpdateRenderContext]": ()=>{
            const scroller = scrollerRef.current;
            if (!scroller) {
                return undefined;
            }
            const dimensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$dimensions$2f$gridDimensionsSelectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridDimensionsSelector"])(apiRef.current.state);
            const maxScrollTop = Math.ceil(dimensions.minimumSize.height - dimensions.viewportOuterSize.height);
            const maxScrollLeft = Math.ceil(dimensions.minimumSize.width - dimensions.viewportInnerSize.width);
            // Clamp the scroll position to the viewport to avoid re-calculating the render context for scroll bounce
            const newScroll = {
                top: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(scroller.scrollTop, 0, maxScrollTop),
                left: isRtl ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(scroller.scrollLeft, -maxScrollLeft, 0) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(scroller.scrollLeft, 0, maxScrollLeft)
            };
            const dx = newScroll.left - scrollPosition.current.left;
            const dy = newScroll.top - scrollPosition.current.top;
            const isScrolling = dx !== 0 || dy !== 0;
            scrollPosition.current = newScroll;
            const direction = isScrolling ? directionForDelta(dx, dy) : ScrollDirection.NONE;
            // Since previous render, we have scrolled...
            const rowScroll = Math.abs(scrollPosition.current.top - previousContextScrollPosition.current.top);
            const columnScroll = Math.abs(scrollPosition.current.left - previousContextScrollPosition.current.left);
            // PERF: use the computed minimum column width instead of a static one
            const didCrossThreshold = rowScroll >= rowHeight || columnScroll >= MINIMUM_COLUMN_WIDTH;
            const didChangeDirection = scrollCache.direction !== direction;
            const shouldUpdate = didCrossThreshold || didChangeDirection;
            if (!shouldUpdate) {
                return renderContext;
            }
            // Render a new context
            if (didChangeDirection) {
                switch(direction){
                    case ScrollDirection.NONE:
                    case ScrollDirection.LEFT:
                    case ScrollDirection.RIGHT:
                        frozenContext.current = undefined;
                        break;
                    default:
                        frozenContext.current = renderContext;
                        break;
                }
            }
            scrollCache.direction = direction;
            scrollCache.buffer = bufferForDirection(isRtl, direction, rootProps.rowBufferPx, rootProps.columnBufferPx, rowHeight * 15, MINIMUM_COLUMN_WIDTH * 6);
            const inputs = inputsSelector(apiRef, rootProps, enabledForRows, enabledForColumns);
            const nextRenderContext = computeRenderContext(inputs, scrollPosition.current, scrollCache);
            // Prevents batching render context changes
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.flushSync({
                "useGridVirtualScroller.useEventCallback[triggerUpdateRenderContext]": ()=>{
                    updateRenderContext(nextRenderContext);
                }
            }["useGridVirtualScroller.useEventCallback[triggerUpdateRenderContext]"]);
            scrollTimeout.start(1000, triggerUpdateRenderContext);
            return nextRenderContext;
        }
    }["useGridVirtualScroller.useEventCallback[triggerUpdateRenderContext]"]);
    const forceUpdateRenderContext = ()=>{
        // skip update if dimensions are not ready and virtualization is enabled
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$dimensions$2f$gridDimensionsSelectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridDimensionsSelector"])(apiRef.current.state).isReady && (enabledForRows || enabledForColumns)) {
            return;
        }
        const inputs = inputsSelector(apiRef, rootProps, enabledForRows, enabledForColumns);
        const nextRenderContext = computeRenderContext(inputs, scrollPosition.current, scrollCache);
        // Reset the frozen context when the render context changes, see the illustration in https://github.com/mui/mui-x/pull/12353
        frozenContext.current = undefined;
        updateRenderContext(nextRenderContext);
    };
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_useEventCallback$3e$__["unstable_useEventCallback"])({
        "useGridVirtualScroller.useEventCallback[handleScroll]": ()=>{
            if (ignoreNextScrollEvent.current) {
                ignoreNextScrollEvent.current = false;
                return;
            }
            const nextRenderContext = triggerUpdateRenderContext();
            apiRef.current.publishEvent('scrollPositionChange', {
                top: scrollPosition.current.top,
                left: scrollPosition.current.left,
                renderContext: nextRenderContext
            });
        }
    }["useGridVirtualScroller.useEventCallback[handleScroll]"]);
    const handleWheel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_useEventCallback$3e$__["unstable_useEventCallback"])({
        "useGridVirtualScroller.useEventCallback[handleWheel]": (event)=>{
            apiRef.current.publishEvent('virtualScrollerWheel', {}, event);
        }
    }["useGridVirtualScroller.useEventCallback[handleWheel]"]);
    const handleTouchMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEventCallback$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_useEventCallback$3e$__["unstable_useEventCallback"])({
        "useGridVirtualScroller.useEventCallback[handleTouchMove]": (event)=>{
            apiRef.current.publishEvent('virtualScrollerTouchMove', {}, event);
        }
    }["useGridVirtualScroller.useEventCallback[handleTouchMove]"]);
    const getRows = (params = {})=>{
        if (!params.rows && !currentPage.range) {
            return [];
        }
        let baseRenderContext = renderContext;
        if (params.renderContext) {
            baseRenderContext = params.renderContext;
            baseRenderContext.firstColumnIndex = renderContext.firstColumnIndex;
            baseRenderContext.lastColumnIndex = renderContext.lastColumnIndex;
        }
        const isLastSection = !hasBottomPinnedRows && params.position === undefined || hasBottomPinnedRows && params.position === 'bottom';
        const isPinnedSection = params.position !== undefined;
        let rowIndexOffset;
        // FIXME: Why is the switch check exhaustiveness not validated with typescript-eslint?
        // eslint-disable-next-line default-case
        switch(params.position){
            case 'top':
                rowIndexOffset = 0;
                break;
            case 'bottom':
                rowIndexOffset = pinnedRows.top.length + currentPage.rows.length;
                break;
            case undefined:
                rowIndexOffset = pinnedRows.top.length;
                break;
        }
        const rowModels = params.rows ?? currentPage.rows;
        const firstRowToRender = baseRenderContext.firstRowIndex;
        const lastRowToRender = Math.min(baseRenderContext.lastRowIndex, rowModels.length);
        const rowIndexes = params.rows ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"])(0, params.rows.length) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"])(firstRowToRender, lastRowToRender);
        let virtualRowIndex = -1;
        if (!isPinnedSection && focusedVirtualCell) {
            if (focusedVirtualCell.rowIndex < firstRowToRender) {
                rowIndexes.unshift(focusedVirtualCell.rowIndex);
                virtualRowIndex = focusedVirtualCell.rowIndex;
            }
            if (focusedVirtualCell.rowIndex > lastRowToRender) {
                rowIndexes.push(focusedVirtualCell.rowIndex);
                virtualRowIndex = focusedVirtualCell.rowIndex;
            }
        }
        const rows = [];
        const rowProps = rootProps.slotProps?.row;
        const columnPositions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$columns$2f$gridColumnsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridColumnPositionsSelector"])(apiRef);
        rowIndexes.forEach((rowIndexInPage)=>{
            const { id, model } = rowModels[rowIndexInPage];
            const rowIndex = (currentPage?.range?.firstRowIndex || 0) + rowIndexOffset + rowIndexInPage;
            // NOTE: This is an expensive feature, the colSpan code could be optimized.
            if (hasColSpan) {
                const minFirstColumn = pinnedColumns.left.length;
                const maxLastColumn = visibleColumns.length - pinnedColumns.right.length;
                apiRef.current.calculateColSpan({
                    rowId: id,
                    minFirstColumn,
                    maxLastColumn,
                    columns: visibleColumns
                });
                if (pinnedColumns.left.length > 0) {
                    apiRef.current.calculateColSpan({
                        rowId: id,
                        minFirstColumn: 0,
                        maxLastColumn: pinnedColumns.left.length,
                        columns: visibleColumns
                    });
                }
                if (pinnedColumns.right.length > 0) {
                    apiRef.current.calculateColSpan({
                        rowId: id,
                        minFirstColumn: visibleColumns.length - pinnedColumns.right.length,
                        maxLastColumn: visibleColumns.length,
                        columns: visibleColumns
                    });
                }
            }
            const baseRowHeight = !apiRef.current.rowHasAutoHeight(id) ? apiRef.current.unstable_getRowHeight(id) : 'auto';
            let isSelected;
            if (selectedRowsLookup[id] == null) {
                isSelected = false;
            } else {
                isSelected = apiRef.current.isRowSelectable(id);
            }
            let isFirstVisible = false;
            if (params.position === undefined) {
                isFirstVisible = rowIndexInPage === 0;
            }
            let isLastVisible = false;
            const isLastVisibleInSection = rowIndexInPage === rowModels.length - 1;
            if (isLastSection) {
                if (!isPinnedSection) {
                    const lastIndex = currentPage.rows.length - 1;
                    const isLastVisibleRowIndex = rowIndexInPage === lastIndex;
                    if (isLastVisibleRowIndex) {
                        isLastVisible = true;
                    }
                } else {
                    isLastVisible = isLastVisibleInSection;
                }
            }
            let currentRenderContext = baseRenderContext;
            if (frozenContext.current && rowIndexInPage >= frozenContext.current.firstRowIndex && rowIndexInPage < frozenContext.current.lastRowIndex) {
                currentRenderContext = frozenContext.current;
            }
            const isVirtualFocusRow = rowIndexInPage === virtualRowIndex;
            const isVirtualFocusColumn = focusedVirtualCell?.rowIndex === rowIndex;
            const offsetLeft = computeOffsetLeft(columnPositions, currentRenderContext, pinnedColumns.left.length);
            const showBottomBorder = isLastVisibleInSection && params.position === 'top';
            const firstColumnIndex = currentRenderContext.firstColumnIndex;
            const lastColumnIndex = currentRenderContext.lastColumnIndex;
            rows.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(rootProps.slots.row, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                row: model,
                rowId: id,
                index: rowIndex,
                selected: isSelected,
                offsetLeft: offsetLeft,
                columnsTotalWidth: columnsTotalWidth,
                rowHeight: baseRowHeight,
                pinnedColumns: pinnedColumns,
                visibleColumns: visibleColumns,
                firstColumnIndex: firstColumnIndex,
                lastColumnIndex: lastColumnIndex,
                focusedColumnIndex: isVirtualFocusColumn ? focusedVirtualCell.columnIndex : undefined,
                isFirstVisible: isFirstVisible,
                isLastVisible: isLastVisible,
                isNotVisible: isVirtualFocusRow,
                showBottomBorder: showBottomBorder,
                scrollbarWidth: verticalScrollbarWidth,
                gridHasFiller: gridHasFiller
            }, rowProps), id));
            if (isVirtualFocusRow) {
                return;
            }
            const panel = panels.get(id);
            if (panel) {
                rows.push(panel);
            }
            if (params.position === undefined && isLastVisibleInSection) {
                rows.push(apiRef.current.getInfiniteLoadingTriggerElement?.({
                    lastRowId: id
                }));
            }
        });
        return rows;
    };
    const scrollerStyle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useGridVirtualScroller.useMemo[scrollerStyle]": ()=>({
                overflowX: !needsHorizontalScrollbar || listView ? 'hidden' : undefined,
                overflowY: rootProps.autoHeight ? 'hidden' : undefined
            })
    }["useGridVirtualScroller.useMemo[scrollerStyle]"], [
        needsHorizontalScrollbar,
        rootProps.autoHeight,
        listView
    ]);
    const contentSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useGridVirtualScroller.useMemo[contentSize]": ()=>{
            const size = {
                width: needsHorizontalScrollbar ? columnsTotalWidth : 'auto',
                flexBasis: contentHeight,
                flexShrink: 0
            };
            if (size.flexBasis === 0) {
                size.flexBasis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minimalContentHeight"]; // Give room to show the overlay when there no rows.
            }
            return size;
        }
    }["useGridVirtualScroller.useMemo[contentSize]"], [
        columnsTotalWidth,
        contentHeight,
        needsHorizontalScrollbar
    ]);
    const onContentSizeApplied = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridVirtualScroller.useCallback[onContentSizeApplied]": (node)=>{
            if (!node) {
                return;
            }
            apiRef.current.publishEvent('virtualScrollerContentSizeChange', {
                columnsTotalWidth,
                contentHeight
            });
        }
    }["useGridVirtualScroller.useCallback[onContentSizeApplied]"], [
        apiRef,
        columnsTotalWidth,
        contentHeight
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_useEnhancedEffect$3e$__["unstable_useEnhancedEffect"])({
        "useGridVirtualScroller.useEnhancedEffect": ()=>{
            if (!isRenderContextReady.current) {
                return;
            }
            apiRef.current.updateRenderContext?.();
        }
    }["useGridVirtualScroller.useEnhancedEffect"], [
        apiRef,
        enabledForColumns,
        enabledForRows
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_useEnhancedEffect$3e$__["unstable_useEnhancedEffect"])({
        "useGridVirtualScroller.useEnhancedEffect": ()=>{
            if (listView) {
                scrollerRef.current.scrollLeft = 0;
            }
        }
    }["useGridVirtualScroller.useEnhancedEffect"], [
        listView,
        scrollerRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useRunOnce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRunOnce"])(renderContext !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$virtualization$2f$useGridVirtualization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_RENDER_CONTEXT"], {
        "useGridVirtualScroller.useRunOnce": ()=>{
            apiRef.current.publishEvent('scrollPositionChange', {
                top: scrollPosition.current.top,
                left: scrollPosition.current.left,
                renderContext
            });
            isRenderContextReady.current = true;
            if (rootProps.initialState?.scroll && scrollerRef.current) {
                const scroller = scrollerRef.current;
                const { top, left } = rootProps.initialState.scroll;
                // On initial mount, if we have columns available, we can restore the horizontal scroll immediately, but we need to skip the resulting scroll event, otherwise we would recalculate the render context at position top=0, left=restoredValue, but the initial render context is already calculated based on the initial value of scrollPosition ref.
                const isScrollRestored = {
                    top: !(top > 0),
                    left: !(left > 0)
                };
                if (!isScrollRestored.left && columnsTotalWidth) {
                    scroller.scrollLeft = left;
                    ignoreNextScrollEvent.current = true;
                    isScrollRestored.left = true;
                }
                // For the sake of completeness, but I'm not sure if contentHeight is ever available at this point. Maybe when virtualisation is disabled?
                if (!isScrollRestored.top && contentHeight) {
                    scroller.scrollTop = top;
                    ignoreNextScrollEvent.current = true;
                    isScrollRestored.top = true;
                }
                // To restore the vertical scroll, we need to wait until the rows are available in the DOM (otherwise there's nowhere to scroll), but before paint to avoid reflows
                if (!isScrollRestored.top || !isScrollRestored.left) {
                    const unsubscribeContentSizeChange = apiRef.current.subscribeEvent('virtualScrollerContentSizeChange', {
                        "useGridVirtualScroller.useRunOnce.unsubscribeContentSizeChange": (params)=>{
                            if (!isScrollRestored.left && params.columnsTotalWidth) {
                                scroller.scrollLeft = left;
                                ignoreNextScrollEvent.current = true;
                                isScrollRestored.left = true;
                            }
                            if (!isScrollRestored.top && params.contentHeight) {
                                scroller.scrollTop = top;
                                ignoreNextScrollEvent.current = true;
                                isScrollRestored.top = true;
                            }
                            if (isScrollRestored.left && isScrollRestored.top) {
                                unsubscribeContentSizeChange();
                            }
                        }
                    }["useGridVirtualScroller.useRunOnce.unsubscribeContentSizeChange"]);
                    return unsubscribeContentSizeChange;
                }
            }
            return undefined;
        }
    }["useGridVirtualScroller.useRunOnce"]);
    apiRef.current.register('private', {
        updateRenderContext: forceUpdateRenderContext
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridApiEventHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridApiOptionHandler"])(apiRef, 'sortedRowsSet', forceUpdateRenderContext);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridApiEventHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridApiOptionHandler"])(apiRef, 'paginationModelChange', forceUpdateRenderContext);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridApiEventHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridApiOptionHandler"])(apiRef, 'columnsChange', forceUpdateRenderContext);
    return {
        renderContext,
        setPanels,
        getRows,
        getContainerProps: ()=>({
                ref: mainRefCallback
            }),
        getScrollerProps: ()=>({
                ref: scrollerRef,
                onScroll: handleScroll,
                onWheel: handleWheel,
                onTouchMove: handleTouchMove,
                style: scrollerStyle,
                role: 'presentation',
                // `tabIndex` shouldn't be used along role=presentation, but it fixes a Firefox bug
                // https://github.com/mui/mui-x/pull/13891#discussion_r1683416024
                tabIndex: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isFirefox ? -1 : undefined
            }),
        getContentProps: ()=>({
                style: contentSize,
                role: 'presentation',
                ref: onContentSizeApplied
            }),
        getRenderZoneProps: ()=>({
                role: 'rowgroup'
            }),
        getScrollbarVerticalProps: ()=>({
                ref: scrollbarVerticalRef,
                role: 'presentation',
                scrollPosition
            }),
        getScrollbarHorizontalProps: ()=>({
                ref: scrollbarHorizontalRef,
                role: 'presentation',
                scrollPosition
            }),
        getScrollAreaProps: ()=>({
                scrollPosition
            })
    };
};
// dimension selectors
function needsHorizontalScrollbarSelector(state) {
    return state.dimensions.viewportOuterSize.width > 0 && state.dimensions.columnsTotalWidth > state.dimensions.viewportOuterSize.width;
}
function inputsSelector(apiRef, rootProps, enabledForRows, enabledForColumns) {
    const dimensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$dimensions$2f$gridDimensionsSelectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridDimensionsSelector"])(apiRef.current.state);
    const currentPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridVisibleRows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVisibleRows"])(apiRef, rootProps);
    const visibleColumns = rootProps.unstable_listView ? [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$listView$2f$gridListViewSelectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridListColumnSelector"])(apiRef.current.state)
    ] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$columns$2f$gridColumnsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridVisibleColumnDefinitionsSelector"])(apiRef);
    const hiddenCellsOriginMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowSpanningSelectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridRowSpanningHiddenCellsOriginMapSelector"])(apiRef);
    const lastRowId = apiRef.current.state.rows.dataRowIds.at(-1);
    const lastColumn = visibleColumns.at(-1);
    return {
        enabledForRows,
        enabledForColumns,
        apiRef,
        autoHeight: rootProps.autoHeight,
        rowBufferPx: rootProps.rowBufferPx,
        columnBufferPx: rootProps.columnBufferPx,
        leftPinnedWidth: dimensions.leftPinnedWidth,
        columnsTotalWidth: dimensions.columnsTotalWidth,
        viewportInnerWidth: dimensions.viewportInnerSize.width,
        viewportInnerHeight: dimensions.viewportInnerSize.height,
        lastRowHeight: lastRowId !== undefined ? apiRef.current.unstable_getRowHeight(lastRowId) : 0,
        lastColumnWidth: lastColumn?.computedWidth ?? 0,
        rowsMeta: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsMetaSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridRowsMetaSelector"])(apiRef.current.state),
        columnPositions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$columns$2f$gridColumnsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridColumnPositionsSelector"])(apiRef),
        rows: currentPage.rows,
        range: currentPage.range,
        pinnedColumns: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$columns$2f$gridColumnsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridVisiblePinnedColumnDefinitionsSelector"])(apiRef),
        visibleColumns,
        hiddenCellsOriginMap,
        listView: rootProps.unstable_listView ?? false,
        virtualizeColumnsWithAutoRowHeight: rootProps.virtualizeColumnsWithAutoRowHeight
    };
}
function computeRenderContext(inputs, scrollPosition, scrollCache) {
    const renderContext = {
        firstRowIndex: 0,
        lastRowIndex: inputs.rows.length,
        firstColumnIndex: 0,
        lastColumnIndex: inputs.visibleColumns.length
    };
    if (inputs.listView) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, renderContext, {
            lastColumnIndex: 1
        });
    }
    const { top, left } = scrollPosition;
    const realLeft = Math.abs(left) + inputs.leftPinnedWidth;
    if (inputs.enabledForRows) {
        // Clamp the value because the search may return an index out of bounds.
        // In the last index, this is not needed because Array.slice doesn't include it.
        let firstRowIndex = Math.min(getNearestIndexToRender(inputs, top, {
            atStart: true,
            lastPosition: inputs.rowsMeta.positions[inputs.rowsMeta.positions.length - 1] + inputs.lastRowHeight
        }), inputs.rowsMeta.positions.length - 1);
        // If any of the cells in the `firstRowIndex` is hidden due to an extended row span,
        // Make sure the row from where the rowSpan is originated is visible.
        const rowSpanHiddenCellOrigin = inputs.hiddenCellsOriginMap[firstRowIndex];
        if (rowSpanHiddenCellOrigin) {
            const minSpannedRowIndex = Math.min(...Object.values(rowSpanHiddenCellOrigin));
            firstRowIndex = Math.min(firstRowIndex, minSpannedRowIndex);
        }
        const lastRowIndex = inputs.autoHeight ? firstRowIndex + inputs.rows.length : getNearestIndexToRender(inputs, top + inputs.viewportInnerHeight);
        renderContext.firstRowIndex = firstRowIndex;
        renderContext.lastRowIndex = lastRowIndex;
    }
    if (inputs.enabledForColumns) {
        let firstColumnIndex = 0;
        let lastColumnIndex = inputs.columnPositions.length;
        let hasRowWithAutoHeight = false;
        const [firstRowToRender, lastRowToRender] = getIndexesToRender({
            firstIndex: renderContext.firstRowIndex,
            lastIndex: renderContext.lastRowIndex,
            minFirstIndex: 0,
            maxLastIndex: inputs.rows.length,
            bufferBefore: scrollCache.buffer.rowBefore,
            bufferAfter: scrollCache.buffer.rowAfter,
            positions: inputs.rowsMeta.positions,
            lastSize: inputs.lastRowHeight
        });
        if (!inputs.virtualizeColumnsWithAutoRowHeight) {
            for(let i = firstRowToRender; i < lastRowToRender && !hasRowWithAutoHeight; i += 1){
                const row = inputs.rows[i];
                hasRowWithAutoHeight = inputs.apiRef.current.rowHasAutoHeight(row.id);
            }
        }
        if (!hasRowWithAutoHeight || inputs.virtualizeColumnsWithAutoRowHeight) {
            firstColumnIndex = binarySearch(realLeft, inputs.columnPositions, {
                atStart: true,
                lastPosition: inputs.columnsTotalWidth
            });
            lastColumnIndex = binarySearch(realLeft + inputs.viewportInnerWidth, inputs.columnPositions);
        }
        renderContext.firstColumnIndex = firstColumnIndex;
        renderContext.lastColumnIndex = lastColumnIndex;
    }
    const actualRenderContext = deriveRenderContext(inputs, renderContext, scrollCache);
    return actualRenderContext;
}
function getNearestIndexToRender(inputs, offset, options) {
    const lastMeasuredIndexRelativeToAllRows = inputs.apiRef.current.getLastMeasuredRowIndex();
    let allRowsMeasured = lastMeasuredIndexRelativeToAllRows === Infinity;
    if (inputs.range?.lastRowIndex && !allRowsMeasured) {
        // Check if all rows in this page are already measured
        allRowsMeasured = lastMeasuredIndexRelativeToAllRows >= inputs.range.lastRowIndex;
    }
    const lastMeasuredIndexRelativeToCurrentPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(lastMeasuredIndexRelativeToAllRows - (inputs.range?.firstRowIndex || 0), 0, inputs.rowsMeta.positions.length);
    if (allRowsMeasured || inputs.rowsMeta.positions[lastMeasuredIndexRelativeToCurrentPage] >= offset) {
        // If all rows were measured (when no row has "auto" as height) or all rows before the offset
        // were measured, then use a binary search because it's faster.
        return binarySearch(offset, inputs.rowsMeta.positions, options);
    }
    // Otherwise, use an exponential search.
    // If rows have "auto" as height, their positions will be based on estimated heights.
    // In this case, we can skip several steps until we find a position higher than the offset.
    // Inspired by https://github.com/bvaughn/react-virtualized/blob/master/source/Grid/utils/CellSizeAndPositionManager.js
    return exponentialSearch(offset, inputs.rowsMeta.positions, lastMeasuredIndexRelativeToCurrentPage, options);
}
/**
 * Accepts as input a raw render context (the area visible in the viewport) and adds
 * computes the actual render context based on pinned elements, buffer dimensions and
 * spanning.
 */ function deriveRenderContext(inputs, nextRenderContext, scrollCache) {
    const [firstRowToRender, lastRowToRender] = getIndexesToRender({
        firstIndex: nextRenderContext.firstRowIndex,
        lastIndex: nextRenderContext.lastRowIndex,
        minFirstIndex: 0,
        maxLastIndex: inputs.rows.length,
        bufferBefore: scrollCache.buffer.rowBefore,
        bufferAfter: scrollCache.buffer.rowAfter,
        positions: inputs.rowsMeta.positions,
        lastSize: inputs.lastRowHeight
    });
    const [initialFirstColumnToRender, lastColumnToRender] = getIndexesToRender({
        firstIndex: nextRenderContext.firstColumnIndex,
        lastIndex: nextRenderContext.lastColumnIndex,
        minFirstIndex: inputs.pinnedColumns.left.length,
        maxLastIndex: inputs.visibleColumns.length - inputs.pinnedColumns.right.length,
        bufferBefore: scrollCache.buffer.columnBefore,
        bufferAfter: scrollCache.buffer.columnAfter,
        positions: inputs.columnPositions,
        lastSize: inputs.lastColumnWidth
    });
    const firstColumnToRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$columns$2f$gridColumnsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirstNonSpannedColumnToRender"])({
        firstColumnToRender: initialFirstColumnToRender,
        apiRef: inputs.apiRef,
        firstRowToRender,
        lastRowToRender,
        visibleRows: inputs.rows
    });
    return {
        firstRowIndex: firstRowToRender,
        lastRowIndex: lastRowToRender,
        firstColumnIndex: firstColumnToRender,
        lastColumnIndex: lastColumnToRender
    };
}
/**
 * Use binary search to avoid looping through all possible positions.
 * The `options.atStart` provides the possibility to match for the first element that
 * intersects the screen, even if said element's start position is before `offset`. In
 * other words, we search for `offset + width`.
 */ function binarySearch(offset, positions, options = undefined, sliceStart = 0, sliceEnd = positions.length) {
    if (positions.length <= 0) {
        return -1;
    }
    if (sliceStart >= sliceEnd) {
        return sliceStart;
    }
    const pivot = sliceStart + Math.floor((sliceEnd - sliceStart) / 2);
    const position = positions[pivot];
    let isBefore;
    if (options?.atStart) {
        const width = (pivot === positions.length - 1 ? options.lastPosition : positions[pivot + 1]) - position;
        isBefore = offset - width < position;
    } else {
        isBefore = offset <= position;
    }
    return isBefore ? binarySearch(offset, positions, options, sliceStart, pivot) : binarySearch(offset, positions, options, pivot + 1, sliceEnd);
}
function exponentialSearch(offset, positions, index, options = undefined) {
    let interval = 1;
    while(index < positions.length && Math.abs(positions[index]) < offset){
        index += interval;
        interval *= 2;
    }
    return binarySearch(offset, positions, options, Math.floor(index / 2), Math.min(index, positions.length));
}
function getIndexesToRender({ firstIndex, lastIndex, bufferBefore, bufferAfter, minFirstIndex, maxLastIndex, positions, lastSize }) {
    const firstPosition = positions[firstIndex] - bufferBefore;
    const lastPosition = positions[lastIndex] + bufferAfter;
    const firstIndexPadded = binarySearch(firstPosition, positions, {
        atStart: true,
        lastPosition: positions[positions.length - 1] + lastSize
    });
    const lastIndexPadded = binarySearch(lastPosition, positions);
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(firstIndexPadded, minFirstIndex, maxLastIndex),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(lastIndexPadded, minFirstIndex, maxLastIndex)
    ];
}
function areRenderContextsEqual(context1, context2) {
    if (context1 === context2) {
        return true;
    }
    return context1.firstRowIndex === context2.firstRowIndex && context1.lastRowIndex === context2.lastRowIndex && context1.firstColumnIndex === context2.firstColumnIndex && context1.lastColumnIndex === context2.lastColumnIndex;
}
function computeOffsetLeft(columnPositions, renderContext, pinnedLeftLength) {
    const left = (columnPositions[renderContext.firstColumnIndex] ?? 0) - (columnPositions[pinnedLeftLength] ?? 0);
    return Math.abs(left);
}
function directionForDelta(dx, dy) {
    if (dx === 0 && dy === 0) {
        return ScrollDirection.NONE;
    }
    /* eslint-disable */ if (Math.abs(dy) >= Math.abs(dx)) {
        if (dy > 0) {
            return ScrollDirection.DOWN;
        } else {
            return ScrollDirection.UP;
        }
    } else {
        if (dx > 0) {
            return ScrollDirection.RIGHT;
        } else {
            return ScrollDirection.LEFT;
        }
    }
/* eslint-enable */ }
function bufferForDirection(isRtl, direction, rowBufferPx, columnBufferPx, verticalBuffer, horizontalBuffer) {
    if (isRtl) {
        switch(direction){
            case ScrollDirection.LEFT:
                direction = ScrollDirection.RIGHT;
                break;
            case ScrollDirection.RIGHT:
                direction = ScrollDirection.LEFT;
                break;
            default:
        }
    }
    switch(direction){
        case ScrollDirection.NONE:
            return {
                rowAfter: rowBufferPx,
                rowBefore: rowBufferPx,
                columnAfter: columnBufferPx,
                columnBefore: columnBufferPx
            };
        case ScrollDirection.LEFT:
            return {
                rowAfter: 0,
                rowBefore: 0,
                columnAfter: 0,
                columnBefore: horizontalBuffer
            };
        case ScrollDirection.RIGHT:
            return {
                rowAfter: 0,
                rowBefore: 0,
                columnAfter: horizontalBuffer,
                columnBefore: 0
            };
        case ScrollDirection.UP:
            return {
                rowAfter: 0,
                rowBefore: verticalBuffer,
                columnAfter: 0,
                columnBefore: 0
            };
        case ScrollDirection.DOWN:
            return {
                rowAfter: verticalBuffer,
                rowBefore: 0,
                columnAfter: 0,
                columnBefore: 0
            };
        default:
            // eslint unable to figure out enum exhaustiveness
            throw new Error('unreachable');
    }
}
}}),
}]);

//# sourceMappingURL=95a37_%40mui_x-data-grid_hooks_features_virtualization_10c970._.js.map